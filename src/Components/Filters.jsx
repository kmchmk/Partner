import React from "react";
import "./Filters.css";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

const lookingFor = "Male";
const age = "23";
const countryofResidence = "India";
const district = "Thelagana";
const ethnicity = "Sinhala";
const religion = "Muslim";
const civilStatus = "Single";
const profession = "Driver";
const educationLevel = "MSc";
const height = "176";
const weight = "70";
const foodPreference = "Vegan";
const drinking = "No";
const smoking = "No";
const differentlyAbled = "No";

const myObj = {
  lookingFor: `${lookingFor}`,
  age: `${age}`,
  countryofResidence: `${countryofResidence}`,
  district: `${district}`,
  religion: `${religion}`,
  civilStatus: `${civilStatus}`,
  profession: `${profession}`,
  educationLevel: `${educationLevel}`,
  height: `${height}`,
  weight: `${weight}`,
  foodPreference: `${foodPreference}`,
  drinking: `${drinking}`,
  smoking: `${smoking}`,
  differentlyAbled: `${differentlyAbled}`,
};

export default function Filters() {
  return (
    <div className="filters-container">
      <div className="filter-title">I'm looking for</div>
      <div className="filter-group">
        <div>
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <label>Age</label>
        <input type="number" placeholder="18" /> to{" "}
        <input type="number" placeholder="60" />
      </div>
      <div className="filter-group">
        <label>Country of Residence</label>
        <select>
          <option value="India">India</option>
          <option value="Sri Lanka">Nepal</option>
          <option value="Sri Lanka">Sri Lanka</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Religion</Accordion.Header>
            <Accordion.Body>
            <>
              <Form.Check type="radio" aria-label="radio 1" label="Christian"/>
              <Form.Check type="radio" aria-label="radio 2" label="Buddhist"/> 
              <Form.Check type="radio" aria-label="radio 3" label="Hindu"/> 
              <Form.Check type="radio" aria-label="radio 4" label="Islam"/>
              <Form.Check type="radio" aria-label="radio 4" label="Other"/>   
            </>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <ul>
        <li>District :{myObj.district}</li>
        <li>Ethnicity : {myObj.ethnicity}</li>
        <li>Religion : {myObj.religion}</li>
        <li>Civil Status : {myObj.civilStatus}</li>
        <li>Profession :{myObj.profession}</li>
        <li>Education Level :{myObj.educationLevel}</li>
        <li>Height :{myObj.height}</li>
        <li>Weight :{myObj.weight}</li>
        <li>Food Preference :{myObj.foodPreference}</li>
        <li>drinking :{myObj.drinking}</li>
        <li>smoking :{myObj.smoking}</li>
        <li>Differently Abled :{myObj.differentlyAbled}</li>
      </ul>
    </div>
  );
}
