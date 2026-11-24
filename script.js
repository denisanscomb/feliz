// Define the relationships between people and their Secret Santa recipients
const secretSantaMap = {
  Jim: "Steve",
  Margaret: "Felicity",
  Denis: "Cada",
  Maddy: "Alasdair",
  Maders: "Jim",
  Erick: "Steph",
  Cada: "Margaret",
  Steve: "Maders",
  Felicity: "Denis",
  Waleed: "Erick",
  Steph: "Waleed",
  Alasdair: "Maddy"
};

// Add event listeners to each image
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    const buyerName = img.id;
    const recipientName = secretSantaMap[buyerName];
    if (recipientName) {
      img.src = `${recipientName}.jpg`; // Update the image source to the recipient's picture
      img.alt = recipientName; // Update the alt text
    }
  });
});