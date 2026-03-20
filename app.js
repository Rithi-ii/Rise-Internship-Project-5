const express = require("express");
const path = require("path");

const app = express();

// Static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Navbar
const navbar = `
<nav>
  <h2>MediTrack</h2>
  <div>
    <a href="/">Home</a>
    <a href="/patients">Patients</a>
    <a href="/reports">Reports</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
`;

// HOME
app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>MediTrack</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>

  ${navbar}

  <div class="container">
    <h1>Healthcare Monitoring System</h1>
    <p>Track patient health and medical reports easily</p>

    <div class="card">
      <h3>Patients</h3>
      <p>Manage patient records</p>
    </div>

    <div class="card">
      <h3>Reports</h3>
      <p>View medical reports</p>
    </div>
  </div>

  </body>
  </html>
  `);
});

// PATIENTS
app.get("/patients", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Patients</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>

  ${navbar}

  <div class="container">
    <h1>Patient List</h1>

    <div class="card">
      <p>Name: John</p>
      <p>Age: 35</p>
      <p>Status: Healthy</p>
    </div>

    <div class="card">
      <p>Name: Priya</p>
      <p>Age: 29</p>
      <p>Status: Under Treatment</p>
    </div>
  </div>

  </body>
  </html>
  `);
});

// REPORTS
app.get("/reports", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Reports</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>

  ${navbar}

  <div class="container">
    <h1>Medical Reports</h1>

    <div class="card">
      <p>Blood Test Report</p>
      <p>Status: Normal</p>
    </div>

    <div class="card">
      <p>X-Ray Report</p>
      <p>Status: Pending</p>
    </div>
  </div>

  </body>
  </html>
  `);
});

// CONTACT
app.get("/contact", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Contact</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>

  ${navbar}

  <div class="container">
    <h1>Contact</h1>

    <div class="card">
      <p>Email: meditrack@gmail.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  </div>

  </body>
  </html>
  `);
});

// SERVER
app.listen(3000, "0.0.0.0", () => {
  console.log("MediTrack running on port 3000");
});