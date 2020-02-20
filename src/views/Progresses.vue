<template>
    <div id="page-dev-progresses">
        <v-container>
            <v-layout justify-space-around row fill-height px-12 mb-12>
                <v-flex xs12 class="text-center" mb-5>
                    <span class="display-1 font-weight-light">Custom Progress Slot</span>
                    <br/>
                    <span class="subtitle-1 font-weight-light deepOrange--text">Custom Progress Slot 구조</span>
                </v-flex>

                <!-- SLOT TEMPLATE -1 -->
                <v-flex xs12 md5 class="text-center" mb-5>
                    <c-card title="Circle Progress Type1">
                        <c-progress-circle
                            type="1"
                            :value="50"
                            color="red"
                        >
                            <span class="display-1">SLOT</span>
                        </c-progress-circle>
                    </c-card>
                </v-flex>

                <!-- SLOT TEMPLATE -2 -->
                <v-flex xs12 md5 class="text-center" mb-5>
                    <c-card title="Circle Progress Type2">
                        <c-progress-circle
                            type="2"
                            :value="50"
                            color="blue"
                        >
                            <span class="display-1">SLOT</span>
                        </c-progress-circle>
                    </c-card>
                </v-flex>
            </v-layout>


            <v-layout justify-space-around row fill-height mt-6 mx-12>
                <v-flex xs12 class="text-center" mb-5>
                    <span class="display-1 font-weight-light">Custom Progress Examples</span>
                    <br/>
                    <span class="subtitle-1 font-weight-light deepOrange--text">Custom Progress 예제</span>
                </v-flex>

                <!-- EXAMPLE -1 -->
                <v-flex xs12 md5 class="text-center" mb-6>
                    <c-card title="Line Progress Type1">
                        <c-progress-line
                            type="1"
                            :value="65"
                            color="orange"
                            height="10"
                            width="300"
                            strokeWidth="30"
                            fontColor="red"
                            fontSize="14"
                            :fontHidden="false"
                            title="title"
                        />
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -2 -->
                <v-flex xs12 md12 lg5 class="text-center" mb-6>
                    <c-card title="Line Progress Type2">
                        <c-progress-line
                            type="2"
                            :value="40"
                            color="blue"
                            height="20"
                            width="300"
                            strokeWidth="30"
                            fontColor="black"
                            fontSize="13"
                            :fontDynamicPosition="false"
                            :fontHidden="false"
                        />
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -3 -->
                <v-flex xs12 md5 class="text-center" mb-6>
                    <c-card title="Circle Progress Type1 - none slot">
                        <c-progress-circle
                            radius="200"
                            strokeWidth="10"
                            :value="50"
                            type="1"
                        />
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -4 -->
                <v-flex xs12 md5 class="text-center" mb-6>
                    <c-card title="Circle Progress Type2 - none slot">
                        <c-progress-circle
                            :value="50"
                            type="2"
                        />
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -5 -->
                <v-flex xs12 md5 class="text-center" mb-6>
                    <c-card title="Circle Progress Type1 - slot">
                        <c-progress-circle
                            :value="50"
                            type="1"
                        >
                            <span class="display-1">%</span>
                            <br/>
                            <span class="overline">content</span>
                        </c-progress-circle>
                    </c-card>
                </v-flex>

                <!-- EXAMPLE -6 -->
                <v-flex xs12 md5 class="text-center" mb-6>
                    <c-card title="Circle Progress Type2 - slot">
                        <c-progress-circle
                            :value="50"
                            type="2"
                        >
                            <span class="display-1">%</span>
                            <br/>
                            <span class="overline">content</span>
                        </c-progress-circle>
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
