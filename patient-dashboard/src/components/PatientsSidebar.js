import './PatientsSidebar.css';

function PatientsSidebar({ patients, selectedName }) {
  return (
    <aside className="patients-sidebar">
      <h2>Patients</h2>
      <ul className="patient-list">
        {patients.map(p => (
          <li
            key={p.id}
            className={`patient-item ${p.name === selectedName ? 'active' : ''}`}
          >
            {p.profile_picture && (
              <img src={p.profile_picture} alt={p.name} className="avatar" />
            )}
            <div>
              <div className="patient-name inner-card-title-18pt">{p.name}</div>
              {p.gender && (
                <div className="patient-meta body-secondary-info-14pt">
                  {p.gender}, {p.age}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default PatientsSidebar;
