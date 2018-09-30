<template>
  <div>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1>
          <v-container fill-height class="text-xs-center" :style="styleHeight" style="background-color: #ddd">
            <v-layout column align-center justify-center>
              <h1 class="display-2">Mission Statement</h1>
              <v-btn color="info">Get Involved</v-btn>
              <pre>
NOTE: Need contents
              </pre>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <h2>Deeper overview of Civic Tech Vancouver</h2>
              <pre>
NOTE: Text, photo
  - Any actionable content here?
              </pre>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1>
          <v-container fill-height class="text-xs-center" :style="styleHeight" style="background-color: #ddd">
            <v-layout column align-center justify-center>
              <h1 class="display-2">Meetup</h1>
              <meetup/>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1>
          <v-container fill-height class="text-xs-center" :style="styleHeight">
            <v-layout column align-center justify-center>
              <h1 class="display-2">News Letter</h1>
              <ul>
                <li>Name</li>
                <li>Email Address</li>
                <li>What industry do you work in?</li>
                <li>Submit button</li>
              </ul>
              <pre>
NOTE: Form
              </pre>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Meetup from '@/components/Meetup.vue'

export default {
  components: { Meetup },
  computed: {
    styleHeight: function () {
      if (!this.windowSize) return
      return {
        minHeight: `${this.windowSize.y - 48}px`
      }
    },
    ...mapGetters({ windowSize: 'getWindowSize'})
  }
}
</script>
<style>
</style>
