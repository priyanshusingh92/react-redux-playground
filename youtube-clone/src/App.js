import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";

function App() {
  const menuShow = useSelector((store) => store.menubar.showSidebar);

  return (
    <>
      <Header />
      <div className="flex">
        {menuShow && <Sidebar />}
        <Body />
      </div>
    </>
  );
}

export default App;
