import React from "react";
import Title from "./Components/Title";
import Ingredients from "./Components/Ingredients";
import Steps from "./Components/Steps";
import Footer from "./Components/Footer";
import './App.css'




function App() {
    return (
        <div className="App">
          <Title/>
          <Ingredients/>
          <Steps/>
          <Footer/>
        </div>
      );
    };

    export default App;
    
