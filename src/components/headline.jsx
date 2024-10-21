import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import '../index.css';

function Headline({headline}) {
  
    return (
      <div className="headline">
        <h1 className="">
        {headline}
        <Badge className="hdBadge" bg="danger">New</Badge>
        </h1>
      </div>
    );
  }
  
  export default Headline;