import React, {useState, useEffect} from "react";
import Header from "./components/HeaderSection/Header";
import Photo from "./components/PhotoContainer/Photo";
import Text from "./components/TextContainer/Text";
import axios from "axios";
import "./App.css";

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=edUvnOvPv51tQd9Wq4lgudnDa8tbK5AlvzBDTBMP&hd=true`)
      .then(response => {
          console.log(response.data);
          setNasaData(response.data);
      })
      .catch(error => {
          console.log("There was an error in App: " + error);
      });
  }, []);

  return (
    <div className = "Page">
      <Header nasaData={nasaData}/>
      <div className="App">
        <Photo nasaData={nasaData} />
        <Text nasaData={nasaData}/>
    </div>
  </div>
  );
}

export default App;