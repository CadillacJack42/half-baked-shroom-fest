export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    // add friend, name, and emoji classes to the appropriate elements
    const friendWrapper = document.createElement('div');
    friendWrapper.classList.add('friend');
    const friendName = document.createElement('span');
    const friendFace = document.createElement('span');

    // put the friend's name in the nameEl
    friendName.textContent = friend.name;
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    switch (friend.satisfaction) {
        case 1:
            friendFace.textContent = '🙁';
            break;
        case 2:
            friendFace.textContent = '😐';
            break;
        case 3:
            friendFace.textContent = '😀';
            break;
    
        default:
            friendFace.textContent = '😶';
            break;
    }

    // append the emojiEl and nameEl to the outer div
    friendWrapper.append(friendName, friendFace);

    // return the outer div
    return friendWrapper;
}