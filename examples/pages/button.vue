<template>
    <div class="button-demo">
        <div class="button-demo-group">
            <zs-button size="large">default</zs-button>
            <zs-button size="large" type="primary">primary</zs-button>
            <zs-button size="large" type="danger">danger</zs-button>
        </div>

        <div class="button-demo-group">
            <zs-button>default</zs-button>
            <zs-button type="primary">primary</zs-button>
            <zs-button type="danger">danger</zs-button>
        </div>

        <div class="button-demo-group">
            <zs-button size="small">default</zs-button>
            <zs-button size="small" type="primary">primary</zs-button>
            <zs-button size="small" type="danger">danger</zs-button>
        </div>

        <div class="button-demo-group">
            <zs-button disabled size="large">default</zs-button>
            <zs-button disabled size="large" type="primary">primary</zs-button>
            <zs-button disabled size="large" type="danger">danger</zs-button>
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>

<style lang="scss">
    .button-demo {
        padding: 20px 10px;
        background-color: #f2f2f7;
        .button-demo-group {
            margin-bottom: 15px;
            & > * {
                margin-bottom: 15px;
            }
        }
    }
</style>
