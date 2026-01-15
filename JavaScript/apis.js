const BASE_URL = "https://placementstracker-4.onrender.com/api";

async function getStudents() {
  const res = await fetch(`${BASE_URL}/students`);
  return await res.json();
}

async function getColleges() {
  const res = await fetch(`${BASE_URL}/colleges`);
  return await res.json();
}

async function getCompanies() {
  const res = await fetch(`${BASE_URL}/companies`);
  return await res.json();
}

async function getJobRoles() {
  const res = await fetch(`${BASE_URL}/job-roles`);
  return await res.json();
}
