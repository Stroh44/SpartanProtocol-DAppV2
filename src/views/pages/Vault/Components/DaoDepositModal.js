import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Col,
  Input,
  Row,
  FormGroup,
  Card,
  CustomInput,
} from 'reactstrap'
import { Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import HelmetLoading from '../../../../components/Loaders/HelmetLoading'
import { daoDeposit } from '../../../../store/dao/actions'
import { useDao } from '../../../../store/dao/selector'
import { usePool } from '../../../../store/pool'
import { BN, formatFromWei } from '../../../../utils/bigNumber'
import { getExplorerTxn } from '../../../../utils/extCalls'
import Approval from '../../../../components/Approval/Approval'
import { getAddresses } from '../../../../utils/web3'

const DaoDepositModal = (props) => {
  const [percentage, setpercentage] = useState('0')
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const pool = usePool()
  const dao = useDao()
  const wallet = useWallet()
  const addr = getAddresses()
  const [showModal, setshowModal] = useState(false)
  const [loading, setloading] = useState(false)
  const [stage, setstage] = useState(0)
  const [lockoutConfirm, setLockoutConfirm] = useState(false)
  const pool1 = pool.poolDetails.filter(
    (i) => i.tokenAddress === props.tokenAddress,
  )[0]
  const token = pool.tokenDetails.filter(
    (i) => i.address === props.tokenAddress,
  )[0]

  const getToken = (_tokenAddr) =>
    pool.tokenDetails.filter((i) => i.address === _tokenAddr)[0]

  const deposit = () => BN(percentage).div(100).times(pool1.balance).toFixed(0)

  return (
    <>
      <Button
        color="primary"
        className="btn btn-primary p-2"
        block
        onClick={() => setshowModal(true)}
        disabled={props.disabled}
      >
        {t('deposit')}
      </Button>
      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Card className="card-body mb-0">
          <Row className="">
            <Col xs="10">
              <h4 className="modal-title">{t('deposit')}</h4>
            </Col>
            <Col xs="2">
              <Button
                onClick={() => setshowModal(false)}
                className="btn btn-transparent mt-4"
              >
                <i className="icon-small icon-close" />
              </Button>
            </Col>
          </Row>
          {!loading && stage > 0 && (
            <Row className="my-1">
              <Col xs="12" className="text-left mb-4">
                <span>
                  <div className="text-card">{t('txnComplete')}</div>{' '}
                  {t('viewBscScan')}{' '}
                  <a
                    href={getExplorerTxn(dao.deposit.transactionHash)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-extra-small icon-scan ml-n2" />
                  </a>
                </span>
              </Col>

              <Col xs="12" className="">
                <Button color="primary" onClick={() => setshowModal(false)}>
                  {t('close')}
                </Button>
              </Col>
            </Row>
          )}
          {loading && <HelmetLoading />}
          {!loading && stage <= 0 && (
            <>
              <Row className="my-1">
                <Col xs="auto" className="text-card">
                  {t('amount')}
                </Col>
                <Col className="text-right output-card">
                  {formatFromWei(deposit())} {token.symbol}p
                </Col>
              </Row>
              <Row className="">
                <Col xs="12">
                  <FormGroup>
                    <Input
                      type="range"
                      name="range"
                      id="daoVaultSlider"
                      onChange={(e) => setpercentage(e.target.value)}
                      min="0"
                      max="100"
                      defaultValue="0"
                      className="no-ui"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row xs="12" className="my-2">
                <Col xs="12" className="output-card">
                  This deposit will disable withdraw on all staked LP tokens for
                  24 hours:
                </Col>
              </Row>
              <Row xs="12" className="">
                <Col xs="auto" className="text-card">
                  This stake locked
                </Col>
                <Col className="text-right output-card">
                  {formatFromWei(deposit())} {token.symbol}p
                </Col>
              </Row>
              {pool.poolDetails
                .filter((i) => i.staked > 0)
                .map((i) => (
                  <Row xs="12" key={i.address} className="">
                    <Col xs="auto" className="text-card">
                      Existing stake locked
                    </Col>
                    <Col className="text-right output-card">
                      {formatFromWei(i.staked)}{' '}
                      {getToken(i.tokenAddress)?.symbol}p
                    </Col>
                  </Row>
                ))}
              <FormGroup>
                <div className="text-center mt-3">
                  <CustomInput
                    type="switch"
                    id="confirmLockout"
                    label="Confirm 24hr withdraw lockout"
                    checked={lockoutConfirm}
                    onChange={() => setLockoutConfirm(!lockoutConfirm)}
                  />
                </div>
              </FormGroup>
              <Row className="mt-2">
                {wallet?.account && (
                  <Approval
                    tokenAddress={pool1.address}
                    symbol={`${token.symbol}p`}
                    walletAddress={wallet?.account}
                    contractAddress={addr.dao}
                    txnAmount={deposit()}
                    assetNumber="1"
                  />
                )}
                <Col className="hide-if-prior-sibling">
                  <Button
                    color="primary"
                    block
                    onClick={async () => {
                      setloading(true)
                      await dispatch(
                        daoDeposit(pool1.address, deposit(), wallet),
                      )
                      setstage(stage + 1)
                      setloading(false)
                    }}
                    disabled={deposit() <= 0 || !lockoutConfirm}
                  >
                    {t('confirm')}
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Card>
      </Modal>
    </>
  )
}

export default DaoDepositModal
