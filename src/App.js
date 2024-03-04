import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './App.css';
import './index.css';
import Service from "./pages/Services";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

function App() {
  return (
   <BrowserRouter>
      <Routes>!
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Services" element={<Service/>} />
          <Route path="Login" element={<Login />}/>
          <Route path="Upload" element={<Upload />}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
