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
        <h2 class="text-xs-center">Previous Meetups</h2>
        <v-layout row wrap>
          <v-flex sm12 md6 lg4 v-for="(past, pastIdx) in pastEvents" :key="pastIdx">
            <v-card>
              <v-responsive aspect-ratio="2.7">
                <v-card-title>
                  {{ past.name }}
                </v-card-title>
              </v-responsive>
              <v-card-actions>
                <v-dialog v-model="past.dialog" width="800">
                  <v-btn slot="activator" flat color="orange">Read More</v-btn>
                  <v-card>
                    <v-card-title
                      class="headline grey lighten-2"
                      primary-title
                      >
                      {{ past.name }}
                    </v-card-title>
                    <v-card-text>
                      <small>
                        <div v-html="past.description"></div>
                      </small>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        flat color="orange"
                        @click="past.dialog = false"
                        >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  mounted: function () {
    this.getAllEvents()
  },
  data: function () {
    return {
      events: []
    }
  },
  computed: {
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
      })
    },
    getAllEvents: async function () {
      const res = await axios.get('/api/meetup/events.json')
      this.events = res.data.map((event) => {
        return {
          dialog: false,
          ...event
        }
      })
    }
  }
}
</script>
<style>
</style>
