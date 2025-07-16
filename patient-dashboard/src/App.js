import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PatientsSidebar from './components/PatientsSidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import PatientDetails from './components/PatientDetails';

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    async function fetchPatientData() {
      const credentials = btoa('coalition:skills-test');
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: { Authorization: `Basic ${credentials}` },
        });
        const data = await response.json();
        setPatients(data);
        const jessica = data.find((p) => p.name === 'Jessica Taylor');
        setSelectedPatient(jessica);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    }
    fetchPatientData();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="main">
        <PatientsSidebar patients={patients} selectedName={selectedPatient ? selectedPatient.name : ''} />
        <main className="center-panel">
          {selectedPatient && (
            <>
              <DiagnosisHistory diagnosisHistory={selectedPatient.diagnosis_history} />
              <DiagnosticList diagnosticList={selectedPatient.diagnostic_list} />
            </>
          )}
        </main>
        {selectedPatient && <PatientDetails patient={selectedPatient} />}
      </div>
    </div>
  );
}

export default App;
