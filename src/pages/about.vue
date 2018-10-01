<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h1 class="display-2">Who we are</h1>
          <pre>
  NOTE: Need contents
          </pre>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h1 class="display-2">Why Civic Tech Vancouver?</h1>
          <pre>
NOTE: Need contents
          </pre>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h1 class="display-2">Get Involved</h1>
          <v-btn color="info">Join Now</v-btn>
          <pre>
NOTE: Need contents
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
