import{p as h,H as x,a as T}from"./artConst-CoBZaXXQ.js";import{v as P}from"./vod-2EnksLg-.js";import{h as w,u as C,i as b,r,o as n,c as i,f as s,k as c,w as p,d as k,F as N,l as Z,m as A}from"./app-BuQU_c-D.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const d="suonizy-ndxy",j=w({__name:"ndxy.html",setup(z){const t=C(d,{src:"",vod:[],PlayList:[]});b(async()=>{const{data:e}=await P.find({name:d});t.value.vod=e,l(0)});const l=e=>{const{vod:o}=t.value;t.value.PlayList=o[e].play_list,t.value.tip=o[e].vod_content,t.value.src=o[e].play_list[0].url},m={poster:h,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:x},plugins:[T({autoNext:!0,playlist:t.value.PlayList})]};return(e,o)=>{const u=r("ArtPlayer"),v=r("SiteInfo"),y=r("Tabs");return n(),i("div",null,[s(u,{src:c(t).src,config:m},null,8,["src"]),s(y,{id:"2",data:[{id:"量子资源"}],active:0},{title0:p(({value:_,isActive:f})=>[k("量子资源")]),tab0:p(({value:_,isActive:f})=>[(n(!0),i(N,null,Z(c(t).vod,(a,g)=>(n(),A(v,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:I=>l(g)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),D=H(j,[["__file","ndxy.html.vue"]]),E=JSON.parse('{"path":"/vod/duanju/ndxy.html","title":"脑洞悬疑","lang":"zh-CN","frontmatter":{"title":"脑洞悬疑","icon":"file-video","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["短剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/duanju/ndxy.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"脑洞悬疑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T11:10:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"短剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-14T11:10:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脑洞悬疑\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-14T11:10:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715685040000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"vod/duanju/ndxy.md","localizedDate":"2020年1月1日","excerpt":""}');export{D as comp,E as data};
