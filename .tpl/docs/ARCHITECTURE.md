# 架构

React / Next.js App Router，TypeScript strict。src/app/[[...slug]]/page.tsx 解析语言和页面，meta.ts 注册可加载页面。功能模块位于 src/features/site-templates/catalog/uiuxfolio。

config/brand.ts 集中品牌、联系、版权。content.ts 保存双语区块文案，data.ts 保存六个案例，assets.ts 映射本地参考图像。tokens.css 定义颜色、字体、圆角、间距和字号；theme.css 消费令牌组织响应式。components/Shell.tsx 负责导航与页脚，Gallery、Testimonials、ProjectArtwork 各有独立职责；pages 组合页面。host.tsx 提供消费方可选注入。没有服务端业务、数据库或异步任务。

页面滚动条由 `src/features/site-templates/shared/PageScrollbar.tsx` 同步文档位置，Shell 接入。颜色修改 `tokens.css` 的 `--ux-scroll-thumb`、`--ux-scroll-active`、`--ux-scroll-track`；宽度、自动显隐和弹窗互斥样式在 `theme.css`。滚动过程中显示细滑块，空闲淡出；不增加页面滚动容器，保留原生滚轮与触摸。
