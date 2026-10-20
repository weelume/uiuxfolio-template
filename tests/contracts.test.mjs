import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile,readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
const root=new URL('../',import.meta.url)
test('运行包只能使用本模板本地素材',async()=>{
 const groups=await readFile(new URL('src/features/site-templates/catalog/uiuxfolio/assets.ts',root),'utf8')
 assert.ok(!/https?:\/\//.test(groups))
 const manifest=JSON.parse(await readFile(new URL('public/templates/uiuxfolio/sources.json',root),'utf8'))
 for(const image of manifest.images){const bytes=await readFile(new URL('public/templates/uiuxfolio/images/'+image.name,root));assert.equal(bytes.length,image.bytes)}
})
test('市场页面完整且双语路由唯一',async()=>{
 const meta=JSON.parse(await readFile(new URL('.tpl/template.json',root),'utf8'))
 const pages=meta.surfaces[0].pages
 assert.equal(pages.length,12);assert.equal(new Set(pages.map(page=>page.slug)).size,12)
 for(const slug of ['','voos','credroad','suplan','placever','nad','nava','contact','resume','404','privacy-policy','terms-of-service'])assert.ok(pages.some(page=>page.slug===slug&&page.localizedTitles.en))
 assert.equal(meta.listed,false);assert.equal(meta.license.redistributionAllowed,false)
})
test('独立源码没有宿主工程绝对路径或专属品牌',async()=>{
 async function visit(directory){for(const item of await readdir(directory,{withFileTypes:true})){const path=join(directory,item.name);if(item.isDirectory())await visit(path);else{const content=await readFile(path,'utf8');assert.ok(!/D:[/\\]code[/\\]/i.test(content),path)}}}
 await visit(fileURLToPath(new URL('src',root)))
})
