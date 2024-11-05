import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgLink } from "react-icons/cg";

function PublicationsCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.demoLink} target="_blank">
        <CgLink style={{ marginBottom: "2px" }} /> &nbsp;
          {props.isBlog ? "View Publication" : "GitHub"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default PublicationsCards;
