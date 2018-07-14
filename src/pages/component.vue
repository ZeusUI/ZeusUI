<template>
    <div class="wrapper-container">
        <div class="cfe-row fn-clear">
            <section class="cfe-col-4 is-scrollable">
                <side-nav :data="navData" :base="base"></side-nav>
            </section>
    
            <section class="cfe-col-13 is-scrollable">
                <router-view class="content"></router-view>
            </section>
    
            <section class="cfe-col-7">
                <phone></phone>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper-content {
        width: 50%;
        height: inherit;
        box-sizing: border-box;
        .content {
            padding-top: 50px;
        }
    }
    
    .phone-wrap {
        width: 30%;
        height: inherit;
        box-sizing: border-box;
    }
</style>

<script>
    import Phone from '../components/phone';
    import { navData } from '@data';

    export default {
        data() {
            return {
                base: '/component',
                navData: navData
            };
        },
        components: {
            Phone
        }
    };
</script>

