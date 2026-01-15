const JOBROLE_API = "https://placementstracker-4.onrender.com/api/job-roles";

document.addEventListener("DOMContentLoaded", () => {
  const jobBox = document.getElementById("jobBox");

  async function loadJobRoles() {
    try {
      const res = await fetch(JOBROLE_API);
      const result = await res.json();

      // Handle array or wrapped response
      const jobRoles = Array.isArray(result)
        ? result
        : result.data || [];

      jobBox.innerHTML = jobRoles.map(j => {
        const name =
          j.role_name ??
          j.name ??
          j.title ??
          "Unnamed Job Role";

        return `
          <div class="card">
            <h3>${name}</h3>
          </div>
        `;
      }).join("");

    } catch (err) {
      console.error("Error fetching job roles:", err);
    }
  }

  loadJobRoles();
});
