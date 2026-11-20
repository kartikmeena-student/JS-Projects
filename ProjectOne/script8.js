

const Users = [
    {
        name: "Anishka Tomar",
        pic: "https://i.pravatar.cc/300?img=47",
        bio: "She is a hardworking woman who believes in consistency."
    },
    {
        name: "Rahul Sharma",
        pic: "https://i.pravatar.cc/300?img=12",
        bio: "A passionate developer who loves building new things."
    },
    {
        name: "Priya Verma",
        pic: "https://i.pravatar.cc/300?img=44",
        bio: "A creative mind who enjoys exploring new ideas."
    },
    {
        name: "Aryan Singh",
        pic: "https://i.pravatar.cc/300?img=13",
        bio: "An ambitious person who never stops learning."
    },
    {
        name: "Sneha Patel",
        pic: "https://i.pravatar.cc/300?img=45",
        bio: "A positive thinker who loves photography and travelling."
    },
    {
        name: "Rohit Meena",
        pic: "https://i.pravatar.cc/300?img=14",
        bio: "A fitness enthusiast who believes in discipline."
    },
    {
        name: "Kavya Joshi",
        pic: "https://i.pravatar.cc/300?img=49",
        bio: "An independent thinker with a passion for technology."
    },
    {
        name: "Aditya Raj",
        pic: "https://i.pravatar.cc/300?img=15",
        bio: "A curious learner who enjoys solving challenging problems."
    }
];


function showUsers(arr){
    arr.forEach(function(user){

        // create outer card div
        const card = document.createElement("div");
        card.classList.add("card");
        
        // add each individual card to the cards 
        document.querySelector(".cards").appendChild(card);

        // create image
        const image = document.createElement("img");
        image.src = user.pic;
        image.classList.add("big-img");

        // create blurred layer div
        const blurr = document.createElement("div");
        blurr.style.backgroundImage =  `url(${user.pic})`
        blurr.classList.add("blurred-layer");

        // create content div
        const content = document.createElement("div");
        content.classList.add("content");
        

        // create h3 and paragraph
        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;


        // append heading and paragraph
        content.appendChild(h3);
        content.appendChild(para);

        // append all to the card
        card.appendChild(image);
        card.appendChild(blurr);
        card.appendChild(content);

        // finally append card to the body or the container
        document.querySelector(".cards").appendChild(card);
        
    });
}
showUsers(Users);
let inp = document.querySelector(".inp");
inp.addEventListener("input",function(){
    let newUser = Users.filter((user)=>{
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    document.querySelector(".cards").innerHTML = "";

    showUsers(newUser);

});
// saare users ko show karan 
// filter karna har baar input karne par
// filtered users ko show karna 