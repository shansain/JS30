const box = [...document.querySelectorAll(".box")];

const open =(e)=>{
    if (!e.target.className){
        return
    }else{
        console.log(e);
        const el = e.target
        console.log(el);
        el.classList.toggle("open")
    }
    
}
box.map(el => {
    el.addEventListener("click",open)
    
})


console.log(box);

