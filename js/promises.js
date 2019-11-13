"use strict";

const wait = (num) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve();
        }, num);
    })
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


let infoStamp = (username) => {
    let goHere = `https://api.github.com/users/${username}/events/public`;
    fetch(goHere,
        {headers: {'Authorization': `token ${gitHubKey}`}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // .find() stops at first match, to use .filter() add [0] at the end of the ()'s.
            return data.find(event => event.type === 'PushEvent');
        })
        .then((data)=> {
            console.log(data);
            let date = data.created_at.slice(0, 10);
            let year = date.slice(0,4);
            let month = date.slice(5,7);
            let day = date.slice(8,10);
            date = `${month}/${day}/${year}`;
            return date;
        });
};

console.log(infoStamp('rmayer1984'));

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
// }