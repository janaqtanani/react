import logo from './logo.svg';
import ford from './ford.jpg';
import images from './images.jpg';
import goalf from './goalf.jpg';
import bmw from './bmw.jpg';



import './App.css';
import Car from './car.js'

function App() {
  //const student={name:'jana',age:20,birthday:'8/12'}
  return (
    <div class="App">
    <div class="d1">
      <Car brand="bmw" model="1998" color="red"  image={bmw} ></Car>
      <Car brand="ford" model="2020" color="white" image={ford}></Car></div>
      <div class="d2">
      <Car brand="golf" model="1999" color="black" image={goalf}></Car>
      <Car brand="g-class" model="2023" color="black" image={images}></Car></div> 
</div>
  );
}

export default App;
