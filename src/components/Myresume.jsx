import React from 'react';
import Header from './Header';
import Banner from './CarouseBanner';
import { useNavigate } from 'react-router-dom'; 

import { myResumeData } from './home-data';
import '../assets/sass/section/Home.scss';

const Myresume = () => {
  const navigate = useNavigate(); 

  return (
    
    <div className="container Home-container">
      <Header />
      <div className="B-menu">
        <ul className="B-menu-list">
          <li className="menu-home" onClick={() => navigate('/home')}>홈</li>
          <li onClick={() => navigate('/Interest')}>관심채용공고</li>
          <li onClick={() => navigate('/myresume')}>내 이력서</li>
          <li className="menu-logout" onClick={() => navigate('/login')}>
            로그아웃
          </li>
        </ul>
      </div>
      <main className="Home-content">
        <div className="Top-Home-Banner">
          <Banner />
        </div>
        <section className="Home-my-resume">
          <h2>내 이력서</h2>
          <button className="Home-add-resume" onClick={() => navigate('/resumeform')}>
            <img
              src={require('../assets/img/icons/tabler_plus.png')}
              alt="+"
              className="Home-plus_icon"
            />
            새 이력서 작성하기
          </button>

          <div className="Home-resume-list">
            {myResumeData.map((resume, index) => (
              <div key={index} className="Home-resume-item">
                {resume.name}
                <img
                  src={require('../assets/img/icons/orange-arrow.png')}
                  alt=">"
                  className="orange-arrow"
                />
                <br />
                <span>최종 수정일 {resume.lastUpdated}</span>
              </div>
            ))}
          </div>
        </section>

        
        <div className="Bottom-Home-Banner">
          <Banner />
        </div>
      </main>
    </div>
  );
};

export default Myresume;
