<script>
//Importing Line class from the vue-chartjs wrapper
import {Line} from 'vue-chartjs'
//Exporting this so it can be used in other components
export default {
    extends: Line,
    props: {

    },
    data () {
        return {
            chartData: {
                //Data to be represented on x-axis
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Data One',

                        // curve tension [0..1] default: 0.4
                        tension: 0,

                        // line fill & color
                        fill: false,
                        backgroundColor: '#ffb35e',//'green',

                        // line stroke
                        borderColor: '#ffb35e',//'rgba(0,0,0,0.1)',
                        borderWidth: 3,

                        // point radius
                        // radius: 2, //default 3
                        // pointBackgroundColor: 'blue',
                        // pointBorderColor: 'blue',


                        //Data to be represented on y-axis
                        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                    },
                    {
                        label: 'Data two',

                        fill: false,
                        backgroundColor: '#58deb6',

                        // line stroke
                        borderColor: '#58deb6',//'rgba(0,0,0,0.1)',
                        borderWidth: 3,
                        //
                        // // point radius
                        // radius: 2, //default 3
                        // pointBackgroundColor: 'grey',
                        // pointBorderColor: 'grey',


                        data: [50, 30, 40, 60, 100, 20, 30, 50, 60, 80, 100, 110]
                    }
                ]
            },
            //Chart.js options that controls the appearance of the chart
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [ {
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    //legend configuration
                    display: true,
                    align: 'end', // [start, center(default), end]
                    position: 'bottom', // [top(default) | left | bottom | right]

                    //legend label configuration
                    labels: {
                        boxWidth: 40, //default 40
                        fontSize: 12, //default 12
                    },

                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted () {
        //renderChart function renders the chart with the datacollection and options object.
        this.renderChart(this.chartData, this.options)
    }
}
</script>
