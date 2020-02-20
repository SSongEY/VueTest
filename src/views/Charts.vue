<template>
    <div class="Test">
        <v-container>
            <v-layout justify-space-around row fill-height mt-12>
                <v-flex xs12 class="text-center">
                    <span class="display-1 font-weight-light">Custom Chart Examples</span>
                    <br/>
                    <span class="subtitle-1 font-weight-light deepOrange--text">Custom Chart 예제</span>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-space-around row fill-height mt-4>
                <v-flex xs6 pa-2>
                    <c-card>
                        <v-flex xs12>
                            <div><c-chart-line /></div>
                        </v-flex>
                    </c-card>
                </v-flex>
                <v-flex xs6 pa-2>
                    <c-card>
                        <v-flex xs12>
                            <div><c-chart-bar /></div>
                        </v-flex>
                    </c-card>
                </v-flex>
                <v-flex xs6 pa-2>
                    <c-card>
                        <v-flex xs12>
                            <div><c-chart-doughnut /></div>
                        </v-flex>
                    </c-card>
                </v-flex>
                <v-flex xs6 pa-2>
                    <c-card>
                        <v-flex xs12>
                            <div><c-chart-pie /></div>
                        </v-flex>
                    </c-card>
                </v-flex>
                <v-flex xs6 pa-2>
                    <c-card>
                        <v-flex xs12>
                            <div><c-chart-horizontal-bar /></div>
                        </v-flex>
                    </c-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
    }),
    methods: {
    }
}
</script>
