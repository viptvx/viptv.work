import{p as C,H as k,a as x}from"./dexie-ClugUn6X.js";import{v as u}from"./vod-CdYXj3KN.js";import{h as A,u as N,i as Z,r as c,o as r,c as p,b as v,k as d,w as l,e as _,F as y,l as f,m as h}from"./app-BqQydeno.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./hls.min-DFLlIjNj.js";import"./commonjsHelpers-Cpj98o6Y.js";const L=A({__name:"hwdm.html",setup(M){const e=N("vod-hwdm",{src:"",vodlz:[],vodbf:[],PlayList:[]});Z(async()=>{const t=await u.find({name:"lzcaiji-hwdm"}),a=await u.find({name:"bfzy-hwdm"});e.value.vodlz=t.data,e.value.vodbf=a.data,vodsnurl(0)});const g=t=>{const{vodlz:a}=e.value;e.value.PlayList=a[t].play_list,e.value.src=a[t].play_list[0].url},w=t=>{const{vodbf:a}=e.value;e.value.PlayList=a[t].play_list,e.value.src=a[t].play_list[0].url},b={poster:C,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:k},plugins:[x({autoNext:!0,playlist:e.value.PlayList})]};return(t,a)=>{const T=c("ArtPlayer"),m=c("SiteInfo"),z=c("Tabs");return r(),p("div",null,[v(T,{src:d(e).src,config:b},null,8,["src"]),v(z,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:n,isActive:i})=>[_("量子资源")]),title1:l(({value:n,isActive:i})=>[_("暴风资源")]),tab0:l(({value:n,isActive:i})=>[(r(!0),p(y,null,f(d(e).vodlz,(o,s)=>(r(),h(m,{name:o.vod_name,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:P=>g(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:n,isActive:i})=>[(r(!0),p(y,null,f(d(e).vodbf,(o,s)=>(r(),h(m,{name:o.vod_name,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:P=>w(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),$=H(L,[["__file","hwdm.html.vue"]]),D=JSON.parse('{"path":"/vod/dongman/hwdm.html","title":"海外动漫","lang":"zh-CN","frontmatter":{"title":"海外动漫","icon":"person-falling-burst","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["动漫"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/dongman/hwdm.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"海外动漫"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T12:19:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"动漫"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T12:19:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"海外动漫\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T12:19:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"vod/dongman/hwdm.md","localizedDate":"2020年1月1日","excerpt":""}');export{$ as comp,D as data};
