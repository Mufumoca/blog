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
