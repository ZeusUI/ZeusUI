<template>
    <footer class="footer-wrap">
        <ul>
            <li class="footer-wrap-item">
                <h3>
                    <i class="iconfont icon-github"></i> GitHub
                </h3>
                <ul>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                </ul>
            </li>
            <li class="footer-wrap-item">
                <h3>
                    <i class="iconfont icon-relevant-dark"></i> 相关站点
                </h3>
                <ul>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                </ul>
            </li>
            <li class="footer-wrap-item">
                <h3>
                    <i class="iconfont icon-shequ"></i> 社区
                </h3>
                <ul>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                    <li>
                        <a href="" target="_blank">iView</a>
                    </li>
                </ul>
            </li>
    
            <li class="footer-wrap-item">
                <h3>
                    <i class="iconfont icon-shequ"></i> Copyright © 2017
                </h3>
                <p>美团点评 商企通前端团队 出品</p>
                <p>Built with <a href="https://github.com/Autofe/fe-blog" target="_blank">auto cfe</a></p>
            </li>
        </ul>
    </footer>
</template>

<style lang="scss">
    .footer-wrap {
        clear: both;
        font-size: 12px;
        background: #fff;
        position: relative;
        z-index: 1;
        color: #666;
        box-shadow: 0 1000px 0 1000px #fff;
        ul {
            overflow: hidden;
            margin: 0 2%;
            .footer-wrap-item {
                float: left;
                width: 25%;
                padding: 24px 0;
                h3 {
                    margin-bottom: 8px;
                    color: #000;
                }
                p {
                    margin: 0 8px 5px 0;
                }
                li {
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 5px;
                    padding-left: 8px;
                    a {
                        color: #2d8cf0;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>

<script>
    export default {
        data () {
            return {};
        }
    };
</script>
