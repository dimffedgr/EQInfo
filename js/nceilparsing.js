function getbb() {
    $.getJSON("https://api.projectbs.cn/red68/latest.json?", function(json) {
        acc = json.acc;
        maxacc = json.max_acc;
        document.getElementById("acc").innerHTML = acc + "cm/s²";
        document.getElementById("5mmaxacc").innerHTML = maxacc + "cm/s²";
    })
}
getbb();
setInterval(getbb, 1000);