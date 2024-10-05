import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import '../index.css';

function Headline({headline}) {
  
    return (
      <div className="headline">
        <h1>
        {headline}
        </h1>
        <Badge bg="danger">New</Badge>
      </div>
    );
  }
  
  export default Headline;