Index = [];

function Navigate(slide, n){

	$slides = document.getElementsByClassName("slider-X")[slide].getElementsByClassName("slider-X-item");

	for($slideIndexo = 0; $slideIndexo < $slides.length; $slideIndexo++){

		$slide = $slides[$slideIndexo];

		$slide.style.display = "none";

	}

	$pos = Index[slide] + Number(n);

	if($pos >= $slides.length) { $pos = 0; }
	else if ( $pos < 0 ) { $pos = $slides.length - 1; }

	$slide = $slides[$pos];
	
	$slide.style.display = "flex";

	Index[slide] = $pos;

}

document.addEventListener("DOMContentLoaded", function (){

$slides = document.getElementsByClassName("slider-X");

for($slideIndexi = 0; $slideIndexi < $slides.length; $slideIndexi++){

	$slideIndex = $slideIndexi;

	$slide = $slides[$slideIndex];

	Index[$slideIndex] = 0;

	var slideInstance  = setInterval(function(){

		Navigate($slideIndex, +1);

	}, 4000, 4000);

	$slidesControls = $slide.getElementsByClassName("slider-X-controls");

	for($slideControlIndex = 0; $slideControlIndex < $slidesControls.length; $slideControlIndex++){

		$slideControl = $slidesControls[$slideControlIndex];

		if($slideControl.className.indexOf("prev-X") != -1){

			$slideControl.onclick = function() { Navigate($slideIndex, -1); }

		}else {

			$slideControl.onclick = function() { Navigate($slideIndex, +1); }

		}

	}

} });