 const travelPackages = [
  {
    destination: "Turkey",
    price: 1500,
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa"
  },
  {
    destination: "Dubai",
    price: 1200,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  },
  {
    destination: "Malaysia",
    price: 1800,
    image:  "https://images.unsplash.com/photo-1508264165352-258859e62245" 
  },
  {
    destination: "Egypt",
    price: 900,
   image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
} 
];

const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const packageList = document.getElementById("packageList");

function displayPackages() {
  packageList.innerHTML = "";

  travelPackages.forEach(pkg => {
    const div = document.createElement("div");
    div.className = "package-card";
    div.innerHTML = `
      <img src="${pkg.image}">
      <h3>${pkg.destination}</h3>
      <p>Price per day: $${pkg.price}</p>
    `;
    packageList.appendChild(div);
  });
}

displayPackages();

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const destination = document.getElementById("destination").value;
  const days = document.getElementById("days").value;

  if (!name || !destination || !days) {
    message.style.color = "red";
    message.textContent = "fadlan buuxi mesha banan!";
    return;
  }

  const selectedPackage = travelPackages.find(
    pkg => pkg.destination === destination
  );

  const totalCost = selectedPackage.price * days;

  message.textContent =
"soodhowow " + name + "! safarkagu wa diyaar " + destination +
" waxad ku heleysa" + days + " maalin gududaheda qiimaha waa $" + totalCost;
});


