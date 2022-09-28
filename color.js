
var Body = {
	setColor: function(color) {
 $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
  $('body').css('backgroundColor', color);
  }
 }


/*var Body = {
    setColor: function(color) {
    document.querySelector('body').style.color = color;
}, 
    setBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
}
} */
var Links = {
setColor: function(color) {
    $('a').css('color', color);  // 모든 a태그에 대해서 글자색을 바꿔준다.
/*var alist = document.querySelectorAll('a');
var i = 0;
while(i < alist.length) {
alist[i].style.color = color;
i = i + 1;
    } */
}
}

function nightDayHandler(self) {
var target = document.querySelector('body');
    if (self.value === 'night') {
                Body.setBackgroundColor('black');
                Body.setColor('white');
                self.value = 'day'
                Links.setColor('powderblue');
    } else {
                Body.setBackgroundColor('white');
                Body.setColor('black');
                self.value = 'night'
                Links.setColor('blue');
        }
}
