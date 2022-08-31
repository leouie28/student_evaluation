<template>
    <div>
        <v-dialog persistent max-width="600" v-model="show">
            <v-card>
                <v-card-title>Import Excel</v-card-title>
                <v-divider class="pt-0 mt-0"></v-divider>
                <v-card-text>
                    <div class="excel text-center">
                        <v-icon x-large style="font-size:60px;">mdi-microsoft-excel</v-icon>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="$emit('close')">
                        Close
                    </v-btn>
                    <v-btn color="secondary" @click="$emit('save',payload)">
                        Create
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: () => false
        }
    }
}
</script>
<style scoped>

</style>