import NavBar from "./components/navbar";
import Home from "./container/Home";

function App() {
  return (
    <div >
      <div id="header">
        <NavBar id={"header"} />
      </div>
      <div id="body">
        <Home id={"body"} />
      </div>

    </div>
  );
}

export default App;
