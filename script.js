const modal=document.getElementById("modal");
const title=document.getElementById("modal-title");
document.querySelectorAll("[data-reward]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    title.textContent=btn.dataset.reward;
    modal.classList.add("show");
  });
});
document.getElementById("close").onclick=()=>modal.classList.remove("show");
document.getElementById("done").onclick=()=>modal.classList.remove("show");
modal.addEventListener("click",e=>{if(e.target===modal) modal.classList.remove("show")});
