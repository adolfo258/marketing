const header = document.getElementById('header')
const headerImg = document.getElementById('headerImg')
const form = document.getElementById('form')



window.addEventListener('scroll', ()=>{
    let scrollPosition = Math.round(window.scrollY)
    console.log(scrollPosition)
    if(scrollPosition > 400){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const cel = e.target.cel.value
    const message = e.target.message.value
    
    firebase.database().ref('marketing-digital-2c3b5').push({name, email, cel, message})
    .then(form.reset())
})