//title:新版正方教务学生一键评测
//author:Srpihot
//Date:2021-7-11 23:14
var num = document.getElementById("tempGrid").rows.length - 1
console.log('共' + num + '门课')
var i = 1;
var timer = setInterval(() => {
    if (i == num + 1) {
        console.log('评价结束')
        clearInterval(timer)
    } else {
        console.log('开始评第' + i + '门课')
        var body = document.getElementById(i++)
        if (body != null) body.click();
        setTimeout(() => {
            var radios = document.getElementsByClassName('radio-pjf');
            var j = 0;
            var r = Math.floor(Math.random() * 5) + 3;
            [...radios].forEach((item) => {
                if (r == j) {
                    if (item.getAttribute("data-dyf") == "80") {
                        item.checked = true
                        j++
                    }
                } else {
                    if (item.getAttribute("data-dyf") == "90") {
                        item.checked = true
                        j++
                    }
                }
            })
            document.getElementById("pyDiv").getElementsByTagName("textarea")[0].innerHTML = "非常负责任的老师";
            document.getElementById('btn_xspj_bc').click()
                //提交button已注释，希望大家按照理性提交。
                //document.getElementById('btn_xspj_tj').click()
            console.log('第' + (i - 1) + '门课已提交')
        }, 3000)
    }
}, 6000)
