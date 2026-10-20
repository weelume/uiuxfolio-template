'use client';
import { useRef, useState } from 'react';
import { homeImages } from '../assets';
export function Gallery({ locale }: {
    locale: 'zh' | 'en';
}) {
    const dialog = useRef<HTMLDialogElement>(null), [index, setIndex] = useState(0);
    const images = homeImages.slice(26, 31);
    if (images.length === 0) return null;
    function show(n: number) { setIndex(n); dialog.current?.showModal(); }
    return <><div className="ux-gallery">{images.map((src, n) => <button key={src} onClick={() => show(n)} aria-label={locale === 'zh' ? `查看设计作品 ${n + 1}` : `View design ${n + 1}`}><img src={src} alt={locale === 'zh' ? `视觉与品牌设计 ${n + 1}` : `Visual and brand design ${n + 1}`} loading="lazy"/><span>{n === 1 ? (locale === 'zh' ? '品牌设计' : 'Branding') : 'UI/UX'} <span aria-hidden="true">↗</span></span></button>)}</div><dialog ref={dialog} className="ux-lightbox" aria-label={locale === 'zh' ? '作品预览' : 'Design preview'} onClick={event => { if (event.target === event.currentTarget)
        dialog.current?.close(); }}><button className="ux-lightbox-close" onClick={() => dialog.current?.close()} autoFocus aria-label={locale === 'zh' ? '关闭预览' : 'Close preview'}>✕</button><img src={images[index]} alt={locale === 'zh' ? `设计作品 ${index + 1}` : `Design ${index + 1}`}/><div className="ux-carousel-controls"><button disabled={index === 0} onClick={() => setIndex(index - 1)} aria-label={locale === 'zh' ? '上一张' : 'Previous image'}>←</button><span>{index + 1} / {images.length}</span><button disabled={index === images.length - 1} onClick={() => setIndex(index + 1)} aria-label={locale === 'zh' ? '下一张' : 'Next image'}>→</button></div></dialog></>;
}
