var friends = ['Nick', 'Bradley', 'Braden', 'Russo', 'Stew'];
var locations = ['Basement', 'Bathroom', 'Bedroom', 'School', 'Attic', 'Garage', 'Gym', 'Laboratory', 'Closet', 'Game Room'];
var weapons = ['knife', 'gun', 'sword', 'hammer', 'sledgehammer', 'screwdriver', 'drill', 'disc', 'saw', 'bottle', 'shovel', 'rake', 'bow', 'light saber', 'taser', 'baseball bat', ' infinity gauntlet', 'shield', 'nail', 'nunchucks'];

document.addEventListener("DOMContentLoaded", function () {

    for (let i = 1; i < 100; i++) {
        var h3 = document.createElement("h3");
        h3.innerText = "Accusation " + i + ":";

        h3.addEventListener('click', function () {

            let friend = friends[Math.floor(Math.random() * friends.length)];
            let weapon = weapons[Math.floor(Math.random() * weapons.length)];
            let location = locations[Math.floor(Math.random() * locations.length)];

            alert("Accusation " + i + ": I accuse " + friend + " of killing someone using a " + weapon + " while at " + location + "!");
        });
        document.body.appendChild(h3);
    }
});