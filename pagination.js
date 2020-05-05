let data = [{
        name: 'item1',
        img: 'https://loremflickr.com/400/400?lock=41',
        link: 'https://google.com',
        description: "Description to go here"
    },
    {
        name: 'item',
        img: 'https://loremflickr.com/400/400?lock=42',
        link: 'https://google.com',
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
        var template = document.querySelector('#card-template');
        var clone = template.content.cloneNode(true);
        var img = clone.querySelectorAll("img")[0];
        img.setAttribute("src", element.img);
        var h5 = clone.querySelectorAll("h5")[0];
        h5.textContent = element.name;
        var p = clone.querySelectorAll("p")[0];
        p.textContent = element.description;

        var link = clone.querySelectorAll("a")[0];
        if (element.link != null) {

            link.href = element.link;
        } else {
            link.remove()
        }

        parent.appendChild(clone);

    });
    var child = document.createElement('div');
};

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

generateItems(parent, data, current, amount);