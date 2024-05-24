import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Gallery from "./components/Gallery.jsx";
import Detail from "./components/Detail.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Gallery} />
        <Route path="/detail/:id" Component={Detail} />
        {/* Using the Detail component for dynamic routing */}
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
