import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function Epigram({ eventKey, word, epigram: { name, url, lines } }) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <a href={url} target="_blank" rel="noopener noreferrer">AP {name}</a>
      </Accordion.Header>
      <Accordion.Body>
        <div>
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Epigram;
