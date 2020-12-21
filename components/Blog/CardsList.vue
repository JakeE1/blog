<template>
    	<section>
		<div class="cInnerContent">
  <div class="features">
    <div  v-for="card in cards" :key="card.id" class="">
      <div v-if="card.rightDirection" class="gs_reveal_fromLeft">
        <div class="card">
          <img width="479" :src="card.src" alt="">
        </div>
      </div>

      <div class="ipsGrid_span7" :class="[card.rightDirection ? 'ipsType_left' : 'ipsType_right']">
        <h2 class="heading_large ">{{card.title}}</h2>
        <p class="">{{card.descr}}</p>
      </div>

      <div v-if="!card.rightDirection" class="gs_reveal_fromRight">
        <div class="card">
          <img width="479" :src="card.src" alt="">
        </div>
      </div>
    </div>

    
  </div>

</div>
</section>
</template>
<script>

export default {
    data () {
        return {
            cards: []
        }
    },
    created () {
        this.cards = this.$store.getters.getCardsLoaded
        
	}, 
    mounted: function () {
		
	},
	methods: {
        postsLoaded () {
             this.cards = this.$store.getters.getCardsLoaded
             
             
		},
	
	}
}
</script>
<style  lang="scss" scoped>
p {
  width: 500px;
}
.ipsType_right {
  text-align: right;
  padding-left: 700px;
  P {
    margin: 15px;
  }
}
.ipsType_center {
  align-content: center;
}
.cInnerContent {
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
}
.ipsSpacer_bottom_double {
  margin-bottom: 30px;
}
.ipsGrid {
  display: inline-block;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}
.ipsGrid::before, .ipsGrid::after {
  display: table;
  content: "";
  line-height: 0;
}
.ipsGrid > [class*="ipsGrid_span"] {
  display: block;
  width: 100%;
  min-height: 30px;
  box-sizing: border-box;
}
.ipsGrid > .ipsGrid_span5 {
  width: 40.42553191489362%;
}
.ipsGrid > .ipsGrid_span7 {
  width: 57.44680851063829%;
}
.ipsGrid > [class*="ipsGrid_span"] {
  float: left;
  margin-left: 2%;
}
.ipsGrid > [class*="ipsGrid_span"]:first-child {
  margin-left: 0;
}
.feature {
  display: flex;
  align-items: center;
}
.card {
  width: 350px;
  height: 100%;
  margin-bottom: 30px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 1px 1px 5px 1px #CCCCCC;
  transition: 0.3s;
}
.featured-image-container .card {
  padding: 10px;
  height: 0;
  padding-bottom: calc(100% - 10px);
}
h2.heading_large {
  margin: 15px 0;
  font-size: 1.8em;
}
img {
	background-size: fill;
  background-position: center;
  display: inline-block;
}

.header-section {
  margin: 130px auto;
}

.gs_reveal_fromRight {
  display: flex;
  padding-left: 800px;
}

.gs_reveal {
  opacity: 0;
  visibility: hidden;
  transition: transform 0s;
}
</style>