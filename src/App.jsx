import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <Button btnText="Sono un BUTTON!!" />
      <ImageComponent
        srcImg="https://plus.unsplash.com/premium_photo-1671650124341-1f62adedf78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        altImg="foto random"
      />
    </div>
  );
}

export default App;
