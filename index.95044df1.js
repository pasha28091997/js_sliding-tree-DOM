document.querySelectorAll(".tree > li").forEach(function(e){var t;(t=document.createElement("span")).textContent=e.childNodes[0].textContent.trim(),e.childNodes[0].replaceWith(t),t.addEventListener("click",function(){var t;(t=e.querySelector("ul"))&&(t.hidden=!t.hidden)})});
//# sourceMappingURL=index.95044df1.js.map
