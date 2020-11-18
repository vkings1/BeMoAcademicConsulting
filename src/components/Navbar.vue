<template>
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<div class="container">
			<router-link to="/" class="nav-link js-scroll-trigger"
				><img class="logo" src="../assets/img/bemo.png" alt="logo" />
			</router-link>
			<button
				class="navbar-toggler navbar-toggler-right"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto my-2 my-lg-0">
					<li class="nav-item">
						<router-link to="/" class="nav-link js-scroll-trigger"
							>Main</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/" class="nav-link js-scroll-trigger"
							>How To Prepare</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/" class="nav-link js-scroll-trigger"
							>CDA Interview Question</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/contact" class="nav-link js-scroll-trigger"
							>Contact</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<style lang="scss" scoped>
#mainNav {
	-webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	background-color: #fff;
	-webkit-transition: background-color 0.2s ease;
	transition: background-color 0.2s ease;
}

#mainNav .navbar-brand {
	font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	font-weight: 700;
	color: #212529;
}

#mainNav .navbar-nav .nav-item .nav-link {
	color: #6c757d;
	font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	font-weight: 700;
	font-size: 0.9rem;
	padding: 0.75rem 0;
}

#mainNav .navbar-nav .nav-item .nav-link:hover,
#mainNav .navbar-nav .nav-item .nav-link:active {
	color: #f4623a;
}

#mainNav .navbar-nav .nav-item .nav-link.active {
	color: red !important;
}

.nav-item {
	padding: 0 16px;
}
.logo {
	width: 126px;
}
.container {
	max-width: 84%;
}
</style>
