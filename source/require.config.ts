///<reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts"/>

require.config(
	{
		baseUrl: "./",
		paths: {
			"jquery": "../bower_components/jquery/dist/jquery.min",
			"TypeScript.NET/System": "../bower_components/TypeScript.NET/build/System",
			"TypeScript.NET/System.Linq": "../bower_components/TypeScript.NET/build/System.Linq",
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