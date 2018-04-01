var app= angular.module('myApp');
app.controller('indexCtrl',function($scope,$rootScope,userService,$timeout){
	$scope.loading=true;
	userService.userCall().then(function (data) {
			$timeout(function(){
				
				$scope.loading=false;
			console.log(data);

			$scope.name=data.name;
			Highcharts.chart('stats', {
			chart: {
				type: 'area'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			credits: {
				enabled: false
			},
			legend: {
				layout: 'vertical',
				verticalAlign: 'top',
				x: 0,
				y: 80,
				floating: true,
				borderWidth: 1,
				backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
			},
			xAxis: {
				allowDecimals: false,
				labels: {
					formatter: function () {
						return this.value; // clean, unformatted number for year
					}
				}
			},
			yAxis: {
				title: {
					text: ''
				},
				labels: {
       					enabled: false
				}
			},
			tooltip: {
				pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
			},
			exporting: { enabled: false },
			plotOptions: {
				area: {
					pointStart: 1940,
					marker: {
						enabled: false,
						symbol: 'circle',
						radius: 2,
						states: {
							hover: {
								enabled: true
							}
						}
					}
				}
			},
			series: data.stats
		});
		Highcharts.chart('visitorCircle', {
		'chart': {
            'type': 'solidgauge',
			spacingTop: 0,
			spacingLeft: 0,
			spacingRight: 0,
			spacingBottom: 0,
			margin:0
        },
        title: {
			verticalAlign: 'middle',
			floating: true,
			text: '24'
		},
        'tooltip': {
            'enabled': false
        },
        exporting: { enabled: false },
        'pane': {
          'center': ['50%', '50%'],
          'startAngle': 0,
          'endAngle': 360,
          'background': {
            'backgroundColor': '#EEE',
            'innerRadius': '90%',
            'outerRadius': '100%',
            'borderWidth': 0
          }
        },
		credits: {
				enabled: false
			},
        'yAxis': {
          'min': 0,
          'max': 100,
          'labels': {
            'enabled': false
          },
    
          'lineWidth': 0,
          'minorTickInterval': null,
          'tickPixelInterval': 400,
          'tickWidth': 0
        },

        'plotOptions': {
            'solidgauge': {
                'innerRadius': '90%'
            }
        },
        
        'series': data.visitorCircle
    });
	Highcharts.chart('visitorBar', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
	credits: {
				enabled: false
	},
    subtitle: {
        text: ''
    },
	legend:{
		enabled:false
	},
	exporting: { enabled: false },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: data.visitorBar
	});


	var chart = new Highcharts.Chart({
			title: {
				text: '',
				align: 'left',
				margin: 0,
			},
			chart: {
				renderTo: 'progressBar1',
				backgroundColor: '#f6fafd',
				type: 'bar',
				height: 15,
				spacingTop: 0,
				spacingLeft: 0,
				spacingRight: 0,
				spacingBottom: 0,
				margin:0
			},
			credits: false,
			tooltip: false,
			legend: false,
			navigation: {
				buttonOptions: {
				enabled: false
				}
			},
			xAxis: {
				visible: false,
			},
			yAxis: {
				visible: false,
				min: 0,
				max: 100,
			},
			series: [{
				data: [100],
				grouping: false,
				animation: false,
				enableMouseTracking: false,
				showInLegend: false,
				color: 'lightskyblue',
				pointWidth: 3,
				borderWidth: 0,
				borderRadiusTopLeft: '4px',
				borderRadiusTopRight: '4px',
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				dataLabels: {
				className: 'highlight',
				enabled: false,
				align: 'right',
				style: {
					color: 'white',
					textOutline: false,
				}
				}
			}, {
				enableMouseTracking: true,
				data: data.progressBar1,
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				color: 'navy',
				borderWidth: 0,
				pointWidth:3,
				animation: {
				duration: 250,
				},
				dataLabels: {
				enabled: false,
				inside: true,
				align: 'left',
				format: '{point.y}%',
				style: {
					color: 'white',
					textOutline: false,
				}
				}
			}]
		});
		var chart = new Highcharts.Chart({
			title: {
				text: '',
				align: 'left',
				margin: 0,
			},
			chart: {
				renderTo: 'progressBar2',
				backgroundColor: '#f6fafd',
				type: 'bar',
				height: 15,
				spacingTop: 0,
				spacingLeft: 0,
				spacingRight: 0,
				spacingBottom: 0,
				margin:0
			},
			credits: false,
			tooltip: false,
			legend: false,
			navigation: {
				buttonOptions: {
				enabled: false
				}
			},
			xAxis: {
				visible: false,
			},
			yAxis: {
				visible: false,
				min: 0,
				max: 100,
			},
			series: [{
				data: [100],
				grouping: false,
				animation: false,
				enableMouseTracking: false,
				showInLegend: false,
				color: 'lightskyblue',
				pointWidth: 3,
				borderWidth: 0,
				borderRadiusTopLeft: '4px',
				borderRadiusTopRight: '4px',
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				dataLabels: {
				className: 'highlight',
				enabled: false,
				align: 'right',
				style: {
					color: 'white',
					textOutline: false,
				}
				}
			}, {
				enableMouseTracking: true,
				data: data.progressBar2,
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				color: 'navy',
				borderWidth: 0,
				pointWidth:3,
				animation: {
				duration: 250,
				},
				dataLabels: {
				enabled: false,
				inside: true,
				align: 'left',
				format: '{point.y}%',
				style: {
					color: 'white',
					textOutline: false,
				}
				}
			}]
		});
		var chart = new Highcharts.Chart({
			title: {
				text: '',
				align: 'left',
				margin: 0,
			},
			chart: {
				renderTo: 'progressBar3',
				backgroundColor: '#f6fafd',
				type: 'bar',
				height: 15,
				spacingTop: 0,
				spacingLeft: 0,
				spacingRight: 0,
				spacingBottom: 0,
				margin:0
			},
			credits: false,
			tooltip: false,
			legend: false,
			navigation: {
				buttonOptions: {
				enabled: false
				}
			},
			xAxis: {
				visible: false,
			},
			yAxis: {
				visible: false,
				min: 0,
				max: 100,
			},
			series: [{
				data: [100],
				grouping: false,
				animation: false,
				enableMouseTracking: false,
				showInLegend: false,
				color: 'lightskyblue',
				pointWidth: 3,
				borderWidth: 0,
				borderRadiusTopLeft: '4px',
				borderRadiusTopRight: '4px',
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				dataLabels: {
				className: 'highlight',
				enabled: false,
				align: 'right',
				style: {
					color: 'white',
					textOutline: false,
				}
				}
			}, {
				enableMouseTracking: true,
				data: data.progressBar3,
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				color: 'navy',
				borderWidth: 0,
				pointWidth:3,
				animation: {
				duration: 250,
				},
				dataLabels: {
				enabled: false,
				inside: true,
				align: 'left',
				format: '{point.y}%',
				style: {
					color: 'white',
					textOutline: false,
				}
				}
			}]
		});
		
		var pieChart = new Highcharts.Chart({
            chart: {
                renderTo: 'os',
                type: 'pie',
				spacingTop: 0,
				spacingLeft: 0,
				spacingRight: 0,
				spacingBottom: 0,
				margin:0
            },
        	title: {
			verticalAlign: 'middle',
			floating: true,
			text: ''
			},
            yAxis: {
                title: {
                    text: ''
                }
            },
			exporting: { enabled: false },
			credits: false,
			legend: false,
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: data.OS
        });
				
			},0)
			

	});

			

	
});

