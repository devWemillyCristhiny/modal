import React from 'react'
import styled from 'styled-components';

function App() {
  return (
    <>
      <Container>
        <Button>I´m a modal</Button>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  font-size: 24px;
  cursor: pointer; 
`;

export default App;