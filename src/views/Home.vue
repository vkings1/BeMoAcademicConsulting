<template>
	<div class="home">
		<Navbar />
		<Home />
		<Footer />
	</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Home from '@/components/Home.vue';
import Footer from '@/components/Footer.vue';
export default {
	components: {
		Navbar,
		Home,
		Footer,
	},
};
</script>
