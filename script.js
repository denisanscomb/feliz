// List of participants and their Secret Santa matches
const secretSantaMapping = {
  Jim: "Steve",
  Margaret: "Felicity",
  Denis: "Catherine",
  Maddy: "Alasdair",
  Maders: "Jim",
  Erick: "Stephanie",
  Cada: "Margaret",
  Steve: "Maders",
  Felicity: "Denis",
  Waleed: "Erick",
  Steph: "Waleed",
  Alasdair: "Maddy"
};

// Ornaments' positions on the tree
const ornamentPositions = [
  { left: "45%", top: "10%" },
  { left: "30%", top: "20%" },
  { left: "60%", top: "25%" },
  { left: "20%", top: "40%" },
  { left: "70%", top: "40%" },
  { left: "50%", top: "50%" },
  { left: "15%", top: "60%" },
  { left: "80%", top: "60%" },
  { left: "35%", top: "70%" },
  { left: "65%", top: "75%" },
  { left: "25%", top: "80%" },
  { left: "75%", top: "85%" }
];

// Dynamically create ornaments
const ornamentsContainer = document.querySelector(".ornaments");

Object.keys(secretSantaMapping).forEach((name, index) => {
  const ornament = document.createElement("div");
  ornament.classList.add("ornament");
  ornament.style.left = ornamentPositions[index].left;
  ornament.style.top = ornamentPositions[index].top;
  ornament.textContent = name[0]; // Display first letter of the name
  ornament.dataset.name = name;

  // Add click event to reveal the Secret Santa match
  ornament.addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `${name}, you are buying a gift for ${secretSantaMapping[name]}! 🎁`;
    resultDiv.classList.remove("hidden");
  });

  ornamentsContainer.appendChild(ornament);
});
