<template>
    <div id="app">
        <header class="z-header">
            {{ title }}
        </header>

        <router-link class="page-back" v-if="visible" :to="'/'">
            <i class="iconfont icon-arrowleft"></i>
        </router-link>

        <router-view class="main"></router-view>
    </div>
</template>

<style lang="scss">
    @import 'assets/styles/reset.scss';
    @import 'assets/styles/iconfont.scss';

    body {
        background-color: #f2f2f7;
    }

    .z-header {
        height: 50px;
        line-height: 50px;
        background-color: #2196F3;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }

    .page-back {
        position: absolute;
        left: 0;
        top: 0;
        .icon-arrowleft {
            display: block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 26px;
            color: #fff;
        }
    }

    .z-content {
        padding: 15px;
        li {
            position: relative;
            cursor: pointer;
            border-radius: 2px;
            padding: 15px;
            margin-bottom: 10px;
            background-color: #fff;
            .cell-link {
                display: block;
                flex: 1;
                color: #000;
                font-size: 15px;
                span {
                    color: #b1b2b3;
                    margin-left: 10px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    right: 12px;
                    display: block;
                    top: 50%;
                    width: 8px;
                    height: 8px;
                    transform: translateY(-75%) rotate(-45deg);
                    border-right: 1px solid #b2b2b2;
                    border-bottom: 1px solid #b2b2b2;
                    transform-origin: 75% 75%;
                    transition-duration: .3s;
                }
            }
        }
    }
</style>

<script>
    import { h5menusData } from '@data';

    export default {
        data () {
            return {
                title: 'ZeusUI',
                back: false
            };
        },
        computed: {
            visible () {
                return ['/'].indexOf(this.$route.path) < 0;
            }
        },
        watch: {
            '$route' (route) {
                const r = h5menusData.find(item => {
                    return item.path === route.path;
                }) || {};
                this.title = r.lable || 'ZeusUI';
            }
        }
    };
</script>
