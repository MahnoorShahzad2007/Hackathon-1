// type Education = {
//     degree: string;
//     institute: string;
//     passingyear: string;
//   };
var educationData = [
    { degree: "HSC PART 2", institute: "Government Degree College Sector 11-B Karachi", passingyear: "(2023-25)" },
    { degree: "Certification in Cloud Applied Generative AI Engineer", institute: "GIAIC", passingyear: "(2024-present)" }
  ];
  
  var skillsData = ["TypeScript", "Next.js", "Node.js", "CSS", "HTML"];
  
  var workExperienceData = [
    { position: "Intern Software Developer", company: "Tech Solutions Ltd.", year: "2023" },
    { position: "Freelance Web Developer", company: "Self-Employed", year: "2022-2023" }
  ];
  
  function populateEducation() {
    var educationSection = document.querySelector("#education .card-grid");
    if (educationSection && educationData.length > 0) {
      educationData.forEach(function (item) {
        var educationCard = document.createElement("div");
        educationCard.classList.add("card", "education-card");
        educationCard.innerHTML = `
          <h2 class="card-title">${item.degree}</h2>
          <p class="card-subtitle">${item.institute}</p>
          <p class="card-details">${item.passingyear}</p>
        `;
        educationSection.appendChild(educationCard);
      });
    } else {
      console.warn("No education data available or section not found.");
    }
  }
  
  function populateSkills() {
    var skillsSection = document.querySelector("#skills .skill-list");
    if (skillsSection && skillsData.length > 0) {
      skillsData.forEach(function (skill) {
        var skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");
        skillItem.textContent = skill;
        skillsSection.appendChild(skillItem);
      });
    } else {
      console.warn("No skills data available or section not found.");
    }
  }
  
  function populateWorkExperience() {
    var workExperienceSection = document.querySelector("#work-experience .card-grid");
    if (workExperienceSection && workExperienceData.length > 0) {
      workExperienceData.forEach(function (work) {
        var workCard = document.createElement("div");
        workCard.classList.add("card", "work-experience-card");
        workCard.innerHTML = `
          <h2 class="card-title">${work.position}</h2>
          <p class="card-subtitle">${work.company}</p>
          <p class="card-details">${work.year}</p>
        `;
        workExperienceSection.appendChild(workCard);
      });
    } else {
      console.warn("No work experience data available or section not found.");
    }
  }
  
  function activateTab(tabId) {
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) {
      section.classList.add("hidden");
    });
  
    var activeSection = document.getElementById(tabId);
    if (activeSection) {
      activeSection.classList.remove("hidden");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("education-btn")?.addEventListener("click", function () {
      activateTab("education");
    });
    document.getElementById("skills-btn")?.addEventListener("click", function () {
      activateTab("skills");
    });
    document.getElementById("experience-btn")?.addEventListener("click", function () {
      activateTab("work-experience");
    });
  
    // Populate sections with data
    populateEducation();
    populateSkills();
    populateWorkExperience();
  });
  