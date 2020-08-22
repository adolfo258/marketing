const header = document.getElementById('header')
const headerImg = document.getElementById('headerImg')



window.addEventListener('scroll', ()=>{
    let scrollPosition = Math.round(window.scrollY)
    console.log(scrollPosition)
    if(scrollPosition > 400){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})