<template>
    <div class="Test">
        <v-container>

            <v-layout align-center justify-space-around row fill-height mt-4>
                <v-flex xs12>
                    <v-card
                        class="mx-auto"
                        max-width="344"
                        shaped
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4">OVERLINE</div>
                                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-avatar
                                    tile
                                    size="80"
                                    color="grey"
                            ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                            <v-btn text>Button</v-btn>
                            <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

            <!---- Card ---->
            <v-layout align-center justify-space-around row fill-height mt-4>
                <v-flex xs3 class="text-center" ma-2>
                    <c-card>
                        <v-flex xs12>
                            <div>none header card</div>
                        </v-flex>
                    </c-card>
                </v-flex>
                <v-flex xs3 class="text-center" ma-2>
                    <c-card outlined>
                        <v-flex xs12>
                            <div>none header card</div>
                        </v-flex>
                    </c-card>
                </v-flex>
                <v-flex xs3 class="text-center" pa-2>
                    <c-card sharped>
                        <v-flex xs12>
                            <div>none header card</div>
                        </v-flex>
                    </c-card>
                </v-flex>
            </v-layout>

            <v-layout align-center justify-space-around row fill-height mt-4>
                <v-flex xs6 pa-2>
                    <c-card color="red" title="Red Color Title Bar" text="subtitle">
                        <v-flex xs2>
                            <div>contents</div>
                        </v-flex>
                    </c-card>
                </v-flex>
                <v-flex xs6 pa-2>
                    <c-card class="text-center" color="blue" title="Blue Color Title Bar - Center" text="Simple Subtitle">
                        <v-flex xs12 class="text-center">
                            <div>contents</div>
                        </v-flex>
                    </c-card>
                </v-flex>
            </v-layout>

            <v-layout row fill-height mt-4>
                <v-flex xs6 pa-2>
                    <c-card color="orange" title="Orange Color Title Bar - Has Action Slot">
                        <v-flex xs12>
                            <div>contents</div>
                        </v-flex>
                        <template slot="actions">
                            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
                            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
                        </template>
                    </c-card>
                </v-flex>
                <v-flex xs6>
                    <c-card color="green">
                        <template slot="header">
                            <h1>component1</h1>
                        </template>
                        <v-flex xs12>
                            <h4>component2</h4>
                        </v-flex>
                        <template slot="actions">
                            <h5>component3</h5>
                        </template>
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
            onClickRed: function(e) {
                alert('onClickRed')
            },
            onClickGreen: function(e) {
                alert('onClickGreen')
            }
        }
    }
</script>
