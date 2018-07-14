<template>
    <header class="header-wrap">
        <div class="header-wrap-nav">
            <a href="/" class="header-wrap-nav-logo">
                <!-- <img src="../assets/images/logo.png" class="logo"> -->
                <span>ZeuseUI</span>
            </a>
            <div class="header-wrap-nav-search">
            </div>
    
            <div class="cfe-select fr" style="margin-top:29px; margin-left:25px">
                <div class="cfe-select-selection">
                    <span class="cfe-select-placeholder" style="display:none">请选择</span>
                    <span class="cfe-select-selected-value">1.x</span>
                </div>
            </div>
    
            <ul class="header-wrap-nav-list">
                <li class="cfe-menu-item" v-for="(value, key, index) in headData" :key="index">
                    <router-link active-class="active" :to="`/${key}`">
                        {{ value }}
                    </router-link>
                </li>
            </ul>
    
        </div>
    </header>
</template>

<style lang="scss">
    .header-wrap {
        background: #fff;
        border-bottom: 1px solid #eee;
    }
    
    .header-wrap-nav {
        width: 90%;
        height: 80px;
        margin: 0 auto;
    }
    
    .header-wrap-nav-logo {
        height: 50px;
        margin-top: 15px;
        float: left;
        display: flex;
        box-align: center;
        align-items: center;
        color: #108ee9;
        img {
            height: 80%;
            margin-right: 8px;
        }
        span {
            float: right;
            font-size: 20px;
            font-family: 'Raleway', 'Hiragino Sans GB', sans-serif;
        }
    }
    
    .header-wrap-nav-list {
        float: right;
        height: 80px;
        .cfe-menu-item {
            float: left;
            font-size: 14px;
            position: relative;
            cursor: pointer;
            z-index: 3;
            height: 80px;
            line-height: 80px;
            border-bottom: 2px solid transparent;
            a {
                color: #495060;
                padding: 0 20px;
                display: block;
                &.active {
                    color: #2d8cf0;
                    font-weight: bold;
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: #2d8cf0;
                    }
                }
            }
        }
    }
    
    
    /* select 组件 start */
    
    .cfe-select {
        width: 60px;
        display: inline-block;
        box-sizing: border-box;
        vertical-align: middle;
        color: #495060;
        font-size: 14px;
        line-height: normal;
    }
    
    .cfe-select-selection {
        display: block;
        box-sizing: border-box;
        outline: 0;
        user-select: none;
        cursor: pointer;
        position: relative;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dddee1;
        transition: all .2s ease-in-out;
        .cfe-select-selected-value {
            height: 22px;
            line-height: 22px;
            display: block;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-left: 8px;
            padding-right: 24px;
        }
    }
    
    
    /* select 组件 end */
</style>

<script>
    import { componentData } from '@data';
    export default {
        data () {
            return {};
        },
        computed: {
            headData () {
                return componentData.header;
            }
        }
    };
</script>
