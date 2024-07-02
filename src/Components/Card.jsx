import React from "react";
import { Button, Card } from "bootstrap";

export const MemeCard =(props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    );
};
