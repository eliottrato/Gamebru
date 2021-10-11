 <script>
 var bear;
 </script>
script src="game.js"></script>
<noscript>
 Warning - JavaScript is Disabled.
 For full functionality of this page, it is necessary to enable JavaScript.
</noscript>
unction Bear() {
 this.dBear = 100;
 this.htmlElement = document.getElementById("bear");
 this.id = this.htmlElement.id;
 this.x = this.htmlElement.offsetLeft;
 this.y = this.htmlElement.offsetTop;
 this.move = function(xDir, yDir) {
 this.x += this.dBear * xDir;
 this.y += this.dBear * yDir;
 this.display();
 };
 this.display = function() {
 this.htmlElement.style.left = this.x + "px";
 this.htmlElement.style.top = this.y + "px";
 this.htmlElement.style.display = "block";
 };
}
