import{a as d,S as f,i}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="55202338-7fca1a1810bad0a3b47ced76b";function p(s){return d.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a");function y(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r.likes}</p>
          <p><b>Views</b> ${r.views}</p>
          <p><b>Comments</b> ${r.comments}</p>
          <p><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.error({message:"Please fill in the search field!"});return}g(),b(),p(o).then(r=>{if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(r.hits)}).catch(r=>{i.error({message:"Something went wrong!"}),console.log(r)}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=index.js.map
