function changeColor() {
	var c = document.getElementById('Joel');
	c.style.color = 'blue';
}

function revertColor() {
	var c = document.getElementById("Joel");
	c.style.color = 'black';
}

function picChange() {
	var p = document.getElementById("hulkSmash");
	p.src="./images/Hulk2.png"
}

function picRevert() {
	var p = document.getElementById("hulkSmash");
	p.src='./images/bruce.jpg'
}