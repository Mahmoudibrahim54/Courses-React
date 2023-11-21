import "./App.css";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesList from "./pages/CoursesList";
import Course from "./pages/Course";
import { API } from "./api/api";
import { useEffect, useState } from "react";
import NavBar from "./components/navigation/NavBar";

function App() {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    API.get("products").then((response) => setCoursesData(response.data.data));
  }, []);

  return (
    <div className="App h-screen flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage data={coursesData} />} />
        <Route path="/courses" element={<CoursesList data={coursesData} />} />
        <Route path="/Course/:id" element={<Course />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
