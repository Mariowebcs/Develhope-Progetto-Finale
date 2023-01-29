
let elementsToWatch = document.querySelectorAll('.watch');

let callback = function (items) {
    items.forEach((item)=>{
        if(item.isIntersecting){
            item.target.classList.add('in-page')
        }else{
            item.target.classList.remove('in-page')
        }
    })
}

