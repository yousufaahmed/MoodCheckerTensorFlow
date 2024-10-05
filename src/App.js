import Header from './components/header';
import Footer from './components/footer';
import Chart from './components/chart';
import Headline from './components/headline';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import apiKey from './secret.js'

const apiUrl = `https://api.thenewsapi.com/v1/news/top`

function App() {

  var headlines = "";

  // fetch(apiUrl, {
  //   method: 'GET', // or 'POST', 'PUT', etc.
  //   headers: {
  //     'Authorization': `Bearer ${apiKey}`,  // API key in the Authorization header
  //     'Content-Type': 'application/json'  // Specify content type if needed
  //   }
  // })
  //   .then(response => response.json())  // Parsing the JSON response
  //   .then(data => {
  //     headlines = data.data[0].title;  // Handling the response data
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);  // Handling errors
  //   });

  headlines = "THIS IS THE NEWS"

  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Row>
          <Col><Chart></Chart></Col>
          <Col><Headline headline = {headlines}></Headline></Col>
        </Row>
    </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
