import{v as u}from"./vod-DnKTApka.js";import{h as C}from"./artConst-5BkjI0q3.js";import{_ as b,u as k,h as x,r as p,c as d,f as y,j as n,w as l,o as r,e as g,F as _,l as h,m as z}from"./app-DOxSLjDz.js";import"./commonjsHelpers-Cpj98o6Y.js";const A={__name:"gtzy.html",setup(Z){const t=k("vod-gtzy",{src:"",vodsn:[],vodlz:[],PlayList:[]});x(async()=>{const e=await u.find({name:"snzy-27"}),o=await u.find({name:"lzzy-26"});t.value.vodsn=e.data,t.value.vodlz=o.data,m(0)});const m=e=>{const{vodsn:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url},f=e=>{const{vodlz:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url};return(e,o)=>{const T=p("ArtPlayer"),v=p("SiteInfo"),w=p("Tabs");return r(),d("div",null,[y(T,{src:n(t).src,config:n(C)(n(t).PlayList)},null,8,["src","config"]),y(w,{id:"2",data:[{id:"索尼资源"},{id:"量子资源"}],active:0},{title0:l(({value:i,isActive:s})=>[g("索尼资源")]),title1:l(({value:i,isActive:s})=>[g("量子资源")]),tab0:l(({value:i,isActive:s})=>[(r(!0),d(_,null,h(n(t).vodsn,(a,c)=>(r(),z(v,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:P=>m(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:s})=>[(r(!0),d(_,null,h(n(t).vodlz,(a,c)=>(r(),z(v,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:P=>f(c)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},V=b(A,[["__file","gtzy.html.vue"]]),j=JSON.parse('{"path":"/vod/zongyi/gtzy.html","title":"港台综艺","lang":"zh-CN","frontmatter":{"title":"港台综艺","icon":"star","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["港台综艺"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/zongyi/gtzy.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"港台综艺"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T10:00:09.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"港台综艺"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T10:00:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"港台综艺\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T10:00:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1717063209000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":8}]},"readingTime":{"minutes":0.55,"words":164},"filePathRelative":"vod/zongyi/gtzy.md","localizedDate":"2020年1月1日","excerpt":""}');export{V as comp,j as data};
