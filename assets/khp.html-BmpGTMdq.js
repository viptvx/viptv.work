import{p as _,H as g,a as k}from"./artConst-CoBZaXXQ.js";import{v as T}from"./vod-2EnksLg-.js";import{h as b,u as P,i as x,j as w,r,o as n,c as l,f as p,k as s,w as c,d as C,F as N,l as Z,m as z}from"./app-BuQU_c-D.js";import{_ as A}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const H=b({__name:"khp.html",setup(L){const t=P("vod-khp",{src:"",vodbf:[],PlayList:[]});x(()=>{w(async()=>{const e=await T.find({name:"bfzy-khp"});t.value.vodbf=e.data,i(0)})});const i=e=>{const{vodbf:o}=t.value;t.value.PlayList=o,t.value.src=o[e].url},m={poster:_,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:g},plugins:[k({autoNext:!0,playlist:t.value.PlayList})]};return(e,o)=>{const d=r("ArtPlayer"),u=r("SiteInfo"),v=r("Tabs");return n(),l("div",null,[p(d,{src:s(t).src,config:m},null,8,["src"]),p(v,{id:"2",data:[{id:"暴风资源"}],active:0},{title0:c(({value:f,isActive:h})=>[C("暴风资源")]),tab0:c(({value:f,isActive:h})=>[(n(!0),l(N,null,Z(s(t).vodbf,(a,y)=>(n(),z(u,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:M=>i(y)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),D=A(H,[["__file","khp.html.vue"]]),E=JSON.parse('{"path":"/vod/movie/khp.html","title":"科幻片","lang":"zh-CN","frontmatter":{"title":"科幻片","icon":"photo-film","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["科幻"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/movie/khp.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"科幻片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T11:10:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"科幻"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-14T11:10:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"科幻片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-14T11:10:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715685040000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":0.46,"words":138},"filePathRelative":"vod/movie/khp.md","localizedDate":"2020年1月1日","excerpt":""}');export{D as comp,E as data};
