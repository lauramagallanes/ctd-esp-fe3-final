
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./utils/routes";
import { useGlobalStates } from "./Context/Context";
import PublicLayout from "./Layout/PublicLayout";


function App() {
  const { state } = useGlobalStates();
  const themeClass = state.theme === "dark" ? "dark" : "light";
  return (
      <div className={`App ${themeClass}`} >
         
          <Routes>
            <Route path={routes.inicio} element={<PublicLayout/>}>
              <Route path={routes.inicio} element={<Home/>}/>
              <Route path={routes.contacto} element={<Contact />}/>
              <Route path={routes.destacados} element={<Favs />}/>
              <Route path={routes.detalleDentista} element={<Detail />}/>
              <Route path={routes.pnf} element={<h1>Page not found - Error 404</h1>}/>
            </Route>
          </Routes>
          
      </div>
  );
}

export default App;
