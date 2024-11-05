// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   DiDocker,
// } from "react-icons/di";
// import {
//   SiKubernetes,
//   SiAnsible,
// } from "react-icons/si";

// function DevOpsStack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiDocker />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiKubernetes />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAnsible />
//       </Col>
//     </Row>
//   );
// }

// export default DevOpsStack;

import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  DiDocker,
} from "react-icons/di";
import {
  SiKubernetes,
  SiAnsible,
} from "react-icons/si";

function DevOpsStack() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "30px" }}>
        {[
          { icon: <DiDocker />, label: "Docker" },
          { icon: <SiKubernetes />, label: "Kubernetes" },
          { icon: <SiAnsible />, label: "Ansible" },
        ].map((tool, index) => (
          <Col xs={4} md={2} className="tech-icon-container" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front side with icon */}
                <div className="flip-card-front tech-icons">
                  {tool.icon}
                </div>
                {/* Back side with text */}
                <div className="flip-card-back tech-icons">
                  <p style={{ fontSize: '24px' }}>{tool.label}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DevOpsStack;

