# Patient Dashboard

This React single page application replicates the Coalition Technologies patient dashboard. It fetches patient data from the test API and displays Jessica Taylor's information including a blood pressure chart, vitals, diagnostic list and lab results.

## Prerequisites

- Node.js (version 18 or later recommended)

## Installation

1. Navigate to the `patient-dashboard` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser to view the app.

## Usage

The page shows a top navbar, a patient list sidebar, a center panel with diagnosis history and diagnostic list, and a right sidebar with patient details and lab results. The data is fetched from the provided API using Basic Auth.

## Testing

Run the test suite with:

```bash
npm test -- --watchAll=false
```

## Technologies

- React
- React Icons
- Chart.js

## Notes

Only Jessica Taylor's data is displayed. Credentials for the API are encoded at runtime using `btoa`.
