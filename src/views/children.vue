<style scoped lang="less">

</style>
<template>
    <div class="layout-content-main">
        {{ childrenpath }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        props: ['childrenpath'],
        created() {
            console.log(this.childrenpath);
        }
    }
</script>