import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function horizontalDisplay(lines, hlStartIndex, size) {
  let count = 0;

  return lines.map((line, lineIndex) => {
    const words = line.split(/\s+/);

    return (
      <p key={lineIndex}>
        {words.map((word, wordIndex) => {
          let text;
          if (count >= hlStartIndex && count < hlStartIndex + size) {
            text = (
              <span key={`${lineIndex}-${wordIndex}`}>
                <strong>{word[0]}</strong>{word.slice(1)}
                {(wordIndex < words.length - 1) && ' '}
              </span>
            );
          } else {
            text = (
              <span key={`${lineIndex}-${wordIndex}`}>
                {word}
                {(wordIndex < words.length - 1) && ' '}
              </span>
            );
          }

          if (/[\u0370-\u03ff\u1f00-\u1fff]+/.test(word)) {
            count++;
          }

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
