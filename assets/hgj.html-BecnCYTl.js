import{v as d}from"./vod-dCtAv8TR.js";import{h as k}from"./artConst-D55RR47h.js";import{_ as x,u as b,h as j,r as u,c as v,a as w,w as l,o as n,e as m,F as _,i as g,j as h}from"./app-Bk2aM6Ya.js";import"./commonjsHelpers-Cpj98o6Y.js";const z={__name:"hgj.html",setup(C,{expose:f}){f();const e=b("vod-hgj",{src:"",a:[],b:[],c:[],p:[]});j(async()=>{e.value.a=(await d.find({name:"lzzy-15"})).data,e.value.b=(await d.find({name:"bfzy-34"})).data,e.value.c=(await d.find({name:"yzzy-14"})).data,t(0)});const t=a=>{const{a:r}=e.value;e.value.p=r[a].play_list,e.value.src=r[a].play_list[0].url},p={state:e,a:t,b:a=>{const{b:r}=e.value;e.value.p=r[a].play_list,e.value.src=r[a].play_list[0].url},c:a=>{const{c:r}=e.value;e.value.p=r[a].play_list,e.value.src=r[a].play_list[0].url},get vod(){return d},get hlsConfig(){return k},get useStorage(){return b},onMounted:j};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function P(C,f,e,t,T,A){const p=u("ArtPlayer"),a=u("SiteInfo"),r=u("Tabs");return n(),v("div",null,[w(p,{src:t.state.src,config:t.hlsConfig(t.state.p)},null,8,["src","config"]),w(r,{id:"2",data:[{id:"vod-hgj-a"},{id:"vod-hgj-b"},{id:"vod-hgj-c"}],active:0,"tab-id":"vod-hgj"},{title0:l(({value:i,isActive:c})=>[m("量子资源")]),title1:l(({value:i,isActive:c})=>[m("暴风资源")]),title2:l(({value:i,isActive:c})=>[m("优质资源")]),tab0:l(({value:i,isActive:c})=>[(n(!0),v(_,null,g(t.state.a,(o,s)=>(n(),h(a,{name:o.vod_name,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:y=>t.a(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:c})=>[(n(!0),v(_,null,g(t.state.b,(o,s)=>(n(),h(a,{name:o.vod_name,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:y=>t.b(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab2:l(({value:i,isActive:c})=>[(n(!0),v(_,null,g(t.state.c,(o,s)=>(n(),h(a,{name:o.vod_name,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:y=>t.c(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}const V=x(z,[["render",P],["__file","hgj.html.vue"]]),B=JSON.parse('{"path":"/vod/tvb/hgj.html","title":"韩国剧","lang":"zh-CN","frontmatter":{"title":"韩国剧","icon":"clone","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["韩国剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/tvb/hgj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"韩国剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T07:22:05.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"韩国剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-01T07:22:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"韩国剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-01T07:22:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1717226525000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":9}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"vod/tvb/hgj.md","localizedDate":"2020年1月1日","excerpt":""}');export{V as comp,B as data};
