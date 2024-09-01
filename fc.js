window.addEventListener("scroll",function(){
    const a =document.getElementById("navv");
    const ws = window.scrollY;
    if(ws >=60){
        a.classList.add("nav-active");
    }else{
        a.classList.remove("nav-active");
    }
});

const menu1 = document.getElementById("mn1");
const close1 = document.getElementById("cl");

menu1.addEventListener("click", function(event) {
    menu1.style.display = "none";
    close1.style.display = "block";
    event.stopPropagation(); // Prevent the event from bubbling up to the button
});

close1.addEventListener("click", function(event) {
    close1.style.display = "none";
    menu1.style.display = "block";
    event.stopPropagation(); // Prevent the event from bubbling up to the button
});


const home = document.getElementById("home");
const about = document.getElementById("about");
const servicess = document.getElementById("services");
const menu = document.getElementById("menu");


const home1= document.getElementById("underul");
home.addEventListener("mouseover",function(){
    home1.style.display="block";
    about_menu.style.display="none";
    services.style.display="none";
    menu11.style.display="none";
})


const about_menu= document.getElementById("underul1");
about.addEventListener("mouseover",function(){
    about_menu.style.display="block";
    home1.style.display="none";
    menu11.style.display="none";
    services.style.display="none";
})

const services= document.getElementById("underul2");
servicess.addEventListener("mouseover",function(){
    services.style.display="block";
    about_menu.style.display="none";
    home1.style.display="none";
    menu11.style.display="none";
})

const menu11= document.getElementById("underul3");
menu.addEventListener("mouseover",function(){
    menu11.style.display="block";
    services.style.display="none";
    about_menu.style.display="none";
    home1.style.display="none";
})



document.addEventListener("click",function(){
    home1.style.display="none";
    about_menu.style.display="none";
    services.style.display="none";
    menu11.style.display="none";
})


const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        const dropdown = this.querySelector('.underul');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation();
        }
    });
});

const box1 = document.getElementById("iddiv1");
const box2 = document.getElementById("iddiv2");
const box3 = document.getElementById("iddiv3");
const box4 = document.getElementById("iddiv4");

box1.addEventListener('mouseover',function(){
    box1.classList.add("boxes-color");
});
box1.addEventListener('mouseout',function(){
    box1.classList.remove("boxes-color");
});

box2.addEventListener('mouseover',function(){
    box2.classList.add("boxes-color");
});
box2.addEventListener('mouseout',function(){
    box2.classList.remove("boxes-color");
});

box3.addEventListener('mouseover',function(){
    box3.classList.add("boxes-color");
});
box3.addEventListener('mouseout',function(){
    box3.classList.remove("boxes-color");
});

box4.addEventListener('mouseover',function(){
    box4.classList.add("boxes-color");
});
box4.addEventListener('mouseout',function(){
    box4.classList.remove("boxes-color");
});


// window.onload = function() {
    window.addEventListener("scroll", function() {
        const ws1 = window.scrollY;
        if (ws1 >= 180) {
            box1.classList.add("box-1-ani");
            box1.style.display="block";
        }else{
            box1.classList.remove("box-1-ani");
            box1.style.display="none";
        }
        if (ws1 >= 280) {
            box2.classList.add("box-1-ani");
            box2.style.display="block";
        }
        else{
            box2.classList.remove("box-1-ani");
            box2.style.display="none";
        }
        if (ws1 >= 380) {
            box3.classList.add("box-1-ani");
            box3.style.display="block";
        }
        else{
            box3.classList.remove("box-1-ani");
            box3.style.display="none";
        }
        if (ws1 >= 480) {
            box4.classList.add("box-1-ani");
            box4.style.display="block";
        }else{
            box4.classList.remove("box-1-ani");
            box4.style.display="none";
        }
    });
