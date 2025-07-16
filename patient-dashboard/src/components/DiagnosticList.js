import './DiagnosticList.css';

function DiagnosticList({ diagnosticList }) {
  if (!diagnosticList || diagnosticList.length === 0) return null;

  return (
    <section className="diagnostic-list-section">
      <h2 className="card-title-24pt">Diagnostic List</h2>
      <table className="diagnostic-table">
        <thead>
          <tr className="body-secondary-info-14pt">
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticList.map((item, idx) => (
            <tr key={idx} className="body-regular-14">
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td className={item.status.replace(/\s+/g, '-').toLowerCase()}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default DiagnosticList;
