const images=document.querySelectorAll("[data-src]");function preloadImage(e){const r=e.getAttribute("data-src");r&&(e.src=r)}const imgOptions={},imgObserver=new IntersectionObserver((e,r)=>{e.forEach(e=>{e.isIntersecting&&(preloadImage(e.target),r.unobserve(e.target))})},imgOptions);images.forEach(e=>{imgObserver.observe(e)});