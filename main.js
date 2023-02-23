const containerItem = document.querySelector('.slides')
const containerBalls = document.querySelector('.balls')
let atual = 0
let rola = true

const images =[
    {'id': 'atual', 'url': './img/chrono.jpg'},
    {'id': '', 'url': './img/inuyasha.jpg'},
    {'id': '', 'url': './img/ippo.png'},
    {'id': '', 'url': './img/tenjhotenge.jpg'},
    {'id': '', 'url': './img/tenchi.jpg'},
    {'id': '', 'url': './img/yuyuhakusho.jpg'},
]

const loadImages = (images, container) => {
    images.forEach(image =>{
        container.innerHTML +=`
        <div class="image" id="${image.id}">
            <img src="${image.url}" alt="">
        </div>
        `
    })
}
loadImages(images, containerItem)

const loadBalls = (image, container) =>{
    for(let i = 0; i < image.length; i++){
        const div = document.createElement('div')
        div.id = i
        container.appendChild(div)
    }
    document.getElementById('0').classList.add('imgAtual')
}

loadBalls(images,containerBalls)

let pos = document.querySelectorAll('.balls div')

function selectId(){
    for(let i = 0; i < pos.length; i++){
        pos[i].addEventListener('click', function(){
            atual = pos[i].id
            slide()
        })
    }
}
selectId()

document.getElementById('previous').addEventListener('click', function(){
    atual--
    rola = false
    slide()
})

document.getElementById('next').addEventListener('click', function(){
    atual++
    rola = false
    slide()
})

function slide(){
    if(atual >= images.length){
        atual = 0
    }
    else if(atual < 0){
        atual = images.length -1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    document.getElementById('atual').style.marginLeft = -800*atual+"px"
    document.getElementById(atual).classList.add('imgAtual')
}
slide()
setInterval(function(){
    if(rola){
        atual++
        slide()
    }
    else{
        rola = true
    }
}, 4000)