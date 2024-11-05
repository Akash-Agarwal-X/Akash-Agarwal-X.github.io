// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiAmazonaws,
//   SiMicrosoftazure,
//   SiIbmcloud,
//   SiGooglecloud,
// } from "react-icons/si";

// function Cloudplatform() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAmazonaws />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMicrosoftazure />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiIbmcloud />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiGooglecloud />
//       </Col>
//     </Row>
//   );
// }

// export default Cloudplatform;

import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiIbmcloud,
  SiGooglecloud,
} from "react-icons/si";

function Cloudplatform() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "30px" }}>
        {[
          { icon: <SiAmazonaws />, label: "AWS" },
          { icon: <SiMicrosoftazure />, label: "Azure" },
          { icon: <SiIbmcloud />, label: "IBM Cloud" },
          { icon: <SiGooglecloud />, label: "Google Cloud" },
        ].map((platform, index) => (
          <Col xs={4} md={2} className="tech-icon-container" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front side with icon */}
                <div className="flip-card-front tech-icons">
                  {platform.icon}
                </div>
                {/* Back side with text */}
                <div className="flip-card-back tech-icons">
                  <p style={{ fontSize: '24px' }}>{platform.label}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cloudplatform;
