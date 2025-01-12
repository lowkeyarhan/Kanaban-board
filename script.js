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
    uid.style.color = isDark ? "rgb(44, 44, 46)" : " rgb(0, 122, 255)";
  });
  document.querySelectorAll("#editbtn").forEach((editbtn) => {
    editbtn.style.color = isDark ? "white" : " rgb(0, 122, 255)";
  });
  document.querySelectorAll("#ticketdel").forEach((ticketdel) => {
    ticketdel.style.color = isDark ? "white" : " rgb(0, 122, 255)";
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
  const newid = shortid();
  const color = selected.getAttribute("col") || "red"; // Default color if none selected
  createTicket(color, textarea.value.trim(), newid);

  // Reset Modal and Button
  modal.style.display = "none";
  textarea.value = "";
  btn.disabled = true;
  selected.style.backgroundColor = "red";
  selected.setAttribute("col", "red");
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

  const delbtn = document.createElement("i");
  delbtn.setAttribute("class", "fa-solid fa-trash-can");
  delbtn.setAttribute("id", "ticketdel");

  const editbtn = document.createElement("i");
  editbtn.setAttribute("class", "fa-solid fa-pen-to-square");
  editbtn.setAttribute("id", "editbtn");

  const text = document.createElement("div");
  text.className = "text";
  text.innerText = task;

  tnav.append(editbtn, delbtn, col, uid);
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

//Delete ticket mode
let isDeleteModeActive = false;
del.addEventListener("click", function () {
  const tickets = document.querySelectorAll(".ticket");
  const deleteButtons = document.querySelectorAll("#ticketdel");
  const editbtn = document.querySelectorAll("#editbtn");
  isDeleteModeActive = !isDeleteModeActive; // Toggle delete mode
  for (let i = 0; i < tickets.length; i++) {
    if (isDeleteModeActive) {
      deleteButtons[i].style.display = "block";
      editbtn[i].style.display = "none";
      tickets[i].addEventListener("mouseover", handleMouseOver);
      tickets[i].addEventListener("mouseout", handleMouseOut);
      deleteButtons[i].addEventListener("click", function () {
        tickets[i].remove();
      });
    } else {
      tickets[i].style.border = "none";
      editbtn[i].style.display = "block";
      deleteButtons[i].style.display = "none";
      tickets[i].removeEventListener("mouseover", handleMouseOver);
      tickets[i].removeEventListener("mouseout", handleMouseOut);
    }
  }
});

// Named functions for event listeners
function handleMouseOver(e) {
  e.currentTarget.style.border = "2px solid red";
  const deleteButton = e.currentTarget.querySelector("#ticketdel");
  if (deleteButton) {
    deleteButton.style.color = "red";
  }
}
function handleMouseOut(e) {
  e.currentTarget.style.border = "none";
  const deleteButton = e.currentTarget.querySelector("#ticketdel");
  if (deleteButton) {
    deleteButton.style.color = "white";
  }
}
