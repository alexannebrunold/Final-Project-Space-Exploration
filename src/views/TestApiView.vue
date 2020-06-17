<template>
	<div id="cc">
		<iframe
			width="900"
			height="506"
			:src="urlVideo"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; "
		></iframe>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name: "cc",
	data() {
		return {
			urlVideo: " ",
		}
	},
	mounted() {
		const API_URL = "https://spacemoonapis.frb.io/webdocressources/"
		axios.get(API_URL + "3").then((response) => {
			console.log(response.data.data[0].videoURL)
			this.urlVideo = response.data.data[0].videoURL
			console.log(this.urlVideo)
		})
	},
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.video {
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
	z-index: -10;
	filter: brightness(50%);
}
</style>
