import React from 'react'
import { QRCode } from 'react-qrcode-logo';


export const LiveQrCode = ({value}) => {
  return (
    <QRCode value={value} logoImage="https://example.com/logo.png" />
  )
}


export default LiveQrCode