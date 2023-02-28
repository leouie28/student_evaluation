<template>
  <v-container>
    <v-card>
      <template>
        <v-tabs v-model="tab" background-color="grey darken-3" color="amber" dark>
          <v-tab key="tab1">
            <span class="text-capitalize font-weight-bold">Your Subjects</span>
          </v-tab>
          <v-tab key="tab2">
            <span class="text-capitalize font-weight-bold">Evaluation</span>
          </v-tab>
          <v-tab key="tab3">
            <span class="text-capitalize font-weight-bold">Missed to Evaluate</span>
          </v-tab>
        </v-tabs>
      </template>
      <v-tabs-items v-model="tab">
      <v-tab-item key="tab1">
        <v-card>
          <v-card-title>Subject List</v-card-title>
          <v-card-text>
            <Subject />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    </v-card>
  </v-container>
</template>
<script>
import Subject from './subject.vue';
export default {
  components: {
    Subject,
  },
  data: () => ({
    tab: 'tab1',
  })
}
</script>