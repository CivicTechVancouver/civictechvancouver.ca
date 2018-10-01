<template>
  <div>
    <v-container grid-list-xl class="text-xs-left">
      <div v-if="upcomingEvents.length > 0">
        <h2 class="text-xs-center">Upcoming Meetup</h2>
        <v-layout row wrap v-for="(upcoming, upcomingIdx) in upcomingEvents" :key="upcomingIdx">
          <v-flex sm10 offset-sm1>
            <v-card>
              <v-card-title>
                <h3>{{ upcoming.name }}</h3>
              </v-card-title>
              <v-card-text>
                <v-btn color="red" dark :href="upcoming.link" target="_blank">
                  RSVP
                </v-btn>
                <div v-html="upcoming.description"></div>
                <v-btn color="red" dark :href="upcoming.link" target="_blank">
                  RSVP
                </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="pastEvents.length > 0">
        <v-btn large color="info" @click="showPast = !showPast">{{ buttonLabel }}</v-btn>
        <transition name="fade">
          <v-expansion-panel popout v-if="showPast">
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
        </transition>
      </div>
    </v-container>
  </div>
</template>
<script>

export default {
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
    }
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
</style>
