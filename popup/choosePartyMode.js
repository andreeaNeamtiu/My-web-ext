
function partyModeActivator(mode) {
    var desiredClassName;
    var color;
    var toModify;
    console.log('mode=',mode);

    switch (mode) {
        case "Party Mode 1": {
            desiredClassName = "mode1";
            color = "red";
            toModify = "divs";
            break;
        }
        case "Party Mode 2": {
            desiredClassName = "mode2";
            color = "blue";
            toModify = "imgs";
            break;
        }
        case "Party Mode 3": {
            desiredClassName = "mode3";
            color = "pink";
            toModify = "p";
            break;
        }
        case "Party Mode 4": {
            desiredClassName = "mode4";
            color = "green";
            toModify = "body";
            break;
        }
    }

    return {
        "color": color,
        "desiredClassName": desiredClassName,
        "toModify": toModify
    }
}

var optionsList = $(".party");
console.log(optionsList);

for (let i = 0; i < optionsList.length; i++) {
    let option = optionsList[i];
    console.log(typeof option);

    option.addEventListener('click', function(e) {

        console.log(e.target.className);
        var mode = e.target.textContent;
        var chooseModeObject = partyModeActivator(mode);

        //request
        $.ajax({url: "info.txt", success: function(result){
            //send message to content script  with info
            browser.runtime.sendMessage({coloring: result.color});
        }});
        
        var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {color: chooseModeObject.color, desiredClassName: chooseModeObject.desiredClassName, toModify: chooseModeObject.toModify});
        });
    });

}