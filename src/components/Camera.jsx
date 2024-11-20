import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/sass/section/Camera.scss';
import buttonCameraImg from '../assets/img/icons/button-camera.png';

function Camera() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [captionVisible, setCaptionVisible] = useState(true);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                alert('카메라 접근 권한이 필요합니다.');
            }
        };

        startCamera();
    }, []);

    const captureImage = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const captureWidth = 200;
        const captureHeight = 200;
        const captureX = (video.videoWidth - captureWidth) / 2;
        const captureY = (video.videoHeight - captureHeight) / 2;

        canvas.width = captureWidth;
        canvas.height = captureHeight;
        context.drawImage(video, captureX, captureY, captureWidth, captureHeight, 0, 0, captureWidth, captureHeight);

        const imageDataURL = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpeg);base64,/, "");

        const visionAPIUrl = `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyA_tJPJrushDk7N9KVrDXuFOmgonLOf1c0`;

        const requestBody = {
            requests: [
                {
                    image: { content: imageDataURL },
                    features: [{ type: "TEXT_DETECTION" }]
                }
            ]
        };

        fetch(visionAPIUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(data => {
            const recognizedText = data.responses[0].fullTextAnnotation?.text || '텍스트를 인식하지 못했습니다.';
            navigate('/result', { state: { text: recognizedText } });
        })
        .catch(err => console.error("OCR 오류:", err));
    };

    const toggleCaption = () => {
        setCaptionVisible(!captionVisible);
    };

    return (
        <div className="camera-container">
            <div className="top">
                <img
                    src={require('../assets/img/icons/caption.png')}
                    alt="상단 이미지"
                    className={`top-image ${captionVisible ? '' : 'hidden'}`}
                />
                <img
                    src={require('../assets/img/icons/Vector.png')}
                    alt="아이콘"
                    className="icon"
                    onClick={toggleCaption}
                />
            </div>

            <video ref={videoRef} autoPlay playsInline className="video-feed" />
            <div className="capture-area">
                작성한 글을 사각형 안으로<br /> 들어오게 찍어주세요!
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <button onClick={captureImage} className="capture-button" style={{ backgroundImage: `url(${buttonCameraImg})` }} />
        </div>
    );
}

export default Camera;
