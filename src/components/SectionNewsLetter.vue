<template>
  <section-default :styleHeight="styleHeight">
    <template>
      <v-flex xs11 sm8 md6>
        <h1>News Letter</h1>
        <v-form v-model="valid" ref="form">
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
        console.log(
          {
            "name": this.name,
            "email": this.email,
            "industry": this.industry,
          }
        )
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
