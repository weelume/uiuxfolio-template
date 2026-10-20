import type { SiteTemplate, TemplateScreenshot } from '../../types';
const screenshots: TemplateScreenshot[] = (['desktop', 'tablet', 'mobile'] as const).flatMap(device => ['home', 'works', 'case', 'contact'].map(name => ({ src: `/templates/uiuxfolio/screenshots/${device}-${name}.webp`, alt: `UIUXfolio ${device} ${name}`, device, width: device === 'desktop' ? 1440 : device === 'tablet' ? 834 : 390, height: device === 'desktop' ? 1000 : device === 'tablet' ? 1180 : 844 })));
export const uiuxfolioTemplate: SiteTemplate = {
    id: 'uiuxfolio', name: 'UIUXfolio · 交互设计师作品集', localizedNames: { en: 'UIUXfolio · UI/UX designer portfolio' }, sceneId: 'brand-portfolio', listed: false, tags: ['交互设计', '粉色强调', '网格留白', 'PC / iPad / H5', '中英文'], summary: '以白色网格、粉色强调和交错项目展示构成的设计师作品集，包含六个 UX 案例、技能工具、评价、经历与本地演示联系表单。', accentColor: '#d92159', cover: '/templates/uiuxfolio/screenshots/desktop-home.webp', screenshots: screenshots as [
        TemplateScreenshot,
        ...TemplateScreenshot[]
    ],
    surfaces: [{ id: 'site', name: '设计师作品集', platform: 'pc', locales: ['zh', 'en'], pages: [
                { slug: '', title: '首页', localizedTitles: { en: 'Home' }, load: () => import('./pages/HomePage') },
                ...[['voos', 'Voo’s Cinema'], ['credroad', 'Credroad'], ['suplan', 'Suplan'], ['placever', 'Placever'], ['nad', 'New American Diagnostics'], ['nava', 'Nava']].map(([slug, title]) => ({ slug, title, localizedTitles: { en: title }, load: () => import('./pages/CasePage') })),
                { slug: 'contact', title: '联系', localizedTitles: { en: 'Contact' }, load: () => import('./pages/ContactPage') },
                { slug: 'resume', title: '履历', localizedTitles: { en: 'Resume' }, load: () => import('./pages/ResumePage') },
                { slug: 'privacy-policy', title: '隐私说明', localizedTitles: { en: 'Privacy notice' }, load: () => import('./pages/PolicyPage') },
                { slug: 'terms-of-service', title: '使用说明', localizedTitles: { en: 'Terms' }, load: () => import('./pages/PolicyPage') },
                { slug: '404', title: '页面未找到', localizedTitles: { en: 'Page not found' }, load: () => import('./pages/MissingPage') },
            ] }],
};
