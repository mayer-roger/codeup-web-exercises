"use strict";

const wait = (num) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve();
        }, num);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. R
function getLastCommit (user){
    fetch(`https://api.github.com/users/${user}/events`, {headers:{'Authorization':`token ${gitHubKey}`}})
        .then(response => response.json())
        .then(usernames =>{
            let filter = usernames.filter(u => u.type === "PushEvent");
            console.log(`${user} last commit was on ` + filter[0].created_at);
        });
}

getLastCommit('rmayer1984');


//test

