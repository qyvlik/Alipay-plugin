// function add(){
//     $('.totalCount').html(22121);
// }
$(function(){
    $("h1").html("账单查询")
     // 无法接收conent_script.js中发送过来的消息
     // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     //     sendResponse({sofar: "zhang"});
     // });
     
    var bg = chrome.extension.getBackgroundPage();

    console.log(bg);

    var billData = bg.data_from_content.bill;
    // $(".btn-sub").on('click', function(event) {
    //     event.preventDefault();
    //     /* Act on the event */
    //     alert(1)
    // });
    
    billData.forEach(function(v,i){
        $(".bill-box").append('<li><div>' + billData[i].id + '</div><div>' + billData[i].bill + '</div></li>')
    })
    // 从background.js接收
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        // $("h1").html(request.count)
        // console.log(request.count)
         // $(".count").html(request.count);
         // $(".no-count").html(request.noCount);
         // $(".total").html(request.total);;
    })
    // $.post('http://localhost:3000/alipay', {bill:JSON.stringify(billData)}, function(data, textStatus, xhr) {
    //     /*optional stuff to do after success */
    //     console.log(data);
    // });
    // $(".count").html(data_from_content.count);
    // $(".no-count").html(data_from_content.noCount);
    // $(".total").html(data_from_content.total);

    // 一键点赞
    $("#btn").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "click"});
        });
    })
    // 一键消赞
    $("#cancel-btn").on('click',function(){
         // 这是发送消息
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "no-click"});
        });
    })



})