let bpChart;

document.addEventListener('DOMContentLoaded', () => {
    fetchPatientData();
});

function fetchPatientData() {
    const authHeader = 'Basic ' + btoa('coalition:skills-test');

    fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: { 'Authorization': authHeader }
    })
        .then(res => res.json())
        .then(data => {
            populatePatientList(data);
            const patient = data.find(p => p.name === 'Jessica Taylor');
            if (patient) {
                populatePatientInfo(patient);
                renderDiagnosis(patient.diagnostic_list);
                renderLabs(patient.lab_results);
                renderChart(patient.diagnosis_history);
                renderVitals(patient.diagnosis_history);
            }
        })
        .catch(err => console.error('Failed to fetch patient data', err));
}

function populatePatientInfo(patient) {
    document.getElementById('patient-photo').src = patient.profile_picture;
    document.getElementById('patient-name').textContent = patient.name;
    document.getElementById('patient-age-gender').textContent = `Age: ${patient.age} | ${patient.gender}`;
    document.getElementById('patient-dob').textContent = `DOB: ${patient.date_of_birth}`;
    document.getElementById('patient-phone').textContent = `Phone: ${patient.phone_number}`;
    document.getElementById('patient-emergency').textContent = `Emergency: ${patient.emergency_contact}`;
    document.getElementById('patient-insurance').textContent = `Insurance: ${patient.insurance_type}`;
}

function populatePatientList(patients) {
    const list = document.getElementById('patient-list');
    list.innerHTML = '';
    patients.forEach(p => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        if (p.name === 'Jessica Taylor') li.classList.add('active');
        li.textContent = p.name;
        list.appendChild(li);
    });
}

function renderDiagnosis(items) {
    const ul = document.getElementById('diagnosis-list');
    ul.innerHTML = '';
    items.forEach(d => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-start';
        const badgeClass = d.status === 'Cured' ? 'bg-success' : d.status === 'Under Observation' ? 'bg-warning text-dark' : 'bg-secondary';
        li.innerHTML = `<div><strong>${d.name}</strong><p class="mb-1 small text-muted">${d.description}</p></div>` +
            `<span class="badge ${badgeClass} align-self-center">${d.status}</span>`;
        ul.appendChild(li);
    });
}

function renderLabs(items) {
    const ul = document.getElementById('lab-results-list');
    ul.innerHTML = '';
    items.forEach(name => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<i class="fas fa-file-arrow-down me-2"></i>${name}`;
        ul.appendChild(li);
    });
}

function renderVitals(history) {
    if (!history || history.length === 0) return;
    const latest = history[history.length - 1];
    const container = document.getElementById('vital-readings');
    container.innerHTML = '';

    const makeItem = (label, value, level) => {
        const div = document.createElement('div');
        div.className = 'vital-item text-center';
        div.innerHTML = `<div class="text-muted small">${label}</div>` +
            `<div class="h6 m-0">${value}</div>` +
            `<div class="text-muted small">${level}</div>`;
        container.appendChild(div);
    };

    makeItem('Respiratory', `${latest.respiratory_rate.value} bpm`, latest.respiratory_rate.levels);
    makeItem('Temperature', `${latest.temperature.value}°F`, latest.temperature.levels);
    makeItem('Heart Rate', `${latest.heart_rate.value} bpm`, latest.heart_rate.levels);
}

function renderChart(history) {
    if (!history || history.length === 0) return;
    // Group blood pressure readings by year and average the values
    const grouped = {};
    history.forEach(h => {
        const year = h.year;
        if (!grouped[year]) grouped[year] = { systolic: [], diastolic: [] };
        grouped[year].systolic.push(h.blood_pressure.systolic.value);
        grouped[year].diastolic.push(h.blood_pressure.diastolic.value);
    });

    const years = Object.keys(grouped).sort();
    const systolic = years.map(y => {
        const arr = grouped[y].systolic;
        return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    });
    const diastolic = years.map(y => {
        const arr = grouped[y].diastolic;
        return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    });
    const labels = years;

    const ctx = document.getElementById('bpChart').getContext('2d');
    if (bpChart) bpChart.destroy();
    bpChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Systolic',
                    data: systolic,
                    borderColor: '#ff6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.4
                },
                {
                    label: 'Diastolic',
                    data: diastolic,
                    borderColor: '#36a2eb',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: true } },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Blood Pressure (mmHg)'
                    },
                    suggestedMin: 60,
                    suggestedMax: 180
                }
            }
        }
    });
}
