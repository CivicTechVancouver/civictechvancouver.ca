<template>
  <div>
    <span v-for="(event, eventIdx) in events" :key="eventIdx">
      <pre>{{ event }}</pre>
    </span>
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
  methods: {
    getAllEvents: async function () {
      const res = await axios.get('/api/meetup/events.json')
      this.events = res.data
    }
  }
}
</script>
<style>
</style>
