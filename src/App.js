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

async function apiCall() {
  try {
    const response = await fetch("http://127.0.0.1:5000/", {
      method: 'GET'
    });
    const data = await response.json();
    return data;  // Return the headline so we can use it in App
  } catch (error) {
      console.error('Error:', error);
      return '';  // Return an empty string in case of error
  }
}

function App() {

  const [headlines, setHeadlines] = useState('');
  const [moodsData, setMoods] = useState('');

  useEffect(() => {
    async function fetchHeadlines() {
      const data = await apiCall();
      setHeadlines(data.newsTitle);
      setMoods(data.estimated_mood);
    }
    fetchHeadlines();
  }, []);

  const maxMood = Math.max(...moodsData);
  if (isNaN(maxMood)) {
    console.error("Invalid maxMood value.");
  }
  
  var moodArray = [];
  for (let i = 0; i < moodsData.length; i++) {
    const moodValue = moodsData[i];
    
    if (isNaN(moodValue)) {
      console.warn(`NaN encountered at index ${i}. Using default value.`);
      moodArray.push(0);
    } else if (moodValue === maxMood) {
      moodArray.push(100);
    } else if (moodValue > -2.0) {
      moodArray.push(50);
    } else {
      moodArray.push(0);
    }
  }

  moodArray = moodArray.map(value => (isNaN(value) ? 0 : value));

  return (
    <div className="App">
      <Header></Header>
      <Headline headline = {headlines}></Headline>
      <Container>
        <Col>
          <Row>
            <Faces moodArray = {moodArray}></Faces>
          </Row>
          <Row>
            <Chart moodArray = {moodArray}></Chart>
          </Row>
        </Col>
    </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
