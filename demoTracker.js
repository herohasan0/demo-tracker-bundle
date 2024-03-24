'use strict';(function(){function v(a,d,e,k){function h(f){return f instanceof e?f:new e(function(n){n(f)})}return new (e||(e=Promise))(function(f,n){function p(g){try{l(k.next(g))}catch(b){n(b)}}function m(g){try{l(k["throw"](g))}catch(b){n(b)}}function l(g){g.done?f(g.value):h(g.value).then(p,m)}l((k=k.apply(a,d||[])).next())})}function t(a){var d=Object,e=d.assign;a=Object.assign({company_id:"b2m_test_website",company_app_name:"b2metric website",task_id:"TRACKER-TEST"},a);var k=navigator.userAgent,
h=w,f=JSON.stringify(x),n=String(C.getTimezoneOffset()),p=Intl.DateTimeFormat().resolvedOptions().timeZone,m=`${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`,l=y,g=String,b=document.createElement("canvas");b.id="myCanvas";b.hidden=!0;b.width=200;b.height=40;document.body.appendChild(b);b=document.getElementById("myCanvas");console.log("canvas",b);var c=b.getContext("2d");c.fillStyle="rgb(255,0,255)";c.beginPath();c.rect(20,20,150,100);c.fill();c.stroke();c.closePath();
c.beginPath();c.fillStyle="rgb(0,255,255)";c.arc(50,50,50,0,2*Math.PI,!0);c.fill();c.stroke();c.closePath();c.textBaseline="top";c.font='17px "Arial 17"';c.textBaseline="alphabetic";c.fillStyle="rgb(255,5,5)";c.rotate(.03);c.fillText("abz190#$%^@\u00a3\u00e9\u00fa",4,17);c.fillStyle="rgb(155,255,5)";c.shadowBlur=8;c.shadowColor="red";c.fillRect(20,12,100,5);b=b.toDataURL();c=0;for(let u=0;u<b.length;u++){let D=b.charCodeAt(u);c=(c<<5)-c+D;c&=c}g=g(c);a:{b=document.createElement("canvas");b.id="webGLCanvas";
b.hidden=!0;document.body.appendChild(b);if((null===window||void 0===window?0:window.WebGLRenderingContext)&&((null===b||void 0===b?0:b.getContext("webgl"))||(null===b||void 0===b?0:b.getContext("experimental-webgl")))&&(b=document.getElementById("webGLCanvas"),c=b.getContext("webgl")||b.getContext("experimental-webgl"))){b=c.getParameter(c.VENDOR);c=c.getParameter(c.RENDERER);b=`${b} ${c}`;break a}b=null}d=e.call(d,a,{user_browser_info:{user_agent:k,http_accept_headers:h,plugins:f,timezone_offset:n,
timezone:p,screen:m,system_fonts:l,hash_of_canvas_fingerprint:g,webgl_vendor_renderer:b,dnt_header_enabled:!0,language:navigator.language,platform:navigator.platform,touch_support:String(E),audio_context_fingerprint:z,hardware_concurrency:navigator.hardwareConcurrency,device_memory:navigator.deviceMemory}});fetch("https://tracker.b2metric.com/tracker/tracker/callback",{cache:"no-cache",redirect:"follow",referrerPolicy:"no-referrer",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/json"},
method:"POST",body:JSON.stringify(d),keepalive:!0});d=new Blob([JSON.stringify(d)],{type:"application/json"});navigator.sendBeacon("https://tracker.b2metric.com/tracker/tracker/callback",d)}var F=function(){function a(m,l){void 0!==f[m]&&"function"===typeof f[m].setValueAtTime&&f[m].setValueAtTime(l,e.currentTime)}function d(m){for(var l=null,g=4500;5E3>g;g++){var b=m.renderedBuffer.getChannelData(0)[g];l+=Math.abs(b)}n=l.toString();"function"===typeof p&&p(n);f.disconnect()}var e=null,k=null,h=null,
f=null,n=null,p=null;return{run:function(m,l=!1){p=m;try{e=new (window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,44100,44100),k=e.currentTime,h=e.createOscillator(),h.type="triangle",h.frequency.setValueAtTime(1E4,k),f=e.createDynamicsCompressor(),a("threshold",-50),a("knee",40),a("ratio",12),a("reduction",-20),a("attack",0),a("release",.25),h&&f&&e&&(h.connect(f),f.connect(e.destination),h.start(0),e.startRendering(),e.oncomplete=d)}catch(g){if(l)throw g;}}}}();let z="";(()=>{F.run(a=>
{z=a})})();let E="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||0<navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints;"function"===typeof SuppressedError?SuppressedError:function(a,d,e){e=Error(e);return e.name="SuppressedError",e.error=a,e.suppressed=d,e};let A=new Set("Arial;Arial Black;Bahnschrift;Calibri;Cambria;Cambria Math;Candara;Comic Sans MS;Consolas;Constantia;Corbel;Courier New;Ebrima;Franklin Gothic Medium;Gabriola;Gadugi;Georgia;HoloLens MDL2 Assets;Impact;Ink Free;Javanese Text;Leelawadee UI;Lucida Console;Lucida Sans Unicode;Malgun Gothic;Marlett;Microsoft Himalaya;Microsoft JhengHei;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Sans Serif;Microsoft Tai Le;Microsoft YaHei;Microsoft Yi Baiti;MingLiU-ExtB;Mongolian Baiti;MS Gothic;MV Boli;Myanmar Text;Nirmala UI;Palatino Linotype;Segoe MDL2 Assets;Segoe Print;Segoe Script;Segoe UI;Segoe UI Historic;Segoe UI Emoji;Segoe UI Symbol;SimSun;Sitka;Sylfaen;Symbol;Tahoma;Times New Roman;Trebuchet MS;Verdana;Webdings;Wingdings;Yu Gothic;American Typewriter;Andale Mono;Arial;Arial Black;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Avenir;Avenir Next;Avenir Next Condensed;Baskerville;Big Caslon;Bodoni 72;Bodoni 72 Oldstyle;Bodoni 72 Smallcaps;Bradley Hand;Brush Script MT;Chalkboard;Chalkboard SE;Chalkduster;Charter;Cochin;Comic Sans MS;Copperplate;Courier;Courier New;Didot;DIN Alternate;DIN Condensed;Futura;Geneva;Georgia;Gill Sans;Helvetica;Helvetica Neue;Herculanum;Hoefler Text;Impact;Lucida Grande;Luminari;Marker Felt;Menlo;Microsoft Sans Serif;Monaco;Noteworthy;Optima;Palatino;Papyrus;Phosphate;Rockwell;Savoye LET;SignPainter;Skia;Snell Roundhand;Tahoma;Times;Times New Roman;Trattatello;Trebuchet MS;Verdana;Zapfino".split(";").sort());
(()=>v(void 0,void 0,void 0,function*(){yield document.fonts.ready;let a=new Set;for(let d of A.values())document.fonts.check(`12px "${d}"`)&&a.add(d);console.log("Available Fonts:",[...a.values()]);[...a.values()]}))();let G=navigator.plugins.length,x=[];for(let a=0;a<G;a++){let d=navigator.plugins[a];x.push({name:d.name,filename:d.filename,type:d[0].type})}window.B2MetricEventTracker=window.B2MetricEventTracker||[];window.B2MetricEventTracker=[];let C=new Date,y=[];(function(){return v(this,void 0,
void 0,function*(){yield document.fonts.ready;let a=new Set;for(let d of A.values())document.fonts.check(`12px "${d}"`)&&a.add(d);return[...a.values()]})})().then(a=>y=a);let w=null;var q=new XMLHttpRequest;q.open("GET",document.location,!0);q.send(null);q.onload=function(){w=q.getAllResponseHeaders().toLowerCase()};let B,r=!1;document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState?r||(B=Date.now(),r=!0):r&&(0<Date.now()-B&&(new Date).toISOString(),r=!1)});(function(){function a(){k=
Date.now();h=0}function d(){let f=Date.now();h+=f-k;k=f}let e=!1,k=Date.now(),h=0;window.addEventListener("load",a);document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState?a():d()});document.addEventListener("scroll",function(f){e||(d(),90<=(window.scrollY+window.innerHeight)/document.documentElement.offsetHeight*100&&(t({event_name:"scroll",event_date:(new Date).toISOString(),event_timestamp:(new Date).valueOf(),event_params:[{key:"page_title",string_value:document.title},
{key:"engagement_time_msec",int_value:h},{key:"timestamp",int_value:(new Date).toISOString()}]}),a(),e=!0))})})();(function(){document.addEventListener("click",a=>{for(a=a.target;a&&a!==document.body;){if(a.hasAttribute("B2M_BUTTON")){t({event_name:"click",event_date:(new Date).toISOString(),event_timestamp:Math.floor((new Date).getTime()/1E3),event_params:[{key:"page_title",string_value:document.title},{key:"classes",string_value:a.className},{key:"id",string_value:a.id},{key:"tag_name",string_value:a.tagName},
{key:"inner_text",string_value:a.innerText.slice(0,50)}]});break}a=a.parentElement}})})();document.addEventListener("DOMContentLoaded",()=>{t({event_name:"page_view",event_date:(new Date).toISOString(),event_timestamp:(new Date).valueOf(),event_params:[{key:"page_title",string_value:document.title},{key:"page_url",string_value:location.href},{key:"referrer",string_value:document.referrer}]})})})()
