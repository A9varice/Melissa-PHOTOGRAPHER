function checkScroll(){
    let scrollPos=window.scrollY;

    if(scrollPos >1000){
    btn.classList.add('opacity');
    } else{
    btn.classList.remove('opacity');
    }
    console.log(scrollPos);
}