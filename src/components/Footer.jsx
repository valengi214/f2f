// components/Footer.jsx

function Footer() {
    return (
      <footer className="text-center py-4 mt-5" style={{ backgroundColor: "#a3cca3", color: "#fff" }}>
        <div>
          <p className="mb-2 fw-bold">문의 및 요청</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0o-qp4XHL1YsCQ2GvCiQ1eVdqsGFyvaeAGt-a7ROInhgZBQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block text-white text-decoration-underline mb-1"
          >
            🛠️ 문의 및 건의 사항
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdMYbvhFGg0R0SAfEYpEQtVBGlFjY2eo7OY6ep2dDHw3Z8GDw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block text-white text-decoration-underline"
          >
            📝 여성 기사님 추가 요청
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  