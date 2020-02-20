<script>
    //Importing Bar class from the vue-chartjs wrapper
    import {HorizontalBar } from 'vue-chartjs'
    //Exporting this so it can be used in other components
    export default {
        extends: HorizontalBar ,
        data() {
            return {
                datacollection: {
                    //Data to be represented on x-axis
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: ['40', '20', '12', '11', '10', '40', '39', '80', '40', '20', '12', '11']
                        }
                    ]
                },
                //Chart.js options that controls the appearance of the chart
                options: {
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [ {
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted() {
            //renderChart function renders the chart with the datacollection and options object.
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>
