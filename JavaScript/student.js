const API = "https://placementstracker-4.onrender.com/api/students";
const studentContainer = document.getElementById("studentContainer");

async function loadStudents() {
  const res = await fetch(API);
  const data = await res.json();

  studentContainer.innerHTML = data.map(s => `
    <div class="student-card">
      <img src="${s.personal_info?.profile_image || 'https://via.placeholder.com/150'}" class="student-photo">
      <h2 class="student-name">${s.personal_info?.full_name}</h2>
      <p class="student-info"><b>Degree:</b> ${s.academic_info?.degree}</p>
      <p class="student-info"><b>Year:</b> ${s.academic_info?.graduation_year}</p>
      <span class="status ${s.placement_status === 'Placed' ? 'placed' : 'not-placed'}">
        ${s.placement_status}
      </span>
      <br><br>
      <a href="editStudent.html?id=${s._id}" class="back-btn">Edit</a>
    </div>
  `).join("");
}

loadStudents();
