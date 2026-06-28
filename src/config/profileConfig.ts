import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Gone_Love",
	bio: "世界は大きい、君は行かなければならない",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/386351414",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Mufumoca",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.com/users/1039919406123335840",
		},
		{
			name: "Email",
			icon: "material-symbols:mail",
			url: "mailto:me@goneloving.com",
		},
	],
};
