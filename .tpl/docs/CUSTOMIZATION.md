# 修改指南

1. 换品牌：编辑 config/brand.ts 的双语名称、设计师名称、邮箱、Logo 与年份，并更新市场信息。
2. 换内容：编辑 content.ts 与 data.ts，成对维护 zh/en。案例素材映射位于 assets.ts，增删项目时同步 meta.ts 和 .tpl/template.json。
3. 换主题：先改 tokens.css，布局特殊尺寸在 theme.css；三端检查 1440、834、390 与窄屏 320。
4. 增页：增加 pages 组件、meta 注册、市场 pages；保持 basePath 链接与语言切换。
5. 换素材：运行图放 public/templates/uiuxfolio，展示图放 .tpl/assets；同步 sources.json 与 LICENSE.md。

允许自由修改源码；上述入口不构成白名单。使用原生 Next Link，不新增依赖和追踪服务。更改后执行对应类型检查、lint 和受影响页面验证。

页面滚动条由 `src/features/site-templates/shared/PageScrollbar.tsx` 同步文档位置，Shell 接入。颜色修改 `tokens.css` 的 `--ux-scroll-thumb`、`--ux-scroll-active`、`--ux-scroll-track`；宽度、自动显隐和弹窗互斥样式在 `theme.css`。滚动过程中显示细滑块，空闲淡出；不增加页面滚动容器，保留原生滚轮与触摸。
