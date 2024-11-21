import React from 'react';
import Header from './Header';
import Banner from './CarouseBanner';
import { myResumeData } from './home-data';
import '../assets/sass/section/Home.scss';

const Myresume = () => {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <div className="Banner">
          <Banner />
        </div>

        <section className="my-resume">
          <h2>내 이력서</h2>
          <button className="add-resume">
            <img
              src={require('../assets/img/icons/tabler_plus.png')}
              alt="+"
              className="plus_icon"
            />
            새 이력서 작성하기
          </button>
          <div className="resume-item">
            {myResumeData.name}
            <img
              src={require('../assets/img/icons/orange-arrow.png')}
              alt=">"
              className="orange-arrow"
            />
            <br />
            <span>최종 수정일 {myResumeData.lastUpdated}</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Myresume;
