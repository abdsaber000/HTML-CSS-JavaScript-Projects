const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl=>{
    counterEl.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        var currentNum = Number(counterEl.innerText);
        var dataCeil = Number(counterEl.getAttribute("data-Ceil"));
        var increment =  dataCeil / 15;

        currentNum += increment;
        currentNum = Math.ceil(currentNum);
        
        if(currentNum < dataCeil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter , 50); // recursively call the function again , to incrase the speed decrease this number
        }else{
            counterEl.innerText = dataCeil;
        }
    }
})