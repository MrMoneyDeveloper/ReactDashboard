import React from 'react';
import './PatientInfoCard.css';

const PatientInfoCard = ({ patient }) => {
  if (!patient) return null;
  return (
    <div className="patient-info">
      <h2>{patient.name}</h2>
      <p>{patient.gender}, {patient.age}</p>
      <p>Phone: {patient.phone}</p>
    </div>
  );
};

export default PatientInfoCard;
