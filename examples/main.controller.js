angular.module('example', ['angularCharts']);

function MainController($scope) {
	$scope.data1 = {
		series: [],
		data: [{
			x: "Sales",
			y: [100, 500, 40]
		}, {
			x: "Not Sales",
			y: [300, 100, 100]
		}]
	};

	$scope.data2 = {
		series: ['<em>500</em> Keyboards', '<em>105</em> Laptops', '<em>100</em> TVs'],
		data: [{
			x: "Sales",
			y: [100, 500, 0],
			tooltip: "this is tooltip"
		}, {
			x: "Income",
			y: [300, 100, 100]
		}, {
			x: "Expense",
			y: [351, 50, 25]
		}]
	};

	$scope.chartType = 'bar';

	$scope.config1 = {
		labels: true,
		labelsRelativeY: -10,
		labelUnit: "$",
		title: "Products",
		legend: {
			display: true,
			position: 'left',
			htmlEnabled: true
		},
		innerRadius: 0,
		yAxisGridLine: true,
		yAxisFixedScale: {min: 0, max: 100},
		yAxisOrientation: "right",
		colors: {"Sales": ['steelBlue', 'red', 'green'], "Not Sales": ['silver', 'yellow', 'pink']},
		barWidths: [12],
		animationDuration: 100
	};

	$scope.config2 = {
		labels: true,
		title: "HTML-enabled legend",
		legend: {
			display: true,
			htmlEnabled: true,
			position: 'right'
		},
		lineLegend: 'traditional',
		animationDuration: 500
	};

	$scope.switchConfig = function () {
		$scope.config1.yAxisOrientation = "left";
		$scope.config1.yAxisFixedScale.max = 1000;
		$scope.config1.colors[0] = "gray";
		$scope.config1.colors[1] = "pink";
	};
}
