<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1>
          <v-container fill-height class="text-xs-center" :style="styleHeight">
            <v-layout align-center justify-center row wrap>
              <v-flex xs12 sm4>
                <v-card>
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Meetups</h3>
                        <div>blah blah</div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat color="orange">Share</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0">Slack</h3>
                          <div>blah blah</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-card>
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
                        <v-card-title primary-title>
                          <div>
                            <h3 class="headline mb-0">Twitter</h3>
                            <div>blah blah</div>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-btn flat color="orange">Share</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container fill-height class="text-xs-center" :style="styleHeight">
            <v-layout align-center justify-center row wrap>
              <v-flex xs12 sm4>
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
