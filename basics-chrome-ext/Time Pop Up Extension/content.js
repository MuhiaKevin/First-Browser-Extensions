(
  function(){
    window.console.log("Chrome extension ready to go")
    /*

    let paragraphs = document.getElementsByTagName('p');
    let imgs = document.getElementsByTagName('img');
    for(let i = 0;i < imgs.length; i++ ){
      imgs[i].src = "file:///home/muhia/Pictures/%5B002668%5D.jpg";
      for(let j = 0; j < paragraphs.length; j++ ){
        paragraphs[j].innerHTML = 'HansLito'
      }
    }
    */




    // chrome method to accept message from the background script

    chrome.runtime.onMessage.addListener(gotMessage);




    // callback method

    function gotMessage(message, sender, sendResponse){
      console.log(message.txt);

      // if message sent from background.js is equal to what we want then execute the code below

      if(message.txt === "Message sent from background.js"){

        let paragraphs = document.getElementsByTagName('p');
        let imgs = document.getElementsByTagName('img');

        for(let i = 0;i < imgs.length; i++ ){
          imgs[i].src = "file:///home/muhia/Pictures/%5B002668%5D.jpg";

          for(let j = 0; j < paragraphs.length; j++ ){
            paragraphs[j].innerHTML = 'The Paragraph has been Deleted!!'
          }
        }
      }

    }

  }
)();
