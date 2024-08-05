import { rooms } from "./rooms.js";

document.addEventListener('DOMContentLoaded', function() {
    const roomsContainer = document.getElementById('rooms-container');

    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('room');

        roomElement.innerHTML += `
            <img src="${room.img}" alt="${room.roomDetail}">
            <h1>${room.roomDetail}</h1>
            <p class="description">Price For: ${room.priceFor}</p>
            <p class="description"> Bed Type: ${room.bedType}</p>
            <p class="description"> Room Size: ${room.roomSize}</p>                        
            <p>Phone number: ${room.phoneNumber}</p>
            <button><a href="tel:0222111131">Call To Book</a></button>
        `;

        roomsContainer.appendChild(roomElement);
    });
});
