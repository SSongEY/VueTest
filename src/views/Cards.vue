<template>
    <div id="page-dev-cards">
        <v-container>
            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs12 class="text-center" ma-5>
                    <span class="display-1 font-weight-light">Custom Card Slot</span>
                    <br/>
                    <span class="subtitle-1 font-weight-light deepOrange--text">Custom Card Slot 구조</span>
                </v-flex>

                <!-- SLOT TEMPLATE -1 -->
                <v-flex sm12 md5 ma-3>
                    <c-card title="title">
                        <template #headItems>
                            <span class="blue--text">[#headItems] slot</span>
                        </template>
                        <template #footer>
                            <span class="deepOrange--text">[#footer] slot</span>
                        </template>
                        <span class="green--text">contents</span>
                    </c-card>
                </v-flex>

                <!-- SLOT TEMPLATE -2 -->
                <v-flex sm12 md5 ma-3>
                    <c-card>
                        <template #head>
                            <span class="red--text">[#head] slot</span>
                        </template>
                        <template #headItems>
                            <span class="blue--text">[#headItems] slot</span>
                        </template>
                        <template #footer>
                            <span class="deepOrange--text">[#footer] slot</span>
                        </template>
                        <span class="green--text">contens</span>
                    </c-card>
                </v-flex>
            </v-layout>


            <v-layout align-center justify-space-around row fill-height mt-10>
                <v-flex xs12 class="text-center" ma-5>
                    <span class="display-1 font-weight-light">Custom Card Examples</span>
                    <br/>
                    <span class="subtitle-1 font-weight-light deepOrange--text">Custom Card 예제</span>
                </v-flex>

                <!-- EXAMPLE -1 -->
                <v-flex sm12 md5 mb-5>
                    <c-card title="Custom Card">
                        <template #headItems>
                            <v-icon color='grey'>sentiment_dissatisfied</v-icon>
                            <v-icon color='grey'>sentiment_satisfied</v-icon>
                            <v-icon color='grey'>sentiment_very_dissatisfied</v-icon>
                            <v-icon color='grey'>sentiment_very_satisfied</v-icon>
                        </template>
                        <template #footer>
                            <div class="text-center">
                                <v-icon color='grey'>star</v-icon>
                                <v-icon color='grey'>star_border</v-icon>
                                <v-icon color='grey'>star_half</v-icon>
                            </div>
                            <v-spacer/>
                            <v-icon color='grey'>error</v-icon>
                            <v-icon color='grey'>notification_important</v-icon>
                            <v-icon color='grey'>warning</v-icon>
                        </template>
                        <v-layout align-center justify-space-around row fill-height>
                            <v-flex xs12>
                                <div class="text-center green">contents</div>
                            </v-flex>
                        </v-layout>
                    </c-card>
                </v-flex>

                <v-flex xs12 mb-5>
                    <!-- EXAMPLE -2 -->
                    <c-card title="Card Border">
                        <v-layout align-center justify-space-around row fill-height ma-5>
                            <v-flex xs12 sm5 md5 lg2 ma-3>
                                <c-card title="Outlined" outlined>
                                    content
                                </c-card>
                            </v-flex>
                            <v-flex xs12 sm5 md5 lg2 ma-3>
                                <c-card title="Raised" raised>
                                    content
                                </c-card>
                            </v-flex>
                            <v-flex xs12 sm5 md5 lg2 ma-3>
                                <c-card title="Shaped" shaped>
                                    content
                                </c-card>
                            </v-flex>
                            <v-flex xs12 sm5 md5 lg2 ma-3>
                                <c-card title="Tile" tile>
                                    content
                                </c-card>
                            </v-flex>
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
            alert('onClickRed');

        },
        onClickGreen: function(e) {
            alert('onClickGreen')
        }
    }
}
</script>
