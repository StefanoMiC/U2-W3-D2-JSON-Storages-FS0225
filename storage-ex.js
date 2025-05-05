const form = document.querySelector("form");
const usersGrid = document.getElementById("users-grid");

const usersFromStorage = localStorage.getItem("users");

const users = usersFromStorage ? JSON.parse(usersFromStorage) : [];

form.onsubmit = function (e) {
  e.preventDefault();

  console.log("Submit", e);

  const user = {
    name: e.target.elements.name.value,
    surname: e.target.elements.surname.value,
    email: e.target.elements.email.value
  };

  users.push(user);
  generateCards();

  console.log("user", user);

  localStorage.setItem("users", JSON.stringify(users)); // salviamo in maniera semi-permanente l'array nello stato attuale
};

const generateCards = () => {
  usersGrid.innerHTML = ""; // svuota la griglia prima di ciclare l'array e creare nuove card, evitando così dupplicati
  //   per ogni oggetto user generiamo col+card che inseriamo nella usersGrid
  users.forEach(u => {
    const col = document.createElement("div");
    col.className = "col-md-3";

    col.innerHTML = `<div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${u.name} ${u.surname}</h5>
                            <p class="card-text">${u.email}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`;

    usersGrid.appendChild(col);
  });
};

// all'avvio della pagina chiediamo a generateCards di guardare all'array users, se trova degli oggetti li ciclerà e genererà col+card, se no starà fermo
window.addEventListener("DOMContentLoaded", function () {
  generateCards();
});
