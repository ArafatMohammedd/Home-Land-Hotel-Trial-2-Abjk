document.addEventListener('DOMContentLoaded', function() {
    const roomsContainer = document.getElementById('rooms-container');

    const roomData = [
        {
            title: "Single Room",
            priceFor: "Price For: 1 Adult",
            bedType: " Bed Type: Queen ",
            roomSize: "Room Size: 20m2",
            phoneNumber: "+251966701153",
            img: 'images/Room-1.jpg'
        },
        {
            title: "Double Room",
            priceFor: "Price For: 1 Adult",
            bedType: " Bed Type: Queen ",
            roomSize: "Room Size: 20m2",
            phoneNumber: "+251966701154",
            img: 'images/Room-3.jpg'
        },
        {
            title: "Suite",
            priceFor: "Price For: 1 Adult",
            bedType: " Bed Type: Queen ",
            roomSize: "Room Size: 20m2",
            phoneNumber: "+251966701155",
            img: 'images/Room-4.jpg'
        },
        {
            title: "Family Room",
            priceFor: "Price For: 1 Adult",
            bedType: " Bed Type: Queen ",
            roomSize: "Room Size: 20m2",
            phoneNumber: "+251966701156",
            img: 'images/Room-1.jpg'
        }
    ];

    roomData.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('room');

        roomElement.innerHTML = `
            <img src="${room.img}" alt="${room.title}">
            <h1>${room.title}</h1>
            <p class="description">${room.priceFor}</p>
            <p class="description">${room.bedType}</p>
            <p class="description">${room.roomSize}</p>                        
            <p>Phone number: ${room.phoneNumber}</p>
            <button><a href="tel:+251966701156">Call To Book</a></button>
        `;

        roomsContainer.appendChild(roomElement);
    });
});
