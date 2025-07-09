import React, { useState, useEffect } from 'react';
import "./Filters.css";
import { Accordion, Form } from 'react-bootstrap';
import Select from 'react-select';

const Filters = ({ onFiltersChange }) => {
  // Main filter state
  const [filters, setFilters] = useState({
    gender: '',
    ageMin: 18,
    ageMax: 60,
    countries: [],
    religions: [],
    civilStatus: [],
    educationLevel: [],
    drinking: [],
    smoking: []
  });

  // UI state for accordions
  const [accordionStates, setAccordionStates] = useState({
    religion: '',
    civilStatus: '',
    education: '',
    drinking: '',
    smoking: ''
  });

  // Set initial sidebar state based on screen size  
  const [isOpen, setIsOpen] = useState(false); // Always start closed, will be set correctly in useEffect

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsOpen(!isMobile); // Open on desktop, closed on mobile
    };

    // Set initial state correctly based on window size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (key) => {
    setAccordionStates(prev => ({
      ...prev,
      [key]: prev[key] === '1' ? '' : '1'
    }));
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      gender: '',
      ageMin: 18,
      ageMax: 60,
      countries: [],
      religions: [],
      civilStatus: [],
      educationLevel: [],
      drinking: [],
      smoking: []
    };
    setFilters(clearedFilters);
    updateFilters(clearedFilters);
  };

  // Update filters and notify parent component
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const handleGenderChange = (event) => {
    const newFilters = { ...filters, gender: event.target.value };
    updateFilters(newFilters);
  };

  const handleAgeChange = (field, value) => {
    const newFilters = { ...filters, [field]: parseInt(value) || 0 };
    updateFilters(newFilters);
  };

  const handleCountryChange = (selectedOptions) => {
    const countries = selectedOptions ? selectedOptions.map(option => option.value) : [];
    const newFilters = { ...filters, countries };
    updateFilters(newFilters);
  };

  const handleMultiSelectChange = (field, value) => {
    const currentValues = filters[field];
    let newValues;
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(item => item !== value);
    } else {
      newValues = [...currentValues, value];
    }
    
    const newFilters = { ...filters, [field]: newValues };
    updateFilters(newFilters);
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
        <div className="filter-content">
          <div className="filter-title">I'm looking for</div>
          
          {/* Gender and Age Filter */}
          <div className="filter-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" value={filters.gender} onChange={handleGenderChange}>
              <option value="">Any</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Age Range</label>
            <div className="age-inputs">
              <input 
                type="number" 
                placeholder="18" 
                value={filters.ageMin}
                onChange={(e) => handleAgeChange('ageMin', e.target.value)}
                min="18"
                max="100"
              /> 
              <span>to</span> 
              <input 
                type="number" 
                placeholder="60"
                value={filters.ageMax}
                onChange={(e) => handleAgeChange('ageMax', e.target.value)}
                min="18"
                max="100"
              />
            </div>
          </div>

          {/* Country Filter */}
          <div className="filter-group">
            <label>Country of Residence</label>
            <Select
              options={countryOptions}
              value={countryOptions.filter(option => filters.countries.includes(option.value))}
              onChange={handleCountryChange}
              isMulti={true}
              closeMenuOnSelect={false}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select countries"
              isClearable
              isSearchable
              maxMenuHeight={150}
              styles={{
                menu: (provided) => ({ ...provided, zIndex: 9999 })
              }}
            />
          </div>

          {/* Religion Filter */}
          <div className="filter-accordion">
            <Accordion activeKey={accordionStates.religion}>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => toggleAccordion('religion')}>
                  Religion
                </Accordion.Header>
                <Accordion.Body>
                  {['Buddhism', 'Christianity', 'Hinduism', 'Islam', 'Other'].map(religion => (
                    <Form.Check
                      key={religion}
                      type="checkbox"
                      name="religions"
                      value={religion}
                      label={religion}
                      checked={filters.religions.includes(religion)}
                      onChange={(e) => handleMultiSelectChange('religions', e.target.value)}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Civil Status Filter */}
          <div className="filter-accordion">
            <Accordion activeKey={accordionStates.civilStatus}>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => toggleAccordion('civilStatus')}>
                  Civil Status
                </Accordion.Header>
                <Accordion.Body>
                  {['Single', 'Divorced', 'Widowed', 'Separated'].map(status => (
                    <Form.Check
                      key={status}
                      type="checkbox"
                      name="civilStatus"
                      value={status}
                      label={status}
                      checked={filters.civilStatus.includes(status)}
                      onChange={(e) => handleMultiSelectChange('civilStatus', e.target.value)}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Education Level Filter */}
          <div className="filter-accordion">
            <Accordion activeKey={accordionStates.education}>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => toggleAccordion('education')}>
                  Education Level
                </Accordion.Header>
                <Accordion.Body>
                  {['High School', 'Associate Degree', 'Bachelor Degree', 'Master Degree', 'Doctorate'].map(edu => (
                    <Form.Check
                      key={edu}
                      type="checkbox"
                      name="education"
                      value={edu}
                      label={edu}
                      checked={filters.educationLevel.includes(edu)}
                      onChange={(e) => handleMultiSelectChange('educationLevel', e.target.value)}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Drinking Filter */}
          <div className="filter-accordion">
            <Accordion activeKey={accordionStates.drinking}>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => toggleAccordion('drinking')}>
                  Drinking
                </Accordion.Header>
                <Accordion.Body>
                  {['Yes', 'No', 'Socially'].map(drinking => (
                    <Form.Check 
                      key={drinking}
                      type="checkbox"
                      name="drinking"
                      value={drinking}
                      label={drinking}
                      checked={filters.drinking.includes(drinking)}
                      onChange={(e) => handleMultiSelectChange('drinking', e.target.value)}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Smoking Filter */}
          <div className="filter-accordion">
            <Accordion activeKey={accordionStates.smoking}>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => toggleAccordion('smoking')}>
                  Smoking
                </Accordion.Header>
                <Accordion.Body>
                  {['Yes', 'No', 'Occasionally'].map(smoking => (
                    <Form.Check 
                      key={smoking}
                      type="checkbox"
                      name="smoking"
                      value={smoking}
                      label={smoking}
                      checked={filters.smoking.includes(smoking)}
                      onChange={(e) => handleMultiSelectChange('smoking', e.target.value)}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Filter Action Buttons */}
          <div className="filter-actions">
            <button 
              className="btn btn-clear" 
              onClick={clearAllFilters}
              type="button"
            >
              Clear All
            </button>
            <button 
              className="btn btn-apply" 
              onClick={() => setIsOpen(window.innerWidth <= 768 ? false : isOpen)}
              type="button"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '<<' : '>>'}
      </button>
    </div>
  );
};

export default Filters;
