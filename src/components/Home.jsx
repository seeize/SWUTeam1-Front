import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from './Header';
import Banner from './CarouseBanner';
import { jobPostsData, myResumeData } from './home-data';
import '../assets/sass/section/Home.scss';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="container">
      <Header />
      <main className="Home-content">
        <div className="Home-Banner">
          <Banner />
        </div>
        <section className="Home-job-posts">
          <h2>관심 채용 공고</h2>

          <button className="Home-add-post">
            <img
              src={require('../assets/img/icons/tabler_plus.png')}
              alt="+"
              className="Home-plus_icon"
            />
            추가하기
          </button>

          <div className="Home-post-list">
            {jobPostsData.map((post, index) => (
              <div key={index} className="Home-post-item">
                {post.title}
                <br />
                <span>{post.date}</span>
              </div>
            ))}
          </div>

          <div className="Home-more">더보기</div>
        </section>

        <section className="Home-my-resume">
          <h2>내 이력서</h2>
          <button
            className="Home-add-resume"
            onClick={() => navigate('/resumeform')} // 함수 없이 바로 사용
          >
            <img
              src={require('../assets/img/icons/tabler_plus.png')}
              alt="+"
              className="Home-plus_icon"
            />
            새 이력서 작성하기
          </button>
          <div className="Home-resume-item">
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

export default Home;
