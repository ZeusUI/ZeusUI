<template>
	<div class="home-main">
		<div class="home-banner">
			<img src="../assets/images/phone.png" class="phone" />
		</div>
		<div class="home-banner-text">
			<h2>基于 Vue.js 的移动端组件库</h2>
			<p>设计、前端高效协同，快速搭建移动端组件库</p>
			<div class="start-button-wrap">
				<a href="#">开始使用</a>
			</div>
			<img class="er" src="../assets/images/er.png" height="150" width="150">
		</div>
	</div>
</template>

<style lang="scss">
	.home-main {
		display: flex;
	box-pack: center;
	justify-content: center;
	box-align: center;
	align-items: center;
	width: 100%;
	padding: 70px 0;
	background-color: #F8F8FB;
	}

	.home-banner {
		width: 350px;
		margin-right: 75px;
		.phone {
			width: 100%;
		}
	}

	.home-banner-text {
		width: 550px;
		h2 {
			font-size: 40px;
		word-break: break-word;
		font-family: 'PingFang SC';
		text-rendering: optimizeLegibility;
		font-smoothing: antialiased;
		margin-bottom: 12px;
		}
		p {
			font-size: 16px;
			color:#555;
		}
		.er {
			margin-top: 40px;
		}
	}

	.start-button-wrap {
		margin-top: 36px;
		a {
			color: #108EE9;
		font-size: 18px;
		padding: 13px 45px 14px;
		border: 1px solid #108EE9;
		border-radius: 6px;
		&:hover {
			box-shadow: 0 0 10px #108EE9;
		}
		}
	}
</style>
