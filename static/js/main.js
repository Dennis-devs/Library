let Title = document.querySelector(".title");
let Author = document.querySelector(".author");
let Pages = document.querySelector(".pages");
//let Read = document.querySelectorAll('.reader')

//the Books constructor function
function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    let text =
      "<h1>" +
      title +
      "</h1>" +
      " <br />" +
      "<h2>" +
      author +
      "</h2>" +
      " <br />" +
      "<h3>" +
      pages +
      "</h3>" +
      '<button class="reader" id="reader">' +
      read +
      "</button>";
    let text2 = `<h1> ${this.title} </h1> <br /> <h2> ${this.author} </h2> <br /> <h3> ${this.pages} </h3> <button class="reader" id="reader"> ${this.read} </button>`;
    return text;
  };
  return this.info();
}

let smalldiv;
let Arr = [];
let bigdiv = document.getElementById("lists");
function bookTitles() {
  Arr.push(Title.value)
  for (let i = 0; i < Arr.length; i++) {
    if (bigdiv.childElementCount < Arr.length) {
      smalldiv = document.createElement("li");
      smalldiv.className = "inner";
    }
    bigdiv.appendChild(smalldiv);

    //Add title to book titles from the form if Addbook has no entry
    smalldiv.innerHTML = Arr[i];
    smalldiv.setAttribute("id", Arr[i]);
  }
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //console.log(color)
  return color;
}

function storeBook(e) {
  //e.preventDefault()
  bookTitles();
  function Objtwo(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  Objtwo.prototype.yesRead = "Read";
  //Obj.prototype.notRead = 'Not Read'
  Books.prototype.readStatus = "Not Read";
  Object.setPrototypeOf(Books.prototype, Objtwo.prototype);

  let newBook = new Books(
    Title.value,
    Author.value,
    Pages.value,
    Books.prototype.readStatus
  );
  let bigdivsec = document.getElementById("shelf");
  let smalldiv2 = document.createElement("div");
  smalldiv2.className = "book";

  for (let i = 0; i < Arr.length; i++) {
    smalldiv2.setAttribute("data-keys", Arr.indexOf(Arr[i]));
  }
  bigdivsec.appendChild(smalldiv2);
  smalldiv2.innerHTML = newBook.info();

  let close =
    '<i class="fa-solid fa-trash-can"><span class="tooltiptext">Delete book</span></i>';
  smalldiv2.insertAdjacentHTML("beforeend", close);

  smalldiv2.style.backgroundColor = getRandomColor();

  //Remove book from the main page and booktitles
  function removeBook(e) {
    // console.log(e)
    e.target.parentNode.remove();
    let result = e.target.parentNode.children[0].innerHTML;
    let childs = document.getElementById(result);
    bigdiv.removeChild(childs);

    Arr.splice(parseInt(e.target.parentNode.dataset.keys), 1);
  }

  let trashcan = document.querySelectorAll(".fa-solid");
  trashcan.forEach((item) => item.addEventListener("click", removeBook));

  // Read status button
  function Reader(e) {
    //let Read2 = document.querySelector(".reader")

    if (e.target.innerHTML === Books.prototype.readStatus) {
      // Object.setPrototypeOf(Books.prototype, Objtwo.prototype)
      e.target.innerHTML = Objtwo.prototype.yesRead;
    } else if ((e.target.innerHTML = Objtwo.prototype.yesRead)) {
      // Object.setPrototypeOf(Books.prototype, Obj.prototype)
      e.target.innerHTML = Books.prototype.readStatus;
    }
  }
  if (bigdivsec.childElementCount >= 1) {
    let Read = document.querySelectorAll(".reader");
    Read.forEach((btn) => btn.addEventListener("click", Reader));
  }

  // remove form via submit button
  setTimeout(() => {
    e.target.closest("#mains").remove();
  }, 100);
}
let submission = document.getElementById("survey-form");
submission.addEventListener("submit", storeBook);

function removeForm(e) {
  //console.log(e.target)
  e.target.closest("body > main").remove();
}
let remover = document.querySelector(".close-btn");
remover.addEventListener("click", removeForm);
