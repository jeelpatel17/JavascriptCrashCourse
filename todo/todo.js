/* PROJECT 1 : TODO APP */
/* MY CATCHES */
/* 
1. The reset button should only appear after the ul has atleast 1 note
2. All notes should be categorized according to the fixed options given to the user, like work, personal, education. and have colorful tags at the right-end of each note
3. Each note should have a title and a description
*/
// PREVENTING THE PAGE TO BE RELOADED
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

// SAVE AND RESET BUTTONS
let saveBtn = document.getElementById("saveBtn");
let resetBtn = document.getElementById("resetBtn");
let ul = document.getElementById("ul");
let inpBar = document.getElementById("inp");

// SHOWING Existing LIs from LocalStorage
for (let i = 0; i < localStorage.length; i++) {
  let note = document.createElement("li");
  note.setAttribute("class", "lis");
  let content = localStorage.getItem(`note${i}`);
  note.innerText = content;
  ul.appendChild(note);
}

if (localStorage.length > 0) {
  resetBtn.style.display = "inline";
}

/* OVERWRITING PROBLEM STILL UNSOLVED */
// CREATING LIs
saveBtn.addEventListener("click", function () {
  let note = document.createElement("li"); // creating a list element
  note.setAttribute("class", "lis");
  if (inpBar.value.length > 0) {
    let content = inpBar.value; // grabbing #inp from which the note would be taken
    inpBar.value = "";
    note.innerText = content; // copying the note from input to the list of all notes
    ul.appendChild(note);
    let notes = document.getElementsByClassName("lis");
    for (let i = 0; i < notes.length; i++) {
      localStorage.setItem(`note${i}`, notes[i].innerText);
    }
    if (localStorage.length > 0) {
      resetBtn.style.display = "inline";
    }
  } else {
    inpBar.setAttribute("placeholder", "Please enter something in here!");
  }
});

// TO DELETE ALL NOTES ALTOGETHER
resetBtn.addEventListener("click", function () {
  let list = document.getElementById("ul");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    localStorage.clear();
    if (localStorage.length > 0) {
      resetBtn.style.display = "inline";
    } else {
      resetBtn.style.display = "none";
    }
  }
});