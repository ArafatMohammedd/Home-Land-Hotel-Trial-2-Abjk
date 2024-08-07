const guideLines = [{
    title: `1, No Smoking`,
    description: 'Smoking is strictly prohibited in all rooms and indoor areas of our hotel to ensure the comfort and safety of all our guests. This policy helps maintain a clean and healthy environment. We kindly ask all guests to comply with this rule. Violation of this policy will result in a cleaning fee to restore the room to a smoke-free condition. Thank you for your understanding and cooperation.'
},{
    title: '2, Damage',
    description: 'Guests are responsible for any damage to the room or hotel property during their stay. This includes but is not limited to furniture, fixtures, electronics, and linens. Any damages or missing items will be charged to the guest’s account. We kindly ask that you treat the room and its contents with care to ensure a pleasant experience for future guests.'
},{
    title: `3, Room Keys`,
    description: 'Please return your room keys to the front desk upon check-out. Losing a room key will incur a replacement fee to cover the cost of reprogramming and issuing a new key.To avoid any inconvenience, keep your key card safe and return it at the end of your stay. Thank you for your cooperation.For your safety and security, do not share your room key with anyone not registered to your room. If you lose your key or believe it has been stolen, please notify the front desk immediately so we can deactivate the lost key and issue a new one. '
},{
    title: `4, Internet Usage`,
    description: 'Free Wi-Fi is provided for all guests. Please use the internet responsibly and ensure that your activities comply with local laws and regulations. While we offer complimentary Wi-Fi, excessive bandwidth usage, such as streaming high-definition videos or downloading large files, may be restricted to ensure fair access for all guests. For your safety, ensure your device’s firewall and antivirus software are up to date. Avoid accessing sensitive information over public Wi-Fi without using a VPN.'
},{
    title: '5, No Cooking',
    description: `Cooking in the rooms is not allowed to ensure the safety and comfort of all our guests. Open flames, hot plates, and other cooking appliances pose fire hazards and can cause damage to the room and hotel property.We are pleased to offer a variety of food services to enhance your stay. Our on-site restaurant serves a delicious selection of local and international dishes, prepared with fresh, high-quality ingredients. Whether you're in the mood for a hearty breakfast, a light lunch, or a gourmet dinner, our culinary team is dedicated to providing a delightful dining experience.`
},{
    title: `6, Laundry Service`,
    description: `Laundry services are available for an additional fee. Please contact the front desk for details.Our laundry service is available to ensure you have fresh, clean clothes throughout your stay.If you have any questions or need assistance, our front desk staff is always ready to help. Enjoy the convenience of our laundry service and keep your wardrobe fresh and ready!`
},{
    title: '7, Waste Disposal',
    description: `Dispose of all trash and waste in the designated bins provided in your room.Do not leave trash in hallways, stairwells, or common areas. Use the bins located throughout the hotel for any waste generated outside your room. If you accidentally spill any food or liquid, please clean it up promptly or contact housekeeping for assistance.`
}, {
     title: `8, Decorations`,
    description: 'Do not attach, affix, or hang decorations on walls, ceilings, or furniture. This includes nails, tape, or adhesives, which may damage the surfaces. Do not use decorations that pose a fire hazard, such as candles or open flames. Avoid placing decorations near electrical outlets or appliances.Ensure that any temporary decorations are removed before check-out. The room should be left in its original condition to avoid additional cleaning charges.Do not place decorations in common areas or the exterior of the hotel. This helps maintain a uniform appearance and respects other guests.'
},{
    title: '9, Security',
    description: `Always secure your room by locking doors and windows when you are not in the room. If you notice any suspicious activity or security concerns, report them to the front desk immediately. The hotel provides in-room safes for your valuables; we strongly encourage you to use them to protect important items.`
},{
    title: `10, Respect Staff`,
    description: 'We ask that all guests treat our hotel staff with courtesy and respect. Our team is dedicated to ensuring your stay is comfortable and enjoyable, and they are here to assist you with any needs or concerns you may have. Please communicate any issues or requests politely, and remember that our staff is working hard to provide excellent service for everyone. If you experience any problems or have specific needs, do not hesitate to reach out to the front desk.'
}];

let HTML;
const Guideline = document.querySelector('.Guideline')
guideLines.forEach ((guideLine)=>{
    HTML = `
        <div class="Guideline">
        <h3 class="number">${guideLine.title}</h3>
        <h5 class="description">${guideLine.description}</h5>
      </div>`
      Guideline.innerHTML += HTML
});
