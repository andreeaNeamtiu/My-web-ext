
function addColorToBody(color) {
    const body = document.querySelector('body');
    body.style.backgroundColor = color;
}

/*function addClassToElement(element) {
    // console.log(element);
    // console.log(desiredClassName);
        var elements;
        switch (element) {
            case 'divs': {
                elements = document.querySelectorAll('div');
                break;
            }
            case 'imgs': {
                elements = document.querySelectorAll('h1');
                break;
            }
            case 'p': {
                elements = document.querySelectorAll('p');
                break;
            }
            case 'body': {
                elements = document.querySelectorAll('li');
                break;
            }
        }
        
        // parcurgere elements
        for(var i = 0; i < elements.length; i++) {
            alert('fdafafhghrt');
            //elements[i].addClass(desiredClassName);
            elements[i].style.color = pink;
            elements[i].style.fontSize = '50px';
            elements[i].style.backgroundColor = pink;
        }
}*/

function modify(request, sender, sendResponse) {
    addColorToBody(request.color);
    addClassToElement(request.toModify);
}

browser.runtime.onMessage.addListener(modify);