import React, { useState, useEffect } from "react";
import myImage from "../utils/images/lo.png";
function Home() {
  const [universities, setUniversities] = useState([]);
  //   declaring a state variable called universities and initializing it with an empty array using the useState hook.
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?name=science")
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.log(error));
  }, []);

  //   useEffect hook to fetch data from the API and update the universities state with it.

  return (
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        {universities.map((university) => (
          <li key={university.name}>
            {university.name} - {university.country}
          </li>
        ))}
      </li>
    </ul>

    // {/* mapping over the universities state array and rendering an li element for each university in the array */}
  );
}

export default Home;
