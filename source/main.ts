///<reference path="../bower_components/DefinitelyTyped/jquery/jquery.d.ts"/>
///<reference path="require.config.ts"/>

"use strict";
import $ = require("jquery");
import HelloWorld = require("components/HelloWorld");

// Before document ready...
alert("Before ready.");

$(document).ready(()=>{
	$("#MainText").text("Main Text");
	new HelloWorld("#ComponentText01");
	new HelloWorld("#ComponentText02","Other Hello World");
});