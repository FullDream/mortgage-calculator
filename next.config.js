const nextConfig = {
	reactStrictMode: true,
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: true,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'removeViewBox',
							active: false,
						},
					],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		})

		return config
	},
}

module.exports = nextConfig
