import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Results from './Results.jsx';

import './App.css'

function latinToGreek(string) {
  const characterMap = {
    'a': 'α',
    'b': 'β',
    'g': 'γ',
    'd': 'δ',
    'e': 'ε',
    'z': 'ζ',
    'h': 'η',
    'q': 'θ',
    'i': 'ι',
    'k': 'κ',
    'l': 'λ',
    'm': 'μ',
    'n': 'ν',
    'c': 'ξ',
    'o': 'ο',
    'p': 'π',
    'r': 'ρ',
    's': 'σ',
    't': 'τ',
    'u': 'υ',
    'f': 'φ',
    'x': 'χ',
    'y': 'ψ',
    'w': 'ω',
    'ς': 'σ',
  }

  return string.split('').map((c) => characterMap[c] || c).join('');
}

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
            <Form.Control onChange={(e) => { setSearch(e.target.value) }} type="text" value={latinToGreek(search)} defaultValue={search} placeholder="καλος" />
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
          <Results size={size} vertical={direction === 'vertical'} search={latinToGreek(search)} />
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
