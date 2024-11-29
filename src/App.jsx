
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./utils/routes";


function App() {
  return (
      <div className="App">
          <Navbar/>
        
          <Routes>
            <Route path={routes.inicio} element={<Home/>}/>
            <Route path={routes.contacto} element={<Contact />}/>
            <Route path={routes.destacados} element={<Favs />}/>
            <Route path={routes.detalleDentista} element={<Detail />}/>
            <Route
          path={routes.pnf}
          element={<h1>Page not found - Error 404</h1>}
        />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
