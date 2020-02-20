<template>
    <div id="page-dashboard">
        <v-layout justify-space-around row fill-height mt-12>
            <v-flex xs12 class="text-center">
                <span class="text-center display-3">Dashboard</span>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'team',
        components: {},
        data: () => ({
            team: [
                {name: 'Iyad', role: 'web developer', avatar: '/img1.png'},
                {name: 'Reda', role: 'Graphic designer', avatar: '/img2.png'},
                {name: 'Zineb', role: 'web developer', avatar: '/img3.png'},
                {name: 'Hu TechGroup', role: 'Desktop developer', avatar: '/img4.png'},
            ]
        }),
    }
</script>
