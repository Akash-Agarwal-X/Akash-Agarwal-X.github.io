// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   DiMysql,
//   DiPostgresql,
// } from "react-icons/di";
// import {
//   SiMongodb,
// } from "react-icons/si";

// function DBStack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMysql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMongodb />
//       </Col>
//     </Row>
//   );
// }

// export default DBStack;

import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import {
  SiMongodb,
} from "react-icons/si";

function DBStack() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "30px" }}>
        {[
          { icon: <DiPostgresql />, label: "PostgreSQL" },
          { icon: <DiMysql />, label: "MySQL" },
          { icon: <SiMongodb />, label: "MongoDB" },
        ].map((db, index) => (
          <Col xs={4} md={2} className="tech-icon-container" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front side with icon */}
                <div className="flip-card-front tech-icons">
                  {db.icon}
                </div>
                {/* Back side with text */}
                <div className="flip-card-back tech-icons">
                  <p style={{ fontSize: '24px' }}>{db.label}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DBStack;

