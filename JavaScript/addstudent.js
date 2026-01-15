studentForm.addEventListener("submit", async e => {
  e.preventDefault();

  const payload = {
    personal_info: {
      full_name: studentname.value,
      profile_image: file.value
    },
    academic_info: {
      college_id: collegeid.value,
      department: department.value,
      degree: degree.value,
      graduation_year: Number(graduationyear.value),
      cgpa: Number(cgpa.value)
    },
    placement_status: placementStatus.value
  };

  await fetch("https://placementstracker-4.onrender.com/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  alert("Student Added");
  location.href = "student.html";
});
