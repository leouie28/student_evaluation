<template>
    <div v-if="!noKey">
        <election-container
        :elect="elect"
        @codeDialog="codeDialog=true"
        ></election-container>
        <code-dialog
        :show="codeDialog"
        @close="codeDialog=false">
        </code-dialog>
    </div>
    <div v-else>
        <template v-for="elect in elects">
            <election-container
            :key="elect.id"
            :elect="elect"
            @codeDialog="codeDialog=true"
            ></election-container>
        </template>
        <code-dialog
        :show="codeDialog"
        @close="codeDialog=false">
        </code-dialog>
    </div>
</template>
<script>
import ElectionContainer from './container.vue'
import CodeDialog from './code-dialog.vue'
export default {
    components: {
        ElectionContainer,
        CodeDialog,
    },
    data() {
        return {
            noKey: false,
            codeDialog: false,
            code: '',
            closed: false,
            elect: {},
            elects: []
        }
    },
    created() {
        this.findElection()
    },
    methods: {
        findElection() {
            let now = this.moment().toISOString()
            if(this.$route.params.key) {
                let key = this.$route.params.key
                axios.get(`/student-api/election-api/${key}`).then(({data}) => {
                    this.elect = data
                })
            }else {
                this.noKey = true
                axios.get(`/student-api/election-api`).then(({data}) => {
                    this.elects = data
                })
            }
        },
        submitCode() {

        }
    }
}
</script>