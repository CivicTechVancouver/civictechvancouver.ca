<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
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
      </template>
    </section-default>

    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex xs12 sm4>
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
        </v-flex>
      </template>
    </section-default>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SectionDefault from '@/components/SectionDefault.vue'

export default {
  components: { SectionDefault },
  computed: {
    styleHeight: function () {
      if (!this.windowSize) return
      const spaceTop = 64;
      return {
        paddingTop: `${spaceTop}px`,
        minHeight: `${this.windowSize.y}px`
      }
    },
    ...mapGetters({ windowSize: 'getWindowSize'})
  }
}
</script>
<style>
</style>
