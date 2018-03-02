(function(){
    'use strict';

    const root = document.documentElement;
    const range = document.querySelector('.booth-slider');
    let inputs = root.querySelectorAll('.color-box > input');

    //as slider range's value changes, do something 
    range.addEventListener('input', handleSlider)

    inputs.forEach(element => {
        element.addEventListener('input', handleColor);
    });

    function handleSlider (e) {
        let value = e.target.value 
        root.style.setProperty('--slider', value)
    }

    function handleColor(e){
        let value = e.target.value;
        let parentId = e.target.parentNode.id 
        let inputBg = `--bg-${parentId}` 
        root.style.setProperty(inputBg, value)
    }


})();