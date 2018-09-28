<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1>
          <v-container fill-height class="text-xs-center" :style="styleHeight">
            <v-layout column align-center justify-center>
              <h1 class="display-2">Who we are</h1>
              <pre>
NOTE: Need contents
              </pre>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1>
          <v-container fill-height class="text-xs-center" :style="styleHeight" style="background-color: #ddd">
            <v-layout column align-center justify-center>
              <h1 class="display-2">Why Civic Tech Vancouver?</h1>
              <pre>
NOTE: Need contents
              </pre>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1>
          <v-container fill-height class="text-xs-center" :style="styleHeight">
            <v-layout column align-center justify-center>
              <h1 class="display-2">Get Involved</h1>
              <v-btn color="info">Join Now</v-btn>
              <pre>
NOTE: Need contents
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

export default {
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
