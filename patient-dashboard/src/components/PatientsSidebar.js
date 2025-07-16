import React from 'react';
import './PatientsSidebar.css';

const PatientsSidebar = ({ patients, selectedName }) => {
  return (
    <aside className="patients-sidebar">
      <h2>Patients</h2>
      <ul className="patient-list">
        {patients.map((p) => (
          <li
            key={p.id}
            className={`patient-item ${p.name === selectedName ? 'active' : ''}`}
          >
            {p.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PatientsSidebar;
