<template>
  <div class="section-meetup">
    <div v-if="upcomingEvents.length > 0" class="upcoming">
      <section-default :styleHeight="styleHeight" v-for="(upcoming, upcomingIdx) in upcomingEvents" :key="upcomingIdx">
        <template>
          <v-flex xs12 md10>
            <div style="color:white;" class="text-xs-left">
              <p>Next Meetup:</p>
              <p><v-icon dark>calendar_today</v-icon> {{ upcoming.local_date }} {{ upcoming.local_time }}</p>
              <h1>{{ upcoming.name }}</h1>
              <v-btn large color="red" dark :href="upcoming.link" target="_blank">RSVP</v-btn>
              <v-icon dark>people</v-icon> {{ upcoming.yes_rsvp_count }} {{ upcoming.group.who }} going
            </div>
          </v-flex>
        </template>
      </section-default>
    </div>
    <div v-else class="upcoming">
      <!-- When there's no upcoming events -->
      <section-default :styleHeight="styleHeight">
        <template>
          <v-flex xs12 md10>
            <div style="color:white;" class="text-xs-left">
              <h1>Join our Meetup group!</h1>
              <v-btn large color="red" dark href="https://meetup.com/Civic-Tech-Vancouver/" target="_blank">Join!</v-btn>
            </div>
          </v-flex>
        </template>
      </section-default>
    </div>
    <div v-if="pastEvents.length > 0">
      <v-btn large color="info" @click="showPast = !showPast">{{ buttonLabel }}</v-btn>
      <transition name="fade">
        <section-default :styleHeight="styleHeight" v-if="showPast">
          <template>
            <v-flex x12 md10>
                <v-expansion-panel popout>
                  <v-expansion-panel-content v-for="(past, pastIdx) in pastEvents" :key="pastIdx">
                    <div slot="header">{{ past.name }}</div>
                    <v-card>
                      <v-card-text class="pa-4">
                        <small>
                          <div v-html="past.description"></div>
                        </small>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
          </template>
        </section-default>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SectionDefault from '@/components/SectionDefault.vue'

export default {
  components: { SectionDefault },
  props: {
    events: {
      type: Array,
      required: true,
    }
  },
  data: function () {
    return {
      showPast: false
    }
  },
  computed: {
    styleHeight: function () {
      if (!this.windowSize) return
      return {
        minHeight: `${this.windowSize.y / 2}px`
      }
    },
    buttonLabel: function () {
      return this.showPast ? 'Hide Past Events' : 'View Past Events'
    },
    upcomingEvents: function () {
      const condition = function (event) {
        return event.status !== 'past'
      }
      return this.filterEvents(condition)
    },
    pastEvents: function () {
      const condition = function (event) {
        return event.status === 'past'
      }
      return this.filterEvents(condition)
    },
    ...mapGetters({
      windowSize: 'getWindowSize',
    })
  },
  methods: {
    filterEvents: function (condition) {
      return this.events.filter((event) => {
        return condition(event)
      }).slice().reverse()
    },
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.section-meetup .upcoming .section-background.background {
  position: relative;
  background-image: url(/static/img/event.jpg);
  background-color: rgba(0,0,0,0.7);
  background-size: cover;
  background-position: right;
  background-blend-mode: darken;
}
</style>
