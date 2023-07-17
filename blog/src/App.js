import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="contacts">
        <Contact 
                  img="./image/apple_logo.png" 
                  name="Apple"
                  phone="(212) 555-1234"
                  email="mr.whiskaz@catnap.meow"
        />
        <Contact
                  img="./image/insta_logo.jpg"
                  name="Instagram"
                  phone="(000) 000-0000"
                  email="instagram@instagram"
        />
        <Contact
                  img="./image/facbook_logo.webp"
                  name="Facebook"
                  phone="(000) 000-0000"
                  email="Facbookm@Facbook"
        />
        <Contact
                  img="./image/airbnb_;logo.png"
                  name="Airbnb"
                  phone="(000) 000-0000"
                  email="Airbnb@Airbnb"
        />
      </div>
    </div>
  );
}

export default App;
