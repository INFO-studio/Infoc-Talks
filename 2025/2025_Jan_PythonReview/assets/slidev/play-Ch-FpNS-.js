const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-5LMHMJ39.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CLmc-VO1.js","assets/modules/vue-D59AqWO0.js","assets/modules/shiki-BKZguJLB.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-CTPKSCLl.js","assets/index-CzsppdXD.js","assets/index-C3NxvDvF.css","assets/SlideWrapper-DchzhrKm.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-x9ie_QBc.js","assets/slidev/shortcuts-1v8bil9k.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-XhdzSwWu.js","assets/slidev/context-Bw_wkkl1.js","assets/modules/unplugin-icons-BMeJBri5.js","assets/shortcuts-DHgzE6mW.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{d as g,ad as D,o,c,B as e,b as _,e as a,f as P,i as C,g as n,al as B,z as E,k as S,ac as N,am as $,Q as k,l as m,F as z,h as R,t as I}from"../modules/vue-D59AqWO0.js";import{c as T,a as L}from"./SlideWrapper-CTPKSCLl.js";import{q as b,a as M,v as W,w as x,x as h,d as w,y as A,k as V,z as H}from"../index-CzsppdXD.js";import{b as O,G as U,c as F,u as G,r as j,a as q,S as J,_ as K,o as Q}from"./shortcuts-1v8bil9k.js";import{b as X}from"../modules/unplugin-icons-BMeJBri5.js";import"../modules/shiki-BKZguJLB.js";import"./title-renderer.md_vue_type_script_setup_true_lang-XhdzSwWu.js";import"./context-Bw_wkkl1.js";import"./IconButton.vue_vue_type_script_setup_true_lang-x9ie_QBc.js";const Y="/Infoc-Talks/2025/2025_Jan_PythonReview/assets/logo-BYkHSa_O.png",Z={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ee=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:u}){const d=f,s=D(d,"modelValue",u);function i(){s.value=!1}return(p,t)=>(o(),c(B,null,[e(s)?(o(),_("div",Z,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:t[0]||(t[0]=r=>i())}),a("div",{class:C(["m-auto rounded-md bg-main shadow",d.class]),"dark:border":"~ main"},[P(p.$slots,"default")],2)])):n("v-if",!0)],1024))}}),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},oe=["innerHTML"],se=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:u}){const s=D(f,"modelValue",u),i=E(()=>typeof b.info=="string");return(p,t)=>(o(),c(ee,{modelValue:e(s),"onUpdate:modelValue":t[0]||(t[0]=r=>$(s)?s.value=r:null),class:"px-6 py-4"},{default:S(()=>[a("div",te,[i.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,oe)):n("v-if",!0),t[1]||(t[1]=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:Y,alt:"Slidev logo"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),N("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ae=g({__name:"Controls",setup(f){const{isEmbedded:u}=M(),d=!b.drawings.presenterOnly&&!u.value,l=k();d&&W(()=>import("./DrawingControls-5LMHMJ39.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(p=>l.value=p.default);const s=k(),i=k();return(p,t)=>(o(),_(z,null,[l.value?(o(),c(e(l),{key:0})):n("v-if",!0),m(O),m(U),s.value?(o(),c(e(s),{key:1})):n("v-if",!0),i.value?(o(),c(e(i),{key:2,modelValue:e(x),"onUpdate:modelValue":t[0]||(t[0]=r=>$(x)?x.value=r:null)},null,8,["modelValue"])):n("v-if",!0),e(b).info?(o(),c(se,{key:3,modelValue:e(h),"onUpdate:modelValue":t[1]||(t[1]=r=>$(h)?h.value=r:null)},null,8,["modelValue"])):n("v-if",!0),m(F)],64))}}),le={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ne=g({__name:"PresenterMouse",setup(f){return(u,d)=>{const l=X;return e(w).cursor?(o(),_("div",le,[m(l,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e(w).cursor.x}%`,top:`${e(w).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),ve=g({__name:"play",setup(f){const{next:u,prev:d,isPrintMode:l}=M(),{isDrawing:s}=T(),i=I();function p(y){var v;V.value||y.button===0&&((v=y.target)==null?void 0:v.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?u():d())}G(i),j(),q();const t=E(()=>A.value||V.value),r=k();return(y,v)=>(o(),_(z,null,[a("div",{id:"page-root",ref_key:"root",ref:i,class:C(["grid",e(H)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(L,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"",onPointerdown:p,onContextmenu:e(Q)},{default:S(()=>[m(J,{"render-context":"slide"}),m(ne)]),controls:S(()=>[e(l)?n("v-if",!0):(o(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[t.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[m(K,{persist:t.value},null,8,["persist"])],2))]),_:1},8,["onContextmenu"]),r.value&&e(V)?(o(),c(e(r),{key:0,resize:!0})):n("v-if",!0)],2),e(l)?n("v-if",!0):(o(),c(ae,{key:0})),v[0]||(v[0]=a("div",{id:"twoslash-container"},null,-1))],64))}});export{ve as default};