import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Quote from "./Quote";

function App() {
  const [show, setShow] = useState();

  const url = "https://api.adviceslip.com/advice";

  useEffect(() => {
    async function getdata() {
      const request = await axios.get(url);
      setShow(request.data.slip.advice);
      return request;
    }
    getdata();
  }, []);

  console.log(show);

  return (
    <div className="app">
      <Quote show={show} setShow={setShow} />
    </div>
  );
}

export default App;
