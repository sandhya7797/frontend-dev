const starRefs = document.querySelectorAll('.star');
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

starRefs.forEach((star) => {
    star.addEventListener('click', function(e) {
        const selectedIdx = Number(e.target.dataset.index);
        last_selected_starIdx = selectedIdx;
        for(let i=0;i<starRefs.length;i++) {
            if(i<selectedIdx) {
                selectStar(starRefs[i].querySelector('i'));
            } else {
                deSelectStar(starRefs[i].querySelector('i'));
            }
        }
    });

    star.addEventListener('mouseover', function(e) {
        const selectedIdx = Number(e.target.dataset.index);
        for(let i=0;i<starRefs.length;i++) {
            if(i<selectedIdx) {
                selectStar(starRefs[i].querySelector('i'));
            } else {
                deSelectStar(starRefs[i].querySelector('i'));
            }
        }
    });

    star.addEventListener('mouseleave', function(e) {
        starRefs.forEach((ref,idx) => {
            if(idx>last_selected_starIdx-1) {
                deSelectStar(ref.querySelector('i'));
            } else {
                selectStar(ref.querySelector('i'));
            }
        });
    });

    
});



