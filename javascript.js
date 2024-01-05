const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elementC=document.querySelector('.ele-container');
let fixBox=document.querySelector('#fixed-box');
let element=document.querySelectorAll('#element');


function displayBox(){
    elementC.addEventListener('mouseenter',function(){
        document.querySelector('#fixed-box').style.display='block';
    
    })
    elementC.addEventListener('mouseleave',function(){
        document.querySelector('#fixed-box').style.display='none';
    })
    
}

displayBox()

function displayImage(){
    element.forEach((i) => {
        i.addEventListener('mouseenter',function(){
            let img=i.getAttribute('data-img');
            fixBox.style.backgroundImage= `url(${img})`
        })
    })
}

displayImage()


let borderL=document.querySelectorAll('#border-left');
borderL.forEach((i,idx) => {
    i.addEventListener('click',function(e){
        i.classList.add('reddd');
        let image=document.querySelector('#image');
        


        
    })
})
