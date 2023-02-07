<template>
  <div class="pa-3">
    <v-card>
      <v-card-title class="d-flex justify-space-between items-center w-full">
        <div>
          <v-row max-width="400">
            <v-col cols="7">
              <v-select
              filled
              dense
              label="Grade Year"
              hide-details=""
            ></v-select>
            </v-col>
            <v-col cols="5">
              <v-select
              filled
              dense
              label="Section"
              hide-details=""
            ></v-select>
            </v-col>
          </v-row>
        </div>
        <v-btn color="success" large>
          Save All
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left text-h6">
                  Student Name
                </th>
                <th class="text-left text-h6">
                  Indicator 1
                </th>
                <th class="text-left text-h6">
                  Indicator 2
                </th>
                <th class="text-left text-h6">
                  Indicator 3
                </th>
                <th class="text-left text-h6">
                  Indicator 4
                </th>
                <th class="text-left text-h6">
                  Remarks
                </th>
                <th class="text-left text-h6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td class="font-weight-bold">{{ item.name }}</td>
                <td v-for="n in 4" :key="n">
                  <v-radio-group
                    v-model="row"
                    row
                    dense
                  >
                    <v-radio
                      label="1"
                      value="1"
                    ></v-radio>
                    <v-radio
                      label="2"
                      value="2"
                    ></v-radio>
                    <v-radio
                      label="3"
                      value="3"
                    ></v-radio>
                    <v-radio
                      label="4"
                      value="4"
                    ></v-radio>
                    <v-radio
                      label="5"
                      value="5"
                    ></v-radio>
                  </v-radio-group>
                </td>
                <td>Testing remarks for student in this field.</td>
                <td>
                  <v-btn color="success">Save</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        row: null,
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>