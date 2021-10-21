
var isParabol = false;
var _this = this;
function getHistory() {
    return document.getElementById("history").innerText;
}

function printHistory(so) {
    document.getElementById("history").innerText = so;
}

function getResult() {
    return document.getElementById("result").innerText;
}

function printResult(so) {
    if (so == "") {
        document.getElementById("result").innerText = so;
    }
    else {
        document.getElementById("result").innerText = numberFomatter(so);
    }
}

function numberFomatter(so) {
    var n = Number(so);
    var value = n.toLocaleString("en");
    return value;
}

function convertToNumber(so) {
    return Number(so.replace(/,/g, ''));
}

var modeBtn = document.getElementById('mode')
// console.log(modeBtn);
modeBtn.addEventListener('click', function () {
    if (isParabol) {
        isParabol = false;
        modeBtn.classList.add('btn-light');
    }
    else {
        isParabol = true;
        modeBtn.classList.remove('btn-light');
    }
})


var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var result = convertToNumber(getResult());
        if (result != NaN) {
            result = result + this.id;
            printResult(result);
        }
    })
}

var features = document.getElementsByClassName('feature');
for (var i = 0; i < features.length; i++) {
    features[i].addEventListener('click', function () {
        if (this.id == "AC") {
            printResult("");
            printHistory("");
        }
        else {
            var result = getResult();
            var history = getHistory();
            if (result != "") {
                // result = convertToNumber(result);
                history = history + result; //noi chuoi
                if (this.id == "=") {
                    var lastResult = eval(history);
                    printResult(lastResult);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printResult("");
                }
            }
        }


    })
}




