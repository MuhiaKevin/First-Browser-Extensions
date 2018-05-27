console.log('Background running')
//
// event when the extension button is clicked
// chrome Api which means only available in google chrome

chrome.browserAction.onClicked.addListener(buttonClicked)


// callback function

// this will act as link between the content.js and background.js so that they can communicate

function buttonClicked(tab){
  let msg = {
    txt : "Message sent from background.js"
  };

  chrome.tabs.sendMessage(tab.id,msg)
 }
