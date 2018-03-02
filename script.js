(function(){
    'use strict';

    const root = document.documentElement;
    const range = document.querySelector('.booth-slider');

    //as slider range's value changes, do something 
    range.addEventListener('input', handleSlider)

    function handleSlider (e) {
        let value = e.target.value 
        root.style.setProperty('--slider', value)
    }


})();