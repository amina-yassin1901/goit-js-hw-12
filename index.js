import{i as n,S as i}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const c=async r=>{const a=`https://pixabay.com/api/?key=48427757-fc949e79797ba7e940d238484&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(a);if(!t.ok)throw new Error("API request failed");return(await t.json()).hits}catch(t){throw console.error(t),new Error("An error occurred while fetching images")}},d=r=>`
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
    `,u=r=>{const s=document.querySelector(".js-gallery"),a=r.map(t=>d(t)).join("");s.innerHTML=a},m=document.querySelector(".js-search-form"),f=document.querySelector(".js-gallery"),y=async r=>{r.preventDefault();const s=r.currentTarget.elements.query.value.trim();if(s===""){n.error({title:"Error",message:"Please enter a search term"});return}f.innerHTML="";try{document.querySelector(".loader").classList.remove("hidden");const e=await c(s);if(e.length===0){n.info({title:"No results",message:"No images found. Please try again."});return}u(e)}catch{n.error({title:"Error",message:"Something went wrong!"})}finally{document.querySelector(".loader").classList.add("hidden")}new i(".js-gallery a").refresh()};m.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
