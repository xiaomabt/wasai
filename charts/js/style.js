/**
 * @author: zhangyh-k@glondon.com
 * @description:
 * @Date: 2017/8/1 20:17
 */
$(function () {
   //search
    $('.input_11').blur(function(){
        var sval = $('.input_11').val();
        if(sval != ""){
            $('.box1').attr('style','width:150px');
        }else{
            $('.box1').attr('style','width:37px');
            $('.input_11').removeAttr("autofocus");
        }
    });
    $('.box1_1').toggle(function () {
        $('.box1').attr('style','width:150px');
        $('.input_11').attr("autofocus",'autofocus');
    },function () {
        $('.box1').attr('style','width:37px');
        $('.input_11').removeAttr("autofocus");
    });
    /*$('#all').click(function () {
        $('.box1').css({width:'37px'});
    });*/
    //左上显隐
    $('.box2').click(function (e) {
        $('.beng').toggle();
        e.stopPropagation();
        });

    $(document).click(function(){
        $('.beng').slideUp();
    });
    //左边菜单
    $('.firsr_ul>li>a').toggle(function () {
        $(this).next().slideDown();
        $(this).next().next().css({transform:'rotate(90deg)'})
    },function () {
        $(this).next().slideUp();
        $(this).next().next().css({transform:'rotate(0deg)'})
    });
   //===================================//
    $('.menu').toggle(function () {
        stop(true,true);
        $('main section').animate({left:'-240px'},"fast");
        $('article').css({width:'0px'});
    },function () {
        stop(true,true);
        $('main section').animate({left:'0px'},"fast");
        $('article').css({width:'240px'});
    });

    //Echarts
    var myChart = echarts.init(document.getElementById('box_two_2'));
    option = {
        title: {
            text: 'VISITOR STATISTICS',
            x:'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#fa9fa4'
                }
            }
        },
        legend: {
            data:[]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['2015-04','2015-08','2015-12','2016-04','2015-08','2015-12','2016-04']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[350, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[520, 632, 701, 634, 590, 730, 820]
            }
        ]
    };
    myChart.setOption(option);
    window.onresize = function(){
        myChart.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
    };
    //======================================//


    var myChart2 = echarts.init(document.getElementById('box_three_11'));
    var layouts = [
        [[0, 0]],
        [[-0.25, 0], [0.25, 0]],
        [[0, -0.2], [-0.2, 0.2], [0.2, 0.2]],
        [[-0.25, -0.25], [-0.25, 0.25], [0.25, -0.25], [0.25, 0.25]]
    ];
    var pathes = [
        'M936.857805 523.431322c0 0-42.065715-68.89513-88.786739-68.89513-46.68416 0-95.732122 71.223091-95.732122 71.223091s-44.28544-72.503296-93.440922-71.152538c-35.565466 0.977306-62.89705 30.882406-79.124275 64.06615L579.773747 790.800797c-3.253248 37.391565-5.677568 50.904371-12.002816 69.63497-6.651802 19.698688-19.544883 35.227341-31.650099 45.909606-14.30231 12.621414-29.59831 22.066586-45.854208 27.424563-16.28969 5.362074-30.098739 6.496973-51.536794 6.496973-19.498906 0-36.95104-2.963456-52.395418-8.850534-15.410586-5.887078-28.420403-14.313984-39.034573-25.246003-10.613146-10.930995-18.757939-24.08151-24.435507-39.525171-5.676544-15.443763-8.532685-40.195482-8.532685-59.270963l0-26.232454 74.435273 0c0 24.644301-0.17705 64.452915 8.81408 77.006848 9.02697 12.515021 22.756147 18.092032 41.148826 18.791014 16.728678 0.636518 30.032179-8.061645 30.032179-8.061645s11.922022-10.5472 14.992077-19.756954c2.674995-8.025805 3.565363-22.180147 3.565363-22.180147s2.080461-21.789286 2.080461-34.234675L489.399906 514.299369c-16.678502-18.827776-43.801395-61.938688-82.756096-60.927693-54.699008 1.419366-100.422144 70.059622-100.422144 70.059622s-56.065126-70.059622-93.440922-70.059622c-37.376717 0-91.077939 70.059622-91.077939 70.059622S105.343488 156.737741 476.742042 119.363584l53.70327-74.714624 51.373056 74.714624C964.889395 142.740992 936.857805 523.431322 936.857805 523.431322z',
        'M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z',
        'M741.06368 733.310464c8.075264-29.262438 20.615373-40.632422 14.64105-162.810061C966.089728 361.789952 967.93897 72.37847 967.855002 54.693683c0.279347-0.279347 0.418509-0.419533 0.418509-0.419533s-0.17705-0.00512-0.428749-0.00512c0-0.251699 0-0.428749 0-0.428749s-0.139162 0.14633-0.418509 0.425677c-17.695744-0.083866-307.10784 1.760051-515.833958 212.142592-122.181632-5.984256-133.55305 6.563533-162.815693 14.644531C235.35063 295.798886 103.552614 436.975309 90.630758 486.076621c-12.921856 49.105408 39.634227 56.859034 58.579558 58.581197 18.953421 1.724314 121.471386-9.475789 130.09111 4.309094 0 0 16.367411 11.200102 17.226035 41.346662 0.850432 29.796659 15.173222 71.354163 37.123994 97.267302-0.028672 0.027648-0.05632 0.054272-0.083866 0.074752 0.158618 0.13097 0.316211 0.261939 0.474829 0.390861 0.129946 0.149402 0.261939 0.319283 0.393011 0.468685 0.019456-0.019456 0.04608-0.049152 0.075776-0.075674 25.918362 21.961216 67.477504 36.272128 97.269248 37.122458 30.149837 0.859546 41.354547 17.234534 41.354547 17.234534 13.779354 8.608051 2.583962 111.122842 4.302131 130.075546 1.727386 18.95168 9.477222 71.498445 58.579558 58.576077C585.12896 918.526771 726.311117 786.734182 741.06368 733.310464zM595.893555 426.206003c-39.961702-39.965184-39.961702-104.75991 0-144.720077 39.970918-39.96928 104.768307-39.96928 144.730112 0 39.970918 39.960064 39.970918 104.75479 0 144.720077C700.661862 466.171187 635.864474 466.171187 595.893555 426.206003zM358.53312 769.516032c-31.923302-4.573184-54.890394-18.410291-71.41847-35.402342-16.984474-16.526438-30.830387-39.495475-35.405824-71.420621-4.649062-28.082586-20.856832-41.167565-38.76649-38.763827-17.906586 2.40681-77.046886 66.714419-80.857805 89.475891-3.80887 22.752154 29.271859 12.081152 46.424166 27.654861 17.151283 15.590093-2.139853 61.93664-14.733107 86.845952-6.441984 12.735078-10.289766 26.42176-4.22953 33.76087 7.346586 6.070272 21.03593 2.222592 33.769472-4.220109 24.912384-12.585677 71.258829-31.872922 86.842368-14.731469 15.583539 17.160806 4.911002 50.229965 27.674419 46.419251 22.754099-3.807744 87.065395-62.946611 89.466163-80.85248C399.70857 790.374093 386.627072 774.166938 358.53312 769.516032z',
        'M848.794624 939.156685 571.780416 939.156685 571.780416 653.17123l341.897539 0 0 221.100654C913.677926 909.960704 884.482867 939.156685 848.794624 939.156685zM571.780403 318.743552c-11.861606-3.210138-31.443354-8.36864-39.829709-16.176435-0.596582-0.561766-1.016218-1.246413-1.613824-1.841971-0.560845 0.596582-1.016218 1.280205-1.613824 1.841971-8.386355 7.807795-15.96631 12.965274-27.827917 16.176435l0 263.544325L141.030675 582.287877 141.030675 355.202884c0-35.687834 29.195059-64.882688 64.883302-64.882688l150.649125 0c-16.984474-9.525965-32.846438-20.56233-46.111027-32.932045-60.250624-56.144691-71.129907-137.062605-24.283034-180.767027 19.615539-18.264986 46.252237-27.124736 75.026739-27.124736 39.933133 0 83.972915 17.070797 118.995968 49.706086 20.353331 18.983322 37.722624 43.405619 50.145075 69.056819 12.457267-25.6512 29.791744-50.074419 50.180915-69.056819 35.022029-32.63529 79.062835-49.706086 118.994944-49.706086 28.74071 0 55.410176 8.860774 75.025715 27.124736 46.882611 43.704422 35.96759 124.622336-24.283034 180.767027-13.264589 12.368691-29.127578 23.40608-46.111027 32.932045l144.649234 0c35.688243 0 64.882278 29.195981 64.882278 64.882688l0 227.084948L571.780416 582.287833 571.780416 318.743508zM435.064218 147.625267c-21.476966-19.965747-49.094144-31.913882-73.868288-31.913882-7.404954 0-21.125018 1.211597-29.863322 9.386803-2.000691 1.824563-8.070144 7.439462-8.070144 21.369754 0 15.650406 8.492749 40.24873 32.319386 62.477926 29.124506 27.12576 77.202432 47.601152 111.76704 47.601152 12.176794 0 16.492237-2.666701 16.527053-2.702541C489.524736 242.54505 475.664486 185.453773 435.064218 147.625267zM577.78135 254.790963c0 0 0.034816-0.034816 0.069632-0.034816 0.807424 0 5.50871 1.790771 15.509914 1.790771 34.564608 0 82.64151-20.47529 111.76704-47.601152 23.826637-22.229299 32.283546-46.810112 32.283546-62.442189 0-13.930291-6.033613-19.562496-8.035328-21.404467-8.77312-8.17623-22.457344-9.386803-29.864346-9.386803-24.808038 0-52.390298 11.948134-73.867264 31.913882C585.325466 185.208218 571.358822 241.73865 577.78135 254.790963zM500.89513 939.156685 205.914017 939.156685c-35.688243 0-64.883302-29.195981-64.883302-64.883712L141.030714 653.17123l359.864462 0L500.895177 939.15666z'
    ];
    var colors = [
        '#c4332b', '#16B644', '#6862FD', '#FDC763'
    ];

    function getVirtulData(year) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate((+year + 1) + '-01-01');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            var items = [];
            var eventCount = Math.round(Math.random() * pathes.length);
            for (var i = 0; i < eventCount; i++) {
                items.push(Math.round(Math.random() * (pathes.length - 1)));
            }
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                items.join('|')
            ]);
        }
        return data;
    }

    function renderItem(params, api) {
        var cellPoint = api.coord(api.value(0));
        var cellWidth = params.coordSys.cellWidth;
        var cellHeight = params.coordSys.cellHeight;

        var value = api.value(1);
        var events = value && value.split('|');

        if (isNaN(cellPoint[0]) || isNaN(cellPoint[1])) {
            return;
        }

        var group = {
            type: 'group',
            children: echarts.util.map(layouts[events.length - 1], function (itemLayout, index) {
                return {
                    type: 'path',
                    shape: {
                        pathData: pathes[events[index]],
                        x: -8,
                        y: -8,
                        width: 16,
                        height: 16
                    },
                    position: [
                        cellPoint[0] + echarts.number.linearMap(itemLayout[0], [-0.5, 0.5], [-cellWidth / 2, cellWidth / 2]),
                        cellPoint[1] + echarts.number.linearMap(itemLayout[1], [-0.5, 0.5], [-cellHeight / 2 + 20, cellHeight / 2])
                    ],
                    style: api.style({
                        fill: colors[events[index]]
                    })
                };
            }) || []
        };

        group.children.push({
            type: 'text',
            style: {
                x: cellPoint[0],
                y: cellPoint[1] - cellHeight / 2 + 15,
                text: echarts.format.formatTime('dd', api.value(0)),
                fill: '#777',
                textFont: api.font({fontSize: 14})
            }
        });

        return group;
    }

    option2 = {
        tooltip: {
        },
        calendar: [{
            left: 'center',
            top: 'middle',
            cellSize: [60, 60],
            yearLabel: {show: false},
            orient: 'vertical',
            dayLabel: {
                firstDay: 1,
                nameMap: 'cn'
            },
            monthLabel: {
                show: false
            },
            range: '2017-08'
        }],
        series: [{
            type: 'custom',
            coordinateSystem: 'calendar',
            renderItem: renderItem,
            dimensions: [null, {type: 'ordinal'}],
            data: getVirtulData(2017)
        }]
    };
    myChart2.setOption(option2);


    //===================================================//


    var myChart3 = echarts.init(document.getElementById('box_four_12'));
    option3 = {
        title: {
            text: 'MONTHLY',
            left: '50%',
            textAlign: 'center'
        },
        tooltip: {
            trigger: 'asix',
            axisPointer: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            backgroundColor: 'rgba(255,255,255,1)',
            padding: [5, 10],
            textStyle: {
                color: '#7588E4',
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
        legend: {
            right: 20,
            orient: 'vertical',
            //data: ['今日','昨日']
        },
        xAxis: {
            type: 'category',
            data: ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00',"22:00"],
            boundaryGap: false,
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#D4DFF5']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: ['#D4DFF5']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        series: [{
            name: '今日',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322'],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 237, 250,0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 237, 250,0.2)'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    color: '#f7b851'
                }
            },
            lineStyle: {
                normal: {
                    width: 3
                }
            }
        }, {
            name: '昨日',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: ['1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822'],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(216, 244, 247,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(216, 244, 247,1)'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    color: '#58c8da'
                }
            },
            lineStyle: {
                normal: {
                    width: 3
                }
            }
        }]
    };
    myChart3.setOption(option3);


    //===============================================


    var myChart4 = echarts.init(document.getElementById('box_four_13'));
    // Generate data
    option4 = {
        title: {
            text: 'DAILY',
            x:'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        grid: {
            containLabel: true
        },
        legend: {
           // data: ['增速','销量']
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016']
        }],
        yAxis: [{
            type: 'value',
            name: '增速',
            min: 0,
            max: 50,
            position: 'right',
            axisLabel: {
                formatter: '{value} %'
            }
        }, {
            type: 'value',
            name: '销量',
            min: 0,
            max: 3000,
            position: 'left'
        }],
        series: [{
            name: '增速',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            data: [1,13,37,35,15,13,25,21,6,45,32,2,4,13,6,4,11]
        }, {
            name: '销量',
            type: 'bar',
            yAxisIndex: 1,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [209,236,325,439,507,576,722,879,938,1364,1806,1851,1931,2198,2349,2460,2735]
        }]
    };
    myChart4.setOption(option4);

    //===============================================================


    var myChart5 = echarts.init(document.getElementById('box_four_14'));
    var data = [220, 182, 191, 234, 190, 330, 310,50,200];
    var markLineData = [];
    for (var i = 1; i < data.length; i++) {
        markLineData.push([{
            xAxis: i - 1,
            yAxis: data[i - 1],
            value: (data[i] + data[i-1]).toFixed(2)
        }, {
            xAxis: i,
            yAxis: data[i]
        }]);
    }

//option
    option5 = {
        title: {
            text: 'YEARLY',
            x:'center'
        },
        tooltip : {
            trigger: 'axis'
        },
        xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [{
            type: 'line',
            data:data,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                smooth: true,
                effect: {
                    show: true
                },
                distance: 10,
                label: {
                    normal: {
                        position: 'middle'
                    }
                },
                symbol: ['none', 'none'],
                data: markLineData
            }
        }]
    };
    myChart5.setOption(option5);




});