<template>
    <div class="phone">
        <iframe class="demo-page" src="./h5.html"
            frameborder="0">
        </iframe>
    </div>
</template>

<script>
    export default {
        name: 'phone'
    };

</script>

<style lang="scss" scoped>
    .phone {
        position: fixed;
        top: 100px;
        margin: 20px 20px 0 20px;
        background-image: url('../assets/images/phone.png');
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100%;
        padding: 100px 16px;
        box-sizing: border-box;
        width: 340px;
    }

    .demo-page {
        width: 100%;
        height: 530px;
        background-color: #fff;
    }

</style>
