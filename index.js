function shuffle(array){
    var CI = array.length,RI;

    while(0 !== CI)
    {
        RI = Math.floor(Math.random() * CI);
        CI--;
        [array[CI],array[RI]] = [
            array[CI],array[CI],
         

        ];
    }
    return array;
}

function spin(){
    //wheel.play();
    const box = document.getElementById("smallbox");
    const element = document.getElementById("bigbox");
    let SelectedItem = "";

    let free = shuffle([1890, 2250, 2610]);
    let off5 = shuffle([1850,2210,2570]);
    let off3= shuffle([1770,2130,2490]);
    let off2=shuffle([ 1810, 2170, 2530]);
    let nore= shuffle([1750, 2110,2470]);

    let results =shuffle([
         free[0],
        off5[0],
    off3[0],
off2[0],
nore[0],
    ]);

    if(free.includes(results[0])) SelectedItem = "Free shiping";
    if(off5.includes(results[0])) SelectedItem = "50% OFF";
    if(off3.includes(results[0])) SelectedItem = "30% OFF";
    if(off2.includes(results[0])) SelectedItem = "20% OFF";
    if(nore.includes(results[0])) SelectedItem = "no reward";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function()
    {
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        swal({  
            title: " YAYYYY!",  
            text: " Congrats you won " + SelectedItem,  
            
          });  
    }, 5500)

    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform= "rotate(90deg)";
    }, 6000);

}














