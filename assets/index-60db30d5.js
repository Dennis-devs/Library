(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();document.querySelector("#app").innerHTML=`
<div>
<nav id='disp'><h1>Book Titles</h1><ul id='lists'></ul></nav>
<div id='main'>
<h3 id='note'>Create a Library of your To-Read Books</h3>
<div id='top'>
<h1 id='lib'>My To-Read Library</h1>  
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
</div>`;let m=document.querySelector(".title"),h=document.querySelector(".author"),b=document.querySelector(".pages");function d(t,r,i,a){return this.title=t,this.author=r,this.pages=i,this.read=a,this.info=()=>"<h1>"+t+"</h1> <br /><h2>"+r+"</h2> <br /><h3>"+i+'</h3><button class="reader" id="reader">'+a+"</button>",this.info()}function y(t){t.preventDefault(),document.getElementById("favDialog").showModal()}let v=document.querySelector(".press");v.addEventListener("click",y);let u,l=[],f=document.getElementById("lists");function L(){l.push(m.value);for(let t=0;t<l.length;t++)f.childElementCount<l.length&&(u=document.createElement("li"),u.className="inner"),f.appendChild(u),u.innerHTML=l[t],u.setAttribute("id",l[t]),console.log(f.innerHTML)}function E(){var t="0123456789ABCDEF",r="#";for(let i=0;i<6;i++)r+=t[Math.floor(Math.random()*16)];return console.log(r),r}function M(t){t.preventDefault(),L();function r(o,p,s,g){this.title=o,this.author=p,this.pages=s,this.read=g}r.prototype.yesRead="Read",d.prototype.readStatus="Not Read",Object.setPrototypeOf(d.prototype,r.prototype);let i=new d(m.value,h.value,b.value,d.prototype.readStatus),a=document.getElementById("shelf"),e=document.createElement("div");e.className="book";for(let o=0;o<l.length;o++)console.log(l),e.setAttribute("data-keys",l.indexOf(l[o]));a.appendChild(e),e.innerHTML=i.info(),console.log(e.childNodes[0]),console.log(a.innerHTML);let n='<i class="fa-solid fa-trash-can"><span class="tooltiptext">Delete book</span></i>';if(e.insertAdjacentHTML("beforeend",n),e.style.backgroundColor=E(),a.childElementCount>=1){let o=function(s){s.target.innerHTML===d.prototype.readStatus?(Object.setPrototypeOf(d.prototype,r.prototype),s.target.innerHTML=d.prototype.yesRead):s.target.innerHTML=d.prototype.readStatus};var A=o;document.querySelectorAll(".reader").forEach(s=>s.addEventListener("click",o))}function c(o){console.log(o),o.target.parentNode.remove();let p=o.target.parentNode.children[0].innerHTML,s=document.getElementById(p);f.removeChild(s),console.log(typeof parseInt(o.target.parentNode.dataset.keys)),l.splice(parseInt(o.target.parentNode.dataset.keys),1),console.log(l)}document.querySelectorAll(".fa-solid").forEach(o=>o.addEventListener("click",c)),favDialog.close(),m.value="",h.value="",b.value=""}let T=document.querySelector('[name="formz"]');T.addEventListener("submit",M);function B(t){t.preventDefault(),favDialog.close(),m.value="",h.value="",b.value=""}let S=document.getElementById("cancel");S.addEventListener("click",B);
