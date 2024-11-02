import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function horizontalDisplay(lines, hlStartIndex, size) {
  let count = 0;

  return lines.map((line) => {
    const words = line.split(' ');

    return (
      <p>
        {words.map((word, index) => {
          let text;
          if (count >= hlStartIndex && count < hlStartIndex + size) {
            text = (
              <span>
                <strong>{word[0]}</strong>{word.slice(1)}
                {(index < words.length - 1) && ' '}
              </span>
            );
          } else {
            text = (
              <span>
                {word}
                {(index < words.length - 1) && ' '}
              </span>
            );
          }

          count++;

          return text;
        })}
      </p>
    );
  });
}

function Epigram({ eventKey, word, vertical, epigram: { name, url, lines, line_letters, word_letters } }) {
  const hlStartIndex = vertical ? line_letters.join('').indexOf(word) : word_letters.join('').indexOf(word);

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <a href={url} target="_blank" rel="noopener noreferrer">AP {name}</a>
      </Accordion.Header>
      <Accordion.Body>
        <div>
          {vertical && lines.map((line, index) => (
            (index >= hlStartIndex && index < hlStartIndex + word.length)
              ? <p key={index}><strong>{line[0]}</strong>{line.slice(1)}</p>
              : <p key={index}>{line}</p>
          ))}
          {!vertical && horizontalDisplay(lines, hlStartIndex, word.length)}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Epigram;
