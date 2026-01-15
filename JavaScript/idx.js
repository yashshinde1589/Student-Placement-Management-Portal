function animateCounter(el, end) {
  let current = 0;
  const step = Math.ceil(end / 40);

  const timer = setInterval(() => {
    current += step;
    if (current >= end) {
      el.innerText = end;
      clearInterval(timer);
    } else {
      el.innerText = current;
    }
  }, 30);
}

async function loadDashboard() {
  const students = await getStudents();
  const colleges = await getColleges();
  const companies = await getCompanies();
  const roles = await getJobRoles();

  animateCounter(studentCount, students.length);
  animateCounter(collegeCount, colleges.length);
  animateCounter(companyCount, companies.length);
  animateCounter(jobRoleCount, roles.length);
}

loadDashboard();
