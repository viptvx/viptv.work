import{p as g,H as h,a as T}from"./dexie-ClugUn6X.js";import{v as P}from"./vod-CdYXj3KN.js";import{h as b,u as k,i as w,r,o as n,c,b as i,k as s,w as p,e as x,F as C,l as N,m as Z}from"./app-BqQydeno.js";import{_ as z}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./hls.min-DFLlIjNj.js";import"./commonjsHelpers-Cpj98o6Y.js";const A=b({__name:"ndcy.html",setup(H){const t=k("vod-ndcy",{src:"",vodyl:[],PlayList:[]}),l=e=>{const{vodyl:o}=t.value;t.value.PlayList=o,t.value.src=o[e].url};w(async()=>{const e=await P.find({name:"ylzy-ndcy"});t.value.vodyl=e.data,l(0)});const d={poster:g,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:h},plugins:[T({autoNext:!0,playlist:t.value.PlayList})]};return(e,o)=>{const m=r("ArtPlayer"),u=r("SiteInfo"),y=r("Tabs");return n(),c("div",null,[i(m,{src:s(t).src,config:d},null,8,["src"]),i(y,{id:"2",data:[{id:"鱼乐资源"}],active:0},{title0:p(({value:v,isActive:_})=>[x("鱼乐资源")]),tab0:p(({value:v,isActive:_})=>[(n(!0),c(C,null,N(s(t).vodyl,(a,f)=>(n(),Z(u,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:j=>l(f)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),F=z(A,[["__file","ndcy.html.vue"]]),D=JSON.parse('{"path":"/vod/duanju/ndcy.html","title":"年代穿越","lang":"zh-CN","frontmatter":{"title":"年代穿越","icon":"file-video","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["短剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/duanju/ndcy.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"年代穿越"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T12:19:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"短剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T12:19:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"年代穿越\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T12:19:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.46,"words":138},"filePathRelative":"vod/duanju/ndcy.md","localizedDate":"2020年1月1日","excerpt":""}');export{F as comp,D as data};
