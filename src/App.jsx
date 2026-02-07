import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Web from "./Components/Section2-Portfolio/Web";
import Application from "./Components/Section2-Portfolio/Application";
import PageNotFound from "./Components/Section1/PageNotFound";

const App=()=>{
  return (
    <>
      <div className="sm:overflow-x-hidden sm:gap-20 flex mx-8 xl:gap-5 py-15 text-white xl:flex-row sm:w-[80%] xl:w-[95%] sm:mx-auto sm:flex-col sm:gap:10">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio">
            <Route index path="All" element={<Portfolio />}/>
            <Route path="Web" element={<Web />}/>
            <Route path="App" element={<Application />}/>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;