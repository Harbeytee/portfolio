const masks =["h5", "h1", "h2", "h3", "h4", "ell", "o", "w1", "w2", "w3", "world-o", "r1", "r2", "r3", "world-l", "d1", "d2", "lt", "stroke", "gt"];

masks.forEach((mask, index, el) => {
    const id = `#mask-${mask}`
    let path = document.querySelector(id);
    const length = path.getTotalLength();
    for(let i= 0; i < length.length ; i++) {
        console.log(length[i])
    }
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
});