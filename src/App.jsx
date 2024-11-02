import { useState } from 'react'
import Container from 'react-bootstrap/Container';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">
          Epigram word search!
        </h1>
      </Container>
    </Container>
  )
}

export default App
