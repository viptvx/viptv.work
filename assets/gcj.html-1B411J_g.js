import{v as u}from"./vod-DnKTApka.js";import{h as j}from"./artConst-5BkjI0q3.js";import{_ as P,u as C,h as k,r as p,c as d,f as _,j as l,w as n,o as r,e as y,F as g,l as h,m as f}from"./app-DOxSLjDz.js";import"./commonjsHelpers-Cpj98o6Y.js";const x={__name:"gcj.html",setup(A){const t=C("vod-gcj",{src:"",vodlz:[],vodyl:[],PlayList:[]});k(async()=>{const e=await u.find({name:"lzzy-13"}),o=await u.find({name:"ylzy-13"});t.value.vodlz=e.data,t.value.vodyl=o.data,v(0)});const v=e=>{const{vodlz:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url},z=e=>{const{vodyl:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url};return(e,o)=>{const T=p("ArtPlayer"),m=p("SiteInfo"),w=p("Tabs");return r(),d("div",null,[_(T,{src:l(t).src,config:l(j)(l(t).PlayList)},null,8,["src","config"]),_(w,{id:"2",data:[{id:"量子资源"},{id:"鱼乐资源"}],active:0},{title0:n(({value:c,isActive:i})=>[y("量子资源")]),title1:n(({value:c,isActive:i})=>[y("鱼乐资源")]),tab0:n(({value:c,isActive:i})=>[(r(!0),d(g,null,h(l(t).vodlz,(a,s)=>(r(),f(m,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:b=>v(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:n(({value:c,isActive:i})=>[(r(!0),d(g,null,h(l(t).vodyl,(a,s)=>(r(),f(m,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:b=>z(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},S=P(x,[["__file","gcj.html.vue"]]),V=JSON.parse('{"path":"/vod/tvb/gcj.html","title":"国产剧","lang":"zh-CN","frontmatter":{"title":"国产剧","icon":"clone","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["国产剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/tvb/gcj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"国产剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T10:00:09.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"国产剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T10:00:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国产剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T10:00:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1717063209000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":8}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"vod/tvb/gcj.md","localizedDate":"2020年1月1日","excerpt":""}');export{S as comp,V as data};
