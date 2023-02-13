<template>
  <div>
    <v-app-bar
      app
      color="black"
      dark
      flat
      elevate-on-scroll
      elevation="6"
    >
      <v-container fluid class="py-0 fill-height">
        <v-spacer></v-spacer>
        <div class="d-flex justify-center align-center">
          <v-btn
          rounded
          class="mr-1"
          elevation="0">
            <span class="text-capitalize font-weight-medium mr-1 amber--text font-nunito">Teacher Name</span>
            <v-avatar
            size="32">
            <v-icon>mdi-account</v-icon>
            </v-avatar>
          </v-btn>
          <v-btn rounded class="mr-1"><v-icon>mdi-clipboard-text-clock-outline</v-icon></v-btn>
          <v-btn text plain class="text-capitalize">Logout</v-btn>
          <!-- <v-btn elevation="0" large>
            <v-icon>mdi mdi-logout-variant</v-icon>
          </v-btn> -->
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container fluid>
        <evaluation-form></evaluation-form>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import EvaluationForm from "../../components/evaluation/form.vue"
export default {
  components: {
    EvaluationForm,
  },
  data: () => ({
    items: [
      {
        text: 'Year',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Month',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Subject Name',
        disabled: true,
        href: 'breadcrumbs_link_1',
      },
    ],
  }),
}
</script>