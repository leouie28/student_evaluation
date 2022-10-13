<template>
    <div>
        <v-card
        elevation="0"
        class="mx-auto my-3 elec-card"
        max-width="600">
            <v-img
            height="150"
            :src="elect.image"
            ></v-img>
            <v-card-title class="text-capitalize">{{elect.name}}</v-card-title>
            <v-card-text>
                <div>{{elect.description}}</div>
                <v-divider class="my-2"></v-divider>
                <div class="text-left">
                    <div>
                        <span class="text--primary">
                            <v-icon color="primary">mdi-calendar</v-icon>
                            Open: {{ moment(elect.opening).format('MM/DD/YYYY, h:mm a') }}
                        </span>
                    </div>
                    <span>
                        <span class="text--primary">
                            <v-icon color="red">mdi-calendar</v-icon>
                            Close: {{ moment(elect.closing).format('MM/DD/YYYY, h:mm a') }}
                        </span>
                    </span>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                v-if="!isClose"
                block
                @click="$emit('codeDialog')"
                color="primary"
                large
                outlined>
                    Vote Now
                    <v-icon class="ml-1">mdi-checkbox-outline</v-icon>
                </v-btn>
                <v-btn
                v-else
                block
                dark
                color="brown"
                large>
                    View Result
                    <v-icon class="ml-1">mdi-chart-box</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    props: {
        elect: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        isClose() {
            let now = this.moment().toISOString()
            let close = this.moment(this.elect.closing).toISOString()
            if(now>=close) {
                return true
            }else {
                return false
            }
        }
    }
}
</script>