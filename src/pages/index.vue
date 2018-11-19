<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex column sm12 md10>
          <div>
            <h2 class="display-3 font-weight-bold">Mission Statement</h2>
            <p class="display-2 font-weight-thin py-4">Connecting community &amp; technology</p>
            <v-btn color="info" nuxt to="/getInvolved">Get Involved</v-btn>
          </div>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <!--
        <v-flex xs12 md6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
            <pre>
NOTE: Need image
            </pre>
          </v-card>
        </v-flex>
        -->
        <v-flex xs12 md6>
          <h2 class="display-3 font-weight-bold">Deeper overview of Civic Tech Vancouver</h2>
          <div class="py-4 text-xs-left">
            <p>Civic Tech Vancouver is a curious and diverse community interested in examining civic issues through the lens of design and technology.</p>
            <p>We meet regularly at our monthly meetups every third Tuesday from 6:30pm to 9pm to listen to related speakers, have open discussions, and share projects that are making a difference in civic issues in Vancouver.</p>
            <p>What we’re building is a community that supports one another, as well as in projects that impact local civic and social issues. We provide the space in which people can reliably get together to do just that. People of all backgrounds and skill sets are welcome to attend.</p>
            <p>Join us as at one of our monthly meetups to learn about civic tech and brush shoulders with like-minded individuals in your city!</p>
          </div>
        </v-flex>
      </template>
    </section-default>
    <section-meetup :events="meetupEvents"/>
    <section-news-letter :styleHeight="styleHeight"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SectionDefault from '@/components/SectionDefault.vue'
import SectionNewsLetter from '@/components/SectionNewsLetter.vue'
import SectionMeetup from '@/components/SectionMeetup.vue'
import meetupEvents from '~/static/api/meetup/events.json'

export default {
  components: { SectionMeetup, SectionDefault, SectionNewsLetter },
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
