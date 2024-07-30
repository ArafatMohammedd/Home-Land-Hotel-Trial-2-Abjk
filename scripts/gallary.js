const galleryImg = [{
    img: 'Exterior-2.jpg'
},
{
    img: 'Exterior-3.jpg'
},{
    img: 'Exterior-5.jpg'
},{
    img: 'gallary1.jpg'
},{
    img: 'gallary2.jpg'
},{
    img: 'gallary3.jpg'
},{
    img: 'gallary4.jpg'
},{
    img: 'gallary5.jpg'
},{
    img: 'gallary6.jpg'
},{
    img: 'gallary7.jpg'
},{
    img: 'gallary8.jpg'
},{
    img: 'Room-1.jpg'
},{
    img: 'Room-3.jpg'
},{
    img: 'Room-4.jpg'
},{
    img: 'room-detail-1.jpg'
},{
    img: 'room-detail-3.jpg'
},{
    img: 'External Room 1.jpg'
},{
    img: 'External Room 2.jpg'
}]
let HTML;
const imagContainer = document.querySelector('.images-container');
galleryImg.forEach((galleryImg)=>{
    HTML = `<div class="images">
    <img src="images/${galleryImg.img}" style = "${galleryImg.style}">
    </div>`;
    console.log(`image/${galleryImg.img}`)
    imagContainer.innerHTML += HTML
    
});


ScrollReveal({ 
    reset: true, 
    distance: '60px',
    duration: 2000,
    delay: 400
});
ScrollReveal().reveal(
    '.images img', 
    { delay: 500 });



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