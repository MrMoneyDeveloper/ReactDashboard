import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BloodPressureChart({ labels, systolicData, diastolicData }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Systolic',
            data: systolicData,
            borderColor: '#705AAA',
            backgroundColor: '#705AAA33',
            tension: 0.4,
          },
          {
            label: 'Diastolic',
            data: diastolicData,
            borderColor: '#0BD984',
            backgroundColor: '#0BD98433',
            tension: 0.4,
          },
        ],
      },
      options: {
        plugins: { legend: false },
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: false, suggestedMin: 60, suggestedMax: 170 },
        },
      },
    });
    return () => chart.destroy();
  }, [labels, systolicData, diastolicData]);

  return (
    <div className="w-100" style={{ height: '300px' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default BloodPressureChart;
