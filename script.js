// Define the relationships between people and their Secret Santa recipients
const secretSantaMap = {
  Jim: "Felicity",
  Felicity: "Denis",
  Denis: "Margaret",
  Margaret: "Alasdair",
  Alasdair: "Steve",
  Steve: "Waleed",
  Waleed: "Steph",
  Steph: "Cada",
  Cada: "Erick",
  Erick: "Maddy",
  Maddy: "Maders",
  Maders: "Jim"
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
