import{v as u}from"./vod-DnKTApka.js";import{h as T}from"./artConst-5BkjI0q3.js";import{_ as w,u as j,h as C,r as p,c as d,f as _,j as r,w as l,o as n,e as h,F as f,l as g,m as y}from"./app-DOxSLjDz.js";import"./commonjsHelpers-Cpj98o6Y.js";const P={__name:"hkj.html",setup(A){const e=j("vod-hkj",{src:"",vodlz:[],vodbf:[],PlayList:[]});C(async()=>{const o=await u.find({name:"lzzy-14"}),a=await u.find({name:"bfzy-33"});e.value.vodlz=o.data,e.value.vodbf=a.data,m(0)});const m=o=>{const{vodlz:a}=e.value;e.value.PlayList=a[o].play_list,e.value.src=a[o].play_list[0].url};return(o,a)=>{const b=p("ArtPlayer"),v=p("SiteInfo"),k=p("Tabs");return n(),d("div",null,[_(b,{src:r(e).src,config:r(T)(r(e).PlayList)},null,8,["src","config"]),_(k,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:i,isActive:c})=>[h("量子资源")]),title1:l(({value:i,isActive:c})=>[h("暴风资源")]),tab0:l(({value:i,isActive:c})=>[(n(!0),d(f,null,g(r(e).vodlz,(t,s)=>(n(),y(v,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>m(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:c})=>[(n(!0),d(f,null,g(r(e).vodbf,(t,s)=>(n(),y(v,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>o.vodbf(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},M=w(P,[["__file","hkj.html.vue"]]),S=JSON.parse('{"path":"/vod/tvb/hkj.html","title":"香港剧","lang":"zh-CN","frontmatter":{"title":"香港剧","icon":"clone","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["香港剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/tvb/hkj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"香港剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T10:00:09.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"香港剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T10:00:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"香港剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T10:00:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1717063209000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":8}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"vod/tvb/hkj.md","localizedDate":"2020年1月1日","excerpt":""}');export{M as comp,S as data};
