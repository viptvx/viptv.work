import{h as g}from"./artConst-5BkjI0q3.js";import{v as h}from"./vod-DnKTApka.js";import{_ as y,u as b,h as T,i as w,r as i,c as l,f as s,j as o,w as p,o as n,e as P,F as k,l as x,m as q}from"./app-DOxSLjDz.js";import"./commonjsHelpers-Cpj98o6Y.js";const C={__name:"taiqiu.html",setup(z){const t=b("vod-taiqiu",{src:"",vodbf:[],PlayList:[]});T(()=>{w(async()=>{const e=await h.find({name:"lzzy-40"});t.value.vodbf=e.data,c(0)})});const c=e=>{const{vodbf:a}=t.value;t.value.PlayList=a,t.value.src=a[e].url};return(e,a)=>{const m=i("ArtPlayer"),d=i("SiteInfo"),u=i("Tabs");return n(),l("div",null,[s(m,{src:o(t).src,config:o(g)(o(t).PlayList)},null,8,["src","config"]),s(u,{id:"2",data:[{id:"量子资源"}],active:0},{title0:p(({value:v,isActive:_})=>[P("量子资源")]),tab0:p(({value:v,isActive:_})=>[(n(!0),l(k,null,x(o(t).vodbf,(r,f)=>(n(),q(d,{name:r.title,desc:"",logo:r.vod_pic,preview:r.vod_pic,url:"",onClick:Z=>c(f)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},S=y(C,[["__file","taiqiu.html.vue"]]),V=JSON.parse('{"path":"/vod/sport/taiqiu.html","title":"台球","lang":"zh-CN","frontmatter":{"title":"台球","icon":"bowling-ball","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["台球"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/sport/taiqiu.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"台球"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T10:00:09.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"台球"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T10:00:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"台球\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T10:00:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1717063209000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":8}]},"readingTime":{"minutes":0.38,"words":114},"filePathRelative":"vod/sport/taiqiu.md","localizedDate":"2020年1月1日","excerpt":""}');export{S as comp,V as data};
