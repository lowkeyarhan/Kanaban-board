// const drkthm = document.querySelector("#theme");
// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const workspace = document.querySelector(".workspace");
// const srcbar = document.querySelector(".searchbar");
// const inputbar = document.querySelector("input");
// const nav = document.querySelector(".navigation");
// const filter = document.querySelector(".filters");
// const textarea = document.querySelector("textarea");
// const modal = document.querySelector(".modal");
// const btn = document.querySelector("button");
// const tn = document.querySelector(".ticketnav");

// //dark theme
// drkthm.addEventListener("click", function (e) {
//   if (workspace.style.backgroundColor === "rgb(72, 72, 74)") {
//     workspace.style.backgroundColor = "white";
//     srcbar.style.backgroundColor = "white";
//     nav.style.backgroundColor = "rgb(0, 122, 255)";
//     inputbar.style.backgroundColor = "white";
//     add.style.color = "white";
//     del.style.color = "white";
//     drkthm.style.color = "white";
//     filter.style.backgroundColor = "rgba(0, 0, 0, 0.29)";
//     textarea.style.backgroundColor = "white";
//     modal.style.backgroundColor = "rgb(0, 122, 255)";
//     btn.style.backgroundColor = "white";
//     btn.style.color = "black";
//   } else {
//     workspace.style.backgroundColor = "rgb(72, 72, 74)";
//     srcbar.style.backgroundColor = "rgb(99, 99, 102)";
//     inputbar.style.backgroundColor = "rgb(99, 99, 102)";
//     nav.style.backgroundColor = "black";
//     add.style.color = "rgb(0, 122, 255)";
//     del.style.color = "rgb(0, 122, 255)";
//     drkthm.style.color = "rgb(0, 122, 255)";
//     filter.style.backgroundColor = "rgba(255, 255, 255, 0.29)";
//     textarea.style.backgroundColor = "rgba(99,99,102)";
//     modal.style.backgroundColor = "black";
//     btn.style.backgroundColor = "rgb(0, 122, 255)";
//     btn.style.color = "white";
//     ticketnav.style.backgroundColor = "rgb(44, 44, 46)";
//   }
// });

// //modal on-off
// const additem = document.querySelector("#add");
// additem.addEventListener("click", function () {
//   modal.style.display = "block";
// });

// btn.disabled = true;

// //enable the ad item button on real entries
// let message = textarea.value;
// textarea.addEventListener("keydown", function (e) {
//   if (
//     (event.keyCode >= 65 && event.keyCode <= 90) ||
//     (event.keyCode >= 97 && event.keyCode <= 122) ||
//     (event.keyCode >= 49 && event.keyCode <= 64)
//   )
//     console.log("y");
//   btn.disabled = false;
// });

// //on clicking add item
// btn.addEventListener("click", function () {
//   const newid = shortid();
//   //   console.log(message, "     ", newid);
//   //   console.log(selected.getAttribute("col"));
//   modal.style.display = "none";
//   createTicket(selected.getAttribute("col"), textarea.value, newid);
//   textarea.value = "";
//   btn.disabled = true;
// });

// //function to create the tickets
// function createTicket(color, task, unid) {
//   const ticket = document.createElement("div");
//   ticket.setAttribute("class", "ticket");
//   const col = document.createElement("div");
//   col.setAttribute("class", "imp");
//   col.style.backgroundColor = color;
//   const uid = document.createElement("div");
//   uid.setAttribute("class", "uid");
//   uid.innerText = unid;
//   const tnav = document.createElement("div");
//   tnav.setAttribute("class", "ticketnav");
//   tnav.appendChild(col);
//   tnav.appendChild(uid);
//   ticket.appendChild(tnav);
//   const text = document.createElement("div");
//   text.setAttribute("class", "text");
//   text.innerText = task;
//   ticket.appendChild(text);
//   workspace.appendChild(ticket);
// }

