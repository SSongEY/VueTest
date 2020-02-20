<template>
    <div id="page-dev-buttons">
        <v-container>
            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs12 class="text-center" ma-5>
                    <span class="display-1 font-weight-light">Custom Button</span>
                    <br/>
                    <span class="subtitle-1 font-weight-light deepOrange--text">Custom Button Examples</span>
                </v-flex>

                <!-- EXAMPLE -1 -->
                <v-flex xs12 ma-4>
                    <c-card title="Button Color">
                        <v-layout align-center justify-space-around row fill-height>
                            <c-btn color="red" @click="onClickRed">Red</c-btn>
                            <c-btn color="green" @click="onClickGreen">Green</c-btn>
                            <c-btn color="blue">Blue</c-btn>
                            <c-btn color="orange">Orange</c-btn>
                            <c-btn disabled>Disable</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -2 -->
                <v-flex xs12 ma-4>
                    <c-card title="Size">
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

                <!-- EXAMPLE -3 -->
                <v-flex xs12 ma-4>
                    <c-card title="Text Button">
                        <v-layout align-center justify-space-around row fill-height>
                            <c-btn color="red" text>Text Button</c-btn>
                            <c-btn color="green" text>Text Button</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -4 -->
                <v-flex xs12 ma-4>
                    <c-card title="Icon Button">
                        <v-layout align-center justify-space-around row fill-height mt-4>
                            <c-btn color="red" icon iconName="favorite"/>
                            <c-btn color="blue" fab iconName="favorite"/>
                            <c-btn color="blue" iconName="favorite">Button</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -5 -->
                <v-flex xs12 ma-4>
                    <c-card title="Outlined">
                        <v-layout align-center justify-space-around row fill-height mt-4>
                            <c-btn color="blue" outlined fab icon iconName="favorite"/>
                            <c-btn color="blue" outlined iconName="favorite">Button</c-btn>
                            <c-btn color="blue" outlined>Button</c-btn>
                        </v-layout>
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -6 -->
                <v-flex xs12 ma-4>
                    <c-card title="Rounded">
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
    data: () => ({
    }),
    methods: {
        onClickRed: function(e) {
            alert('onClickRed')
        },
        onClickGreen: function(e) {
            alert('onClickGreen')
        },
    }
}
</script>
