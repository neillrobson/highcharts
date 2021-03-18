QUnit.skip('Test Klinger calculations on data updates.', function (assert) {
    const chart = Highcharts.stockChart('container', {
        chart: {
            height: 700
        },
        yAxis: [{
            height: '60%'
        }, {
            height: '20%',
            top: '60%'
        }, {
            height: '20%',
            top: '80%'
        }],
        series: [{
            id: 'main',
            type: 'candlestick',
            data: [
                [1552311000000, 43.87, 44.78, 43.84, 44.72],
                [1552397400000, 45.0, 45.67, 44.84, 45.23],
                [1552483800000, 45.56, 45.83, 45.23, 45.43],
                [1552570200000, 45.97, 46.03, 45.64, 45.93],
                [1552656600000, 46.21, 46.83, 45.94, 46.53],
                [1552915800000, 46.45, 47.1, 46.45, 47.01],
                [1553002200000, 47.09, 47.25, 46.48, 46.63],
                [1553088600000, 46.56, 47.37, 46.18, 47.04],
                [1553175000000, 47.51, 49.08, 47.45, 48.77],
                [1553261400000, 48.83, 49.42, 47.69, 47.76],
                [1553520600000, 47.88, 47.99, 46.65, 47.19],
                [1553607000000, 47.92, 48.22, 46.15, 46.7],
                [1553693400000, 47.19, 47.44, 46.64, 47.12],
                [1553779800000, 47.24, 47.39, 46.88, 47.18],
                [1553866200000, 47.46, 47.52, 47.13, 47.49],
                [1554125400000, 47.91, 47.92, 47.1, 47.81],
                [1554211800000, 47.77, 48.62, 47.76, 48.51],
                [1554298200000, 48.31, 49.13, 48.29, 48.84],
                [1554384600000, 48.7, 49.09, 48.28, 48.92],
                [1554471000000, 49.11, 49.28, 48.98, 49.25],
                [1554730200000, 49.1, 50.06, 49.08, 50.03],
                [1554816600000, 50.08, 50.71, 49.81, 49.88],
                [1554903000000, 49.67, 50.19, 49.54, 50.15],
                [1554989400000, 50.21, 50.25, 49.61, 49.74],
                [1555075800000, 49.8, 50.03, 49.05, 49.72],
                [1555335000000, 49.65, 49.96, 49.5, 49.81],
                [1555421400000, 49.87, 50.34, 49.64, 49.81],
                [1555507800000, 49.88, 50.85, 49.65, 50.78],
                [1555594200000, 50.78, 51.04, 50.63, 50.97],
                [1555939800000, 50.71, 51.24, 50.58, 51.13],
                [1556026200000, 51.11, 51.94, 50.97, 51.87],
                [1556112600000, 51.84, 52.12, 51.76, 51.79],
                [1556199000000, 51.71, 51.94, 51.28, 51.32],
                [1556285400000, 51.22, 51.25, 50.53, 51.08],
                [1556544600000, 51.1, 51.49, 50.97, 51.15],
                [1556631000000, 50.76, 50.85, 49.78, 50.17],
                [1556717400000, 52.47, 53.83, 52.31, 52.63],
                [1556803800000, 52.46, 53.16, 52.03, 52.29],
                [1556890200000, 52.72, 52.96, 52.56, 52.94],
                [1557149400000, 51.07, 52.21, 50.88, 52.12],
                [1557235800000, 51.47, 51.85, 50.21, 50.72],
                [1557322200000, 50.47, 51.33, 50.44, 50.72],
                [1557408600000, 50.1, 50.42, 49.17, 50.18],
                [1557495000000, 49.35, 49.71, 48.19, 49.29],
                [1557754200000, 46.93, 47.37, 45.71, 46.43],
                [1557840600000, 46.6, 47.42, 46.35, 47.17],
                [1557927000000, 46.57, 47.94, 46.51, 47.73],
                [1558013400000, 47.48, 48.12, 47.21, 47.52],
                [1558099800000, 46.73, 47.72, 46.69, 47.25],
                [1558359000000, 45.88, 46.09, 45.07, 45.77],
                [1558445400000, 46.31, 47, 46.17, 46.65],
                [1558531800000, 46.17, 46.43, 45.64, 45.69],
                [1558618200000, 44.95, 45.13, 44.45, 44.92],
                [1558704600000, 45.05, 45.53, 44.65, 44.74],
                [1559050200000, 44.73, 45.15, 44.48, 44.56],
                [1559136600000, 44.1, 44.84, 44, 44.35],
                [1559223000000, 44.49, 44.81, 44.17, 44.58],
                [1559309400000, 44.06, 44.5, 43.75, 43.77],
                [1559568600000, 43.9, 44.48, 42.57, 43.33],
                [1559655000000, 43.86, 44.96, 43.63, 44.91],
                [1559741400000, 46.07, 46.25, 45.28, 45.63],
                [1559827800000, 45.77, 46.37, 45.54, 46.31],
                [1559914200000, 46.63, 47.98, 46.44, 47.54],
                [1560173400000, 47.95, 48.84, 47.9, 48.15],
                [1560259800000, 48.72, 49, 48.4, 48.7],
                [1560346200000, 48.49, 48.99, 48.35, 48.55],
                [1560432600000, 48.67, 49.2, 48.4, 48.54],
                [1560519000000, 47.89, 48.4, 47.58, 48.19],
                [1560778200000, 48.22, 48.74, 48.04, 48.47],
                [1560864600000, 49.01, 50.07, 48.8, 49.61],
                [1560951000000, 49.92, 49.97, 49.33, 49.47],
                [1561037400000, 50.09, 50.15, 49.51, 49.87],
                [1561123800000, 49.7, 50.21, 49.54, 49.69],
                [1561383000000, 49.63, 50.04, 49.54, 49.65],
                [1561469400000, 49.61, 49.81, 48.82, 48.89],
                [1561555800000, 49.44, 50.25, 49.34, 49.95],
                [1561642200000, 50.07, 50.39, 49.89, 49.94],
                [1561728600000, 49.67, 49.88, 49.26, 49.48],
                [1561987800000, 50.79, 51.12, 50.16, 50.39]
            ]
        }, {
            type: 'column',
            id: 'volume',
            yAxis: 1,
            data: [
                [1552311000000, 128044000],
                [1552397400000, 129870400],
                [1552483800000, 124130000],
                [1552570200000, 94318000],
                [1552656600000, 156171600],
                [1552915800000, 104879200],
                [1553002200000, 126585600],
                [1553088600000, 124140800],
                [1553175000000, 204136800],
                [1553261400000, 169630800],
                [1553520600000, 175381200],
                [1553607000000, 199202000],
                [1553693400000, 119393600],
                [1553779800000, 83121600],
                [1553866200000, 94256000],
                [1554125400000, 111448000],
                [1554211800000, 91062800],
                [1554298200000, 93087200],
                [1554384600000, 76457200],
                [1554471000000, 74106400],
                [1554730200000, 103526800],
                [1554816600000, 143072800],
                [1554903000000, 86781200],
                [1554989400000, 83603200],
                [1555075800000, 111042800],
                [1555335000000, 70146400],
                [1555421400000, 102785600],
                [1555507800000, 115627200],
                [1555594200000, 96783200],
                [1555939800000, 77758000],
                [1556026200000, 93292000],
                [1556112600000, 70162400],
                [1556199000000, 74172800],
                [1556285400000, 74596400],
                [1556544600000, 88818800],
                [1556631000000, 186139600],
                [1556717400000, 259309200],
                [1556803800000, 127985200],
                [1556890200000, 83569600],
                [1557149400000, 129772400],
                [1557235800000, 155054800],
                [1557322200000, 105358000],
                [1557408600000, 139634400],
                [1557495000000, 164834800],
                [1557754200000, 229722400],
                [1557840600000, 146118800],
                [1557927000000, 106178800],
                [1558013400000, 132125600],
                [1558099800000, 131516400],
                [1558359000000, 154449200],
                [1558445400000, 113459200],
                [1558531800000, 118994400],
                [1558618200000, 146118800],
                [1558704600000, 94858800],
                [1559050200000, 111792800],
                [1559136600000, 113924800],
                [1559223000000, 84873600],
                [1559309400000, 108174400],
                [1559568600000, 161584400],
                [1559655000000, 123872000],
                [1559741400000, 119093600],
                [1559827800000, 90105200],
                [1559914200000, 122737600],
                [1560173400000, 104883600],
                [1560259800000, 107731600],
                [1560346200000, 73012800],
                [1560432600000, 86698400],
                [1560519000000, 75046000],
                [1560778200000, 58676400],
                [1560864600000, 106204000],
                [1560951000000, 84496800],
                [1561037400000, 86056000],
                [1561123800000, 191202400],
                [1561383000000, 72881600],
                [1561469400000, 84281200],
                [1561555800000, 104270000],
                [1561642200000, 83598800],
                [1561728600000, 124442400],
                [1561987800000, 109012000]
            ]
        }, {
            volumeSeriesID: 'volume',
            type: 'klinger',
            linkedTo: 'main',
            yAxis: 2
        }
        ]
    });
    const series = chart.series;

    // Klinger Oscilator needs at least 56 points to calculate the default period: 55.
    assert.strictEqual(
        series[0].points.length,
        series[2].points.length + series[2].options.params.slowAvgPeriod,
        `The sum of the Klinger oscilator length and period
        should equal the length of the main series.`
    );

    assert.strictEqual(
        series[2].xData[0],
        1559136600000,
        `First x point should start on that day.`
    );
    assert.strictEqual(
        series[2].xData[series[2].xData.length - 1],
        1561987800000,
        `The last x point should be on the last day of array.`
    );

    chart.series[0].addPoint([1561987800000, 50.79, 51.12, 50.16, 50.39]);
    chart.series[1].addPoint([1561987800000, 109012000]);
    assert.strictEqual(
        series[0].points.length,
        series[2].points.length + series[2].options.params.slowAvgPeriod,
        'After addPoint number of klinger oscilator should be recalculated.'
    );

    // assert.deepEqual(
    //     chart.series[2].yData,
    //     [
    //         3.52,
    //         -49.05,
    //         44.92,
    //         10.22,
    //         -89.06,
    //         -12.19,
    //         8.97,
    //         -10.03,
    //         1.31,
    //         -4.52,
    //         53.84,
    //         -33.04,
    //         36.05,
    //         -31.17,
    //         -21.38,
    //         -6.95,
    //         49.15,
    //         110.01,
    //         -27.06,
    //         1.48,
    //         -796.93,
    //         -2.38,
    //         42.3,
    //         -24.91
    //     ],
    //     'Correct values'
    // );
});
