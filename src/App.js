import { users } from "./users";
import { Card } from "./components/Card";
import React from 'react';
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      {users.map((user) => (
        <Card {...user} />
      ))}
    </Container>
  );
}

export default App;
