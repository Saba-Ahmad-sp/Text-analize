import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" about="About"/>
      <div className="container my-3">
        <h1></h1>
        <TextForm heading="Enter text to analyze below"/>
        </div>

    </div>
  );
}

export default App;
