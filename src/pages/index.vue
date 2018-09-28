<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="sideNav" absolute app>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary" app>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left dark>home</v-icon>
          Home
        </v-btn>
        <v-btn flat>
          <v-icon left dark>contact_mail</v-icon>
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      test
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sideNav: null
  }),

  props: {
    source: String
  }
}
</script>
<style>
</style>
