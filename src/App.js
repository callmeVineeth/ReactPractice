import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CompA from "./Components/CompA/CompA";
import CompC from "./Components/CompC/CompC";
import UserDetails from "./Components/UserDetails/UserDetails";
import React, { useState, createContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const nameState = createContext();
const personState = createContext([]);

function App() {
  const [name, setName] = useState("Simran Vadhwani");
  const person = [
    {
      id: 1,
      name: "Simran V",
      age: 24,
      role: ".Net Developer",
    },
    {
      id: 2,
      name: "Manish K",
      age: 27,
      role: "CEO",
    },
    {
      id: 3,
      name: "Sumit M",
      age: 25,
      role: "Full stack developer",
    },
    {
      id: 4,
      name: "Priya P",
      age: 25,
      role: "Front-end Developer",
    },
    {
      id: 5,
      name: "Dhruv P",
      age: 25,
      role: "Front-end Developer",
    },
  ];
  const [personDetail, setpersonDetaile] = useState(person);
  // Check if personId is present in the URL params
  const isPersonIdPresent = window.location.pathname.includes("/persondetail");
  console.log(isPersonIdPresent);
  return (
    <Router>
      <nameState.Provider value={{ name, setName }}>
        <personState.Provider value={personDetail}>
          <div>
            <div className="App">
              <Header />
            </div>             
            
            <Routes>
              <Route path="/" element={<CompA />}></Route>
                <Route path="/persondetail" element={<CompC />}>
                  <Route path=":personId" element={<UserDetails />} />
                </Route>
              </Routes>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </personState.Provider>
      </nameState.Provider>
    </Router>
  );
}

export default App;
export { nameState, personState };
