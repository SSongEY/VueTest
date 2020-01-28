<template>
    <nav>
        <v-app-bar id="AppBar" class="app-bar" dark app>
            <v-app-bar-nav-icon color="#555" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase ">
                <!--<span class="font-weight-light">AAE</span>-->
                <span>Page</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text>
                <v-icon color="#555">notifications</v-icon>
            </v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        <v-icon color="#555">person</v-icon>
                    </v-btn>
                </template>
                <v-list flat>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" dark app class="app-navibar">
            <!--<v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/img1.png" alt="">
                    </v-avatar>
                    <p class="white&#45;&#45;text subheading mt-1 text-center">Username</p>
                </v-flex>
                <v-flex class="mt-4 mb-4">
                    <Popup/>
                </v-flex>
            </v-layout>-->
            <div class="app-menu-logo">
                LOGO
            </div>
            <hr class="app-menu-separator">
            <v-list flat>
                <v-list-item class="app-menu-item" v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="app-menu-item-text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
// import Popup from './Popup.vue'

export default {
    data: () => ({
        drawer: true,
        links: [
            {icon: 'dashboard', text: 'Dashboard', route: '/'},
            {icon: 'dashboard', text: 'Test', route: '/test'},
            {icon: 'dashboard', text: 'Tables', route: '/tables'},
            {icon: 'folder', text: 'My Project', route: '/projects'},
            {icon: 'person', text: 'Team', route: '/team'}
        ]

    }),
    components: {
        // Popup
    },


}
</script>
<style scoped>
    .border {
        border-radius: 4px;
        background-color: #e91e63 !important;
    }
    .app-navibar {
        /*top: 64px !important;*/
        background-color: #151616 !important;
    }
    .app-bar {
        /*left: 0px !important;*/
        color: black !important;
        background-color: #eeeeee !important;
        box-shadow: 0 0 0 0 !important;
    }
    .app-menu-logo {
        color: white;
        font-size: 20px;
        text-align: center;
        margin:15px 0px;
    }
    .app-menu-separator {
        border: solid;
        border-width: thin 0 0 0;
        border-color: hsla(0, 0%, 71%, .1);
        background-color: hsla(0, 0%, 71%, .5);
        margin: 10px 15px;
    }
    .app-menu-item {
        margin: 10px 10px !important;
    }
    .app-menu-item-text {
        font-weight: 300;
        font-size: 15px;
    }
</style>
