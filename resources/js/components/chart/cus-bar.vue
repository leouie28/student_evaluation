<template>
    <div v-if="!loading">
        <div class="cb w-100 mb-4" v-for="pos in elect.positions" :key="pos.id">
            <div class="cb-title text-center">
                <v-toolbar-title>{{pos.name}}</v-toolbar-title>
            </div>
            <div class="d-flex align-center bar" v-for="(cand, i) in pos.candidate" :key="cand.id">
                <div class="bar-left justify-end d-flex align-center text-right">
                    <span>{{cand.name}}</span>
                    <v-avatar>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-avatar>
                </div>
                <div class="bar-right w-100 d-flex align-center" :class="i==(pos.candidate.length -1) ? 'border-bot' : ''">
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <div class="bar-block" :style="'width:'+computeWidth(cand.vote_count)+'%'" v-bind="attrs" v-on="on">
                                <div class="block-content bg" :style="'background:'+pickColor() + ';'"></div>
                            </div>
                        </template>
                    <span>{{cand.name + ' - ' + cand.vote_count}} votes</span>
                    </v-tooltip>
                    <div class="ml-2">{{cand.vote_count}} votes</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="d-flex align-center justify-center" style="min-height:80vh;">
        <div class="text-center">
            <v-progress-circular
            :size="70"
            :width="7"
            color="primary"
            indeterminate
            ></v-progress-circular>
            <div class="mt-5">
                Loading Information ...
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        loading: true,
    }),
    props: {
        elect: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        pickColor() {
            return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        },
        computeWidth(val) {
            return (val/this.elect.voters_count) * 90
        }
    },
    watch: {
        elect: {
            handler(val) {
                if(val) {
                    setTimeout(() => {
                        this.loading = false
                    },1000)
                }
            }
        }
    }
}
</script>
<style scoped>
.border-bot {
    border-bottom: 1px solid #BDBDBD;
}
.bar .bar-left {
    /* width: 100px; */
    width: 25%;
    padding: 2px 5px;
    padding-right: 0px !important;
}
.bar .bar-right {
    /* width: 70%; */
    padding: 2px 5px;
    border-left: 1px solid #BDBDBD;
}
.bar-right .bar-block {
    height: 40px;
    margin: 5px 0;
}
.bar-right .bar-block .block-content {
    height: 100%;
    animation-name: grow;
    animation-duration: 1.5s;
}
@keyframes grow {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
.bg {
    background: lightcoral;
}
</style>