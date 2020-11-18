<template>
	<div class="contactTemp">
		<header class="contact">
			<div class="container h-100">
				<div
					class="row h-100 align-items-center justify-content-center text-center"
				>
					<div class="col-lg-10 align-self-end">
						<h1 class="text-uppercase text-white font-weight-bold"></h1>
					</div>
					<div class="col-lg-8 align-self-baseline"></div>
				</div>
			</div>
		</header>
		<section class="mt-5">
			<div class="container">
				<h6 class="font-weight-bold">BeMo Academic Consulting Inc.</h6>
				<p class="mt-3">
					Toll Free: 1-855-900-BeMo (2366) <br /><br />
					Email: info@bemoacademicconsulting.com
				</p>
			</div>
		</section>
		<main class="mt-5 mb-5">
			<div class="container">
				<form>
					<div class="form-group">
						<label class="form-text text-muted" for="exampleInputEmail1"
							>NAME: *</label
						>
						<input
							type="text"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Name"
							required
						/>
					</div>
					<div class="form-group">
						<label class="form-text text-muted" for="exampleInputPassword1"
							>EMAIL ADDRESS: *</label
						>
						<input
							type="email"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Email"
							required
						/>
					</div>
					<div class="form-group">
						<label
							class="form-text text-muted"
							for="exampleFormControlTextarea1"
							>HOW CAN WE HELP YOU? *</label
						>
						<textarea
							class="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
						></textarea>
					</div>
					<div class="text-center">
						<button type="submit" class="btn btn-primary mr-3">
							Reset
						</button>
						<button type="submit" class="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
			<h6 class="mt-5 mb-5 text-center font-weight-bold">
				Note: If you are having difficulties with our contact us form above,
				send us an email to info@bemoacademicconsulting.com (copy & paste the
				email address)
			</h6>
		</main>
	</div>
</template>
<style lang="scss" scoped>
.contact {
	height: 100vh;
	min-height: 40rem;
	padding-top: 72px;
	padding-bottom: 0;
	background: url('../assets/img/contact-us.png');
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-size: cover;
}

section {
	.container {
		max-width: 88%;
	}
}
main {
	.container {
		max-width: 88%;
	}
}
</style>
