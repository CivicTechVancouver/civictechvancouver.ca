<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12 md6>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.3"/>
        </v-flex>
        <v-flex sm12 md6>
          <h1>Project 1</h1>
          <p>
            Fashion axe pop-up paleo, pok pok celiac try-hard biodiesel shaman portland mumblecore next level art party hella. Microdosing green juice blue bottle, la croix knausgaard copper mug cred helvetica man bun lo-fi brunch. Retro tacos ugh celiac man braid. Flexitarian jean shorts hoodie, slow-carb cold-pressed drinking vinegar selfies put a bird on it raclette la croix. Edison bulb next level truffaut tacos freegan, etsy jianbing retro pabst 8-bit gochujang woke intelligentsia.
          </p>
          <p>
            Kickstarter kitsch next level +1 DIY brunch. Whatever pug irony tofu mumblecore woke, venmo pop-up put a bird on it. Waistcoat ennui banh mi squid. La croix hashtag glossier messenger bag activated charcoal, 8-bit fashion axe.
          </p>
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
