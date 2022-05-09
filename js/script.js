let mobilecross=document.getElementById("mobilecross");
let mobilemenu=document.getElementById("mobilemenu");
let menuBar=document.getElementById("menuBar");
mobilecross.addEventListener('click', () =>{
    menuBar.style.top="-73vh"
})
mobilemenu.addEventListener('click', ()=>{
    menuBar.style.top="0vh";
})