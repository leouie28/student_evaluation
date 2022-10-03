<template>
    <div>
        <div class="cb w-100" v-for="n in 5" :key="n">
            <div class="cb-title text-center">
                Position Name
            </div>
            <div class="d-flex align-center bar">
                <div class="bar-left justify-end d-flex align-center">
                    <span>Candidate Name</span>
                    <v-avatar>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-avatar>
                </div>
                <div class="bar-right w-100 d-flex align-center">
                    <div class="bar-block bg" :style="'background:'+pickColor() + '; width:90%;'"></div>
                    <div class="ml-2">{{Math.random() * 10}} votes</div>
                </div>
            </div>
            <div class="d-flex align-center bar">
                <div class="bar-left justify-end d-flex align-center">
                    <span>Candidate Name</span>
                    <v-avatar>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-avatar>
                </div>
                <div class="bar-right w-100 d-flex align-center">
                    <div class="bar-block bg" style="width:90%;"></div>
                    <div class="ml-2">28 votes</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        elect: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        pickColor() {
            return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        }
    }
}
</script>
<style scoped>
.bar .bar-left {
    width: 220px;
    padding: 2px 5px;
    padding-right: 0px !important;
}
.bar .bar-right {
    padding: 2px 5px;
    border-left: 1px solid grey;
}
.bar-right .bar-block {
    height: 40px;
    margin: 5px 0;
    animation-name: grow;
    animation-duration: 2s;
}
@keyframes grow {
    from {
        width: 0;
    }
    to {
        width: 90%;
    }
}
.bg {
    background: lightcoral;
}
</style>