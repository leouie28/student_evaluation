<template>
    <div>
        <v-dialog persistent max-width="800" v-model="show">
            <v-card>
                <v-card-title>{{isEdit?"Update":"New"}} Student</v-card-title>
                <v-divider class="mt-0 pt-0"></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col cols="8">
                            <v-row>
                                <v-col cols="12">
                                    <span>Student Id <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Student Id"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details=""
                                    ></v-text-field>
                                </v-col>
                                <!-- <v-col cols="6"></v-col> -->
                                <v-col cols="6">
                                    <span>First name <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="First name"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details=""
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <span>Last name <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Last name"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details=""
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <span>Gender <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Gender"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <span>Address <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Address"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <span>Date of birth <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Birthday"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <span>Telephone/Mobile no.<span class="error--text"></span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Telephone/Mobile no."
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <span>Grade level <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Grade level"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <span>Section <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Section"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4">
                            <div class="image-field d-flex justify-center align-center">
                                <span>Upload image</span>
                            </div>
                            <div>Student Image</div>
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
<style scoped>
.image-field {
    border: 2px dashed #ccc;
    width: 100%;
    height: 45%;
}
</style>