<script>
    //Importing Bar class from the vue-chartjs wrapper
    import {Doughnut} from 'vue-chartjs'
    //Exporting this so it can be used in other components
    export default {
        extends: Doughnut ,
        data() {
            return {
                datacollection: {
                    //Data to be represented on x-axis
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                        {
                            backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#DD1B16'
                            ],
                            data: [40, 20, 80, 10]
                        }
                    ]
                },
                //Chart.js options that controls the appearance of the chart
                options: {
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
