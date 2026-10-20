'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MotionConfig, motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import type { SiteTemplatePageProps } from '../../../types';
import { brand } from '../config/brand';
import { PageScrollbar } from '../../../shared/PageScrollbar';
import { navigation, text, home, copy, type Copy } from '../content';
import { useUIUXfolioHost } from '../host';
import { homeImages } from '../assets';
import '../tokens.css';
import '../theme.css';
export function Shell({ basePath, locale = 'zh', children, caseNav = false, hasResearch = true }: SiteTemplatePageProps & {
    children: ReactNode;
    caseNav?: boolean;
    hasResearch?: boolean;
}) {
    const host = useUIUXfolioHost(), pathname = usePathname() ?? basePath;
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const name = host.brandName?.[locale] ?? brand.name[locale], logo = host.logo ?? brand.logo;
    const root = locale === 'en' ? basePath.slice(0, -3) : basePath;
    const tail = pathname.slice(basePath.length);
    const languagePath = `${locale === 'en' ? root : root + '/en'}${tail}` || '/';
    const links = caseNav ? ([['overview', copy('概览', 'Overview')], ...(hasResearch ? [['research', copy('研究', 'Research')], ['wireframes', copy('线框', 'Wireframes')]] : []), ['design', copy('设计', 'Design')], ['outcome', copy('成果', 'Outcome')]] as [
        string,
        Copy
    ][]) : navigation;
    const closeMenu = () => setOpen(false);
    return <MotionConfig reducedMotion="user"><div className="ux-site" id="ux-document" data-locale={locale}>
  <header className="ux-header"><Link className="ux-brand" href={basePath || '/'} onClick={closeMenu}><img src={logo} alt=""/>{name}</Link>
   <nav className={open ? 'ux-nav is-open' : 'ux-nav'} id="ux-navigation" aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>{caseNav && <Link href={`${basePath}/#works`} onClick={closeMenu}>← {locale === 'zh' ? '作品' : 'Works'}</Link>}{links.map(([id, label]) => <Link key={id} href={caseNav ? `#${id}` : `${basePath}/#${id}`} onClick={closeMenu}>{text(label, locale)}</Link>)}</nav>
   <div className="ux-header-actions"><Link className="ux-language" href={languagePath} onClick={event => { if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return; event.preventDefault(); router.push(languagePath + window.location.search + window.location.hash); closeMenu(); }} aria-label={locale === 'zh' ? '切换为英文' : 'Switch to Chinese'}>{locale === 'zh' ? 'EN' : '中文'}</Link><Link className="ux-pill ux-primary ux-header-contact" href={`${basePath}/#connect`}>{locale === 'zh' ? '联系我' : 'Email Me'} <span aria-hidden="true">♧</span></Link><button className="ux-menu" aria-label={locale === 'zh' ? '切换导航菜单' : 'Toggle navigation menu'} aria-controls="ux-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button></div>
  </header>
  <main>{children}</main>
  <ContactSection basePath={basePath} locale={locale}/>
  <footer className="ux-footer"><Link className="ux-brand" href={basePath || '/'}><img src={logo} alt=""/>{name}</Link><p>{text(home.footer, locale)}</p><div><span>© {brand.year}</span><Link href={`${basePath}/privacy-policy`}>{locale === 'zh' ? '隐私政策' : 'Privacy'}</Link><Link href={`${basePath}/terms-of-service`}>{locale === 'zh' ? '服务条款' : 'Terms'}</Link><Link href={`${basePath}/404`}>404</Link>{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale] ?? name}</Link>}{host.filing}</div></footer>
  <PageScrollbar className="ux-page-scrollbar" controlsId="ux-document" label={locale === 'zh' ? '页面滚动' : 'Page scroll'} autoHide />
  {host.marketplaceHref && <Link className="ux-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale] ?? name}><img src={host.lightLogo ?? logo} alt=""/><span>{name}</span></Link>}
 </div></MotionConfig>;
}
export function Reveal({ children, className = '' }: {
    children: ReactNode;
    className?: string;
}) { return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .5 }}>{children}</motion.div>; }
export function Heading({ label, title, locale, id }: {
    label: Copy;
    title: Copy;
    locale: 'zh' | 'en';
    id?: string;
}) { return <div className="ux-heading" id={id}><span className="ux-hand">{text(label, locale)}</span><h2>{text(title, locale)}</h2></div>; }
export function ContactSection({ basePath, locale = 'zh' }: SiteTemplatePageProps) {
    const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
    async function copyEmail() { try {
        await navigator.clipboard.writeText(brand.email);
        setStatus('copied');
    }
    catch (error) {
        console.error('[uiuxfolio:clipboard] Copy failed', error);
        setStatus('error');
    } }
    return <section className="ux-contact ux-grid-bg" id="connect"><div className="ux-container"><h2 className="ux-contact-lead">{text(home.contactLead, locale)}</h2><div className="ux-contact-content"><div className="ux-contact-title"><Heading label={home.contactLabel} title={home.contact} locale={locale}/><img src={homeImages[49]} alt=""/></div><div className="ux-contact-row"><div><Link className="ux-pill ux-primary" href={`${basePath}/contact`}>{text(home.book, locale)} <span aria-hidden="true">↗</span></Link><p>{text(home.bookBody, locale)}</p></div><div><span className="ux-muted">{locale === 'zh' ? '了解我的工作' : 'Explore my work'}</span><div className="ux-socials"><Link href={`${basePath}/#works`}>{locale === 'zh' ? '作品集' : 'Portfolio'} ↗</Link><Link href={`${basePath}/resume`}>{locale === 'zh' ? '设计履历' : 'Resume'} ↗</Link></div></div></div><div className="ux-email"><span className="ux-hand">{text(home.emailLabel, locale)}</span><button onClick={() => void copyEmail()}>{brand.email}<span aria-hidden="true">↗</span></button><p role="status">{status === 'copied' ? (locale === 'zh' ? '邮箱已复制' : 'Email copied') : status === 'error' ? (locale === 'zh' ? '复制失败，请手动选取上方邮箱。' : 'Copy failed. Please select the email above manually.') : '\u00a0'}</p></div></div></div></section>;
}
