import { useWallet } from '@binance-chain/bsc-use-wallet'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { fallenSpartansCheck } from '../../../store/sparta/actions'
import Upgrade from './Upgrade'

const Overview = () => {
  const dispatch = useDispatch()
  const wallet = useWallet()
  const { t } = useTranslation()

  const [trigger0, settrigger0] = useState(0)
  const getData = () => {
    dispatch(fallenSpartansCheck(wallet))
  }
  useEffect(() => {
    if (trigger0 === 0) {
      getData()
    }
    const timer = setTimeout(() => {
      getData()
      settrigger0(trigger0 + 1)
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger0])

  useEffect(() => {
    settrigger0(0)
  }, [wallet.account])

  return (
    <>
      <div className="content">
        <Row className="row-480">
          <Col xs="12">
            <h2 className="text-title-small my-3 mr-2">{t('upgrade')}</h2>
          </Col>
        </Row>
        <Row className="row-480">
          <Upgrade />
        </Row>
      </div>
    </>
  )
}

export default Overview
