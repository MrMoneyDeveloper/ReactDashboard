import PatientInfoCard from './PatientInfoCard';
import LabResults from './LabResults';
import './PatientDetails.css';

function PatientDetails({ patient }) {
  if (!patient) return null;
  return (
    <aside className="patient-details">
      <PatientInfoCard patient={patient} />
      <LabResults labResults={patient.lab_results} />
    </aside>
  );
}

export default PatientDetails;
