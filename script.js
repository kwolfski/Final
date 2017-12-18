<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://github.com/kswedberg/jquery-smooth-scroll/blob/master/jquery.smooth-scroll.min.js"></script>
<script>
$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    
    return false;
});


(function() {

var img = document.getElementById('container').firstChild;
img.onload = function() {
    if(img.height > img.width) {
        img.height = '100%';
        img.width = 'auto';
    }
};

}());


			$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1'});
				$(".group2").colorbox({rel:'group2', transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
				$(".ajax").colorbox();
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
				$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});


// wk10 ex2 filtering
function checkbox(){
	var vitamins = document.getElementById("Dining").checked,
		mineralwater = document.getElementById("Stay In").checked,
		proteinbar = document.getElementById("Adventure").checked;

	if (vitamins) {
		$("h2[data-type=vitamin]").parent().css('display', 'block');
	}
	else {
		$("h2[data-type=vitamin]").parent().css('display', 'none');
	}
			
	if (mineralwater) {
		$("h2[data-type=mineralwater]").parent().css('display', 'block');
	}
	else {
		$("h2[data-type=mineralwater]").parent().css('display', 'none');
	}
			
	if (proteinbar) {
		$("h2[data-type=proteinbar]").parent().css('display', 'block');
	}
	else {
		$("h2[data-type=proteinbar]").parent().css('display', 'none');
	}	
}
