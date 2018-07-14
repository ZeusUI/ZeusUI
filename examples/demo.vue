<template>
    <div class="z-content">
        <ul>
            <li v-for="(menu, index) in menus" :key="index">
                <router-link :to="menu.path" class="cell-link">
                    {{ menu.lable }}
                    <span>{{ menu.lableEnglish }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { h5menusData as menus } from '@data';

    export default {
        data () {
            return {
                menus
            };
        }
    };
</script>
