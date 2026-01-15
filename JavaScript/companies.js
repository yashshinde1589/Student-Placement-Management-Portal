const COMPANY_API = "https://placementstracker-4.onrender.com/api/companies";

const companyBox = document.getElementById("companyBox");
const companyForm = document.getElementById("companyForm");
const companyNameInput = document.getElementById("companyName");

// GET companies
async function loadCompanies() {
  const res = await fetch(COMPANY_API);
  const data = await res.json();

  console.log("Companies API response:", data); // 🔍 debug once

  companyBox.innerHTML = data.map(c => {
    // ✅ SAFE name extraction (handles all backend cases)
    const name =
      c.company_name ||
      c.name ||
      c.companyName ||
      "Unnamed Company";

    return `
      <div class="card">
        <h3>${name}</h3>
      </div>
    `;
  }).join("");
}

// POST company
companyForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    // backend commonly expects this
    company_name: companyNameInput.value
  };

  await fetch(COMPANY_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  companyNameInput.value = "";
  loadCompanies();
});

// Initial load
loadCompanies();