const imag1 = document.getElementById("img11");
const imag2 = document.getElementById("img12");
const imag3 = document.getElementById("img13");
const imag4 = document.getElementById("img14");
window.addEventListener("scroll",function(){
    const imgani = window.scrollY;
    if(imgani > 720){
        imag1.classList.add("imagesAnimation");
    }else{
        imag1.classList.remove("imagesAnimation");
    }
    if(imgani > 970){
        imag4.classList.add("imagesAnimation");
    }else{
        imag4.classList.remove("imagesAnimation");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    let counterStarted = false; // Flag to track if the counter has started
    let countNumber = document.getElementById("counter15");
    
    window.addEventListener("scroll", function() {
        let wind = window.scrollY;
        if (wind > 970 && !counterStarted && wind <=1050) {
            counterStarted = true; // Prevents multiple intervals

            let targetValue = 15;
            let currentValue = 0;
            let timePeriod = 2500; // Total time for the counting
            let incrementTime = Math.ceil(timePeriod / targetValue);

            let counterr = setInterval(function() {
                countNumber.textContent = currentValue;
                if (currentValue >= targetValue) {
                    clearInterval(counterr);
                    counterStarted = false; // Allows the counter to reset when needed
                } else {
                    currentValue++;
                }
            }, incrementTime);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let counterStarted = false; // Flag to track if the counter has started
    let countNumber = document.getElementById("counter50");
    
    window.addEventListener("scroll", function() {
        let wind = window.scrollY;
        if (wind > 970 && !counterStarted && wind <=1050) {
            counterStarted = true; // Prevents multiple intervals

            let targetValue = 50;
            let currentValue = 0;
            let timePeriod = 2500; // Total time for the counting
            let incrementTime = Math.ceil(timePeriod / targetValue);

            let counterr = setInterval(function() {
                countNumber.textContent = currentValue;
                if (currentValue >= targetValue) {
                    clearInterval(counterr);
                    counterStarted = false; // Allows the counter to reset when needed
                } else {
                    currentValue++;
                }
            }, incrementTime);
        }
    });
});

let one = document.getElementById("top221");
let two = document.getElementById("top222");
let three = document.getElementById("top223");
let menuuus = document.getElementById("menuus");
let menu2 = document.getElementById("menuus1");
let menu3 = document.getElementById("menuus2");

const break1 = document.getElementById("breakfast");
break1.addEventListener("click",function(){
    one.style.backgroundColor="orange";
    two.style.backgroundColor="white";
    three.style.backgroundColor="white";
    menuuus.style.display="block";
    menuuus.style.display="flex";
    menu2.style.display="none";
    menu3.style.display="none";
    menuuus.classList.add("breakfasttt");

})
const break2 = document.getElementById("breakfast1");
break2.addEventListener("click",function(){
    one.style.backgroundColor="white";
    two.style.backgroundColor="orange";
    three.style.backgroundColor="white";
    menuuus.style.display="none";
    menu2.style.display="block";
    menu2.style.display="flex";
    menu3.style.display="none";
    menu2.classList.add("breakfasttt");

})
const break3 = document.getElementById("breakfast2");
break3.addEventListener("click",function(){
    one.style.backgroundColor="white";
    two.style.backgroundColor="white";
    three.style.backgroundColor="orange";
    menu3.style.display="block";
    menu3.style.display="flex";
    menu2.style.display="none";
    menuuus.style.display="none";
    menu3.classList.add("breakfasttt");

})

window.addEventListener("scroll",function(){
    let r = document.getElementById("breakfasttt");
    let r1 = document.getElementById("name");
    let r2 = document.getElementById("menuus");
    const rr= window.scrollY;
    if(rr>1400){
        r.classList.add("breakfasttt");
        r1.classList.add("breakfasttt");
        r2.classList.add("breakfasttt");
    }else{
        r.classList.remove("breakfasttt");
        r1.classList.remove("breakfasttt");
        r2.classList.remove("breakfasttt");
    }
})



const imgRotateFood = document.getElementById("rotate-img");
let i = 0;
function rotateImage(){
    i = (i + 0.1 ) % 360;
    imgRotateFood.style.transform= `rotate(${i}deg)`;
    requestAnimationFrame(rotateImage);
}
rotateImage();
