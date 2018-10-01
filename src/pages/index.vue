<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex column sm12 md10>
          <div>
            <h1>Mission Statement</h1>
            <v-btn color="info" nuxt to="/getInvolved">Get Involved</v-btn>
            <pre>
NOTE: Need contents
            </pre>
          </div>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex xs12 md6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
            <pre>
NOTE: Need image
            </pre>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <h2>Deeper overview of Civic Tech Vancouver</h2>
          <pre>
NOTE: need contents
- Any actionable content here?
          </pre>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h1>Meetup</h1>
          <meetup :events="meetupEvents"/>
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
import Meetup from '@/components/Meetup.vue'
import meetupEvents from '~/static/api/meetup/events.json'

export default {
  components: { Meetup, SectionDefault, SectionNewsLetter },
  fetch: async function ({ store }) {
    await store.dispatch('setMeetupEvents', meetupEvents)
  },
  computed: {
    styleHeight: function () {
      if (!this.windowSize) return
      const spaceTop = 64;
      return {
        paddingTop: `${spaceTop}px`,
        minHeight: `${this.windowSize.y}px`
      }
    },
    ...mapGetters({
      windowSize: 'getWindowSize',
      meetupEvents: 'getMeetupEvents',
    })
  },
}
</script>
<style>
</style>
