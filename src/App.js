import "./App.css";

import React, { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  const fetchData = () => {

    return fetch("https://jsonplaceholder.typicode.com/users")

      .then((res) => res.json())

      .then((d) => setData(d));

  };

  useEffect(() => {

    fetchData();

  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {

    return data.filter((data) =>

      search_parameters.some((parameter) =>

        data[parameter].toString().toLowerCase().includes(query)

      )

    );

  }

  return (

    <div className="container">

      <center>

<div className="header"> <h1>GoBananas Assignment</h1></div>
       

      </center>

      <div className="input-box">

        <input

          type="search"

          name="search-form"

          id="search-form"

          className="search-input w3-input w3-animate-input"

          onChange={(e) => setQuery(e.target.value)}

          placeholder="Search user"

        />

      </div>

      <center className="Data_Fetched">

        {search(data).map((dataObj) => {

          return (

            <div className="box">

              <div class="card">

                <div class="category"> <b>Username:</b> @{dataObj.username} </div>

                <div class="heading">

                <b>Name:</b> {dataObj.name}

                  <div class="author"><b>Email:</b>{dataObj.email}</div>

                </div>

              </div>

            </div>

          );

        })}

      </center>

    </div>

  );

}

export default App;