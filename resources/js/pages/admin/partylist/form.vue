<template>
    <div>
        <v-dialog persistent max-width="800" v-model="show">
            <v-card>
                <v-card-title>Partylist Info</v-card-title>
                <v-divider class="mt-0 pt-0"></v-divider>
                <v-card-text class="">
                    <v-row>
                        <v-col md="9" cols="12">
                            <v-row>
                                <v-col md="9" cols="12">
                                    <v-text-field
                                    dense
                                    label="Name"
                                    v-model="payload.name"
                                    :rules="rule"
                                    filled
                                    required
                                    hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col md="3" cols="12">
                                    <v-text-field
                                    dense
                                    label="Short Name"
                                    placeholder="Ex. PL"
                                    v-model="payload.short_name"
                                    :rules="rule"
                                    filled
                                    required
                                    hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col md="12" cols="12">
                                    <v-textarea
                                    dense
                                    label="Description (optional)"
                                    v-model="payload.description"
                                    :rules="rule"
                                    filled
                                    required
                                    hide-details="auto"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col md="3" cols="12">
                            <v-row>
                                <v-col md="12" cols="12">
                                    <div class="feat-img mx-auto" @click="$refs.file_input.click()">
                                        <input type="file" class="hide" ref="file_input" accept=".jpeg,.png,.jpg" @change="onFileChange($event.target.files)">
                                        <div v-if="!payload.image" class="d-flex justify-center align-center flex-column" style="height:100%;">
                                            <v-icon size="50">mdi-file-image</v-icon>
                                            <span>Partylist logo</span>
                                            <v-btn elevation="0" small>
                                                Browse file
                                            </v-btn>
                                        </div>
                                        <v-img
                                        v-if="payload.image"
                                        alt="Partylist logo"
                                        position="center center"
                                        max-height="100%"
                                        max-width="100%"
                                        :src="payload.image"
                                        ></v-img>
                                        <v-btn v-if="payload.image" class="btn-file" fab small absolute top right color="primary">
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                    </div>
                                </v-col>
                                <v-col md="12" cols="12">
                                    <v-select
                                    dense
                                    label="Color Theme"
                                    v-model="payload.color_theme"
                                    :rules="rule"
                                    :items="colors"
                                    filled
                                    required
                                    hide-details="auto">
                                        <template v-slot:selection="{ item }">
                                            <v-avatar size="30" :color="item" style="border: 1px solid #ccc;">
                                            </v-avatar>
                                            <span class="pa-2">{{ item }}</span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                            <v-avatar size="30" :color="item" style="border: 1px solid #ccc;">
                                            </v-avatar>
                                            <span class="pa-2">{{ item }}</span>
                                        </template>
                                    </v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="close">
                        Close
                    </v-btn>
                    <v-btn color="secondary" @click="save">
                       {{isEdit?'Update':'Create'}}
                        <v-icon class="ml-2">mdi-{{isEdit?'content-save':'plus'}}</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data: () => ({
        payload: {
            name: '',
            description: '',
            color_theme: '',
            image: null,
        },
        orig: {
            name: '',
            description: '',
            color_theme: '',
            image: null,
        },
        old_img: null,
        rule: [v => !! v || 'This field is required'],
        colors: ['#9E9E9E', '#212121', '#FF5722', '#607D8B', '#FFEB3B', '#4CAF50', '#009688', '#03A9F4', '#673AB7', '#F44336', '#E91E63']
    }),
    props: {
        show: {
            type: Boolean,
            default: () => false
        },
        data: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        isEdit() {
            return this._getters('is_editing')
        }
    },
    methods: {
        close() {
            this.$emit('close')
            setTimeout(() => {
                this._commit('is_editing', false)
                this.payload = JSON.parse(JSON.stringify(this.orig))
            },200)
        },
        save() {
            if(this.payload.name && this.payload.short_name){
                if(this.isEdit) {
                    if(this.old_img == this.payload.image) {
                        this.payload.image = ''
                    }
                    this.$emit('update',this.payload)
                    this.close()
                }else {
                    this.$emit('save',this.payload)
                    this.close()
                }
            }else{
                alert('Important field are required')
            }
        },
        async onFileChange(file) {
            let imageFile = file[0];
            let temp = {};
            if (file.length > 0) {
                if (!imageFile.type.match("image.*")) {
                    alert("Please choose an image file")
                } else {
                    let imageURL = URL.createObjectURL(imageFile);
                    this.payload.image = await this.createImageBase64(imageFile);
                }
            }
        },
    },
    watch: {
        data: {
            handler(val) {
                if(val) {
                    console.log(val,'form')
                    this.payload = val
                    if(val.images.length>=1){
                        this.old_img = val.images[0].path + val.images[0].file_name
                        this.payload.image = val.images[0].path + val.images[0].file_name
                    }
                }
            },immediate:true,deep:true
        }
    }
}
</script>
<style scoped>
.feat-img{
    position: relative;
    width: 100%;
    height: 150px;
    border: 2px dashed grey;
}
.btn-file{
    right: 0 !important;
    top: 0 !important;
    margin: 5px !important;
}
</style>