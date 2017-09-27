
function partyModeActivator(mode) {
    var desiredClassName;
    var color;
    var toModify;

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

for (let i = 0; i < optionsList.length; i++) {

    let option = optionsList[i];
    option.addEventListener('click', function(e) {

        var mode = e.target.textContent;
        var chooseModeObject = partyModeActivator(mode);

        //if the button pressed has change class send request for creating the input
        if (e.target.className == "party change") {
            const elem = "abc";
            var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
            gettingActiveTab.then((tabs) => {
                browser.tabs.sendMessage(tabs[0].id, {create: elem});
            });
        }

        var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {color: chooseModeObject.color, desiredClassName: chooseModeObject.desiredClassName, toModify: chooseModeObject.toModify});
        });
        
    });
}