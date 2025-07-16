import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PatientsSidebar from './components/PatientsSidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import PatientDetails from './components/PatientDetails';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container fluid>
        <Row>
          <Col xs={12} lg={3}>
            <PatientsSidebar
              patients={patients}
              selectedName={selectedPatient ? selectedPatient.name : ''}
            />
          </Col>
          <Col xs={12} lg={6} className="center-panel">
            {selectedPatient && (
              <>
                <DiagnosisHistory diagnosisHistory={selectedPatient.diagnosis_history} />
                <DiagnosticList diagnosticList={selectedPatient.diagnostic_list} />
              </>
            )}
          </Col>
          <Col xs={12} lg={3}>
            {selectedPatient && <PatientDetails patient={selectedPatient} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
