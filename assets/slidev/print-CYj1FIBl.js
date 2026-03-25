import{f as m,$ as f,y as u,o as i,e as r,g as e,t as a,F as h,Z as g,a0 as v,d as x,j as b}from"../modules/vue-C6IPDUIV.js";import{u as N,j as y,c as d,b as k}from"../index-ZdZX3kN-.js";import{N as w}from"./NoteDisplay-BdrYywId.js";import"../modules/shiki-abW-5elt.js";const S=m({__name:"print",setup(p,{expose:n}){n();const{slides:l,total:o}=N();f(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${d.title}`});const _=u(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:l,total:o,slidesWithNote:_,get configs(){return d},NoteDisplay:w};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),j={id:"page-root"},D={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},W={class:"opacity-50"},C={key:0,class:"border-main mb-8"};function F(p,n,l,o,_,c){return i(),r("div",j,[e("div",D,[e("div",L,[e("h1",T,a(o.configs.title),1),e("div",V,a(new Date().toLocaleString()),1)]),(i(!0),r(h,null,g(o.slidesWithNote,(t,s)=>(i(),r("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",W,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),r("hr",C)):b("v-if",!0)]))),128))])])}const O=k(S,[["render",F],["__file","/home/runner/work/fop_2026_slides/fop_2026_slides/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{O as default};
