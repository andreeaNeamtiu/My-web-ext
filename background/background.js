//request
function getData(request, sender, sendResponse) {
    if(request.input) {
        var param = request.input;
        $.ajax({
            url: browser.extension.getURL("info.txt"), 
            dataType: 'text', 
            success: function(result) {
            //send message to content script  with info            
            var finalResult = JSON.parse(result).color[param];
            var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
            gettingActiveTab.then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {coloring: finalResult});
            });
        }});
    }
}

browser.runtime.onMessage.addListener(getData);