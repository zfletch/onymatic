import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function Epigram({ eventKey, word, epigram: { name, url, lines } }) {
  // return (
  //   <li>
  //     {name}
  //     {url}
  //     {lines[0]}
  //   </li>
  // );


  // return (
  //   <Card>
  //     <Card.Header>
  //       <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
  //         {name} - <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
  //       </Accordion.Toggle>
  //     </Card.Header>
  //     <Accordion.Collapse eventKey={eventKey}>
  //       <Card.Body>{lines[0]}</Card.Body>
  //     </Accordion.Collapse>
  //   </Card>
  // );

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
