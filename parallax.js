const MAX_TRANSLATE = 6;

document.addEventListener("mousemove", event => {
    const height = event.clientY / window.innerHeight;
    const width = event.clientX / window.innerWidth;
    updatePositions(height, width);
});


const elements = [
    "background", "clouds", "back-mountain", "front-mountain",
    "hills-4", "hills-3", "hills-2", "hills-1", "birds"
].map(klass => document.querySelector(`.${klass}`));


function updatePositions(height, width) {
    const maxVHTranslation = -height * MAX_TRANSLATE;
    const maxVWTranslation = -width * MAX_TRANSLATE;
    for (let i=0; i<elements.length; i++) {
        const translateVH = i / elements.length * maxVHTranslation;
        const translateVW = i / elements.length * maxVWTranslation;

        elements[i].style.transform = `translate3d(${translateVW}vw, ${translateVH}vw, 0)`;
    }
}