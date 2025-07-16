import { FaPhone, FaUserFriends } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { AiFillInsurance } from 'react-icons/ai';
import './PatientInfoCard.css';

function PatientInfoCard({ patient }) {
  if (!patient) return null;
  return (
    <div className="patient-info-card">
      <div className="patient-photo">
        <img src={patient.profile_picture} alt={patient.name} />
      </div>
      <h2 className="card-title-24pt">{patient.name}</h2>
      <div className="info-field">
        <MdDateRange className="info-icon" />
        <span className="body-secondary-info-14pt">Date of Birth:</span>
        <span className="body-emphasized-14pt">{new Date(patient.date_of_birth).toLocaleDateString()}</span>
      </div>
      <div className="info-field">
        <FaUserFriends className="info-icon" />
        <span className="body-secondary-info-14pt">Gender:</span>
        <span className="body-emphasized-14pt">{patient.gender}</span>
      </div>
      <div className="info-field">
        <FaPhone className="info-icon" />
        <span className="body-secondary-info-14pt">Contact Info:</span>
        <span className="body-emphasized-14pt">{patient.phone_number}</span>
      </div>
      <div className="info-field">
        <FaPhone className="info-icon" style={{ transform: 'rotate(90deg)' }} />
        <span className="body-secondary-info-14pt">Emergency Contact:</span>
        <span className="body-emphasized-14pt">{patient.emergency_contact}</span>
      </div>
      <div className="info-field">
        <AiFillInsurance className="info-icon" />
        <span className="body-secondary-info-14pt">Insurance Provider:</span>
        <span className="body-emphasized-14pt">{patient.insurance_type}</span>
      </div>
      <div className="show-more body-secondary-info-14pt">Show All Information</div>
    </div>
  );
}

export default PatientInfoCard;
