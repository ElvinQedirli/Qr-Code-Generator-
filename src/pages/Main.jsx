import React, { useRef } from 'react'
import { useState } from 'react'
import  QrInput  from '../components/QrInput'
import '../assets/scss/pages/main.scss'
import { QRCode } from 'react-qrcode-logo';
import ImagePicker from '../components/İmagePicker';
import html2canvas from 'html2canvas';

export const Main = () => {
    const [qrText, setQrText] = useState("")
    const [imageURL, setImageURL] = useState('');
    const qrCodeRef = useRef(null)

    const handleImageSelect = (image) => {
        setImageURL(image);
      };

    const QrCodeValue =(e)=>{
        setQrText(e.target.value)
    }

    const downloadQRCode = async () => {
        if (qrCodeRef.current) {
          const canvas = await html2canvas(qrCodeRef.current);
          const image = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = image;
          link.download = 'qr-code.png';
          link.click();
        }
      };

    return(
        <div className='qrcode_container'>
            <h1>Qr Kod Yaradıcı App - Cryptonix</h1>
            {imageURL && (
        <div>
          <h2 style={{color:'#fff', padding: '10px 0' }}>Logo</h2>
          <img src={imageURL} alt="Selected" style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '16px' }} />
        </div>
      )}
      <div ref={qrCodeRef}>
        <h2 style={{color:'#fff', padding: '10px 0' }}>Qr Kod</h2>
        <QRCode 
        value={qrText} 
        logoImage={imageURL}
        qrStyle="fluid"
        eyeRadius={[
          { outer: 10, inner: 0 },
          { outer: 10, inner: 0 },
          { outer: 10, inner: 0 },
        ]}
        eyeColor="#55ACEE"
        fgColor="#55ACEE"
        bgColor="#ffffff"
        size={256}
        logoWidth={80}
        logoHeight={80}
        logoOpacity={1}
        logoBackgroundColor="#ffffff"
        logoBackgroundTransparent={false} 
        />
      </div>
            <QrInput
            type='text'
            value={qrText}
            placeholder='Qr Kod mətni'
            onChange={QrCodeValue}
            />
             <ImagePicker onImageSelect={handleImageSelect}/>
             <button className='download_btn' onClick={downloadQRCode}>Download QR Code</button>
        </div>
    )
}

export default Main
