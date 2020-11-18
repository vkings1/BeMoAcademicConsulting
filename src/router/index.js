import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title:
				'FREE Ultimate Guide to CDA Interviews: Tips & Proven Strategies to Help You Prepare & Ace Your CDA Structured Interview.',
		},
	},

	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
		meta: { title: 'Cotact Us' },
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.afterEach((to) => {
	Vue.nextTick(() => {
		document.title = to.meta.title;
	});
});

export default router;
