import{v as d}from"./vod-dCtAv8TR.js";import{h as x}from"./artConst-D55RR47h.js";import{_ as z,u as y,h as k,r as u,c as v,a as w,w as i,o as n,e as m,F as _,i as g,j as b}from"./app-Bk2aM6Ya.js";import"./commonjsHelpers-Cpj98o6Y.js";const P={__name:"kbp.html",setup(C,{expose:f}){f();const e=y("vod-kbp",{src:"",a:[],b:[],c:[],p:[]});k(async()=>{e.value.a=(await d.find({name:"lzzy-10"})).data,e.value.b=(await d.find({name:"bfzy-23"})).data,e.value.c=(await d.find({name:"yzzy-9"})).data,t(0)});const t=r=>{const{a:o}=e.value;e.value.p=o,e.value.src=o[r].url},s={state:e,a:t,b:r=>{const{b:o}=e.value;e.value.p=o,e.value.src=o[r].url},c:r=>{const{c:o}=e.value;e.value.p=o,e.value.src=o[r].url},get vod(){return d},get hlsConfig(){return x},get useStorage(){return y},onMounted:k};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function S(C,f,e,t,T,A){const s=u("ArtPlayer"),r=u("SiteInfo"),o=u("Tabs");return n(),v("div",null,[w(s,{src:t.state.src,config:t.hlsConfig(t.state.p)},null,8,["src","config"]),w(o,{id:"2",data:[{id:"vod-kbp-a"},{id:"vod-kbp-b"},{id:"vod-kbp-c"}],active:0,"tab-id":"vod-kbp"},{title0:i(({value:l,isActive:c})=>[m("量子资源")]),title1:i(({value:l,isActive:c})=>[m("暴风资源")]),title2:i(({value:l,isActive:c})=>[m("优质资源")]),tab0:i(({value:l,isActive:c})=>[(n(!0),v(_,null,g(t.state.a,(a,p)=>(n(),b(r,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:h=>t.a(p)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:i(({value:l,isActive:c})=>[(n(!0),v(_,null,g(t.state.b,(a,p)=>(n(),b(r,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:h=>t.b(p)},null,8,["name","logo","preview","onClick"]))),256))]),tab2:i(({value:l,isActive:c})=>[(n(!0),v(_,null,g(t.state.c,(a,p)=>(n(),b(r,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:h=>t.c(p)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}const j=z(P,[["render",S],["__file","kbp.html.vue"]]),B=JSON.parse('{"path":"/vod/movie/kbp.html","title":"恐怖片","lang":"zh-CN","frontmatter":{"title":"恐怖片","icon":"film","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["恐怖"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/movie/kbp.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"恐怖片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T07:22:05.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"恐怖"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-01T07:22:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"恐怖片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-01T07:22:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1717226525000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":9}]},"readingTime":{"minutes":0.67,"words":202},"filePathRelative":"vod/movie/kbp.md","localizedDate":"2020年1月1日","excerpt":""}');export{j as comp,B as data};
