const user = {
    name: "",
    email: "",
    phoneNumber: "",
}

const users = [
    {
        name: "Özlem",
        email: "hej@hej.hej"
    },
    {
        name: "Trollos",
        email: "TrollTrollos@hej.hej"
    },
    {
        name: "Sheila",
        email: "hej@hej.hej"
    }
]


//spread operator - Merger user og users
const mergedUser = { ...user, ...users };
console.log(mergedUser);

//array method .map 
const usernames = users.map(user => user.name);
console.log(usernames);

// Template Literals 
const greeting = `hola ${usernames}`
console.log(greeting);

//loop igennem usernames 
usernames.forEach(username => {
    console.log(`Hola los ${username}! estàs bien?`);
})

//greetings with ternaries - does the same thing as a if-else statement 

let ages = [
    {
        age: 26
    },
    {
        age: 16
    }
]

const newGreeting = ages.age > 18 ? "Hello, fellow adult" : "Hey kiddo";
newGreeting;

console.log(newGreeting);

const memberAges = [
    {
        person: 16
    },
    {
        person: 17
    },
    {
        person: 18
    },
    {
        person: 19
    }
];

/* for (let index = 0; index < memberAges.length; index++) {

    memberAges.person > 18 ? "Hello, fellow adult" : "Hey kiddo";
}
 */
memberAges.forEach(memberAge => {
    memberAge.person > 18 ? "Hello, fellow adult" : "Hey kiddo";
    console.log(memberAge.person);
});





