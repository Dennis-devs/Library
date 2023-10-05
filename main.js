import './style.css'

document.querySelector('#app').innerHTML = `
<div>
<nav id='disp'><h1>Book Shelf</h1><ul id='lists'></ul></nav>
<div id='main'>
<div id='top'>
<h1 id='lib'>The Library</h1> 
<div id='accounts'>
<button id='btn1'>Log In</button>
<button id='btn2'>Create Account</button>
</div>
</div>
<form>
<button class="press" type="submit">Add Book</button>
</form><br />
<dialog id='favDialog'>
<form  name="formz" method="get">
<label>
Title:
<input type='text' class='title' name='title' placeholder='Enter Book title' required autofocus/>
</label> <br/>
<label>
Author:
<input type='text' class='author' name='author' placeholder='Enter Author name'  />
</label> <br/>
<label>
Pages:
<input type='number' class='pages' name='pages' placeholder='Enter number of pages' />
</label> <br/>
<button id='cancel' formmethod="dialog">Cancel</button>
<button id='submitbtn' type="submit">Submit</button>
</form>
</dialog>
<div id='shelf'></div>
</div>
</div>`

let Title = document.querySelector('.title')
let Author = document.querySelector('.author')
let Pages = document.querySelector('.pages')
//let Read = document.querySelectorAll('.reader')

//the Books constructor function
function Books(title, author, pages, read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info = ()=>{ 
        let text = '<h1>' + title + '</h1>' + ' <br />' + '<h2>' + author + '</h2>' + ' <br />' + '<h3>' + pages + '</h3>' + '<button class="reader">' + read + '</button>'
      return text
    }
   return this.info()   
 } 

//let Arr = [];
function newLib(e){ 
    e.preventDefault()
    const favDialog = document.getElementById("favDialog");
    favDialog.showModal()  
}
   let Press = document.querySelector('.press')
   Press.addEventListener('click', newLib)

let smalldiv;
let Arr = [];
let bigdiv = document.getElementById('lists')
function disp(){
    Arr.push(Title.value)
    for (let i=0; i<Arr.length; i++){
        if(bigdiv.childElementCount < Arr.length){
            smalldiv = document.createElement('li')
            smalldiv.className = 'inner'  
        }
            bigdiv.appendChild(smalldiv)
            
            //Add book title to bookshelf from the dialog form if Addbook has no entry
            smalldiv.innerHTML = Arr[i]
            smalldiv.setAttribute('id', Arr[i])
            console.log(bigdiv.innerHTML)
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }
  
function storeBook(e){
    e.preventDefault()
    disp()
    function Obj(title, author, pages, read){
        this.title=title
        this.author=author
        this.pages=pages
        this.read=read
    }
    function Objtwo(title, author, pages, read){
        this.title=title
        this.author=author
        this.pages=pages
        this.read=read
    }
    Objtwo.prototype.yesRead = 'Read'
    //Obj.prototype.notRead = 'Not Read'
    Books.prototype.readStatus = 'Not Read'
    Object.setPrototypeOf(Books.prototype, Objtwo.prototype)
    let newBook = new Books(Title.value, Author.value, Pages.value, Books.prototype.readStatus)
    let bigdivsec = document.getElementById('shelf')
    let smalldiv2 = document.createElement('div')
        smalldiv2.className = 'book'
    
     for(let i = 0; i<Arr.length; i++){
        console.log(Arr)
        smalldiv2.setAttribute("data-keys", Arr.indexOf(Arr[i]))
     }
        bigdivsec.appendChild(smalldiv2)
        smalldiv2.innerHTML = newBook.info()
        //console.log(Object.getPrototypeOf(newBook))
        console.log(smalldiv2.childNodes[0])
        console.log(bigdivsec.innerHTML)
        let close = '<i class="fa-solid fa-trash-can"><span class="tooltiptext">Delete book</span></i>'
        smalldiv2.insertAdjacentHTML('beforeend', close)

        smalldiv2.style.backgroundColor = getRandomColor()
        
        
        function Reader(e){
        console.log(e)
                if(Read.innerHTML === Books.prototype.readStatus){
                    //console.log(Read.innerHTML === Obj.prototype.readStatus)
                    console.log(Object.getPrototypeOf(Books.prototype))
                    Object.setPrototypeOf(Books.prototype, Objtwo.prototype)
                    console.log(Object.getPrototypeOf(Books.prototype))
                    console.log(Books.prototype)
                    Read.innerHTML = Books.prototype.yesRead
                }
                else
                //Object.setPrototypeOf(Books.prototype, Obj.prototype)
                Read.innerHTML = Books.prototype.readStatus
        }
        let Read = document.querySelector(".reader")
        Read.addEventListener('click', Reader)
        
    //Remove book from the main page and bookshelf
        function removeBook(e){
            console.log(e)
            e.target.parentNode.remove()
            let result = e.target.parentNode.children[0].innerHTML
            let childs = document.getElementById(result)
            bigdiv.removeChild(childs)
            console.log(typeof(parseInt(e.target.parentNode.dataset.keys)))

            Arr.splice(parseInt(e.target.parentNode.dataset.keys), 1)
            console.log(Arr)
        }
        
        let removes = document.querySelectorAll('.fa-solid')
        removes.forEach(item => item.addEventListener('click', removeBook))
        
        favDialog.close()
        Title.value = '' 
        Author.value = '' 
        Pages.value = '' 
        
}
let submission = document.querySelector('[name="formz"]')
submission.addEventListener('submit', storeBook);

function closer(e){
    e.preventDefault()
    favDialog.close()
    Title.value = ''
    Author.value = '' 
    Pages.value = ''
}
let close = document.getElementById('cancel')  
close.addEventListener('click', closer)
