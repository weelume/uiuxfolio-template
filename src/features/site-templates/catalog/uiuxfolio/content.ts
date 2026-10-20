import type { TemplateLocale } from '../../types';
export type Copy = {
    zh: string;
    en: string;
};
export const copy = (zh: string, en: string): Copy => ({ zh, en });
export const text = (value: Copy, locale: TemplateLocale) => value[locale];
export const navigation = [['works', copy('精选作品', 'Works')], ['what-how', copy('技能与工具', 'Skills & Tools')], ['about', copy('关于我', 'About')], ['connect', copy('联系', 'Connect')]] as const;
export const home = {
    welcome: copy('欢迎来到我的设计世界', 'Welcome to my home!'),
    greeting: copy('你好 我是', 'I’m'),
    role: copy('一名 UI/UX 设计师', 'a UI/UX designer.'),
    value: copy('我的设计理念', 'My main value:'),
    valueBody: copy('用细致的设计 让产品更贴近用户', 'A precise approach to your product.'),
    workLabel: copy('值得分享的设计', 'What I’m proud of:'),
    works: copy('精选作品', 'Main Works'),
    otherLabel: copy('还有更多灵感', 'What’s more:'),
    other: copy('其他作品', 'Other Works'),
    skillsLabel: copy('我做什么 如何实现', 'What and how:'),
    skills: copy('技能与工具', 'Skills & Tools'),
    aboutLabel: copy('设计之外的我', 'Who am I:'),
    about: copy('关于我', 'About Me'),
    aboutIntro: copy('一名驻纽约的 UI/UX 设计师', 'a NY-based UI/UX designer.'),
    aboutBody: [copy('我热爱设计直观、易用的数字体验，让复杂的问题拥有清晰的答案。', 'I’m a designer passionate about intuitive, approachable digital experiences.'), copy('我喜欢与创始人一起工作，理解用户的真实需求，将想法变成有价值的产品。', 'I love working with founders to understand their users and turn ideas into useful products.')],
    jobs: copy('近期经历 /', 'Recent jobs /'),
    cv: copy('我的设计经历与履历', 'My experience and detailed resume'),
    contactLead: copy('用出色的视觉方案\n让你的业务更进一步', 'Let me help with a great visual solution for your business.'),
    contactLabel: copy('从一次交流开始', 'To get in touch:'),
    contact: copy('联系我', 'Contact Me'),
    book: copy('聊聊你的项目', 'Book a Call'),
    bookBody: copy('约一个时间 聊聊你的设计需求', 'Set up a time to discuss your design needs.'),
    emailLabel: copy('点击复制邮箱', 'Click to copy:'),
    footer: copy('让好设计 成为真实体验', 'Thoughtful design. Meaningful experiences.'),
};
export const skillCards = [
    { title: copy('设计', 'Design'), icon: '✳', body: copy('从复杂的平台到品牌标识，我用清晰的布局和直观的交互，创造兼具美感与易用性的数字体验。', 'From complex platforms to brand identities, I create clear layouts and intuitive interactions for useful, engaging digital experiences.'), label: copy('我的流程', 'I do'), items: [copy('用户研究', 'Research'), copy('概念、草图与线框', 'Concepts, sketches & wireframes'), copy('界面视觉设计', 'Design mockups'), copy('交互原型', 'Interactive prototypes')] },
    { title: copy('构建', 'Building'), icon: '⌘', body: copy('将设计转化为响应式网站，关注信息结构、细节和性能，让创始人的想法更快成为可用的产品。', 'I bring designs to life as responsive websites, shaping structure, detail and performance to help founders launch their ideas.'), label: copy('我的交付', 'I create'), items: [copy('品牌网站', 'Websites'), copy('移动应用', 'Mobile apps'), copy('标识与品牌', 'Logotypes & branding'), copy('设计系统与素材', 'Design systems & assets')] },
    { title: copy('提升', 'Enhancing'), icon: '↗', body: copy('通过统一的颜色、字体和视觉语言，让品牌更加鲜明；结合用户反馈，持续优化导航与使用体验。', 'I refine products with consistent colour, type and identity, then use feedback to improve navigation and the overall experience.'), label: copy('我的工具', 'I use'), items: [copy('Figma、Sketch', 'Figma, Sketch'), copy('Framer', 'Framer'), copy('Photoshop、Illustrator', 'Photoshop, Illustrator'), copy('原型与动效工具', 'Prototyping & animation tools')] },
];
export const jobs = [{ role: copy('高级 UI/UX 设计师', 'Senior UI/UX Designer'), company: 'Google', date: copy('2025 → 至今', '2025 → Now') }, { role: copy('UI/UX 设计师', 'UI/UX Designer'), company: 'Acronis', date: copy('2021 → 2025', '2021 → 2025') }, { role: copy('产品设计师', 'Product Designer'), company: 'Tesla', date: copy('2019 → 2021', '2019 → 2021') }];
export const testimonials = [
    { name: 'Michael Hayes', role: copy('Bright Path 首席执行官', 'CEO of Bright Path'), quote: copy('重新梳理后的界面更加清晰，交互也变得自然。每一处细节都经过认真考虑。', 'The redesigned interface feels clear and natural. Every detail has been carefully considered.') },
    { name: 'Emily Carter', role: copy('FinSolve 产品经理', 'Product Manager at FinSolve'), quote: copy('他把模糊的想法变成了可使用的产品。整个合作过程清晰、高效，充满启发。', 'He translated early ideas into a product people can use. The collaboration was thoughtful, clear and efficient.') },
    { name: 'Sofia Martana', role: copy('Meditech 运营负责人', 'Head of Operations at Meditech'), quote: copy('从第一次交流起，他就理解了我们的需求，让功能与品牌表达自然结合。', 'He understood our needs from the first conversation and brought function and brand together beautifully.') },
    { name: 'Alex Foster', role: copy('HorizonApps 技术负责人', 'CTO of HorizonApps'), quote: copy('我最欣赏的是他对团队节奏的理解，以及面对复杂问题时始终清晰的思路。', 'I appreciated his ability to work with our team and bring clarity to complex design problems.') },
    { name: 'Stefan Kim', role: copy('Learnly 首席执行官', 'CEO of Learnly'), quote: copy('这套以人为中心的设计，让我们的平台更容易理解，也更愿意被使用。', 'His human-centred approach made our platform easier to understand and a pleasure to use.') },
    { name: 'Rebecca Allen', role: copy('ShopEase 市场总监', 'Marketing Director at ShopEase'), quote: copy('设计不仅让页面更好看，也帮助团队重新理解了客户的真实使用路径。', 'The work went beyond visual polish and helped our team understand the customer journey.') },
];
export const caseLabels = { overview: copy('项目概览', 'Project Overview'), research: copy('用户研究', 'User Research'), wireframes: copy('设计起点', 'Starting the Design'), design: copy('打磨设计', 'Refining Design'), outcome: copy('成果与思考', 'Outcome'), problem: copy('面临的问题', 'Problem'), goal: copy('设计目标', 'Goal'), role: copy('我的角色', 'My role'), responsibilities: copy('工作内容', 'Responsibilities'), personas: copy('用户画像', 'User Personas'), journey: copy('用户旅程地图', 'User Journey Map'), pain: copy('关键痛点', 'Pain Points'), storyboard: copy('故事板', 'Storyboards'), sitemap: copy('信息架构', 'Sitemap'), paper: copy('纸面线框', 'Paper Wireframes'), digital: copy('数字线框', 'Digital Wireframes'), testing: copy('可用性研究', 'Usability Studies'), mockups: copy('高保真界面', 'Mockups'), prototype: copy('交互原型', 'High-fidelity prototype'), takeaways: copy('收获与启发', 'Takeaways'), next: copy('下一步', 'Next Steps') };
export const process = {
    research: copy('通过访谈和同理心地图理解用户。将观察整理为用户画像，再沿着实际任务识别阻碍，优先解决影响核心流程的问题。', 'Interviews and empathy maps inform the personas. Mapping real tasks reveals friction and helps prioritise the core experience.'),
    wireframes: copy('先梳理信息架构，再从纸面草图逐步推进到数字线框与低保真原型。在进入视觉设计前，验证导航和任务路径是否清晰。', 'Information architecture and paper sketches develop into wireframes and a low-fidelity prototype. Navigation and task flows are tested before visual design.'),
    testing: copy('邀请参与者完成核心任务，记录操作中的疑问与阻碍。根据反馈调整信息层次、入口和状态提示，再进行下一轮验证。', 'Participants complete key tasks while we observe uncertainty and friction. Findings guide changes to hierarchy, entry points and status feedback.'),
    design: copy('建立统一的色彩、字体、图标和组件系统。将研究结论落实到每个界面，并通过响应式布局保持跨设备体验的一致。', 'A consistent system of colour, type, icons and components turns research into interfaces that work across devices.'),
    outcome: copy('好的体验始于对真实需求的理解。通过清晰的信息层次和连贯的任务路径，帮助用户更从容地完成目标。项目为作品集演示，不代表经过独立审计的业务指标。', 'Understanding real needs leads to clearer hierarchy and more coherent task flows. This portfolio demonstration makes no independently verified business claims.'),
    next: copy('继续开展可用性测试，收集真实使用反馈；优先解决高频问题，再评估后续功能。', 'Continue usability testing and collect real usage feedback. Address recurring issues before considering additional features.'),
};
