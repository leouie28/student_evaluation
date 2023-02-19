<template>
    <div>
        <v-dialog persistent max-width="450" v-model="data.trigger">
            <v-card>
                <v-card-title>
                    Warning
                    <v-spacer></v-spacer>
                    <v-btn icon @click="$emit('close')">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="text-center">
                    {{data.text}}<br>
                    <span v-if="data.item" class="red--text">"{{data.item}}"</span>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn small text @click="$emit('close')">
                        Cancel
                    </v-btn>
                    <v-btn small color="primary" @click="$emit('confirm')">
                        Confirm
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
}
</script>