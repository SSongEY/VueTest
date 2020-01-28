<template>
    <div class="Test">
        <v-container>




            <!---- Card ---->
            <v-layout align-center justify-space-around row fill-height mt-4>
                <v-flex xs12 class="text-center">
                    <c-card>
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

            <!---- Button ---->
            <v-layout align-center justify-space-around row fill-height mt-4>
                <v-flex xs12>
                    <c-card color="indigo" title="Default Button">
                        <v-layout align-center justify-space-around row fill-height>
                            <c-btn color="red" @click="onClickRed">Red</c-btn>
                            <c-btn color="green" @click="onClickGreen">Green</c-btn>
                            <c-btn color="blue">Blue</c-btn>
                            <c-btn color="orange">Orange</c-btn>
                            <c-btn disabled>Disable</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>
                <v-flex xs12>
                    <c-card color="indigo" title="Size">
                        <v-layout align-center justify-space-around row fill-height>
                            <c-btn color="red" small>Small</c-btn>
                            <c-btn color="green">Default</c-btn>
                            <c-btn color="blue" large>Large</c-btn>
                        </v-layout>
                        <v-layout align-center justify-space-around row fill-height mt-5>
                            <c-btn color="orange" block>block</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>
                <v-flex xs12>
                    <c-card color="indigo" title="Text Button">
                        <v-layout align-center justify-space-around row fill-height>
                            <c-btn color="red" text>Text Button</c-btn>
                            <c-btn color="green" text>Text Button</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>
                <v-flex xs12>
                    <c-card color="indigo" title="Icon Button">
                        <v-layout align-center justify-space-around row fill-height mt-4>
                            <c-btn color="red" icon iconName="favorite"/>
                            <c-btn color="blue" fab iconName="favorite"/>
                            <c-btn color="blue" iconName="favorite">Button</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>
                <v-flex xs12>
                    <c-card color="indigo" title="Outlined">
                        <v-layout align-center justify-space-around row fill-height mt-4>
                            <c-btn color="blue" outlined fab icon iconName="favorite"/>
                            <c-btn color="blue" outlined iconName="favorite">Button</c-btn>
                            <c-btn color="blue" outlined>Button</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>
                <v-flex xs12>
                    <c-card color="indigo" title="Rounded">
                        <v-layout align-center justify-space-around row fill-height mt-4>
                            <c-btn color="blue" rounded iconName="favorite">Button</c-btn>
                            <c-btn color="blue" rounded>Button</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'test',
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
