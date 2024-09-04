console.log("hello Hussain")
1
2
3
4
5

let perantOfCard = document.getElementById("perantOfCard")
// console.log(perantOfCard)

const carderr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33];

let myApi = [
    {
        id: 1,
        img: "../images/pr (1).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 2,
        img: "../images/pr (2).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 3,
        img: "../images/pr (3).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 4,
        img: "../images/pr (1).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 5,
        img: "../images/pr (5).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 6,
        img: "../images/pr (6).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 7,
        img: "../images/pr (7).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 8,
        img: "../images/pr (8).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 9,
        img: "../images/pr (9).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 10,
        img: "../images/pr (10).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 11,
        img: "../images/pr (11).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 12,
        img: "../images/pr (12).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 13,
        img: "../images/pr (13).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 14,
        img: "../images/pr (11).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 15,
        img: "../images/pr (15).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 16,
        img: "../images/pr (16).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 17,
        img: "../images/pr (17).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 18,
        img: "../images/pr (18).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 19,
        img: "../images/pr (19).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 20,
        img: "../images/pr (20).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 21,
        img: "../images/pr (21).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 22,
        img: "../images/pr (22).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 23,
        img: "../images/pr (23).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 24,
        img: "../images/pr (21).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 25,
        img: "../images/pr (25).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 26,
        img: "../images/pr (26).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 27,
        img: "../images/pr (27).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 28,
        img: "../images/pr (28).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 29,
        img: "../images/pr (29).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 30,
        img: "../images/pr (30).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 31,
        img: "../images/pr (31).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 32,
        img: "../images/pr (32).jpeg",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    },
    {
        id: 33,
        img: "../images/pr(33).png",
        prising: "$7000.00",
        heading: "Honda",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione dignissimos optio numquam cupiditate impedit velit commodi minima, harum quibusdam."

    }
];

console.log(myApi)

for (let index = 0; index < myApi.length; index++) {
    // console.log(myApi[0].img)
    perantOfCard.innerHTML += `
    
    <div class="card me-4" style="width: 18rem;">
    <img src="${myApi[index].img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h6>${myApi[index].prising}</h6>
        <h2>${myApi[index].heading}</h2>
      <p class="card-text">${myApi[index].description}.</p>
    </div>
  </div>
    
    `



}