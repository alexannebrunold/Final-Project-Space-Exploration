module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `  
        @import "@/scss/vendors/_reset.scss";
        @import "@/scss/config/_variables.scss";
        @import "@/scss/config/_global.scss";
        @import "@/scss/config/_medias.scss";
          `,
			},
		},
	},
}
