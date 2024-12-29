import{p as w}from"./chunk-K2ZEYYM2-DFScYyX5.js";import{p as B}from"./gitGraph-YCYPL57B-5MQDGNWY-BK-J1koz.js";import{ar as S,s as F,g as z,q as P,t as T,c as W,d as D,_ as n,l as v,as as x,at as _,y as A,aT as E,m as N}from"./md-DGt43xUX.js";import"./chunk-TGZYFRKZ-DrRbfyJY.js";import"./index-CyircV-V.js";import"./modules/vue-wjw_P99p.js";import"./modules/shiki-B9PZdNSg.js";import"./lz-string-k1fGEK9m.js";import"./modules/file-saver-CsNJ2AjR.js";import"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CpUX4N93.js";import"./modules/unplugin-icons-BLpBeNrp.js";import"./slidev/context-tGcWwhHB.js";import"./slidev/default-DwP3nA4H.js";var C={packet:[]},h=structuredClone(C),L=S.packet,Y=n(()=>{const t=x({...L,..._().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),I=n(()=>h.packet,"getPacket"),M=n(t=>{t.length>0&&h.packet.push(t)},"pushWord"),O=n(()=>{A(),h=structuredClone(C)},"clear"),u={pushWord:M,getPacket:I,getConfig:Y,clear:O,setAccTitle:F,getAccTitle:z,setDiagramTitle:P,getDiagramTitle:T,getAccDescription:W,setAccDescription:D},q=1e4,G=n(t=>{w(t,u);let e=-1,o=[],s=1;const{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,v.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=i+1&&u.getPacket().length<q;){const[m,c]=H({start:a,end:r,label:p},s,i);if(o.push(m),m.end+1===s*i&&(u.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),H=n((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),K={parse:n(async t=>{const e=await B("packet",t);v.debug(e),G(e)},"parse")},R=n((t,e,o,s)=>{const i=s.db,a=i.getConfig(),{rowHeight:r,paddingY:p,bitWidth:m,bitsPerRow:c}=a,b=i.getPacket(),l=i.getDiagramTitle(),g=r+p,d=g*(b.length+1)-(l?0:r),k=m*c+2,f=E(e);f.attr("viewbox",`0 0 ${k} ${d}`),N(f,d,k,a.useMaxWidth);for(const[y,$]of b.entries())U(f,$,y,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=n((t,e,o,{rowHeight:s,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:m})=>{const c=t.append("g"),b=o*(s+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-i;if(c.append("rect").attr("x",g).attr("y",b).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",b+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!m)continue;const k=l.end===l.start,f=b-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=n(({packet:t}={})=>{const e=x(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),dt={parser:K,db:u,renderer:X,styles:J};export{dt as diagram};
