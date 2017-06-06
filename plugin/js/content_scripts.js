;(function(){
    /**
     * [实现数据获取与传输]
     *     a)60秒刷新
     *     b)数据过滤数据传输到background.js进行转发
    */

        // 订单详细数据
        var count = $('.J-item');
        // 订单号
        var billIdBox = $(".J-tradeNo-copy.J-tradeNo");
        console.log(count);
        var arrMg = [{
            regExp:/\t\n/g,
            txt:""
        },{
            regExp:/\n/g,
            txt:" "
        },{
            regExp:/\t/g,
            txt:" "
        },{
            regExp:/\/g,
            txt:" "
        },{
            regExp:/\/g,
            txt:" "
        }];
        // var arrMg = [/\n/g, /\t/g];

        if(count && billIdBox){
            var billArr = [];
            for(var i = 0;i < count.length;i++){
                var item = {}
                item.bill =  count[i].innerText;
                if(item.bill.indexOf("交易成功") > -1){



                    item.id = billIdBox[i].attributes["data-clipboard-text"].value;
                    // console.log(JSON.stringify(item.id));

                    
                    // 替换其他字符
                    arrMg.forEach(function(v,j){
                         item.bill = item.bill.replace(v.regExp,v.txt);
                    })
                    item.bill = item.bill.substring(0,item.bill.lastIndexOf("交易成功")-2);

                    // 时间替换
                    dayType = item.bill.substring(0,2);
                    // console.log(dayType);
                    if(dayType.indexOf("今天")>-1 || dayType.indexOf("昨天")>-1 ){
                        var date1 =  item.id.substring(0,4);
                        var date2 =  item.id.substring(4,6);
                        var date3 =  item.id.substring(6,8);
                        item.bill = date1 + "-" + date2 + "-" + date3 + item.bill.substring(2);


                    }

                    billArr.push(item);
                    item = {};
                }else{
                    continue;
                }
            }
        }
        console.log(JSON.stringify(billArr))
        chrome.runtime.sendMessage({
            count:count.length,
            bill: billArr
        },function(response){
            console.log(response);
        })

        // 接收数据返回
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){

            console.log(JSON.stringify(request.cmd))
            sendResponse({status: "success"});
            if(request.cmd == 1){
                console.log("60秒后重新加载页面")
                //存在首页按钮，60秒后点击
                //不存在首页按钮，60秒后刷新页面
                if($(".page-home.page-trigger").html()){
                    console.log("存在首页按钮");
                    setTimeout(function(){ 
                        console.log("刷新首页")
                        $(".page-home.page-trigger").html("<span id='homeSofar'>首页</span>");
                        $("#homeSofar").click();
                    },60000);
                }else{
                    setTimeout(function(){
                        location.reload("/"); 
                        console.log("#######");
                        console.log("当前页面刷新");
                        console.log("#######");
                    },60000);
                }
            }else{
                // 点击下一页
                console.log("5秒后点击下一页，进入下一页存档")
                setTimeout(function(){
                    if($(".page-next.page-trigger").html()){
                        console.log($(".page-next.page-trigger").html())
                        console.log("点击")
                        console.log()
                        $(".page-next.page-trigger").html("<span id='nextSofar'>下一页</span>");
                        $("#nextSofar").click();
                    }else{
                        location.reload("/"); 
                        console.log("#######");
                        console.log("末页数据刷新");
                        console.log("#######");
                    }
                    
                },10000)
            }
        })

})(this)