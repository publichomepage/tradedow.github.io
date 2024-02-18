
var savedEasyMdeData = '';
var easyMDE ;
$(function () {
    easyMDE  = new EasyMDE({
        autosave: {
            enabled: true,
            delay: 1000,
            uniqueId: 'easymde'
        },
        autoDownloadFontAwesome: false,
        element: document.getElementById('easymde'),
        initialValue: '## Welcome to our native Markdown editor!'
        + '\nThis is where you can experiment with Markdown formatting for your articles before publishing them on https://interviewdose.com .'
        + '\nThe editor allows you to preview how your content will appear on InterviewDose.com, giving you a clear understanding of how your articles will look and function once they are rendered.'
        + '\n\nFor the best and live view of the Markdown code for below content, we recommend using a large screen or making the editor full screen.'
    });

    easyMDE.codemirror.on("refresh", function(){

        var sideBySide = easyMDE.isSideBySideActive(); // returns boolean
        var fullScreen = easyMDE.isFullscreenActive(); // returns boolean
        if(fullScreen) {
            //read the content
            setEasyMdeData(savedEasyMdeData);
        }
    });
}); // End of use strict

function getEasyMdeData() {
    return easyMDE.value(); 
}

function saveEasyMdeData(data) {
    savedEasyMdeData = data ;
}
function setEasyMdeData(data) {
    easyMDE.value(data) ;
}

function clearEasyMdeData() {
    easyMDE.clearAutosavedValue();
}
