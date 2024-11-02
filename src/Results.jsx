import Accordion from 'react-bootstrap/Accordion';
import epigrams from './assets/epigrams.json';
import Epigram from './Epigram.jsx';

function Results() {
  return (
    <Accordion defaultActiveKey="0">
      <Epigram epigram={epigrams[0]} word={"καλος"} eventKey={"1"} />
    </Accordion>
  )
}

export default Results;
