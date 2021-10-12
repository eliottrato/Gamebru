class Bee {
 constructor(beeNumber) {
 //the HTML element corresponding to the IMG of the bee
 this.htmlElement = createBeeImg(beeNumber);
 //iits HTML ID
 this.id = this.htmlElement.id;
 //the left position (x)
 this.x = this.htmlElement.offsetLeft;
 //the top position (y)
 this.y = this.htmlElement.offsetTop;
 this.move = function(dx, dy) {
 //move the bees by dx, dy
 this.x += dx;
 this.y += dy;
 this.display();
 };
 this.display = function() {
 //adjust position of bee and display it
 this.fitBounds();//add this to adjust to bounds
 this.htmlElement.style.left = this.x + "px";
 this.htmlElement.style.top = this.y + "px";
 this.htmlElement.style.display = "block";
 };
 this.fitBounds = function() {
 //check and make sure the bees stays in the board space
 let parent = this.htmlElement.parentElement;
 let iw = this.htmlElement.offsetWidth;
 let ih = this.htmlElement.offsetHeight;
 let l = parent.offsetLeft;
 let t = parent.offsetTop;
 let w = parent.offsetWidth;
 let h = parent.offsetHeight;
 if (this.x < 0)
 this.x = 0;
 if (this.x > w - iw)
 this.x = w - iw;
 if (this.y < 0)
 this.y = 0;
 if (this.y > h - ih)
 this.y = h - ih;
 };
 }

