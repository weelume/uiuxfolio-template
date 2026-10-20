'use client';
import { homeImages } from '../assets';
import type { Project } from '../data';
export function ProjectArtwork({ project }: {
    project: Project;
}) {
    return <div className={`ux-artwork ${project.mobile ? 'ux-phones' : 'ux-desktop-art'}`} aria-label={project.name} role="img">{project.hero.map((index, n) => <img key={index} className={`ux-screen ux-screen-${n}`} src={homeImages[index]} alt="" loading="lazy"/>)}</div>;
}
