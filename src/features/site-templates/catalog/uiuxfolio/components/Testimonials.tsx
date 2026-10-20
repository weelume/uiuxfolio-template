'use client';
import { useState } from 'react';
import { testimonials, text } from '../content';
import { homeImages } from '../assets';
export function Testimonials({ locale }: {
    locale: 'zh' | 'en';
}) {
    const [index, setIndex] = useState(0);
    if (testimonials.length === 0) return null;
    return <div className="ux-testimonials"><div className="ux-testimonial-window"><div className="ux-testimonial-track" style={{ transform: `translateX(calc(${index} * -1 * (var(--ux-review-width) + 24px)))` }}>{testimonials.map((review, n) => <article className="ux-glass ux-review" key={review.name}><p>“{text(review.quote, locale)}”</p><div><img src={homeImages[41 + n]} alt="" loading="lazy"/><div><strong>{review.name}</strong><span>{text(review.role, locale)}</span></div></div></article>)}</div></div><div className="ux-carousel-controls"><button onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0} aria-label={locale === 'zh' ? '上一条评价' : 'Previous review'}>←</button><span>{index + 1} / {testimonials.length}</span><button onClick={() => setIndex(Math.min(testimonials.length - 1, index + 1))} disabled={index === testimonials.length - 1} aria-label={locale === 'zh' ? '下一条评价' : 'Next review'}>→</button></div></div>;
}
