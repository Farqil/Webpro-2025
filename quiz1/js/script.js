document.addEventListener('DOMContentLoaded', function(){
    
    const content = document.querySelector('.maincontainer');
    if (content){
        content.classList.add('animasi');
    }
    
    const buttons = document.querySelectorAll('.btn, .link');
    buttons.forEach(button =>{
        button.addEventListener('mouseenter', function(){
            this.style.opacity = '0.9';
        });
        
        button.addEventListener('mouseleave', function(){
            this.style.opacity = '1';
        });
    });
    
    const images = document.querySelectorAll('img');
    images.forEach(img =>{
        img.style.opacity = '0';
        img.onload = function(){
            this.style.transition = 'opacity 0.3s ease';
            this.style.opacity = '1';
        };
        if (img.complete){
            img.style.opacity = '1';
        }
    });
    
});