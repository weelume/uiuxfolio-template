'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell } from '../components/Shell';
export default function MissingPage({ basePath, locale = 'zh' }: SiteTemplatePageProps) { return <Shell basePath={basePath} locale={locale}><section className="ux-not-found ux-grid-bg"><strong>404</strong><h1>{locale === 'zh' ? '这页灵感暂时走丢了' : 'This page has wandered off'}</h1><p>{locale === 'zh' ? '回到首页，继续探索设计作品。' : 'Head home and explore the design work.'}</p><Link className="ux-pill ux-primary" href={basePath || '/'}>{locale === 'zh' ? '返回首页' : 'Back to home'} <span aria-hidden="true">→</span></Link></section></Shell>; }
