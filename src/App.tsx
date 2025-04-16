import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { Internship } from './pages/Internship';
import { InternshipProvider } from './contexts/InternshipContext';


function App() {

  return (
    <InternshipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Internship />} />
        </Routes>
      </BrowserRouter>
    </InternshipProvider>
  )
}

export default App
