let lists = document.querySelector('.lists')
let buttons = document.querySelectorAll('button')


function gridview(){
    lists.classList.add("grid")
}
function listview(){
    lists.classList.remove("grid")
}


buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        removexistingClass()
        button.classList.add('active')
    })
})

function removexistingClass(){
    buttons.forEach(b=>b.classList.remove('active'))
}


