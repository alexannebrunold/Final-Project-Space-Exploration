<template>
	<form action="#">
    <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo_" />
</form>  
</template>

<script>
export default {
	name: "PrimaryForm",
	props: {
		textForm: String,
		name: String,
	},
	mounted() {
		console.log("aaaa" + this.$router.params)
	},
}
</script>

<style lang="scss" scoped>
form {
	input {
		font-size: 16px;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 3px rgb(255, 255, 255);
		background-color: transparent;
		color: #ffffff;
		padding: 20px 30px;
		@include tablet {
			font-size: 18px;
		}
		@include laptop {
			padding: 20px 50px;
			font-size: 20px;
		}
		@include pc {
			font-size: 24px;
		}
	}
	input::selection {
		background: black;
	}
	input::placeholder {
		user-select: none;
		font-family: "Poppins";
		font-weight: regular;
		color: $white;
	}
}
</style>
