var targetNumber = document.querySelectorAll('.counterNumber');

targetNumber.forEach((counter) => {
counter.innerHTML=0;
const increment = ()=>{
    const initialCount = +counter.innerHTML;
    const target = +counter.getAttribute('target-number');
    // console.log(typeof target);

    const incrementVal = target/(target/2);

    if(initialCount < target)
    {
        let result = initialCount+incrementVal;
        counter.innerHTML = Math.round(result);
        setTimeout(increment,30);
    }
    else{
        counter.innerHTML= target;
    }
}
addEventListener('load', increment);
});