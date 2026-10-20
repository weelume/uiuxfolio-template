import assert from 'node:assert/strict'
import {mkdir,writeFile} from 'node:fs/promises'
import {openBrowser,delay} from './lib/browser-cdp.mjs'
import {fileURLToPath} from 'node:url'
const origin=process.env.UIUXFOLIO_ORIGIN||'http://127.0.0.1:43122',base='' 
const output=fileURLToPath(new URL('../.tpl/assets/',import.meta.url))
await mkdir(output,{recursive:true})
const browser=await openBrowser(),report={origin,base,pages:[],interactions:[]}
const routes=['','voos','credroad','suplan','placever','nad','nava','contact','resume','privacy-policy','terms-of-service','404']
async function ready(path){for(let n=0;n<300;n++){if(await browser.evaluate(`location.pathname===${JSON.stringify(path||'/')}&&document.readyState==='complete'&&!!document.querySelector('.ux-footer')&&Object.keys(document.querySelector('.ux-menu')||{}).some(key=>key.startsWith('__reactProps$'))`))return;await delay(100)}throw new Error('Not ready: '+path)}
async function navigate(path){const url=new URL(path||'/',origin);await browser.page('Page.navigate',{url:url.href});await ready(url.pathname)}
async function assets(){return browser.evaluate(`(async()=>{await document.fonts.ready;const result=await Promise.all([...document.images].map(async image=>{const probe=new Image();probe.src=image.currentSrc||image.src;try{await probe.decode();return null}catch{return image.src}}));return result.filter(Boolean)})()`)}
async function screenshot(name){await delay(450);await writeFile(output+'/'+name+'.webp',Buffer.from((await browser.page('Page.captureScreenshot',{format:'webp',quality:86,captureBeyondViewport:false})).data,'base64'))}
try{
 await browser.page('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
 for(const [device,width,height] of (process.env.UIUXFOLIO_INTERACTIONS_ONLY?[]:[['desktop',1440,1000],['tablet',834,1180],['mobile',390,844],['narrow',320,844]])){
  await browser.page('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false})
  for(const locale of ['zh','en'])for(const route of routes){
   const path=base+(locale==='en'?'/en':'')+(route?'/'+route:'')
   await navigate(path)
   const broken=await assets();assert.equal(broken.length,0,JSON.stringify({path,broken}))
   const metrics=await browser.evaluate(`({overflow:document.documentElement.scrollWidth>innerWidth,locale:document.querySelector('.ux-site').dataset.locale,h1:document.querySelector('h1').innerText,nav:getComputedStyle(document.querySelector('.ux-nav')).display,brand:document.querySelector('.ux-brand').innerText,images:document.images.length})`)
   assert.equal(metrics.overflow,false,path+' overflow '+width);assert.equal(metrics.locale,locale)
   report.pages.push({device,width,height,locale,route,...metrics})
   if(device!=='narrow'&&locale==='zh'){
    if(!route){
     await screenshot(device+'-home')
     await browser.evaluate("document.querySelector('#works').scrollIntoView({block:'start',behavior:'instant'})");await screenshot(device+'-works')
     await browser.evaluate("document.querySelector('#connect').scrollIntoView({block:'start',behavior:'instant'})");await screenshot(device+'-contact')
    }
    if(route==='voos')await screenshot(device+'-case')
   }
  }
  console.log('PASS routes',width,report.pages.length)
 }
 await browser.page('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false})
 await navigate(base||'/')
 await browser.evaluate("document.querySelector('.ux-menu').click()");await delay(150)
 assert.equal(await browser.evaluate("document.querySelector('.ux-menu').getAttribute('aria-expanded')"),'true')
 await browser.evaluate("document.querySelector('.ux-nav a').click()");await delay(200)
 assert.equal(await browser.evaluate("document.querySelector('.ux-menu').getAttribute('aria-expanded')"),'false')
 report.interactions.push('移动菜单展开和导航后收起')
 await navigate((base||'/')+'?source=qa#about')
 await browser.evaluate("window.__uxMarker=true;document.querySelector('.ux-language').click()")
 await ready(base+'/en');await delay(200)
 assert.equal(await browser.evaluate('location.search+location.hash'),'?source=qa#about')
 assert.equal(await browser.evaluate('window.__uxMarker'),true)
 await browser.evaluate("document.querySelector('.ux-language').click()");await ready(base||'/')
 assert.equal(await browser.evaluate('location.search+location.hash'),'?source=qa#about')
 report.interactions.push('客户端语言切换保留查询和锚点、无整页刷新')
 await browser.evaluate("document.querySelector('.ux-project-copy a').click()");await ready(base+'/voos')
 assert.equal(await browser.evaluate('window.__uxMarker'),true)
 await browser.evaluate("document.querySelector('.ux-language').click()");await ready(base+'/en/voos')
 report.interactions.push('案例客户端跳转和原页切换语言')
 await navigate(base||'/')
 await browser.evaluate("document.querySelector('.ux-gallery button').click()");await delay(100)
 assert.equal(await browser.evaluate("document.querySelector('dialog').open"),true)
 await browser.evaluate("document.querySelector('dialog .ux-carousel-controls button:last-child').click()")
 assert.equal(await browser.evaluate("document.querySelector('dialog .ux-carousel-controls span').innerText"),'2 / 5')
 await browser.page('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27})
 await browser.page('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await delay(100)
 assert.equal(await browser.evaluate("document.querySelector('dialog').open"),false)
 report.interactions.push('作品画廊打开、切换与 Escape 关闭')
 await browser.evaluate("document.querySelector('.ux-testimonials .ux-carousel-controls button:last-child').click()");await delay(100)
 assert.equal(await browser.evaluate("document.querySelector('.ux-testimonials .ux-carousel-controls span').innerText"),'2 / 6')
 report.interactions.push('评价轮播切换')
 await navigate(base+'/contact')
 const formEventStart=browser.events.length
 assert.equal(await browser.evaluate("document.querySelector('form').checkValidity()"),false)
 await browser.evaluate(`document.querySelector('[name=name]').value='Local QA';document.querySelector('[name=email]').value='qa@example.com';document.querySelector('[name=project]').value='website';document.querySelector('[name=message]').value='Local demonstration validation only.';document.querySelector('button[type=submit]').click()`);await delay(150)
 assert.ok(await browser.evaluate("document.querySelector('.ux-success')?.innerText.includes('未发送')"))
 const sends=browser.events.slice(formEventStart).filter(e=>e.method==='Network.requestWillBeSent'&&['POST','PUT','PATCH'].includes(e.params.request.method));assert.equal(sends.length,0,JSON.stringify(sends.map(e=>e.params.request.url)))
 report.interactions.push('表单必填和格式校验、有明确未发送提示且无写入请求')
 await browser.send('Browser.grantPermissions',{origin,permissions:['clipboardReadWrite','clipboardSanitizedWrite']})
 await browser.evaluate("document.querySelector('.ux-email button').click()");await delay(200)
 assert.ok(await browser.evaluate("document.querySelector('.ux-email [role=status]').innerText.includes('已复制')"))
 report.interactions.push('邮箱复制成功反馈')
 const errors=browser.events.filter(e=>e.method==='Runtime.exceptionThrown'||e.method==='Runtime.consoleAPICalled'&&e.params.type==='error')
 assert.equal(errors.length,0,JSON.stringify(errors))
 report.errors=errors;report.status='passed'
 console.log('PASS interactions',report.interactions)
}catch(error){report.status='failed';report.error=error.stack;throw error}finally{await writeFile(new URL('../.tpl/reports/browser.json',import.meta.url),JSON.stringify(report,null,2));await browser.close()}
