import{p as w,H as C,a as q}from"./artConst-CoBZaXXQ.js";import{v}from"./vod-2EnksLg-.js";import{h as x,u as A,i as N,j as Z,r as s,o as r,c as p,f,k as m,w as l,d as y,F as _,l as g,m as h}from"./app-BuQU_c-D.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const L=x({__name:"aqp.html",setup(j){const e=A("vod-aqp",{src:"",vodlz:[],vodbf:[],PlayList:[]});N(()=>{Z(async()=>{const o=await v.find({name:"lzcaiji-aqp"}),t=await v.find({name:"bfzy-aqp"});e.value.vodlz=o.data,e.value.vodbf=t.data,d(0)})});const d=o=>{const{vodlz:t}=e.value;e.value.PlayList=t,e.value.src=t[o].url},b=o=>{const{vodbf:t}=e.value;e.value.PlayList=t,e.value.src=t[o].url},T={poster:w,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:C},plugins:[q({autoNext:!0,playlist:e.value.PlayList})]};return(o,t)=>{const z=s("ArtPlayer"),u=s("SiteInfo"),P=s("Tabs");return r(),p("div",null,[f(z,{src:m(e).src,config:T},null,8,["src"]),f(P,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:n,isActive:i})=>[y("量子资源")]),title1:l(({value:n,isActive:i})=>[y("暴风资源")]),tab0:l(({value:n,isActive:i})=>[(r(!0),p(_,null,g(m(e).vodlz,(a,c)=>(r(),h(u,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:k=>d(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:n,isActive:i})=>[(r(!0),p(_,null,g(m(e).vodbf,(a,c)=>(r(),h(u,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:k=>b(c)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),$=H(L,[["__file","aqp.html.vue"]]),D=JSON.parse('{"path":"/vod/movie/aqp.html","title":"爱情片","lang":"zh-CN","frontmatter":{"title":"爱情片","icon":"photo-film","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["爱情"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/movie/aqp.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"爱情片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T11:10:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"爱情"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-14T11:10:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"爱情片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-14T11:10:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715685040000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"vod/movie/aqp.md","localizedDate":"2020年1月1日","excerpt":""}');export{$ as comp,D as data};
