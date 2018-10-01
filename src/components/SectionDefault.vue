<template>
  <div class="section-background background">
    <v-container grid-list-xl class="section-background foreground">
      <v-layout row wrap align-center justify-center fill-height :style="styleHeight">
        <slot></slot>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    styleHeight: {
      type: Object,
    }
  }
}
</script>
<style>
</style>
