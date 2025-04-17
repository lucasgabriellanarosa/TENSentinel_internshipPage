import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { Internship } from './pages/Internship';
import { InternshipProvider } from './contexts/InternshipContext';
import { Layout } from './pages/Layout';


function App() {

  return (
    <InternshipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Internship />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InternshipProvider>
  )
}

export default App
