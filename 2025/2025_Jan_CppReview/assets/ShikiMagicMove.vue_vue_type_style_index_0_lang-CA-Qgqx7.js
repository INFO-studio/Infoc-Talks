var gt=Object.defineProperty;var mt=(t,e,r)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var z=(t,e,r)=>mt(t,typeof e!="symbol"?e+"":e,r);import{d as I,z as ct,v as N,t as H,L as ht,E as ut,n as K,ai as yt,O as dt,o as bt,b as _t,l as wt,B as P}from"./modules/vue-CzU7UkHL.js";import{q as vt,a as St,ad as At,C as Mt,ae as Ct,af as Et}from"./index-D3A_w0SE.js";import{g as kt}from"./modules/file-saver-CsNJ2AjR.js";import{u as Lt}from"./slidev/context-SrQzDjcU.js";var j={exports:{}};j.exports;var J;function Bt(){return J||(J=1,function(t){var e=function(){var r=String.fromCharCode,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function c(o,a){if(!i[o]){i[o]={};for(var h=0;h<o.length;h++)i[o][o.charAt(h)]=h}return i[o][a]}var f={compressToBase64:function(o){if(o==null)return"";var a=f._compress(o,6,function(h){return s.charAt(h)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:f._decompress(o.length,32,function(a){return c(s,o.charAt(a))})},compressToUTF16:function(o){return o==null?"":f._compress(o,15,function(a){return r(a+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:f._decompress(o.length,16384,function(a){return o.charCodeAt(a)-32})},compressToUint8Array:function(o){for(var a=f.compress(o),h=new Uint8Array(a.length*2),l=0,u=a.length;l<u;l++){var m=a.charCodeAt(l);h[l*2]=m>>>8,h[l*2+1]=m%256}return h},decompressFromUint8Array:function(o){if(o==null)return f.decompress(o);for(var a=new Array(o.length/2),h=0,l=a.length;h<l;h++)a[h]=o[h*2]*256+o[h*2+1];var u=[];return a.forEach(function(m){u.push(r(m))}),f.decompress(u.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":f._compress(o,6,function(a){return n.charAt(a)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),f._decompress(o.length,32,function(a){return c(n,o.charAt(a))}))},compress:function(o){return f._compress(o,16,function(a){return r(a)})},_compress:function(o,a,h){if(o==null)return"";var l,u,m={},p={},d="",M="",S="",_=2,A=3,y=2,w=[],g=0,b=0,v;for(v=0;v<o.length;v+=1)if(d=o.charAt(v),Object.prototype.hasOwnProperty.call(m,d)||(m[d]=A++,p[d]=!0),M=S+d,Object.prototype.hasOwnProperty.call(m,M))S=M;else{if(Object.prototype.hasOwnProperty.call(p,S)){if(S.charCodeAt(0)<256){for(l=0;l<y;l++)g=g<<1,b==a-1?(b=0,w.push(h(g)),g=0):b++;for(u=S.charCodeAt(0),l=0;l<8;l++)g=g<<1|u&1,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=u>>1}else{for(u=1,l=0;l<y;l++)g=g<<1|u,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=0;for(u=S.charCodeAt(0),l=0;l<16;l++)g=g<<1|u&1,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=u>>1}_--,_==0&&(_=Math.pow(2,y),y++),delete p[S]}else for(u=m[S],l=0;l<y;l++)g=g<<1|u&1,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=u>>1;_--,_==0&&(_=Math.pow(2,y),y++),m[M]=A++,S=String(d)}if(S!==""){if(Object.prototype.hasOwnProperty.call(p,S)){if(S.charCodeAt(0)<256){for(l=0;l<y;l++)g=g<<1,b==a-1?(b=0,w.push(h(g)),g=0):b++;for(u=S.charCodeAt(0),l=0;l<8;l++)g=g<<1|u&1,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=u>>1}else{for(u=1,l=0;l<y;l++)g=g<<1|u,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=0;for(u=S.charCodeAt(0),l=0;l<16;l++)g=g<<1|u&1,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=u>>1}_--,_==0&&(_=Math.pow(2,y),y++),delete p[S]}else for(u=m[S],l=0;l<y;l++)g=g<<1|u&1,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=u>>1;_--,_==0&&(_=Math.pow(2,y),y++)}for(u=2,l=0;l<y;l++)g=g<<1|u&1,b==a-1?(b=0,w.push(h(g)),g=0):b++,u=u>>1;for(;;)if(g=g<<1,b==a-1){w.push(h(g));break}else b++;return w.join("")},decompress:function(o){return o==null?"":o==""?null:f._decompress(o.length,32768,function(a){return o.charCodeAt(a)})},_decompress:function(o,a,h){var l=[],u=4,m=4,p=3,d="",M=[],S,_,A,y,w,g,b,v={val:h(0),position:a,index:1};for(S=0;S<3;S+=1)l[S]=S;for(A=0,w=Math.pow(2,2),g=1;g!=w;)y=v.val&v.position,v.position>>=1,v.position==0&&(v.position=a,v.val=h(v.index++)),A|=(y>0?1:0)*g,g<<=1;switch(A){case 0:for(A=0,w=Math.pow(2,8),g=1;g!=w;)y=v.val&v.position,v.position>>=1,v.position==0&&(v.position=a,v.val=h(v.index++)),A|=(y>0?1:0)*g,g<<=1;b=r(A);break;case 1:for(A=0,w=Math.pow(2,16),g=1;g!=w;)y=v.val&v.position,v.position>>=1,v.position==0&&(v.position=a,v.val=h(v.index++)),A|=(y>0?1:0)*g,g<<=1;b=r(A);break;case 2:return""}for(l[3]=b,_=b,M.push(b);;){if(v.index>o)return"";for(A=0,w=Math.pow(2,p),g=1;g!=w;)y=v.val&v.position,v.position>>=1,v.position==0&&(v.position=a,v.val=h(v.index++)),A|=(y>0?1:0)*g,g<<=1;switch(b=A){case 0:for(A=0,w=Math.pow(2,8),g=1;g!=w;)y=v.val&v.position,v.position>>=1,v.position==0&&(v.position=a,v.val=h(v.index++)),A|=(y>0?1:0)*g,g<<=1;l[m++]=r(A),b=m-1,u--;break;case 1:for(A=0,w=Math.pow(2,16),g=1;g!=w;)y=v.val&v.position,v.position>>=1,v.position==0&&(v.position=a,v.val=h(v.index++)),A|=(y>0?1:0)*g,g<<=1;l[m++]=r(A),b=m-1,u--;break;case 2:return M.join("")}if(u==0&&(u=Math.pow(2,p),p++),l[b])d=l[b];else if(b===m)d=_+_.charAt(0);else return null;M.push(d),l[m++]=_+d.charAt(0),u--,_=d,u==0&&(u=Math.pow(2,p),p++)}}};return f}();t!=null?t.exports=e:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return e})}(j)),j.exports}var Tt=Bt();const Rt=kt(Tt),Ot=Object.freeze({diffTimeout:1,diffEditCost:4,matchThreshold:.5,matchDistance:1e3,patchDeleteThreshold:.5,patchMargin:4,matchMaxBits:32});function $t(t){if(t!=null&&t.__resolved)return t;const e={...Ot,...t};return Object.defineProperty(e,"__resolved",{value:!0,enumerable:!1}),e}const B=-1,k=1,E=0;function C(t,e){return[t,e]}function O(t,e,r,s=!0,n){const i=$t(r);typeof n>"u"&&(i.diffTimeout<=0?n=Number.MAX_VALUE:n=new Date().getTime()+i.diffTimeout*1e3);const c=n;if(t==null||e==null)throw new Error("Null input. (diff_main)");if(t===e)return t?[C(E,t)]:[];const f=s;let o=W(t,e);const a=t.substring(0,o);t=t.substring(o),e=e.substring(o),o=F(t,e);const h=t.substring(t.length-o);t=t.substring(0,t.length-o),e=e.substring(0,e.length-o);const l=Pt(t,e,i,f,c);return a&&l.unshift(C(E,a)),h&&l.push(C(E,h)),Z(l),l}function Pt(t,e,r,s,n){let i;if(!t)return[C(k,e)];if(!e)return[C(B,t)];const c=t.length>e.length?t:e,f=t.length>e.length?e:t,o=c.indexOf(f);if(o!==-1)return i=[C(k,c.substring(0,o)),C(E,f),C(k,c.substring(o+f.length))],t.length>e.length&&(i[0][0]=i[2][0]=B),i;if(f.length===1)return[C(B,t),C(k,e)];const a=Ft(t,e,r);if(a){const h=a[0],l=a[1],u=a[2],m=a[3],p=a[4],d=O(h,u,r,s,n),M=O(l,m,r,s,n);return d.concat([C(E,p)],M)}return s&&t.length>100&&e.length>100?Dt(t,e,r,n):zt(t,e,r,n)}function Dt(t,e,r,s){const n=Nt(t,e);t=n.chars1,e=n.chars2;const i=n.lineArray,c=O(t,e,r,!1,s);jt(c,i),xt(c),c.push(C(E,""));let f=0,o=0,a=0,h="",l="";for(;f<c.length;){switch(c[f][0]){case k:a++,l+=c[f][1];break;case B:o++,h+=c[f][1];break;case E:if(o>=1&&a>=1){c.splice(f-o-a,o+a),f=f-o-a;const u=O(h,l,r,!1,s);for(let m=u.length-1;m>=0;m--)c.splice(f,0,u[m]);f=f+u.length}a=0,o=0,h="",l="";break}f++}return c.pop(),c}function zt(t,e,r,s){const n=t.length,i=e.length,c=Math.ceil((n+i)/2),f=c,o=2*c,a=new Array(o),h=new Array(o);for(let S=0;S<o;S++)a[S]=-1,h[S]=-1;a[f+1]=0,h[f+1]=0;const l=n-i,u=l%2!==0;let m=0,p=0,d=0,M=0;for(let S=0;S<c&&!(new Date().getTime()>s);S++){for(let _=-S+m;_<=S-p;_+=2){const A=f+_;let y;_===-S||_!==S&&a[A-1]<a[A+1]?y=a[A+1]:y=a[A-1]+1;let w=y-_;for(;y<n&&w<i&&t.charAt(y)===e.charAt(w);)y++,w++;if(a[A]=y,y>n)p+=2;else if(w>i)m+=2;else if(u){const g=f+l-_;if(g>=0&&g<o&&h[g]!==-1){const b=n-h[g];if(y>=b)return X(t,e,r,y,w,s)}}}for(let _=-S+d;_<=S-M;_+=2){const A=f+_;let y;_===-S||_!==S&&h[A-1]<h[A+1]?y=h[A+1]:y=h[A-1]+1;let w=y-_;for(;y<n&&w<i&&t.charAt(n-y-1)===e.charAt(i-w-1);)y++,w++;if(h[A]=y,y>n)M+=2;else if(w>i)d+=2;else if(!u){const g=f+l-_;if(g>=0&&g<o&&a[g]!==-1){const b=a[g],v=f+b-g;if(y=n-y,b>=y)return X(t,e,r,b,v,s)}}}}return[C(B,t),C(k,e)]}function X(t,e,r,s,n,i){const c=t.substring(0,s),f=e.substring(0,n),o=t.substring(s),a=e.substring(n),h=O(c,f,r,!1,i),l=O(o,a,r,!1,i);return h.concat(l)}function Nt(t,e){const r=[],s={};let n=4e4;r[0]="";function i(o){let a="",h=0,l=-1,u=r.length;for(;l<o.length-1;){l=o.indexOf(`
`,h),l===-1&&(l=o.length-1);let m=o.substring(h,l+1);(s.hasOwnProperty?Object.prototype.hasOwnProperty.call(s,m):s[m]!==void 0)?a+=String.fromCharCode(s[m]):(u===n&&(m=o.substring(h),l=o.length),a+=String.fromCharCode(u),s[m]=u,r[u++]=m),h=l+1}return a}const c=i(t);n=65535;const f=i(e);return{chars1:c,chars2:f,lineArray:r}}function jt(t,e){for(let r=0;r<t.length;r++){const s=t[r][1],n=[];for(let i=0;i<s.length;i++)n[i]=e[s.charCodeAt(i)];t[r][1]=n.join("")}}function W(t,e){if(!t||!e||t.charAt(0)!==e.charAt(0))return 0;let r=0,s=Math.min(t.length,e.length),n=s,i=0;for(;r<n;)t.substring(i,n)===e.substring(i,n)?(r=n,i=r):s=n,n=Math.floor((s-r)/2+r);return n}function F(t,e){if(!t||!e||t.charAt(t.length-1)!==e.charAt(e.length-1))return 0;let r=0,s=Math.min(t.length,e.length),n=s,i=0;for(;r<n;)t.substring(t.length-n,t.length-i)===e.substring(e.length-n,e.length-i)?(r=n,i=r):s=n,n=Math.floor((s-r)/2+r);return n}function Y(t,e){const r=t.length,s=e.length;if(r===0||s===0)return 0;r>s?t=t.substring(r-s):r<s&&(e=e.substring(0,r));const n=Math.min(r,s);if(t===e)return n;let i=0,c=1;for(;;){const f=t.substring(n-c),o=e.indexOf(f);if(o===-1)return i;c+=o,(o===0||t.substring(n-c)===e.substring(0,c))&&(i=c,c++)}}function Ft(t,e,r){if(r.diffTimeout<=0)return null;const s=t.length>e.length?t:e,n=t.length>e.length?e:t;if(s.length<4||n.length*2<s.length)return null;function i(p,d,M){const S=p.substring(M,M+Math.floor(p.length/4));let _=-1,A="",y,w,g,b;for(;(_=d.indexOf(S,_+1))!==-1;){const v=W(p.substring(M),d.substring(_)),D=F(p.substring(0,M),d.substring(0,_));A.length<D+v&&(A=d.substring(_-D,_)+d.substring(_,_+v),y=p.substring(0,M-D),w=p.substring(M+v),g=d.substring(0,_-D),b=d.substring(_+v))}return A.length*2>=p.length?[y,w,g,b,A]:null}const c=i(s,n,Math.ceil(s.length/4)),f=i(s,n,Math.ceil(s.length/2));let o;if(!c&&!f)return null;f?c?o=c[4].length>f[4].length?c:f:o=f:o=c;let a,h,l,u;t.length>e.length?(a=o[0],h=o[1],l=o[2],u=o[3]):(l=o[0],u=o[1],a=o[2],h=o[3]);const m=o[4];return[a,h,l,u,m]}function xt(t){let e=!1;const r=[];let s=0,n=null,i=0,c=0,f=0,o=0,a=0;for(;i<t.length;)t[i][0]===E?(r[s++]=i,c=o,f=a,o=0,a=0,n=t[i][1]):(t[i][0]===k?o+=t[i][1].length:a+=t[i][1].length,n&&n.length<=Math.max(c,f)&&n.length<=Math.max(o,a)&&(t.splice(r[s-1],0,C(B,n)),t[r[s-1]+1][0]=k,s--,s--,i=s>0?r[s-1]:-1,c=0,f=0,o=0,a=0,n=null,e=!0)),i++;for(e&&Z(t),Ht(t),i=1;i<t.length;){if(t[i-1][0]===B&&t[i][0]===k){const h=t[i-1][1],l=t[i][1],u=Y(h,l),m=Y(l,h);u>=m?(u>=h.length/2||u>=l.length/2)&&(t.splice(i,0,C(E,l.substring(0,u))),t[i-1][1]=h.substring(0,h.length-u),t[i+1][1]=l.substring(u),i++):(m>=h.length/2||m>=l.length/2)&&(t.splice(i,0,C(E,h.substring(0,m))),t[i-1][0]=k,t[i-1][1]=l.substring(0,l.length-m),t[i+1][0]=B,t[i+1][1]=h.substring(m),i++),i++}i++}}const Q=/[^a-z0-9]/i,V=/\s/,G=/[\r\n]/,Ut=/\n\r?\n$/,qt=/^\r?\n\r?\n/;function Ht(t){function e(s,n){if(!s||!n)return 6;const i=s.charAt(s.length-1),c=n.charAt(0),f=i.match(Q),o=c.match(Q),a=f&&i.match(V),h=o&&c.match(V),l=a&&i.match(G),u=h&&c.match(G),m=l&&s.match(Ut),p=u&&n.match(qt);return m||p?5:l||u?4:f&&!a&&h?3:a||h?2:f||o?1:0}let r=1;for(;r<t.length-1;){if(t[r-1][0]===E&&t[r+1][0]===E){let s=t[r-1][1],n=t[r][1],i=t[r+1][1];const c=F(s,n);if(c){const l=n.substring(n.length-c);s=s.substring(0,s.length-c),n=l+n.substring(0,n.length-c),i=l+i}let f=s,o=n,a=i,h=e(s,n)+e(n,i);for(;n.charAt(0)===i.charAt(0);){s+=n.charAt(0),n=n.substring(1)+i.charAt(0),i=i.substring(1);const l=e(s,n)+e(n,i);l>=h&&(h=l,f=s,o=n,a=i)}t[r-1][1]!==f&&(f?t[r-1][1]=f:(t.splice(r-1,1),r--),t[r][1]=o,a?t[r+1][1]=a:(t.splice(r+1,1),r--))}r++}}function Z(t){t.push(C(E,""));let e=0,r=0,s=0,n="",i="",c;for(;e<t.length;)switch(t[e][0]){case k:s++,i+=t[e][1],e++;break;case B:r++,n+=t[e][1],e++;break;case E:r+s>1?(r!==0&&s!==0&&(c=W(i,n),c!==0&&(e-r-s>0&&t[e-r-s-1][0]===E?t[e-r-s-1][1]+=i.substring(0,c):(t.splice(0,0,C(E,i.substring(0,c))),e++),i=i.substring(c),n=n.substring(c)),c=F(i,n),c!==0&&(t[e][1]=i.substring(i.length-c)+t[e][1],i=i.substring(0,i.length-c),n=n.substring(0,n.length-c))),e-=r+s,t.splice(e,r+s),n.length&&(t.splice(e,0,C(B,n)),e++),i.length&&(t.splice(e,0,C(k,i)),e++),e++):e!==0&&t[e-1][0]===E?(t[e-1][1]+=t[e][1],t.splice(e,1)):e++,s=0,r=0,n="",i="";break}t[t.length-1][1]===""&&t.pop();let f=!1;for(e=1;e<t.length-1;)t[e-1][0]===E&&t[e+1][0]===E&&(t[e][1].substring(t[e][1].length-t[e-1][1].length)===t[e-1][1]?(t[e][1]=t[e-1][1]+t[e][1].substring(0,t[e][1].length-t[e-1][1].length),t[e+1][1]=t[e-1][1]+t[e+1][1],t.splice(e-1,1),f=!0):t[e][1].substring(0,t[e+1][1].length)===t[e+1][1]&&(t[e-1][1]+=t[e+1][1],t[e][1]=t[e][1].substring(t[e+1][1].length)+t[e+1][1],t.splice(e+1,1),f=!0)),e++;f&&Z(t)}const tt=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Kt(t,e){e?e={...tt,...e}:e=tt;const r=ft(e);return r.dispatch(t),r.toString()}const It=Object.freeze(["prototype","__proto__","constructor"]);function ft(t){let e="",r=new Map;const s=n=>{e+=n};return{toString(){return e},getContext(){return r},dispatch(n){return t.replacer&&(n=t.replacer(n)),this[n===null?"null":typeof n](n)},object(n){if(n&&typeof n.toJSON=="function")return this.object(n.toJSON());const i=Object.prototype.toString.call(n);let c="";const f=i.length;f<10?c="unknown:["+i+"]":c=i.slice(8,f-1),c=c.toLowerCase();let o=null;if((o=r.get(n))===void 0)r.set(n,r.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(n))return s("buffer:"),s(n.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")this[c]?this[c](n):t.ignoreUnknown||this.unkown(n,c);else{let a=Object.keys(n);t.unorderedObjects&&(a=a.sort());let h=[];t.respectType!==!1&&!et(n)&&(h=It),t.excludeKeys&&(a=a.filter(u=>!t.excludeKeys(u)),h=h.filter(u=>!t.excludeKeys(u))),s("object:"+(a.length+h.length)+":");const l=u=>{this.dispatch(u),s(":"),t.excludeValues||this.dispatch(n[u]),s(",")};for(const u of a)l(u);for(const u of h)l(u)}},array(n,i){if(i=i===void 0?t.unorderedArrays!==!1:i,s("array:"+n.length+":"),!i||n.length<=1){for(const o of n)this.dispatch(o);return}const c=new Map,f=n.map(o=>{const a=ft(t);a.dispatch(o);for(const[h,l]of a.getContext())c.set(h,l);return a.toString()});return r=c,f.sort(),this.array(f,!1)},date(n){return s("date:"+n.toJSON())},symbol(n){return s("symbol:"+n.toString())},unkown(n,i){if(s(i),!!n&&(s(":"),n&&typeof n.entries=="function"))return this.array(Array.from(n.entries()),!0)},error(n){return s("error:"+n.toString())},boolean(n){return s("bool:"+n)},string(n){s("string:"+n.length+":"),s(n)},function(n){s("fn:"),et(n)?this.dispatch("[native]"):this.dispatch(n.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(n.name)),t.respectFunctionProperties&&this.object(n)},number(n){return s("number:"+n)},xml(n){return s("xml:"+n.toString())},null(){return s("Null")},undefined(){return s("Undefined")},regexp(n){return s("regex:"+n.toString())},uint8array(n){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(n))},uint8clampedarray(n){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(n))},int8array(n){return s("int8array:"),this.dispatch(Array.prototype.slice.call(n))},uint16array(n){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(n))},int16array(n){return s("int16array:"),this.dispatch(Array.prototype.slice.call(n))},uint32array(n){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(n))},int32array(n){return s("int32array:"),this.dispatch(Array.prototype.slice.call(n))},float32array(n){return s("float32array:"),this.dispatch(Array.prototype.slice.call(n))},float64array(n){return s("float64array:"),this.dispatch(Array.prototype.slice.call(n))},arraybuffer(n){return s("arraybuffer:"),this.dispatch(new Uint8Array(n))},url(n){return s("url:"+n.toString())},map(n){s("map:");const i=[...n];return this.array(i,t.unorderedSets!==!1)},set(n){s("set:");const i=[...n];return this.array(i,t.unorderedSets!==!1)},file(n){return s("file:"),this.dispatch([n.name,n.size,n.type,n.lastModfied])},blob(){if(t.ignoreUnknown)return s("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return s("domwindow")},bigint(n){return s("bigint:"+n.toString())},process(){return s("process")},timer(){return s("timer")},pipe(){return s("pipe")},tcp(){return s("tcp")},udp(){return s("udp")},tty(){return s("tty")},statwatcher(){return s("statwatcher")},securecontext(){return s("securecontext")},connection(){return s("connection")},zlib(){return s("zlib")},context(){return s("context")},nodescript(){return s("nodescript")},httpparser(){return s("httpparser")},dataview(){return s("dataview")},signal(){return s("signal")},fsevent(){return s("fsevent")},tlswrap(){return s("tlswrap")}}}const pt="[native code] }",Wt=pt.length;function et(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-Wt)===pt}var Zt=Object.defineProperty,Jt=(t,e,r)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,$=(t,e,r)=>(Jt(t,typeof e!="symbol"?e+"":e,r),r);class T{constructor(e,r){$(this,"words"),$(this,"sigBytes"),e=this.words=e||[],this.sigBytes=r===void 0?e.length*4:r}toString(e){return(e||Xt).stringify(this)}concat(e){if(this.clamp(),this.sigBytes%4)for(let r=0;r<e.sigBytes;r++){const s=e.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=s<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<e.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=e.words[r>>>2];return this.sigBytes+=e.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new T([...this.words])}}const Xt={stringify(t){const e=[];for(let r=0;r<t.sigBytes;r++){const s=t.words[r>>>2]>>>24-r%4*8&255;e.push((s>>>4).toString(16),(s&15).toString(16))}return e.join("")}},Yt={stringify(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let s=0;s<t.sigBytes;s+=3){const n=t.words[s>>>2]>>>24-s%4*8&255,i=t.words[s+1>>>2]>>>24-(s+1)%4*8&255,c=t.words[s+2>>>2]>>>24-(s+2)%4*8&255,f=n<<16|i<<8|c;for(let o=0;o<4&&s*8+o*6<t.sigBytes*8;o++)r.push(e.charAt(f>>>6*(3-o)&63))}return r.join("")}},Qt={parse(t){const e=t.length,r=[];for(let s=0;s<e;s++)r[s>>>2]|=(t.charCodeAt(s)&255)<<24-s%4*8;return new T(r,e)}},Vt={parse(t){return Qt.parse(unescape(encodeURIComponent(t)))}};class Gt{constructor(){$(this,"_data",new T),$(this,"_nDataBytes",0),$(this,"_minBufferSize",0),$(this,"blockSize",512/32)}reset(){this._data=new T,this._nDataBytes=0}_append(e){typeof e=="string"&&(e=Vt.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_doProcessBlock(e,r){}_process(e){let r,s=this._data.sigBytes/(this.blockSize*4);e?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const n=s*this.blockSize,i=Math.min(n*4,this._data.sigBytes);if(n){for(let c=0;c<n;c+=this.blockSize)this._doProcessBlock(this._data.words,c);r=this._data.words.splice(0,n),this._data.sigBytes-=i}return new T(r,i)}}class te extends Gt{update(e){return this._append(e),this._process(),this}finalize(e){e&&this._append(e)}}var ee=Object.defineProperty,ne=(t,e,r)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,se=(t,e,r)=>(ne(t,e+"",r),r);const nt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],re=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],R=[];class ie extends te{constructor(){super(...arguments),se(this,"_hash",new T([...nt]))}reset(){super.reset(),this._hash=new T([...nt])}_doProcessBlock(e,r){const s=this._hash.words;let n=s[0],i=s[1],c=s[2],f=s[3],o=s[4],a=s[5],h=s[6],l=s[7];for(let u=0;u<64;u++){if(u<16)R[u]=e[r+u]|0;else{const A=R[u-15],y=(A<<25|A>>>7)^(A<<14|A>>>18)^A>>>3,w=R[u-2],g=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;R[u]=y+R[u-7]+g+R[u-16]}const m=o&a^~o&h,p=n&i^n&c^i&c,d=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),M=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),S=l+M+m+re[u]+R[u],_=d+p;l=h,h=a,a=o,o=f+S|0,f=c,c=i,i=n,n=S+_|0}s[0]=s[0]+n|0,s[1]=s[1]+i|0,s[2]=s[2]+c|0,s[3]=s[3]+f|0,s[4]=s[4]+o|0,s[5]=s[5]+a|0,s[6]=s[6]+h|0,s[7]=s[7]+l|0}finalize(e){super.finalize(e);const r=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(s+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function oe(t){return new ie().finalize(t).toString(Yt)}function ae(t,e={}){const r=typeof t=="string"?t:Kt(t,e);return oe(r).slice(0,10)}function le(t,e,r="",s=!1){const n=ae(t+r);let i=0,c=0;const f=Math.ceil(Math.log10(e.length)),o=ce(e).flatMap((a,h)=>{var m;c=((m=a[0])==null?void 0:m.offset)||i;const l=a[a.length-1];l?i=l.offset+l.content.length:i+=1;const u=[...a,{content:`
`,offset:i}];return s&&u.unshift({key:`${n}-ln-${h+1}`,content:`${String(h+1).padStart(f," ")}  `,offset:c,htmlClass:"shiki-magic-move-line-number"}),u}).map((a,h)=>{const l=a;return l.key||(l.key=`${n}-${h}`),l});return{code:t,hash:n,tokens:o,lineNumbers:s}}function ce(t){return t.map(e=>e.flatMap(r=>{if(r.content.match(/^\s+$/))return r;const s=r.content.match(/^(\s*)(.*?)(\s*)$/);if(!s)return r;const[,n,i,c]=s;if(!n&&!c)return r;const f=[{...r,offset:r.offset+n.length,content:i}];return n&&f.unshift({content:n,offset:r.offset}),c&&f.push({content:c,offset:r.offset+n.length+i.length}),f}))}function he(t,e){let r=0;const s=t.key;let n=0;const i=[];function c(){return n===0?(n++,s):`${s}-${n++}`}for(const f of e)f>r&&i.push({...t,content:t.content.slice(r,f),offset:t.offset+r,key:c()}),r=f;return r<t.content.length&&i.push({...t,content:t.content.slice(r),offset:t.offset+r,key:c()}),i}function st(t,e){const r=Array.from(e instanceof Set?e:new Set(e)).sort((s,n)=>s-n);return r.length?t.flatMap(s=>{const n=r.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,c)=>i-c);return n.length?he(s,n):s}):t}function ue(t,e,r={}){const{splitTokens:s=!1,enhanceMatching:n=!0}=r,i=fe(t.code,e.code,r),c=s?st(t.tokens,i.flatMap(a=>a.from)):t.tokens,f=s?st(e.tokens,i.flatMap(a=>a.to)):e.tokens,o=new Set;if(i.forEach(a=>{var p,d;const h=c.filter(M=>M.offset>=a.from[0]&&M.offset+M.content.length<=a.from[1]),l=f.filter(M=>M.offset>=a.to[0]&&M.offset+M.content.length<=a.to[1]);let u=0,m=0;for(;u<h.length&&m<l.length&&!(!h[u]||!l[m]);)h[u].content===l[m].content?(l[m].key=h[u].key,o.add(h[u].key),u++,m++):((p=h[u+1])==null?void 0:p.content)===l[m].content?u++:(h[u].content===((d=l[m+1])==null?void 0:d.content)||u++,m++)}),n)for(const a of c){if(o.has(a.key)||a.content.length<3||!a.content.match(/^[\w-]+$/))continue;const h=f.find(l=>l.content===a.content&&!o.has(l.key));h&&(h.key=a.key,o.add(a.key))}return{from:c.length===t.tokens.length?t:{...t,tokens:c},to:f.length===e.tokens.length?e:{...e,tokens:f}}}function fe(t,e,r={}){var f;let s=O(t,e);s=((f=r.diffCleanup)==null?void 0:f.call(r,s))||s;let n="",i="";const c=[];for(const[o,a]of s)o===0?(c.push({from:[n.length,n.length+a.length],to:[i.length,i.length+a.length],content:a}),n+=a,i+=a):o===-1?n+=a:o===1&&(i+=a);if(n!==t||i!==e)throw new Error("Content mismatch");return c}const L="shiki-magic-move",x=`${L}-leave-from`,pe=`${L}-leave-to`,rt=`${L}-leave-active`,U=`${L}-enter-from`,q=`${L}-enter-to`,it=`${L}-enter-active`,ot=`${L}-move`,at=`${L}-container-resize`,lt=`${L}-container-restyle`,ge={globalScale:1,duration:500,delayMove:.3,delayLeave:.1,delayEnter:.7,delayContainer:.4,stagger:0,easing:"ease",animateContainer:!0,containerStyle:!0};class me{constructor(e,r={}){z(this,"mapDom",new Map);z(this,"previousPromises",[]);z(this,"isFirstRender",!0);this.options={...ge,...r},typeof e=="string"?this.container=document.querySelector(e):this.container=e,this.anchor=document.createElement("span"),this.anchor.style.position="absolute",this.anchor.style.top="0",this.anchor.style.left="0",this.anchor.style.height="1px",this.anchor.style.width="1px",this.container.prepend(this.anchor)}applyElementContent(e,r){r.content!==`
`&&(e.textContent=r.content,e.classList.add(`${L}-item`))}applyElementStyle(e,r){if(r.htmlStyle)if(typeof r.htmlStyle=="string")e.setAttribute("style",r.htmlStyle);else for(const[s,n]of Object.entries(r.htmlStyle))e.style.setProperty(s,n);r.htmlClass&&(e.className=[`${L}-item`,r.htmlClass].join(" ")),r.color&&(e.style.color=r.color),r.bgColor&&(e.style.backgroundColor=r.bgColor)}applyElement(e,r){this.applyElementContent(e,r),this.applyElementStyle(e,r)}applyNodeStyle(e,r){if(r.bg&&(e.style.backgroundColor=r.bg),r.fg&&(e.style.color=r.fg),r.rootStyle){const s=r.rootStyle.split(";");for(const n of s){const[i,c]=n.split(":");i&&c&&e.style.setProperty(i.trim(),c.trim())}}}applyContainerStyle(e){this.options.containerStyle&&this.applyNodeStyle(this.container,e)}registerTransitionEnd(e,r){return()=>{let s=!1,n=()=>{};const i=Promise.race([Promise.allSettled(e.getAnimations().map(c=>c.finished)).then(()=>r()),new Promise(c=>{n=()=>{s||(s=!0,r(),c())}})]);return i.resolve=n,i}}setCssVariables(){this.container.style.setProperty("--smm-duration",`${this.options.duration}ms`),this.container.style.setProperty("--smm-delay-move",`${this.options.delayMove}`),this.container.style.setProperty("--smm-delay-leave",`${this.options.delayLeave}`),this.container.style.setProperty("--smm-delay-enter",`${this.options.delayEnter}`),this.container.style.setProperty("--smm-delay-container",`${this.options.delayContainer}`),this.container.style.setProperty("--smm-easing",this.options.easing),this.container.style.setProperty("--smm-stagger","0")}replace(e){const r=new Map,s=e.tokens.map(n=>{if(this.mapDom.has(n.key)){const i=this.mapDom.get(n.key);return this.applyElement(i,n),r.set(n.key,i),this.mapDom.delete(n.key),i}else{const i=document.createElement(n.content===`
`?"br":"span");return this.applyElement(i,n),r.set(n.key,i),i}});this.container.replaceChildren(this.anchor,...s),this.applyContainerStyle(e),this.mapDom=r}render(e){this.setCssVariables();const r=new Map,s=[],n=[],i=[],c=[];this.previousPromises.forEach(p=>p.resolve()),this.previousPromises=[];const f=[],{globalScale:o}=this.options,a=new Map;let h=this.anchor.getBoundingClientRect();const l=this.container.getBoundingClientRect();for(const p of this.mapDom.values()){const d=p.getBoundingClientRect();a.set(p,{x:d.x-h.x,y:d.y-h.y})}const u=e.tokens.map(p=>{if(this.mapDom.has(p.key)){const d=this.mapDom.get(p.key);return this.applyElementContent(d,p),f.push(()=>{this.applyElementStyle(d,p)}),s.push(d),r.set(p.key,d),this.mapDom.delete(p.key),d}else{const d=document.createElement(p.content===`
`?"br":"span");return this.applyElement(d,p),n.push(d),r.set(p.key,d),d}});for(const[p,d]of this.mapDom)d.tagName!=="BR"&&i.push(d);for(const p of i)p.style.position="absolute";if(this.container.replaceChildren(this.anchor,...u,...i),this.mapDom=r,i.forEach((p,d)=>{p.style.position="absolute";const M=a.get(p);p.style.top=`${M.y/o}px`,p.style.left=`${M.x/o}px`,this.options.stagger?p.style.setProperty("--smm-stagger",`${d*this.options.stagger}ms`):p.style.removeProperty("--smm-stagger"),p.classList.add(x),p.classList.add(rt),f.unshift(()=>{p.classList.remove(x),p.classList.add(pe)}),c.push(this.registerTransitionEnd(p,()=>{p.classList.remove(x),p.classList.remove(rt),p.classList.remove(q),p.remove()}))}),this.isFirstRender||n.forEach((p,d)=>{p.classList.add(U),p.classList.add(it),this.options.stagger?p.style.setProperty("--smm-stagger",`${d*this.options.stagger}ms`):p.style.removeProperty("--smm-stagger"),f.push(()=>{p.classList.remove(U),p.classList.add(q)}),c.push(this.registerTransitionEnd(p,()=>{p.classList.remove(U),p.classList.remove(it),p.classList.remove(q)}))}),h=this.anchor.getBoundingClientRect(),s.forEach((p,d)=>{const M=p.getBoundingClientRect(),S={x:M.x-h.x,y:M.y-h.y},_=a.get(p);p.style.transitionDuration=p.style.transitionDelay="0ms";const A=(_.x-S.x)/o,y=(_.y-S.y)/o;p.style.transform=`translate(${A}px, ${y}px)`,this.options.stagger?p.style.setProperty("--smm-stagger",`${d*this.options.stagger}ms`):p.style.removeProperty("--smm-stagger"),f.unshift(()=>{p.classList.add(ot),p.style.transform=p.style.transitionDuration=p.style.transitionDelay=""}),c.push(this.registerTransitionEnd(p,()=>{p.classList.remove(ot)}))}),this.options.animateContainer&&!this.isFirstRender){const p=this.container.getBoundingClientRect();(p.width!==l.width||p.height!==l.height)&&(this.container.style.transitionDuration=this.container.style.transitionDelay="0ms",this.container.style.height=`${l.height/o}px`,this.container.style.width=`${l.width/o}px`,f.unshift(()=>{this.container.classList.add(at),this.container.style.transitionDuration=this.container.style.transitionDelay="",this.container.style.height=`${p.height/o}px`,this.container.style.width=`${p.width/o}px`}),c.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(at),this.container.style.height=this.container.style.width=""})))}this.options.containerStyle&&(this.isFirstRender?this.applyContainerStyle(e):(f.push(()=>{this.container.classList.add(lt),this.applyContainerStyle(e)}),c.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(lt)})))),ye(),f.forEach(p=>p());const m=c.map(p=>p());return this.isFirstRender=!1,this.previousPromises=m,Promise.all(m).then()}}function ye(){return document.body.offsetHeight}const de=I({name:"ShikiMagicMoveRenderer",props:{animate:{type:Boolean,default:!0},tokens:{type:Object,required:!0},previous:{type:Object,required:!1},options:{type:Object}},emits:["end","start"],setup(t,{emit:e}){const r=H();let s=!1;return ht(()=>{r.value.innerHTML="",s=!0;const n=new me(r.value);ut(()=>t.tokens,async i=>{if(Object.assign(n.options,t.options),t.animate){t.previous&&n.replace(t.previous),await K();const c=n.render(i);await K(),e("start"),await c,e("end")}else n.replace(i)},{immediate:!0})}),()=>N("pre",{ref:r,class:"shiki-magic-move-container"},s?void 0:yt(t.tokens.tokens,n=>n.content===`
`?N("br",{key:n.key}):N("span",{style:[{color:n.color},n.htmlStyle],class:["shiki-magic-move-item",n.htmlClass],key:n.key},n.content)))}}),be=I({name:"ShikiMagicMovePrecompiled",props:{steps:{type:Array,required:!0},step:{type:Number,default:0},animate:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["start","end"],setup(t,{emit:e}){let s=le("",[]);const n=ct(()=>{const i=ue(s,t.steps[Math.min(t.step,t.steps.length-1)],t.options);return s=i.to,i});return()=>N(de,{tokens:n.value.to,previous:n.value.from,options:t.options,animate:t.animate,onStart:()=>e("start"),onEnd:()=>e("end")})}}),Me=I({__name:"ShikiMagicMove",props:{at:{type:[String,Number],default:"+1"},stepsLz:{type:String,required:!0},stepRanges:{type:Array,required:!0},lines:{type:Boolean,default:vt.lineNumbers}},setup(t){const e=t,r=JSON.parse(Rt.decompressFromBase64(e.stepsLz)),{$clicksContext:s,$scale:n,$zoom:i}=Lt(),{isPrintMode:c}=St(),f=At(),o=H(0),a=H(),h=ct(()=>e.stepRanges.map(l=>l.length?l:["all"]));return dt(()=>{s==null||s.unregister(f)}),ht(()=>{if(!s)return;if(h.value.length!==r.length)throw new Error("[slidev] The length of stepRanges does not match the length of steps, this is an internal error.");const l=h.value.map(m=>m.length).reduce((m,p)=>m+p,0),u=s.calculateSince(e.at,l-1);s.register(f,u),ut(()=>s.current,()=>{const m=u?s.current-u.start:Mt;let p=r.length-1,d=0,M="all";for(let S=0;S<h.value.length;S++){const _=h.value[S];if(m<d+_.length-1){p=S,M=_[m-d+1];break}d+=_.length||1}K(async()=>{var y;o.value=p,await Ct(0);const S=(y=a.value)==null?void 0:y.querySelector(".shiki");if(!S)return;const A=Array.from(S.children).slice(1).filter(w=>!w.className.includes("shiki-magic-move-leave")).reduce((w,g)=>(g.tagName==="BR"?w.push([]):w[w.length-1].push(g),w),[[]]);Et(M,A.length,1,w=>A[w])})},{immediate:!0})}),(l,u)=>(bt(),_t("div",{ref_key:"container",ref:a,class:"slidev-code-wrapper slidev-code-magic-move relative"},[wt(P(be),{class:"slidev-code relative shiki overflow-visible",steps:P(r),step:o.value,animate:!P(c),options:{globalScale:P(n)*P(i),duration:800,stagger:1}},null,8,["steps","step","animate","options"])],512))}});export{Me as _};