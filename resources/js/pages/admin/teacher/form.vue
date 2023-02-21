<template>
    <div>
        <v-dialog persistent max-width="800" v-model="show">
            <v-card>
                <v-card-title>{{isEdit?"Update":"New"}} Teacher</v-card-title>
                <v-divider class="mt-0 pt-0"></v-divider>
                <v-card-text class="">
                    <v-row>
                        <v-col cols="8">
                            <v-row>
                                <v-col cols="12">
                                    <span>Full Name <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Full name"
                                        v-model="payload.name"
                                        :rules="rule"
                                        required
                                        hide-details=""
                                    ></v-text-field>
                                </v-col>
                                <!-- <v-col cols="6"></v-col> -->
                                <v-col cols="3">
                                    <span>Gender <span class="error--text">*</span></span>
                                    <v-select
                                        dense
                                        outlined
                                        :items="gender"
                                        placeholder="Gender"
                                        v-model="payload.gender"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-select>
                                </v-col>
                                <v-col cols="9">
                                    <span>Address <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="Address"
                                        v-model="payload.address"
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
                                        placeholder="birthdate"
                                        v-model="payload.birthday"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <span>Telephone/Mobile no. <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="contact"
                                        v-model="payload.contact_number"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" class="pa-0">
                                    <v-divider class="pa-0 mx-0 my-2"></v-divider>
                                    <v-toolbar-title class="mb-0 pb-0">Account credential</v-toolbar-title>
                                </v-col>
                                <v-col cols="6">
                                    <span>Username <span class="error--text">*</span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        placeholder="username"
                                        v-model="payload.username"
                                        :rules="rule"
                                        required
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <span>Password <span class="error--text"></span></span>
                                    <v-text-field
                                        dense
                                        outlined
                                        type="password"
                                        placeholder="password"
                                        v-model="payload.password"
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
                            <div class="text-center">Student Image</div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="closeForm" class="text-capitalize"> Close </v-btn>
                    <v-btn color="secondary" @click="save" class="text-capitalize">
                        {{ isEdit ? "Update " : "Create " }}Teacher
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
            gender: "",
            contact_number: "",
            address: "",
            birthday: "",
            image: "",
        },
        orig: {
            name: "",
            gender: "",
            contact_number: "",
            address: "",
            birthday: "",
            image: "",
        },
        rule: [(v) => !!v || "This field is required"],
        gender: ['male', 'female'],
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
    methods: {
        save() {
            if (this._hasEmptyKeys(this.payload, ['image'])==false) {
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
                if(!this._hasEmptyKeys(val)) {
                    this.payload = val;
                }
            },
            // immediate: true,
            // deep: true,
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