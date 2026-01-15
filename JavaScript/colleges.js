const COLLEGE_API = "https://placementstracker-4.onrender.com/api/colleges";
const collegeBox = document.getElementById("collegeBox");
const collegeForm = document.getElementById("collegeForm");
const collegeNameInput = document.getElementById("collegeName");

// GET colleges
async function loadColleges() {
  const res = await fetch(COLLEGE_API);
  const data = await res.json();

  console.log("Colleges API response:", data); // 🔍 IMPORTANT

  collegeBox.innerHTML = data.map(c => {
    // ✅ SAFELY FETCH NAME (handles all backend cases)
    const name =
      c.college_name ||
      c.name ||
      c.collegeName ||
      "Unnamed College";

    return `
      <div class="card">
        <h3>${name}</h3>
      </div>
    `;
  }).join("");
}

// POST college
collegeForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    // ✅ backend expects THIS
    college_name: collegeNameInput.value
  };

  await fetch(COLLEGE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  collegeNameInput.value = "";
  loadColleges();
});

// Initial load
loadColleges();
