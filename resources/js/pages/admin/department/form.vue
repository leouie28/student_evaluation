<template>
    <div>
        <v-dialog persistent max-width="600" v-model="show">
            <v-card>
                <v-card-title>{{isEdit?"Update":"New"}} Department</v-card-title>
                <v-divider class="mt-0 pt-0"></v-divider>
                <v-card-text class="">
                    <v-row>
                        <v-col md="12" cols="12">
                            <v-text-field
                                dense
                                label="Name Label"
                                v-model="payload.name"
                                :rules="rule"
                                filled
                                required
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-textarea
                                dense
                                label="Info"
                                v-model="payload.info"
                                :rules="rule"
                                filled
                                required
                                hide-details="auto"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="closeForm" small> Close </v-btn>
                    <v-btn color="secondary" @click="save" small>
                        {{ isEdit ? "Update" : "Create" }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data: () => ({
        // isEdit: false,
        payload: {
            name: "",
            info: "",
        },
        orig: {
            name: "",
            info: "",
        },
        rule: [(v) => !!v || "This field is required"],
    }),
    props: {
        show: {
            type: Boolean,
            default: () => false,
        },
        edit: {
            type: Boolean,
            default: () => false,
        },
        data: {
            type: Object,
            default: () => {},
        },
    },
    mounted() {
        console.log(this._getters("is_editing"), "form");
    },
    methods: {
        save() {
            if (this.payload.name && this.payload.info) {
                if (this.isEdit) {
                    this.$emit("update", this.payload);
                    this.closeForm();
                } else {
                    this.$emit("save", this.payload);
                    this.closeForm();
                }
            } else {
                alert("Important field are required");
            }
        },
        closeForm() {
            // console.log(this.payload)
            this.$emit("close");
            setTimeout(() => {
                this._commit("is_editing", false);
                this.payload = JSON.parse(JSON.stringify(this.orig));
            }, 200);
        },
    },
    computed: {
        isEdit() {
            return this._getters("is_editing");
        },
    },
    watch: {
        data: {
            handler(val) {
                if (val) {
                    this.payload = val;
                }
            },
            immediate: true,
            deep: true,
        },
    },
};
</script>
