<template>
    <Login v-if="!key"></Login>
    <div v-else>Dashboard</div>
</template>
<script>
import Login from "@/pages/auth/login.vue"
export default {
    components: {
        Login,
    },
    data: () => ({
        key: false,
    }),
    created() {
        if(sessionStorage.getItem('_type')) this.key = true
        else this.key = false
    }
}
</script>