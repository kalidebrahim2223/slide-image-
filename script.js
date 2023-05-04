const body=document.querySelector("body"),
      cont=body.querySelector(".container"),
      btn=body.querySelector(".btn"),
      images=body.querySelectorAll("img");
cont.classList.toggle("active");
images[1].classList.add("active");
var x=[];
var c=1;
for (var i = 0; i < images.length; i++) {
	x[i]=images[i];
}
btn.addEventListener("click",() =>{
	var temp=x[c-1];
	x[0].classList.remove("prev");
	x.push(temp);
	x.shift();
	x[0].className='prev';
	x[1].className='active';
	x[2].className='next';

})