// //modal color filter choose
// const selected = document.querySelector(".selection");
// const options = document.querySelectorAll(".options");
// for (let i = 0; i < options.length; i++) {
//   options[i].addEventListener("click", function (e) {
//     selected.style.backgroundColor = event.target.getAttribute("col");
//     selected.setAttribute("col", event.target.getAttribute("col"));
//   });
// }

// DOM Elements
const drkthm = document.querySelector("#theme");
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const workspace = document.querySelector(".workspace");
const srcbar = document.querySelector(".searchbar");
const inputbar = document.querySelector("input");
const nav = document.querySelector(".navigation");
const filter = document.querySelector(".filters");
const textarea = document.querySelector("textarea");
const modal = document.querySelector(".modal");
const btn = document.querySelector("button");
const selected = document.querySelector(".selection");
const options = document.querySelectorAll(".options");

// Toggle Dark Theme
drkthm.addEventListener("click", () => {
  const isDark = workspace.style.backgroundColor === "rgb(72, 72, 74)";

  // Apply theme styles
  workspace.style.backgroundColor = isDark ? "white" : "rgb(72, 72, 74)";
  srcbar.style.backgroundColor = isDark ? "white" : "rgb(99, 99, 102)";
  nav.style.backgroundColor = isDark ? "rgb(0, 122, 255)" : "black";
  inputbar.style.backgroundColor = isDark ? "white" : "rgb(99, 99, 102)";
  add.style.color = isDark ? "white" : "rgb(0, 122, 255)";
  del.style.color = isDark ? "white" : "rgb(0, 122, 255)";
  drkthm.style.color = isDark ? "white" : "rgb(0, 122, 255)";
  filter.style.backgroundColor = isDark
    ? "rgba(0, 0, 0, 0.29)"
    : "rgba(255, 255, 255, 0.29)";
  textarea.style.backgroundColor = isDark ? "white" : "rgb(99, 99, 102)";
  modal.style.backgroundColor = isDark ? "rgb(0, 122, 255)" : "black";
  btn.style.backgroundColor = isDark ? "white" : "rgb(0, 122, 255)";
  btn.style.color = isDark ? "black" : "white";

  document.querySelectorAll(".ticket").forEach((ticket) => {
    ticket.style.backgroundColor = isDark
      ? " rgb(0, 122, 255)"
      : "rgb(44, 44, 46)";
  });
  document.querySelectorAll(".uid").forEach((uid) => {
    uid.style.color = isDark
      ? "rgb(44, 44, 46)"
      : " rgb(0, 122, 255)";
  });
});

// Show Modal
add.addEventListener("click", () => {
  modal.style.display = "block";
});

// Enable Button When Textarea Has Content
btn.disabled = true;
textarea.addEventListener("input", () => {
  btn.disabled = !textarea.value.trim();
});

// Add Ticket on Button Click
btn.addEventListener("click", () => {
  const newid = shortid(); // Generate unique ID
  const color = selected.getAttribute("col") || "white"; // Default color if none selected
  createTicket(color, textarea.value.trim(), newid);

  // Reset Modal and Button
  modal.style.display = "none";
  textarea.value = "";
  btn.disabled = true;
});

// Function to Create Tickets
function createTicket(color, task, unid) {
  const ticket = document.createElement("div");
  ticket.className = "ticket";

  const tnav = document.createElement("div");
  tnav.className = "ticketnav";

  const col = document.createElement("div");
  col.className = "imp";
  col.style.backgroundColor = color;

  const uid = document.createElement("div");
  uid.className = "uid";
  uid.innerText = unid;

  const text = document.createElement("div");
  text.className = "text";
  text.innerText = task;

  tnav.append(col, uid);
  ticket.append(tnav, text);
  workspace.appendChild(ticket);
}

// Handle Color Selection in Modal
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const color = e.target.getAttribute("col");
    selected.style.backgroundColor = color;
    selected.setAttribute("col", color);
  });
});
