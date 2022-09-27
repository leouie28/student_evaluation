<template>
    <div>
        <v-card
        elevation="0"
        class="mx-auto my-3 elec-card"
        max-width="374">
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
                block
                @click="codeDialog = true"
                color="primary"
                large
                outlined>
                    Vote Now
                    <v-icon class="ml-1">mdi-checkbox-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        <code-dialog
        :show="codeDialog"
        @close="codeDialog=false">
        </code-dialog>
    </div>
</template>
<script>
import CodeDialog from './code-dialog.vue'
export default {
    components: {
        CodeDialog,
    },
    data() {
        return {
            noKey: false,
            codeDialog: false,
            code: '',
            elect: {}
        }
    },
    created() {
        this.findElection()
    },
    methods: {
        findElection() {
            if(this.$route.params.key) {
                let key = this.$route.params.key
                axios.get(`/student-api/election-api/${key}`).then(({data}) => {
                    this.elect = data
                })
            }else {
                this.noKey = true
            }
        },
        submitCode() {

        }
    }
}
</script>