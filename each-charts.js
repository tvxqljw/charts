//chart1

var datenum = 7;
var setchartData = getdate();
function getdate(){
    var chartdata = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate()-datenum);

    for(var i=0; i < datenum; i++){
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate()+i);

        var others = Math.round(Math.random()*100 -50);

        chartdata.push({
            date:newDate,
            others:others
        });
    }

    return chartdata;
}

console.log(setchartData);

var chart = AmCharts.makeChart("chartdiv1",{
    "type":"serial",
    "dataProvider":setchartData,
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "graphs":[{
        "useNegativeColorIfDown":true,
        "lineColor":"#000",
        "negativeLineColor":"red",
        "valueField":"others",
        "balloonText": "[[date]]<br><b>value: [[others]]</b>",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletBorderColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "lineThickness": 2
    }],
    "chartScrollbar": {
    },
    "chartCursor": {
    },
    "categoryField": "date"

});