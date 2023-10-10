(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();document.querySelector("#app").innerHTML=`
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
</div>`;let f=document.querySelector(".title"),b=document.querySelector(".author"),g=document.querySelector(".pages");function s(t,o,i,a){return this.title=t,this.author=o,this.pages=i,this.read=a,this.info=()=>"<h1>"+t+"</h1> <br /><h2>"+o+"</h2> <br /><h3>"+i+'</h3><button class="reader" id="reader">'+a+"</button>",this.info()}function L(t){t.preventDefault(),document.getElementById("favDialog").showModal()}let E=document.querySelector(".press");E.addEventListener("click",L);let c,l=[],p=document.getElementById("lists");function S(){l.push(f.value);for(let t=0;t<l.length;t++)p.childElementCount<l.length&&(c=document.createElement("li"),c.className="inner"),p.appendChild(c),c.innerHTML=l[t],c.setAttribute("id",l[t]),console.log(p.innerHTML)}function M(){var t="0123456789ABCDEF",o="#";for(let i=0;i<6;i++)o+=t[Math.floor(Math.random()*16)];return console.log(o),o}function B(t){t.preventDefault(),S();function o(r,m,h,y){this.title=r,this.author=m,this.pages=h,this.read=y}o.prototype.yesRead="Read",s.prototype.readStatus="Not Read",Object.setPrototypeOf(s.prototype,o.prototype);let i=new s(f.value,b.value,g.value,s.prototype.readStatus),a=document.getElementById("shelf"),e=document.createElement("div");e.className="book";for(let r=0;r<l.length;r++)console.log(l),e.setAttribute("data-keys",l.indexOf(l[r]));a.appendChild(e),e.innerHTML=i.info(),console.log(e.childNodes[0]),console.log(a.innerHTML);let n='<i class="fa-solid fa-trash-can"><span class="tooltiptext">Delete book</span></i>';e.insertAdjacentHTML("beforeend",n),e.style.backgroundColor=M();function d(r){u.innerHTML===s.prototype.readStatus?(Object.setPrototypeOf(s.prototype,o.prototype),u.innerHTML=s.prototype.yesRead):u.innerHTML=s.prototype.readStatus}let u=document.querySelector(".reader");u.addEventListener("click",d);function v(r){console.log(r),r.target.parentNode.remove();let m=r.target.parentNode.children[0].innerHTML,h=document.getElementById(m);p.removeChild(h),console.log(typeof parseInt(r.target.parentNode.dataset.keys)),l.splice(parseInt(r.target.parentNode.dataset.keys),1),console.log(l)}document.querySelectorAll(".fa-solid").forEach(r=>r.addEventListener("click",v)),favDialog.close(),f.value="",b.value="",g.value=""}let T=document.querySelector('[name="formz"]');T.addEventListener("submit",B);function k(t){t.preventDefault(),favDialog.close(),f.value="",b.value="",g.value=""}let A=document.getElementById("cancel");A.addEventListener("click",k);
