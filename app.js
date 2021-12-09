// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
// import findFriendByName from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];


addFriendButton.addEventListener('click', () => {
    // get the name from the input
    // create a new friend object
    let newFriend = {
        name: friendInputEl.value,
        satisfaction: Math.ceil(Math.random() * 2)
    };
    
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);

    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});


function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
        console.log(friendEl);

        friendEl.addEventListener('click', () => {
            console.log(friend.satisfaction);
            if (friend.satisfaction < 3) {
                if (mushroomCount > 0) {
                    friend.satisfaction++;
                    mushroomCount--;
                } else {
                    alert('You are all out of mushrooms. Go forage to find more.');
                }
                
            }
            displayMushrooms();
            displayFriends();
            
        });
        friendsEl.append(friendEl);
    }
}


function displayMushrooms() { 
    // clear out the mushroom div
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) { 
        // for each mushroom in your mushroom state, render and append a mushroom
        let mushies = renderMushroom();
        mushroomsEl.append(mushies);
    }
}

displayFriends();
displayMushrooms();
