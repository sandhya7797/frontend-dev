const starRefs = document.querySelectorAll('.star');
const starRatingRef = document.querySelector('.star-rating');
let last_selected_starIdx = 0;
/*
1. on click we have to select current and previous all stars.
2. on hover we have to select stars till current star.
3. on leave we have to deselect all stars until last clicked star.
eg - clicked on 4th star when we mouseleave to 2nd star it should not get deselected.
on mouseleave it should always retain last clicked state.
*/

function selectStar(ref) {
    ref.classList.add('fa-solid');
    ref.classList.remove('fa-regular');
}

function deSelectStar(ref) {
    ref.classList.remove('fa-solid');
    ref.classList.add('fa-regular');
}

function handleStarSelection(currentIndex) {
    for(let i=0;i<starRefs.length;i++) {
        if(i<currentIndex) {
            selectStar(starRefs[i].querySelector('i'));
        } else {
            deSelectStar(starRefs[i].querySelector('i'));
        }
    }
}

starRatingRef.addEventListener('click', function(e) {
    if(e.target.classList.contains('fa-star')) {
        console.log('star wrapper clicked');
        const selectedIdx = Number(e.target.dataset.index);
        last_selected_starIdx = selectedIdx;
        const span = document.querySelector('.container h1');
        span.innerText = `Star Rating : ${last_selected_starIdx}`;
        handleStarSelection(selectedIdx);
    }
});

starRatingRef.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('fa-star')) {
        const selectedIdx = Number(e.target.dataset.index);
        handleStarSelection(selectedIdx);
    }
});

starRatingRef.addEventListener('mouseleave', function(e) {
    if(e.target.classList.contains('fa-star')) {
        handleStarSelection(last_selected_starIdx);
    }
});





