import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
