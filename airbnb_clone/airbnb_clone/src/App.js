import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Joke from './components/Joke';
import jokesData from "./jokesData";

function App() {

  // const jokeElements = jokesData.map(joke => {
  //   return <Joke setup= {joke.setup} punchline= {joke.punchline}/>
  // })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img="./image/image 12.png"
        rating="5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />

      <div>
        <h1>Practice</h1>
          <Joke setup="바보" punchline="바보 아니다" />
      </div>
    </div>
  );
}

export default App;
