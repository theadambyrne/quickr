/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/studio": { page: "/studio" },
		};
	},
};

module.exports = nextConfig;
