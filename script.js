const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
   idx++;

   if(idx > img.length - 1){
      idx = 0;
   }

                                    / é i IDX vezes o tamnho das fotos do carrosel/ 
imgs.style.transform = `translateX(${-idx*500}px)`;

}

setInterval(carrossel,1800);
