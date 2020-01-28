<template>
    <v-btn
        @click="callback($event)"
        class="white--text font-weight-regular"
        :class="classes"
        :value="value"

        :disabled="disabled"
        :color="color"
        :dark="dark"

        :outlined="outlined"
        :text="text"
        :fab="fab"
        :icon="icon"
        :rounded="rounded"

        :small="small"
        :large="large"
        :block="block"
    >
        <v-icon v-if="iconName&&!(this.$slots.default)">{{iconName}}</v-icon>
        <v-icon v-else-if="iconName&&this.$slots.default" left>{{iconName}}</v-icon>
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        classes: {
            type: String,
            default: undefined
        },
        value: {
            type: String,
            default: undefined
        },
        //
        color: {
            type: String,
            default: 'white'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        },
        iconName: { // v-icon value
            type: String,
            default: undefined
        },

        // style
        text: { // Removes the button background color
            type: Boolean,
            default: false
        },
        fab: { // Makes button round
            type: Boolean,
            default: false
        },
        outlined: { // Button will have an outline
            type: Boolean,
            default: false
        },
        icon: { // Designates the button as icon - round and flat(text)
            type: Boolean,
            default: false
        },
        rounded: { // Makes button round
            type: Boolean,
            default: false
        },


        // size
        small: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        },
        block: { // Expands the button to 100% of available space
            type: Boolean,
            default: false
        },
    },
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        }
    },
}
</script>

<style>
</style>
