
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
// function notify(request, sender, sendResponse) {
    // console.log("merge?");
    // $("body").style.color = request.coloring[0];
// }

function modify(request, sender, sendResponse) {
    if(request.color) {
        console.log("a venit mesajul");
        addColorToBody(request.color);
    }
    else if(request.coloring) {
        console.log("merge?");
        $("body").style.color = request.coloring[0];
    }
    //addClassToElement(request.toModify);

    //console.log(result.color[0]);
    //primire info

    const inputElement = $('<input> </input>');
    const parent = $('body');
    inputElement.addClass('newInput');
    parent.appendChild(inputElement);
    var newInput = $('.newInput');
    newInput.value().onchange = function() {
        browser.runtime.sendMessage({'input' : newInput.value()}).then(sendMessage);
    }
}

//jquery: input de adaugat in pagina
//on change pt input send message
//mesajul ajunge in background
// browser.runtime.onMessage.addListener(notify);
browser.runtime.onMessage.addListener(modify);