<template>
    	<section>
		<div class="cInnerContent">
  <h1 class="header-section gs_reveal ipsType_center">Scroll down and up to see different reveal animations</h1>
  
  <div class="features">

    <div  v-for="card in cards" :key="card.id" class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div v-if="card.rightDirection" class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
        <div class="card">
          <img width="479" :src="card.src" alt="">
        </div>
      </div>

      <div class="ipsGrid_span7" :class="[card.rightDirection ? 'ipsType_left' : 'ipsType_right']">
        <h2 class="heading_large gs_reveal">{{card.title}}</h2>
        <p class="gs_reveal">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>

      <div v-if="!card.rightDirection" class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
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
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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
		this.foo()
	},
	methods: {
        postsLoaded () {
             this.cards = this.$store.getters.getCardsLoaded
             console.log(this.cards);
             
		},
	foo () {
	document.addEventListener("DOMContentLoaded", function() {
  	gsap.registerPlugin(ScrollTrigger);

  function animateFrom (elem, direction) {
  	direction = direction | 1
  	var x = 0,
		y = direction * 100
		
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100
    y = 0
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100
    y = 0
	}
	
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
	});
	
}
  function hide(elem) {
  	gsap.set(elem, {autoAlpha: 0})
}
  
  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
  	ScrollTrigger.create({
			trigger: elem,
			onEnter: function() { animateFrom(elem) }, 
			onEnterBack: function() { animateFrom(elem, -1) },
			onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
		});
	});
});
		}
	}
}
</script>
<style  lang="scss" scoped>
.ipsType_right {
  text-align: right;
}
.ipsType_center {
  text-align: center;
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

.gs_reveal {
  opacity: 0;
  visibility: hidden;
  transition: transform 0s;
}
</style>