import { useParams, useNavigate } from "react-router-dom";
import { jobPostsData } from "../home-data";
import Header from "../components/Header";
import Banner from "../components/CarouseBanner";
import "./InterestDetail.scss";

const InterestDetail = ({ onDeletePost }) => {
  const { id } = useParams(); // URL에서 id 가져오기
  const navigate = useNavigate();

  // ID를 기반으로 해당 데이터 찾기
  const post = jobPostsData.find((item) => item.id === parseInt(id, 10));

  if (!post) {
    return (
      <div className="container">
        <Header />
        <main className="content">
          <div className="Banner">
            <Banner />
          </div>
          <section className="detail-section">
            <button className="back-button" onClick={() => navigate(-1)}>
              ← 뒤로 가기
            </button>
            <p>데이터를 찾을 수 없습니다. 뒤로 가기 버튼을 클릭하세요.</p>
          </section>
        </main>
      </div>
    );
  }

  const handleDelete = () => {
    onDeletePost(post.id); // 삭제 함수 호출
    navigate("/interest"); // 관심 공고 페이지로 이동
  };

  return (
    <div className="detail-container">
      <Header />
      <main className="detail-content">
        <div className="Banner">
          <Banner />
        </div>
        <section className="detail-section">
          <div className="title-section">
            <img
              src={require("../assets/img/icons/left-arrow.png")}
              alt="아이콘"
              className="title-icon"
              onClick={() => navigate("/interest")}
            />
            <h2 className="title">{post.title}</h2>
            <img
              src={require("../assets/img/icons/Frame 427319711.png")}
              alt="삭제"
              className="delete-icon"
              onClick={handleDelete}
            />
          </div>

          <div className="url-section">
            <p>주소</p>
            <div className="url-box">{post.url}</div>
          </div>

          <div className="memo-section">
            <textarea
              className="memo-input"
              placeholder="메모 추가하기.."
              defaultValue={post.memo || ""}
            />
          </div>

          <div className="info">
            <h3>모집 정보</h3>
            <ul>
              <li>
                모집인원 <span>{post.recruitmentCount || "0명"}</span>
              </li>
              <li>
                모집마감 <span>{post.deadline || "상시채용"}</span>
              </li>
              <li>
                채용담당자 <span>{post.recruiter || "담당자"}</span>
              </li>
              <li>
                대표전화{" "}
                <span className={post.phone ? "" : "info-none"}>
                  {post.phone || "정보 없음"}
                </span>
              </li>
              <li>
                이메일{" "}
                <span className={post.email ? "" : "info-none"}>
                  {post.email || "정보 없음"}
                </span>
              </li>
            </ul>
          </div>

          <button
            className="visit-button"
            onClick={() => window.open(post.url, "_blank")}
          >
            사이트 방문하기
          </button>
        </section>
      </main>
    </div>
  );
};

export default InterestDetail;
