var x;
for(x=0;x<20;x++) {
	setTimeout(function(){
		var box = document.createElement('div');
		box.className = 'box';
		document.getElementById('container').appendChild(box);
	},500*x);
}
