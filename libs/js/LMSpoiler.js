/* 
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.
 */

/*
 * *******************************************************
 *              NEEDS JQUERY TO WORK!!!
 * *******************************************************
 */

function LMSpoiler() {
    /*
     * CONFIGURARTION
   	*/

	this.contentTag = "#content"; //id for element which contains spoiler tags (usually main container or something like this)
	this.customShowText = "Mostrar contenido oculto"; //text to show in top of spoilers
	this.customSpoilerClass = "spoiler"; //class used for style spoilers
	this.spoilerTime = 350; //time take to open or close the spoiler

    /*
     * END CONFIGURATION
     */

	this.spoilerParser = function() {
		var content = $(this.contentTag).html();
		var insideText = "";
		var completeSpoiler = "";
		var spoiler = "";
		var spoilerIndex = 0;
		var endPosition = 0;
		var lastPosition = 0;

		while(content.indexOf("[spoiler]", lastPosition) != -1) { //if there is a tag to convert to spoiler

			lastPosition = content.indexOf("[spoiler]", lastPosition); //takes the position of start tag of spoiler
			endPosition = content.indexOf("[/spoiler]", lastPosition); //takes the position of end tag of spoiler

			insideText = content.substr(lastPosition + 9, endPosition - (lastPosition + 9)); //text which is inside spoiler tags
			completeSpoiler = content.substr(lastPosition, (endPosition + 10) - lastPosition); //all content including spoiler tags

			spoiler = '<div class="' + this.customSpoilerClass + '"><div class="show-button" data-show="spoiler' + spoilerIndex + '" onclick="spoiler(this, ' + this.spoilerTime + ');">' + this.customShowText + '</div><div id="spoiler' + spoilerIndex + '" class="spoiler-content">' + insideText + '</div></div>';

			content = content.replace(completeSpoiler, spoiler); //replace all content with a spoiler

			$(this.contentTag).html(content); //and attach it to content

			insideText = "";
			completeSpoiler = "";
			spoiler = "";

			lastPosition ++;
			spoilerIndex ++;
		}
    };
}

function spoiler (element, time) {
	var id = $(element).data("show");
	$("#" + id).slideToggle(time);
}