
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
    //alert(request.color);
    //alert(request.coloring);
    if(request.color) {
        console.log("content script 1");
        addColorToBody(request.color);
    }
    else if(request.create) {
        var inputElement = $('<input style="margin-top:20px">');
        inputElement.addClass('newInput');
        var body = document.querySelector('header');
        body.append(inputElement[Object.keys(inputElement)[0]]);
        inputElement[Object.keys(inputElement)[0]].onkeyup = function() {
            var newInput = document.querySelector('.newInput').value;
            browser.runtime.sendMessage({input: newInput});
        }

    }
    if(request.coloring) {
        document.querySelector('body').style.backgroundColor = request.coloring;
    }
    //addClassToElement(request.toModify);

    //console.log(result.color[0]);
    //primire info
}

//jquery: input de adaugat in pagina
//on change pt input send message
//mesajul ajunge in background
// browser.runtime.onMessage.addListener(notify);
browser.runtime.onMessage.addListener(modify);