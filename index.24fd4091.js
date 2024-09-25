document.querySelector(".tree").querySelectorAll("li").forEach(function(e){var t=document.createElement("span"),n=e.firstChild.textContent;t.textContent=n,e.firstChild.replaceWith(t);var r=e.querySelector("ul");r&&t.addEventListener("click",function(){r.classList.toggle("hidden")})});
//# sourceMappingURL=index.24fd4091.js.map
