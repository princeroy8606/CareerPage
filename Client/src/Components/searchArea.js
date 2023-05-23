import React, { useState } from "react";
import "../Pages/Style.css";
import Icon from "../assets/Search-icon.png";
import Location from "../assets/location-icon.png";
import Experience from "../assets/experience-icon.png";

const SearchArea = () => {
  const citiesInIndia = [
    { name: "Mumbai" },
    { name: "Delhi" },
    { name: "Bengaluru" },
    { name: "Hyderabad" },
    { name: "Ahmedabad" },
    { name: "Chennai" },
    { name: "Kolkata" },
    { name: "Pune" },
    { name: "Jaipur" },
    { name: "Surat" },
  ];

  const [Height, setHeight] = useState(false);
  const heihtControl = Height ? { height: "51.5rem" } : { height: "auto" };

  const handleSubmit = () => {
    setHeight(true);
  };

  return (
    <div className="search-area" style={heihtControl}>
      <div className="search-box-conatiner">
        <div className="search-input">
          <h5>Job Title</h5>
          <input placeholder="Search by Job Title" />
        </div>
        <div className="search-input">
          <h5>Department</h5>
          <select>
            <option disabled selected>
              Select Department
            </option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Sales</option>
            <option>Information Technology (IT)</option>
          </select>
        </div>
        <div className="search-input">
          <h5>Location</h5>
          <select name="Location">
            <option value="" disabled selected>
              Select Location
            </option>
            {citiesInIndia.map((item) => (
              <option key={item.name} value="">
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="search-btn" onClick={handleSubmit}>
          <img src={Icon} alt="search-icon" />
        </div>
      </div>
      <div className="jobs-container">
        <div className="job-container">
          <div className="job-details">
            <h3>Sales Manager</h3>
            <div className="loc-exp-continer">
              <div className="loc-exp">
                <img src={Location} alt="location-icon" />
                <h4>Delhi</h4>
              </div>
              <div className="loc-exp">
                <img src={Experience} alt="experience-icon" />
                <h4>5-10years</h4>
              </div>
            </div>
          </div>
          <div className="jobDetails-Btn-conatainer">
            <div className="jobDetails-Btn">
              <h3>View Job</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
