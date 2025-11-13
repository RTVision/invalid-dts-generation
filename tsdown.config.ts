import { defineConfig } from 'tsdown/config';

export default defineConfig({
	format: 'esm',
	fixedExtension: false,
	dts: {
		tsgo: true
	},
	sourcemap: true,
	target: 'esnext'
});
