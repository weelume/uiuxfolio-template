import type { ReactNode } from 'react';
import './globals.css';
import { brand } from '../features/site-templates/catalog/uiuxfolio/config/brand';
export const metadata = { title: brand.name.en, description: 'UI/UX designer portfolio — selected work, process and experiences.' };
export default function RootLayout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN"><body>{children}</body></html>; }
