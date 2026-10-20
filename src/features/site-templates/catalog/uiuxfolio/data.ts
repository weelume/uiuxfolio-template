import { copy, type Copy } from './content';
export interface Project {
    slug: string;
    name: string;
    year: string;
    region: Copy;
    summary: Copy;
    problem: Copy;
    goal: Copy;
    category: Copy;
    hero: number[];
    mobile: boolean;
    research: number[];
    wireframes: number[];
    designs: number[];
    prototype?: number;
}
export const projects: Project[] = [
    { slug: 'voos', name: 'Voo’s Cinema', year: '2025', region: copy('美国', 'USA'), category: copy('移动应用 · 体验设计', 'Mobile app · UX design'), summary: copy('一款将影片探索、场次选择与购票整合在一起的移动应用，让线下观影更轻松。', 'A cinema app bringing film discovery, showtimes and ticket booking into one seamless mobile experience.'), problem: copy('影院应用的信息拥挤、选座路径不清晰，复杂的结账流程影响了购票体验。', 'Busy cinema apps make navigation, seat selection and checkout unnecessarily difficult.'), goal: copy('以清晰的导航、直观的选座和简洁的支付路径，让购票成为轻松的事。', 'Make browsing, seat selection and ticket purchasing clear and straightforward.'), hero: [1, 2, 3, 4], mobile: true, research: [8, 9, 10], wireframes: [11, 12, 13, 14, 15, 16], designs: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26], prototype: 27 },
    { slug: 'credroad', name: 'Credroad', year: '2024', region: copy('美国', 'USA'), category: copy('响应式网站 · 金融体验', 'Responsive website · Finance UX'), summary: copy('个人信用管理网站，帮助用户理解信用评分、找到提升方向，并比较适合自己的信用卡。', 'A personal credit-management website for understanding scores, finding improvements and comparing credit cards.'), problem: copy('信用信息分散而复杂，用户难以理解下一步该做什么，也缺少清晰的卡片比较方式。', 'Complex credit information leaves people unsure of their next step or how to compare cards.'), goal: copy('将信用管理拆解为有提示的清晰步骤，在同一处提供必要的信息与工具。', 'Guide people through credit management with clear steps, practical information and useful tools.'), hero: [5, 6, 7], mobile: false, research: [8, 9, 10], wireframes: [11, 12, 13, 14], designs: [15, 16, 17, 18, 19, 20, 21, 22] },
    { slug: 'suplan', name: 'Suplan', year: '2024', region: copy('以色列', 'Israel'), category: copy('移动应用 · 服务管理', 'Mobile app · Service management'), summary: copy('面向客户服务团队的移动应用，用统一的工作流接收、分派、跟进和汇报服务请求。', 'A mobile workspace for service teams to receive, manage and report on incoming requests.'), problem: copy('服务请求散落在不同渠道，进度与责任人不够清晰，团队难以快速完成协作。', 'Scattered requests and unclear ownership make service coordination difficult.'), goal: copy('将请求、负责人和状态集中到直观的界面，让任务流转更可见。', 'Make requests, ownership and progress visible in one intuitive interface.'), hero: [10, 11, 12, 13], mobile: true, research: [11, 12, 13, 14, 15], wireframes: [16, 17, 18, 19], designs: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], prototype: 30 },
    { slug: 'placever', name: 'Placever', year: '2023', region: copy('欧洲', 'EU'), category: copy('移动应用 · 城市探索', 'Mobile app · City discovery'), summary: copy('边走边发现城市里的好去处。将本地景点、实用信息与步行导航融合在一款应用中。', 'A city-discovery app combining local places, useful information and walking navigation.'), problem: copy('城市探索的信息来源分散，用户在步行途中很难快速判断附近有什么值得停留。', 'Scattered information makes it hard for visitors to discover worthwhile places nearby.'), goal: copy('用清晰的地图、目的地信息和收藏功能，帮助人们更自在地探索城市。', 'Help people explore with a clear map, useful place information and personal collections.'), hero: [14, 15, 16, 17], mobile: true, research: [9, 10, 11, 12], wireframes: [13, 14, 15, 16], designs: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26], prototype: 27 },
    { slug: 'nad', name: 'New American Diagnostics', year: '2023', region: copy('美国', 'USA'), category: copy('服务门户 · 界面设计', 'Service portals · Interface design'), summary: copy('为诊断实验室设计销售、客户与患者门户，让检测申请、进度跟踪和结果查看更清晰。', 'Sales, client and patient portals making laboratory requests, tracking and results easier to manage.'), problem: copy('旧门户的操作不够直观，影响客户和工作人员访问检测数据的效率。', 'An outdated portal makes laboratory data difficult to access and manage.'), goal: copy('为不同角色建立清晰的操作环境，方便新增、追踪和查看检测结果。', 'Give each role a clear workspace for adding, tracking and reviewing test results.'), hero: [18, 19, 20, 21], mobile: false, research: [], wireframes: [], designs: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
    { slug: 'nava', name: 'Nava', year: '2022', region: copy('沙特阿拉伯', 'Saudi Arabia'), category: copy('公益平台 · 设计系统', 'Non-profit platform · Design system'), summary: copy('整合机构服务、申请与进度管理的公益平台，以一致的设计系统支持社会与经济参与。', 'An integrated non-profit platform for organisations, applications and service tracking.'), problem: copy('机构需要更易用的平台来组织服务、吸引支持并清楚了解申请进度。', 'Organisations need a simpler way to coordinate services, attract support and track applications.'), goal: copy('构建覆盖管理员与客户角色的一体化服务平台，并保持跨设备的一致体验。', 'Create an integrated platform for administrators and clients with a consistent responsive experience.'), hero: [22, 23, 24, 25], mobile: false, research: [], wireframes: [], designs: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
];
