import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
    axios.get('http://localhost:8000/api/v1/books').then((response) => {
        console.log(response.data);
    })
    axios.get('http://localhost:8000/api/v1/books/1').then((response) => {
        console.log(response.data);
    })
    axios.get('http://localhost:8000/api/v1/authors').then((response) => {
        console.log(response.data);
    })
    axios.get('http://localhost:8000/api/v1/authors/1').then((response) => {
        console.log(response.data);
    })
  return (
      <div className="App">

      </div>
  )
}

export default App;
