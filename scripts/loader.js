const loader = document.querySelector(".loader");

let chattyDisplay = 'none';


const down_btn = document.querySelector('.my_down_bttn');
down_btn.addEventListener('mouseover', ()=>{
  chattyDisplay = 'block';
  downBtns();

  setTimeout(() => {
    const bed = document.querySelector('.my_down_bttn_hover-room');
    const location = document.querySelector('.my_down_bttn_hover-map')
    const tiktok = document.querySelector('.my_down_bttn_hover-tiktok')
    const btn = document.querySelector('.my_down_bttn')
    const contact_us = document.querySelector('.my_down_bttn_hover-contact_us');
    location.style.opacity = 0;
    bed.style.opacity = 0;
    tiktok.style.opacity = 0;
    contact_us.style.opacity = 0;
    btn.style.opacity = 0;

}, 8000);
});







function downBtns () {
chattyHTML =  `
 <button class="my_down_bttn_hover-tiktok" style = 'display: ${chattyDisplay};'><a href="https://www.tiktok.com/@homelandhotel?is_from_webapp=1&sender_device=pc" target="_blank">
    <i class="fa-brands fa-tiktok"></i></a>
  </button>
  <button class="my_down_bttn_hover-room" style = 'display: ${chattyDisplay};'><a href="rooms.html" >
    <i class="fa-solid fa-bed"></i></a>
  </button>
  <button class="my_down_bttn_hover-map" style = 'display: ${chattyDisplay};'><a href="https://maps.app.goo.gl/XLUuhFZE7i7Z6yh8A" target="_blank">
    <i class="fa-solid fa-location-pin"></i></a>
  </button>
   <button class="my_down_bttn_hover-contact_us" style = 'display: ${chattyDisplay};'><a href="workingContactpage.html">
    <i class="fa-solid fa-comment"></i></a>
  </button>
  `;
  document.querySelector('.chatty')
      .innerHTML += chattyHTML;
  };


 

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








window.addEventListener("load", () => {
    document.querySelector(".loader")
        .classList.add("loader--hidden");
  
        document.querySelector(".loader").addEventListener("transitionend", () => {
      document.body.removeChild(document.querySelector(".loader"));
    });
  });
  
