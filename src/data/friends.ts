// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Sakim",
		imgurl: "https://i.111666.best/image/JlG0wbfpVTFYx3xu3sO64l.jpg",
		desc: "It's the only NEET thing to do.",
		siteurl: "https://blog.kokonoyu.com",
		tags: ["博客"],
	},
	{
		id: 2,
		title: "Oblique",
		imgurl: "https://img.aspchang.com/file/1770816588654_avatar.png",
		desc: "一滩败草 一袖寒风",
		siteurl: "https://www.aspchang.com",
		tags: ["博客"],
	},
	{
		id: 3,
		title: "風雪城",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=3526514925&s=640",
		desc: "浩繁星空下的一场稚嫩的梦",
		siteurl: "https://blog.chyk.ink/",
		tags: ["博客"],
	},
	{
		id: 4,
		title: "洛风缘的小屋",
		imgurl: "https://gcore.jsdelivr.net/gh/fengyuanluo/tuchuang@main/background189%20(2).webp",
		desc: "一个不知名的网络自留地",
		siteurl: "https://www.windyl.de",
		tags: ["博客"],
	},
	{
		id: 5,
		title: "XiaoShuoHub",
		imgurl: "https://www.xiaoshuohub.com/favicon.ico",
		desc: "连接读者、作者与运营团队的小说社区",
		siteurl: "https://www.xiaoshuohub.com/",
		tags: ["社区"],
	},
	{
		id: 6,
		title: "纳西妲",
		imgurl: "https://nahida.im/favicon.ico",
		desc: "为世界上一切美好而战!",
		siteurl: "https://nahida.im/",
		tags: ["博客"],
	},
	{
		id: 7,
		title: "Harena Blog",
		imgurl: "https://blog.harena.tech/assets/home/home.png",
		desc: "晴空之下，洞见科技与生活",
		siteurl: "https://blog.harena.tech/",
		tags: ["博客"],
	},
	{
		id: 8,
		title: "忧郁の诺布尔",
		imgurl: "https://miluyami.com/wp-content/uploads/2026/01/cropped-Konachan.com-394193-sample.jpg",
		desc: "技术与快乐并存~",
		siteurl: "https://miluyami.com/",
		tags: ["博客"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
