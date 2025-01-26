import{a as n,i,S as c}from"./assets/vendor-tnUJPedx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=async r=>{const s="48427757-fc949e79797ba7e940d238484",a="https://pixabay.com/api/",o={key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:e}=await n.get(a,{params:o});return e.hits},u=r=>`
    <li class="gallery-item">
        <a href="${r.largeImageURL}">
        <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
        <p class="info-item"><b>Likes:</b> ${r.likes}</p>
        <p class="info-item"><b>Views:</b> ${r.views}</p>
        <p class="info-item"><b>Comments:</b> ${r.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${r.downloads}</p>
        </div>
    </li>
    `,m=r=>{const s=document.querySelector(".js-gallery"),a=r.map(o=>u(o)).join("");s.innerHTML=a},f=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),y=async r=>{r.preventDefault();const s=r.currentTarget.elements.query.value.trim();if(s===""){i.error({title:"Error",message:"Please enter a search term"});return}p.innerHTML="";try{document.querySelector(".loader").classList.remove("hidden");const e=await d(s);if(e.length===0){i.info({title:"No results",message:"No images found. Please try again."});return}m(e)}catch{i.error({title:"Error",message:"Something went wrong!"})}finally{document.querySelector(".loader").classList.add("hidden")}new c(".js-gallery a").refresh()};f.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
