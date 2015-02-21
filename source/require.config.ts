///<reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts"/>

// Using constants avoids WebStorm inspection flagging.
var DIRECTORY_BOWER_COMPONENTS = "bower_components/";
var DIRECTORY_BUILD = "build/";

require.config(
	{
		baseUrl: "../",
		paths: {
			"jquery": DIRECTORY_BOWER_COMPONENTS+"jquery/dist/jquery.min",
			"TypeScript.NET/System": DIRECTORY_BOWER_COMPONENTS+"TypeScript.NET/build/System",
			"TypeScript.NET/System.Linq": DIRECTORY_BOWER_COMPONENTS+"TypeScript.NET/build/System.Linq",
			"components":DIRECTORY_BUILD+"components"
		},
		shim: {
			"TypeScript.NET/System": {
				exports: "System"
			},
			"TypeScript.NET/System.Linq": {
				deps: ["TypeScript.NET/System"],
				exports: "System"
			}
		}
	});