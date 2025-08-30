let nextDom = document.getElementById('next');
let prenDom = document.getElementById('prev');
let carouseDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prenDom.onclick= function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let ithemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type  === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(ithemThumbnail[0]);
        carouseDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(ithemThumbnail[positionLastItem]);
        carouseDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouseDom.classList.remove('next');
        carouseDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    } ,timeAutoNext);
}
