import{v as u}from"./vod-DnKTApka.js";import{h as C}from"./artConst-5BkjI0q3.js";import{_ as k,u as b,h as x,r as d,c as p,f as y,j as n,w as l,o as r,e as _,F as g,l as h,m as f}from"./app-DOxSLjDz.js";import"./commonjsHelpers-Cpj98o6Y.js";const z={__name:"swdj.html",setup(A){const e=b("vod-swdj",{src:"",vodsn:[],vodyl:[],PlayList:[]});x(async()=>{const o=await u.find({name:"snzy-54"}),t=await u.find({name:"ylzy-54"});e.value.vodsn=o.data,e.value.vodyl=t.data,v(0)});const v=o=>{const{vodsn:t}=e.value;e.value.PlayList=t[o].play_list,e.value.src=t[o].play_list[0].url},w=o=>{const{vodyl:t}=e.value;e.value.PlayList=t,e.value.src=t[o].url};return(o,t)=>{const T=d("ArtPlayer"),m=d("SiteInfo"),j=d("Tabs");return r(),p("div",null,[y(T,{src:n(e).src,config:n(C)(n(e).PlayList)},null,8,["src","config"]),y(j,{id:"2",data:[{id:"索尼资源"},{id:"鱼乐资源"}],active:0},{title0:l(({value:i,isActive:s})=>[_("索尼资源")]),title1:l(({value:i,isActive:s})=>[_("鱼乐资源")]),tab0:l(({value:i,isActive:s})=>[(r(!0),p(g,null,h(n(e).vodsn,(a,c)=>(r(),f(m,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:P=>v(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:s})=>[(r(!0),p(g,null,h(n(e).vodyl,(a,c)=>(r(),f(m,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:P=>w(c)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},S=k(z,[["__file","swdj.html.vue"]]),V=JSON.parse('{"path":"/vod/duanju/swdj.html","title":"爽文短剧","lang":"zh-CN","frontmatter":{"title":"爽文短剧","icon":"file-video","date":"2020-01-01T00:00:00.000Z","order":1,"category":["影视点播"],"tag":["短剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/duanju/swdj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"爽文短剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T10:00:09.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"短剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T10:00:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"爽文短剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T10:00:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1717063209000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":8}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"vod/duanju/swdj.md","localizedDate":"2020年1月1日","excerpt":""}');export{S as comp,V as data};
