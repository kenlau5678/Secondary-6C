function logab(a, b) {
    return Math.log10(b) / Math.log10(a)
}



var f = 1;
var lineartext = document.querySelector('#linear')
var quadratictext = document.querySelector('#quadratic')
var plot = document.querySelector('.plot')
var functiontext = document.querySelector('#input-function')
functiontext.style.display = 'block'


var linear = document.querySelector('.linear')
linear.addEventListener('click', function() {
    f = 1;
    var input = document.querySelectorAll('.input')
    for (var i = 0; i < input.length; i++) {
        input[i].style.display = 'none'
    }
    lineartext.style.display = 'block'

})


var quadratic = document.querySelector('.quadratic')
quadratic.addEventListener('click', function() {
    f = 2;

    var input = document.querySelectorAll('.input')

    for (var i = 0; i < input.length; i++) {
        input[i].style.display = 'none'
    }
    quadratictext.style.display = 'block'


})

var evalText = 0
var inputFunction = document.querySelector('.input-function');
inputFunction.style.display = 'block'
var testBtn = document.querySelector('.test-btn');
testBtn.addEventListener('click', function() {

    text = inputFunction.value;

    text = text.replace(/sin/gi, 'Math.sin');


    text = text.replace(/cos/gi, 'Math.cos');


    text = text.replace(/tan/gi, 'Math.tan');

    text = text.replace(/sqrt/gi, 'Math.sqrt');

    text = text.replace(/pi/gi, 'Math.PI');

    text = text.replace(/e/gi, 'Math.E');

    text = text.replace(/pow/gi, 'Math.pow');

    text = text.replace(/log/gi, 'logab');



    alert(text);


    option.series[0]['data'] = plotData(text)
    functionCharts.setOption(option);
})


function plotD(text, x) {
    return (eval(text))
}

function plotData(text) {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, plotD(text, i)]);
    }
    return data;
}


plot.addEventListener('click', function() {
    if (f == 1) {
        var k = document.querySelector('#linear_k').value
        var b = document.querySelector('#linear_b').value


        option.series[0]['data'] = linearData(k, b)

    } else if (f == 2) {

        var a = document.querySelector('#quadratic_a').value
        var b = document.querySelector('#quadratic_b').value
        var c = document.querySelector('#quadratic_c').value
        option.series[0]['data'] = quadraticData(a, b, c)
    }
    functionCharts.setOption(option);
})



var functionCharts = echarts.init(document.querySelector('.function'), 'dark');

var data = quadraticData()


//一次函數
function linearFunction(x, k, b) {
    return ((k * x) + parseInt(b))
}

function linearData(k, b) {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, linearFunction(i, k, b)]);
    }
    return data;
}


//二次函數
function quadraticFunction(x, a, b, c) {
    return a * x ** 2 + b * x + parseInt(c)
}

function quadraticData(a, b, c) {
    let data = [];
    for (let i = -200; i <= 200; i += 0.01) {
        data.push([i, quadraticFunction(i, a, b, c)]);
    }
    return data;
}



var option = {
    title: {
        text: 'Function',
        left: 'right'
    },
    animation: false,
    grid: {
        top: 40,
        left: 50,
        right: 40,
        bottom: 50
    },
    xAxis: {
        name: 'x',
        minorTick: {
            show: true
        },
        minorSplitLine: {
            show: true
        }

    },
    yAxis: {
        name: 'y',
        min: -100,
        max: 100,
        minorTick: {
            show: true
        },
        minorSplitLine: {
            show: true
        }
    },
    dataZoom: [{
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: -20,
        endValue: 20
    }, {
        show: true,
        type: 'inside',
        filterMode: 'none',
        yAxisIndex: [0],
        startValue: -20,
        endValue: 20
    }],
    series: [{
        type: 'line',
        showSymbol: false,
        clip: true,
        data: linearData()
    }]
};

// 使用刚指定的配置项和数据显示图表。
functionCharts.setOption(option);

/* console.log(option.series[0]['data']); */

/*         console.log(document.querySelectorAll('.input')); */