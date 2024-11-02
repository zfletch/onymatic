import Accordion from 'react-bootstrap/Accordion';
import epigrams from './assets/epigrams.json';
import Epigram from './Epigram.jsx';

function Results({ size, vertical, search }) {
  if (search.length < size) {
    return (
      <div>Word too short</div>
    )
  }

  const matches = epigrams.filter(({ line_letters, word_letters }) => {
    if (vertical) {
      return line_letters.join('').includes(search);
    }
    return word_letters.join('').includes(search);
  });

  if (matches.length == 0) {
    return (
      <div>No results</div>
    )
  }

  return (
    <Accordion>
      {matches.map((gram, index) => (
        <Epigram key={index} epigram={gram} word={search} eventKey={index} />
      ))}
    </Accordion>
  )
}

export default Results;
