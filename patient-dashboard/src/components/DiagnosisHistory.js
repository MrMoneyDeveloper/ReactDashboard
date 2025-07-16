import BloodPressureChart from './BloodPressureChart';
import './DiagnosisHistory.css';

function DiagnosisHistory({ diagnosisHistory }) {
  if (!diagnosisHistory || diagnosisHistory.length === 0) return null;

  const recent = diagnosisHistory.slice(-6);
  const labels = recent.map(r => `${r.month} ${r.year}`);
  const systolicData = recent.map(r => r.blood_pressure.systolic.value);
  const diastolicData = recent.map(r => r.blood_pressure.diastolic.value);
  const latest = recent[recent.length - 1];

  return (
    <section className="diagnosis-history-section">
      <h2 className="card-title-24pt">Diagnosis History</h2>
      <div className="blood-pressure-card">
        <div className="blood-pressure-header">
          <span className="inner-card-title-18pt">Blood Pressure</span>
          <span className="body-secondary-info-14pt">Last 6 months</span>
        </div>
        <BloodPressureChart labels={labels} systolicData={systolicData} diastolicData={diastolicData} />
        <div className="blood-pressure-readings">
          <div className="reading">
            <div className="body-secondary-info-14pt">Systolic</div>
            <div className="card-title-24pt">{latest.blood_pressure.systolic.value}</div>
            <div className="body-secondary-info-14pt">{latest.blood_pressure.systolic.levels}</div>
          </div>
          <div className="reading">
            <div className="body-secondary-info-14pt">Diastolic</div>
            <div className="card-title-24pt">{latest.blood_pressure.diastolic.value}</div>
            <div className="body-secondary-info-14pt">{latest.blood_pressure.diastolic.levels}</div>
          </div>
        </div>
      </div>
      <div className="vitals-cards">
        <div className="vital-card">
          <div className="body-secondary-info-14pt">Respiratory Rate</div>
          <div className="inner-card-title-18pt">{latest.respiratory_rate.value} bpm</div>
          <div className="body-secondary-info-14pt">{latest.respiratory_rate.levels}</div>
        </div>
        <div className="vital-card">
          <div className="body-secondary-info-14pt">Temperature</div>
          <div className="inner-card-title-18pt">{latest.temperature.value}&deg;F</div>
          <div className="body-secondary-info-14pt">{latest.temperature.levels}</div>
        </div>
        <div className="vital-card">
          <div className="body-secondary-info-14pt">Heart Rate</div>
          <div className="inner-card-title-18pt">{latest.heart_rate.value} bpm</div>
          <div className="body-secondary-info-14pt">{latest.heart_rate.levels}</div>
        </div>
      </div>
    </section>
  );
}

export default DiagnosisHistory;
