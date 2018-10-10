<template>
  <section-default :styleHeight="styleHeight">
    <template>
      <v-flex xs11 sm8 md6>
        <h1>News Letter</h1>
        <v-card v-if="hasSubmitted">
          <v-responsive>
            <iframe src="https://giphy.com/embed/26gsjCZpPolPr3sBy" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </v-responsive>
          <v-card-text>
            <!-- TODO: Message -->
            Thank you!
          </v-card-text>
        </v-card>
        <v-form v-model="valid" ref="form" v-if="!hasSubmitted">
          <v-text-field v-model="name"
            :rules="nameRules"
            :counter="nameMaxLength"
            label="Name"
            required></v-text-field>
          <v-text-field v-model="email"
            :rules="emailRules"
            label="E-mail"
            required></v-text-field>
          <v-text-field v-model="industry"
            :rules="industryRules"
            :counter="industryMaxLength"
            label="What industry do you work in?"></v-text-field>
          <v-btn
            :disabled="!valid"
            @click="submit">
            Submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-flex>
    </template>
  </section-default>
</template>
<script>
import SectionDefault from '@/components/SectionDefault.vue'
import { db } from '~/plugins/firebase.js'

export default {
  components: { SectionDefault },
  props: {
    styleHeight: {
      type: Object,
    }
  },
  data: function () {
    return {
      valid: false,
      hasSubmitted: false,
      email: '',
      name: '',
      industry: '',
      nameMaxLength: 20,
      industryMaxLength: 20,
      industryRules: [
        v => ((v && v.length <= this.industryMaxLength) || !v) || ` must be less than ${this.industryMaxLength} characters`
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3 && v.length <= this.nameMaxLength) || `Name must be 3 to ${this.nameMaxLength} characters`
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => (v && /.+@.+/.test(v)) || 'E-mail must be valid'
      ],
    }
  },
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        const user = {
          "name": this.name,
          "email": this.email,
          "industry": this.industry,
          "subscribeStarted": new Date(),
        }
        const usersRef = db.collection('users')
        usersRef.add(user)
        this.clear()
        this.hasSubmitted = true
      }
    },
    clear: function () {
      this.$refs.form.reset()
    },
  }
}
</script>
<style>
</style>
