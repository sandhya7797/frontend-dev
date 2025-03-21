const starRefs = document.querySelectorAll('.star');

// function toggleStar(refIdx) {
//     starRefs.forEach((starRef) => {
//         const starIdx = starRef.querySelector('i').dataset.index;
//         console.log(starIdx, refIdx);
//         if(starIdx<= refIdx) {
//             starRef.classList.add('fa-solid');
//             starRef.classList.remove('fa-regular');
//             console.log(starRef.classList);
//         } else {
//             starRef.classList.add('fa-regular');
//             starRef.classList.remove('fa-solid');
//             console.log(starRef.classList);
//         }
//     })
// }

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
        
        const selectedIdx = e.target.dataset.index;
        console.log(selectedIdx);
        for(let i=0;i<selectedIdx;i++) {
            selectStar(starRefs[i]);
        }
    });
});