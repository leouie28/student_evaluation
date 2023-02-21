<template>
    <div>
        <v-dialog persistent max-width="500" v-model="show">
            <v-card>
                <v-card-title>{{isEdit?"Update":"New"}} Subject</v-card-title>
                <v-divider class="mt-0 pt-0"></v-divider>
                <v-card-text class="">
                    <v-row>
                        <v-col md="12" cols="12">
                            <v-select
                                dense
                                label="Section"
                                v-model="payload.section_id"
                                :items="sections"
                                item-text="name"
                                item-value="id"
                                :rules="rule"
                                outlined
                                required
                                hide-details="auto"
                            ></v-select>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-select
                                dense
                                label="Assign Teacher"
                                v-model="payload.teacher_id"
                                :items="teachers"
                                item-text="name"
                                item-value="id"
                                :rules="rule"
                                outlined
                                required
                                hide-details="auto"
                            ></v-select>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-text-field
                                dense
                                label="Name Label"
                                v-model="payload.name"
                                :rules="rule"
                                outlined
                                required
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-textarea
                                dense
                                label="Info (optional)"
                                v-model="payload.info"
                                :rules="rule"
                                outlined
                                required
                                hide-details="auto"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="closeForm" class="text-capitalize"> Close </v-btn>
                    <v-btn color="secondary" @click="save" class="text-capitalize">
                        {{ isEdit ? "Update " : "Create " }}Subject
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import common from "@/services/commonApi.js"
export default {
    data: () => ({
        // isEdit: false,
        payload: {
            section_id: "",
            teacher_id: "",
            name: "",
            info: "",
        },
        orig: {
            section_id: "",
            teacher_id: "",
            name: "",
            info: "",
        },
        rule: [(v) => !!v || "This field is required"],
        sections: [],
        teachers: []
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
        this.initialize()
    },
    methods: {
        async initialize() {
            const section = await common.get('/web-admin/section')
            this.sections = section.data.data
            const teacher = await common.get('/web-admin/teacher')
            this.teachers = teacher.data.data
        },
        save() {
            if (this._hasEmptyKeys(this.payload, ['info'])==false) {
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
