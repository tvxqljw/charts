function chart1load(){
    //chart1
    var chartData1 = generatechartData1();

    function generatechartData1() {
        var chartData = [];
        var firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 150);

        for (var i = 0; i < 150; i++) {
            // we create date objects here. In your data, you can have date strings
            // and then set format of your dates using chart.dataDateFormat property,
            // however when possible, use date objects, as this will speed up chart rendering.
            var newDate = new Date(firstDate);
            newDate.setDate(newDate.getDate() + i);

            var visits = Math.round(Math.random() * 100 - 50);

            chartData.push({
                date: newDate,
                visits: visits
            });
        }
        return chartData;
    }


    var chart1 = AmCharts.makeChart("chartdiv1", {
        "theme": "none",
        "type": "serial",
        "autoMargins": false,
        "marginLeft":8,
        "marginRight":8,
        "marginTop":10,
        "marginBottom":26,
        "pathToImages": "http://www.amcharts.com/lib/3/images/",
        "dataProvider": chartData1,
        "valueAxes": [{
            "id":"v1",
            "axisAlpha": 0,
            "inside": true
        }],
        "graphs": [{
            "useNegativeColorIfDown":true,
            "balloonText": "[[category]]<br><b>value: [[value]]</b>",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletBorderColor": "#FFFFFF",
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#fdd400",
            "negativeLineColor": "#67b7dc",
            "valueField": "visits"
        }],
        "chartScrollbar": {
        },
        "chartCursor": {
            "valueLineEnabled":true,
            "valueLineBalloonEnabled":true
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisAlpha": 0,
            "minHorizontalGap":60
        }
    });

    chart1.addListener("dataUpdated", zoomChart);
//zoomChart();

    function zoomChart(){
        if(chart1.zoomToIndexes){
            chart1.zoomToIndexes(130, chartData1.length - 1);
        }
    }
}

function chart2load(){

//chart2
// generate data
    var chartData = [];
    function generateChartData() {
        var firstDate = new Date();
        firstDate.setTime(firstDate.getTime() - 10 * 24 * 60 * 60 * 1000);

        for (var i = firstDate.getTime(); i < (firstDate.getTime() + 10 * 24 * 60 * 60 * 1000); i += 60 * 60 * 1000) {
            var newDate = new Date(i);

            if (i == firstDate.getTime()) {
                var value1 = Math.round(Math.random() * 10) + 1;
            }
            else {
                var value1 = Math.round(chartData[chartData.length - 1].value1 / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
            }

            if (newDate.getHours() == 12) {
                // we set daily data on 12th hour only
                var value2 = Math.round(Math.random() * 12) + 1;
                chartData.push({
                    date: newDate,
                    value1: value1,
                    value2: value2
                });
            }
            else {
                chartData.push({
                    date: newDate,
                    value1: value1
                });
            }
        }
    }

    generateChartData();

    var chart2 = AmCharts.makeChart("chartdiv2", {
        "type": "serial",
        "theme": "none",
        "pathToImages": "/lib/3/images/",
        "dataProvider": chartData,
        "graphs": [{
            "balloonText": "[[title]]: [[value]]",
            "lineThickness": 2,
            "title": "intra-day",
            "valueField": "value1"
        }, {
            "balloonText": "[[title]]: [[value]]",
            "columnWidth": 20,
            "fillAlphas": 1,
            "title": "daily",
            "type": "column",
            "valueField": "value2"
        }],
        "zoomOutButtonRollOverAlpha": 0.15,
        "chartCursor": {
            "categoryBalloonDateFormat": "MMM DD JJ:NN",
            "cursorPosition": "mouse",
            "showNextAvailable":true
        },
        "autoMarginOffset": 5,
        "columnWidth": 1,
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "hh",
            "parseDates": true
        },
        "exportConfig": {
            "menuTop": "20px",
            "menuRight": "20px",
            "menuItems": [{
                "icon": '/lib/3/images/export.png',
                "format": 'png'
            }]
        }
    });
}

function chart5load(){
    var chartData5 = [
        {
            "name":"Jin",
            "work":100,
            "age":22,
            "success":77
        },
        {
            "name":"Hannah",
            "work":89,
            "age":21,
            "success":70
        },
        {
            "name":"Daisy",
            "work":121,
            "age":24,
            "success":99
        },
        {
            "name":"Ken",
            "work":152,
            "age":25,
            "success":150
        },
        {
            "name":"Sam",
            "work":55,
            "age":19,
            "success":52
        },
        {
            "name":"Emily",
            "work":103,
            "age":22,
            "success":80
        },
        {
            "name":"John",
            "work":147,
            "age":25,
            "success":140
        }
    ];


//chart5
    var chart5 = AmCharts.makeChart("chartdiv"+5,{
        "color":"#E7E7E7",
        "type":"radar",
        "theme": "dark",
        "fillAlphas":0.3,
        "fillColor":"#fff",
        "backgroundAlpha":1,
        "backgroundColor":"#3F3F4F",
        "title":{
            "text":"雷达图",
            "size":15
        },
        "legend": {
            "markerType": "circle",
            "title":"我是图例名称",
            "position": "bottom",
            "switchColor":"red",
            "autoMargins": false
        },
        "dataProvider":chartData5,
        "graphs":[
            {
                "valueField": "work",
                "bullet":"round",
                "balloonText":"[[name]]'s num is [[value]]",
                "lineColor":"#FF788B",
                "fillColors":"#FF788B",
                "fillAlphas":0.1,
                "lineAlpha":0.2,
                "lineThickness": 2,
                "bulletAlpha":0,
                "bulletBorderAlpha":0.5
            },
            {
                "valueField": "age",
                "bullet":"round",
                "fillColors":"#787FB5",
                "fillAlphas":0.1,
                "balloonText":"[[name]]'s num is [[value]]",
                "lineColor":"#787FB5",
                "lineAlpha":0.2,
                "lineThickness": 2,
                "bulletAlpha":0,
                "bulletBorderAlpha":0.5
            },
            {
                "valueField": "success",
                "bullet":"round",
                "balloonText":"[[name]]'s num is [[value]]",
                "lineColor":"#7BAB9F",
                "fillColors":"#7BAB9F",
                "lineAlpha":.2,
                "fillAlphas":0.1,
                "lineThickness": 2,
                "bulletAlpha":0,
                "bulletBorderAlpha":0.5
            }

        ],
        "startDuration": 1,
        "lineColor":"#fff",
        "valueAxes": [{
            "axisColor":"#fff",
            "axisAlpha":.1,//纵坐标的透明度
            "axisTitleOffset": 20,
            "minimum": 0,
            "gridColor":"#fff",
            "gridAlpha":.2
        }],
        "categoryField":"name",
        "exportConfig": {
            "menuTop":"10px",
            "menuRight":"10px",
            "menuItems": [{
                "icon": '/lib/3/images/export.png',
                "format": 'png'
            }]
        }
    });
}