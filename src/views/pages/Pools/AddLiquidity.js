/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import {
  Button,
  Card,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Nav,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap'
import { useDispatch } from 'react-redux'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import AssetSelect from '../../../components/AssetSelect/AssetSelect'
import { usePoolFactory } from '../../../store/poolFactory'
import { getAddresses, getItemFromArray } from '../../../utils/web3'
import {
  BN,
  convertFromWei,
  convertToWei,
  formatFromUnits,
  formatFromWei,
} from '../../../utils/bigNumber'
import {
  calcLiquidityHoldings,
  calcLiquidityUnits,
  calcLiquidityUnitsAsym,
  calcSwapFee,
  calcValueInBase,
  calcValueInToken,
} from '../../../utils/web3Utils'
import SwapPair from '../Swap/SwapPair'
import { useWeb3 } from '../../../store/web3'
import { routerAddLiq, routerAddLiqAsym } from '../../../store/router/actions'
import Approval from '../../../components/Approval/Approval'
import HelmetLoading from '../../../components/Loaders/HelmetLoading'

const AddLiquidity = () => {
  const wallet = useWallet()
  const dispatch = useDispatch()
  const web3 = useWeb3()
  const poolFactory = usePoolFactory()
  const addr = getAddresses()
  const [activeTab, setActiveTab] = useState('addTab1')
  const [assetAdd1, setAssetAdd1] = useState('...')
  const [assetAdd2, setAssetAdd2] = useState('...')
  const [poolAdd1, setPoolAdd1] = useState('...')

  useEffect(() => {
    const { poolDetails } = poolFactory
    const getAssetDetails = () => {
      if (poolDetails.length > 0 && activeTab === 'addTab1') {
        window.localStorage.setItem('assetType1', 'token')
        window.localStorage.setItem('assetType2', 'token')
        window.localStorage.setItem('assetType3', 'pool')

        let asset1 = JSON.parse(window.localStorage.getItem('assetSelected1'))
        let asset2 = JSON.parse(window.localStorage.getItem('assetSelected2'))
        let asset3 = JSON.parse(window.localStorage.getItem('assetSelected3'))

        asset1 =
          asset1 && asset1.tokenAddress !== addr.sparta
            ? asset1
            : { tokenAddress: addr.bnb }
        asset2 = { tokenAddress: addr.sparta }
        asset3 =
          asset1.tokenAddress !== addr.sparta
            ? asset1
            : { tokenAddress: addr.bnb }

        asset1 = getItemFromArray(asset1, poolFactory.poolDetails)
        asset2 = getItemFromArray(asset2, poolFactory.poolDetails)
        asset3 = getItemFromArray(asset3, poolFactory.poolDetails)

        setAssetAdd1(asset1)
        setAssetAdd2(asset2)
        setPoolAdd1(asset3)

        window.localStorage.setItem('assetSelected1', JSON.stringify(asset1))
        window.localStorage.setItem('assetSelected2', JSON.stringify(asset2))
        window.localStorage.setItem('assetSelected3', JSON.stringify(asset3))
      } else if (poolDetails && activeTab === 'addTab2') {
        window.localStorage.setItem('assetType1', 'token')
        window.localStorage.setItem('assetType3', 'pool')

        let asset1 = JSON.parse(window.localStorage.getItem('assetSelected1'))
        let asset3 = JSON.parse(window.localStorage.getItem('assetSelected3'))

        asset1 = asset1 || { tokenAddress: addr.bnb }
        asset3 = asset1.tokenAddress !== addr.sparta ? asset1 : asset3

        asset1 = getItemFromArray(asset1, poolFactory.poolDetails)
        asset3 = getItemFromArray(asset3, poolFactory.poolDetails)

        setAssetAdd1(asset1)
        setPoolAdd1(asset3)

        window.localStorage.setItem('assetSelected1', JSON.stringify(asset1))
        window.localStorage.setItem('assetSelected3', JSON.stringify(asset3))
      }
    }

    getAssetDetails()
  }, [
    poolFactory.poolDetails,
    window.localStorage.getItem('assetSelected1'),
    window.localStorage.getItem('assetSelected2'),
    activeTab,
  ])

  const getToken = (tokenAddress) =>
    poolFactory.tokenDetails.filter((i) => i.address === tokenAddress)[0]

  const addInput1 = document.getElementById('addInput1')
  const addInput2 = document.getElementById('addInput2')
  const addInput3 = document.getElementById('addInput3')

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const clearInputs = (focusAfter) => {
    if (addInput1) {
      addInput1.value = ''
    }
    if (addInput2) {
      addInput2.value = ''
    }
    if (addInput3) {
      addInput3.value = ''
    }
    if (focusAfter === 1) {
      addInput1.focus()
    }
    if (focusAfter === 2) {
      addInput2.focus()
    }
  }

  const getBalance = (asset) => {
    if (asset === 1) {
      return getToken(assetAdd1?.tokenAddress)?.balance
    }
    if (asset === 2) {
      return getToken(assetAdd2?.tokenAddress)?.balance
    }
    return poolAdd1?.balance
  }

  //= =================================================================================//
  // 'Add Both' Functions (Re-Factor)

  const getAddBothOutputLP = () => {
    if (addInput1 && addInput2 && assetAdd1) {
      return convertFromWei(
        calcLiquidityUnits(
          convertToWei(addInput2?.value),
          convertToWei(addInput1?.value),
          assetAdd1?.baseAmount,
          assetAdd1?.tokenAmount,
          assetAdd1?.poolUnits,
        ),
      )
    }
    return '0'
  }

  //= =================================================================================//
  // 'Add Single' Functions (Re-Factor)

  const getAddSingleOutputLP = () => {
    if (addInput1 && assetAdd1) {
      return convertFromWei(
        calcLiquidityUnitsAsym(
          convertToWei(addInput1?.value),
          assetAdd1.tokenAddress === addr.sparta
            ? poolAdd1?.baseAmount
            : poolAdd1?.tokenAmount,
          poolAdd1?.poolUnits,
        ),
      )
    }
    return '0'
  }

  const getAddSingleSwapFee = () => {
    if (addInput1 && assetAdd1) {
      const swapFee = calcSwapFee(
        convertToWei(BN(addInput1?.value).div(2)),
        poolAdd1.tokenAmount,
        poolAdd1.baseAmount,
        assetAdd1.symbol !== 'SPARTA',
      )
      return swapFee
    }
    return '0'
  }

  const getInput1ValueUSD = () => {
    if (assetAdd1?.tokenAddress !== addr.sparta && addInput1?.value) {
      return calcValueInBase(
        poolAdd1.tokenAmount,
        poolAdd1.baseAmount,
        convertToWei(addInput1.value),
      ).times(web3.spartaPrice)
    }
    if (assetAdd1?.tokenAddress === addr.sparta && addInput1?.value) {
      return BN(convertToWei(addInput1.value)).times(web3.spartaPrice)
    }
    return '0'
  }

  const getInput2ValueUSD = () => {
    if (assetAdd2 && addInput2?.value) {
      return BN(convertToWei(addInput2.value)).times(web3.spartaPrice)
    }
    return '0'
  }

  const getLpValueBase = () => {
    if (assetAdd1 && addInput1?.value) {
      return calcLiquidityHoldings(
        poolAdd1.baseAmount,
        convertToWei(addInput3.value),
        poolAdd1.poolUnits,
      )
    }
    return '0'
  }

  const getLpValueToken = () => {
    if (assetAdd1 && addInput1?.value) {
      return calcLiquidityHoldings(
        poolAdd1.tokenAmount,
        convertToWei(addInput3.value),
        poolAdd1.poolUnits,
      )
    }
    return '0'
  }

  const getLpValueUSD = () => {
    if (assetAdd1 && addInput1?.value) {
      return BN(
        calcValueInBase(
          poolAdd1?.tokenAmount,
          poolAdd1?.baseAmount,
          getLpValueToken(),
        ),
      )
        .plus(getLpValueBase())
        .times(web3.spartaPrice)
    }

    return '0'
  }

  //= =================================================================================//
  // General Functions

  const handleInputChange = () => {
    if (activeTab === 'addTab1') {
      if (
        addInput1?.value &&
        addInput2 &&
        addInput2 !== document.activeElement
      ) {
        addInput2.value = calcValueInBase(
          assetAdd1.tokenAmount,
          assetAdd1.baseAmount,
          addInput1.value,
        )
        addInput3.value = getAddBothOutputLP()
      } else if (addInput2?.value && addInput1) {
        addInput1.value = calcValueInToken(
          assetAdd1.tokenAmount,
          assetAdd1.baseAmount,
          addInput2.value,
        )
      }
    } else if (activeTab === 'addTab2') {
      addInput3.value = getAddBothOutputLP()
    }
    if (activeTab === 'addTab2' && addInput1?.value > 0 && addInput3) {
      addInput3.value = getAddSingleOutputLP()
    }
  }

  useEffect(() => {
    if (activeTab === 'addTab1') {
      if (
        document.activeElement.id === 'addInput2' &&
        addInput2?.value !== ''
      ) {
        handleInputChange(addInput2?.value, false)
      } else {
        handleInputChange(addInput1?.value, true)
      }
    }

    if (activeTab === 'addTab2') {
      if (addInput1?.value !== '') {
        handleInputChange()
      } else {
        addInput1.value = '0'
        handleInputChange()
      }
      if (addInput2) {
        addInput2.value = '0'
      }
    }
  }, [addInput1?.value, addInput2?.value, assetAdd1, assetAdd2, activeTab])

  return (
    <>
      <Row>
        <Card className="card-body">
          <Nav pills className="nav-tabs-custom  mt-2 mb-4">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === 'addTab1' })}
                onClick={() => {
                  toggle('addTab1')
                }}
              >
                Add Both
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === 'addTab2' })}
                onClick={() => {
                  toggle('addTab2')
                }}
              >
                Add Single
              </NavLink>
            </NavItem>
          </Nav>
          <Row>
            <Col md={12}>
              <Card
                style={{ backgroundColor: '#25212D' }}
                className="card-body"
              >
                <Row>
                  <Col xs="4" className="">
                    <div className="">Input</div>
                  </Col>

                  {/** ******************* */}
                  <Col xs={8} className="text-right">
                    <div
                      className="balance"
                      role="button"
                      onClick={() => {
                        addInput1.value = convertFromWei(getBalance(1))
                      }}
                    >
                      Balance:{' '}
                      {poolFactory.poolDetails && formatFromWei(getBalance(1))}{' '}
                    </div>
                  </Col>
                </Row>

                <Row className="my-2">
                  <Col xs="6">
                    <div className="output-card ml-2">
                      <AssetSelect
                        priority="1"
                        filter={['token']}
                        blackList={[activeTab === 'addTab1' ? addr.sparta : '']}
                      />
                    </div>
                  </Col>
                  <Col className="text-right" xs="6">
                    <InputGroup className="m-0">
                      <Input
                        className="text-right h-100 ml-0"
                        type="text"
                        placeholder="'Input' amount..."
                        id="addInput1"
                        onInput={() => console.log('HANDLE INPUT CHANGE HERE')}
                      />
                      <InputGroupAddon
                        addonType="append"
                        role="button"
                        tabIndex={-1}
                        onKeyPress={() => clearInputs(1)}
                        onClick={() => clearInputs(1)}
                      >
                        <i className="icon-search-bar icon-close icon-light my-auto" />
                      </InputGroupAddon>
                    </InputGroup>
                    <div className="text-right">
                      ~$
                      {addInput1?.value &&
                        formatFromWei(getInput1ValueUSD(), 2)}
                    </div>
                  </Col>
                </Row>

                {activeTab === 'addTab1' && (
                  <>
                    <hr className="m-1" />
                    <Row className="my-2">
                      <Col xs="4" className="">
                        <div className="">Input</div>
                      </Col>
                      <Col xs="8" className="text-right">
                        <div className="balance">
                          Balance:{' '}
                          {poolFactory.poolDetails &&
                            formatFromWei(getBalance(2))}
                        </div>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col xs="6">
                        <div className="output-card ml-2">
                          <AssetSelect
                            priority="2"
                            filter={['token']}
                            whiteList={[addr.sparta]}
                            disabled={activeTab === 'addTab1'}
                          />
                        </div>
                      </Col>
                      <Col className="text-right" xs="6">
                        <InputGroup className="m-0">
                          <Input
                            className="text-right h-100 ml-0"
                            type="text"
                            placeholder="0"
                            id="addInput2"
                          />
                          <InputGroupAddon
                            addonType="append"
                            role="button"
                            tabIndex={-1}
                            onKeyPress={() => clearInputs(2)}
                            onClick={() => clearInputs(2)}
                          >
                            <i className="icon-search-bar icon-close icon-light my-auto" />
                          </InputGroupAddon>
                        </InputGroup>
                        <div className="text-right">
                          ~$
                          {addInput2?.value &&
                            formatFromWei(getInput2ValueUSD(), 2)}
                        </div>
                      </Col>
                    </Row>
                  </>
                )}
              </Card>

              <Card
                style={{ backgroundColor: '#25212D' }}
                className="card-body"
              >
                <Row>
                  <Col xs="4" className="">
                    <div className="">Pool</div>
                  </Col>
                  <Col xs="8" className="text-right">
                    <div className="balance">
                      Balance:{' '}
                      {poolFactory.poolDetails && formatFromWei(getBalance(3))}
                    </div>
                  </Col>
                </Row>

                <Row className="my-3">
                  <Col xs="6">
                    <div className="output-card ml-2">
                      <AssetSelect
                        priority="3"
                        filter={['pool']}
                        disabled={
                          activeTab === 'addTab1' ||
                          assetAdd1.tokenAddress !== addr.sparta
                        }
                      />
                    </div>
                  </Col>
                  <Col className="text-right" xs="6">
                    <InputGroup className="m-0">
                      <Input
                        className="text-right h-100 ml-0"
                        type="text"
                        placeholder="0"
                        id="addInput3"
                        disabled
                      />
                    </InputGroup>
                    <div className="text-right">
                      ~$
                      {addInput1?.value && formatFromWei(getLpValueUSD(), 2)}
                    </div>
                  </Col>
                </Row>
              </Card>

              {poolFactory.poolDetails && (
                <>
                  <div className="card-body">
                    <Row className="mb-2">
                      <Col xs="4" className="">
                        <div className="title-card">Input</div>
                      </Col>
                      <Col xs="8" className="text-right">
                        <div className="">
                          {formatFromUnits(addInput1?.value, 8)}{' '}
                          {getToken(assetAdd1.tokenAddress)?.symbol}
                        </div>
                        {activeTab === 'addTab1' && (
                          <div className="">
                            {formatFromUnits(addInput2?.value, 8)}{' '}
                            {getToken(assetAdd2.tokenAddress)?.symbol}
                          </div>
                        )}
                      </Col>
                    </Row>

                    {activeTab === 'addTab2' && (
                      <Row className="mb-2">
                        <Col xs="4" className="title-card">
                          <div className="">Fee</div>
                        </Col>
                        <Col xs="8" className="text-right">
                          <div className="">
                            {assetAdd1 &&
                              formatFromWei(getAddSingleSwapFee(), 8)}{' '}
                            SPARTA
                          </div>
                        </Col>
                      </Row>
                    )}

                    <Row className="mb-2">
                      <Col xs="4" className="title-card">
                        <div className="">Output</div>
                      </Col>
                      <Col xs="8" className="text-right">
                        <div className="">
                          {formatFromUnits(addInput3?.value, 8)}{' '}
                          {getToken(assetAdd1.tokenAddress)?.symbol}
                          -SPP
                        </div>
                      </Col>
                    </Row>
                  </div>
                </>
              )}
              {!poolFactory.poolDetails && (
                <HelmetLoading height="150px" width="150px" />
              )}
            </Col>
          </Row>
          <Row className="text-center">
            {assetAdd1?.tokenAddress &&
              assetAdd1?.tokenAddress !== addr.bnb &&
              wallet?.account &&
              addInput1?.value && (
                <Approval
                  tokenAddress={assetAdd1?.tokenAddress}
                  symbol={getToken(assetAdd1.tokenAddress)?.symbol}
                  walletAddress={wallet?.account}
                  contractAddress={addr.router}
                  txnAmount={convertToWei(addInput1?.value)}
                  assetNumber="1"
                />
              )}
            <Col xs="12" sm="4" md="12">
              <Button
                className="w-100 h-100 btn-primary"
                onClick={() =>
                  activeTab === 'addTab1'
                    ? dispatch(
                        routerAddLiq(
                          convertToWei(addInput2.value),
                          convertToWei(addInput1.value),
                          assetAdd1.tokenAddress,
                        ),
                      )
                    : dispatch(
                        routerAddLiqAsym(
                          convertToWei(addInput1.value),
                          assetAdd1.tokenAddress === addr.sparta,
                          poolAdd1.tokenAddress,
                        ),
                      )
                }
              >
                Join Pool
              </Button>
            </Col>
            {assetAdd2?.tokenAddress &&
              assetAdd2?.tokenAddress !== addr.bnb &&
              wallet?.account &&
              addInput2?.value && (
                <Approval
                  tokenAddress={assetAdd2?.tokenAddress}
                  symbol={getToken(assetAdd2.tokenAddress)?.symbol}
                  walletAddress={wallet?.account}
                  contractAddress={addr.router}
                  txnAmount={convertToWei(addInput2?.value)}
                  assetNumber="2"
                />
              )}
          </Row>
        </Card>
      </Row>
      {poolFactory.poolDetails && (
        <Row>
          <Col xs="12">
            <SwapPair assetSwap={poolAdd1} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default AddLiquidity
