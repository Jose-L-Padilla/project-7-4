/* Hands-on Project 7-4
Jose L. Padilla
4-18-2020
*/

"use strict";
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
var previewBtn = document.getElementById("previewBtn");

function processDeliveryInfo() {
	delivInfo.name = document.getElementById("nameinput").value;
	delivInfo.addr = document.getElementById("addrinput").value;
	delivInfo.city = document.getElementById("cityinput").value;
	delivInfo.email = document.getElementById("emailinput").value;
	delivInfo.phone = document.getElementById("phoneinput").value;
  
	var prop;
	for (prop in delivInfo) {
		delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
		console.log(prop);
		console.log(delivSummary);
	}
}

function previewOrder() {
	processDeliveryInfo();
	document.querySelector("section").style.display = "block";
	delivSummary.style.display = "block";
}

function createEventListener() {
	var submitButton = document.getElementById("previewBtn");
	if (previewBtn.addEventListener) {
		previewBtn.addEventListener("click", previewOrder, false);
	} else if (previewBtn.attachEvent) {
		previewBtn.attachEvent("onclick", previewOrder);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListener);
}