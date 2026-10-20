# 验证

执行 pnpm typecheck、pnpm lint、pnpm test、pnpm build。启动 pnpm start，检查中英文全路由、图片、字体、320/390/834/1440 宽度溢出。关键交互包含手机菜单、保留查询和锚点的语言切换、六个案例、画廊开关及 Escape、评价切换、联系表单本地校验、邮箱复制和履历打印。

真实截图覆盖首页、作品区、案例详情、联系区，每端四张。源码更改后仅验证受影响范围，不能沿用历史结果宣称本次通过。待真实 Git 地址提供后执行 pnpm tpl:check；gitUrl=null 必须明确报告失败。

启动本工程预览服务后可运行 `pnpm run verify:browser` 重做四档宽度、双语页面与交互检查并更新真实截图；浏览器由 CHROME_PATH 指定，默认查找本机 Chrome。仅访问本地预览，不自动启动或安装浏览器。
