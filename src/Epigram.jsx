import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function Epigram({ eventKey, word, vertical, epigram: { name, url, lines, line_letters, word_letters } }) {
  const hl_start_index = vertical ? line_letters.join('').indexOf(word) : word_letters.join('').indexOf(word);

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <a href={url} target="_blank" rel="noopener noreferrer">AP {name}</a>
      </Accordion.Header>
      <Accordion.Body>
        <div>
          {vertical && lines.map((line, index) => (
            (index >= hl_start_index && index < hl_start_index + word.length)
              ? <p key={index}><strong>{line[0]}</strong>{line.slice(1)}</p>
              : <p key={index}>{line}</p>
          ))}
          {!vertical && lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Epigram;
