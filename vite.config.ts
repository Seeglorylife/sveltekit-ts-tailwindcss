import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';

export default defineConfig(({ mode }: ConfigEnv) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [sveltekit()],
		css: {
			postcss: {
				plugins: [tailwindcss, autoprefixer]
			}
		},
		server: {
			open: true,
			//配置自定义代理规则
			[env.VITE_APP_BASE_API]: {
				target: env.VITE_APP_BASE_URL,
				changeOrigin: true,
				rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
			}
		},
		build: {
			sourcemap: env.VITE_ENV !== 'prod',
			// -- chunk 大小警告的限制（以 kbs 为单位）
			chunkSizeWarningLimit: 2000,
			// -- 启用/禁用 gzip 压缩大小报告
			reportCompressedSize: false
		}
	};
});
