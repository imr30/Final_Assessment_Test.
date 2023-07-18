import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './OIP1.jpeg'; // Replace 'OIP.jpeg' with your actual logo file name and path

function App() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setPeopleData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Display the logo image */}
        </div>
        <nav>
          <ul>
            <li><a href="#person-details">Person Details</a></li>
            <li><a href="#picture-form">Picture Form</a></li>
          </ul>
        </nav>
      </header>

      <section id="person-details">
        <div className="person-info">
          <h2>Person Details</h2>
          <div id="person-data">
            {peopleData.map((person) => (
              <div key={person.id} className="person">
                <h3>{person.name}</h3>
                <p>Username: {person.username}</p>
                <p>Email: {person.email}</p>
                <p>Phone: {person.phone}</p>
                <p>Website: {person.website}</p>
                <p>Address: {person.address.street}, {person.address.suite}, {person.address.city}, {person.address.zipcode}</p>
                <p>Company: {person.company.name}</p>
                <p>Catch Phrase: {person.company.catchPhrase}</p>
                <p>BS: {person.company.bs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="picture-form">
        <div className="picture-form">
          <h2>Picture Form</h2>
          <input
            type="text"
            placeholder="Enter Picture Link"
          />
          <button>Update Picture</button>
        </div>
      </section>

      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default App;
