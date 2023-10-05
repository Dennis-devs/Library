(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();document.querySelector("#app").innerHTML=`
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
</div>`;let f=document.querySelector(".title"),g=document.querySelector(".author"),b=document.querySelector(".pages");function n(t,o,s,a){return this.title=t,this.author=o,this.pages=s,this.read=a,this.info=()=>"<h1>"+t+"</h1> <br /><h2>"+o+"</h2> <br /><h3>"+s+'</h3><button class="reader">'+a+"</button>",this.info()}function L(t){t.preventDefault(),document.getElementById("favDialog").showModal()}let E=document.querySelector(".press");E.addEventListener("click",L);let c,i=[],p=document.getElementById("lists");function O(){i.push(f.value);for(let t=0;t<i.length;t++)p.childElementCount<i.length&&(c=document.createElement("li"),c.className="inner"),p.appendChild(c),c.innerHTML=i[t],c.setAttribute("id",i[t]),console.log(p.innerHTML)}function S(){var t="0123456789ABCDEF",o="#";for(let s=0;s<6;s++)o+=t[Math.floor(Math.random()*16)];return console.log(o),o}function M(t){t.preventDefault(),O();function o(r,m,h,v){this.title=r,this.author=m,this.pages=h,this.read=v}o.prototype.yesRead="Read",n.prototype.readStatus="Not Read",Object.setPrototypeOf(n.prototype,o.prototype);let s=new n(f.value,g.value,b.value,n.prototype.readStatus),a=document.getElementById("shelf"),e=document.createElement("div");e.className="book";for(let r=0;r<i.length;r++)console.log(i),e.setAttribute("data-keys",i.indexOf(i[r]));a.appendChild(e),e.innerHTML=s.info(),console.log(e.childNodes[0]),console.log(a.innerHTML);let l='<i class="fa-solid fa-trash-can"><span class="tooltiptext">Delete book</span></i>';e.insertAdjacentHTML("beforeend",l),e.style.backgroundColor=S();function d(r){console.log(r),u.innerHTML===n.prototype.readStatus?(console.log(Object.getPrototypeOf(n.prototype)),Object.setPrototypeOf(n.prototype,o.prototype),console.log(Object.getPrototypeOf(n.prototype)),console.log(n.prototype),u.innerHTML=n.prototype.yesRead):u.innerHTML=n.prototype.readStatus}let u=document.querySelector(".reader");u.addEventListener("click",d);function y(r){console.log(r),r.target.parentNode.remove();let m=r.target.parentNode.children[0].innerHTML,h=document.getElementById(m);p.removeChild(h),console.log(typeof parseInt(r.target.parentNode.dataset.keys)),i.splice(parseInt(r.target.parentNode.dataset.keys),1),console.log(i)}document.querySelectorAll(".fa-solid").forEach(r=>r.addEventListener("click",y)),favDialog.close(),f.value="",g.value="",b.value=""}let B=document.querySelector('[name="formz"]');B.addEventListener("submit",M);function T(t){t.preventDefault(),favDialog.close(),f.value="",g.value="",b.value=""}let k=document.getElementById("cancel");k.addEventListener("click",T);
