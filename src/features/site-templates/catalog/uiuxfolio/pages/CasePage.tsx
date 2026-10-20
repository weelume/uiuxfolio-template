'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { SiteTemplatePageProps } from '../../../types';
import { projects } from '../data';
import { caseImages } from '../assets';
import { caseLabels as labels, process, text, copy } from '../content';
import { Shell, Heading, Reveal } from '../components/Shell';
import { ProjectArtwork } from '../components/ProjectArtwork';
function ImageGrid({ images, indices, label, phones = false }: {
    images: string[];
    indices: number[];
    label: string;
    phones?: boolean;
}) { return <div className={phones ? 'ux-case-images is-phones' : 'ux-case-images'}>{indices.map((n, i) => <figure key={`${n}-${i}`}><img src={images[n]} alt={`${label} ${i + 1}`} loading="lazy"/><figcaption>{label} · {String(i + 1).padStart(2, '0')}</figcaption></figure>)}</div>; }
export default function CasePage({ basePath, locale = 'zh' }: SiteTemplatePageProps) {
    const pathname = usePathname() ?? '', slug = pathname.split('/').filter(Boolean).at(-1);
    const project = projects.find(p => p.slug === slug);
    if (!project)
        throw new Error('Unknown portfolio project: ' + slug);
    const images = caseImages[project.slug], index = projects.indexOf(project), next = projects[(index + 1) % projects.length];
    return <Shell basePath={basePath} locale={locale} caseNav hasResearch={project.research.length > 0}><section className="ux-case-intro ux-grid-bg"><div className="ux-container"><div><span className="ux-hand">{text(project.category, locale)}</span><h1>{project.name}</h1><div className="ux-case-meta"><span>{locale === 'zh' ? '地区' : 'Region'}<strong>{text(project.region, locale)}</strong></span><span>{locale === 'zh' ? '年份' : 'Year'}<strong>{project.year}</strong></span></div></div><ProjectArtwork project={project}/></div></section>
 <div className="ux-case-body ux-container"><aside className="ux-case-sidebar"><span>{project.name}</span>{Object.entries(labels).filter(([id]) => ['overview', ...(project.research.length ? ['research', 'wireframes'] : []), 'design', 'outcome'].includes(id)).map(([id, label]) => <Link key={id} href={`#${id}`}>{text(label, locale)}</Link>)}</aside><div>
 <section className="ux-case-section" id="overview"><Heading label={copy('从问题出发', 'The project itself:')} title={labels.overview} locale={locale}/><p className="ux-lead">{text(project.summary, locale)}</p><div className="ux-two"><div className="ux-glass ux-info"><h3>{text(labels.problem, locale)}</h3><p>{text(project.problem, locale)}</p></div><div className="ux-glass ux-info"><h3>{text(labels.goal, locale)}</h3><p>{text(project.goal, locale)}</p></div></div><h3>{text(labels.role, locale)}</h3><p>{locale === 'zh' ? `负责 ${project.name} 的用户体验与界面设计。` : `UX and interface designer for ${project.name}.`}</p><h3>{text(labels.responsibilities, locale)}</h3><p>{locale === 'zh' ? '用户研究、信息架构、线框、可用性验证、视觉设计与交互原型。' : 'Research, information architecture, wireframes, usability studies, visual design and interactive prototypes.'}</p></section>
 {project.research.length > 0 && <><section className="ux-case-section" id="research"><Heading label={copy('理解使用者', 'All about the user:')} title={labels.research} locale={locale}/><p>{text(process.research, locale)}</p><h3>{text(labels.pain, locale)}</h3><div className="ux-three">{[copy('清楚的信息', 'Clear information'), copy('直观的操作', 'Intuitive interaction'), copy('连贯的体验', 'A coherent journey')].map((label, n) => <div className="ux-glass ux-info" key={label.en}><span className="ux-number">0{n + 1}</span><h4>{text(label, locale)}</h4><p>{text(project.problem, locale)}</p></div>)}</div><h3>{text(labels.personas, locale)}</h3><ImageGrid images={images} indices={project.research.slice(0, -1)} label={text(labels.personas, locale)}/><h3>{text(labels.journey, locale)}</h3><p>{text(project.goal, locale)}</p><ImageGrid images={images} indices={project.research.slice(-1)} label={text(labels.journey, locale)}/></section>
 <section className="ux-case-section" id="wireframes"><Heading label={copy('让想法有迹可循', 'The project schematically:')} title={labels.wireframes} locale={locale}/><p>{text(process.wireframes, locale)}</p>{project.wireframes.map((n, i) => <Reveal key={n}><h3>{text([labels.storyboard, labels.sitemap, labels.paper, labels.digital][Math.min(i, 3)], locale)}</h3><ImageGrid images={images} indices={[n]} label={text([labels.storyboard, labels.sitemap, labels.paper, labels.digital][Math.min(i, 3)], locale)}/></Reveal>)}<h3>{text(labels.testing, locale)}</h3><p>{text(process.testing, locale)}</p></section></>}
 <section className="ux-case-section" id="design"><Heading label={copy('从结构走向体验', 'The clear version:')} title={labels.design} locale={locale}/><p>{text(process.design, locale)}</p><h3>{text(labels.mockups, locale)}</h3><p className="ux-demo-note">{locale === 'zh' ? '以下为参考项目的原始界面与研究图，保留其英文示意内容。' : 'Original project interface and research visuals are presented in their source language.'}</p><ImageGrid images={images} indices={project.designs} label={text(labels.mockups, locale)} phones={project.mobile}/>{project.prototype !== undefined && <><h3>{text(labels.prototype, locale)}</h3><div className="ux-prototype"><img src={images[project.prototype]} alt={locale === 'zh' ? '应用操作流程演示' : 'Application flow demonstration'} loading="lazy"/></div></>}</section>
 <section className="ux-case-section" id="outcome"><Heading label={copy('回顾与继续', 'What comes next:')} title={labels.outcome} locale={locale}/><h3>{text(labels.takeaways, locale)}</h3><p>{text(process.outcome, locale)}</p><h3>{text(labels.next, locale)}</h3><p>{text(process.next, locale)}</p><Link className="ux-next-project ux-glass" href={`${basePath}/${next.slug}`}><span>{locale === 'zh' ? '下一个案例' : 'Next project'}</span><strong>{next.name}</strong><span aria-hidden="true">→</span></Link></section>
 </div></div></Shell>;
}
