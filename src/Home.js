import React from 'react'


import { Card, CardGroup } from "react-bootstrap";
export default function Home() {
  return (
    <div>
      <CardGroup>
        <Card>
          
          <Card.Body>
            <Card.Title>Admin</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>User</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
