import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <VideoContainer /> },
        { path: "/watch", element: <WatchPage /> },
      ],
    },
  ]);

  return (
    <>
      <Header />
      <div className="flex">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
