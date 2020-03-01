<template>
  <v-app>
    <Navbar v-if="showMenuBar" />
    <v-content class="content-main">
      <div style="padding: 40px 20px 0px 20px">
        <router-view></router-view>
      </div>
    </v-content>

    <c-alert-dialog
        :open="alert.open"
        :timeout="alert.timeout"
        :msg="alert.msg"
        :err="alert.err"
        :info="alert.info"
        :persistent="alert.persistent"
    />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },

  data: () => ({
  }),
  mounted() {
  },

  computed: {
    showMenuBar() {
      return !(this.$route.path === '/login')
    },
    alert() {
      return this.$store.state.alert;
    },
  },
  methods: {
  },
};
</script>
<style lang="scss">
@import './styles/index.scss';
.content-main {
  background-color: #f9f9f9;
}
</style>
