import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PatientsSidebar from './components/PatientsSidebar';
import PatientInfoCard from './components/PatientInfoCard';

const patients = [
  { id: 1, name: 'Jessica Taylor', gender: 'Female', age: 28, phone: '(415) 555-1234' },
  { id: 2, name: 'Alex Smith', gender: 'Male', age: 35, phone: '(415) 555-5678' },
  { id: 3, name: 'Sara Jones', gender: 'Female', age: 42, phone: '(415) 555-9012' },
];

function App() {
  const selected = patients[0];
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="main">
        <PatientsSidebar patients={patients} selectedName={selected.name} />
        <PatientInfoCard patient={selected} />
      </div>
    </div>
  );
}

export default App;
