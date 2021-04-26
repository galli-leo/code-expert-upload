import { openDB, deleteDB, wrap, unwrap } from 'idb';

console.log("Hello world!");

async function doDatabaseStuff() {
    const db = await openDB("MeteorDynamicImportCache");
	if (!db.objectStoreNames.contains("sourcesByVersion")) {
		return;
	};
    const all = await db.getAll("sourcesByVersion");
    for (const item of all) {
        item.source = item.source.replace("e.isAdmin?100:2","100000");
        db.put("sourcesByVersion", item)
    }
    console.log("Patching done!")
    // console.log("All sources:", all);
}
doDatabaseStuff();
// import "crx-hotreload";
// var script = document.querySelectorAll("script").item(1);
// console.log("Removing tag, but keeping URL.")
// var scriptURL = script.src;
// console.log("scriptURL", scriptURL);
// script.remove();
// async function doReplace() {
// 	const response = await fetch(scriptURL);
// 	var responseText = await response.text();
// 	responseText = responseText.replace("e.isAdmin?100:2","100000")
// 	console.log("script contents: ", responseText)
// 	var newScript = document.createElement('script');
// 	newScript.type = 'text/javascript';
// 	newScript.text = responseText;
// 	document.body.appendChild(newScript);
// }
// doReplace();
var _fetch = window.fetch;
window.fetch = function(input, init) {
	console.log("Haha fetching go brr", input, init)
	return new Promise((resolve, reject) => {
		_fetch(input, init).then((val) => {
			console.log("Response: ", val)
			resolve(val);
		}).catch(reason => {
			reject(reason)
		})
	})
}
// var _open = XMLHttpRequest.prototype.open;
// window.XMLHttpRequest.prototype.open = function (method, URL) {
//     var _onreadystatechange = this.onreadystatechange,
//         _this = this;

//     _this.onreadystatechange = function () {
//         // catch only completed 'api/search/universal' requests
//         if (_this.readyState === 4 && _this.status === 200 && ~URL.indexOf('fetch')) {
//             try {
//                 //////////////////////////////////////
//                 // THIS IS ACTIONS FOR YOUR REQUEST //
//                 //             EXAMPLE:             //
//                 //////////////////////////////////////
//                 console.log("responseText: ", _this.responseText);

//                 // rewrite responseText
//                 Object.defineProperty(_this, 'responseText', {value: JSON.stringify(data)});
//                 /////////////// END //////////////////
//             } catch (e) {
//                 console.warn("Failed to do stuff: ", e);
//             }

//         }
// 		console.log('Caught! :)', method, URL/*, _this.responseText*/);

//         // call original callback
//         if (_onreadystatechange) _onreadystatechange.apply(this, arguments);
//     };

//     // detect any onreadystatechange changing
//     Object.defineProperty(this, "onreadystatechange", {
//         get: function () {
//             return _onreadystatechange;
//         },
//         set: function (value) {
//             _onreadystatechange = value;
//         }
//     });

//     return _open.apply(_this, arguments);
// };
