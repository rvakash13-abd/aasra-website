(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5332:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u}),r(7352),r(5866),r(4833);var i=r(3191),o=r(8716),s=r(7922),n=r.n(s),a=r(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4833)),"C:\\Users\\Akash Vijayakumar\\Downloads\\aasra-website (3)\\aasra-website\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=[],c="/_not-found/page",h={require:r,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7693:(e,t,r)=>{Promise.resolve().then(r.bind(r,5330))},2419:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5330:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var i=r(326),o=r(7577);let s=()=>{let e=(0,o.useRef)(null),t=(0,o.useRef)(),r=(0,o.useRef)(null),i=(0,o.useRef)(null);class s{constructor(e,t){this.program=null,this.vs=null,this.fs=null,this.buffer=null,this.mouseMove=[0,0],this.mouseCoords=[0,0],this.pointerCoords=[0,0],this.nbrOfPointers=0,this.vertexSrc=`#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`,this.vertices=[-1,1,-1,-1,1,1,1,-1],this.canvas=e,this.scale=t,this.gl=e.getContext("webgl2"),this.gl.viewport(0,0,e.width*t,e.height*t),this.shaderSource=a}updateShader(e){this.reset(),this.shaderSource=e,this.setup(),this.init()}updateMove(e){this.mouseMove=e}updateMouse(e){this.mouseCoords=e}updatePointerCoords(e){this.pointerCoords=e}updatePointerCount(e){this.nbrOfPointers=e}updateScale(e){this.scale=e,this.gl.viewport(0,0,this.canvas.width*e,this.canvas.height*e)}compile(e,t){let r=this.gl;r.shaderSource(e,t),r.compileShader(e),r.getShaderParameter(e,r.COMPILE_STATUS)||console.error("Shader compilation error:",r.getShaderInfoLog(e))}test(e){let t=null,r=this.gl,i=r.createShader(r.FRAGMENT_SHADER);return r.shaderSource(i,e),r.compileShader(i),r.getShaderParameter(i,r.COMPILE_STATUS)||(t=r.getShaderInfoLog(i)),r.deleteShader(i),t}reset(){let e=this.gl;this.program&&!e.getProgramParameter(this.program,e.DELETE_STATUS)&&(this.vs&&(e.detachShader(this.program,this.vs),e.deleteShader(this.vs)),this.fs&&(e.detachShader(this.program,this.fs),e.deleteShader(this.fs)),e.deleteProgram(this.program))}setup(){let e=this.gl;this.vs=e.createShader(e.VERTEX_SHADER),this.fs=e.createShader(e.FRAGMENT_SHADER),this.compile(this.vs,this.vertexSrc),this.compile(this.fs,this.shaderSource),this.program=e.createProgram(),e.attachShader(this.program,this.vs),e.attachShader(this.program,this.fs),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error(e.getProgramInfoLog(this.program))}init(){let e=this.gl,t=this.program;this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array(this.vertices),e.STATIC_DRAW);let r=e.getAttribLocation(t,"position");e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,0,0),t.resolution=e.getUniformLocation(t,"resolution"),t.time=e.getUniformLocation(t,"time"),t.move=e.getUniformLocation(t,"move"),t.touch=e.getUniformLocation(t,"touch"),t.pointerCount=e.getUniformLocation(t,"pointerCount"),t.pointers=e.getUniformLocation(t,"pointers")}render(e=0){let t=this.gl,r=this.program;!r||t.getProgramParameter(r,t.DELETE_STATUS)||(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(r),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.uniform2f(r.resolution,this.canvas.width,this.canvas.height),t.uniform1f(r.time,.001*e),t.uniform2f(r.move,...this.mouseMove),t.uniform2f(r.touch,...this.mouseCoords),t.uniform1i(r.pointerCount,this.nbrOfPointers),t.uniform2fv(r.pointers,this.pointerCoords),t.drawArrays(t.TRIANGLE_STRIP,0,4))}}class n{constructor(e,t){this.active=!1,this.pointers=new Map,this.lastCoords=[0,0],this.moves=[0,0],this.scale=t;let r=(e,t,r,i)=>[r*t,e.height-i*t];e.addEventListener("pointerdown",t=>{this.active=!0,this.pointers.set(t.pointerId,r(e,this.getScale(),t.clientX,t.clientY))}),e.addEventListener("pointerup",e=>{1===this.count&&(this.lastCoords=this.first),this.pointers.delete(e.pointerId),this.active=this.pointers.size>0}),e.addEventListener("pointerleave",e=>{1===this.count&&(this.lastCoords=this.first),this.pointers.delete(e.pointerId),this.active=this.pointers.size>0}),e.addEventListener("pointermove",t=>{this.active&&(this.lastCoords=[t.clientX,t.clientY],this.pointers.set(t.pointerId,r(e,this.getScale(),t.clientX,t.clientY)),this.moves=[this.moves[0]+t.movementX,this.moves[1]+t.movementY])})}getScale(){return this.scale}updateScale(e){this.scale=e}get count(){return this.pointers.size}get move(){return this.moves}get coords(){return this.pointers.size>0?Array.from(this.pointers.values()).flat():[0,0]}get first(){return this.pointers.values().next().value||this.lastCoords}}let l=()=>{if(!e.current)return;let t=e.current,i=Math.max(1,.5*window.devicePixelRatio);t.width=window.innerWidth*i,t.height=window.innerHeight*i,r.current&&r.current.updateScale(i)},u=e=>{r.current&&i.current&&(r.current.updateMouse(i.current.first),r.current.updatePointerCount(i.current.count),r.current.updatePointerCoords(i.current.coords),r.current.updateMove(i.current.move),r.current.render(e),t.current=requestAnimationFrame(u))};return(0,o.useEffect)(()=>{if(!e.current)return;let o=e.current,d=Math.max(1,.5*window.devicePixelRatio);return r.current=new s(o,d),i.current=new n(o,d),r.current.setup(),r.current.init(),l(),null===r.current.test(a)&&r.current.updateShader(a),u(0),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),t.current&&cancelAnimationFrame(t.current),r.current&&r.current.reset()}},[]),e};function n(){let e=s();return i.jsx("canvas",{ref:e,className:"fixed inset-0 w-full h-full pointer-events-none",style:{background:"black",zIndex:0},"aria-hidden":"true"})}let a=`#version 300 es
/*********
* made by Matthias Hurrle (@atzedent)
*
*	To explore strange new worlds, to seek out new life
*	and new civilizations, to boldly go where no man has
*	gone before.
*/
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}
float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}
void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.5,-st.y));
	uv*=1.-.3*(sin(T*.2)*.5+.5);
	for (float i=1.; i<12.; i++) {
		uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
		float b=noise(i+p+bg*1.731);
		col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
		col=mix(col,vec3(bg*.1,bg*.15,bg*.35),d);
	}
	O=vec4(col,1);
}`},4833:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>s});var i=r(9510);r(7272);let o=(0,r(8570).createProxy)(String.raw`C:\Users\Akash Vijayakumar\Downloads\aasra-website (3)\aasra-website\components\ui\shader-background.tsx#default`),s={title:"AASRA — Disaster Relief & Rescue Coordination Platform",description:"AASRA connects citizens in emergencies with authorities and volunteers — live shelter tracking, priority rescue requests, offline SMS alerts, and a safety-confirmation loop built for floods, cyclones and disasters across India."};function n({children:e}){return i.jsx("html",{lang:"en",className:"dark",children:(0,i.jsxs)("body",{className:"antialiased",children:[i.jsx(o,{}),i.jsx("div",{className:"fixed inset-0 bg-black/55 pointer-events-none",style:{zIndex:1}}),i.jsx("div",{className:"relative",style:{zIndex:10},children:e})]})})}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return i}});let r="NEXT_NOT_FOUND";function i(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return o},default:function(){return s}});let i=r(6399),o="next/dist/client/components/parallel-route-default.js";function s(){(0,i.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[819],()=>r(5332));module.exports=i})();