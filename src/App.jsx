import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Results from './Results.jsx';

import './App.css'

function App() {
  const [search, setSearch] = useState('καλος')
  const [size, setSize] = useState(4)
  const [direction, setDirection] = useState('vertical')

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
            <Form.Control onChange={(e) => { setSearch(e.target.value) }} type="text" defaultValue={search} placeholder="καλος" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.Size">
            <Form.Label>Minimum length</Form.Label>
            <Form.Select onChange={(e) => { setSize(e.target.value) }} defaultValue={size}>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.Direction">
            <Form.Label>Direction of search</Form.Label>
            <Form.Check
              label="By line (vertical)"
              id="vertical"
              name="direction"
              type="radio"
              value="vertical"
              checked={direction == 'vertical'}
              onChange={(e) => { setDirection(e.target.value) }}
            />
            <Form.Check
              inline
              label="By word (horizontal)"
              id="horizontal"
              name="direction"
              type="radio"
              value="horizontal"
              checked={direction == 'horizontal'}
              onChange={(e) => { setDirection(e.target.value) }}
            />
          </Form.Group>
        </Form>
      </Container>
      <Container className="p-3 mb-4 bg-light rounded-3">
        <div>
          <Results size={size} vertical={direction === 'vertical'} search={search.replaceAll('ς', 'σ')} />
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
