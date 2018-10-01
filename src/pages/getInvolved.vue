<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex xs12 sm4>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
            <v-card-title primary-title>
              Meetups
            </v-card-title>
            <v-card-text class="text-xs-left" align-top>
              blah
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange" href="https://twitter.com/CivicTechYVR" target="_blank">Join</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
            <v-card-title primary-title>
              Slack
            </v-card-title>
            <v-card-text class="text-xs-left" align-top>
              blah
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange" href="http://slack.civictechvancouver.ca/" target="_blank">Join</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
            <v-card-title primary-title>
              Twitter
            </v-card-title>
            <v-card-text class="text-xs-left" align-top>
              blah
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange" href="https://twitter.com/CivicTechYVR" target="_blank">Follow</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </section-default>
    <section-news-letter :styleHeight="styleHeight"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SectionDefault from '@/components/SectionDefault.vue'
import SectionNewsLetter from '@/components/SectionNewsLetter.vue'

export default {
  components: { SectionDefault, SectionNewsLetter },
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
