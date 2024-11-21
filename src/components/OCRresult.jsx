import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/sass/section/OCRresult.scss';

const OCRresult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { text } = location.state || { text: '' };
    const [inputText, setInputText] = useState(text);

    const characterCount = inputText.length;

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleRetry = () => {
        navigate('/camera');
    };

    const handleSubmit = () => {
        if (characterCount <= 500) {
            alert('입력 완료!');
        }
    };
    
    return (
        <div className="ocr-container">
            <button className="close-button" onClick={() => navigate(-1)}>
                ✖
            </button>

            <h1 className="ocrtitle">성장과정</h1>

            <div className="result-container">
                <div 
                    className={`character-count ${characterCount > 500 ? 'over-limit' : ''}`}
                >
                    {characterCount}/500
                </div>

                <textarea
                    value={inputText}
                    onChange={handleChange}
                    className="result-textarea"
                    maxLength="1000"
                    readOnly
                />

                <button className="edit-button">수정하기</button>

                {/*맞춤법 검사 텍스트박스는 백엔드 연결 후 수정 예정*/}
                <textarea
                    className="spelling-result-textarea"
                />

                <div className="bottom-buttons">
                    <button className="retry-button" onClick={handleRetry}>
                        다시찍기
                    </button>
                    <button 
                        className="submit-button" 
                        onClick={handleSubmit}
                        disabled={characterCount > 500}
                    >
                        입력하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OCRresult;
