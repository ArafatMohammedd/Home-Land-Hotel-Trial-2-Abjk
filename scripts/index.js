import { rooms } from "./rooms.js";
import { services } from "./searvices.js";
import { defaultServices } from "./searvices.js";
import { Partners } from "./parteners.js";



let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 400;
});
backBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 400;
});



const roomsHTML = document.  
    querySelector('.types-room');
    
    let i = 0;



rooms.forEach((room)=>{
let HTML = `<span>
    <img src="${room.img}" class="room-image">

    <div class="room-detail">

    <h2>${room.roomDetail}</h2>

    <div class="statics">
        <h3>Price For: ${room.priceFor} Adult</h3>
        <h3 class="bed type">Bed Type: ${room.bedType}</h3>
        <h3>Room Size: ${room.roomSize}m<sup>2</sup></h3>
        <div class="call">
        <i class="fa-solid fa-phone contact-detail"></i><span class="phone">: +${room.phoneNumber}</span>
        </div>        
        <p><a href="/rooms.html">More ....</a></p>
        <button><a class="call-to-action-a" href="tel: + 251966701153" style="color: white;">Call To Book</a></button>
    </div>

    </div>

    </span>
    `;      
    roomsHTML.innerHTML = HTML + roomsHTML.innerHTML;

});


const coverImgs = [{
    img:'images/Bed roses on it.jpg'
}];




const coverImgElem = document.querySelector('.outer-big-pic-container .cover-img');
let coverHTML;

coverImgs.forEach(
    (coverImgPara)=>{
     coverHTML = 
        `<img src="${coverImgPara.img}" class="big-pic-container">`
        coverImgElem.innerHTML = coverHTML;
    });


    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>300){
                $('.my_up_bttn').fadeIn(250);
            }
            else{
                $('.my_up_bttn').fadeOut(250);
            }
        });
        $('.my_up_bttn').click(function(){
            $('html,body').animate(
                {scrollTop:0},400
                );
        });
    });


    let display = 1;

    const serviceElem = document.querySelector('.services-grid');
    const seeServicesElem = document.querySelector('.see-service');
    const serviceP = document.querySelector('.services p');
    const defaultSearviceGrid = document.querySelector('.defaultServices-grid');

    seeServicesElem.addEventListener('click', ()=>{
        if (display == 1){
            display = 0;
            serviceElem.style.display = 'grid';
            seeServicesElem.innerHTML = 'Hide Services  <i class="fa-solid fa-arrow-turn-up"></i>'
        }
        else if (display == 0){
            display = 1;
            serviceElem.style.display = 'none';
                 seeServicesElem.innerHTML = 'See All Services  <i class="fa-solid fa-arrow-turn-down"></i>'
        };
      })


        services.forEach((service)=>{

        serviceElem.style.display = 'none';
        const serviceHTML = `
            <div class="services">
            <i class="${service.i}"></i>  
            <h3 style="${service.style};">${service.h3}</h3>     
            <p>${service.p}</p></div>`;
        serviceElem.innerHTML += serviceHTML

        });


        let defaultDisplay = 1;
        seeServicesElem.addEventListener('click', ()=>{
            if (defaultDisplay == 1){
                defaultDisplay = 0;
                defaultSearviceGrid.style.display = 'none';
                seeServicesElem.innerHTML = 'Hide Services  <i class="fa-solid fa-arrow-turn-up"></i>'
            }
            else if (defaultDisplay == 0){
                defaultDisplay = 1;
                defaultSearviceGrid.style.display = 'grid';
                seeServicesElem.innerHTML = 'See All Services  <i class="fa-solid fa-arrow-turn-down"></i>'
            };

            setTimeout(() => {
                defaultSearviceGrid.style.display = 'none';
            }, 2000);
          })

          

        defaultServices.forEach((service)=>{

            defaultSearviceGrid.style.display = 'grid';
            const serviceHTML = `
                <div class="services">
                <i class="${service.i}"></i>  
                <h3 style="${service.style};">${service.h3}</h3>     
                <p>${service.p}</p></div>`;
                defaultSearviceGrid.innerHTML += serviceHTML
    
            });

        
        ScrollReveal({ 
            reset: true, 
            distance: '60px',
            duration: 2000,
            delay: 400
        });
        ScrollReveal().reveal(
            '.location-dot, .our-location-div h4, .our-location-div h2, .detail-location p, .big-pic-hotel-name, .luxury-p, .big-pic-experiance-p, .input-big-pic-container, .img-welcome, .welcome-div i, .welcome-div h2, .welcome-div h3, .welcome-div p, .container .col1 .media-icons li a, .container .clo2 li a, .container .col2 p ', 
            { delay: 500 });


            if (window.screen.availWidth <= 672){
                document.querySelector('.tooltip-cbe')
                    .innerHTML = "CBE"
            }
            
    document.querySelector('blockquote')
            .addEventListener('ended', ()=>{
                document.querySelector('blockquote')
                    .style.display = "none";
                console.log('hi')
            })


            document.addEventListener('DOMContentLoaded', function() {
                const counters = document.querySelectorAll('.info-value');
                const speed = 200; // Change the speed of the count up here
            
                const countUp = (target, element) => {
                    const updateCount = () => {
                        const current = +element.innerText;
                        const increment = target / speed;
            
                        if (current < target) {
                            element.innerText = Math.ceil(current + increment);
                            setTimeout(updateCount, 1);
                        } else {
                            element.innerText = target;
                        }
                    };
            
                    updateCount();
                };
            
                const options = {
                    root: null,
                    threshold: 0.5
                };
            
                const callback = (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const target = +entry.target.getAttribute('data-target');
                            countUp(target, entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                };
            
                const observer = new IntersectionObserver(callback, options);
            
                counters.forEach(counter => {
                    observer.observe(counter);
                });
            });
            









            
