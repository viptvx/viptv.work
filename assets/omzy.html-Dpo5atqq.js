import{p as f,H as h,a as z}from"./artConst-CoBZaXXQ.js";import{v as T}from"./vod-2EnksLg-.js";import{h as P,u as w,i as x,r,o as n,c as i,f as s,k as c,w as p,d as C,F as b,l as k,m as N}from"./app-BuQU_c-D.js";import{_ as Z}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const A=P({__name:"omzy.html",setup(H){const t=w("vod-omzy",{src:"",vodlz:[],PlayList:[]});x(async()=>{const e=await T.find({name:"lzcaiji-omzy"});t.value.vodlz=e.data,l(0)});const l=e=>{const{vodlz:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url},m={poster:f,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:h},plugins:[z({autoNext:!0,playlist:t.value.PlayList})]};return(e,o)=>{const d=r("ArtPlayer"),u=r("SiteInfo"),y=r("Tabs");return n(),i("div",null,[s(d,{src:c(t).src,config:m},null,8,["src"]),s(y,{id:"2",data:[{id:"量子资源"}],active:0},{title0:p(({value:v,isActive:_})=>[C("量子资源")]),tab0:p(({value:v,isActive:_})=>[(n(!0),i(b,null,k(c(t).vodlz,(a,g)=>(n(),N(u,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:L=>l(g)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),F=Z(A,[["__file","omzy.html.vue"]]),D=JSON.parse('{"path":"/vod/zongyi/omzy.html","title":"欧美综艺","lang":"zh-CN","frontmatter":{"title":"欧美综艺","icon":"star","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["综艺"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/zongyi/omzy.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"欧美综艺"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T11:10:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"综艺"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-14T11:10:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"欧美综艺\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-14T11:10:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715685040000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"vod/zongyi/omzy.md","localizedDate":"2020年1月1日","excerpt":""}');export{F as comp,D as data};
