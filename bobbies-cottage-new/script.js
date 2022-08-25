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
