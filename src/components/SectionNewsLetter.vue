<template>
  <section-default :styleHeight="styleHeight">
    <template>
      <v-flex xs12 sm4>
        <h1 class="display-2">News Letter</h1>
        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>What industry do you work in?</li>
          <li>Submit button</li>
        </ul>
        <pre>
NOTE: Form
        </pre>
      </v-flex>
    </template>
  </section-default>
</template>
<script>
import SectionDefault from '@/components/SectionDefault.vue'

export default {
  components: { SectionDefault },
  props: {
    styleHeight: {
      type: Object,
    }
  }
}
</script>
<style>
</style>
