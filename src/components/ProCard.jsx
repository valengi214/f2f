import kakaoIcon from './assets/icons/kakaotalk.png';
import instagramIcon from './assets/icons/instargram.png';
import naverIcon from './assets/icons/naver.png';
import carrotIcon from './assets/icons/carrot.png';
import twitterIcon from './assets/icons/twitter.png';

const snsIcons = {
    kakao: kakaoIcon,
    instagram: instagramIcon,
    naver: naverIcon,
    carrot: carrotIcon,
    twitter: twitterIcon
    // 필요한 SNS 아이콘은 여기서 추가 가능
  };

function ProCard({ pro }) {
    return (
      <div className="col">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title">{pro.name}</h5>
            <p className="text-muted mb-1">
                📍 {pro.regions.map(r => `${r.sido} ${r.sigungu}`).join(', ')}
            </p>
            <p>{pro.description}</p>
            {/* 서비스 태그들 */}
            <div className="mb-2">
              {pro.services.map((s, idx) => (
                <span key={idx} className="badge bg-primary me-1">
                  {s}
                </span>
              ))}
            </div>
  
            {/* SNS 링크 아이콘 */}
          {pro.contact && Object.entries(pro.contact).map(([type, url], idx) => (
             <a
             key={idx}
             href={url}
             target="_blank"
             rel="noopener noreferrer"
             className="me-2"
             title={type}
           >
             <img
               src={snsIcons[type] }
               alt={`${type} 아이콘`}
               style={{ width: "22px", height: "22px", objectFit: "contain" }}
             />
           </a>
          ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default ProCard;
  
