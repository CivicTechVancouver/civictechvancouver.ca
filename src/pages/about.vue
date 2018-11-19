<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h2 class="display-3 font-weight-bold">Who we are</h2>
          <div class="py-4 text-xs-left">
            <p>Civic Tech Vancouver is a curious and diverse community interested in examining civic issues through the lens of design and technology.</p>
            <p>To get in touch with us contact <a href="mailto:team@civictechvancouver.ca">team@civictechvancouver.ca</a></p>
          </div>
          <v-btn color="info" nuxt to="/getInvolved">Join Now</v-btn>
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
