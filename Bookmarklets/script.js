// Bookmarklet to change or alter the data in a webpage

(
  function(){
    console.log('Boomarklet starting')
    let paragraphs = document.getElementsByTagName('p');
    let imgs = document.getElementsByTagName('img');
    console.log(imgs)

    for(let i = 0;i < imgs.length; i++ ){
      imgs[i].src = "file:///home/muhia/Pictures/%5B002668%5D.jpg";
      for(let j = 0; j < paragraphs.length; j++ ){
        paragraphs[j].innerHTML = 'HansLito'
      }
    }
  }
)();

/*

(
  function(){
    let script = document.createElement('script');
    script.src = 'script.js';
    document.body.appendChild(script);
  }
)();


*/
