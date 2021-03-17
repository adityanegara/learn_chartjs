let totalEDCChart = document.getElementById('totalEDCChart').getContext('2d');
let provinsiTransaksiTerbesarChart = document.getElementById('provinsiTransaksiTerbesarChart').getContext('2d');
let totalNilaiTransaksiChart = document.getElementById('totalNilaiTransaksiChart').getContext('2d');
let totalJenisTransaksiChart =   document.getElementById('totalJenisTransaksiChart').getContext('2d');
let dataEDCPerAreaChart =   document.getElementById('dataEDCPerAreaChart').getContext('2d');

var barChartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [{
        label: 'Kantor Wilayah',
        backgroundColor: '#816AF8',
        data: [
            1,
            2,
            3,
            4,
            5,
            0
          
        ]
    }, {
        label: 'Kantor Cabang Pembantu',
        backgroundColor: '#D2AFFF',
        data: [
            1,
            2,
            3,
            4,
            5
        ]
    }]
};

let barChart = new Chart(dataEDCPerAreaChart,  {
    type : 'bar',
    data : barChartData
     
})

let myDoughnutChart2 = new Chart(totalJenisTransaksiChart, {
    type: 'doughnut',
    data: {
        labels:['Depok', 'Bandung', 'Jakarta', 'Bogor'],
        datasets:[{
            label: 'Transaksi',
            showLine : false,
            data : [
                10,
                11,
                12,
                13
            ],
            // backgroundColor : 
            backgroundColor : [
                '#F7C2D6',
                '#F1E0B4',
                '#584DDA',
                '#C2D8FF',
          
            ]
        }]
    },
    options:{
        title:{
            display:true,
            text:'TOTAL NILAI TRANSAKSI BERDASARKAN JENIS',
            fontSize:13,
            fontColor: '#7E79B3',
            padding: 22
        }
    }
});



let myDoughnutChart = new Chart(totalNilaiTransaksiChart, {
    type: 'doughnut',
    data: {
        labels:['Depok', 'Bandung', 'Jakarta', 'Bogor'],
        datasets:[{
            label: 'Transaksi',
            showLine : false,
            data : [
                10,
                11,
                12,
                13
            ],
            // backgroundColor : 
            backgroundColor : [
                '#F7C2D6',
                '#F1E0B4',
                '#584DDA',
                '#C2D8FF',
          
            ]
        }]
    },
    options:{
        title:{
            display:true,
            text:'TOTAL NILAI TRANSAKSI',
            fontSize:13,
            fontColor: '#7E79B3',
            padding: 22
        }
    }
});




let provinsiTransaksiChart = new Chart(provinsiTransaksiTerbesarChart, {
    type:'horizontalBar', //bar, horizontalBar, pie, line,doughnut, radar,polarArea
    data: {
        labels:['Depok', 'Bandung', 'Jakarta', 'Bogor', 'Cianjur'],
        datasets:[{
            label: 'Transaksi',
            showLine : false,
            data : [
                10,
                11,
                12,
                13,
                14,
                6
            ],
            // backgroundColor : 
            backgroundColor : [
                '#F7C2D6',
                '#F1E0B4',
                '#584DDA',
                '#C2D8FF',
                '#F9CCC9'
            ]
        }]
    },
    options:{
        title:{
            display:true,
            text:'5 PROVINSI TRANSAKSI TERBESAR',
            fontSize:13,
            fontColor: '#7E79B3',
            padding: 22
        },
        legend:{
            display: false,
            position: 'right',
            labels:{
                fontColor: 'red'
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    }

});



















let edcDaerahChart = new Chart(totalEDCChart, {
    type:'bar', //bar, horizontalBar, pie, line,doughnut, radar,polarArea
    data: {
        labels:['Depok', 'Bandung', 'Jakarta', 'Bogor', 'Cianjur'],
        datasets:[{
            label: 'Total EDC',
            showLine : false,
            data : [
                10,
                11,
                12,
                13,
                14,
                6
            ],
            // backgroundColor : 
            backgroundColor : [
                '#F7C2D6',
                '#F1E0B4',
                '#584DDA',
                '#C2D8FF',
                '#F9CCC9'
            ]
        }]
    },
    options:{
        title:{
            display:true,
            text:'TOTAL EDC BERDASARKAN DAERAH',
            fontSize:13,
            fontColor: '#7E79B3',
            padding: 22
        },
        legend:{
            display: false,
            position: 'right',
            labels:{
                fontColor: 'red'
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    }

});