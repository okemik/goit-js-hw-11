import{S as m,i as c}from"./assets/vendor-DpVPnhEv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="50752157-0e570532136d69fa984569dbb";async function g(i){const o=`https://pixabay.com/api/?key=${h}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`,t=await fetch(o);if(!t.ok)throw new Error("API isteği başarısız oldu");return(await t.json()).hits}const y=document.querySelector("#search-form"),l=document.querySelector("#gallery"),a=document.querySelector("#loader");let b=new m(".gallery a");y.addEventListener("submit",async i=>{i.preventDefault();const o=i.currentTarget.searchQuery.value.trim();if(o){a.classList.remove("hidden"),l.innerHTML="";try{const t=await g(o);if(t.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=t.map(({webformatURL:e,largeImageURL:r,tags:n,likes:d,views:u,comments:f,downloads:p})=>`
        <div class="photo-card">
          <a href="${r}">
            <img src="${e}" alt="${n}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>👍 ${d}</b></p>
            <p><b>👁️ ${u}</b></p>
            <p><b>💬 ${f}</b></p>
            <p><b>⬇️ ${p}</b></p>
          </div>
        </div>
      `).join("");l.innerHTML=s,b.refresh()}catch(t){c.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}finally{a.classList.remove("hidden"),a.classList.add("hidden")}}});
//# sourceMappingURL=index.js.map
