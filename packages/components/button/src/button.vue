<template>
    <button 
        class="zs-button"
        :class="[
            `zs-button-${type}`,
            `zs-button-${size}`
        ]">
        <label class="zs-button-text">
            <slot></slot>
        </label>
    </button>
</template>

<style lang="scss">
    @import '../../../assets/styles/common/var';
    .zs-button {
        position: relative;
        display: block;
        -webkit-appearance: none;
        box-sizing: border-box;
        text-align: center;
        border: 0;
        overflow: hidden;
        font-size: 18px;
        height: 40px;
        border-radius: 4px;

        &-default {
            color: $button-default-color;
            background-color: $button-default-background-color;
            box-shadow: $button-default-box-shadow;
        }

        &-large {
            display: block;
            width: 100%;
        }

        &-small {
            display: inline-block;
            font-size: 14px;
            padding: 0 12px;
            height: 33px;
        }

        &-normal {
            display: inline-block;
            padding: 0 12px;
        }

        &-primary {
            color: $button-primary-color;
            background-color: $button-primary-background-color;
        }

        &-danger {
            color: $button-danger-color;
            background-color: $button-danger-background-color;
        }

        &[disabled="disabled"] {
            opacity: .6;
        }
    }
</style>

<script>
    /**
     * zs-header
     * @module components/button
     * @desc 按钮
     * @param {string} [type=default] - 显示类型，接受 default, primary, danger
     * @param {boolean} [disabled=false] - 禁用
     * @param {string} [size=normal] - 尺寸，接受 normal, small, large
     * @param {slot} - 显示文本
     *
     * @example
     * <zs-button size="large" type="primary">按钮</zs-button>
     */
    export default {
        name: 'zs-button',
        props: {
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'danger',
                        'primary'
                    ].indexOf(value) > -1;
                }
            },
            size: {
                type: String,
                default: 'normal',
                validator(value) {
                    return [
                        'small',
                        'normal',
                        'large'
                    ].indexOf(value) > -1;
                }
            }
        }
    };
</script>