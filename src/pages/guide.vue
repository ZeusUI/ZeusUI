<template>
    <div class="wrapper-container fn-clear">
        <div class="cfe-row">
            <section class="cfe-col-4">
                <side-nav :data="navsData" :base="base"></side-nav>
            </section>
    
            <section class="cfe-col-20">
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                base: '/guide',
                navsData: [
                    {
                        path: '/introduce',
                        name: '介绍'
                    },
                    {
                        path: '/design',
                        name: '设计原则'
                    }
                ]
            };
        }
    };
</script>
