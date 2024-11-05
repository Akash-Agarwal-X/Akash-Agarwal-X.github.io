// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiC,
//   SiPython,
//   SiHtml5,
//   SiCss3,
// } from "react-icons/si";

// function Languagestack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiC />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiHtml5 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiCss3 />
//       </Col>
//     </Row>
//   );
// }

// export default Languagestack;
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiJava } from "react-icons/di";
import { SiC, SiPython, SiHtml5, SiCss3 } from "react-icons/si";

function Languagestack() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "30px"}}>
        {[
          { icon: <SiC />, label: "C" },
          { icon: <CgCPlusPlus />, label: "C++" },
          { icon: <SiPython />, label: "Python" },
          { icon: <DiJava />, label: "Java" },
          { icon: <DiJavascript1 />, label: "JavaScript" },
          { icon: <SiHtml5 />, label: "HTML" },
          { icon: <SiCss3 />, label: "CSS" },
        ].map((tech, index) => (
          <Col xs={4} md={2} className="tech-icon-container" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front side with icon */}
                <div className="flip-card-front tech-icons">
                  {tech.icon}
                </div>
                {/* Back side with text */}
                <div className="flip-card-back tech-icons">
                  <p style={{ fontSize: '38px' }}>{tech.label}</p> {/* Change text as needed */}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Languagestack;
