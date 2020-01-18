let slider = document.querySelector('.main-slide-items');
let slides = document.querySelectorAll('.slider-component');


let count = 0;
let step = 1;
let slidesC = [];
var rezerv = [];
let hasChild = 0;
let rightFirst = false;
let timer = setInterval(auto, 3000);

function setUpSlider()
{
	for(let i = 0; i < slides.length; i++)
	{
		rezerv[i] = slides[i].cloneNode(true);
		slidesC[i] = slides[i].cloneNode(true);
		slider.removeChild(slides[i]);
		slider.appendChild(slidesC[i]);
	}
	
}
setUpSlider();
let z = 0;
function logic(i)
{
			slidesC[i] = slides[z].cloneNode(true);
			slider.appendChild(slidesC[i]);
			z++;
			if(z == 3)
			{
				z = 0;
			}
		
}

function auto()
{
	slidesC[count].style.width = '0%';
	slidesC[count].style.opacity = '0';
	count++;
	if(count % slidesC.length == 0)
	{
		step++;
		for(let i = count; i < step * 3; i++)
		{
			
			//slidesC[i] = slides[Math.floor(i/step -1)].cloneNode(true);
			logic(i);
		//	slider.appendChild(slidesC[i]);
		}
		for(let x = 0; x < count - 1; x++)
		{
			slidesC[x].remove();
		}
	}
}




let newSlides = [];

let allElements = document.querySelectorAll("[lazy='true']");
let alreadyShow = [0];



function lazyLoad(e)
{
for(let i = 0; i < allElements.length; i++)
	{
		if( window.pageYOffset - allElements[i].getBoundingClientRect().y > -150 && window.pageYOffset - allElements[i].getBoundingClientRect().y < window.innerHeight/2.4 )
		{
			allElements[i].style.opacity = '1';
		}
	}
}
addEventListener('scroll', lazyLoad);