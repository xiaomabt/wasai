require(['echarts'],function () {
    window.onresize = function(){
        myChart.resize();
    };
    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    // 使用
    require(['echarts','echarts/chart/map'],function (ch) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ch.init(document.getElementById('james_1'));
        option = {
            tooltip : {
                trigger: 'item',
                formatter: '{b}'
            },
            series : [{
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode : 'multiple',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name:'广东',selected:true}
                ]
            }]
        };
        var ecConfig = require('echarts/config');
        myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
            var selected = param.selected;
            var str = '当前选择： ';
            for (var p in selected) {
                if (selected[p]) {
                    str += p + ' ';
                }
            }
            document.getElementById('wrong-message').innerHTML = str;
        })
        // 为echarts对象加载数据
        myChart.setOption(option);
    });
});