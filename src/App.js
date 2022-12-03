import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Rent from "./Components/Rent/Rent";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Rent></Rent>
      <Footer></Footer>
    </div>
  );
}

export default App;
