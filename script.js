let myChart = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';
let massPopChart = new Chart(myChart, {
    type:'pie', //bar, horizontalBar, pie, line,doughnut, radar,polarArea
    data: {
        labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[{
            label: 'Population',
            data : [
                617594,
                181046,
                153060,
                106519,
                105162,
                95072
            ],
            // backgroundColor : 
            backgroundColor : [
                '#865232',
                '#a8673f',
                '#c3845e',
                '#d7ac93',
                '#efdfd5',
                '#ece0d8 '
            ],
            borderWidth:4,
            borderColor: '#777',
            hoverBorderWidth :3,
            hoverBorderColor: 'salmon'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Largest Cities In Massachussets',
            fontSize:25
        },
        legend:{
            display: true,
            position: 'right',
            labels:{
                fontColor:'#000'
            }
        },
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
        },
        tooltips:{
            enabled : true
        }
    }

});