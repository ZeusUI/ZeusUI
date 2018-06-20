<template>
	<div class="wrapper-container">
		<div class="cfe-row fn-clear">
			<section class="cfe-col-4 is-scrollable">
				<side-nav :data="navsData" :base="base"></side-nav>
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

<style lang="sass" scoped>
.wrapper-content {
	width:50%;
	height: inherit;
	box-sizing: border-box;
}
.phone-wrap {
	width:30%;
	height: inherit;
	box-sizing: border-box;
}

</style>

<script>
import navsData from '../config/nav2.json';
import Phone from '../components/phone';
export default {
  data() {
    return {
      navsData,
      base: '/component'
    };
  },
  components: {
    Phone
  }
};
</script>

