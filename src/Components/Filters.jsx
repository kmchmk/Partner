import React, { useState } from 'react';
import "./Filters.css";
import { Accordion, Form } from 'react-bootstrap';
import Select from 'react-select';

const Filters = () => {
  // State to keep track of open accordion keys
  // const [selectedReligion, setSelectedReligion] = useState('');
  // const [smoking, setSmoking] = useState('');
  // const [differentlyAbled, setDifferentlyAbled] = useState('');
  // const [country, setCountry] = useState('');
  const [openKey, setOpenKey] = useState('');
  const [selectedReligions, setSelectedReligions] = useState([]);
  const [religionOpenKey, setReligionOpenKey] = useState('');
  const [civilStatusOpenKey, setCivilStatusOpenKey] = useState('');
  const [educationLevelOpenKey, setEducationLevelOpenKey] = useState('');

  const toggleAccordion = key => {
    setOpenKey(openKey === key ? '' : key);
  };

  // const handleSmokingChange = (event) => {
  //   setSmoking(event.target.value);
  // };
  const [selectedCountries, setSelectedCountries] = useState([]);

  // const handleRadioChange = (event, value, currentValue, setter) => {
  //   setter(currentValue === value ? '' : value);
  // };

  const handleReligionChange = (event) => {
    const value = event.target.value;
    setSelectedReligions(prev => {
      // Check if the value is already in the array
      if (prev.includes(value)) {
        // If it is, remove it (toggle off)
        return prev.filter(item => item !== value);
      } else {
        // Otherwise, add it (toggle on)
        return [...prev, value];
      }
    });
  };

  const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }; 

  const handleCountryChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCountries(selectedOptions);
  };

  const countryOptions = [
    { value: 'Afghanistan', label: 'Afghanistan' },
    { value: 'Albania', label: 'Albania' },
    { value: 'Algeria', label: 'Algeria' },
    { value: 'Andorra', label: 'Andorra' },
    { value: 'Angola', label: 'Angola' },
    { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Armenia', label: 'Armenia' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Austria', label: 'Austria' },
    { value: 'Azerbaijan', label: 'Azerbaijan' },
    { value: 'Bahamas', label: 'Bahamas' },
    { value: 'Bahrain', label: 'Bahrain' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'Barbados', label: 'Barbados' },
    { value: 'Belarus', label: 'Belarus' },
    { value: 'Belgium', label: 'Belgium' },
    { value: 'Belize', label: 'Belize' },
    { value: 'Benin', label: 'Benin' },
    { value: 'Bhutan', label: 'Bhutan' },
    { value: 'Bolivia', label: 'Bolivia' },
    { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
    { value: 'Botswana', label: 'Botswana' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Brunei', label: 'Brunei' },
    { value: 'Bulgaria', label: 'Bulgaria' },
    { value: 'Burkina Faso', label: 'Burkina Faso' },
    { value: 'Burundi', label: 'Burundi' },
    { value: 'Cabo Verde', label: 'Cabo Verde' },
    { value: 'Cambodia', label: 'Cambodia' },
    { value: 'Cameroon', label: 'Cameroon' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Central African Republic', label: 'Central African Republic' },
    { value: 'Chad', label: 'Chad' },
    { value: 'Chile', label: 'Chile' },
    { value: 'China', label: 'China' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Comoros', label: 'Comoros' },
    { value: 'Congo, Democratic Republic', label: 'Congo, Democratic Republic' },
    { value: 'Congo, Republic of the', label: 'Congo, Republic of the' },
    { value: 'Costa Rica', label: 'Costa Rica' },
    { value: 'Croatia', label: 'Croatia' },
    { value: 'Cuba', label: 'Cuba' },
    { value: 'Cyprus', label: 'Cyprus' },
    { value: 'Czech Republic', label: 'Czech Republic' },
    { value: 'Denmark', label: 'Denmark' },
    { value: 'Djibouti', label: 'Djibouti' },
    { value: 'Dominica', label: 'Dominica' },
    { value: 'Dominican Republic', label: 'Dominican Republic' },
    { value: 'East Timor', label: 'East Timor' },
    { value: 'Ecuador', label: 'Ecuador' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'El Salvador', label: 'El Salvador' },
    { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
    { value: 'Eritrea', label: 'Eritrea' },
    { value: 'Estonia', label: 'Estonia' },
    { value: 'Eswatini', label: 'Eswatini' },
    { value: 'Ethiopia', label: 'Ethiopia' },
    { value: 'Fiji', label: 'Fiji' },
    { value: 'Finland', label: 'Finland' },
    { value: 'France', label: 'France' },
    { value: 'Gabon', label: 'Gabon' },
    { value: 'Gambia', label: 'Gambia' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Ghana', label: 'Ghana' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Grenada', label: 'Grenada' },
    { value: 'Guatemala', label: 'Guatemala' },
    { value: 'Guinea', label: 'Guinea' },
    { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
    { value: 'Guyana', label: 'Guyana' },
    { value: 'Haiti', label: 'Haiti' },
    { value: 'Honduras', label: 'Honduras' },
    { value: 'Hungary', label: 'Hungary' },
    { value: 'Iceland', label: 'Iceland' },
    { value: 'India', label: 'India' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Iran', label: 'Iran' },
    { value: 'Iraq', label: 'Iraq' },
    { value: 'Ireland', label: 'Ireland' },
    { value: 'Israel', label: 'Israel' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Jamaica', label: 'Jamaica' },
    { value: 'Japan', label: 'Japan' },
    { value: 'Jordan', label: 'Jordan' },
    { value: 'Kazakhstan', label: 'Kazakhstan' },
    { value: 'Kenya', label: 'Kenya' },
    { value: 'Kiribati', label: 'Kiribati' },
    { value: 'Kuwait', label: 'Kuwait' },
    { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'Laos', label: 'Laos' },
    { value: 'Latvia', label: 'Latvia' },
    { value: 'Lebanon', label: 'Lebanon' },
    { value: 'Lesotho', label: 'Lesotho' },
    { value: 'Liberia', label: 'Liberia' },
    { value: 'Libya', label: 'Libya' },
    { value: 'Liechtenstein', label: 'Liechtenstein' },
    { value: 'Lithuania', label: 'Lithuania' },
    { value: 'Luxembourg', label: 'Luxembourg' },
    { value: 'Madagascar', label: 'Madagascar' },
    { value: 'Malawi', label: 'Malawi' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'Maldives', label: 'Maldives' },
    { value: 'Mali', label: 'Mali' },
    { value: 'Malta', label: 'Malta' },
    { value: 'Marshall Islands', label: 'Marshall Islands' },
    { value: 'Mauritania', label: 'Mauritania' },
    { value: 'Mauritius', label: 'Mauritius' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Micronesia', label: 'Micronesia' },
    { value: 'Moldova', label: 'Moldova' },
    { value: 'Monaco', label: 'Monaco' },
    { value: 'Mongolia', label: 'Mongolia' },
    { value: 'Montenegro', label: 'Montenegro' },
    { value: 'Morocco', label: 'Morocco' },
    { value: 'Mozambique', label: 'Mozambique' },
    { value: 'Myanmar', label: 'Myanmar' },
    { value: 'Namibia', label: 'Namibia' },
    { value: 'Nauru', label: 'Nauru' },
    { value: 'Nepal', label: 'Nepal' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'New Zealand', label: 'New Zealand' },
    { value: 'Nicaragua', label: 'Nicaragua' },
    { value: 'Niger', label: 'Niger' },
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'North Korea', label: 'North Korea' },
    { value: 'North Macedonia', label: 'North Macedonia' },
    { value: 'Norway', label: 'Norway' },
    { value: 'Oman', label: 'Oman' },
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'Palau', label: 'Palau' },
    { value: 'Palestine', label: 'Palestine' },
    { value: 'Panama', label: 'Panama' },
    { value: 'Papua New Guinea', label: 'Papua New Guinea' },
    { value: 'Paraguay', label: 'Paraguay' },
    { value: 'Peru', label: 'Peru' },
    { value: 'Philippines', label: 'Philippines' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Portugal', label: 'Portugal' },
    { value: 'Qatar', label: 'Qatar' },
    { value: 'Romania', label: 'Romania' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Rwanda', label: 'Rwanda' },
    { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
    { value: 'Saint Lucia', label: 'Saint Lucia' },
    { value: 'Saint Vincent & Grenadines', label: 'Saint Vincent & Grenadines' },
    { value: 'Samoa', label: 'Samoa' },
    { value: 'San Marino', label: 'San Marino' },
    { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
    { value: 'Saudi Arabia', label: 'Saudi Arabia' },
    { value: 'Senegal', label: 'Senegal' },
    { value: 'Serbia', label: 'Serbia' },
    { value: 'Seychelles', label: 'Seychelles' },
    { value: 'Sierra Leone', label: 'Sierra Leone' },
    { value: 'Singapore', label: 'Singapore' },
    { value: 'Slovakia', label: 'Slovakia' },
    { value: 'Slovenia', label: 'Slovenia' },
    { value: 'Solomon Islands', label: 'Solomon Islands' },
    { value: 'Somalia', label: 'Somalia' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'South Korea', label: 'South Korea' },
    { value: 'South Sudan', label: 'South Sudan' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Sri Lanka', label: 'Sri Lanka' },
    { value: 'Sudan', label: 'Sudan' },
    { value: 'Suriname', label: 'Suriname' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'Switzerland', label: 'Switzerland' },
    { value: 'Syria', label: 'Syria' },
    { value: 'Taiwan', label: 'Taiwan' },
    { value: 'Tajikistan', label: 'Tajikistan' },
    { value: 'Tanzania', label: 'Tanzania' },
    { value: 'Thailand', label: 'Thailand' },
    { value: 'Togo', label: 'Togo' },
    { value: 'Tonga', label: 'Tonga' },
    { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
    { value: 'Tunisia', label: 'Tunisia' },
    { value: 'Turkey', label: 'Turkey' },
    { value: 'Turkmenistan', label: 'Turkmenistan' },
    { value: 'Tuvalu', label: 'Tuvalu' },
    { value: 'Uganda', label: 'Uganda' },
    { value: 'Ukraine', label: 'Ukraine' },
    { value: "Uganda", label: "Uganda" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Vatican City", label: "Vatican City" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" }
  ];
  return (
    <div className="filters-container">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}></div>
      <div className="filter-title">I'm looking for</div>
      <div className="filter-group">
        <div>
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <label>Age</label>
        <input type="number" placeholder="18" /> to <input type="number" placeholder="60" />
      </div>
      <div className="filter-group">
        <label>Country of Residence</label>
        <Select
          options={countryOptions}
          value={selectedCountries}
          onChange={handleCountryChange}
          isMulti={true}
          closeMenuOnSelect={false}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Select your country"
          isClearable
          isSearchable
          maxMenuHeight={150}
          styles={{
            menu: (provided) => ({ ...provided, zIndex: 9999 })
          }}
        />
      </div>
      <ul>
        <li>District: Thelagana</li>
      </ul>
      <div>
      <Accordion activeKey={religionOpenKey}>
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => setReligionOpenKey(religionOpenKey ? '' : '1')}>Religion</Accordion.Header>
          <Accordion.Body>
            {['Christian', 'Buddhist', 'Hindu', 'Islam', 'Other'].map(religion => (
              <Form.Check
                key={religion}
                type="checkbox"
                name="religions"
                value={religion}
                label={religion}
                checked={selectedReligions.includes(religion)}
                onChange={handleReligionChange}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     </div>
     
     <div>
     <Accordion activeKey={civilStatusOpenKey}>
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => setCivilStatusOpenKey(civilStatusOpenKey ? '' : '1')}>Civil Status</Accordion.Header>
          <Accordion.Body>
            {['Divorced', 'Engaged', 'Married', 'Separated', 'Single', 'Widowed'].map(status => (
              <Form.Check
                key={status}
                type="checkbox"
                name="civilStatus"
                value={status}
                label={status}
                checked={selectedReligions.includes(status)}
                onChange={handleReligionChange}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     </div>

     <div>
     <Accordion activeKey={educationLevelOpenKey}>
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => setEducationLevelOpenKey(educationLevelOpenKey ? '' : '1')}>Education Level</Accordion.Header>
          <Accordion.Body>
            {['Associate Degree', 'Bachelor Degree', 'Doctorate', 'Professional Degree', 'High School Diploma or Equivalent', 'Master Degree', 'College', 'High School'].map(edu => (
              <Form.Check
                key={edu}
                type="checkbox"
                name="education"
                value={edu}
                label={edu}
                checked={selectedReligions.includes(edu)}
                onChange={handleReligionChange}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     </div>
  
      <ul>
        <li>Profession: Driver</li>
        <li>Height: 176</li>
        <li>Weight: 70</li>
        <li>Food Preference: Vegan</li>
        <li>Drinking: No</li>
        <li>Smoking: No</li>
      </ul>
      <div>
        <Accordion activeKey={openKey}>
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => toggleAccordion('1')}>Drinking</Accordion.Header>
            <Accordion.Body>
              {['Yes', 'No'].map(drinking => (
                <Form.Check 
                  key={drinking}
                  type="checkbox" // Changed from radio to checkbox
                  name="drinking"
                  value={drinking}
                  label={drinking}
                  checked={selectedReligions.includes(drinking)} // Check if religion is selected
                  onChange={handleReligionChange}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
          {/* Other Accordion items remain unchanged */}
        </Accordion>
     </div>
      <div>
        <Accordion activeKey={openKey}>
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => toggleAccordion('1')}>Smoking</Accordion.Header>
            <Accordion.Body>
              {['Yes', 'No'].map(smoking => (
                <Form.Check 
                  key={smoking}
                  type="checkbox" // Changed from radio to checkbox
                  name="smoking"
                  value={smoking}
                  label={smoking}
                  checked={selectedReligions.includes(smoking)} // Check if religion is selected
                  onChange={handleReligionChange}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
          {/* Other Accordion items remain unchanged */}
        </Accordion>
     </div>
            </div>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? '<<' : '>>'}
            </button>
      
    </div>
  );
};

export default Filters;
