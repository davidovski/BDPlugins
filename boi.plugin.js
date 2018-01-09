//META{"name":"boi"}*//
var boi = function () {};
var wrap = ":burrito:"
var old
var modes = {
	none : 0,
	code : 1,
	shout : 2,
	burrito: 3,
	other: 4
};


var preascii = "";

var a = 0;

var emojis = {
	"<lenny>" : "( ͡° ͜ʖ ͡°)",
	"<boss>" : "(▀̿Ĺ̯▀̿ ̿)",
	"<stache>" : "ヽ° ~͜ʖ~ °ﾉ",
	"<flippy>" : "ʕノ◔ϖ◔ʔノ ︵ ┻━┻",
	"<flip>" : "(ノ◔ω◔)ノ︵ ┻━┻",
	"<shrugy>" : "┐(´～｀)┌",
	"<creep>" : "┬┴┬┴┤  (ಠ├┬┴┬┴",
	"<happy>" : "◔ ͜ ◔",
	"<sad>" : "◔̯◔",
	"<wink>" : "ಠ‿↼",
	"<evil>" : "(◣ ͜  ◢)",
	"owo" : "◔ω◔",
	"<bear>" : "ʕ•ᴥ•ʔ",
	"<kawaii>" : "(｡◕‿◕｡)",
	"<yum>" : "(っ˘ڡ˘ς)",
	"<hurt>" : "(҂◡_◡)"
}


var mode = modes.none

var editMode = false;

var app = {
	x: 0,
	y: 0,
	size: 1,
	angle: 0,
}

var sheet = window.document.styleSheets[0];
sheet.insertRule(".app { transform: translate(0%, 0%)}", sheet.cssRules.length);	
sheet.insertRule('body {  border-top: none;}', sheet.cssRules.length);

sheet.insertRule("avatar-large {border-radius: 0%;}", sheet.cssRules.length);	

console.log("yea boi!")

boi.prototype.start = function () {
	boi.prototype.attachHandler();
	document.addEventListener("keydown",this.listener=function(e){if("Escape"===e.key&&document.activeElement===document.querySelector(".content textarea"))
document.activeElement.value="";document.activeElement.dispatchEvent(new Event("input",{bubbles:true}));})
	console.log("ge")
	
	
};



boi.prototype.load = function () {

};

boi.prototype.unload = function () {
	document.removeEventListener("keydown", handleKeypress);
}
;

boi.prototype.stop = function () {
	document.removeEventListener("keydown", handleKeypress);

};

boi.prototype.onMessage = function () {
// 	simulateEnterPress();
    //called when a message is received
};


boi.prototype.observer = function (e) {
    //raw MutationObserver event for each mutation
     
};

boi.prototype.getName = function () {
    return "Boi Plugin";
};

boi.prototype.getDescription = function () {
    return "Turns your messages into a cool style... wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
};

boi.prototype.getVersion = function () {
    return "0.1.5";
};

boi.prototype.getAuthor = function () {
    return "davidovski";
};

boi.prototype.onSwitch = function() {
// 	this.attachHandler();
};

changeText = function(text) {
	var r = $(".content .channelTextArea-1HTP3C textarea");
	
	r.val("").focus();
	$(".content .channelTextArea-1HTP3C textarea")[0].dispatchEvent(new Event("input", { bubbles: true }));
	document.dispatchEvent(new Event("input", { bubbles: true }));
	document.execCommand("insertText", false, text);
}

setMode = function() {
	if (mode == modes.none) {
		sheet.insertRule('body {  border-top: none;}', sheet.cssRules.length);

	} else if (mode == modes.burrito) {
	sheet.insertRule('body {  border-top: 10px solid yellow;}', sheet.cssRules.length);

		wrap = " :burrito: ";
	} else if (mode == modes.code) {
	sheet.insertRule('body {  border-top: 10px solid black;}', sheet.cssRules.length);

		wrap = "`";
	} else if (mode == modes.shout) {
	sheet.insertRule('body {  border-top: 10px solid red;}', sheet.cssRules.length);

		wrap = "***";
	} else if (mode == modes.other) {	
		sheet.insertRule('body {  border-top: 10px solid green;}', sheet.cssRules.length);

	} 
	if (editMode) {	
		sheet.insertRule('body {  border-top: 10px solid orange;}', sheet.cssRules.length);
	} 

}

var replaceEmojis = function(text) {
	var update = false;
	for (var name in emojis) {
    	if (emojis.hasOwnProperty(name)) {
    		
    			var newtxt = text.replace(name, emojis[name]);
    			if (newtxt != text) {
    				update = true;
    			}
				text = newtxt;    		
    	}
	}
	
	if (update) {
		changeText(text);
	}
	
	return text;
}

var runBash = function(script) {	
	var exec = require('child_process').exec;
	exec(script, (error, stdout, stderr) => {
		if (error) {
		  console.error(`exec error: ${error}`);
		  return;
		}	
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	  });
}	

