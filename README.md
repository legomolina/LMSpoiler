# LMSpoiler (v1.0)

##### Introduction
LMSpoiler is a little library which allows to you create a tipical spoiler in your webpage quickly with the integrated parser for custom tag ([spoiler][/spoiler]).<br />With LMSpoiler you can customize the text that is shown in the page, its style and the time that takes to open the hidden content.

##### Installation
<b>This library needs <a href="https://jquery.com/" target="_blank">Jquery</a> to use it.</b><br />
```javascript
    <script src="libs/js/jquery-2.1.4.min.js" type="text/javascript"></script>
```
To use LMWeb Finder you need to import js file into your html:
```javascript
    <script src="libs/js/LMSpoiler.js" type="text/javascript"></script> 
```
Also you need to create a little script into your html head to instantiate library and parse the text:
```javascript
<script type="text/javascript">
	window.onload = function() {
		LMSpoiler = new LMSpoiler();
		LMSpoiler.spoilerParser(); //Used for parse the custom tag [spoiler]. If you don't use it, this line can be ommited
	};
</script>
```
<br />
Second you need to place the new spoiler tag to your text:
```html
<div id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, lectus eu venenatis facilisis, erat dolor venenatis magna, sit amet cursus lacus neque eget orci.[spoiler]Hi! This is an spoiler[/spoiler]
Donec lorem dui, tristique nec urna ut, maximus interdum nunc. Ut eget imperdiet sapien. Sed egestas a quam eu vehicula. Aliquam lobortis magna dignissim orci faucibus, ut rhoncus ex ultricies.[spoiler]Hi! This is other spoiler[/spoiler]Cras nisi libero, ornare a feugiat vitae, maximus ac lacus. Fusce elementum turpis nec lorem mollis ornare ut ut risus. Morbi feugiat justo elit, vel vehicula enim tempor sit amet.</div>
```
Text above will show as next: <br />
![Example](http://i.imgur.com/iF5vLIB.png?1)
<br />
If you don't want to use the parse system, you can configure your custom style, your positions and so on and use the spoiler(param1, param2) function I've created in the same library. This function must be attached to the element who expands the spoiler. Param1 is element who contract or expands the spoiler and param2 is the time required to finish the animation. It's important the use of the data-show attribute which points to the element id which contracts or expands; that's because could be more than one and they have to be differenciate.
```html
<div class="spoiler">
	<div class="show-button" data-show="spoiler0" onclick="spoiler(this, 350);">Handler of Spoiler</div>
	<div id="spoiler0" class="spoiler-content">This is the text who will spoil</div>
</div>
```
 <br />
#####Configuration
As I said before you can customize the parser. You can change the element who contains spoiler tags ("#content" by default), the text showed in handler ("Show hidden content" by default), the class used to style the entire spoiler("spoiler" by default) and the time that takes to open/close the spoiler (350 miliseconds by default).<br />
You can change the element which contains the spoiler tags (please use unique selector like ID,  WIP -> multielements):
```javascript
<script>
	LMSpoiler.contentTag = "#newContent"; // (String), use css selectors
</script>
```
Change handler text:
```javascript
<script>
	LMSpoiler.customShowText = "New handler text";
</script>
```
Change main class used:
```javascript
<script>
	LMSpoiler.customSpoilerClass = "myClass";
</script>
```
Change time that takes to open/close:
```javascript
<script>
	LMSpoiler.spoilerTime = 500; (miliseconds)
</script>
```
####Changing style with CSS
There is a CSS file you can explore to see how it works in the example but I want to make some clarifications about it. <br />
First of all there are 3 sections: main section (.spoiler), handler section (.spoiler div:first-child) and content section (.spoiler div:last-child). You can change the class easily because you only have to write the new class in the script (as I said above) and change the name in css.
But don't worry about it because I'll make a tutorial in my website (legomolina.github.io) and I will explain this better (spanish).

There is an example for you to view how it works in this repo.<br /> 

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">LMWebFinder</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">legomolina</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional License</a>.
# LMSpoiler
>>>>>>> 24c3914eecef32c8dbb11b07062a7caffa0ed73a
