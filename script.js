(function () {
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar2');
const hi = document.querySelector(".i");
const role = document.querySelector(".role");
setTimeout(() => (hi.style.display="block"), 4000);
/*setTimeout(() => (role.style.display="block"), 3000)*/

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('isactive');
    navbar.classList.toggle('active');
    

});

const masks = ["h1","h1a", "h2", "h2a", "h3", "h3a",  "h4", "h4a",  "ell", "ell-a", "o", "oa", "w1", "w1a", "w2","w2a", "w3", "w3a",  "world-o", "world-oa", "r1", "r2", "r3", "r1a", "r2a", "r3a", "world-l", "world-la", "d1", "d1a" , "d2", "d2a", "lt", "lta",  "stroke", "strokea", "gt", "gta"];
let lom = masks.length


masks.forEach((mask, index, el) => {
    const id = `#mask-${mask}`
    let path = document.querySelector(id);
    const length = path.getTotalLength();
   
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
});

var options = {
    animateClass: 'animate__animated',
    animateThreshold: 50,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);

})();