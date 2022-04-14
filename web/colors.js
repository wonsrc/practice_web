var Links = {
    setColor : function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;

        while( i < alist.length) {
            alist[i].style.color = color;
            i++;
        }
    }
}
var Body = {
    setColor : function(color) {
        document.querySelector('body').style.color = color;
    },

    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    },
}
function nightDayHander(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        self.value = 'night';
        Body.setColor('black');
        Links.setColor('#888');
    }
}