<template>
  <div class="text-xs-center">
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h1>Who we are</h1>
          <p>
            Tumeric kale chips plaid, migas blog stumptown VHS 90's actually celiac. 3 wolf moon bushwick kinfolk, helvetica hell of pickled direct trade hot chicken stumptown. Poke tote bag helvetica, chia put a bird on it adaptogen man bun fixie lyft swag small batch you probably haven't heard of them slow-carb. Tacos cloud bread twee chia kogi church-key flannel flexitarian bitters messenger bag. Echo park gastropub la croix gochujang, mustache listicle before they sold out pour-over 3 wolf moon migas you probably haven't heard of them farm-to-table af ugh godard. Keytar kitsch cronut church-key migas ramps taiyaki scenester next level letterpress.
          </p>
          <pre>
  NOTE: Need contents
          </pre>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h1>Why Civic Tech Vancouver?</h1>
          <p>
            Quinoa selvage live-edge copper mug. Glossier aesthetic photo booth fashion axe bitters meh typewriter forage, marfa taiyaki cold-pressed. Aesthetic jianbing meggings poutine DIY, before they sold out drinking vinegar bespoke tumblr pork belly viral. Neutra godard kinfolk umami +1.
          </p>
          <p>

            Squid crucifix af tilde. Raclette street art lumbersexual, occupy tousled food truck art party. Vexillologist slow-carb listicle godard squid tofu. Shoreditch helvetica echo park selfies adaptogen sriracha.
          </p>
          <pre>
NOTE: Need contents
          </pre>
        </v-flex>
      </template>
    </section-default>
    <section-default :styleHeight="styleHeight">
      <template>
        <v-flex sm12>
          <h1>Get Involved</h1>
          <p>
            Fashion axe pop-up paleo, pok pok celiac try-hard biodiesel shaman portland mumblecore next level art party hella. Microdosing green juice blue bottle, la croix knausgaard copper mug cred helvetica man bun lo-fi brunch. Retro tacos ugh celiac man braid. Flexitarian jean shorts hoodie, slow-carb cold-pressed drinking vinegar selfies put a bird on it raclette la croix. Edison bulb next level truffaut tacos freegan, etsy jianbing retro pabst 8-bit gochujang woke intelligentsia.
          </p>
          <v-btn color="info" nuxt to="/getInvolved">Join Now</v-btn>
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
