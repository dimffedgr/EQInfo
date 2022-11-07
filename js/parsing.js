function getMainData() {
    $.getJSON("https://api.projectbs.cn/v2/ceic/get_data.json?" + new Date().getTime(), function(json) {
        mainType = json.data.type;
        mainDepth = json.data.depth;
        mainEpicenter = json.data.epicenter;
        mainStartAt = json.data.occurTime;
        mainMagnitude = json.data.magnitude;
        mainTime = json.data.occurTime;
        mainMaxint = json.data.maxInt;
        if (mainType == "自动") mainDepth = "--";
        document.getElementById("Maxint").innerHTML = "最大烈度<strong>" + mainMaxint + "</strong>级" ;
        document.getElementById("Area").innerHTML = "震源地:" + mainEpicenter ;
        document.getElementById("Mag").innerHTML = "Ms<strong>" + mainMagnitude + "</strong>" ;
        document.getElementById("type").innerHTML =  "[<em>CEIC</em>" + mainType + "报]" ;
        document.getElementById("depth").innerHTML = "深度<strong>" + mainDepth + "</strong>km" ;
        document.getElementById("time").innerHTML = "时间:" + mainTime;
    })
}
function getjmadata() {
    $.getJSON("https://api.wolfx.jp/jma_eew.json?" + new Date().getTime(), function(json) {
        JMADepth = json.Depth;
        JMAEpicenter = json.Hypocenter;
        JMAStartAt = json.OriginTime;
        JMAMagnitude = json.Magunitude;
        JMAShindo = json.MaxIntensity;
        document.getElementById("JMAMaxint").innerHTML = "震度<strong>" + JMAShindo + "</strong>";
        document.getElementById("JMAArea").innerHTML = "震源地:" + JMAEpicenter ;
        document.getElementById("JMAMag").innerHTML = "Mj<strong>" + JMAMagnitude + "</strong>" ;
        document.getElementById("JMAdepth").innerHTML = "深度<strong>" + JMADepth + "</strong>km" ;
        document.getElementById("JMAtime").innerHTML = "时间:" + JMAStartAt;
    })
}
function getbb() {
    $.getJSON("https://api.projectbs.cn/red68/latest.json?", function(json) {
        acc = json.acc;
        maxacc = json.max_acc;
        cat = json.create_at;
        var accceil = json.acc;
        accceil = accceil.toFixed(5);
        maxaccceil = json.max_acc;
        maxaccceil = maxaccceil.toFixed(5);
        document.getElementById("bbnow").innerHTML = "实时震度:<br>" + accceil + "cm/s²" ;
        document.getElementById("bb5mmax").innerHTML = "5分钟内最大震度:<br>" + maxaccceil + "cm/s²";
        document.getElementById("cat").innerHTML = "更新时间:<strong>" + cat + "</strong>"
    })
}
getMainData();
setInterval(getMainData, 1000);
getjmadata();
setInterval(getjmadata, 1000);
getbb();
setInterval(getbb, 1000);

