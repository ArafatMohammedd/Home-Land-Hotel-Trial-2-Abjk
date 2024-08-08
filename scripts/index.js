import{rooms as e}from"./rooms.js";import{services as l}from"./searvices.js";import{defaultServices as t}from"./searvices.js";import{Partners as r}from"./parteners.js";let scrollContainer=document.querySelector(".gallery"),backBtn=document.getElementById("backBtn"),nextBtn=document.getElementById("nextBtn");scrollContainer.addEventListener("wheel",e=>{e.preventDefault(),scrollContainer.scrollLeft+=e.deltaY,scrollContainer.style.scrollBehavior="auto"}),nextBtn.addEventListener("click",()=>{scrollContainer.style.scrollBehavior="smooth",scrollContainer.scrollLeft+=300}),backBtn.addEventListener("click",()=>{scrollContainer.style.scrollBehavior="smooth",scrollContainer.scrollLeft-=300});let roomsHTML=document.querySelector(".types-room"),i=0;e.forEach(e=>{let l=`<span>
    <img src="${e.img}" class="room-image" alt="cover Images">

    <div class="room-detail">

    <h2>${e.roomDetail}</h2>

    <div class="statics">
        <h3>Price For: ${e.priceFor} Adult</h3>
        <h3 class="bed type">Bed Type: ${e.bedType}</h3>
        <h3>Room Size: ${e.roomSize}m<sup>2</sup></h3>
        <div class="call">
        <i class="fa-solid fa-phone contact-detail"></i><span class="phone">: ${e.phoneNumber}</span>
        </div>        
        <p><a href="/rooms.html">More ....</a></p>
        <button><a class="call-to-action-a" href="rooms.html" style="color: white;">Watch More</a></button>
    </div>

    </div>

    </span>
    `;roomsHTML.innerHTML=l+roomsHTML.innerHTML});let images=["images/Room-1.jpg","images/Room-3.jpg","images/Room-4.jpg","images/room-detail-1.jpg","images/room-detail-3.jpg"],currentIndex=0,imageElement=document.getElementById("slider-image");function changeImage(){currentIndex=(currentIndex+1)%images.length,imageElement.style.opacity=.4,setTimeout(()=>{imageElement.src=images[currentIndex],imageElement.style.opacity=1},1e3)}setInterval(changeImage,3e3),$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>300?$(".my_up_bttn").fadeIn(250):$(".my_up_bttn").fadeOut(250)}),$(".my_up_bttn").click(function(){$("html,body").animate({scrollTop:0},400)})});let display=1,serviceElem=document.querySelector(".services-grid"),seeServicesElem=document.querySelector(".see-service"),serviceP=document.querySelector(".services p"),defaultSearviceGrid=document.querySelector(".defaultServices-grid");seeServicesElem.addEventListener("click",()=>{1==display?(display=0,serviceElem.style.display="grid",seeServicesElem.innerHTML='Hide Services  <i class="fa-solid fa-arrow-turn-up"></i>'):0==display&&(display=1,serviceElem.style.display="none",seeServicesElem.innerHTML='See All Services  <i class="fa-solid fa-arrow-turn-down"></i>')}),l.forEach(e=>{serviceElem.style.display="none";let l=`
            <div class="services">
            <i class="${e.i}"></i>  
            <h3 style="${e.style};">${e.h3}</h3>     
            <p>${e.p}</p></div>`;serviceElem.innerHTML+=l});let defaultDisplay=1;seeServicesElem.addEventListener("click",()=>{1==defaultDisplay?(defaultDisplay=0,defaultSearviceGrid.style.display="none",seeServicesElem.innerHTML='Hide Services  <i class="fa-solid fa-arrow-turn-up"></i>'):0==defaultDisplay&&(defaultDisplay=1,defaultSearviceGrid.style.display="grid",seeServicesElem.innerHTML='See All Services  <i class="fa-solid fa-arrow-turn-down"></i>'),setTimeout(()=>{defaultSearviceGrid.style.opacity="0",defaultSearviceGrid.style.visibility="hidden"},2e3)}),t.forEach(e=>{defaultSearviceGrid.style.display="grid";let l=`
                <div class="services">
                <i class="${e.i}"></i>  
                <h3 style="${e.style};">${e.h3}</h3>     
                <p>${e.p}</p></div>`;defaultSearviceGrid.innerHTML+=l}),ScrollReveal({reset:!0,distance:"100px",duration:800,delay:50}),ScrollReveal().reveal(".location-dot, .our-location-div h4, .our-location-div h2, .detail-location p, .big-pic-hotel-name, .luxury-p, .big-pic-experiance-p, .input-big-pic-container, .img-welcome, .welcome-div i, .welcome-div h2, .welcome-div h3, .welcome-div p, .info-container, .info-item h2, .info-item p, .rooms-p h1, .types-room, .services-name-div h2, .services-name-div div, .services-name-div button, .gallery-wrap",{delay:500}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".info-value"),l=(e,l)=>{let t=()=>{let r=+l.innerText;r<e?(l.innerText=Math.ceil(r+e/200),setTimeout(t,1)):l.innerText=e};t()},t=(e,t)=>{e.forEach(e=>{if(e.isIntersecting){let r=+e.target.getAttribute("data-target");l(r,e.target),t.unobserve(e.target)}})},r=new IntersectionObserver(t,{root:null,threshold:.5});e.forEach(e=>{r.observe(e)})});
