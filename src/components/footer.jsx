import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Footer() {
  
    return (
      <Navbar sticky='bottom' expand="lg" className="bg-body-tertiary">
        <Container>
            <div className='text-center p-3'>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='localHost:3000'>Moodchecker.com</a>
            </div>
        </Container>
      </Navbar>
    );
  }
  
  export default Footer;