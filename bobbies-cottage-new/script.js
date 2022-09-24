const text = document.querySelector('.circle-text p');

// split the text into letters and put them into the span elements
text.innerHTML = text.innerText.split('').map((letter,i) => 
     `<span class="span">${letter}</span>`
).join('');

// grab all spans and make them rotate 
const allSpans = document.querySelectorAll('span');
console.log(allSpans)
allSpans.forEach((span,idx) => {
    span.style.transform = `rotate(${idx * 11.5}deg)`
})


const downArrow = document.querySelector('.arrow-down')
const topSection = document.querySelector('.top-section')
downArrow.addEventListener('click', ()=> {
    topSection.style.transform = 'translateY(-100vh)'
});


class Dog {
    constructor(name, birthday, lavez) {
        this.name = name;
        this.birthday = birthday;
        this.lavez = lavez;
    }

    //Declare private variables
    _attendance = 0;

    getAge() {
        //Getter
        return this.calcAge();
    }

    calcAge() {
        //calculate age using today's date and birthday
        return Date.now() - this.birthday;
    }
    
    bark() {
        return console.log("Woof!");
    }

    updateAttendance() {
        //add a day to the dog's attendance days at the petsitters
        this._attendance++;
    }
}

//instantiate a new object of the Dog class, and individual dog named Rufus
const rufus = new Dog("Rufus", "2/1/2017",bark());
const da = new Dog("dsdsds", "2/1/2015",bark());

console.log(rufus,da)

