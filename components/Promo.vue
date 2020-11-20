<template>
  <section class="promo">
		<div class="container">
			<h1 class="title">{{$t('mainTitle')}}</h1>
			<p>{{$t('mainDescr.descr')}}</p>
		</div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.promo {
	text-align: center;
	p {
		color: #fff;
	}
}
.title {
	color: #fff;
}
</style>