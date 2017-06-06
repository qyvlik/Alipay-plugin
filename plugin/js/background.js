 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 	// sendResponse(request);
    sendResponse({status: "1"});
    window.data_from_content = request;
        	// alert("111");
    
    // 服务器传值
    $.post('http://localhost:3000/alipay', {bill:JSON.stringify(request.bill)}, function(data, textStatus, xhr) {
        chrome.tabs.query({
            active: true, 
            currentWindow: true
        }, function(tabs) {  
            chrome.tabs.sendMessage(tabs[0].id, {
                cmd: data.msg
            }, function(response) {    

            }); 
        });
    });
    // 插件显示数据
    chrome.runtime.sendMessage(request,function(response){
        window.data_from_content = request;
    })
 });