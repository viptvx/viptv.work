import{p as g,H as h,a as x}from"./dexie-ClugUn6X.js";import{v as T}from"./vod-CdYXj3KN.js";import{h as P,u as b,i as w,r,o as n,c as l,b as i,k as c,w as d,e as C,F as k,l as N,m as Z}from"./app-BqQydeno.js";import{_ as z}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./hls.min-DFLlIjNj.js";import"./commonjsHelpers-Cpj98o6Y.js";const A=P({__name:"xdds.html",setup(H){const t=b("vod-xdds",{src:"",vodsn:[],PlayList:[]});w(async()=>{const e=await T.find({name:"suonizy-xdds"});t.value.vodsn=e.data,s(0)});const s=e=>{const{vodsn:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url},p={poster:g,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:h},plugins:[x({autoNext:!0,playlist:t.value.PlayList})]};return(e,o)=>{const m=r("ArtPlayer"),u=r("SiteInfo"),v=r("Tabs");return n(),l("div",null,[i(m,{src:c(t).src,config:p},null,8,["src"]),i(v,{id:"2",data:[{id:"索尼资源"}],active:0},{title0:d(({value:y,isActive:_})=>[C("索尼资源")]),tab0:d(({value:y,isActive:_})=>[(n(!0),l(k,null,N(c(t).vodsn,(a,f)=>(n(),Z(u,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:j=>s(f)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),F=z(A,[["__file","xdds.html.vue"]]),D=JSON.parse('{"path":"/vod/duanju/xdds.html","title":"现代都市","lang":"zh-CN","frontmatter":{"title":"现代都市","icon":"file-video","date":"2020-01-01T00:00:00.000Z","order":1,"category":["影视点播"],"tag":["短剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/duanju/xdds.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"现代都市"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T12:19:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"短剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T12:19:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"现代都市\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T12:19:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.47,"words":142},"filePathRelative":"vod/duanju/xdds.md","localizedDate":"2020年1月1日","excerpt":""}');export{F as comp,D as data};
