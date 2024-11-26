import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // 6버젼 createBrowserRouter
  const router = createBrowserRouter([
    {
      path: `${process.env.PUBLIC_URL}/`,
      element: <Home />,
    },
    {
      path: `${process.env.PUBLIC_URL}/movie/:id`,
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />;

  // 이전버젼 Router
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
