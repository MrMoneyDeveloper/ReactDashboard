import { FaDownload } from 'react-icons/fa';
import './LabResults.css';

function LabResults({ labResults }) {
  if (!labResults || labResults.length === 0) return null;

  return (
    <section className="lab-results-section">
      <h2 className="card-title-24pt">Lab Results</h2>
      <ul className="lab-results-list">
        {labResults.map((item, idx) => (
          <li key={idx} className="body-regular-14">
            <span>{item}</span>
            <FaDownload className="download-icon" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LabResults;
