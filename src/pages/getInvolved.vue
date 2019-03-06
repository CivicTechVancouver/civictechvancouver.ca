<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex column sm12 md10>
          <div class="py-5">
            <h2 class="display-3 font-weight-bold">Attend our monthly meetups</h2>
            <div class="py-4 text-xs-left">
              <p>The best way of connecting with us is to join us at one of our monthly meetups! We meet monthly every second Tuesday from 6:30 to 9pm. The location of our meetups change monthly, but can be found in our event calendar. We start off with an introduction of our community, the person or organization spotlighting that event, and meetup attendees. Depending on the format of the event, we either split into breakout groups to tackle a specific civic tech issue or project, or into speaker-focused presentations.</p>
            </div>
          </div>
          <div class="py-5">
            <h2 class="display-3 font-weight-bold">Become a community volunteer</h2>
            <div class="py-4 text-xs-left">
              <p>Civic Tech Vancouver is a community-based group that is completely volunteer-run. Whether you’re interested in event planning or community outreach, we are always looking for more volunteers to help us keep the community thriving.</p>
            </div>
          </div>
          <div class="py-5">
            <h2 class="display-3 font-weight-bold">Become a speaker</h2>
            <div class="py-4 text-xs-left">
              <p>If you’re working on a project or issue that you’re interested in presenting at one of our meetups, get in touch with us at <a href="mailto:team@civictechvancouver.ca">team@civictechvancouver.ca</a>.We will work with you to align your topic with our community themes and coordinate your presentation deck.</p>
            </div>
          </div>
          <div class="py-5">
            <h2 class="display-3 font-weight-bold">Provide a space</h2>
            <div class="py-4 text-xs-left">
              <p>We change venues every month. The space needs to be large enough to accommodate ~40 people and have sufficient AV equipment, such as a projector and microphone. Often, our venue sponsors also provide light refreshments and snacks. If your organization is interested in hosting one of our meetups, please get in touch with us at <a href="mailto:team@civictechvancouver.ca">team@civictechvancouver.ca</a></p>
            </div>
          </div>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex xs12 sm4>
          <v-card>
            <v-img src="/img/meetup.svg" aspect-ratio="1"/>
            <v-card-title primary-title>
              Meetups
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange" href="https://meetup.com/Civic-Tech-Vancouver/" target="_blank">Join</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-img src="/img/slack.svg" aspect-ratio="1"/>
            <v-card-title primary-title>
              Slack
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange" href="http://slack.civictechvancouver.ca/" target="_blank">Join</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-img src="/img/twitter.svg" aspect-ratio="1"/>
            <v-card-title primary-title>
              Twitter
            </v-card-title>
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
