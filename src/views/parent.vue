<style scoped lang="less">

</style>
<template>
    <Row>
        <i-col span="5">
            <Menu active-name="1-2" width="auto" :open-names="['1']" @on-select="subLinkTo">
                <Menu-item name="1">导航 1</Menu-item>
                <Menu-item name="2">导航 2</Menu-item>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        导航三
                    </template>
                    <Menu-item name="3-1">选项 1</Menu-item>
                    <Menu-item name="3-2">选项 2</Menu-item>
                </Submenu>
            </Menu>
        </i-col>
        <i-col span="19">
            <div class="layout-content-main">
                <router-view :childrenpath="childrenpath"></router-view>
            </div>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                childrenpath: ''
            }
        },
        props: ['pathname'],
        created() {
            // console.log(this.$router)
        },
        watch: {
            pathname (){
                this.childrenpath = this.pathname + '/childre1';
                console.log(this.childrenpath);
            }
        },
        methods: {
            subLinkTo (name){
                var pathname = this.pathname;
                if(name.indexOf('-') != -1){
                    var name1 = name.split('-')[0];
                    var name2 = name.split('-')[1];
                    this.childrenpath = pathname + '/children' + name1 + '/grandchildren' + name2;
                    this.$router.push({path: pathname + '/children' + name1 + '/grandchildren' + name2});
                }else{
                    this.childrenpath = pathname + '/children' + name;
                    this.$router.push({path: pathname + '/children' + name});
                }
                console.log(this.childrenpath);
            }
        }
    }
</script>