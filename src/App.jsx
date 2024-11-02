import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

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
      <Container className="p-3 mb-4 bg-light rounded-3">
        <Form>
          <Form.Group className="mb-3" controlId="form.Search">
            <Form.Label>Find word</Form.Label>
            <Form.Control type="text" placeholder="καλος" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.Size">
            <Form.Label>Minimum length</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.Vertical">
            <Form.Label>Direction of search</Form.Label>
            <Form.Check
              label="By line (vertical)"
              name="vertical"
              type="radio"
            />
            <Form.Check
              inline
              label="By word (horizontal)"
              name="vertical"
              type="radio"
            />
          </Form.Group>
        </Form>
      </Container>
      <Container className="p-3 mb-4 bg-light rounded-3">
        <div>
          No results
        </div>
        <div>
          <ul>
          </ul>
        </div>
      </Container>
    </Container>
  )
}

export default App
