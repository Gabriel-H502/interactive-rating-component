// first things first, we have to get all the elements on the page and store them in variables

// clickables
const $ratings = document.querySelectorAll('#rating');
const $submitButton = document.querySelector('.submit-button');

// cards (for the switching later)
const $ratingCard = document.querySelector('.rating-card');
const $thanksCard = document.querySelector('.thankyou-card');
let clicked = false; // this is explained later

// and the little text for the final part
const $selectedText = document.querySelector('.selection-text');

// now let's get to business

// for every rating,
$ratings.forEach(element => {
    // it will add a clicking option to it
    element.addEventListener('click', () => {
        // this will check for every rating (again):
        for (let i = 0; i < $ratings.length; i++) {
            // if some rating has already been selected...
            if ($ratings[i].classList.contains('selected')) {
                // ...it will remove its class
                $ratings[i].classList.remove('selected');
            };
            // for the first time, this if section won't be triggered, since none of the ratings were selected
        }
        // then, this will add a class on the clicked rating element 
        element.classList.add('selected');
        clicked = true; // and define that a element has been clicked
    })
});

$submitButton.addEventListener('click', () => {
    // rating-card - thankyou-card
    // these are the both cards we'll be switching now

    // but first, I decided to check if the user didn't clicked a rating. That's why I'm using that variable on line 10
    if (!clicked) {
        alert('Please, support our services with a rating!')
    } else { 
        // now we can proceed
        $ratingCard.style.display = 'none' // goodbye to you :(
        $thanksCard.style.display = 'block' // hello to you :D

        // now for the selection text. "This should be hard, right?"

        // not at all! all that's needed is to get the ranking's text!
        const $selectedRanking = document.querySelector('.selected').innerHTML;

        // then show it on that selection text
        $selectedText.innerHTML = `You selected ${$selectedRanking} out of 5`
    }
})

// and that's it for today! thank you for reading to the final :> just to remember that this is my first time using JS in a real project. Took me 2 hours, but I managed to do it! :D