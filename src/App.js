import Header from './components/header';
import Footer from './components/footer';
import Chart from './components/chart';
import Faces from './components/faces';
import Headline from './components/headline';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import './App.css';

const apiUrl = "https://api.thenewsapi.com/v1/news/top?api_token=p1Kuy373nBPFJWSpkljGnwov4a4QwstLohH75K0s&locale=us&limit=1"
// const apiUrl = `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_API_KEY}&locale=uk&limit=1`

async function apiCall() {
  try {
    console.log(apiUrl)
    const response = await fetch(apiUrl, {
      method: 'GET'
    });
    const data = await response.json();
    const headline = data.data[0].title;  // Get the first headline
    return headline;  // Return the headline so we can use it in App
  } catch (error) {
    console.error('Error:', error);
    return '';  // Return an empty string in case of error
  }
}

function App() {

  const [headlines, setHeadlines] = useState('');

  useEffect(() => {
    async function fetchHeadlines() {
      const headlineData = await apiCall();
      setHeadlines(headlineData);
    }

    fetchHeadlines();
  }, []);

  let moods = "negative";

  return (
    <div className="App">
      <Header></Header>
      <Headline headline = {headlines}></Headline>
      <Container>
        <Row>
          <Col><Chart></Chart></Col>
          <Col>
            
            <Faces mood = {moods}></Faces>
          </Col>
        </Row>
    </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
