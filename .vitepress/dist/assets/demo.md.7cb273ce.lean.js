import{_ as P,C as l,c as i,H as s,w as n,k as p,Q as z,o as t,F as r,D as d,b as E,t as h,e as H,a as u}from"./chunks/framework.06fa6207.js";const I={data(){return{tab:null,model:null,colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},Z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"demo.md","filePath":"demo.md","lastUpdated":1696843868000}'),U={class:"d-flex fill-height justify-center align-center"},R={class:"text-h2"},G={class:"d-flex fill-height align-center justify-center"},L=p("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[p("h1",{class:"text-h4 font-weight-thin mb-4"}," Vuetify "),p("h4",{class:"subheading"}," Build your application today! ")],-1),J=p("p",null,'VAudioPlayer: () => import("@woodydark/vuetify-audio-player"),',-1),O=z("",6);function Q(W,c,K,M,e,X){const y=l("v-sheet"),v=l("v-carousel-item"),g=l("v-carousel"),f=l("v-icon"),b=l("v-scale-transition"),m=l("v-card"),k=l("v-slide-group-item"),w=l("v-slide-group"),F=l("v-parallax"),x=l("v-breadcrumbs"),_=l("v-tab"),C=l("v-tabs"),V=l("v-img"),A=l("v-col"),T=l("v-row"),B=l("v-container"),D=l("v-window-item"),N=l("v-window"),q=l("v-btn"),j=l("component");return t(),i("div",null,[s(g,{cycle:"",height:"400","hide-delimiter-background":"","show-arrows":"hover"},{default:n(()=>[(t(!0),i(r,null,d(e.slides,(o,a)=>(t(),E(v,{key:a},{default:n(()=>[s(y,{color:e.colors[a],height:"100%"},{default:n(()=>[p("div",U,[p("div",R,h(o)+" Slide ",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1}),s(y,{class:"mx-auto",elevation:"8","max-width":"800"},{default:n(()=>[s(w,{modelValue:e.model,"onUpdate:modelValue":c[0]||(c[0]=o=>e.model=o),class:"pa-4","center-active":"","show-arrows":""},{default:n(()=>[(t(),i(r,null,d(15,o=>s(k,{key:o},{default:n(({isSelected:a,toggle:S})=>[s(m,{color:a?"primary":"grey-lighten-1",class:"ma-4",height:"200",width:"100",onClick:S},{default:n(()=>[p("div",G,[s(b,null,{default:n(()=>[a?(t(),E(f,{key:0,color:"white",size:"48",icon:"mdi-close-circle-outline"})):H("",!0)]),_:2},1024)])]),_:2},1032,["color","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1}),s(F,{src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"},{default:n(()=>[L]),_:1}),s(x,{items:["Foo","Bar","Fizz"]}),s(m,null,{default:n(()=>[s(C,{modelValue:e.tab,"onUpdate:modelValue":c[1]||(c[1]=o=>e.tab=o),color:"deep-purple-accent-4","align-tabs":"center"},{default:n(()=>[s(_,{value:1},{default:n(()=>[u("Landscape")]),_:1}),s(_,{value:2},{default:n(()=>[u("City")]),_:1}),s(_,{value:3},{default:n(()=>[u("Abstract")]),_:1})]),_:1},8,["modelValue"]),s(N,{modelValue:e.tab,"onUpdate:modelValue":c[2]||(c[2]=o=>e.tab=o)},{default:n(()=>[(t(),i(r,null,d(3,o=>s(D,{key:o,value:o},{default:n(()=>[s(B,{fluid:""},{default:n(()=>[s(T,null,{default:n(()=>[(t(),i(r,null,d(6,a=>s(A,{key:a,cols:"12",md:"4"},{default:n(()=>[s(V,{src:`https://picsum.photos/500/300?image=${a*o*5+10}`,"lazy-src":`https://picsum.photos/10/6?image=${a*o*5+10}`,"aspect-ratio":"1"},null,8,["src","lazy-src"])]),_:2},1024)),64))]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1}),J,s(q,{color:"indigo"},{default:n(()=>[u("Here is a button!")]),_:1}),O,s(j,null,{default:n(()=>[(t(),i(r,null,d(3,o=>p("span",null,h(o),1)),64))]),_:1})])}const $=P(I,[["render",Q]]);export{Z as __pageData,$ as default};
