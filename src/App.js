import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Resume from './Components/Pages/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='resume' element={<Resume />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route
                path="*"
                element={<h1 className="display-2">Wrong page!</h1>} />

            </Routes>
        </>
      </Router>
      <Footer className="footer">

      </Footer>
    </div>
  );
}

export default App;
