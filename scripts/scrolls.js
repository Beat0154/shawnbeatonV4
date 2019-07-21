function parallax(direction, id, startingNumber, scrollVariable){
    var scrolled = window.pageYOffset;
    var element = document.getElementById(id);
    element.style[`${direction}`] = (startingNumber + (scrolled * scrollVariable)) + 'px';
}

function slide(number,id, class1, class2) {
  if (document.body.scrollTop > number || document.documentElement.scrollTop > number) {
      document.getElementById(id).className = (class1);
  }
  else{
      document.getElementById(id).className = (class2);
  }
}

var openElement;
function showtext(name){
    var element = document.getElementById(name);
    if (openElement === element){
        element.style.display = "none";
        openElement = null;
    }
    else{
        if (openElement != null){
            openElement.style.display = "none";
        }
        element.style.display = "block";
        openElement = element;
    }
}

window.onscroll = function() {
    slide(375, "nav", "navup", "nav");
//    parallax('top','background', 0, 1);
    parallax('top','cloudback', 0, 0.20);
    parallax('padding-left','cloudback', 0, 0.75);
    parallax('top','cloudfront', 0, 0.25);
    parallax('padding-left','cloudfront', 0, 0.75);
    parallax('top','mountains', 0, 0.5);
    parallax('top','mid', 0, 0.10);
//    parallax('top','foreground', 150, -0.1);
    parallax('top','findmorebtn', 400, 0.15);
    parallax('top','hockeyplayer', 100, -0.05);
    parallax('padding-left','hockeyplayer', 0, 0.2);
    parallax('top','puck', 20, -0.15);
    parallax('padding-left','puck',  0, 0.2);
    parallax('width','form',400,0.2);
    if(screen.width > 792){
    parallax('width','span1',500,0.2);
    parallax('width','span2',500,0.2);
    parallax('width','span3',500,0.2);  
    parallax('padding-left','skateboard',0,0.5);
    }
    else{
    parallax('width','span1',240,0);
    parallax('width','span2',240,0);
    parallax('width','span3',240,0);
    parallax('padding-right','skateboard',-540,0.5);
    }
}