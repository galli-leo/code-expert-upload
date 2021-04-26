// eslint-disable-next-line import/no-unassigned-import
import './options-storage.js';
// import "crx-hotreload";
// console.log("Hello background.")
function listener(details) {
    // let filter = chrome.webRequest.filterResponseData(details.requestId);
    // let decoder = new TextDecoder("utf-8");
    // let encoder = new TextEncoder();

    // filter.ondata = event => {
    //   let str = decoder.decode(event.data, {stream: true});
    //   // Just change any instance of Example in the HTTP response
    //   // to WebExtension Example.
    //   console.log("Response data: ", str);
    //   filter.write(encoder.encode(str));
    //   filter.disconnect();
    // }

    return {cancel: true};
  }

// chrome.webRequest.onBeforeRequest.addListener(
//     listener,
//     {urls: ["https://expert.ethz.ch/*"], types: ["script"]},
//     ["blocking"]
// );
