let range = document.querySelector('.range');
let rangeValue = range.value;
let number = document.querySelector('.number');
let numberValue = number.value;
let button = document.querySelector('button');
let button2 = document.querySelector('.btn2')
let paragragh = document.querySelector('.p1');
let p2 = document.querySelector('.p2');

paragragh.innerHTML = range.value;

let checkValue = () => {
    paragragh.innerHTML = range.value;
    rangeValue = range.value;

    // range.value = number.value
    // number.value = range.value
    
    try{
        // Here you try a block of code
        if(rangeValue <= 2000) throw "Below standard";
        if(rangeValue > 2000 && rangeValue < 2500) throw "Acceptable";
        if(rangeValue === 2500) throw "Standard";
        if(rangeValue > 2500) throw "Execellent";
    }
    catch(err){
        // Catches any error that occured during trying the code block
        p2.innerHTML = err;
    }
    finally{
        // Gets executed irrespective of the result of the above code executed
        p2.innerHTML += '<br> The standard has been evaluated'
    }
}

range.addEventListener('change', checkValue)

range.addEventListener('change', ()=>{
    number.value = range.value
})
number.addEventListener('keyup', ()=>{
    range.value = number.value
    checkValue()
    paragragh.innerHTML = range.value;
})