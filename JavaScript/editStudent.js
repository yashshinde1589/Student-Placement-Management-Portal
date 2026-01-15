const API = "https://placementstracker-4.onrender.com/api/students";
const id = new URLSearchParams(location.search).get("id");

async function loadStudent() {
  const res = await fetch(`${API}/${id}`);
  const s = await res.json();

  studentname.value = s.personal_info.full_name;
  collegeid.value = s.academic_info.college_id;
  department.value = s.academic_info.department;
  degree.value = s.academic_info.degree;
  graduationyear.value = s.academic_info.graduation_year;
  cgpa.value = s.academic_info.cgpa;
  placementStatus.value = s.placement_status;
}

form.addEventListener("submit", async e => {
  e.preventDefault();

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      personal_info: { full_name: studentname.value },
      academic_info: {
        college_id: collegeid.value,
        department: department.value,
        degree: degree.value,
        graduation_year: Number(graduationyear.value),
        cgpa: Number(cgpa.value)
      },
      placement_status: placementStatus.value
    })
  });

  alert("Student Updated");
  location.href = "student.html";
});

loadStudent();
