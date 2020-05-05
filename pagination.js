let data = [{
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=41',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=42',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=43',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=44',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=45',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=46',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=47',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=48',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=49',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=410',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=411',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=412',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=413',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=414',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=415',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=416',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=417',
        description: "Description to go here"
    },
];

var amount = 4;
var current = 0;
var parent = document.getElementById('parent');
var currentSpan = document.getElementById('current');
var totalSpan = document.getElementById('total');

function checkPage(current) {
    if (current <= 0) {
        document.getElementById('back').style.display = "none";
        console.log('current:' + current);
    } else {
        document.getElementById('back').style.display = "inline";
        console.log('current:' + current);
    }
    if ((current + 1) * amount >= data.length) {
        document.getElementById('next').style.display = "none";
    } else {
        document.getElementById('next').style.display = "inline";
    }
};

const generateItems = function (parent, data, current, amount) {
    checkPage(current);
    currentSpan.innerHTML = current + 1;
    totalSpan.innerHTML = Math.floor(data.length / amount) + 1;
    var currentData = data.slice(current * amount, (current + 1) * amount);
    currentData.forEach(element => {
        var child = document.createElement('div');
        var card = document.createElement('div');
        var cardbody = document.createElement('div');
        var img = document.createElement('img');
        var h5 = document.createElement('h5');
        var p = document.createElement('p');
        child.id = element.name;
        var text = document.createTextNode(element.name);
        var description = document.createTextNode(element.description);
        child.setAttribute("class", "col-sm-3");
        card.setAttribute("class", "card mb-4");
        cardbody.setAttribute("class", "card-body");
        h5.setAttribute("class", "card-title");
        p.setAttribute("class", "card-text");
        img.setAttribute("class", "img-fluid");
        img.setAttribute("src", element.img);
        card.appendChild(img);
        h5.appendChild(text);
        p.appendChild(description);
        cardbody.appendChild(h5);
        cardbody.appendChild(p);
        card.appendChild(cardbody);
        child.appendChild(card);
        parent.appendChild(child);
    });
    var child = document.createElement('div');
};

generateItems(parent, data, current, amount);


function next() {

    if ((current + 1) * amount >= data.length) {
        return;
    }
    var node = document.getElementById('parent');
    node.innerHTML = "";
    current += 1;
    generateItems(parent, data, current, amount);
}

function back() {
    if ((current) * amount <= 0) {
        return;
    }
    var node = document.getElementById('parent');
    node.innerHTML = "";
    current -= 1;
    generateItems(parent, data, current, amount);
}