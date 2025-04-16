import './App.css'
import { app } from './firebase'
import { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { Internship } from './pages/Internship';

function App() {

  const [data, setData] = useState<any>();

  const database = getDatabase(app);

  const collectionRef = ref(database, "internships");

  const fetchData = () => {
    onValue(collectionRef, (snapshot) => {
      if (snapshot.exists()) {
        const dataItem = snapshot.val();
        setData(dataItem);  // Directly set the string value
      } else {
        console.log("No data available");
        setData("No data found");
      }
    }, (error) => {
      console.error("Error fetching data: ", error);
    });
  };



  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Internship />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
