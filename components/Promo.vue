<template>
<div>
  <section class="promo">
		<div class="container">
			<h1 class="title">{{$t('mainTitle')}}</h1>
			<p>{{$t('mainDescr.descr')}}</p>
		</div>
		</section> 
		<cards/>

</div>
   
</template>

<script>
import cards from '@/components/Blog/CardsList.vue'

export default {
	components: { cards },
	
}
</script>

<style lang="scss" scoped>
.promo {
	text-align: center;
	p {
		color: #fff;
	}
}
.title {
	color: #fff;
}

h1 {
	color: #fff;
	font-size: 24px;
}

</style>