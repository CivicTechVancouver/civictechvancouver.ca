<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" dark app right disable-resize-watcher disable-route-watcher width="250">
      <v-list>
        <v-list-tile v-for="(item, itemIdx) in menuItems" :key="itemIdx">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dark scroll-off-screen>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-icon left dark>code</v-icon>
        <span class="hidden-md-and-up">
          <small class="pl-2">{{ title }}</small>
        </span>
        <span class="hidden-sm-and-down">
          {{ title }}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="(item, itemIdx) in menuItems" :key="itemIdx">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.label }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt/>
  </v-app>
</template>
<script>
export default {
  computed: {
    title: function () {
      return 'Civic Tech Vancouver'
    },
    menuItems: function () {
      return [
        {
          label: 'Home',
          icon: 'home'
        },
        {
          label: 'About',
          icon: 'face'
        },
        {
          label: 'Projects',
          icon: 'whatshot'
        },
        {
          label: 'Get Involved',
          icon: 'group_add'
        },
      ]
    }
  },
  data: function () {
    return {
      sideNav: false
    }
  }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

