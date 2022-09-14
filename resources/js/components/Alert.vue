<template>
    <div>
        <v-snackbar
        v-model="data.trigger"
        multi-line
        elevation="12"
        :color="data.color"
        transition="scroll-x-reverse-transition"
        top
        right>
        <div class="d-flex justify-space-between">
            <div class="mr-2">
            <v-icon>mdi-information-outline</v-icon>
            {{ data.text }}
            </div>
            <v-btn @click="data.trigger = false">
            Close
            </v-btn>
        </div>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>