var updateWindow = function() {
	var sheet = window.document.styleSheets[0];
	var rule = ".app { transform: translate(" + app.x +"%, " + app.y + "%) scale( " + app.size+", " + app.size + ") rotate(" + app.angle+"deg);}";
	console.log(rule); 
	sheet.insertRule(rule, sheet.cssRules.length);	
	
}

var handleKeypress = function (e) {
		a++;
		var code = e.which;
		if (e.shiftKey && e.which >111 && e.which < 121) {
			mode = e.which - 112;
			setMode();
			if (e.which == 116) {
				var r = $(".content .channelTextArea-1HTP3C textarea");
				var txt = r.val();
				var proceed = confirm("Set wrap to " + txt + " ?")	
				if (proceed) {
					wrap = txt;
				} else {
					mode = 0;
				}			
			}
		}

		if (e.which == 117) {
			
			editMode = !(editMode);
			setMode();
			updateWindow();
		}
		if (editMode) {
			if (e.which == 189) {
				app.size -= 0.01;
			} else if (e.which == 187) {
				app.size += 0.01;
			}

			if (e.which == 219) {
				app.angle -= 1;
			} else if (e.which == 221) {
				app.angle += 1;
			}

			if (e.which == 37) {
				app.x -= 1;
			} else if (e.which == 39) {
				app.x += 1;
			}

			if (e.which == 38) {
				app.y -= 1;
			} else if (e.which == 40) {
				app.y += 1;
			}
			updateWindow();
			

			console.log(app);
			
		}

		
		
		

		var r = $(".content .channelTextArea-1HTP3C textarea");
		var txt = r.val();
		var textArea = document.activeElement
		txt = replaceEmojis(txt);

		if (e.shiftKey && e.which > 47 && e.which < 58 && e.ctrlKey) {
			var input = txt.replace("/ascii", "");
			if (input.startsWith('```')) {
				input = preascii;			
			} else {
				preascii = input;
			}


			var font = "thin";
			if (code == 49) {
				font = "standard";
			} else if (code == 50) {
				font = "speed";
			} else if (code == 51) {
				font = "doom";
			} else if (code == 52) {
				font = "weird";
			} else if (code == 53) {
				font = "gothic";
			} else if (code == 54) {
				font = "stacey";
			} else if (code == 55) {
				font = "3-d";
			} else if (code == 56) {
				font = "rectangles";
			} else if (code == 57) {
				font = "usaflag";
			} else if (code == 48) {
				font = "doh";
			}
			$.get("https://cors.io/?https://artii.herokuapp.com/make?text=" + input + "&font=" + font, function(data, status){
				changeText("```"+data+"```");
			});
		}
		
		if (txt.startsWith("/") ) {
			var output = txt;
			if (txt.startsWith("/test") &&  e.which == 13) {
				output = "test";
			} 
			if (txt.startsWith("/rpc on") &&  e.which == 13) {
				output = "```Switched RPC on!```";
				console.log(runBash("~/bin/rpc.sh"));
			}
			
			if (output != txt) {
				r.val("").focus();
				$(".content .channelTextArea-1HTP3C textarea")[0].dispatchEvent(new Event("input", { bubbles: true }));
				document.dispatchEvent(new Event("input", { bubbles: true }));
				document.execCommand("insertText", false, output);
			}
			return;
		} else if (mode > 0 && mode < 5) {
		if (e.shiftKey || e.which != 13) { return; }
			// if (textArea.value.startsWith(wrap)) {
// 				console.log("its ok sending...");
// 				return;
// 			}
			
			
		
			
			if (txt.length == 0){ return; }
		
			if (!txt.startsWith(wrap)) {
				txt = wrap + "" + txt;
			}
			
			if (mode == modes.shout) {
				txt = txt + "!";
			}
		
			if (!txt.endsWith(wrap)) {
				txt = txt + "" + wrap;
			}
			
			if (mode == modes.shout) {
				txt = txt.toUpperCase();
			}
			r.val("").focus();
			$(".content .channelTextArea-1HTP3C textarea")[0].dispatchEvent(new Event("input", { bubbles: true }));
			document.dispatchEvent(new Event("input", { bubbles: true }));
			document.execCommand("insertText", false, txt);
			
		}
	};


boi.prototype.attachHandler = function() {
	
	var el = document;
	if (el.length == 0) return;
	var self = this;

	// Handler to catch key events
	

	// bind handlers
	
	var arrayLength = el.length;
	
// 	console.log(arrayLength + " long ")
	// for (var i = 0; i < arrayLength; i++) {
//  	   el[i].addEventListener("keydown", handleKeypress, false);
// 	}
	document.addEventListener("keydown", handleKeypress, false);
	console.log("added handler!");
}
console.log(runBash("~/bin/rpc.sh"));

