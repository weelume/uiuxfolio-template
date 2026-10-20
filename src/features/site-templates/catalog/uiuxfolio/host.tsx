'use client';
import { createContext, useContext, type ReactNode } from 'react';
import type { TemplateLocale } from '../../types';
export interface UIUXfolioHostOptions {
    brandName?: Record<TemplateLocale, string>;
    logo?: string;
    lightLogo?: string;
    marketplaceHref?: string;
    marketplaceLabel?: Record<TemplateLocale, string>;
    marketplaceAriaLabel?: Record<TemplateLocale, string>;
    filing?: ReactNode;
}
const Context = createContext<UIUXfolioHostOptions>({});
/** 由消费方注入品牌和市场能力，独立工程不感知消费方路径。 */
export function UIUXfolioHostProvider({ children, ...options }: UIUXfolioHostOptions & {
    children: ReactNode;
}) { return <Context.Provider value={options}>{children}</Context.Provider>; }
export function useUIUXfolioHost() { return useContext(Context); }
