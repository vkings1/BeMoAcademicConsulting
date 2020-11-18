<template>
	<div class="contact">
		<Navbar />
		<Contact />
		<Footer />
	</div>
</template>
//
<script>
import Navbar from '@/components/Navbar.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
export default {
	components: {
		Navbar,
		Contact,
		Footer,
	},
};
</script>
