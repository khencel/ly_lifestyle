(function(e){
window.elFinder=function(t,n){
this.time("load");var i,r,a,o,s=this,l=(t=e(t),e("<div/>").append(t.contents())),d=t.attr("style"),c=t.attr("id")||"",u="elfinder-"+(c||Math.random().toString().substr(2,7)),p="mousedown."+u,h="keydown."+u,f="keypress."+u,m=!0,g=!0,v="",b={
path:"",url:"",tmbUrl:"",disabled:[],separator:"/",archives:[],extract:[],copyOverwrite:!0,uploadMaxSize:0,tmb:!1},y={
},w=[],x={
},k={
},C=[],F=[],T=[],z=new s.command(s),I="auto",P=400,M=e(document.createElement("audio")).hide().appendTo("body")[0],A=function(t){
if(t.init)y={
};else for(var n in y)y.hasOwnProperty(n)&&"directory"!=y[n].mime&&y[n].phash==v&&-1===e.inArray(n,F)&&delete y[n];v=t.cwd.hash,D(t.files),y[v]||D([t.cwd]),s.lastDir(v)},D=function(e){
for(var t,n=e.length;n--;)if((t=e[n]).name&&t.hash&&t.mime){
if(!t.phash){
var i="volume_"+t.name,r=s.i18n(i);i!=r&&(t.i18=r)}y[t.hash]=t}},O=new Date;return this.api=null,this.newAPI=!1,this.oldAPI=!1,this.OS=-1!==navigator.userAgent.indexOf("Mac")?"mac":-1!==navigator.userAgent.indexOf("Win")?"win":"other",this.UA=(o=!document.uniqueID&&!window.opera&&!window.sidebar&&window.localStorage&&void 0===window.orientation,{
ltIE6:void 0===window.addEventListener&&void 0===document.documentElement.style.maxHeight,ltIE7:void 0===window.addEventListener&&void 0===document.querySelectorAll,ltIE8:void 0===window.addEventListener&&void 0===document.getElementsByClassName,IE:document.uniqueID,Firefox:window.sidebar,Opera:window.opera,Webkit:o,Chrome:o&&window.chrome,Safari:o&&!window.chrome,Mobile:void 0!==window.orientation,Touch:void 0!==window.ontouchstart}),this.options=e.extend(!0,{
},this._options,n||{
}),n.ui&&(this.options.ui=n.ui),n.commands&&(this.options.commands=n.commands),n.uiOptions&&n.uiOptions.toolbar&&(this.options.uiOptions.toolbar=n.uiOptions.toolbar),e.extend(this.options.contextmenu,n.contextmenu),this.requestType=/^(get|post)$/i.test(this.options.requestType)?this.options.requestType.toLowerCase():"get",this.customData=e.isPlainObject(this.options.customData)?this.options.customData:{
},this.customHeaders=e.isPlainObject(this.options.customHeaders)?this.options.customHeaders:{
},this.xhrFields=e.isPlainObject(this.options.xhrFields)?this.options.xhrFields:{
},this.id=c,this.uploadURL=n.urlUpload||n.url,this.namespace=u,this.lang=this.i18[this.options.lang]&&this.i18[this.options.lang].messages?this.options.lang:"en",a="en"==this.lang?this.i18.en:e.extend(!0,{
},this.i18.en,this.i18[this.lang]),this.direction=a.direction,this.messages=a.messages,this.dateFormat=this.options.dateFormat||a.dateFormat,this.fancyFormat=this.options.fancyDateFormat||a.fancyDateFormat,this.today=new Date(O.getFullYear(),O.getMonth(),O.getDate()).getTime()/1e3,this.yesterday=this.today-86400,r=this.options.UTCDate?"UTC":"",this.getHours="get"+r+"Hours",this.getMinutes="get"+r+"Minutes",this.getSeconds="get"+r+"Seconds",this.getDate="get"+r+"Date",this.getDay="get"+r+"Day",this.getMonth="get"+r+"Month",this.getFullYear="get"+r+"FullYear",this.cssClass="ui-helper-reset ui-helper-clearfix ui-widget ui-widget-content ui-corner-all elfinder elfinder-"+("rtl"==this.direction?"rtl":"ltr")+" "+this.options.cssClass,this.storage=function(){
try{
return"localStorage"in window&&null!==window.localStorage?s.localStorage:s.cookie}catch(e){
return s.cookie}}(),this.viewType=this.storage("view")||this.options.defaultView||"icons",this.sortType=this.storage("sortType")||this.options.sortType||"name",this.sortOrder=this.storage("sortOrder")||this.options.sortOrder||"asc",this.sortStickFolders=this.storage("sortStickFolders"),null===this.sortStickFolders?this.sortStickFolders=!!this.options.sortStickFolders:this.sortStickFolders=!!this.sortStickFolders,this.sortRules=e.extend(!0,{
},this._sortRules,this.options.sortsRules),e.each(this.sortRules,function(e,t){
"function"!=typeof t&&delete s.sortRules[e]}),this.compare=e.proxy(this.compare,this),this.notifyDelay=this.options.notifyDelay>0?parseInt(this.options.notifyDelay):500,this.draggable={
appendTo:"body",addClasses:!0,delay:30,distance:8,revert:!0,refreshPositions:!0,cursor:"move",cursorAt:{
left:50,top:47},drag:function(e,t){
t.helper.data("locked")||t.helper.toggleClass("elfinder-drag-helper-plus",e.shiftKey||e.ctrlKey||e.metaKey)},start:function(t,n){
var i,r,a=e.map(n.helper.data("files")||[],function(e){
return e||null});for(i=a.length;i--;)if(r=a[i],y[r].locked){
n.helper.addClass("elfinder-drag-helper-plus").data("locked",!0);break}},stop:function(){
s.trigger("focus").trigger("dragstop")},helper:function(t,n){
var i,r,a=this.id?e(this):e(this).parents("[id]:first"),o=e('<div class="elfinder-drag-helper"><span class="elfinder-drag-helper-icon-plus"/></div>'),l=function(e){
return'<div class="elfinder-cwd-icon '+s.mime2class(e)+' ui-corner-all"/>'};return s.trigger("dragstart",{
target:a[0],originalEvent:t}),i=a.is("."+s.res("class","cwdfile"))?s.selected():[s.navId2Hash(a.attr("id"))],o.append(l(y[i[0]].mime)).data("files",i).data("locked",!1),(r=i.length)>1&&o.append(l(y[i[r-1]].mime)+'<span class="elfinder-drag-num">'+r+"</span>"),o}},this.droppable={
tolerance:"pointer",accept:".elfinder-cwd-file-wrapper,.elfinder-navbar-dir,.elfinder-cwd-file",hoverClass:this.res("class","adroppable"),drop:function(t,n){
var i,r,a,o=e(this),l=e.map(n.helper.data("files")||[],function(e){
return e||null}),d=[],c="class";for(o.is("."+s.res(c,"cwd"))?r=v:o.is("."+s.res(c,"cwdfile"))?r=o.attr("id"):o.is("."+s.res(c,"navdir"))&&(r=s.navId2Hash(o.attr("id"))),i=l.length;i--;)(a=l[i])!=r&&y[a].phash!=r&&d.push(a);d.length&&(n.helper.hide(),s.clipboard(d,!(t.ctrlKey||t.shiftKey||t.metaKey||n.helper.data("locked"))),s.exec("paste",r),s.trigger("drop",{
files:l}))}},this.enabled=function(){
return t.is(":visible")&&m},this.visible=function(){
return t.is(":visible")},this.root=function(e){
for(var t,n=y[e||v];n&&n.phash;)n=y[n.phash];if(n)return n.hash;for(;t in y&&y.hasOwnProperty(t);)if(!(n=y[t]).phash&&"directory"==!n.mime&&n.read)return n.hash;return""},this.cwd=function(){
return y[v]||{
}},this.option=function(e){
return b[e]||""},this.file=function(e){
return y[e]},this.files=function(){
return e.extend(!0,{
},y)},this.parents=function(e){
for(var t,n=[];t=this.file(e);)n.unshift(t.hash),e=t.phash;return n},this.path2array=function(e,t){
for(var n,i=[];e&&(n=y[e])&&n.hash;)i.unshift(t&&n.i18?n.i18:n.name),e=n.phash;return i},this.path=function(e,t){
return y[e]&&y[e].path?y[e].path:this.path2array(e,t).join(b.separator)},this.url=function(t){
var n=y[t];if(!n||!n.read)return"";if("1"==n.url&&this.request({
data:{
cmd:"url",target:t},preventFail:!0,options:{
async:!1}}).done(function(e){
n.url=e.url||""}).fail(function(){
n.url=""}),n.url)return n.url;if(b.url)return b.url+e.map(this.path2array(t),function(e){
return encodeURIComponent(e)}).slice(1).join("/");var i=e.extend({
},this.customData,{
cmd:"file",target:n.hash});return this.oldAPI&&(i.cmd="open",i.current=n.phash),this.options.url+(-1===this.options.url.indexOf("?")?"?":"&")+e.param(i,!0)},this.tmb=function(e){
var t=y[e],n=t&&t.tmb&&1!=t.tmb?b.tmbUrl+t.tmb:"";return n&&(this.UA.Opera||this.UA.IE)&&(n+="?_="+(new Date).getTime()),n},this.selected=function(){
return w.slice(0)},this.selectedFiles=function(){
return e.map(w,function(t){
return y[t]?e.extend({
},y[t]):null})},this.fileByName=function(e,t){
var n;for(n in y)if(y.hasOwnProperty(n)&&y[n].phash==t&&y[n].name==e)return y[n]},this.validResponse=function(e,t){
return t.error||this.rules[this.rules[e]?e:"defaults"](t)},this.returnBytes=function(e){
if("-1"==e&&(e=0),e){
var t=(e=e.replace(/b$/i,"")).charAt(e.length-1).toLowerCase();e=e.replace(/[gmk]$/i,""),"g"==t?e=1024*e*1024*1024:"m"==t?e=1024*e*1024:"k"==t&&(e*=1024)}return e},this.request=function(t){
var n,i,r,a=this,o=this.options,s=e.Deferred(),l=e.extend({
},o.customData,{
mimes:o.onlyMimes},t.data||t),d=l.cmd,c=!(t.preventDefault||t.preventFail),u=!(t.preventDefault||t.preventDone),p=e.extend({
},t.notify),h=!!t.raw,f=t.syncOnFail;t=e.extend({
url:o.url,async:!0,type:this.requestType,dataType:"json",cache:!1,data:l,headers:this.customHeaders,xhrFields:this.xhrFields},t.options||{
});if(u&&s.done(function(t){
t.warning&&a.error(t.warning),"open"==d&&A(e.extend(!0,{
},t)),t.removed&&t.removed.length&&a.remove(t),t.added&&t.added.length&&a.add(t),t.changed&&t.changed.length&&a.change(t),a.trigger(d,t),t.sync&&a.sync()}),s.fail(function(e){
e&&(c?a.error(e):a.debug("error",a.i18n(e)))}),!d)return s.reject("errCmdReq");if(f&&s.fail(function(e){
e&&a.sync()}),p.type&&p.cnt&&(n=setTimeout(function(){
a.notify(p),s.always(function(){
p.cnt=-(parseInt(p.cnt)||0),a.notify(p)})},a.notifyDelay),s.always(function(){
clearTimeout(n)})),"open"==d)for(;r=T.pop();)"pending"==r.state()&&(r.quiet=!0,r.abort());return delete t.preventFail,i=this.transport.send(t).fail(function(e,t){
var n;switch(t){
case"abort":n=e.quiet?"":["errConnect","errAbort"];break;case"timeout":n=["errConnect","errTimeout"];break;case"parsererror":n=["errResponse","errDataNotJSON"];break;default:n=403==e.status?["errConnect","errAccess"]:404==e.status?["errConnect","errNotFound"]:"errConnect"}s.reject(n,e,t)}).done(function(t){
return h?s.resolve(t):t?e.isPlainObject(t)?t.error?s.reject(t.error,i):a.validResponse(d,t)?(t=a.normalize(t),a.api||(a.api=t.api||1,a.newAPI=a.api>=2,a.oldAPI=!a.newAPI),t.options&&(b=e.extend({
},b,t.options)),t.netDrivers&&(a.netDrivers=t.netDrivers),"open"==d&&l.init&&(a.uplMaxSize=a.returnBytes(t.uplMaxSize),a.uplMaxFile=t.uplMaxFile?parseInt(t.uplMaxFile):20),s.resolve(t),void(t.debug&&a.debug("backend-debug",t.debug))):s.reject("errResponse",i):s.reject(["errResponse","errDataNotJSON"],i):s.reject(["errResponse","errDataEmpty"],i)}),"open"==d&&(T.unshift(i),s.always(function(){
var t=e.inArray(i,T);-1!==t&&T.splice(t,1)})),s},this.diff=function(t){
var n={
},i=[],r=[],a=[];return e.each(t,function(e,t){
n[t.hash]=t}),e.each(y,function(e,t){
!n[e]&&r.push(e)}),e.each(n,function(t,n){
var r=y[t];r?e.each(n,function(e){
if(n[e]!=r[e])return a.push(n),!1}):i.push(n)}),e.each(r,function(t,i){
var o=y[i],s=o.phash;s&&"directory"==o.mime&&-1===e.inArray(s,r)&&n[s]&&!function(e){
for(var t=a.length;t--;)if(a[t].hash==e)return!0}(s)&&a.push(n[s])}),{
added:i,removed:r,changed:a}},this.sync=function(){
var t=this,n=e.Deferred().done(function(){
t.trigger("sync")}),i={
data:{
cmd:"open",init:1,target:v,tree:this.ui.tree?1:0},preventDefault:!0},r={
data:{
cmd:"tree",target:v==this.root()?v:this.file(v).phash},preventDefault:!0};return e.when(this.request(i),this.request(r)).fail(function(e){
n.reject(e),e&&t.request({
data:{
cmd:"open",target:t.lastDir(""),tree:1,init:1},notify:{
type:"open",cnt:1,hideCnt:!0},preventDefault:!0})}).done(function(e,i){
var r=t.diff(e.files.concat(i&&i.tree?i.tree:[]));return r.added.push(e.cwd),r.removed.length&&t.remove(r),r.added.length&&t.add(r),r.changed.length&&t.change(r),n.resolve(r)}),n},this.upload=function(e){
return this.transport.upload(e,this)},this.bind=function(e,t){
var n;if("function"==typeof t)for(e=(""+e).toLowerCase().split(/\s+/),n=0;n<e.length;n++)void 0===x[e[n]]&&(x[e[n]]=[]),x[e[n]].push(t);return this},this.unbind=function(e,t){
var n=x[(""+e).toLowerCase()]||[],i=n.indexOf(t);return i>-1&&n.splice(i,1),t=null,this},this.trigger=function(t,n){
t=t.toLowerCase();var i,r=x[t]||[];if(this.debug("event-"+t,n),r.length)for(t=e.Event(t),i=0;i<r.length;i++){
t.data=e.extend(!0,{
},n);try{
if(!1===r[i](t,this)||t.isDefaultPrevented()){
this.debug("event-stoped",t.type);break}}catch(e){
window.console&&window.console.log&&window.console.log(e)}}return this},this.shortcut=function(t){
var n,i,r,a,o;if(this.options.allowShortcuts&&t.pattern&&e.isFunction(t.callback))for(n=t.pattern.toUpperCase().split(/\s+/),a=0;a<n.length;a++)(r=1==(r=(o=(i=n[a]).split("+")).pop()).length?r>0?r:r.charCodeAt(0):e.ui.keyCode[r])&&!k[i]&&(k[i]={
keyCode:r,altKey:-1!=e.inArray("ALT",o),ctrlKey:-1!=e.inArray("CTRL",o),shiftKey:-1!=e.inArray("SHIFT",o),type:t.type||"keydown",callback:t.callback,description:t.description,pattern:i});return this},this.shortcuts=function(){
var t=[];return e.each(k,function(e,n){
t.push([n.pattern,s.i18n(n.description)])}),t},this.clipboard=function(t,n){
var i=function(){
return e.map(C,function(e){
return e.hash})};return void 0!==t&&(C.length&&this.trigger("unlockfiles",{
files:i()}),F=[],C=e.map(t||[],function(e){
var t=y[e];return t?(F.push(e),{
hash:e,phash:t.phash,name:t.name,mime:t.mime,read:t.read,locked:t.locked,cut:!!n}):null}),this.trigger("changeclipboard",{
clipboard:C.slice(0,C.length)}),n&&this.trigger("lockfiles",{
files:i()})),C.slice(0,C.length)},this.isCommandEnabled=function(t){
return!!this._commands[t]&&-1===e.inArray(t,b.disabled)},this.exec=function(t,n,i){
return this._commands[t]&&this.isCommandEnabled(t)?this._commands[t].exec(n,i):e.Deferred().reject("No such command")},this.dialog=function(n,i){
return e("<div/>").append(n).appendTo(t).elfinderdialog(i)},this.getUI=function(e){
return this.ui[e]||t},this.command=function(e){
return void 0===e?this._commands:this._commands[e]},this.resize=function(e,n){
t.css("width",e).height(n).trigger("resize"),this.trigger("resize",{
width:t.width(),height:t.height()})},this.restoreSize=function(){
this.resize(I,P)},this.show=function(){
t.show(),this.enable().trigger("show")},this.hide=function(){
this.disable().trigger("hide"),t.hide()},this.destroy=function(){
t&&t[0].elfinder&&(this.trigger("destroy").disable(),x={
},k={
},e(document).add(t).unbind("."+this.namespace),s.trigger=function(){
},t.children().remove(),t.append(l.contents()).removeClass(this.cssClass).attr("style",d),t[0].elfinder=null,i&&clearInterval(i))},e.fn.selectable&&e.fn.draggable&&e.fn.droppable?t.length?this.options.url?(e.extend(e.ui.keyCode,{
F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120}),this.dragUpload=!1,this.xhrUpload=("undefined"!=typeof XMLHttpRequestUpload||"undefined"!=typeof XMLHttpRequestEventTarget)&&"undefined"!=typeof File&&"undefined"!=typeof FormData,this.transport={
},"object"==typeof this.options.transport&&(this.transport=this.options.transport,"function"==typeof this.transport.init&&this.transport.init(this)),"function"!=typeof this.transport.send&&(this.transport.send=function(t){
return e.ajax(t)}),"iframe"==this.transport.upload?this.transport.upload=e.proxy(this.uploads.iframe,this):"function"==typeof this.transport.upload?this.dragUpload=!!this.options.dragUploadAllow:this.xhrUpload&&this.options.dragUploadAllow?(this.transport.upload=e.proxy(this.uploads.xhr,this),this.dragUpload=!0):this.transport.upload=e.proxy(this.uploads.iframe,this),this.error=function(){
var e=arguments[0];return 1==arguments.length&&"function"==typeof e?s.bind("error",e):s.trigger("error",{
error:e})},e.each(["enable","disable","load","open","reload","select","add","remove","change","dblclick","getfile","lockfiles","unlockfiles","dragstart","dragstop","search","searchend","viewchange"],function(t,n){
s[n]=function(){
var t=arguments[0];return 1==arguments.length&&"function"==typeof t?s.bind(n,t):s.trigger(n,e.isPlainObject(t)?t:{
})}}),this.enable(function(){
!m&&s.visible()&&s.ui.overlay.is(":hidden")&&(m=!0,e("texarea:focus,input:focus,button").blur(),t.removeClass("elfinder-disabled"))}).disable(function(){
g=m,m=!1,t.addClass("elfinder-disabled")}).open(function(){
w=[]}).select(function(t){
w=e.map(t.data.selected||t.data.value||[],function(e){
return y[e]?e:null})}).error(function(t){
var n={
cssClass:"elfinder-dialog-error",title:s.i18n(s.i18n("error")),resizable:!1,destroyOnClose:!0,buttons:{
}};n.buttons[s.i18n(s.i18n("btnClose"))]=function(){
e(this).elfinderdialog("close")},s.dialog('<span class="elfinder-dialog-icon elfinder-dialog-icon-error"/>'+s.i18n(t.data.error),n)}).bind("tree parents",function(e){
D(e.data.tree||[])}).bind("tmb",function(t){
e.each(t.data.images||[],function(e,t){
y[e]&&(y[e].tmb=t)})}).add(function(e){
D(e.data.added||[])}).change(function(t){
e.each(t.data.changed||[],function(t,n){
var i=n.hash;(y[i].width&&!n.width||y[i].height&&!n.height)&&(y[i].width=void 0,y[i].height=void 0),y[i]=y[i]?e.extend(y[i],n):n})}).remove(function(t){
for(var n=t.data.removed||[],i=n.length,r=function(t){
var n=y[t];n&&("directory"==n.mime&&n.dirs&&e.each(y,function(e,n){
n.phash==t&&r(e)}),delete y[t])};i--;)r(n[i])}).bind("search",function(e){
D(e.data.files)}).bind("rm",function(t){
var n=M.canPlayType&&M.canPlayType('audio/wav; codecs="1"');n&&""!=n&&"no"!=n&&e(M).html('<source src="./sounds/rm.wav" type="audio/wav">')[0].play()}),e.each(this.options.handlers,function(e,t){
s.bind(e,t)}),this.history=new this.history(this),"function"==typeof this.options.getFileCallback&&this.commands.getfile&&(this.bind("dblclick",function(e){
e.preventDefault(),s.exec("getfile").fail(function(){
s.exec("open")})}),this.shortcut({
pattern:"enter",description:this.i18n("cmdgetfile"),callback:function(){
s.exec("getfile").fail(function(){
s.exec("mac"==s.OS?"rename":"open")})}}).shortcut({
pattern:"ctrl+enter",description:this.i18n("mac"==this.OS?"cmdrename":"cmdopen"),callback:function(){
s.exec("mac"==s.OS?"rename":"open")}})),this._commands={
},e.isArray(this.options.commands)||(this.options.commands=[]),e.each(["open","reload","back","forward","up","home","info","quicklook","getfile","help"],function(t,n){
-1===e.inArray(n,s.options.commands)&&s.options.commands.push(n)}),e.each(this.options.commands,function(t,n){
var i=s.commands[n];e.isFunction(i)&&!s._commands[n]&&(i.prototype=z,s._commands[n]=new i,s._commands[n].setup(n,s.options.commandsOptions[n]||{
}))}),t.addClass(this.cssClass).bind(p,function(){
!m&&s.enable()}),this.ui={
workzone:e("<div/>").appendTo(t).elfinderworkzone(this),navbar:e("<div/>").appendTo(t).elfindernavbar(this,this.options.uiOptions.navbar||{
}),contextmenu:e("<div/>").appendTo(t).elfindercontextmenu(this),overlay:e("<div/>").appendTo(t).elfinderoverlay({
show:function(){
s.disable()},hide:function(){
g&&s.enable()}}),cwd:e("<div/>").appendTo(t).elfindercwd(this,this.options.uiOptions.cwd||{
}),notify:this.dialog("",{
cssClass:"elfinder-dialog-notify",position:{
top:"12px",right:"12px"},resizable:!1,autoOpen:!1,title:"&nbsp;",width:280}),statusbar:e('<div class="ui-widget-header ui-helper-clearfix ui-corner-bottom elfinder-statusbar"/>').hide().appendTo(t)},e.each(this.options.ui||[],function(n,i){
var r="elfinder"+i,a=s.options.uiOptions[i]||{
};!s.ui[i]&&e.fn[r]&&(s.ui[i]=e("<"+(a.tag||"div")+"/>").appendTo(t)[r](s,a))}),t[0].elfinder=this,this.options.resizable&&!this.UA.Touch&&e.fn.resizable&&t.resizable({
handles:"se",minWidth:300,minHeight:200}),this.options.width&&(I=this.options.width),this.options.height&&(P=parseInt(this.options.height)),s.resize(I,P),e(document).bind("click."+this.namespace,function(n){
m&&!e(n.target).closest(t).length&&s.disable()}).bind(h+" "+f,function(t){
var n=t.keyCode,i=!(!t.ctrlKey&&!t.metaKey);m&&(e.each(k,function(e,r){
r.type==t.type&&r.keyCode==n&&r.shiftKey==t.shiftKey&&r.ctrlKey==i&&r.altKey==t.altKey&&(t.preventDefault(),t.stopPropagation(),r.callback(t,s),s.debug("shortcut-exec",e+" : "+r.description))}),9!=n||e(t.target).is(":input")||t.preventDefault())}),s.options.useBrowserHistory&&e(window).on("popstate",function(t){
var n=t.originalEvent.state&&t.originalEvent.state.thash;n&&!e.isEmptyObject(s.files())&&s.request({
data:{
cmd:"open",target:n,onhistory:1},notify:{
type:"open",cnt:1,hideCnt:!0},syncOnFail:!0})}),this.trigger("init").request({
data:{
cmd:"open",target:s.startDir(),init:1,tree:this.ui.tree?1:0},preventDone:!0,notify:{
type:"open",cnt:1,hideCnt:!0},freeze:!0}).fail(function(){
s.trigger("fail").disable().lastDir(""),x={
},k={
},e(document).add(t).unbind("."+this.namespace),s.trigger=function(){
}}).done(function(t){
s.load().debug("api",s.api),t=e.extend(!0,{
},t),A(t),s.trigger("open",t)}),void this.one("load",function(){
t.trigger("resize"),s.options.sync>1e3&&(i=setInterval(function(){
s.sync()},s.options.sync))})):alert(this.i18n("errURL")):alert(this.i18n("errNode")):alert(this.i18n("errJqui"))},elFinder.prototype={
res:function(e,t){
return this.resources[e]&&this.resources[e][t]},i18:{
en:{
translator:"",language:"English",direction:"ltr",dateFormat:"d.m.Y H:i",fancyDateFormat:"$1 H:i",messages:{
}},months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},kinds:{
unknown:"Unknown",directory:"Folder",symlink:"Alias","symlink-broken":"AliasBroken","application/x-empty":"TextPlain","application/postscript":"Postscript","application/vnd.ms-office":"MsOffice","application/vnd.ms-word":"MsWord","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"MsWord","application/vnd.ms-word.document.macroEnabled.12":"MsWord","application/vnd.openxmlformats-officedocument.wordprocessingml.template":"MsWord","application/vnd.ms-word.template.macroEnabled.12":"MsWord","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"MsWord","application/vnd.ms-excel":"MsExcel","application/vnd.ms-excel.sheet.macroEnabled.12":"MsExcel","application/vnd.openxmlformats-officedocument.spreadsheetml.template":"MsExcel","application/vnd.ms-excel.template.macroEnabled.12":"MsExcel","application/vnd.ms-excel.sheet.binary.macroEnabled.12":"MsExcel","application/vnd.ms-excel.addin.macroEnabled.12":"MsExcel","application/vnd.ms-powerpoint":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.presentation":"MsPP","application/vnd.ms-powerpoint.presentation.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.slideshow":"MsPP","application/vnd.ms-powerpoint.slideshow.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.template":"MsPP","application/vnd.ms-powerpoint.template.macroEnabled.12":"MsPP","application/vnd.ms-powerpoint.addin.macroEnabled.12":"MsPP","application/vnd.openxmlformats-officedocument.presentationml.slide":"MsPP","application/vnd.ms-powerpoint.slide.macroEnabled.12":"MsPP","application/pdf":"PDF","application/xml":"XML","application/vnd.oasis.opendocument.text":"OO","application/vnd.oasis.opendocument.text-template":"OO","application/vnd.oasis.opendocument.text-web":"OO","application/vnd.oasis.opendocument.text-master":"OO","application/vnd.oasis.opendocument.graphics":"OO","application/vnd.oasis.opendocument.graphics-template":"OO","application/vnd.oasis.opendocument.presentation":"OO","application/vnd.oasis.opendocument.presentation-template":"OO","application/vnd.oasis.opendocument.spreadsheet":"OO","application/vnd.oasis.opendocument.spreadsheet-template":"OO","application/vnd.oasis.opendocument.chart":"OO","application/vnd.oasis.opendocument.formula":"OO","application/vnd.oasis.opendocument.database":"OO","application/vnd.oasis.opendocument.image":"OO","application/vnd.openofficeorg.extension":"OO","application/x-shockwave-flash":"AppFlash","application/flash-video":"Flash video","application/x-bittorrent":"Torrent","application/javascript":"JS","application/rtf":"RTF","application/rtfd":"RTF","application/x-font-ttf":"TTF","application/x-font-otf":"OTF","application/x-rpm":"RPM","application/x-web-config":"TextPlain","application/xhtml+xml":"HTML","application/docbook+xml":"DOCBOOK","application/x-awk":"AWK","application/x-gzip":"GZIP","application/x-bzip2":"BZIP","application/zip":"ZIP","application/x-zip":"ZIP","application/x-rar":"RAR","application/x-tar":"TAR","application/x-7z-compressed":"7z","application/x-jar":"JAR","text/plain":"TextPlain","text/x-php":"PHP","text/html":"HTML","text/javascript":"JS","text/css":"CSS","text/rtf":"RTF","text/rtfd":"RTF","text/x-c":"C","text/x-csrc":"C","text/x-chdr":"CHeader","text/x-c++":"CPP","text/x-c++src":"CPP","text/x-c++hdr":"CPPHeader","text/x-shellscript":"Shell","application/x-csh":"Shell","text/x-python":"Python","text/x-java":"Java","text/x-java-source":"Java","text/x-ruby":"Ruby","text/x-perl":"Perl","text/x-sql":"SQL","text/xml":"XML","text/x-comma-separated-values":"CSV","image/x-ms-bmp":"BMP","image/jpeg":"JPEG","image/gif":"GIF","image/png":"PNG","image/tiff":"TIFF","image/x-targa":"TGA","image/vnd.adobe.photoshop":"PSD","image/xbm":"XBITMAP","image/pxm":"PXM","audio/mpeg":"AudioMPEG","audio/midi":"AudioMIDI","audio/ogg":"AudioOGG","audio/mp4":"AudioMPEG4","audio/x-m4a":"AudioMPEG4","audio/wav":"AudioWAV","audio/x-mp3-playlist":"AudioPlaylist","video/x-dv":"VideoDV","video/mp4":"VideoMPEG4","video/mpeg":"VideoMPEG","video/x-msvideo":"VideoAVI","video/quicktime":"VideoMOV","video/x-ms-wmv":"VideoWM","video/x-flv":"VideoFlash","video/x-matroska":"VideoMKV","video/ogg":"VideoOGG"},rules:{
defaults:function(t){
return!(!t||t.added&&!e.isArray(t.added)||t.removed&&!e.isArray(t.removed)||t.changed&&!e.isArray(t.changed))},open:function(t){
return t&&t.cwd&&t.files&&e.isPlainObject(t.cwd)&&e.isArray(t.files)},tree:function(t){
return t&&t.tree&&e.isArray(t.tree)},parents:function(t){
return t&&t.tree&&e.isArray(t.tree)},tmb:function(t){
return t&&t.images&&(e.isPlainObject(t.images)||e.isArray(t.images))},upload:function(t){
return t&&(e.isPlainObject(t.added)||e.isArray(t.added))},search:function(t){
return t&&t.files&&e.isArray(t.files)}},commands:{
},parseUploadData:function(t){
var n;if(!e.trim(t))return{
error:["errResponse","errDataEmpty"]};try{
n=e.parseJSON(t)}catch(e){
return{
error:["errResponse","errDataNotJSON"]}}return this.validResponse("upload",n)?((n=this.normalize(n)).removed=e.merge(n.removed||[],e.map(n.added||[],function(e){
return e.hash})),n):{
error:["errResponse"]}},iframeCnt:0,uploads:{
checkFile:function(t,n){
if(t.checked||"files"==t.type)return t.files;if("data"==t.type){
var i=e.Deferred(),r=[],a=[],o=[],s=[],l=0,d=function(t){
t.readEntries(function(i){
if(i.length)s=s.concat((p=i,Array.prototype.slice.call(p||[]))),d(t);else{
var c=s.length-1,u=function(t){
var i,d;(i=s[t],d=e.Deferred(),void 0===i?d.reject("empty"):i.isFile?i.file(function(e){
d.resolve(e)},function(e){
d.reject()}):d.reject("dirctory"),d.promise()).done(function(e){
"win"==n.OS&&e.name.match(/^(?:desktop\.ini|thumbs\.db)$/i)||"mac"==n.OS&&e.name.match(/^\.ds_store$/i)||(a.push(s[t].fullPath),r.push(e))}).fail(function(e){
"dirctory"==e&&o.push(s[t])}).always(function(){
l--,t<c&&(l++,u(++t))})};l++,u(0),l--}var p})},c=function(e,n){
var i,c;s=[];for(var u=e.length,p=0;p<u;p++)(c=n?e[p]:e[p].getAsEntry?e[p].getAsEntry():e[p].webkitGetAsEntry())&&(c.isFile?(a.push(""),r.push(t.files.items[p].getAsFile())):c.isDirectory&&(l>0?o.push(c):(l=0,i=c.createReader(),l++,d(i))))};return c(t.files.items),setTimeout(function e(){
l>0?setTimeout(e,10):o.length>0?(c([o.shift()],!0),setTimeout(e,10)):i.resolve([r,a])},10),i.promise()}var u=[],p=[],h=t.files[0];if("html"==t.type){
var f=e("<html/>").append(e.parseHTML(h));e("img[src]",f).each(function(){
var t,n,i=e(this),r=i.closest("a");r&&r.attr("href")&&r.attr("href").match(/\.(?:jpe?g|gif|bmp|png)/i)&&(n=r.attr("href")),(t=i.attr("src"))&&(n?(-1==e.inArray(n,u)&&u.push(n),-1==e.inArray(t,p)&&p.push(t)):-1==e.inArray(t,u)&&u.push(t))}),e("a[href]",f).each(function(){
var t,n,i;e(this).text()&&(n=e(this).attr("href"),(i=document.createElement("a")).href=n,(t=i).href&&!t.pathname.match(/(?:\.html?|\/[^\/.]*)$/i)&&-1==e.inArray(t.href,u)&&-1==e.inArray(t.href,p)&&u.push(t.href))})}else{
var m,g,v;for(m=/(http[^<>"{
}|\\^\[\]`\s]+)/gi;g=m.exec(h);)v=g[1].replace(/&amp;/g,"&"),-1==e.inArray(v,u)&&u.push(v)}return u},iframe:function(t,n){
var i,r,a,o,s=n||this,l=!!t.input&&t.input,d=!l&&s.uploads.checkFile(t,s),c=e.Deferred().fail(function(e){
e&&s.error(e)}).done(function(e){
e.warning&&s.error(e.warning),e.removed&&s.remove(e),e.added&&s.add(e),e.changed&&s.change(e),s.trigger("upload",e),e.sync&&s.sync()}),u="iframe-"+s.namespace+ ++s.iframeCnt,p=e('<form action="'+s.uploadURL+'" method="post" enctype="multipart/form-data" encoding="multipart/form-data" target="'+u+'" style="display:none"><input type="hidden" name="cmd" value="upload" /></form>'),h=this.UA.IE,f=function(){
o&&clearTimeout(o),a&&clearTimeout(a),r&&s.notify({
type:"upload",cnt:-i}),setTimeout(function(){
h&&e('<iframe src="javascript:false;"/>').appendTo(p),p.remove(),m.remove()},100)},m=e('<iframe src="'+(h?"javascript:false;":"about:blank")+'" name="'+u+'" style="position:absolute;left:-1000px;top:-1000px" />').bind("load",function(){
m.unbind("load").bind("load",function(){
var e=s.parseUploadData(m.contents().text());f(),e.error?c.reject(e.error):c.resolve(e)}),a=setTimeout(function(){
r=!0,s.notify({
type:"upload",cnt:i})},s.options.notifyDelay),s.options.iframeTimeout>0&&(o=setTimeout(function(){
f(),c.reject([errors.connect,errors.timeout])},s.options.iframeTimeout)),p.submit()});if(d&&d.length)e.each(d,function(e,t){
p.append('<input type="hidden" name="upload[]" value="'+t+'"/>')}),i=1;else{
if(!(l&&e(l).is(":file")&&e(l).val()))return c.reject();p.append(l),i=l.files?l.files.length:1}return p.append('<input type="hidden" name="'+(s.newAPI?"target":"current")+'" value="'+s.cwd().hash+'"/>').append('<input type="hidden" name="html" value="1"/>').append(e(l).attr("name","upload[]")),e.each(s.options.onlyMimes||[],function(e,t){
p.append('<input type="hidden" name="mimes[]" value="'+t+'"/>')}),e.each(s.options.customData,function(e,t){
p.append('<input type="hidden" name="'+e+'" value="'+t+'"/>')}),p.appendTo("body"),m.appendTo("body"),c},xhr:function(t,n){
var i,r=n||this,a=new XMLHttpRequest,o=null,s=null,l=t.checked,d=t.isDataType||"data"==t.type,c=0,u=e.Deferred().fail(function(e){
e&&r.error(e)}).done(function(e){
a=null,h=null,e.warning&&r.error(e.warning),e.removed&&r.remove(e),e.added&&r.add(e),e.changed&&r.change(e),r.trigger("upload",e),e.sync&&r.sync()}).always(function(){
o&&clearTimeout(o),l&&!t.multiupload&&b()&&r.notify({
type:"upload",cnt:-f,progress:0,size:0}),s&&clearTimeout(s),x&&r.ui.notify.children(".elfinder-notify-chunkmerge").length&&r.notify({
type:"chunkmerge",cnt:-1})}),p=new FormData,h=t.input?t.input.files:r.uploads.checkFile(t,r),f=t.checked&&d?h[0].length:h.length,m=0,g=0,v=!1,b=function(){
return v=v||r.ui.notify.children(".elfinder-notify-upload").length},y=function(e){
return e||(e=g),setTimeout(function(){
v=!0,r.notify({
type:"upload",cnt:f,progress:m-i,size:e}),i=m},r.options.notifyDelay)},w=t.target||r.cwd().hash,x=!1;if(!x&&(i=m),!d&&!f)return u.reject(["errUploadNoFiles"]);a.addEventListener("error",function(){
u.reject("errConnect")},!1),a.addEventListener("abort",function(){
u.reject(["errConnect","errAbort"])},!1),a.addEventListener("load",function(e){
var n,o=a.status,l=0,f="";if(200!=o?f=o>500?"errResponse":"errConnect":(4!=a.readyState&&(f=["errConnect","errTimeout"]),a.responseText||(f=["errResponse","errDataEmpty"])),f){
if(x||c++>3){
var v=d?h[0][0]:h[0];return v._cid?(p=new FormData,h=[{
_chunkfail:!0}],p.append("chunk",v._chunk),p.append("cid",v._cid),d=!1,void k(h)):u.reject(f)}return g=0,a.open("POST",r.uploadURL,!0),void a.send(p)}if(m=g,b()&&(l=m-i)&&r.notify({
type:"upload",cnt:0,progress:l,size:0}),(n=r.parseUploadData(a.responseText))._chunkmerged){
p=new FormData;var y=[{
_chunkmerged:n._chunkmerged,_name:n._name}];return x=!0,s=setTimeout(function(){
r.notify({
type:"chunkmerge",cnt:1})},r.options.notifyDelay),void(d?k(y,h[1]):k(y))}n._multiupload=!!t.multiupload,n.error?u.reject(n.error):u.resolve(n)},!1),a.upload.addEventListener("loadstart",function(e){
!x&&e.lengthComputable&&(m=e.loaded,c&&(m=0),g=e.total,m||(m=parseInt(.05*g)),b()&&(r.notify({
type:"upload",cnt:0,progress:m-i,size:t.multiupload?0:g}),i=m))},!1),a.upload.addEventListener("progress",function(e){
var n;e.lengthComputable&&!x&&(m=e.loaded,!t.checked&&m>0&&!o&&(o=y()),g||(c&&(m=0),g=e.total,m||(m=parseInt(.05*g))),n=m-i,b()&&n/e.total>=.05&&(r.notify({
type:"upload",cnt:0,progress:n,size:0}),i=m))},!1);var k=function(i,s){
var c,h=0,m=1,g=[],v=0,x=f,k=0,C=[],F=+new Date,T=n.uplMaxSize-8190;if(!l&&(d||"files"==t.type)){
c=n.option("uploadMaxSize")?n.option("uploadMaxSize"):0;for(var z=0;z<i.length;z++)if(c&&i[z].size>=c)r.error(r.i18n("errUploadFile",i[z].name)+" "+r.i18n("errUploadFileSize")),f--,x--;else if(n.uplMaxSize&&i[z].size>=n.uplMaxSize){
var I=i[z].size,P=0,M=T,A=-1,D=i[z];x=Math.floor(I/T);for(k+=I,C[F]=0;P<I;){
var O;if("slice"in D)O=D.slice(P,M);else if("mozSlice"in D)O=D.mozSlice(P,M);else{
if(!("webkitSlice"in D)){
O=null;break}O=D.webkitSlice(P,M)}O._chunk=D.name+"."+ ++A+"_"+x+".part",O._cid=F,C[F]++,h&&v++,void 0===g[v]&&(g[v]=[],d&&(g[v][0]=[],g[v][1]=[])),h=n.uplMaxSize,m=1,d?(g[v][0].push(O),g[v][1].push(s[z])):g[v].push(O),M=(P=M)+T}null==O?(r.error(r.i18n("errUploadFile",i[z].name)+" "+r.i18n("errUploadFileSize")),f--,x--):x+=A}else(n.uplMaxSize&&h+i[z].size>=n.uplMaxSize||m>n.uplMaxFile)&&(h=0,m=1,v++),void 0===g[v]&&(g[v]=[],d&&(g[v][0]=[],g[v][1]=[])),d?(g[v][0].push(i[z]),g[v][1].push(s[z])):g[v].push(i[z]),h+=i[z].size,k+=i[z].size,m++;if(0==g.length)return t.checked=!0,!1;if(g.length>1){
o=y(k);var S=[],E=0,U=g.length,j=[],R=function(i,a){
for(var s=[];i.length&&s.length<a;)s.push(i.shift());if(s.length)for(var l=0;l<s.length;l++){
var c=d?s[l][0][0]._cid||null:s[l][0]._cid||null;j[c]?U--:n.exec("upload",{
type:t.type,isDataType:d,files:s[l],checked:!0,target:w,multiupload:!0}).fail(function(e){
c&&(j[c]=!0),e&&r.error(e)}).always(function(t){
t.added&&(S=e.merge(S,t.added)),U<=++E&&(n.trigger("multiupload",{
added:S}),o&&clearTimeout(o),b()&&r.notify({
type:"upload",cnt:-f,progress:0,size:0})),R(i,1)})}};return R(g,3),!0}d?(i=g[0][0],s=g[0][1]):i=g[0]}return l||n.UA.Safari&&t.files||(o=y()),l=!0,i.length||u.reject(["errUploadNoFiles"]),a.open("POST",r.uploadURL,!0),n.customHeaders&&e.each(n.customHeaders,function(e){
a.setRequestHeader(e,this)}),n.xhrFields&&e.each(n.xhrFields,function(e){
e in a&&(a[e]=this)}),p.append("cmd","upload"),p.append(r.newAPI?"target":"current",w),e.each(r.options.customData,function(e,t){
p.append(e,t)}),e.each(r.options.onlyMimes,function(e,t){
p.append("mimes["+e+"]",t)}),e.each(i,function(e,t){
t._chunkmerged?(p.append("chunk",t._chunkmerged),p.append("upload[]",t._name)):(t._chunkfail?(p.append("upload[]","chunkfail"),p.append("mimes","chunkfail")):p.append("upload[]",t),t._chunk&&(p.append("chunk",t._chunk),p.append("cid",t._cid)))}),d&&e.each(s,function(e,t){
p.append("upload_path[]",t)}),a.onreadystatechange=function(){
4==a.readyState&&0==a.status&&u.reject(["errConnect","errAbort"])},a.send(p),!0};return d?l?k(h[0],h[1]):(s=setTimeout(function(){
r.notify({
type:"readdir",cnt:1,hideCnt:!0})},r.options.notifyDelay),h.done(function(e){
s&&clearTimeout(s),r.notify({
type:"readdir",cnt:-1}),(f=e[0].length)?k(e[0],e[1]):u.reject(["errUploadNoFiles"])}).fail(function(){
u.reject(["errUploadNoFiles"])})):k(h)||u.reject(),u}},one:function(t,n){
var i=this,r=e.proxy(n,function(e){
return setTimeout(function(){
i.unbind(e.type,r)},3),n.apply(this,arguments)});return this.bind(t,r)},localStorage:function(e,t){
var n=window.localStorage;if(e="elfinder-"+e+this.id,null===t)return n.removeItem(e);if(void 0!==t)try{
n.setItem(e,t)}catch(i){
n.clear(),n.setItem(e,t)}return n.getItem(e)},cookie:function(t,n){
var i,r,a,o;if(t="elfinder-"+t+this.id,void 0===n){
if(document.cookie&&""!=document.cookie)for(a=document.cookie.split(";"),t+="=",o=0;o<a.length;o++)if(a[o]=e.trim(a[o]),a[o].substring(0,t.length)==t)return decodeURIComponent(a[o].substring(t.length));return""}return r=e.extend({
},this.options.cookie),null===n&&(n="",r.expires=-1),"number"==typeof r.expires&&((i=new Date).setTime(i.getTime()+864e5*r.expires),r.expires=i),document.cookie=t+"="+encodeURIComponent(n)+"; expires="+r.expires.toUTCString()+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":""),n},startDir:function(){
var e=window.location.hash;return e&&e.match(/^#elf_/)?e.replace(/^#elf_/,""):this.lastDir()},lastDir:function(e){
return this.options.rememberLastDir?this.storage("lastdir",e):""},_node:e("<span/>"),escape:function(e){
return this._node.text(e).html()},normalize:function(t){
var n=function(e){
return e&&e.hash&&e.name&&e.mime?("application/x-empty"==e.mime&&(e.mime="text/plain"),e):null};return t.files&&(t.files=e.map(t.files,n)),t.tree&&(t.tree=e.map(t.tree,n)),t.added&&(t.added=e.map(t.added,n)),t.changed&&(t.changed=e.map(t.changed,n)),t.api&&(t.init=!0),t},setSort:function(e,t,n){
this.storage("sortType",this.sortType=this.sortRules[e]?e:"name"),this.storage("sortOrder",this.sortOrder=/asc|desc/.test(t)?t:"asc"),this.storage("sortStickFolders",(this.sortStickFolders=!!n)?1:""),this.trigger("sortchange")},_sortRules:{
name:function(e,t){
return e.name.toLowerCase().localeCompare(t.name.toLowerCase())},size:function(e,t){
var n=parseInt(e.size)||0,i=parseInt(t.size)||0;return n==i?0:n>i?1:-1},kind:function(e,t){
return e.mime.localeCompare(t.mime)},date:function(e,t){
var n=e.ts||e.date,i=t.ts||t.date;return n==i?0:n>i?1:-1}},compare:function(e,t){
var n,i=this.sortType,r="asc"==this.sortOrder,a=this.sortStickFolders,o=this.sortRules,s=o[i],l="directory"==e.mime,d="directory"==t.mime;if(a){
if(l&&!d)return-1;if(!l&&d)return 1}return n=r?s(e,t):s(t,e),"name"!=i&&0==n?n=r?o.name(e,t):o.name(t,e):n},sortFiles:function(e){
return e.sort(this.compare)},notify:function(t){
var n,i,r,a=t.type,o=this.messages["ntf"+a]?this.i18n("ntf"+a):this.i18n("ntfsmth"),s=this.ui.notify,l=s.children(".elfinder-notify-"+a),d=t.cnt,c=void 0!==t.size?parseInt(t.size):null,u=void 0!==t.progress&&t.progress>=0?t.progress:null;return a?(l.length||(l=e('<div class="elfinder-notify elfinder-notify-{
type}"><span class="elfinder-dialog-icon elfinder-dialog-icon-{
type}"/><span class="elfinder-notify-msg">{
msg}</span> <span class="elfinder-notify-cnt"/><div class="elfinder-notify-progressbar"><div class="elfinder-notify-progress"/></div></div>'.replace(/\{
type\}/g,a).replace(/\{
msg\}/g,o)).appendTo(s).data("cnt",0),null!=u&&l.data({
progress:0,total:0})),(n=d+parseInt(l.data("cnt")))>0?(!t.hideCnt&&l.children(".elfinder-notify-cnt").text("("+n+")"),s.is(":hidden")&&s.elfinderdialog("open"),l.data("cnt",n),null!=u&&(i=l.data("total"))>=0&&(r=l.data("progress"))>=0&&(i+=null!=c?c:d,r+=u,null==c&&d<0&&(r+=100*d),l.data({
progress:r,total:i}),null!=c&&(r*=100,i=Math.max(1,i)),u=parseInt(r/i),l.find(".elfinder-notify-progress").animate({
width:(u<100?u:100)+"%"},20))):(l.remove(),!s.children().length&&s.elfinderdialog("close")),this):this},confirm:function(t){
var n,i=!1,r={
cssClass:"elfinder-dialog-confirm",modal:!0,resizable:!1,title:this.i18n(t.title||"confirmReq"),buttons:{
},close:function(){
!i&&t.cancel.callback(),e(this).elfinderdialog("destroy")}},a=this.i18n("apllyAll");return t.reject&&(r.buttons[this.i18n(t.reject.label)]=function(){
t.reject.callback(!(!n||!n.prop("checked"))),i=!0,e(this).elfinderdialog("close")}),r.buttons[this.i18n(t.accept.label)]=function(){
t.accept.callback(!(!n||!n.prop("checked"))),i=!0,e(this).elfinderdialog("close")},r.buttons[this.i18n(t.cancel.label)]=function(){
e(this).elfinderdialog("close")},t.all&&(t.reject&&(r.width=370),r.create=function(){
n=e('<input type="checkbox" />'),e(this).next().children().before(e("<label>"+a+"</label>").prepend(n))},r.open=function(){
var t=e(this).next(),n=parseInt(t.children(":first").outerWidth()+t.children(":last").outerWidth());n>parseInt(t.width())&&e(this).closest(".elfinder-dialog").width(n+30)}),this.dialog('<span class="elfinder-dialog-icon elfinder-dialog-icon-confirm"/>'+this.i18n(t.text),r)},uniqueName:function(e,t){
var n,i,r=0,a="";if(e=this.i18n(e),t=t||this.cwd().hash,-1!=(n=e.indexOf(".txt"))&&(a=".txt",e=e.substr(0,n)),i=e+a,!this.fileByName(i,t))return i;for(;r<1e4;)if(i=e+" "+ ++r+a,!this.fileByName(i,t))return i;return e+Math.random()+a},i18n:function(){
var t,n,i,r=this,a=this.messages,o=[],s=[],l=function(e){
var t;return 0===e.indexOf("#")&&(t=r.file(e.substr(1)))?t.name:e};for(t=0;t<arguments.length;t++)if("string"==typeof(i=arguments[t]))o.push(l(i));else if(e.isArray(i))for(n=0;n<i.length;n++)"string"==typeof i[n]&&o.push(l(i[n]));for(t=0;t<o.length;t++)-1===e.inArray(t,s)&&(i=(i=a[i=o[t]]||i).replace(/\$(\d+)/g,function(e,n){
return(n=t+parseInt(n))>0&&o[n]&&s.push(n),o[n]||""}),o[t]=i);return e.map(o,function(t,n){
return-1===e.inArray(n,s)?t:null}).join("<br>")},mime2class:function(e){
var t="elfinder-cwd-icon-";return t+(e=e.split("/"))[0]+("image"!=e[0]&&e[1]?" "+t+e[1].replace(/(\.|\+)/g,"-"):"")},mime2kind:function(e){
var t,n="object"==typeof e?e.mime:e;return t=e.alias?"Alias":this.kinds[n]?this.kinds[n]:0===n.indexOf("text")?"Text":0===n.indexOf("image")?"Image":0===n.indexOf("audio")?"Audio":0===n.indexOf("video")?"Video":0===n.indexOf("application")?"App":n,this.messages["kind"+t]?this.i18n("kind"+t):n},formatDate:function(e,t){
var n,i,r,a,o,s,l,d,c,u,p=this,h=(t=t||e.ts,p.i18);return p.options.clientFormatDate&&t>0?(n=new Date(1e3*t),l=n[p.getHours](),d=l>12?l-12:l,c=n[p.getMinutes](),u=n[p.getSeconds](),r=n[p.getDate](),a=n[p.getDay](),o=n[p.getMonth]()+1,s=n[p.getFullYear](),i=(t>=this.yesterday?this.fancyFormat:this.dateFormat).replace(/[a-z]/gi,function(e){
switch(e){
case"d":return r>9?r:"0"+r;case"j":return r;case"D":return p.i18n(h.daysShort[a]);case"l":return p.i18n(h.days[a]);case"m":return o>9?o:"0"+o;case"n":return o;case"M":return p.i18n(h.monthsShort[o-1]);case"F":return p.i18n(h.months[o-1]);case"Y":return s;case"y":return(""+s).substr(2);case"H":return l>9?l:"0"+l;case"G":return l;case"g":return d;case"h":return d>9?d:"0"+d;case"a":return l>12?"pm":"am";case"A":return l>12?"PM":"AM";case"i":return c>9?c:"0"+c;case"s":return u>9?u:"0"+u}return e}),t>=this.yesterday?i.replace("$1",this.i18n(t>=this.today?"Today":"Yesterday")):i):e.date?e.date.replace(/([a-z]+)\s/i,function(e,t){
return p.i18n(t)+" "}):p.i18n("dateUnknown")},perms2class:function(e){
var t="";return e.read||e.write?e.read?e.write||(t="elfinder-ro"):t="elfinder-wo":t="elfinder-na",t},formatPermissions:function(e){
var t=[];return e.read&&t.push(this.i18n("read")),e.write&&t.push(this.i18n("write")),t.length?t.join(" "+this.i18n("and")+" "):this.i18n("noaccess")},formatSize:function(e){
var t=1,n="b";return"unknown"==e?this.i18n("unknown"):(e>1073741824?(t=1073741824,n="GB"):e>1048576?(t=1048576,n="MB"):e>1024&&(t=1024,n="KB"),((e/=t)>0?t>=1048576?e.toFixed(2):Math.round(e):0)+" "+n)},navHash2Id:function(e){
return"nav-"+e},navId2Hash:function(e){
return"string"==typeof e&&e.substr(4)},log:function(e){
return window.console&&window.console.log&&window.console.log(e),this},debug:function(t,n){
var i=this.options.debug;return("all"==i||!0===i||e.isArray(i)&&-1!=e.inArray(t,i))&&window.console&&window.console.log&&window.console.log("elfinder debug: ["+t+"] ["+this.id+"]",n),this},time:function(e){
window.console&&window.console.time&&window.console.time(e)},timeEnd:function(e){
window.console&&window.console.timeEnd&&window.console.timeEnd(e)}},elFinder.prototype.version="2.1 (Nightly: da8969b)",e.fn.elfinder=function(e){
return"instance"==e?this.getElFinder():this.each(function(){
var t="string"==typeof e?e:"";switch(this.elfinder||new elFinder(this,"object"==typeof e?e:{
}),t){
case"close":case"hide":this.elfinder.hide();break;case"open":case"show":this.elfinder.show();break;case"destroy":this.elfinder.destroy()}})},e.fn.getElFinder=function(){
var e;return this.each(function(){
if(this.elfinder)return e=this.elfinder,!1}),e},elFinder.prototype._options={
url:"",requestType:"get",transport:{
},urlUpload:"",dragUploadAllow:"auto",iframeTimeout:0,customData:{
},handlers:{
},customHeaders:{
},xhrFields:{
},lang:"en",cssClass:"",commands:["open","reload","home","up","back","forward","getfile","quicklook","download","rm","duplicate","rename","mkdir","mkfile","upload","copy","cut","paste","edit","extract","archive","search","info","view","help","resize","sort","netmount","netunmount"],commandsOptions:{
getfile:{
onlyURL:!1,multiple:!1,folders:!1,oncomplete:""},upload:{
ui:"uploadbutton"},quicklook:{
autoplay:!0,jplayer:"extensions/jplayer"},edit:{
mimes:[],editors:[]},info:{
nullUrlDirLinkSelf:!0},netmount:{
ftp:{
inputs:{
host:e('<input type="text"/>'),port:e('<input type="text"/>'),path:e('<input type="text" value="/"/>'),user:e('<input type="text"/>'),pass:e('<input type="password"/>')}},dropbox:{
inputs:{
host:e('<span><span class="elfinder-info-spinner"/></span></span><input type="hidden"/>'),path:e('<input type="text" value="/"/>'),user:e('<input type="hidden"/>'),pass:e('<input type="hidden"/>')},select:function(e){
var t=this;t.inputs.host.find("span").length&&e.request({
data:{
cmd:"netmount",protocol:"dropbox",host:"dropbox.com",user:"init",pass:"init",options:{
url:e.uploadURL,id:e.id}},preventDefault:!0}).done(function(n){
t.inputs.host.find("span").removeClass("elfinder-info-spinner"),t.inputs.host.find("span").html(n.body.replace(/\{
msg:([^}]+)\}/g,function(t,n){
return e.i18n(n,"Dropbox.com")}))}).fail(function(){
})},done:function(t,n){
var i=this;"makebtn"==n.mode?(i.inputs.host.find("span").removeClass("elfinder-info-spinner"),i.inputs.host.find("input").hover(function(){
e(this).toggleClass("ui-state-hover")}),i.inputs.host[1].value=""):(i.inputs.host.find("span").removeClass("elfinder-info-spinner"),i.inputs.host.find("span").html("Dropbox.com"),i.inputs.host[1].value="dropbox",i.inputs.user.val("done"),i.inputs.pass.val("done"))}}},help:{
view:["about","shortcuts","help"]}},getFileCallback:null,defaultView:"icons",ui:["toolbar","tree","path","stat"],uiOptions:{
toolbar:[["back","forward"],["netmount"],["mkdir","mkfile","upload"],["open","download","getfile"],["info"],["quicklook"],["copy","cut","paste"],["rm"],["duplicate","rename","edit","resize"],["extract","archive"],["search"],["view","sort"],["help"]],tree:{
openRootOnLoad:!0,syncTree:!0},navbar:{
minWidth:150,maxWidth:500},cwd:{
oldSchool:!1}},onlyMimes:[],sortRules:{
},sortType:"name",sortOrder:"asc",sortStickFolders:!0,clientFormatDate:!0,UTCDate:!1,dateFormat:"",fancyDateFormat:"",width:"auto",height:400,resizable:!0,notifyDelay:500,allowShortcuts:!0,rememberLastDir:!0,useBrowserHistory:!0,showFiles:30,showThreshold:50,validName:!1,sync:0,loadTmbs:5,cookie:{
expires:30,domain:"",path:"/",secure:!1},contextmenu:{
navbar:["open","|","copy","cut","paste","duplicate","|","rm","|","info","netunmount"],cwd:["reload","back","|","upload","mkdir","mkfile","paste","|","sort","|","info"],files:["getfile","|","open","quicklook","|","download","|","copy","cut","paste","duplicate","|","rm","|","edit","rename","resize","|","archive","extract","|","info"]},debug:["error","warning","event-destroy"]},elFinder.prototype.history=function(t){
var n,i=this,r=!0,a=[],o=function(){
a=[t.cwd().hash],n=0,r=!0},s=t.options.useBrowserHistory&&window.history&&window.history.pushState?window.history:null,l=function(s){
return s&&i.canForward()||!s&&i.canBack()?(r=!1,t.exec("open",a[s?++n:--n]).fail(o)):e.Deferred().reject()};this.canBack=function(){
return n>0},this.canForward=function(){
return n<a.length-1},this.back=l,this.forward=function(){
return l(!0)},t.open(function(e){
var i=a.length,o=t.cwd().hash;r&&(n>=0&&i>n+1&&a.splice(n+1),a[a.length-1]!=o&&a.push(o),n=a.length-1),r=!0,s&&(s.state?s.state.thash!=o&&s.pushState({
thash:o},null,location.pathname+location.search+"#elf_"+o):s.replaceState({
thash:o},null,location.pathname+location.search+"#elf_"+o))}).reload(o)},elFinder.prototype.command=function(t){
this.fm=t,this.name="",this.title="",this.state=-1,this.alwaysEnabled=!1,this._disabled=!1,this.disableOnSearch=!1,this.updateOnSelect=!0,this._handlers={
enable:function(){
this.update(void 0,this.value)},disable:function(){
this.update(-1,this.value)},"open reload load":function(e){
this._disabled=!(this.alwaysEnabled||this.fm.isCommandEnabled(this.name)),this.update(void 0,this.value),this.change()}},this.handlers={
},this.shortcuts=[],this.options={
ui:"button"},this.setup=function(t,n){
var i,r,a=this,o=this.fm;for(this.name=t,this.title=o.messages["cmd"+t]?o.i18n("cmd"+t):t,this.options=e.extend({
},this.options,n),this.listeners=[],this.updateOnSelect&&(this._handlers.select=function(){
this.update(void 0,this.value)}),e.each(e.extend({
},a._handlers,a.handlers),function(t,n){
o.bind(t,e.proxy(n,a))}),i=0;i<this.shortcuts.length;i++)(r=this.shortcuts[i]).callback=e.proxy(r.callback||function(){
this.exec()},this),!r.description&&(r.description=this.title),o.shortcut(r);this.disableOnSearch&&o.bind("search searchend",function(e){
a._disabled="search"==e.type,a.update(void 0,a.value)}),this.init()},this.init=function(){
},this.exec=function(t,n){
return e.Deferred().reject()},this.disabled=function(){
return this.state<0},this.enabled=function(){
return this.state>-1},this.active=function(){
return this.state>0},this.getstate=function(){
return-1},this.update=function(e,t){
var n=this.state,i=this.value;this._disabled?this.state=-1:this.state=void 0!==e?e:this.getstate(),this.value=t,n==this.state&&i==this.value||this.change()},this.change=function(e){
var t,n;if("function"==typeof e)this.listeners.push(e);else for(n=0;n<this.listeners.length;n++){
t=this.listeners[n];try{
t(this.state,this.value)}catch(e){
this.fm.debug("error",e)}}return this},this.hashes=function(n){
return n?e.map(e.isArray(n)?n:[n],function(e){
return t.file(e)?e:null}):t.selected()},this.files=function(t){
var n=this.fm;return t?e.map(e.isArray(t)?t:[t],function(e){
return n.file(e)||null}):n.selectedFiles()}},elFinder.prototype.resources={
class:{
hover:"ui-state-hover",active:"ui-state-active",disabled:"ui-state-disabled",draggable:"ui-draggable",droppable:"ui-droppable",adroppable:"elfinder-droppable-active",cwdfile:"elfinder-cwd-file",cwd:"elfinder-cwd",tree:"elfinder-tree",treeroot:"elfinder-navbar-root",navdir:"elfinder-navbar-dir",navdirwrap:"elfinder-navbar-dir-wrapper",navarrow:"elfinder-navbar-arrow",navsubtree:"elfinder-navbar-subtree",navcollapse:"elfinder-navbar-collapsed",navexpand:"elfinder-navbar-expanded",treedir:"elfinder-tree-dir",placedir:"elfinder-place-dir",searchbtn:"elfinder-button-search"},tpl:{
perms:'<span class="elfinder-perms"/>',lock:'<span class="elfinder-lock"/>',symlink:'<span class="elfinder-symlink"/>',navicon:'<span class="elfinder-nav-icon"/>',navspinner:'<span class="elfinder-navbar-spinner"/>',navdir:'<div class="elfinder-navbar-wrapper"><span id="{
id}" class="ui-corner-all elfinder-navbar-dir {
cssclass}"><span class="elfinder-navbar-arrow"/><span class="elfinder-navbar-icon" {
style}/>{
symlink}{
permissions}{
name}</span><div class="elfinder-navbar-subtree"/></div>'},mimes:{
text:["application/x-empty","application/javascript","application/xhtml+xml","audio/x-mp3-playlist","application/x-web-config","application/docbook+xml","application/x-php","application/x-perl","application/x-awk","application/x-config","application/x-csh","application/xml"]},mixin:{
make:function(){
var t=this.fm,n=this.name,i=t.getUI("cwd"),r=e.Deferred().fail(function(e){
i.trigger("unselectall"),e&&t.error(e)}).always(function(){
c.remove(),d.remove(),t.enable()}),a="tmp_"+parseInt(1e5*Math.random()),o=t.cwd().hash,s=new Date,l={
hash:a,name:t.uniqueName(this.prefix),mime:this.mime,read:!0,write:!0,date:"Today "+s.getHours()+":"+s.getMinutes()},d=i.trigger("create."+t.namespace,l).find("#"+a),c=e('<input type="text"/>').keydown(function(t){
t.stopImmediatePropagation(),t.keyCode==e.ui.keyCode.ESCAPE?r.reject():t.keyCode==e.ui.keyCode.ENTER&&c.blur()}).mousedown(function(e){
e.stopPropagation()}).blur(function(){
var i=e.trim(c.val()),s=c.parent();if(s.length){
if(!i)return r.reject("errInvName");if(t.fileByName(i,o))return r.reject(["errExists",i]);s.html(t.escape(i)),t.lockfiles({
files:[a]}),t.request({
data:{
cmd:n,name:i,target:o},notify:{
type:n,cnt:1},preventFail:!0,syncOnFail:!0}).fail(function(e){
r.reject(e)}).done(function(e){
r.resolve(e)})}});return this.disabled()||!d.length?r.reject():(t.disable(),d.find(".elfinder-cwd-filename").empty("").append(c.val(l.name)),c.select().focus(),c[0].setSelectionRange&&c[0].setSelectionRange(0,l.name.replace(/\..+$/,"").length),r)}}},e.fn.dialogelfinder=function(t){
var n="elfinderPosition",i="elfinderDestroyOnClose";if(this.not(".elfinder").each(function(){
e(document);var r=e('<div class="ui-widget-header dialogelfinder-drag ui-corner-top">'+(t.title||"Files")+"</div>"),a=(e('<a href="#" class="dialogelfinder-drag-close ui-corner-all"><span class="ui-icon ui-icon-closethick"/></a>').appendTo(r).click(function(e){
e.preventDefault(),a.dialogelfinder("close")}),e(this).addClass("dialogelfinder").css("position","absolute").hide().appendTo("body").draggable({
handle:".dialogelfinder-drag",containment:"window"}).elfinder(t).prepend(r));a.elfinder("instance");a.width(parseInt(a.width())||840).data(i,!!t.destroyOnClose).find(".elfinder-toolbar").removeClass("ui-corner-top"),t.position&&a.data(n,t.position),!1!==t.autoOpen&&e(this).dialogelfinder("open")}),"open"==t){
var r=(o=e(this)).data(n)||{
top:parseInt(e(document).scrollTop()+(e(window).height()<o.height()?2:(e(window).height()-o.height())/2)),left:parseInt(e(document).scrollLeft()+(e(window).width()<o.width()?2:(e(window).width()-o.width())/2))},a=100;o.is(":hidden")&&(e("body").find(":visible").each(function(){
var t,n=e(this);this!==o[0]&&"absolute"==n.css("position")&&(t=parseInt(n.zIndex()))>a&&(a=t+1)}),o.zIndex(a).css(r).show().trigger("resize"),setTimeout(function(){
o.trigger("resize").mousedown()},200))}else if("close"==t){
var o;(o=e(this)).is(":visible")&&(o.data(i)?o.elfinder("destroy").remove():o.elfinder("close"))}else if("instance"==t)return e(this).getElFinder();return this},elFinder&&elFinder.prototype&&"object"==typeof elFinder.prototype.i18&&(elFinder.prototype.i18.en={
translator:"Troex Nevelin &lt;troex@fury.scancode.ru&gt;",language:"English",direction:"ltr",dateFormat:"M d, Y h:i A",fancyDateFormat:"$1 h:i A",messages:{
error:"Error",errUnknown:"Unknown error.",errUnknownCmd:"Unknown command.",errJqui:"Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.",errNode:"elFinder requires DOM Element to be created.",errURL:"Invalid elFinder configuration! URL option is not set.",errAccess:"Access denied.",errConnect:"Unable to connect to backend.",errAbort:"Connection aborted.",errTimeout:"Connection timeout.",errNotFound:"Backend not found.",errResponse:"Invalid backend response.",errConf:"Invalid backend configuration.",errJSON:"PHP JSON module not installed.",errNoVolumes:"Readable volumes not available.",errCmdParams:'Invalid parameters for command "$1".',errDataNotJSON:"Data is not JSON.",errDataEmpty:"Data is empty.",errCmdReq:"Backend request requires command name.",errOpen:'Unable to open "$1".',errNotFolder:"Object is not a folder.",errNotFile:"Object is not a file.",errRead:'Unable to read "$1".',errWrite:'Unable to write into "$1".',errPerm:"Permission denied.",errLocked:'"$1" is locked and can not be renamed, moved or removed.',errExists:'File named "$1" already exists.',errInvName:"Invalid file name.",errFolderNotFound:"Folder not found.",errFileNotFound:"File not found.",errTrgFolderNotFound:'Target folder "$1" not found.',errPopup:"Browser prevented opening popup window. To open file enable it in browser options.",errMkdir:'Unable to create folder "$1".',errMkfile:'Unable to create file "$1".',errRename:'Unable to rename "$1".',errCopyFrom:'Copying files from volume "$1" not allowed.',errCopyTo:'Copying files to volume "$1" not allowed.',errUpload:"Upload error.",errUploadFile:'Unable to upload "$1".',errUploadNoFiles:"No files found for upload.",errUploadTotalSize:"Data exceeds the maximum allowed size.",errUploadFileSize:"File exceeds maximum allowed size.",errUploadMime:"File type not allowed.",errUploadTransfer:'"$1" transfer error.',errNotReplace:'Object "$1" already exists at this location and can not be replaced by object with another type.',errReplace:'Unable to replace "$1".',errSave:'Unable to save "$1".',errCopy:'Unable to copy "$1".',errMove:'Unable to move "$1".',errCopyInItself:'Unable to copy "$1" into itself.',errRm:'Unable to remove "$1".',errRmSrc:"Unable remove source file(s).",errExtract:'Unable to extract files from "$1".',errArchive:"Unable to create archive.",errArcType:"Unsupported archive type.",errNoArchive:"File is not archive or has unsupported archive type.",errCmdNoSupport:"Backend does not support this command.",errReplByChild:"The folder “$1” can’t be replaced by an item it contains.",errArcSymlinks:"For security reason denied to unpack archives contains symlinks or files with not allowed names.",errArcMaxSize:"Archive files exceeds maximum allowed size.",errResize:'Unable to resize "$1".',errResizeDegree:"Invalid rotate degree.",errResizeRotate:"Image dose not rotated.",errResizeSize:"Invalid image size.",errResizeNoChange:"Image size not changed.",errUsupportType:"Unsupported file type.",errNotUTF8Content:'File "$1" is not in UTF-8 and cannot be edited.',errNetMount:'Unable to mount "$1".',errNetMountNoDriver:"Unsupported protocol.",errNetMountFailed:"Mount failed.",errNetMountHostReq:"Host required.",errSessionExpires:"Your session has expired due to inactivity.",errCreatingTempDir:'Unable to create temporary directory: "$1"',errFtpDownloadFile:'Unable to download file from FTP: "$1"',errFtpUploadFile:'Unable to upload file to FTP: "$1"',errFtpMkdir:'Unable to create remote directory on FTP: "$1"',errArchiveExec:'Error while archiving files: "$1"',errExtractExec:'Error while extracting files: "$1"',errNetUnMount:"Unable to unmount",errConvUTF8:"Not convertible to UTF-8",cmdarchive:"Create archive",cmdback:"Back",cmdcopy:"Copy",cmdcut:"Cut",cmddownload:"Download",cmdduplicate:"Duplicate",cmdedit:"Edit file",cmdextract:"Extract files from archive",cmdforward:"Forward",cmdgetfile:"Select files",cmdhelp:"About this software",cmdhome:"Home",cmdinfo:"Get info",cmdmkdir:"New folder",cmdmkfile:"New text file",cmdopen:"Open",cmdpaste:"Paste",cmdquicklook:"Preview",cmdreload:"Reload",cmdrename:"Rename",cmdrm:"Delete",cmdsearch:"Find files",cmdup:"Go to parent directory",cmdupload:"Upload files",cmdview:"View",cmdresize:"Resize & Rotate",cmdsort:"Sort",cmdnetmount:"Mount network volume",cmdnetunmount:"Unmount",btnClose:"Close",btnSave:"Save",btnRm:"Remove",btnApply:"Apply",btnCancel:"Cancel",btnNo:"No",btnYes:"Yes",btnMount:"Mount",btnApprove:"Goto $1 & approve",btnUnmount:"Unmount",btnConv:"Convert",ntfopen:"Open folder",ntffile:"Open file",ntfreload:"Reload folder content",ntfmkdir:"Creating directory",ntfmkfile:"Creating files",ntfrm:"Delete files",ntfcopy:"Copy files",ntfmove:"Move files",ntfprepare:"Prepare to copy files",ntfrename:"Rename files",ntfupload:"Uploading files",ntfdownload:"Downloading files",ntfsave:"Save files",ntfarchive:"Creating archive",ntfextract:"Extracting files from archive",ntfsearch:"Searching files",ntfresize:"Resizing images",ntfsmth:"Doing something",ntfloadimg:"Loading image",ntfnetmount:"Mounting network volume",ntfnetunmount:"Unmounting network volume",ntfdim:"Acquiring image dimension",ntfreaddir:"Reading folder infomation",ntfurl:"Getting URL of link",dateUnknown:"unknown",Today:"Today",Yesterday:"Yesterday",Jan:"Jan",Feb:"Feb",Mar:"Mar",Apr:"Apr",May:"May",Jun:"Jun",Jul:"Jul",Aug:"Aug",Sep:"Sep",Oct:"Oct",Nov:"Nov",Dec:"Dec",sortname:"by name",sortkind:"by kind",sortsize:"by size",sortdate:"by date",sortFoldersFirst:"Folders first",confirmReq:"Confirmation required",confirmRm:"Are you sure you want to remove files?<br/>This cannot be undone!",confirmRepl:"Replace old file with new one?",confirmConvUTF8:"Not in UTF-8<br/>Convert to UTF-8?<br/>Contents become UTF-8 by saving after conversion.",apllyAll:"Apply to all",name:"Name",size:"Size",perms:"Permissions",modify:"Modified",kind:"Kind",read:"read",write:"write",noaccess:"no access",and:"and",unknown:"unknown",selectall:"Select all files",selectfiles:"Select file(s)",selectffile:"Select first file",selectlfile:"Select last file",viewlist:"List view",viewicons:"Icons view",places:"Places",calc:"Calculate",path:"Path",aliasfor:"Alias for",locked:"Locked",dim:"Dimensions",files:"Files",folders:"Folders",items:"Items",yes:"yes",no:"no",link:"Link",searcresult:"Search results",selected:"selected items",about:"About",shortcuts:"Shortcuts",help:"Help",webfm:"Web file manager",ver:"Version",protocolver:"protocol version",homepage:"Project home",docs:"Documentation",github:"Fork us on Github",twitter:"Follow us on twitter",facebook:"Join us on facebook",team:"Team",chiefdev:"chief developer",developer:"developer",contributor:"contributor",maintainer:"maintainer",translator:"translator",icons:"Icons",dontforget:"and don't forget to take your towel",shortcutsof:"Shortcuts disabled",dropFiles:"Drop files here",or:"or",selectForUpload:"Select files to upload",moveFiles:"Move files",copyFiles:"Copy files",rmFromPlaces:"Remove from places",aspectRatio:"Aspect ratio",scale:"Scale",width:"Width",height:"Height",resize:"Resize",crop:"Crop",rotate:"Rotate","rotate-cw":"Rotate 90 degrees CW","rotate-ccw":"Rotate 90 degrees CCW",degree:"°",netMountDialogTitle:"Mount network volume",protocol:"Protocol",host:"Host",port:"Port",user:"User",pass:"Password",confirmUnmount:"Are you unmount $1?",dropFilesBrowser:"Drop or Paste files from browser",dropPasteFiles:"Drop or Paste files here",kindUnknown:"Unknown",kindFolder:"Folder",kindAlias:"Alias",kindAliasBroken:"Broken alias",kindApp:"Application",kindPostscript:"Postscript document",kindMsOffice:"Microsoft Office document",kindMsWord:"Microsoft Word document",kindMsExcel:"Microsoft Excel document",kindMsPP:"Microsoft Powerpoint presentation",kindOO:"Open Office document",kindAppFlash:"Flash application",kindPDF:"Portable Document Format (PDF)",kindTorrent:"Bittorrent file",kind7z:"7z archive",kindTAR:"TAR archive",kindGZIP:"GZIP archive",kindBZIP:"BZIP archive",kindZIP:"ZIP archive",kindRAR:"RAR archive",kindJAR:"Java JAR file",kindTTF:"True Type font",kindOTF:"Open Type font",kindRPM:"RPM package",kindText:"Text document",kindTextPlain:"Plain text",kindPHP:"PHP source",kindCSS:"Cascading style sheet",kindHTML:"HTML document",kindJS:"Javascript source",kindRTF:"Rich Text Format",kindC:"C source",kindCHeader:"C header source",kindCPP:"C++ source",kindCPPHeader:"C++ header source",kindShell:"Unix shell script",kindPython:"Python source",kindJava:"Java source",kindRuby:"Ruby source",kindPerl:"Perl script",kindSQL:"SQL source",kindXML:"XML document",kindAWK:"AWK source",kindCSV:"Comma separated values",kindDOCBOOK:"Docbook XML document",kindImage:"Image",kindBMP:"BMP image",kindJPEG:"JPEG image",kindGIF:"GIF Image",kindPNG:"PNG Image",kindTIFF:"TIFF image",kindTGA:"TGA image",kindPSD:"Adobe Photoshop image",kindXBITMAP:"X bitmap image",kindPXM:"Pixelmator image",kindAudio:"Audio media",kindAudioMPEG:"MPEG audio",kindAudioMPEG4:"MPEG-4 audio",kindAudioMIDI:"MIDI audio",kindAudioOGG:"Ogg Vorbis audio",kindAudioWAV:"WAV audio",AudioPlaylist:"MP3 playlist",kindVideo:"Video media",kindVideoDV:"DV movie",kindVideoMPEG:"MPEG movie",kindVideoMPEG4:"MPEG-4 movie",kindVideoAVI:"AVI movie",kindVideoMOV:"Quick Time movie",kindVideoWM:"Windows Media movie",kindVideoFlash:"Flash movie",kindVideoMKV:"Matroska movie",kindVideoOGG:"Ogg movie"}}),e.fn.elfinderbutton=function(t){
return this.each(function(){
var n,i="class",r=t.fm,a=r.res(i,"disabled"),o=r.res(i,"active"),s=r.res(i,"hover"),l="elfinder-button-menu-item",d=e(this).addClass("ui-state-default elfinder-button").attr("title",t.title).append('<span class="elfinder-button-icon elfinder-button-icon-'+t.name+'"/>').hover(function(e){
!d.is("."+a)&&d["mouseleave"==e.type?"removeClass":"addClass"](s)}).click(function(e){
d.is("."+a)||(n&&t.variants.length>1?(n.is(":hidden")&&t.fm.getUI().click(),e.stopPropagation(),n.slideToggle(100)):t.exec())}),c=function(){
n.hide()};e.isArray(t.variants)&&(d.addClass("elfinder-menubutton"),n=e('<div class="ui-widget ui-widget-content elfinder-button-menu ui-corner-all"/>').hide().appendTo(d).zIndex(12+d.zIndex()).delegate("."+l,"mouseenter mouseleave",function(){
e(this).toggleClass(s)}).delegate("."+l,"click",function(n){
n.preventDefault(),n.stopPropagation(),d.removeClass(s),t.exec(t.fm.selected(),e(this).data("value"))}),t.fm.bind("disable select",c).getUI().click(c),t.change(function(){
n.html(""),e.each(t.variants,function(i,r){
n.append(e('<div class="'+l+'">'+r[1]+"</div>").data("value",r[0]).addClass(r[0]==t.value?"elfinder-button-menu-item-selected":""))})})),t.change(function(){
t.disabled()?d.removeClass(o+" "+s).addClass(a):(d.removeClass(a),d[t.active()?"addClass":"removeClass"](o))}).change()})},e.fn.elfindercontextmenu=function(t){
return this.each(function(){
var n=e(this).addClass("ui-helper-reset ui-widget ui-state-default ui-corner-all elfinder-contextmenu elfinder-contextmenu-"+t.direction).hide().appendTo("body").delegate(".elfinder-contextmenu-item","mouseenter mouseleave",function(){
e(this).toggleClass("ui-state-hover")}),i="ltr"==t.direction?"left":"right",r=e.extend({
},t.options.contextmenu),a=function(t,n,i){
return e('<div class="elfinder-contextmenu-item"><span class="elfinder-button-icon {
icon} elfinder-contextmenu-icon"/><span>{
label}</span></div>'.replace("{
icon}",n?"elfinder-button-icon-"+n:"").replace("{
label}",t)).click(function(e){
e.stopPropagation(),e.stopPropagation(),i()})},o=function(){
n.hide().empty()};t.one("load",function(){
t.bind("contextmenu",function(s){
var l,d,c,u,p,h,f,m,g,v,b,y,w,x,k,C=s.data;o(),C.type&&C.targets?(d=C.type,c=C.targets,u=!1,e.each(r[d]||[],function(i,r){
var s,l,d;if("|"==r&&u)return n.append('<div class="elfinder-contextmenu-separator"/>'),void(u=!1);if((s=t.command(r))&&-1!=s.getstate(c)){
if(s.variants){
if(!s.variants.length)return;l=a(s.title,s.name,function(){
}),d=e('<div class="ui-corner-all elfinder-contextmenu-sub"/>').appendTo(l.append('<span class="elfinder-contextmenu-arrow"/>')),l.addClass("elfinder-contextmenu-group").hover(function(){
d.toggle()}),e.each(s.variants,function(t,n){
d.append(e('<div class="elfinder-contextmenu-item"><span>'+n[1]+"</span></div>").click(function(e){
e.stopPropagation(),o(),s.exec(c,n[0])}))})}else l=a(s.title,s.name,function(){
o(),s.exec(c)});n.append(l),u=!0}})):C.raw&&(l=C.raw,e.each(l,function(e,t){
var i;t.label&&"function"==typeof t.callback&&(i=a(t.label,t.icon,function(){
o(),t.callback()}),n.append(i))})),n.children().length&&(p=C.x,h=C.y,f=e(window),m=n.outerWidth(),g=n.outerHeight(),v=f.width(),b=f.height(),y=f.scrollTop(),w=f.scrollLeft(),x=t.UA.Touch?10:0,k={
top:(h+x+g<b?h+x:h-x-g>0?h-x-g:h+x)+y,left:(p+x+m<v?p+x:p-x-m)+w,"z-index":100+t.getUI("workzone").zIndex()},n.css(k).show(),(k={
"z-index":k["z-index"]+10})[i]=parseInt(n.width()),n.find(".elfinder-contextmenu-sub").css(k))}).one("destroy",function(){
n.remove()}).bind("disable select",o).getUI().click(o)})})},e.fn.elfindercwd=function(t,n){
return this.not(".elfinder-cwd").each(function(){
var i="list"==t.viewType,r="select."+t.namespace,a="unselect."+t.namespace,o="disable."+t.namespace,s="enable."+t.namespace,l="class",d=t.res(l,"cwdfile"),c="."+d,u="ui-selected",p=t.res(l,"disabled"),h=t.res(l,"draggable"),f=t.res(l,"droppable"),m=t.res(l,"hover"),g=t.res(l,"adroppable"),v=d+"-tmp",b=t.options.loadTmbs>0?t.options.loadTmbs:5,y="",w=[],x={
icon:'<div id="{
hash}" class="'+d+' {
permsclass} {
dirclass} ui-corner-all" title="{
tooltip}"><div class="elfinder-cwd-file-wrapper ui-corner-all"><div class="elfinder-cwd-icon {
mime} ui-corner-all" unselectable="on" {
style}/>{
marker}</div><div class="elfinder-cwd-filename" title="{
name}">{
name}</div></div>',row:'<tr id="{
hash}" class="'+d+' {
permsclass} {
dirclass}" title="{
tooltip}"><td><div class="elfinder-cwd-file-wrapper"><span class="elfinder-cwd-icon {
mime}"/>{
marker}<span class="elfinder-cwd-filename">{
name}</span></div></td><td>{
perms}</td><td>{
date}</td><td>{
size}</td><td>{
kind}</td></tr>'},k=t.res("tpl","perms"),C=t.res("tpl","lock"),F=t.res("tpl","symlink"),T={
permsclass:function(e){
return t.perms2class(e)},perms:function(e){
return t.formatPermissions(e)},dirclass:function(e){
return"directory"==e.mime?"directory":""},mime:function(e){
return t.mime2class(e.mime)},size:function(e){
return t.formatSize(e.size)},date:function(e){
return t.formatDate(e)},kind:function(e){
return t.mime2kind(e)},marker:function(e){
return(e.alias||"symlink-broken"==e.mime?F:"")+(e.read&&e.write?"":k)+(e.locked?C:"")},tooltip:function(e){
var n=t.formatDate(e)+(e.size>0?" ("+t.formatSize(e.size)+")":"");return e.tooltip?t.escape(e.tooltip).replace(/"/g,"&quot;").replace(/\r/g,"&#13;")+"&#13;"+n:n}},z=function(e){
return e.name=t.escape(e.name),x[i?"row":"icon"].replace(/\{
([a-z]+)\}/g,function(t,n){
return T[n]?T[n](e):e[n]?e[n]:""})},I=!1,P=[],M=function(e){
J.find("#"+e).trigger(r)},A=function(){
P=[],J.find("[id]."+u).trigger(a),D()},D=function(){
t.trigger("select",{
selected:P})},O=function(e){
var t=e.position().top,n=e.outerHeight(!0),i=X.scrollTop(),r=X.innerHeight();t+n>i+r?X.scrollTop(parseInt(t+n-r)):t<i&&X.scrollTop(t)},S=[],E=function(e){
for(var t=S.length;t--;)if(S[t].hash==e)return t;return-1},U="scroll."+t.namespace,j=function(){
var n,a=[],o=!1,s=[],l={
},d=J.find("[id]:last"),c=!d.length,p=i?J.children("table").children("tbody"):J;if(!S.length)return X.unbind(U);for(;(!d.length||d.position().top<=X.height()+X.scrollTop()+t.options.showThreshold)&&(n=S.splice(0,t.options.showFiles)).length;)a=e.map(n,function(e){
return e.hash&&e.name?("directory"==e.mime&&(o=!0),e.tmb&&(1===e.tmb?s.push(e.hash):l[e.hash]=e.tmb),z(e)):null}),p.append(a.join("")),d=J.find("[id]:last"),c&&J.scrollTop(0);H(l),s.length&&L(s),o&&q(),P.length&&p.find("[id]:not(."+u+"):not(.elfinder-cwd-parent)").each(function(){
var t=this.id;-1!==e.inArray(t,P)&&e(this).trigger(r)})},R=e.extend({
},t.droppable,{
over:function(n,i){
var r=t.cwd().hash;e.each(i.helper.data("files"),function(e,n){
if(t.file(n).phash==r)return J.removeClass(g),!1})}}),q=function(){
setTimeout(function(){
J.find(".directory:not(."+f+",.elfinder-na,.elfinder-ro)").droppable(t.droppable)},20)},H=function(n){
var i,r=t.option("tmbUrl"),a=!0;return e.each(n,function(t,n){
var o,s,l=J.find("#"+t);l.length?(o=l,s=r+n,e("<img/>").load(function(){
o.find(".elfinder-cwd-icon").css("background","url('"+s+"') center center no-repeat")}).attr("src",s)):(a=!1,-1!=(i=E(t))&&(S[i].tmb=n))}),a},L=function(e){
var n=[];t.oldAPI?t.request({
data:{
cmd:"tmb",current:t.cwd().hash},preventFail:!0}).done(function(e){
H(e.images||[])&&e.tmb&&L()}):(n=n=e.splice(0,b)).length&&t.request({
data:{
cmd:"tmb",targets:n},preventFail:!0}).done(function(t){
H(t.images||[])&&L(e)})},_=function(e){
for(var n,r,a,o,s=i?J.find("tbody"):J,l=e.length,d=[],c={
},u=!1,p=function(e){
for(var n,i=J.find("[id]:first");i.length;){
if(n=t.file(i.attr("id")),!i.is(".elfinder-cwd-parent")&&n&&t.compare(e,n)<0)return i;i=i.next("[id]")}},h=function(e){
var n,i=S.length;for(n=0;n<i;n++)if(t.compare(e,S[n])<0)return n;return i||-1};l--;)r=(n=e[l]).hash,J.find("#"+r).length||((a=p(n))&&a.length?a.before(z(n)):(o=h(n))>=0?S.splice(o,0,n):s.append(z(n)),J.find("#"+r).length&&("directory"==n.mime?u=!0:n.tmb&&(1===n.tmb?d.push(r):c[r]=n.tmb)));H(c),d.length&&L(d),u&&q()},N=function(e){
for(var n,i,r,a=e.length;a--;)if(n=e[a],(i=J.find("#"+n)).length)try{
i.detach()}catch(e){
t.debug("error",e)}else-1!=(r=E(n))&&S.splice(r,1)},W=t.i18n("name"),V=t.i18n("perms"),B=t.i18n("modify"),K=t.i18n("size"),$=t.i18n("kind"),G=function(r,a){
var o=t.cwd().hash;A();try{
J.children("table,"+c).remove()}catch(e){
J.html("")}if(J.removeClass("elfinder-cwd-view-icons elfinder-cwd-view-list").addClass("elfinder-cwd-view-"+(i?"list":"icons")),X[i?"addClass":"removeClass"]("elfinder-cwd-wrapper-list"),i&&J.html('<table><thead><tr class="ui-state-default"><td >'+W+"</td><td>"+V+"</td><td>"+B+"</td><td>"+K+"</td><td>"+$+"</td></tr></thead><tbody/></table>"),S=e.map(r,function(e){
return a||e.phash==o?e:null}),S=t.sortFiles(S),X.bind(U,j).trigger(U),o=t.cwd().phash,n.oldSchool&&o&&!y){
var s=e.extend(!0,{
},t.file(o),{
name:"..",mime:"directory"});s=e(z(s)).addClass("elfinder-cwd-parent").bind("mousedown click mouseup touchstart touchmove touchend dblclick mouseenter",function(e){
e.preventDefault(),e.stopPropagation()}).dblclick(function(){
t.exec("open",this.id)}),(i?J.find("tbody"):J).prepend(s)}},J=e(this).addClass("ui-helper-clearfix elfinder-cwd").attr("unselectable","on").delegate(c,"click."+t.namespace,function(n){
var i=this.id?e(this):e(this).parents("[id]:first"),o=i.prevAll("."+u+":first"),s=i.nextAll("."+u+":first"),l=o.length,d=s.length;if(J.data("longtap"))n.stopPropagation();else{
if(n.stopImmediatePropagation(),n.shiftKey&&(l||d))(l?i.prevUntil("#"+o.attr("id")):i.nextUntil("#"+s.attr("id"))).add(i).trigger(r);else if(n.ctrlKey||n.metaKey)i.trigger(i.is("."+u)?a:r);else{
if(i.data("touching")&&i.is("."+u))return i.data("touching",null),t.dblclick({
file:this.id}),void A();A(),i.trigger(r)}D()}}).delegate(c,"dblclick."+t.namespace,function(e){
t.dblclick({
file:this.id})}).delegate(c,"touchstart."+t.namespace,function(n){
n.stopPropagation();var i=this.id?e(this):e(this).parents("[id]:first"),o=i.prevAll("."+u+":first").length+i.nextAll("."+u+":first").length;J.data("longtap",null),i.data("touching",!0),i.data("tmlongtap",setTimeout(function(){
J.data("longtap",!0),i.is("."+u)&&o>0?(i.trigger(a),D()):(i.trigger(r),D(),i.trigger(t.trigger("contextmenu",{
type:"files",targets:t.selected(),x:n.originalEvent.touches[0].clientX,y:n.originalEvent.touches[0].clientY})))},500))}).delegate(c,"touchmove."+t.namespace+" touchend."+t.namespace,function(t){
var n=this.id?e(this):e(this).parents("[id]:first");t.stopPropagation(),clearTimeout(n.data("tmlongtap"))}).delegate(c,"mouseenter."+t.namespace,function(n){
var r=e(this),a=i?r:r.children();r.is("."+v)||a.is("."+h+",."+p)||a.draggable(t.draggable)}).delegate(c,r,function(t){
var n=e(this),i=n.attr("id");I||n.is("."+p)||(n.addClass(u).children().addClass(m),-1===e.inArray(i,P)&&P.push(i))}).delegate(c,a,function(t){
var n,i=e(this).attr("id");I||(e(this).removeClass(u).children().removeClass(m),-1!==(n=e.inArray(i,P))&&P.splice(n,1))}).delegate(c,o,function(){
var t=e(this).removeClass(u).addClass(p),n=(i?t:t.children()).removeClass(m);t.is("."+f)&&t.droppable("disable"),n.is("."+h)&&n.draggable("disable"),!i&&n.removeClass(p)}).delegate(c,s,function(){
var t=e(this).removeClass(p),n=i?t:t.children();t.is("."+f)&&t.droppable("enable"),n.is("."+h)&&n.draggable("enable")}).delegate(c,"scrolltoview",function(){
O(e(this))}).delegate(c,"mouseenter."+t.namespace+" mouseleave."+t.namespace,function(n){
t.trigger("hover",{
hash:e(this).attr("id"),type:n.type}),e(this).toggleClass("ui-state-hover")}).bind("contextmenu."+t.namespace,function(n){
var i=e(n.target).closest("."+d);i.length&&(n.stopPropagation(),n.preventDefault(),i.is("."+p)||i.data("touching")||(i.is("."+u)||(A(),i.trigger(r),D()),t.trigger("contextmenu",{
type:"files",targets:t.selected(),x:n.clientX,y:n.clientY})))}).bind("click."+t.namespace,function(e){
J.data("longtap")?e.stopPropagation():!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&A()}).selectable({
filter:c,stop:D,delay:250,selected:function(t,n){
e(n.selected).trigger(r)},unselected:function(t,n){
e(n.unselected).trigger(a)}}).droppable(R).bind("create."+t.namespace,function(t,n){
var r=i?J.find("tbody"):J,a=r.find(".elfinder-cwd-parent");n=e(z(n)).addClass(v);A(),a.length?a.after(n):r.prepend(n),J.scrollTop(0)}).bind("unselectall",A).bind("selectfile",function(e,t){
J.find("#"+t).trigger(r),D()}),X=e('<div class="elfinder-cwd-wrapper"/>').bind("contextmenu",function(e){
e.preventDefault(),t.trigger("contextmenu",{
type:"cwd",targets:[t.cwd().hash],x:e.clientX,y:e.clientY})}).bind("touchstart."+t.namespace,function(n){
var i=e(this);J.data("longtap",null),i.data("touching",!0),i.data("tmlongtap",setTimeout(function(){
J.data("longtap",!0),t.trigger("contextmenu",{
type:"cwd",targets:[t.cwd().hash],x:n.originalEvent.touches[0].clientX,y:n.originalEvent.touches[0].clientY})},500))}).bind("touchmove."+t.namespace+" touchend."+t.namespace,function(t){
clearTimeout(e(this).data("tmlongtap"))}),Y=function(){
var t=0;X.siblings(".elfinder-panel:visible").each(function(){
t+=e(this).outerHeight(!0)}),X.height(Z.height()-t)},Z=e(this).parent().resize(Y).children(".elfinder-workzone").append(X.append(this));e("body").on("touchstart touchmove touchend",function(e){
}),t.dragUpload&&(X[0].addEventListener("dragenter",function(e){
e.preventDefault(),e.stopPropagation(),X.addClass(g)},!1),X[0].addEventListener("dragleave",function(e){
e.preventDefault(),e.stopPropagation(),e.target==J[0]&&X.removeClass(g)},!1),X[0].addEventListener("dragover",function(e){
e.preventDefault(),e.stopPropagation()},!1),X[0].addEventListener("drop",function(e){
X.removeClass(g),t.exec("upload",{
dropEvt:e})},!1)),t.bind("open",function(e){
G(e.data.files)}).bind("search",function(e){
w=e.data.files,G(w,!0)}).bind("searchend",function(){
w=[],y&&(y="",G(t.files()))}).bind("searchstart",function(e){
y=e.data.query}).bind("sortchange",function(){
G(y?w:t.files(),!!y)}).bind("viewchange",function(){
var n=t.selected(),r="list"==t.storage("view");r!=i&&(i=r,G(t.files()),e.each(n,function(e,t){
M(t)}),D()),Y()}).add(function(n){
var i=t.cwd().hash,r=y?e.map(n.data.added||[],function(e){
return-1===e.name.indexOf(y)?null:e}):e.map(n.data.added||[],function(e){
return e.phash==i?e:null});_(r)}).change(function(n){
var i=t.cwd().hash,r=t.selected();y?e.each(n.data.changed||[],function(t,n){
N([n.hash]),-1!==n.name.indexOf(y)&&(_([n]),-1!==e.inArray(n.hash,r)&&M(n.hash))}):e.each(e.map(n.data.changed||[],function(e){
return e.phash==i?e:null}),function(t,n){
N([n.hash]),_([n]),-1!==e.inArray(n.hash,r)&&M(n.hash)}),D()}).remove(function(e){
N(e.data.removed||[]),D()}).bind("open add search searchend",function(){
J.css("height","auto"),J.outerHeight(!0)<X.height()&&J.height(X.height()-(J.outerHeight(!0)-J.height())-2)}).dragstart(function(t){
var n=e(t.data.target),i=t.data.originalEvent;n.is(c)&&(n.is("."+u)||(!(i.ctrlKey||i.metaKey||i.shiftKey)&&A(),n.trigger(r),D()),J.droppable("disable")),J.selectable("disable").removeClass(p),I=!0}).dragstop(function(){
J.selectable("enable").droppable("enable"),I=!1}).bind("lockfiles unlockfiles",function(e){
for(var t="lockfiles"==e.type?o:s,n=e.data.files||[],i=n.length;i--;)J.find("#"+n[i]).trigger(t);D()}).bind("mkdir mkfile duplicate upload rename archive extract paste multiupload",function(n){
if("upload"!=n.type||!n.data._multiupload){
var i=t.cwd().hash;A(),e.each(n.data.added||[],function(e,t){
t&&t.phash==i&&M(t.hash)}),D()}}).shortcut({
pattern:"ctrl+a",description:"selectall",callback:function(){
var n=t.cwd().hash;J.find("[id]:not(."+u+"):not(.elfinder-cwd-parent)").trigger(r),P=e.map(t.files(),function(e){
return e.phash==n?e.hash:null}),D()}}).shortcut({
pattern:"left right up down shift+left shift+right shift+up shift+down",description:"selectfiles",type:"keydown",callback:function(t){
!function(t,n){
var o,s,l,d,c,h=e.ui.keyCode,f=t==h.LEFT||t==h.UP,m=J.find("[id]."+u);function g(e,t){
return e[t+"All"]("[id]:not(."+p+"):not(.elfinder-cwd-parent):first")}if(m.length)if((l=g(o=m.filter(f?":first":":last"),f?"prev":"next")).length)if(i||t==h.LEFT||t==h.RIGHT)s=l;else if(d=o.position().top,c=o.position().left,s=o,f){
do{
s=s.prev("[id]")}while(s.length&&!(s.position().top<d&&s.position().left<=c));s.is("."+p)&&(s=g(s,"next"))}else{
do{
s=s.next("[id]")}while(s.length&&!(s.position().top>d&&s.position().left>=c));s.is("."+p)&&(s=g(s,"prev")),s.length||(l=J.find("[id]:not(."+p+"):last")).position().top>d&&(s=l)}else s=o;else s=J.find("[id]:not(."+p+"):not(.elfinder-cwd-parent):"+(f?"last":"first"));s&&s.length&&!s.is(".elfinder-cwd-parent")&&(n?s=o.add(o[f?"prevUntil":"nextUntil"]("#"+s.attr("id"))).add(s):m.trigger(a),s.trigger(r),O(s.filter(f?":first":":last")),D())}(t.keyCode,t.shiftKey)}}).shortcut({
pattern:"home",description:"selectffile",callback:function(e){
A(),O(J.find("[id]:first").trigger(r)),D()}}).shortcut({
pattern:"end",description:"selectlfile",callback:function(e){
A(),O(J.find("[id]:last").trigger(r)),D()}})}),this},e.fn.elfinderdialog=function(t){
var n;return"string"==typeof t&&(n=this.closest(".ui-dialog")).length&&("open"==t?"none"==n.css("display")&&n.fadeIn(120,function(){
n.trigger("open")}):"close"==t?"none"!=n.css("display")&&n.hide().trigger("close"):"destroy"==t?n.hide().remove():"toTop"==t&&n.trigger("totop")),t=e.extend({
},e.fn.elfinderdialog.defaults,t),this.filter(":not(.ui-dialog-content)").each(function(){
var n=e(this).addClass("ui-dialog-content ui-widget-content"),i=n.parent(),r="elfinder-dialog-active",a="elfinder-dialog",o="elfinder-dialog-notify",s="ui-state-hover",l=parseInt(1e6*Math.random()),d=i.children(".elfinder-overlay"),c=e('<div class="ui-dialog-buttonset"/>'),u=e('<div class=" ui-helper-clearfix ui-dialog-buttonpane ui-widget-content"/>').append(c),p=e('<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable std42-dialog  '+a+" "+t.cssClass+'"/>').hide().append(n).appendTo(i).draggable({
handle:".ui-dialog-titlebar",containment:"document"}).css({
width:t.width,height:t.height}).mousedown(function(t){
t.stopPropagation(),e(document).mousedown(),p.is("."+r)||(i.find("."+a+":visible").removeClass(r),p.addClass(r).zIndex(h()+1))}).bind("open",function(){
var r=e(this),s=r.outerWidth()>i.width()-10?i.width()-10:null;s&&r.css({
width:s,left:"5px"}),p.trigger("totop"),"function"==typeof t.open&&e.proxy(t.open,n[0])(),p.is("."+o)||i.find("."+a+":visible").not("."+o).each(function(){
var t=e(this),n=parseInt(t.css("top")),i=parseInt(t.css("left")),r=parseInt(p.css("top")),a=parseInt(p.css("left"));t[0]==p[0]||n!=r&&i!=a||p.css({
top:n+(s?15:10)+"px",left:(s?5:i+10)+"px"})})}).bind("close",function(){
var r=i.find(".elfinder-dialog:visible"),a=h();e(this).data("modal")&&d.elfinderoverlay("hide"),r.length?r.each(function(){
var t=e(this);if(t.zIndex()>=a)return t.trigger("totop"),!1}):setTimeout(function(){
i.mousedown().click()},10),"function"==typeof t.close?e.proxy(t.close,n[0])():t.destroyOnClose&&p.hide().remove()}).bind("totop",function(){
e(this).mousedown().find(".ui-button:first").focus().end().find(":text:first").focus(),e(this).data("modal")&&d.elfinderoverlay("show"),d.zIndex(e(this).zIndex())}).data({
modal:t.modal}),h=function(){
var t=i.zIndex()+10;return i.find("."+a+":visible").each(function(){
var n;this!=p[0]&&(n=e(this).zIndex())>t&&(t=n)}),t};t.position||(t.position={
top:Math.max(0,parseInt((i.height()-p.outerHeight())/2-42))+"px",left:Math.max(0,parseInt((i.width()-p.outerWidth())/2))+"px"}),p.css(t.position),t.closeOnEscape&&e(document).bind("keyup."+l,function(t){
t.keyCode==e.ui.keyCode.ESCAPE&&p.is("."+r)&&(n.elfinderdialog("close"),e(document).unbind("keyup."+l))}),p.prepend(e('<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">'+t.title+"</div>").prepend(e('<a href="#" class="ui-dialog-titlebar-close ui-corner-all"><span class="ui-icon ui-icon-closethick"/></a>').mousedown(function(e){
e.preventDefault(),n.elfinderdialog("close")}))),e.each(t.buttons,function(t,i){
var r=e('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">'+t+"</span></button>").click(e.proxy(i,n[0])).hover(function(t){
e(this)["mouseenter"==t.type?"focus":"blur"]()}).focus(function(){
e(this).addClass(s)}).blur(function(){
e(this).removeClass(s)}).keydown(function(t){
var n;t.keyCode==e.ui.keyCode.ENTER?e(this).click():t.keyCode==e.ui.keyCode.TAB&&((n=e(this).next(".ui-button")).length?n.focus():e(this).parent().children(".ui-button:first").focus())});c.append(r)}),c.children().length&&p.append(u),t.resizable&&e.fn.resizable&&p.resizable({
minWidth:t.minWidth,minHeight:t.minHeight,alsoResize:this}),"function"==typeof t.create&&e.proxy(t.create,this)(),t.autoOpen&&n.elfinderdialog("open")}),this},e.fn.elfinderdialog.defaults={
cssClass:"",title:"",modal:!1,resizable:!0,autoOpen:!0,closeOnEscape:!0,destroyOnClose:!1,buttons:{
},position:null,width:320,height:"auto",minWidth:200,minHeight:110},e.fn.elfindernavbar=function(t,n){
return this.not(".elfinder-navbar").each(function(){
var i,r=e(this).addClass("ui-state-default elfinder-navbar"),a=r.parent().resize(function(){
r.height(a.height()-o)}).children(".elfinder-workzone").append(r),o=r.outerHeight()-r.height(),s="ltr"==t.direction;if(e.fn.resizable){
if(i=r.resizable({
handles:s?"e":"w",minWidth:n.minWidth||150,maxWidth:n.maxWidth||500}).bind("resize scroll",function(){
var e=t.UA.Opera&&r.scrollLeft()?20:2;i.css({
top:parseInt(r.scrollTop())+"px",left:s?"auto":parseInt(r.scrollLeft()+e),right:s?-1*parseInt(r.scrollLeft()-e):"auto"})}).find(".ui-resizable-handle").zIndex(r.zIndex()+10),t.UA.Touch){
var l=function(){
i.data("closed")?(i.data("closed",!1).css({
backgroundColor:"transparent"}),r.css({
width:i.data("width")}).trigger("resize")):(i.data("closed",!0).css({
backgroundColor:"inherit"}),r.css({
width:8})),i.data({
startX:null,endX:null})};i.data({
closed:!1,width:r.width()}).bind("touchstart",function(e){
i.data("startX",e.originalEvent.touches[0].pageX)}).bind("touchmove",function(e){
var t=e.originalEvent.touches[0].pageX,n=i.data("startX");((s?n&&n<t:n>t)||(s?n>t:n&&n<t))&&l()}).bind("touchend",function(e){
i.data("startX")&&l()}),t.UA.Mobile&&(i.data("defWidth",r.width()),e(window).bind("resize",function(e){
var t=r.parent().width()/2;i.data("defWidth")>t?r.width(t):r.width(i.data("defWidth")),i.data("width",r.width())}))}t.one("open",function(){
setTimeout(function(){
r.trigger("resize")},150)})}}),this},e.fn.elfinderoverlay=function(t){
if(this.filter(":not(.elfinder-overlay)").each(function(){
t=e.extend({
},t),e(this).addClass("ui-widget-overlay elfinder-overlay").hide().mousedown(function(e){
e.preventDefault(),e.stopPropagation()}).data({
cnt:0,show:"function"==typeof t.show?t.show:function(){
},hide:"function"==typeof t.hide?t.hide:function(){
}})}),"show"==t){
var n=(r=this.eq(0)).data("cnt")+1,i=r.data("show");r.data("cnt",n),r.is(":hidden")&&(r.zIndex(r.parent().zIndex()+1),r.show(),i())}if("hide"==t){
n=(r=this.eq(0)).data("cnt")-1;var r,a=r.data("hide");r.data("cnt",n),0==n&&r.is(":visible")&&(r.hide(),a())}return this},e.fn.elfinderpanel=function(t){
return this.each(function(){
var n=e(this).addClass("elfinder-panel ui-state-default ui-corner-all"),i="margin-"+("ltr"==t.direction?"left":"right");t.one("load",function(e){
var r=t.getUI("navbar");n.css(i,parseInt(r.outerWidth(!0))),r.bind("resize",function(){
n.is(":visible")&&n.css(i,parseInt(r.outerWidth(!0)))})})})},e.fn.elfinderpath=function(t){
return this.each(function(){
var n=e(this).addClass("elfinder-path").html("&nbsp;").delegate("a","click",function(n){
var i=e(this).attr("href").substr(1);n.preventDefault(),i!=t.cwd().hash&&t.exec("open",i)}).prependTo(t.getUI("statusbar").show());t.bind("open searchend",function(){
var i=[];e.each(t.parents(t.cwd().hash),function(e,n){
i.push('<a href="#'+n+'">'+t.escape(t.file(n).name)+"</a>")}),n.html(i.join(t.option("separator")))}).bind("search",function(){
n.html(t.i18n("searcresult"))})})},e.fn.elfinderplaces=function(t,n){
return this.each(function(){
var i=[],r="class",a=t.res(r,"navdir"),o=t.res(r,"navcollapse"),s=t.res(r,"navexpand"),l=(t.res(r,"hover"),t.res(r,"treeroot")),d=t.res("tpl","navdir"),c=t.res("tpl","perms"),u=e(t.res("tpl","navspinner")),p=function(e){
return"place-"+e},h=function(){
t.storage("places",i.join(","))},f=function(n){
return e(d.replace(/\{
id\}/,p(n.hash)).replace(/\{
name\}/,t.escape(n.name)).replace(/\{
cssclass\}/,t.perms2class(n)).replace(/\{
permissions\}/,n.read&&n.write?"":c).replace(/\{
symlink\}/,""))},m=function(n){
var r=f(n);y.children().length&&e.each(y.children(),function(){
var t=e(this);if(n.name.localeCompare(t.children("."+a).text())<0)return!r.insertBefore(t)}),i.push(n.hash),!r.parent().length&&y.append(r),b.addClass(o),r.draggable({
appendTo:"body",revert:!1,helper:function(){
var n=e(this);return n.children().removeClass("ui-state-hover"),e('<div class="elfinder-place-drag elfinder-'+t.direction+'"/>').append(n.clone()).data("hash",n.children(":first").attr("id").substr(6))},start:function(){
e(this).hide()},stop:function(t,n){
var i=w.offset().top,r=w.offset().left,a=w.width(),o=w.height(),s=t.clientX,l=t.clientY;s>r&&s<r+a&&l>i&&l<l+o?e(this).show():(g(n.helper.data("hash")),h())}})},g=function(t){
var n=e.inArray(t,i);-1!==n&&(i.splice(n,1),y.find("#"+p(t)).parent().remove(),!y.children().length&&b.removeClass(o+" "+s))},v=f({
hash:"root-"+t.namespace,name:t.i18n(n.name,"places"),read:!0,write:!0}),b=v.children("."+a).addClass(l).click(function(){
b.is("."+o)&&(w.toggleClass(s),y.slideToggle(),t.storage("placesState",w.is("."+s)?1:0))}),y=v.children("."+t.res(r,"navsubtree")),w=e(this).addClass(t.res(r,"tree")+" elfinder-places ui-corner-all").hide().append(v).appendTo(t.getUI("navbar")).delegate("."+a,"mouseenter mouseleave",function(){
e(this).toggleClass("ui-state-hover")}).delegate("."+a,"click",function(n){
t.exec("open",e(this).attr("id").substr(6))}).delegate("."+a+":not(."+l+")","contextmenu",function(n){
var i=e(this).attr("id").substr(6);n.preventDefault(),t.trigger("contextmenu",{
raw:[{
label:t.i18n("rmFromPlaces"),icon:"rm",callback:function(){
g(i),h()}}],x:n.clientX,y:n.clientY})}).droppable({
tolerance:"pointer",accept:".elfinder-cwd-file-wrapper,.elfinder-tree-dir,.elfinder-cwd-file",hoverClass:t.res("class","adroppable"),drop:function(n,r){
var a=!0;e.each(r.helper.data("files"),function(n,r){
var o=t.file(r);o&&"directory"==o.mime&&-1===e.inArray(o.hash,i)?m(o):a=!1}),h(),a&&r.helper.hide()}});t.one("load",function(){
t.oldAPI||(w.show().parent().show(),(i=e.map(t.storage("places").split(","),function(e){
return e||null})).length&&(b.prepend(u),t.request({
data:{
cmd:"info",targets:i},preventDefault:!0}).done(function(n){
i=[],e.each(n.files,function(e,t){
"directory"==t.mime&&m(t)}),h(),t.storage("placesState")>0&&b.click()}).always(function(){
u.remove()})),t.remove(function(t){
e.each(t.data.removed,function(e,t){
g(t)}),h()}).change(function(t){
e.each(t.data.changed,function(t,n){
-1!==e.inArray(n.hash,i)&&(g(n.hash),"directory"==n.mime&&m(n))}),h()}).bind("sync",function(){
i.length&&(b.prepend(u),t.request({
data:{
cmd:"info",targets:i},preventDefault:!0}).done(function(t){
e.each(t.files||[],function(t,n){
-1===e.inArray(n.hash,i)&&g(n.hash)}),h()}).always(function(){
u.remove()}))}))})})},e.fn.elfindersearchbutton=function(t){
return this.each(function(){
var n=!1,i=e(this).hide().addClass("ui-widget-content elfinder-button "+t.fm.res("class","searchbtn")),r=function(){
var i=e.trim(o.val());i?t.exec(i).done(function(){
n=!0,o.focus()}):t.fm.trigger("searchend")},a=function(){
o.val(""),n&&(n=!1,t.fm.trigger("searchend"))},o=e('<input type="text" size="42"/>').appendTo(i).keypress(function(e){
e.stopPropagation()}).keydown(function(e){
e.stopPropagation(),13==e.keyCode&&r(),27==e.keyCode&&(e.preventDefault(),a())});e('<span class="ui-icon ui-icon-search" title="'+t.title+'"/>').appendTo(i).click(r),e('<span class="ui-icon ui-icon-close"/>').appendTo(i).click(a),setTimeout(function(){
if(i.parent().detach(),t.fm.getUI("toolbar").prepend(i.show()),t.fm.UA.ltIE7){
var e=i.children("ltr"==t.fm.direction?".ui-icon-close":".ui-icon-search");e.css({
right:"",left:parseInt(i.width())-e.outerWidth(!0)})}},200),t.fm.error(function(){
o.unbind("keydown")}).select(function(){
o.blur()}).bind("searchend",function(){
o.val("")}).viewchange(a).shortcut({
pattern:"ctrl+f f3",description:t.title,callback:function(){
o.select().focus()}})})},e.fn.elfindersortbutton=function(t){
return this.each(function(){
var n=t.fm,i=t.name,r=n.res("class","disabled"),a=n.res("class","hover"),o="elfinder-button-menu-item",s=o+"-selected",l=s+"-asc",d=s+"-desc",c=e(this).addClass("ui-state-default elfinder-button elfinder-menubutton elfiner-button-"+i).attr("title",t.title).append('<span class="elfinder-button-icon elfinder-button-icon-'+i+'"/>').hover(function(e){
!c.is("."+r)&&c.toggleClass(a)}).click(function(e){
c.is("."+r)||(e.stopPropagation(),u.is(":hidden")&&t.fm.getUI().click(),u.slideToggle(100))}),u=e('<div class="ui-widget ui-widget-content elfinder-button-menu ui-corner-all"/>').hide().appendTo(c).zIndex(12+c.zIndex()).delegate("."+o,"mouseenter mouseleave",function(){
e(this).toggleClass(a)}).delegate("."+o,"click",function(e){
e.preventDefault(),e.stopPropagation(),h()}),p=function(){
u.children(":not(:last)").removeClass(s+" "+l+" "+d).filter('[rel="'+n.sortType+'"]').addClass(s+" "+("asc"==n.sortOrder?l:d)),u.children(":last").toggleClass(s,n.sortStickFolders)},h=function(){
u.hide()};e.each(n.sortRules,function(t,i){
u.append(e('<div class="'+o+'" rel="'+t+'"><span class="ui-icon ui-icon-arrowthick-1-n"/><span class="ui-icon ui-icon-arrowthick-1-s"/>'+n.i18n("sort"+t)+"</div>").data("type",t))}),u.children().click(function(i){
var r=e(this).attr("rel");t.exec([],{
type:r,order:r==n.sortType?"asc"==n.sortOrder?"desc":"asc":n.sortOrder,stick:n.sortStickFolders})}),e('<div class="'+o+" "+o+'-separated"><span class="ui-icon ui-icon-check"/>'+n.i18n("sortFoldersFirst")+"</div>").appendTo(u).click(function(){
t.exec([],{
type:n.sortType,order:n.sortOrder,stick:!n.sortStickFolders})}),n.bind("disable select",h).getUI().click(h),n.bind("sortchange",p),u.children().length>1?t.change(function(){
c.toggleClass(r,t.disabled()),p()}).change():c.addClass(r)})},e.fn.elfinderstat=function(t){
return this.each(function(){
var n=e(this).addClass("elfinder-stat-size"),i=e('<div class="elfinder-stat-selected"/>'),r=t.i18n("size").toLowerCase(),a=t.i18n("items").toLowerCase(),o=t.i18n("selected"),s=function(i,o){
var s=0,l=0;e.each(i,function(e,t){
o&&t.phash!=o||(s++,l+=parseInt(t.size)||0)}),n.html(a+": "+s+", "+r+": "+t.formatSize(l))};t.getUI("statusbar").prepend(n).append(i).show(),t.bind("open reload add remove change searchend",function(){
s(t.files(),t.cwd().hash)}).search(function(e){
s(e.data.files)}).select(function(){
var n=0,a=0,s=t.selectedFiles();if(1==s.length)return n=s[0].size,void i.html(t.escape(s[0].name)+(n>0?", "+t.formatSize(n):""));e.each(s,function(e,t){
a++,n+=parseInt(t.size)||0}),i.html(a?o+": "+a+", "+r+": "+t.formatSize(n):"&nbsp;")})})},e.fn.elfindertoolbar=function(t,n){
return this.not(".elfinder-toolbar").each(function(){
var i,r,a,o,s=t._commands,l=e(this).addClass("ui-helper-clearfix ui-widget-header ui-corner-top elfinder-toolbar"),d=n||[],c=d.length;for(l.prev().length&&l.parent().prepend(this);c--;)if(d[c]){
for(a=e('<div class="ui-widget-content ui-corner-all elfinder-buttonset"/>'),i=d[c].length;i--;)(r=s[d[c][i]])&&(o="elfinder"+r.options.ui,e.fn[o]&&a.prepend(e("<div/>")[o](r)));a.children().length&&l.prepend(a),a.children(":gt(0)").before('<span class="ui-widget-content elfinder-toolbar-button-separator"/>')}l.children().length&&l.show()}),this},e.fn.elfindertree=function(t,n){
var i=t.res("class","tree");return this.not("."+i).each(function(){
var r="class",a=t.res(r,"treeroot"),o=n.openRootOnLoad,s=t.res(r,"navsubtree"),l=t.res(r,"treedir"),d=t.res(r,"navcollapse"),c=t.res(r,"navexpand"),u="elfinder-subtree-loaded",p=t.res(r,"navarrow"),h=t.res(r,"active"),f=t.res(r,"adroppable"),m=t.res(r,"hover"),g=t.res(r,"disabled"),v=t.res(r,"draggable"),b=t.res(r,"droppable"),y=function(e){
var t=j.offset().left;return t<=e&&e<=t+j.width()},w=t.droppable.drop,x=e.extend(!0,{
},t.droppable,{
over:function(t){
var n=e(this),i=m+" "+f;y(t.clientX)?(n.addClass(i),n.is("."+d+":not(."+c+")")&&setTimeout(function(){
n.is("."+f)&&n.children("."+p).click()},500)):n.removeClass(i)},out:function(){
e(this).removeClass(m+" "+f)},drop:function(e,t){
y(e.clientX)&&w.call(this,e,t)}}),k=e(t.res("tpl","navspinner")),C=t.res("tpl","navdir"),F=t.res("tpl","perms"),T=(t.res("tpl","lock"),t.res("tpl","symlink")),z={
id:function(e){
return t.navHash2Id(e.hash)},cssclass:function(e){
return(e.phash?"":a)+" "+l+" "+t.perms2class(e)+" "+(e.dirs&&!e.link?d:"")},permissions:function(e){
return e.read&&e.write?"":F},symlink:function(e){
return e.alias?T:""},style:function(e){
return e.icon?"style=\"background-image:url('"+e.icon+"')\"":""}},I=function(e){
return e.name=t.escape(e.i18||e.name),C.replace(/(?:\{
([a-z]+)\})/gi,function(t,n){
return e[n]||(z[n]?z[n](e):"")})},P=function(t){
return e.map(t||[],function(e){
return"directory"==e.mime?e:null})},M=function(e){
return e?U.find("#"+t.navHash2Id(e)).next("."+s):U},A=function(n,i){
for(var r,a=n.children(":first");a.length;){
if(r=t.file(t.navId2Hash(a.children("[id]").attr("id"))),(r=t.file(t.navId2Hash(a.children("[id]").attr("id"))))&&i.name.toLowerCase().localeCompare(r.name.toLowerCase())<0)return a;a=a.next()}return e("")},D=function(e){
for(var n,i,r,a,o=e.length,s=[],l=e.length,d=!0;l--;)n=e[l],U.find("#"+t.navHash2Id(n.hash)).length||((r=M(n.phash)).length?(i=I(n),n.phash&&(a=A(r,n)).length?a.before(i):(r[d||n.phash?"append":"prepend"](i),d=!1)):s.push(n));if(s.length&&s.length<o)return D(s);setTimeout(function(){
S()},10)},O=function(e){
var i,r,d=t.cwd().hash,p=U.find("#"+t.navHash2Id(d));if(o&&((i=U.find("#"+t.navHash2Id(t.root()))).is("."+u)&&i.addClass(c).next("."+s).show(),o=!1),p.is("."+h)||(U.find("."+l+"."+h).removeClass(h),p.addClass(h)),n.syncTree){
if(p.length)return p.parentsUntil("."+a).filter("."+s).show().prev("."+l).addClass(c);if(t.newAPI){
if((r=t.file(d))&&r.phash&&U.find("#"+t.navHash2Id(r.phash)).length)return D([r]),O();t.request({
data:{
cmd:"parents",target:d},preventFail:!0}).done(function(e){
var n=P(e.tree);D(n),E(n,u),d==t.cwd().hash&&O(!0)})}}},S=function(){
U.find("."+l+":not(."+b+",.elfinder-ro,.elfinder-na)").droppable(x)},E=function(n,i){
var r=i==u?"."+d+":not(."+u+")":":not(."+d+")";e.each(n,function(n,a){
U.find("#"+t.navHash2Id(a.phash)+r).filter(function(){
return e(this).next("."+s).children().length>0}).addClass(i)})},U=e(this).addClass(i).delegate("."+l,"mouseenter mouseleave",function(n){
var i=e(this),r="mouseenter"==n.type;i.is("."+f+" ,."+g)||(r&&!i.is("."+a+",."+v+",.elfinder-na,.elfinder-wo")&&i.draggable(t.draggable),i.toggleClass(m,r))}).delegate("."+l,"dropover dropout drop",function(t){
e(this)["dropover"==t.type?"addClass":"removeClass"](f+" "+m)}).delegate("."+l,"click",function(n){
var i=e(this),r=t.navId2Hash(i.attr("id")),a=t.file(r);i.data("longtap")?n.stopPropagation():(t.trigger("searchend"),r==t.cwd().hash||i.is("."+g)?i.is("."+d)&&i.children("."+p).click():t.exec("open",a.thash||r))}).delegate("."+l,"touchstart",function(n){
var i=e(this),r=n.originalEvent;i.data("longtap",null),i.data("touching",!0),i.data("tmlongtap",setTimeout(function(e){
i.data("longtap",!0),t.trigger("contextmenu",{
type:"navbar",targets:[t.navId2Hash(i.attr("id"))],x:r.touches[0].clientX,y:r.touches[0].clientY})},500))}).delegate("."+l,"touchmove touchend",function(t){
clearTimeout(e(this).data("tmlongtap"))}).delegate("."+l+"."+d+" ."+p,"click",function(n){
var i=e(this),r=i.parent("."+l),a=r.next("."+s);n.stopPropagation(),r.is("."+u)?(r.toggleClass(c),a.slideToggle()):(k.insertBefore(i),r.removeClass(d),t.request({
cmd:"tree",target:t.navId2Hash(r.attr("id"))}).done(function(e){
D(P(e.tree)),a.children().length&&(r.addClass(d+" "+c),a.slideDown()),O()}).always(function(e){
k.remove(),r.addClass(u)}))}).delegate("."+l,"contextmenu",function(n){
n.preventDefault(),t.trigger("contextmenu",{
type:"navbar",targets:[t.navId2Hash(e(this).attr("id"))],x:n.clientX,y:n.clientY})}),j=t.getUI("navbar").append(U).show();t.open(function(e){
var t=e.data,n=P(t.files);t.init&&U.empty(),n.length&&(D(n),E(n,u)),O()}).add(function(e){
var t=P(e.data.added);t.length&&(D(t),E(t,d))}).change(function(n){
for(var i,r,a,o,d,p,h,f,m,g=P(n.data.changed),v=g.length;v--;)if(i=g[v],(r=U.find("#"+t.navHash2Id(i.hash))).length){
if(i.phash){
if(o=r.closest("."+s),d=M(i.phash),p=r.parent().next(),h=A(d,i),!d.length)continue;d[0]===o[0]&&p.get(0)===h.get(0)||(h.length?h.before(r):d.append(r))}f=r.is("."+c),m=r.is("."+u),a=e(I(i)),r.replaceWith(a.children("."+l)),i.dirs&&(f||m)&&(r=U.find("#"+t.navHash2Id(i.hash)))&&r.next("."+s).children().length&&(f&&r.addClass(c),m&&r.addClass(u))}O(),S()}).remove(function(e){
for(var n,i,r=e.data.removed,a=r.length;a--;)(n=U.find("#"+t.navHash2Id(r[a]))).length&&(i=n.closest("."+s),n.parent().detach(),i.children().length||i.hide().prev("."+l).removeClass(d+" "+c+" "+u))}).bind("search searchend",function(e){
U.find("#"+t.navHash2Id(t.cwd().hash))["search"==e.type?"removeClass":"addClass"](h)}).bind("lockfiles unlockfiles",function(n){
var i="lockfiles"==n.type,r=i?"disable":"enable",a=e.map(n.data.files||[],function(e){
var n=t.file(e);return n&&"directory"==n.mime?e:null});e.each(a,function(e,n){
var a=U.find("#"+t.navHash2Id(n));a.length&&(a.is("."+v)&&a.draggable(r),a.is("."+b)&&a.droppable(h),a[i?"addClass":"removeClass"](g))})})}),this},e.fn.elfinderuploadbutton=function(t){
return this.each(function(){
var n=e(this).elfinderbutton(t).unbind("click"),i=e("<form/>").appendTo(n),r=e('<input type="file" multiple="true" title="'+t.fm.i18n("selectForUpload")+'"/>').change(function(){
var n=e(this);n.val()&&(t.exec({
input:n.remove()[0]}),r.clone(!0).appendTo(i))});i.append(r.clone(!0)),t.change(function(){
i[t.disabled()?"hide":"show"]()}).change()})},e.fn.elfinderviewbutton=function(t){
return this.each(function(){
var n=e(this).elfinderbutton(t),i=n.children(".elfinder-button-icon");t.change(function(){
var e="icons"==t.value;i.toggleClass("elfinder-button-icon-view-list",e),n.attr("title",t.fm.i18n(e?"viewlist":"viewicons"))})})},e.fn.elfinderworkzone=function(t){
var n="elfinder-workzone";return this.not("."+n).each(function(){
var t=e(this).addClass(n),i=t.outerHeight(!0)-t.height(),r=t.parent();r.add(window).bind("resize",function(){
var a=r.height();r.children(":visible:not(."+n+")").each(function(){
var t=e(this);"absolute"!=t.css("position")&&(a-=t.outerHeight(!0))}),t.height(a-i)})}),this},elFinder.prototype.commands.archive=function(){
var t=this,n=t.fm,i=[];this.variants=[],this.disableOnSearch=!0,n.bind("open reload",function(){
t.variants=[],e.each(i=n.option("archivers").create||[],function(e,i){
t.variants.push([i,n.mime2kind(i)])}),t.change()}),this.getstate=function(){
return!this._disabled&&i.length&&n.selected().length&&n.cwd().write?0:-1},this.exec=function(t,r){
var a,o=this.files(t),s=o.length,l=r||i[0],d=n.cwd(),c=["errArchive","errPerm","errCreatingTempDir","errFtpDownloadFile","errFtpUploadFile","errFtpMkdir","errArchiveExec","errExtractExec","errRm"],u=e.Deferred().fail(function(e){
e&&n.error(e)});if(!(this.enabled()&&s&&i.length&&-1!==e.inArray(l,i)))return u.reject();if(!d.write)return u.reject(c);for(a=0;a<s;a++)if(!o[a].read)return u.reject(c);return n.request({
data:{
cmd:"archive",targets:this.hashes(t),type:l},notify:{
type:"archive",cnt:1},syncOnFail:!0})}},elFinder.prototype.commands.back=function(){
this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{
pattern:"ctrl+left backspace"}],this.getstate=function(){
return this.fm.history.canBack()?0:-1},this.exec=function(){
return this.fm.history.back()}},elFinder.prototype.commands.copy=function(){
this.shortcuts=[{
pattern:"ctrl+c ctrl+insert"}],this.getstate=function(t){
var n=(t=this.files(t)).length;return n&&e.map(t,function(e){
return e.phash&&e.read?e:null}).length==n?0:-1},this.exec=function(t){
var n=this.fm,i=e.Deferred().fail(function(e){
n.error(e)});return e.each(this.files(t),function(e,t){
if(!t.read||!t.phash)return!i.reject(["errCopy",t.name,"errPerm"])}),"rejected"==i.state()?i:i.resolve(n.clipboard(this.hashes(t)))}},elFinder.prototype.commands.cut=function(){
this.shortcuts=[{
pattern:"ctrl+x shift+insert"}],this.getstate=function(t){
var n=(t=this.files(t)).length;return n&&e.map(t,function(e){
return e.phash&&e.read&&!e.locked?e:null}).length==n?0:-1},this.exec=function(t){
var n=this.fm,i=e.Deferred().fail(function(e){
n.error(e)});return e.each(this.files(t),function(e,t){
return t.read&&t.phash?t.locked?!i.reject(["errLocked",t.name]):void 0:!i.reject(["errCopy",t.name,"errPerm"])}),"rejected"==i.state()?i:i.resolve(n.clipboard(this.hashes(t),!0))}},elFinder.prototype.commands.download=function(){
var t=this,n=this.fm,i=function(n){
return e.map(t.files(n),function(e){
return"directory"==e.mime?null:e})};this.shortcuts=[{
pattern:"shift+enter"}],this.getstate=function(){
var e=this.fm.selected(),t=e.length;return this._disabled||!t||(n.UA.IE||n.UA.Mobile)&&1!=t||t!=i(e).length?-1:0},this.exec=function(t){
var n,r,a=this.fm,o=a.options.url,s=i(t),l=e.Deferred(),d="",c="";if(this.disabled())return l.reject();if(a.oldAPI)return a.error("errCmdNoSupport"),l.reject();for((c=e.param(a.options.customData||{
}))&&(c="&"+c),o+=-1===o.indexOf("?")?"?":"&",n=0;n<s.length;n++)r=o+"cmd=file&target="+s[n].hash+"&download=1"+c,a.UA.Mobile?setTimeout(function(){
window.open(r)||a.error("errPopup")},100):d+='<iframe class="downloader" id="downloader-'+s[n].hash+'" style="display:none" src="'+r+'"/>';return e(d).appendTo("body").attr("src",this.attr("src")).ready(function(){
setTimeout(function(){
e(d).each(function(){
e("#"+e(this).attr("id")).remove()})},a.UA.Firefox?2e4+1e4*n:1e3)}),a.trigger("download",{
files:s}),l.resolve(t)}},elFinder.prototype.commands.duplicate=function(){
var t=this.fm;this.getstate=function(n){
var i=(n=this.files(n)).length;return!this._disabled&&i&&t.cwd().write&&e.map(n,function(e){
return e.phash&&e.read?e:null}).length==i?0:-1},this.exec=function(t){
var n=this.fm,i=this.files(t),r=i.length,a=e.Deferred().fail(function(e){
e&&n.error(e)});return!r||this._disabled?a.reject():(e.each(i,function(e,t){
if(!t.read||!n.file(t.phash).write)return!a.reject(["errCopy",t.name,"errPerm"])}),"rejected"==a.state()?a:n.request({
data:{
cmd:"duplicate",targets:this.hashes(t)},notify:{
type:"copy",cnt:r}}))}},elFinder.prototype.commands.edit=function(){
var t=this,n=this.fm,i=n.res("mimes","text")||[],r=function(n){
return e.map(n,function(n){
return 0!==n.mime.indexOf("text/")&&-1===e.inArray(n.mime,i)||!n.mime.indexOf("text/rtf")||t.onlyMimes.length&&-1===e.inArray(n.mime,t.onlyMimes)||!n.read||!n.write?null:n})},a=function(i,r){
var o,s=i.hash,l=(n.options,e.Deferred()),d="edit-"+n.namespace+"-"+i.hash,c=n.getUI().find("#"+d),u=r?1:0;return c.length?(c.elfinderdialog("toTop"),l.resolve()):i.read&&i.write?(n.request({
data:{
cmd:"get",target:s,conv:u},notify:{
type:"openfile",cnt:1},syncOnFail:!0}).done(function(r){
var o,c,u,p,h,f,m,g;r.doconv?n.confirm({
title:t.title,text:"confirmConvUTF8",accept:{
label:"btnConv",callback:function(){
l=a(i,1)}},cancel:{
label:"btnCancel",callback:function(){
l.reject()}}}):(o=d,c=i,u=r.content,p=e.Deferred(),h=e('<textarea class="elfinder-file-edit" rows="20" id="'+o+'-ta">'+n.escape(u)+"</textarea>"),f=function(){
h.editor&&h.editor.save(h[0],h.editor.instance),p.resolve(h.getContent()),h.elfinderdialog("close")},m=function(){
p.reject(),h.elfinderdialog("close")},g={
title:c.name,width:t.options.dialogWidth||450,buttons:{
},close:function(){
h.editor&&h.editor.close(h[0],h.editor.instance),e(this).elfinderdialog("destroy")},open:function(){
n.disable(),h.focus(),h[0].setSelectionRange&&h[0].setSelectionRange(0,0),h.editor&&h.editor.load(h[0])}},h.getContent=function(){
return h.val()},e.each(t.options.editors||[],function(t,n){
if(-1!==e.inArray(c.mime,n.mimes||[])&&"function"==typeof n.load&&"function"==typeof n.save)return h.editor={
load:n.load,save:n.save,close:"function"==typeof n.close?n.close:function(){
},instance:null},!1}),h.editor||h.keydown(function(e){
var t,n,i=e.keyCode;e.stopPropagation(),9==i&&(e.preventDefault(),this.setSelectionRange&&(t=this.value,n=this.selectionStart,this.value=t.substr(0,n)+"\t"+t.substr(this.selectionEnd),n+=1,this.setSelectionRange(n,n))),(e.ctrlKey||e.metaKey)&&(81!=i&&87!=i||(e.preventDefault(),m()),83==i&&(e.preventDefault(),f()))}),g.buttons[n.i18n("Save")]=f,g.buttons[n.i18n("Cancel")]=m,n.dialog(h,g).attr("id",o),p.promise()).done(function(e){
n.request({
options:{
type:"post"},data:{
cmd:"put",target:s,content:e},notify:{
type:"save",cnt:1},syncOnFail:!0}).fail(function(e){
l.reject(e)}).done(function(e){
e.changed&&e.changed.length&&n.change(e),l.resolve(e)})})}).fail(function(e){
l.reject(e)}),l.promise()):(o=["errOpen",i.name,"errPerm"],n.error(o),l.reject(o))};this.shortcuts=[{
pattern:"ctrl+e"}],this.init=function(){
this.onlyMimes=this.options.mimes||[]},this.getstate=function(e){
var t=(e=this.files(e)).length;return!this._disabled&&t&&r(e).length==t?0:-1},this.exec=function(t){
var n,i=r(this.files(t)),o=[];if(this.disabled())return e.Deferred().reject();for(;n=i.shift();)o.push(a(n));return o.length?e.when.apply(null,o):e.Deferred().reject()}},elFinder.prototype.commands.extract=function(){
var t=this,n=t.fm,i=[];this.disableOnSearch=!0,n.bind("open reload",function(){
i=n.option("archivers").extract||[],t.change()}),this.getstate=function(t){
var n,r=(t=this.files(t)).length;return!this._disabled&&r&&this.fm.cwd().write&&(n=t,e.map(n,function(t){
return t.read&&-1!==e.inArray(t.mime,i)?t:null})).length==r?0:-1},this.exec=function(t){
var r,a,o,s=this.files(t),l=e.Deferred(),d=s.length,c=!1,u=!1,p=e.map(n.files(t),function(e){
return e.name}),h={
};e.map(n.files(t),function(e){
h[e.name]=e});var f=function(e){
switch(e){
case"overwrite_all":c=!0;break;case"omit_all":u=!0}},m=function(t){
t.read&&n.file(t.phash).write?-1===e.inArray(t.mime,i)?(a=["errExtract",t.name,"errNoArchive"],n.error(a),l.reject(a)):n.request({
data:{
cmd:"extract",target:t.hash},notify:{
type:"extract",cnt:1},syncOnFail:!0}).fail(function(e){
"rejected"!=l.state()&&l.reject(e)}).done(function(){
}):(a=["errExtract",t.name,"errPerm"],n.error(a),l.reject(a))},g=function(t,i){
var a=t[i],s=a.name.replace(/\.((tar\.(gz|bz|bz2|z|lzo))|cpio\.gz|ps\.gz|xcf\.(gz|bz2)|[a-z0-9]{
1,4})$/gi,"");e.inArray(s,p)>=0&&"directory"!=h[s].mime?n.confirm({
title:n.i18n("ntfextract"),text:n.i18n(["errExists",s,"confirmRepl"]),accept:{
label:"btnYes",callback:function(e){
if(f(o=e?"overwrite_all":"overwrite"),c||u){
if(c){
for(r=0;r<d;r++)m(t[r]);l.resolve()}}else"overwrite"==o&&m(a),i+1<d?g(t,i+1):l.resolve()}},reject:{
label:"btnNo",callback:function(e){
f(o=e?"omit_all":"omit"),!c&&!u&&i+1<d?g(t,i+1):u&&l.resolve()}},cancel:{
label:"btnCancel",callback:function(){
l.resolve()}},all:d>1}):(m(a),i+1<d?g(t,i+1):l.resolve())};return this.enabled()&&d&&i.length?(d>0&&g(s,0),l):l.reject()}},elFinder.prototype.commands.forward=function(){
this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{
pattern:"ctrl+right"}],this.getstate=function(){
return this.fm.history.canForward()?0:-1},this.exec=function(){
return this.fm.history.forward()}},elFinder.prototype.commands.getfile=function(){
var t=this,n=this.fm;this.alwaysEnabled=!0,this.callback=n.options.getFileCallback,this._disabled="function"==typeof this.callback,this.getstate=function(n){
var i,r,a=(n=this.files(n)).length;return this.callback&&a&&(i=n,r=t.options,i=e.map(i,function(e){
return"directory"!=e.mime||r.folders?e:null}),r.multiple||1==i.length?i:[]).length==a?0:-1},this.exec=function(n){
var i,r,a,o=this.fm,s=this.options,l=this.files(n),d=l.length,c=o.option("url"),u=o.option("tmbUrl"),p=e.Deferred().done(function(e){
o.trigger("getfile",{
files:e}),t.callback(e,o),"close"==s.oncomplete?o.hide():"destroy"==s.oncomplete&&o.destroy()}),h=function(t){
return s.onlyURL?s.multiple?e.map(l,function(e){
return e.url}):l[0].url:s.multiple?l:l[0]},f=[];if(-1==this.getstate())return p.reject();for(i=0;i<d;i++){
if("directory"==(r=l[i]).mime&&!s.folders)return p.reject();r.baseUrl=c,"1"==r.url?f.push(o.request({
data:{
cmd:"url",target:r.hash},notify:{
type:"url",cnt:1,hideCnt:!0},preventDefault:!0}).done(function(e){
e.url&&(o.file(this.hash).url=this.url=e.url)}.bind(r))):r.url=o.url(r.hash),r.path=o.path(r.hash),r.tmb&&1!=r.tmb&&(r.tmb=u+r.tmb),r.width||r.height||(r.dim?(a=r.dim.split("x"),r.width=a[0],r.height=a[1]):-1!==r.mime.indexOf("image")&&f.push(o.request({
data:{
cmd:"dim",target:r.hash},notify:{
type:"dim",cnt:1,hideCnt:!0},preventDefault:!0}).done(function(e){
if(e.dim){
var t=e.dim.split("x"),n=o.file(this.hash);n.width=this.width=t[0],n.height=this.height=t[1]}}.bind(r))))}return f.length?(e.when.apply(null,f).always(function(){
p.resolve(h())}),p):p.resolve(h())}},elFinder.prototype.commands.help=function(){
var t,n=this.fm,i=this,r='<div class="elfinder-help-link"> <a href="{
url}" target="_blank">{
link}</a></div>',a='<div class="elfinder-help-team"><div>{
author}</div>{
work}</div>',o=/\{
url\}/,s=/\{
link\}/,l=/\{
author\}/,d=/\{
work\}/,c="replace",u="ui-priority-primary",p="ui-priority-secondary",h="elfinder-help-license",f=['<div class="ui-tabs ui-widget ui-widget-content ui-corner-all elfinder-help">','<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">'],m='<div class="elfinder-help-separator"/>';this.alwaysEnabled=!0,this.updateOnSelect=!1,this.state=0,this.shortcuts=[{
pattern:"f1",description:this.title}],setTimeout(function(){
var g,v=i.options.view||["about","shortcuts","help"];e.each(v,function(e,t){
f.push('<li class="ui-state-default ui-corner-top"><a href="#{
id}">{
title}</a></li>'[c](/\{
id\}/,t)[c](/\{
title\}/,n.i18n(t)))}),f.push("</ul>"),-1!==e.inArray("about",v)&&(f.push('<div id="about" class="ui-tabs-panel ui-widget-content ui-corner-bottom"><div class="elfinder-help-logo"/>'),f.push("<h3>elFinder</h3>"),f.push('<div class="'+u+'">'+n.i18n("webfm")+"</div>"),f.push('<div class="'+p+'">'+n.i18n("ver")+": "+n.version+", "+n.i18n("protocolver")+': <span id="apiver"></span></div>'),f.push('<div class="'+p+'">jQuery/jQuery UI: '+e().jquery+"/"+e.ui.version+"</div>"),f.push(m),f.push(r[c](o,"http://elfinder.org/")[c](s,n.i18n("homepage"))),f.push(r[c](o,"https://github.com/Studio-42/elFinder/wiki")[c](s,n.i18n("docs"))),f.push(r[c](o,"https://github.com/Studio-42/elFinder")[c](s,n.i18n("github"))),f.push(r[c](o,"http://twitter.com/elrte_elfinder")[c](s,n.i18n("twitter"))),f.push(m),f.push('<div class="'+u+'">'+n.i18n("team")+"</div>"),f.push(a[c](l,'Dmitry "dio" Levashov &lt;dio@std42.ru&gt;')[c](d,n.i18n("chiefdev"))),f.push(a[c](l,"Troex Nevelin &lt;troex@fury.scancode.ru&gt;")[c](d,n.i18n("maintainer"))),f.push(a[c](l,"Alexey Sukhotin &lt;strogg@yandex.ru&gt;")[c](d,n.i18n("contributor"))),f.push(a[c](l,"Naoki Sawada &lt;hypweb@gmail.com&gt;")[c](d,n.i18n("contributor"))),n.i18[n.lang].translator&&f.push(a[c](l,n.i18[n.lang].translator)[c](d,n.i18n("translator")+" ("+n.i18[n.lang].language+")")),f.push(m),f.push('<div class="'+h+'">'+n.i18n("icons")+': Pixelmixer, <a href="http://p.yusukekamiyamane.com" target="_blank">Fugue</a></div>'),f.push(m),f.push('<div class="'+h+'">Licence: BSD Licence</div>'),f.push('<div class="'+h+'">Copyright © 2009-2011, Studio 42</div>'),f.push('<div class="'+h+'">„ …'+n.i18n("dontforget")+" ”</div>"),f.push("</div>")),-1!==e.inArray("shortcuts",v)&&(g=n.shortcuts(),f.push('<div id="shortcuts" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),g.length?(f.push('<div class="ui-widget-content elfinder-help-shortcuts">'),e.each(g,function(e,t){
f.push('<div class="elfinder-help-shortcut"><div class="elfinder-help-shortcut-pattern">{
pattern}</div> {
descrip}</div>'.replace(/\{
pattern\}/,t[0]).replace(/\{
descrip\}/,t[1]))}),f.push("</div>")):f.push('<div class="elfinder-help-disabled">'+n.i18n("shortcutsof")+"</div>"),f.push("</div>")),-1!==e.inArray("help",v)&&(f.push('<div id="help" class="ui-tabs-panel ui-widget-content ui-corner-bottom">'),f.push('<a href="http://elfinder.org/forum/" target="_blank" class="elfinder-dont-panic"><span>DON\'T PANIC</span></a>'),f.push("</div>")),f.push("</div>"),t=e(f.join("")),n.one("load",function(){
t.find("#apiver").text(n.api)}),t.find(".ui-tabs-nav li").hover(function(){
e(this).toggleClass("ui-state-hover")}).children().click(function(n){
var i=e(this);n.preventDefault(),n.stopPropagation(),i.is(".ui-tabs-selected")||(i.parent().addClass("ui-tabs-selected ui-state-active").siblings().removeClass("ui-tabs-selected").removeClass("ui-state-active"),t.find(".ui-tabs-panel").hide().filter(i.attr("href")).show())}).filter(":first").click()},200),this.getstate=function(){
return 0},this.exec=function(){
this.dialog||(this.dialog=this.fm.dialog(t,{
title:this.title,width:530,autoOpen:!1,destroyOnClose:!1})),this.dialog.elfinderdialog("open").find(".ui-tabs-nav li a:first").click()}},elFinder.prototype.commands.home=function(){
this.title="Home",this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{
pattern:"ctrl+home ctrl+shift+up",description:"Home"}],this.getstate=function(){
var e=this.fm.root(),t=this.fm.cwd().hash;return e&&t&&e!=t?0:-1},this.exec=function(){
return this.fm.exec("open",this.fm.root())}},elFinder.prototype.commands.info=function(){
var t=this.fm,n="elfinder-info-spinner",i={
calc:t.i18n("calc"),size:t.i18n("size"),unknown:t.i18n("unknown"),path:t.i18n("path"),aliasfor:t.i18n("aliasfor"),modify:t.i18n("modify"),perms:t.i18n("perms"),locked:t.i18n("locked"),dim:t.i18n("dim"),kind:t.i18n("kind"),files:t.i18n("files"),folders:t.i18n("folders"),items:t.i18n("items"),yes:t.i18n("yes"),no:t.i18n("no"),link:t.i18n("link")};this.tpl={
main:'<div class="ui-helper-clearfix elfinder-info-title"><span class="elfinder-cwd-icon {
class} ui-corner-all"/>{
title}</div><table class="elfinder-info-tb">{
content}</table>',itemTitle:'<strong>{
name}</strong><span class="elfinder-info-kind">{
kind}</span>',groupTitle:"<strong>{
items}: {
num}</strong>",row:"<tr><td>{
label} : </td><td>{
value}</td></tr>",spinner:'<span>{
text}</span> <span class="'+n+" "+n+'-{
name}"/>'},this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{
pattern:"ctrl+i"}],this.init=function(){
e.each(i,function(e,n){
i[e]=t.i18n(n)})},this.getstate=function(){
return 0},this.exec=function(t){
var r=this.files(t);r.length||(r=this.files([this.fm.cwd().hash]));var a,o,s,l,d,c=this.fm,u=this.options,p=this.tpl,h=p.row,f=r.length,m=[],g=p.main,v="{
label}",b="{
value}",y={
title:this.title,width:"auto",close:function(){
e(this).elfinderdialog("destroy")}},w=[],x=function(e,t){
C.find("."+n+"-"+t).parent().html(e)},k=c.namespace+"-info-"+e.map(r,function(e){
return e.hash}).join("-"),C=c.getUI().find("#"+k);if(!f)return e.Deferred().reject();if(C.length)return C.elfinderdialog("toTop"),e.Deferred().resolve();if(1==f){
var F;if(s=r[0],g=g.replace("{
class}",c.mime2class(s.mime)),l=p.itemTitle.replace("{
name}",c.escape(s.i18||s.name)).replace("{
kind}",c.mime2kind(s)),s.tmb&&(o=c.option("tmbUrl")+s.tmb),s.read?"directory"!=s.mime||s.alias?a=c.formatSize(s.size):(a=p.spinner.replace("{
text}",i.calc).replace("{
name}","size"),w.push(s.hash)):a=i.unknown,m.push(h.replace(v,i.size).replace(b,a)),s.alias&&m.push(h.replace(v,i.aliasfor).replace(b,s.alias)),m.push(h.replace(v,i.path).replace(b,c.escape(c.path(s.hash,!0)))),s.read)if("1"==s.url)m.push(h.replace(v,i.link).replace(b,p.spinner.replace("{
text}",i.modify).replace("{
name}","url"))),c.request({
data:{
cmd:"url",target:s.hash},preventDefault:!0}).fail(function(){
x(s.name,"url")}).done(function(e){
(x('<a href="'+e.url+'" target="_blank">'+s.name+"</a>"||s.name,"url"),e.url)&&(c.file(s.hash).url=e.url)});else{
if(u.nullUrlDirLinkSelf&&"directory"==s.mime&&null===s.url){
var T=window.location;F=T.pathname+T.search+"#elf_"+s.hash}else F=c.url(s.hash);m.push(h.replace(v,i.link).replace(b,'<a href="'+F+'" target="_blank">'+s.name+"</a>"))}s.dim?m.push(h.replace(v,i.dim).replace(b,s.dim)):-1!==s.mime.indexOf("image")&&(s.width&&s.height?m.push(h.replace(v,i.dim).replace(b,s.width+"x"+s.height)):(m.push(h.replace(v,i.dim).replace(b,p.spinner.replace("{
text}",i.calc).replace("{
name}","dim"))),c.request({
data:{
cmd:"dim",target:s.hash},preventDefault:!0}).fail(function(){
x(i.unknown,"dim")}).done(function(e){
if(x(e.dim||i.unknown,"dim"),e.dim){
var t=e.dim.split("x"),n=c.file(s.hash);n.width=t[0],n.height=t[1]}}))),m.push(h.replace(v,i.modify).replace(b,c.formatDate(s))),m.push(h.replace(v,i.perms).replace(b,c.formatPermissions(s))),m.push(h.replace(v,i.locked).replace(b,s.locked?i.yes:i.no))}else g=g.replace("{
class}","elfinder-cwd-icon-group"),l=p.groupTitle.replace("{
items}",i.items).replace("{
num}",f),(d=e.map(r,function(e){
return"directory"==e.mime?1:null}).length)?(m.push(h.replace(v,i.kind).replace(b,d==f?i.folders:i.folders+" "+d+", "+i.files+" "+(f-d))),m.push(h.replace(v,i.size).replace(b,p.spinner.replace("{
text}",i.calc).replace("{
name}","size"))),w=e.map(r,function(e){
return e.hash})):(a=0,e.each(r,function(e,t){
var n=parseInt(t.size);n>=0&&a>=0?a+=n:a="unknown"}),m.push(h.replace(v,i.kind).replace(b,i.files)),m.push(h.replace(v,i.size).replace(b,c.formatSize(a))));g=g.replace("{
title}",l).replace("{
content}",m.join("")),(C=c.dialog(g,y)).attr("id",k),o&&e("<img/>").load(function(){
C.find(".elfinder-cwd-icon").css("background",'url("'+o+'") center center no-repeat')}).attr("src",o),w.length&&c.request({
data:{
cmd:"size",targets:w},preventDefault:!0}).fail(function(){
x(i.unknown,"size")}).done(function(e){
var t=parseInt(e.size);x(t>=0?c.formatSize(t):i.unknown,"size")})}},elFinder.prototype.commands.mkdir=function(){
this.disableOnSearch=!0,this.updateOnSelect=!1,this.mime="directory",this.prefix="untitled folder",this.exec=e.proxy(this.fm.res("mixin","make"),this),this.shortcuts=[{
pattern:"ctrl+shift+n"}],this.getstate=function(){
return!this._disabled&&this.fm.cwd().write?0:-1}},elFinder.prototype.commands.mkfile=function(){
this.disableOnSearch=!0,this.updateOnSelect=!1,this.mime="text/plain",this.prefix="untitled file.txt",this.exec=e.proxy(this.fm.res("mixin","make"),this),this.getstate=function(){
return!this._disabled&&this.fm.cwd().write?0:-1}},elFinder.prototype.commands.netmount=function(){
var t=this;this.alwaysEnabled=!0,this.updateOnSelect=!1,this.drivers=[],this.handlers={
load:function(){
this.drivers=this.fm.netDrivers}},this.getstate=function(){
return this.drivers.length?0:-1},this.exec=function(){
var n,i,r,a,o=t.fm,s=e.Deferred(),l=t.options;return o.bind("netmount",function(e){
var t=e.data||null;t&&t.protocol&&l[t.protocol]&&"function"==typeof l[t.protocol].done&&l[t.protocol].done(o,t)}),t.dialog||(t.dialog=(n={
protocol:e("<select/>").change(function(){
var e=this.value;r.find(".elfinder-netmount-tr").hide(),r.find(".elfinder-netmount-tr-"+e).show(),"function"==typeof l[e].select&&l[e].select(o)})},i={
title:o.i18n("netMountDialogTitle"),resizable:!1,modal:!0,destroyOnClose:!0,close:function(){
delete t.dialog,"pending"==s.state()&&s.reject()},buttons:{
}},r=e('<table class="elfinder-info-tb elfinder-netmount-tb"/>'),a=e("<div/>"),r.append(e("<tr/>").append(e("<td>"+o.i18n("protocol")+"</td>")).append(e("<td/>").append(n.protocol))),e.each(t.drivers,function(t,i){
n.protocol.append('<option value="'+i+'">'+o.i18n(i)+"</option>"),e.each(l[i].inputs,function(t,n){
n.attr("name",t),"hidden"!=n.attr("type")?(n.addClass("ui-corner-all elfinder-netmount-inputs-"+i),r.append(e("<tr/>").addClass("elfinder-netmount-tr elfinder-netmount-tr-"+i).append(e("<td>"+o.i18n(t)+"</td>")).append(e("<td/>").append(n)))):(n.addClass("elfinder-netmount-inputs-"+i),a.append(n))})}),r.append(a),r.find(".elfinder-netmount-tr").hide(),i.buttons[o.i18n("btnMount")]=function(){
var i=n.protocol.val(),a={
cmd:"netmount",protocol:i};if(e.each(r.find("input.elfinder-netmount-inputs-"+i),function(t,n){
var i;(i="function"==typeof n.val?e.trim(n.val()):e.trim(n.value))&&(a[n.name]=i)}),!a.host)return t.fm.trigger("error",{
error:"errNetMountHostReq"});t.fm.request({
data:a,notify:{
type:"netmount",cnt:1,hideCnt:!0}}).done(function(){
s.resolve()}).fail(function(e){
s.reject(e)}),t.dialog.elfinderdialog("close")},i.buttons[o.i18n("btnCancel")]=function(){
t.dialog.elfinderdialog("close")},o.dialog(r,i).ready(function(){
n.protocol.change()}))),s.promise()}},elFinder.prototype.commands.netunmount=function(){
this.alwaysEnabled=!0,this.updateOnSelect=!1,this.drivers=[],this.handlers={
load:function(){
this.drivers=this.fm.netDrivers}},this.getstate=function(e){
var t=this.fm;return e&&this.drivers.length&&!this._disabled&&t.file(e[0]).netkey?0:-1},this.exec=function(t){
var n=this.fm,i=e.Deferred().fail(function(e){
e&&n.error(e)}),r=n.file(t[0]);return this._disabled?i.reject():("pending"==i.state()&&n.confirm({
title:this.title,text:n.i18n("confirmUnmount",r.name),accept:{
label:"btnUnmount",callback:function(){
n.request({
data:{
cmd:"netmount",protocol:"netunmount",host:r.netkey,user:r.hash,pass:"dum"},notify:{
type:"netunmount",cnt:1,hideCnt:!0},preventFail:!0}).fail(function(e){
i.reject(e)}).done(function(e){
var t=n.root()==r.hash;if(e.removed=[r.hash],n.remove(e),t){
var a=n.files();for(var o in a)if("directory"==n.file(o).mime){
n.exec("open",o);break}}i.resolve()})}},cancel:{
label:"btnCancel",callback:function(){
i.reject()}}}),i)}},elFinder.prototype.commands.open=function(){
this.alwaysEnabled=!0,this._handlers={
dblclick:function(e){
e.preventDefault(),this.exec()},"select enable disable reload":function(e){
this.update("disable"==e.type?-1:void 0)}},this.shortcuts=[{
pattern:"ctrl+down numpad_enter"+("mac"!=this.fm.OS&&" enter")}],this.getstate=function(t){
var n=(t=this.files(t)).length;return 1==n?0:n&&!this.fm.UA.Mobile&&e.map(t,function(e){
return"directory"==e.mime?null:e}).length==n?0:-1},this.exec=function(t){
var n,i,r,a,o,s,l,d,c=this.fm,u=e.Deferred().fail(function(e){
e&&c.error(e)}),p=this.files(t),h=p.length;if(!h)return u.reject();if(1==h&&(n=p[0])&&"directory"==n.mime)return n&&!n.read?u.reject(["errOpen",n.name,"errPerm"]):c.request({
data:{
cmd:"open",target:n.thash||n.hash},notify:{
type:"open",cnt:1,hideCnt:!0},syncOnFail:!0});if(h!=(p=e.map(p,function(e){
return"directory"!=e.mime?e:null})).length)return u.reject();for(h=p.length;h--;){
if(!(n=p[h]).read)return u.reject(["errOpen",n.name,"errPerm"]);if(c.UA.Mobile){
if((i=c.url(n.hash))||(i=(i=c.options.url)+(-1===i.indexOf("?")?"?":"&")+(c.oldAPI?"cmd=open&current="+n.phash:"cmd=file")+"&target="+n.hash),!window.open(i))return u.reject("errPopup")}else{
if(o=l=Math.round(2*e(window).width()/3),s=d=Math.round(2*e(window).height()/3),parseInt(n.width)&&parseInt(n.height)?(o=parseInt(n.width),s=parseInt(n.height)):n.dim&&(r=n.dim.split("x"),o=parseInt(r[0]),s=parseInt(r[1])),l>=o&&d>=s?(l=o,d=s):o-l>s-d?d=Math.round(s*(l/o)):l=Math.round(o*(d/s)),a="width="+l+",height="+d,!window.open("","new_window",a+",top=50,left=50,scrollbars=yes,resizable=yes"))return u.reject("errPopup");var f=document.createElement("form");f.action=c.options.url,f.method="POST",f.target="new_window",f.style.display="none";var m=e.extend({
},c.options.customData,{
cmd:"file",target:n.hash});e.each(m,function(e,t){
var n=document.createElement("input");n.name=e,n.value=t,f.appendChild(n)}),document.body.appendChild(f),f.submit()}}return u.resolve(t)}},elFinder.prototype.commands.paste=function(){
this.updateOnSelect=!1,this.handlers={
changeclipboard:function(){
this.update()}},this.shortcuts=[{
pattern:"ctrl+v shift+insert"}],this.getstate=function(t){
if(this._disabled)return-1;if(t){
if(e.isArray(t)){
if(1!=t.length)return-1;t=this.fm.file(t[0])}}else t=this.fm.cwd();return this.fm.clipboard().length&&"directory"==t.mime&&t.write?0:-1},this.exec=function(t){
var n,i,r,a,o,s,l,d,c,u=this,p=u.fm,h=(t=t?this.files(t)[0]:p.cwd(),p.clipboard()),f=h.length,m=!!f&&h[0].cut,g=m?"errMove":"errCopy",v=[],b=[],y=e.Deferred().fail(function(e){
e&&p.error(e)});return f&&t&&"directory"==t.mime?t.write?(n=p.parents(t.hash),e.each(h,function(r,a){
return a.read?m&&a.locked?!y.reject(["errLocked",a.name]):-1!==e.inArray(a.hash,n)?!y.reject(["errCopyInItself",a.name]):((i=p.parents(a.hash)).pop(),-1!==e.inArray(t.hash,i)&&e.map(i,function(e){
var n=p.file(e);return n.phash==t.hash&&n.name==a.name?n:null}).length?!y.reject(["errReplByChild",a.name]):void(a.phash==t.hash?b.push(a.hash):v.push({
hash:a.hash,phash:a.phash,name:a.name}))):!y.reject([g,h[0].name,"errPerm"])}),"rejected"==y.state()?y:e.when((c=b,c.length&&p._commands.duplicate?p.exec("duplicate",c):e.Deferred().resolve()),(r=v,a=e.Deferred(),o=[],s=function(e){
var t=o[e],n=r[t],i=e==o.length-1;n&&p.confirm({
title:p.i18n(m?"moveFiles":"copyFiles"),text:p.i18n(["errExists",n.name,"confirmRepl"]),all:!i,accept:{
label:"btnYes",callback:function(t){
i||t?d(r):s(++e)}},reject:{
label:"btnNo",callback:function(t){
var n;if(t)for(n=o.length;e<n--;)r[o[n]].remove=!0;else r[o[e]].remove=!0;i||t?d(r):s(++e)}},cancel:{
label:"btnCancel",callback:function(){
a.resolve()}}})},l=function(t){
(o=function(t,n){
for(var i=[],r=t.length;r--;)-1!==e.inArray(t[r].name,n)&&i.unshift(r);return i}(r,t)).length?s(0):d(r)},d=function(n){
var i,r=(n=e.map(n,function(e){
return e.remove?null:e})).length;if(!r)return a.resolve();i=n[0].phash,n=e.map(n,function(e){
return e.hash}),p.request({
data:{
cmd:"paste",dst:t.hash,targets:n,cut:m?1:0,src:i},notify:{
type:m?"move":"copy",cnt:r}}).always(function(){
a.resolve(),p.unlockfiles({
files:n})})},u._disabled||!r.length?a.resolve():(p.oldAPI?d(r):p.option("copyOverwrite")?t.hash==p.cwd().hash?l(e.map(p.files(),function(e){
return e.phash==t.hash?e.name:null})):p.request({
data:{
cmd:"ls",target:t.hash},notify:{
type:"prepare",cnt:1,hideCnt:!0},preventFail:!0}).always(function(e){
l(e.list||[])}):d(r),a))).always(function(){
m&&p.clipboard([])})):y.reject([g,h[0].name,"errPerm"]):y.reject()}},elFinder.prototype.commands.quicklook=function(){
var t,n,i,r,a=this,o=a.fm,s=0,l="elfinder-quicklook-navbar-icon",d="elfinder-quicklook-fullscreen",c=function(t){
e(document).trigger(e.Event("keydown",{
keyCode:t,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1}))},u=function(e){
return{
opacity:0,width:20,height:"list"==o.view?1:20,top:e.offset().top+"px",left:e.offset().left+"px"}},p=function(e){
var t=document.createElement(e.substr(0,e.indexOf("/"))),n=!1;try{
n=t.canPlayType&&t.canPlayType(e)}catch(e){
}return n&&""!==n&&"no"!=n},h=e('<div class="elfinder-quicklook-title"/>'),f=e("<div/>"),m=e('<div class="elfinder-quicklook-info"/>'),g=e('<div class="'+l+" "+l+'-fullscreen"/>').mousedown(function(t){
var n=a.window,r=n.is("."+d),s="scroll."+o.namespace,c=e(window);t.stopPropagation(),r?(n.css(n.data("position")).unbind("mousemove"),c.unbind(s).trigger(a.resize).unbind(a.resize),v.unbind("mouseenter").unbind("mousemove")):(n.data("position",{
left:n.css("left"),top:n.css("top"),width:n.width(),height:n.height()}).css({
width:"100%",height:"100%"}),e(window).bind(s,function(){
n.css({
left:parseInt(e(window).scrollLeft())+"px",top:parseInt(e(window).scrollTop())+"px"})}).bind(a.resize,function(e){
a.preview.trigger("changesize")}).trigger(s).trigger(a.resize),n.bind("mousemove",function(e){
v.stop(!0,!0).show().delay(3e3).fadeOut("slow")}).mousemove(),v.mouseenter(function(){
v.stop(!0,!0).show()}).mousemove(function(e){
e.stopPropagation()})),v.attr("style","").draggable(r?"destroy":{
}),n.toggleClass(d),e(this).toggleClass(l+"-fullscreen-off"),e.fn.resizable&&i.add(n).resizable(r?"enable":"disable").removeClass("ui-state-disabled")}),v=e('<div class="elfinder-quicklook-navbar"/>').append(e('<div class="'+l+" "+l+'-prev"/>').mousedown(function(){
c(37)})).append(g).append(e('<div class="'+l+" "+l+'-next"/>').mousedown(function(){
c(39)})).append('<div class="elfinder-quicklook-navbar-separator"/>').append(e('<div class="'+l+" "+l+'-close"/>').mousedown(function(){
a.window.trigger("close")}));this.resize="resize."+o.namespace,this.info=e('<div class="elfinder-quicklook-info-wrapper"/>').append(f).append(m),this.preview=e('<div class="elfinder-quicklook-preview ui-helper-clearfix"/>').bind("change",function(e){
a.info.attr("style","").hide(),f.removeAttr("class").attr("style",""),m.html("")}).bind("update",function(t){
var n,i=a.fm,r=(a.preview,t.file),o='<div class="elfinder-quicklook-info-data">{
value}</div>';r?(!r.read&&t.stopImmediatePropagation(),a.window.data("hash",r.hash),a.preview.unbind("changesize").trigger("change").children().remove(),h.html(i.escape(r.name)),m.html(o.replace(/\{
value\}/,r.name)+o.replace(/\{
value\}/,i.mime2kind(r))+("directory"==r.mime?"":o.replace(/\{
value\}/,i.formatSize(r.size)))+o.replace(/\{
value\}/,i.i18n("modify")+": "+i.formatDate(r))),f.addClass("elfinder-cwd-icon ui-corner-all "+i.mime2class(r.mime)),r.tmb&&e("<img/>").hide().appendTo(a.preview).load(function(){
f.css("background",'url("'+n+'") center center no-repeat'),e(this).remove()}).attr("src",n=i.tmb(r.hash)),a.info.delay(100).fadeIn(10)):t.stopImmediatePropagation()}),this.window=e('<div class="ui-helper-reset ui-widget elfinder-quicklook" style="position:absolute"/>').click(function(e){
e.stopPropagation()}).append(e('<div class="elfinder-quicklook-titlebar"/>').append(h).append(e('<span class="ui-icon ui-icon-circle-close"/>').mousedown(function(e){
e.stopPropagation(),a.window.trigger("close")}))).append(this.preview.add(v)).append(a.info.hide()).draggable({
handle:"div.elfinder-quicklook-titlebar"}).bind("open",function(i){
var o,l,d,c,p=a.window,h=a.value;a.closed()&&h&&(o=r.find("#"+h.hash)).length&&(v.attr("style",""),s=1,o.trigger("scrolltoview"),p.css(u(o)).show().animate((l=e(window),d=Math.min(t,e(window).width()-10),c=Math.min(n,e(window).height()-80),{
opacity:1,width:d,height:c,top:parseInt((l.height()-c-60)/2+l.scrollTop()),left:parseInt((l.width()-d)/2+l.scrollLeft())}),550,function(){
s=2,a.update(1,a.value)}))}).bind("close",function(e){
var t=a.window,n=a.preview.trigger("change"),i=(a.value,r.find("#"+t.data("hash"))),o=function(){
s=0,t.hide(),n.children().remove(),a.update(0,a.value)};a.opened()&&(s=1,t.is("."+d)&&g.mousedown(),i.length?t.animate(u(i),500,o):o())}),this.alwaysEnabled=!0,this.value=null,this.handlers={
select:function(){
this.update(void 0,this.fm.selectedFiles()[0])},error:function(){
a.window.is(":visible")&&a.window.data("hash","").trigger("close")},"searchshow searchhide":function(){
this.opened()&&this.window.trigger("close")}},this.shortcuts=[{
pattern:"space"}],this.support={
audio:{
ogg:p('audio/ogg; codecs="vorbis"'),mp3:p("audio/mpeg;"),wav:p('audio/wav; codecs="1"'),m4a:p("audio/x-m4a;")||p("audio/aac;")},video:{
ogg:p('video/ogg; codecs="theora"'),webm:p('video/webm; codecs="vp8, vorbis"'),mp4:p('video/mp4; codecs="avc1.42E01E"')||p('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')}},this.closed=function(){
return 0==s},this.opened=function(){
return 2==s},this.init=function(){
var s=this.options,l=this.window,d=this.preview;t=s.width>0?parseInt(s.width):450,n=s.height>0?parseInt(s.height):300,o.one("load",function(){
i=o.getUI(),r=o.getUI("cwd"),l.appendTo("body").zIndex(100+i.zIndex()),e(document).keydown(function(e){
27==e.keyCode&&a.opened()&&l.trigger("close")}),e.fn.resizable&&!o.UA.Touch&&l.resizable({
handles:"se",minWidth:350,minHeight:120,resize:function(){
d.trigger("changesize")}}),a.change(function(){
a.opened()&&(a.value?d.trigger(e.Event("update",{
file:a.value})):l.trigger("close"))}),e.each(o.commands.quicklook.plugins||[],function(e,t){
"function"==typeof t&&new t(a)}),d.bind("update",function(){
a.info.show()})})},this.getstate=function(){
return 1==this.fm.selected().length?2==s?1:0:-1},this.exec=function(){
this.enabled()&&this.window.trigger(this.opened()?"close":"open")},this.hideinfo=function(){
this.info.stop(!0).hide()}},elFinder.prototype.commands.quicklook.plugins=[function(t){
var n=["image/jpeg","image/png","image/gif"],i=t.preview;e.each(navigator.mimeTypes,function(t,i){
var r=i.type;0===r.indexOf("image/")&&e.inArray(r,n)&&n.push(r)}),i.bind("update",function(r){
var a,o=r.file;-1!==e.inArray(o.mime,n)&&(r.stopImmediatePropagation(),a=e("<img/>").hide().appendTo(i).load(function(){
setTimeout(function(){
var e=(a.width()/a.height()).toFixed(2);i.bind("changesize",function(){
var t,n,r=parseInt(i.width()),o=parseInt(i.height());e<(r/o).toFixed(2)?(n=o,t=Math.floor(n*e)):(t=r,n=Math.floor(t/e)),a.width(t).height(n).css("margin-top",n<o?Math.floor((o-n)/2):0)}).trigger("changesize"),t.hideinfo(),a.fadeIn(100)},1)}).attr("src",t.fm.url(o.hash)))})},function(t){
var n=["text/html","application/xhtml+xml"],i=t.preview,r=t.fm;i.bind("update",function(a){
var o,s=a.file;-1!==e.inArray(s.mime,n)&&(a.stopImmediatePropagation(),i.one("change",function(){
"pending"==o.state()&&o.reject()}),o=r.request({
data:{
cmd:"get",target:s.hash,current:s.phash,conv:1},preventDefault:!0}).done(function(n){
t.hideinfo(),doc=e('<iframe class="elfinder-quicklook-preview-html"/>').appendTo(i)[0].contentWindow.document,doc.open(),doc.write(n.content),doc.close()}))})},function(t){
var n=t.fm,i=n.res("mimes","text"),r=t.preview;r.bind("update",function(a){
var o,s=a.file,l=s.mime;0!==l.indexOf("text/")&&-1===e.inArray(l,i)||(a.stopImmediatePropagation(),r.one("change",function(){
"pending"==o.state()&&o.reject()}),o=n.request({
data:{
cmd:"get",target:s.hash,conv:1},preventDefault:!0}).done(function(i){
t.hideinfo(),e('<div class="elfinder-quicklook-preview-text-wrapper"><pre class="elfinder-quicklook-preview-text">'+n.escape(i.content)+"</pre></div>").appendTo(r)}))})},function(t){
var n=t.fm,i="application/pdf",r=t.preview,a=!1;n.UA.Safari&&"mac"==n.OS||n.UA.IE?a=!0:e.each(navigator.plugins,function(t,n){
e.each(n,function(e,t){
if(t.type==i)return!(a=!0)})}),a&&r.bind("update",function(a){
var o,s=a.file;s.mime==i&&(a.stopImmediatePropagation(),r.one("change",function(){
o.unbind("load").remove()}),o=e('<iframe class="elfinder-quicklook-preview-pdf"/>').hide().appendTo(r).load(function(){
t.hideinfo(),o.show()}).attr("src",n.url(s.hash)))})},function(t){
var n=t.fm,i="application/x-shockwave-flash",r=t.preview,a=!1;e.each(navigator.plugins,function(t,n){
e.each(n,function(e,t){
if(t.type==i)return!(a=!0)})}),a&&r.bind("update",function(a){
var o=a.file;o.mime==i&&(a.stopImmediatePropagation(),t.hideinfo(),r.append(e('<embed class="elfinder-quicklook-preview-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+n.url(o.hash)+'" quality="high" type="application/x-shockwave-flash" />')))})},function(t){
var n,i=t.preview,r=!!t.options.autoplay,a={
"audio/mpeg":"mp3","audio/mpeg3":"mp3","audio/mp3":"mp3","audio/x-mpeg3":"mp3","audio/x-mp3":"mp3","audio/x-wav":"wav","audio/wav":"wav","audio/x-m4a":"m4a","audio/aac":"m4a","audio/mp4":"m4a","audio/x-mp4":"m4a","audio/ogg":"ogg"};i.bind("update",function(o){
var s=o.file,l=a[s.mime];t.support.audio[l]&&(o.stopImmediatePropagation(),n=e('<audio class="elfinder-quicklook-preview-audio" controls preload="auto" autobuffer><source src="'+t.fm.url(s.hash)+'" /></audio>').appendTo(i),r&&n[0].play())}).bind("change",function(){
n&&n.parent().length&&(n[0].pause(),n.remove(),n=null)})},function(t){
var n,i=t.preview,r=!!t.options.autoplay,a={
"video/mp4":"mp4","video/x-m4v":"mp4","video/ogg":"ogg","application/ogg":"ogg","video/webm":"webm"};i.bind("update",function(o){
var s=o.file,l=a[s.mime];t.support.video[l]&&(o.stopImmediatePropagation(),t.hideinfo(),n=e('<video class="elfinder-quicklook-preview-video" controls preload="auto" autobuffer><source src="'+t.fm.url(s.hash)+'" /></video>').appendTo(i),r&&n[0].play())}).bind("change",function(){
n&&n.parent().length&&(n[0].pause(),n.remove(),n=null)})},function(t){
var n,i=t.preview,r=[];e.each(navigator.plugins,function(t,n){
e.each(n,function(e,t){
(0===t.type.indexOf("audio/")||0===t.type.indexOf("video/"))&&r.push(t.type)})}),i.bind("update",function(a){
var o,s=a.file,l=s.mime;-1!==e.inArray(s.mime,r)&&(a.stopImmediatePropagation(),(o=0===l.indexOf("video/"))&&t.hideinfo(),n=e('<embed src="'+t.fm.url(s.hash)+'" type="'+l+'" class="elfinder-quicklook-preview-'+(o?"video":"audio")+'"/>').appendTo(i))}).bind("change",function(){
n&&n.parent().length&&(n.remove(),n=null)})}],elFinder.prototype.commands.reload=function(){
this.alwaysEnabled=!0,this.updateOnSelect=!0,this.shortcuts=[{
pattern:"ctrl+shift+r f5"}],this.getstate=function(){
return 0},this.exec=function(){
var e=this.fm,t=e.sync(),n=setTimeout(function(){
e.notify({
type:"reload",cnt:1,hideCnt:!0}),t.always(function(){
e.notify({
type:"reload",cnt:-1})})},e.notifyDelay);return t.always(function(){
clearTimeout(n),e.trigger("reload")})}},elFinder.prototype.commands.rename=function(){
this.shortcuts=[{
pattern:"f2"+("mac"==this.fm.OS?" enter":"")}],this.getstate=function(){
var e=this.fm.selectedFiles();return this._disabled||1!=e.length||!e[0].phash||e[0].locked?-1:0},this.exec=function(){
var t=this.fm,n=t.getUI("cwd"),i=t.selected(),r=i.length,a=t.file(i.shift()),o=".elfinder-cwd-filename",s=e.Deferred().fail(function(e){
var i=l.parent(),r=t.escape(a.name);i.length?(l.remove(),i.html(r)):(n.find("#"+a.hash).find(o).html(r),setTimeout(function(){
n.find("#"+a.hash).click()},50)),e&&t.error(e)}).always(function(){
t.enable()}),l=e('<input type="text"/>').keydown(function(t){
t.stopPropagation(),t.stopImmediatePropagation(),t.keyCode==e.ui.keyCode.ESCAPE?s.reject():t.keyCode==e.ui.keyCode.ENTER&&l.blur()}).mousedown(function(e){
e.stopPropagation()}).dblclick(function(e){
e.stopPropagation(),e.preventDefault()}).blur(function(){
var n=e.trim(l.val()),i=l.parent();if(i.length){
if(l[0].setSelectionRange&&l[0].setSelectionRange(0,0),n==a.name)return s.reject();if(!n)return s.reject("errInvName");if(t.fileByName(n,a.phash))return s.reject(["errExists",n]);i.html(t.escape(n)),t.lockfiles({
files:[a.hash]}),t.request({
data:{
cmd:"rename",target:a.hash,name:n},notify:{
type:"rename",cnt:1}}).fail(function(e){
s.reject(),t.sync()}).done(function(e){
s.resolve(e)}).always(function(){
t.unlockfiles({
files:[a.hash]})})}}),d=n.find("#"+a.hash).find(o).empty().append(l.val(a.name)),c=l.val().replace(/\.((tar\.(gz|bz|bz2|z|lzo))|cpio\.gz|ps\.gz|xcf\.(gz|bz2)|[a-z0-9]{
1,4})$/gi,"");return this.disabled()?s.reject():!a||r>1||!d.length?s.reject("errCmdParams",this.title):a.locked?s.reject(["errLocked",a.name]):(t.one("select",function(){
l.parent().length&&a&&-1===e.inArray(a.hash,t.selected())&&l.blur()}),l.select().focus(),l[0].setSelectionRange&&l[0].setSelectionRange(0,c.length),s)}},elFinder.prototype.commands.resize=function(){
this.updateOnSelect=!1,val="resize",this.getstate=function(){
var e=this.fm.selectedFiles();return!this._disabled&&1==e.length&&e[0].read&&e[0].write&&-1!==e[0].mime.indexOf("image/")?0:-1},this.exec=function(t){
var n,i,r,a,o,s,l,d,c,u,p,h,f,m,g,v,b,y,w,x,k,C,F,T,z,I,P,M,A,D,O,S,E,U,j,R,q,H,L,_,N,W,V,B,K,$,G,J,X,Y,Z,Q,ee,te,ne,ie,re,ae,oe,se,le=this.fm,de=this.files(t),ce=e.Deferred();return de.length&&-1!==de[0].mime.indexOf("image/")?(n="resize-"+le.namespace+"-"+de[0].hash,(i=le.getUI().find("#"+n)).length?(i.elfinderdialog("toTop"),ce.resolve()):(r=de[0],a=n,o=e('<div class="elfinder-dialog-resize"/>'),s='<input type="text" size="5"/>',l='<div class="elfinder-resize-row"/>',d='<div class="elfinder-resize-label"/>',c=e('<div class="elfinder-resize-control"/>'),u=e('<div class="elfinder-resize-preview"/>'),p=e('<div class="elfinder-resize-spinner">'+le.i18n("ntfloadimg")+"</div>"),h=e('<div class="elfinder-resize-handle"/>'),f=e('<div class="elfinder-resize-handle"/>'),m=e('<div class="elfinder-resize-uiresize"/>'),g=e('<div class="elfinder-resize-uicrop"/>'),v='<div class="ui-state-default elfinder-button"/>',b=e('<div class="elfinder-resize-rotate"/>'),y=e(v).attr("title",le.i18n("rotate-cw")).append(e('<span class="elfinder-button-icon elfinder-button-icon-rotate-l"/>').click(function(){
W-=90,Z.update(W)})),w=e(v).attr("title",le.i18n("rotate-ccw")).append(e('<span class="elfinder-button-icon elfinder-button-icon-rotate-r"/>').click(function(){
W+=90,Z.update(W)})),x=e("<span />"),k=e('<div class="ui-state-default ui-corner-all elfinder-resize-reset"><span class="ui-icon ui-icon-arrowreturnthick-1-w"/></div>'),C=e('<div class="elfinder-resize-type"/>').append('<input type="radio" name="type" id="'+a+'-resize" onclick="val=\'resize\';" value="resize" checked="checked" /><label for="'+a+'-resize">'+le.i18n("resize")+"</label>").append('<input type="radio" name="type" id="'+a+'-crop" onclick="val=\'crop\';" value="crop" /><label for="'+a+'-crop">'+le.i18n("crop")+"</label>").append('<input type="radio" name="type" id="'+a+'-rotate" onclick="val=\'rotate\';" value="rotate" /><label for="'+a+'-rotate">'+le.i18n("rotate")+"</label>"),F=e("input",C).click(function(){
J(),Q(!0),ee(!0),te(!0),"resize"==val?(m.show(),b.hide(),g.hide(),Q()):"crop"==val?(b.hide(),m.hide(),g.show(),ee()):"rotate"==val&&(m.hide(),g.hide(),b.show(),te())}),T=e('<input type="checkbox" checked="checked"/>').change(function(){
q=!!T.prop("checked"),X.fixHeight(),Q(!0),Q()}),z=e(s).change(function(){
var e=parseInt(z.val()),t=parseInt(q?Math.round(e/E):I.val());e>0&&t>0&&(X.updateView(e,t),I.val(t))}),I=e(s).change(function(){
var e=parseInt(I.val()),t=parseInt(q?Math.round(e*E):z.val());t>0&&e>0&&(X.updateView(t,e),z.val(t))}),P=e(s).change(function(){
Y.updateView()}),M=e(s).change(function(){
Y.updateView()}),A=e(s).change(function(){
Y.updateView()}),D=e(s).change(function(){
Y.updateView()}),O=e('<input type="text" size="3" maxlength="3" value="0" />').change(function(){
Z.update()}),S=e('<div class="elfinder-resize-rotate-slider"/>').slider({
min:0,max:359,value:O.val(),animate:!0,change:function(e,t){
t.value!=S.slider("value")&&Z.update(t.value)},slide:function(e,t){
Z.update(t.value,!1)}}),E=1,U=1,j=0,R=0,q=!0,H=0,L=0,_=0,N=0,W=0,V=e("<img/>").load(function(){
p.remove(),j=V.width(),R=V.height(),E=j/R,X.updateView(j,R),h.append(V.show()).show(),z.val(j),I.val(R);var t=Math.min(H,L)/Math.sqrt(Math.pow(j,2)+Math.pow(R,2));_=j*t,N=R*t,F.button("enable"),c.find("input,select").removeAttr("disabled").filter(":text").keydown(function(t){
var n,i=t.keyCode;t.stopPropagation(),i>=37&&i<=40||i==e.ui.keyCode.BACKSPACE||i==e.ui.keyCode.DELETE||65==i&&(t.ctrlKey||t.metaKey)||27==i||(9==i&&((n=e(this).parent()[t.shiftKey?"prev":"next"](".elfinder-resize-row").children(":text")).length?n.focus():e(this).parent().parent().find(":text:"+(t.shiftKey?"last":"first")).focus()),13!=i?i>=48&&i<=57||i>=96&&i<=105||t.preventDefault():le.confirm({
title:e("input:checked",C).val(),text:"confirmReq",accept:{
label:"btnApply",callback:function(){
ne()}},cancel:{
label:"btnCancel",callback:function(){
}}}))}).filter(":first").focus(),Q(),k.hover(function(){
k.toggleClass("ui-state-hover")}).click(J)}).error(function(){
p.text("Unable to load image").css("background","transparent")}),B=e("<div/>"),K=e("<img/>"),$=e("<div/>"),G=e("<img/>"),J=function(){
z.val(j),I.val(R),X.updateView(j,R)},X={
update:function(){
z.val(Math.round(V.width()/U)),I.val(Math.round(V.height()/U))},updateView:function(e,t){
e>H||t>L?e/H>t/L?(U=H/e,V.width(H).height(Math.ceil(t*U))):(U=L/t,V.height(L).width(Math.ceil(e*U))):V.width(e).height(t),U=V.width()/e,x.text("1 : "+(1/U).toFixed(2)),X.updateHandle()},updateHandle:function(){
h.width(V.width()).height(V.height())},fixWidth:function(){
var e;q&&(e=I.val(),e=Math.round(e*E),X.updateView(void 0,e),z.val(void 0))},fixHeight:function(){
var e,t;q&&(e=z.val(),t=Math.round(e/E),X.updateView(e,t),I.val(t))}},Y={
update:function(){
A.val(Math.round((f.data("w")||f.width())/U)),D.val(Math.round((f.data("h")||f.height())/U)),P.val(Math.round(((f.data("x")||f.offset().left)-K.offset().left)/U)),M.val(Math.round(((f.data("y")||f.offset().top)-K.offset().top)/U))},updateView:function(){
var e=parseInt(P.val())*U+K.offset().left,t=parseInt(M.val())*U+K.offset().top,n=A.val()*U,i=D.val()*U;f.data({
x:e,y:t,w:n,h:i}),f.width(Math.round(n)),f.height(Math.round(i)),$.width(f.width()),$.height(f.height()),f.offset({
left:Math.round(e),top:Math.round(t)})},resize_update:function(){
f.data({
w:null,h:null}),Y.update(),$.width(f.width()),$.height(f.height())},drag_update:function(){
f.data({
x:null,y:null}),Y.update()}},Z={
mouseStartAngle:0,imageStartAngle:0,imageBeingRotated:!1,update:function(e,t){
void 0===e&&(W=e=parseInt(O.val())),void 0===t&&(t=!0),!t||le.UA.Opera||le.UA.ltIE8?G.rotate(e):G.animate({
rotate:e+"deg"}),(e%=360)<0&&(e+=360),O.val(parseInt(e)),S.slider("value",O.val())},execute:function(e){
if(Z.imageBeingRotated){
var t=Z.getCenter(G),n=e.pageX-t[0],i=e.pageY-t[1],r=Math.atan2(i,n)-Z.mouseStartAngle+Z.imageStartAngle;return r=Math.round(180*parseFloat(r)/Math.PI),e.shiftKey&&(r=15*Math.round((r+6)/15)),G.rotate(r),(r%=360)<0&&(r+=360),O.val(r),S.slider("value",O.val()),!1}},start:function(t){
Z.imageBeingRotated=!0;var n=Z.getCenter(G),i=t.pageX-n[0],r=t.pageY-n[1];return Z.mouseStartAngle=Math.atan2(r,i),Z.imageStartAngle=parseFloat(G.rotate())*Math.PI/180,e(document).mousemove(Z.execute),!1},stop:function(t){
if(Z.imageBeingRotated)return e(document).unbind("mousemove",Z.execute),setTimeout(function(){
Z.imageBeingRotated=!1},10),!1},getCenter:function(e){
var t=G.rotate();G.rotate(0);var n=G.offset(),i=n.left+G.width()/2,r=n.top+G.height()/2;return G.rotate(t),Array(i,r)}},Q=function(t){
e.fn.resizable&&(t?(h.filter(":ui-resizable").resizable("destroy"),h.hide()):(h.show(),h.resizable({
alsoResize:V,aspectRatio:q,resize:X.update,stop:X.fixHeight})))},ee=function(t){
e.fn.draggable&&e.fn.resizable&&(t?(f.filter(":ui-resizable").resizable("destroy"),f.filter(":ui-draggable").draggable("destroy"),B.hide()):(K.width(V.width()).height(V.height()),$.width(V.width()).height(V.height()),f.width(K.width()).height(K.height()).offset(K.offset()).resizable({
containment:B,resize:Y.resize_update,handles:"all"}).draggable({
handle:$,containment:K,drag:Y.drag_update}),B.show().width(V.width()).height(V.height()),Y.update()))},te=function(t){
e.fn.draggable&&e.fn.resizable&&(t?G.hide():G.show().width(_).height(N).css("margin-top",(L-N)/2+"px").css("margin-left",(H-_)/2+"px"))},ne=function(){
var e,t,n,i,a,s=val;if("resize"==s)e=parseInt(z.val())||0,t=parseInt(I.val())||0;else if("crop"==s)e=parseInt(A.val())||0,t=parseInt(D.val())||0,n=parseInt(P.val())||0,i=parseInt(M.val())||0;else if("rotate"==s){
if(e=j,t=R,(a=parseInt(O.val())||0)<0||a>360)return le.error("Invalid rotate degree");if(0==a||360==a)return le.error("Image dose not rotated")}if("rotate"!=s){
if(e<=0||t<=0)return le.error("Invalid image size");if(e==j&&t==R)return le.error("Image size not changed")}val="resize",o.elfinderdialog("close"),le.request({
data:{
cmd:"resize",target:r.hash,width:e,height:t,x:n,y:i,degree:a,mode:s},notify:{
type:"resize",cnt:1}}).fail(function(e){
ce.reject(e)}).done(function(){
ce.resolve()})},ie={
},re="elfinder-resize-handle-hline",ae="elfinder-resize-handle-vline",oe="elfinder-resize-handle-point",se=le.url(r.hash),G.mousedown(Z.start),e(document).mouseup(Z.stop),m.append(e(l).append(e(d).text(le.i18n("width"))).append(z).append(k)).append(e(l).append(e(d).text(le.i18n("height"))).append(I)).append(e(l).append(e("<label/>").text(le.i18n("aspectRatio")).prepend(T))).append(e(l).append(le.i18n("scale")+" ").append(x)),g.append(e(l).append(e(d).text("X")).append(P)).append(e(l).append(e(d).text("Y")).append(M)).append(e(l).append(e(d).text(le.i18n("width"))).append(A)).append(e(l).append(e(d).text(le.i18n("height"))).append(D)),b.append(e(l).append(e(d).text(le.i18n("rotate"))).append(e('<div style="float:left; width: 130px;">').append(e('<div style="float:left;">').append(O).append(e("<span/>").text(le.i18n("degree")))).append(e('<div class="ui-widget-content ui-corner-all elfinder-buttonset"/>').append(y).append(e('<span class="ui-widget-content elfinder-toolbar-button-separator"/>')).append(w))).append(S)),o.append(C),c.append(e(l)).append(m).append(g.hide()).append(b.hide()).find("input,select").attr("disabled","disabled"),h.append('<div class="'+re+" "+re+'-top"/>').append('<div class="'+re+" "+re+'-bottom"/>').append('<div class="'+ae+" "+ae+'-left"/>').append('<div class="'+ae+" "+ae+'-right"/>').append('<div class="'+oe+" "+oe+'-e"/>').append('<div class="'+oe+" "+oe+'-se"/>').append('<div class="'+oe+" "+oe+'-s"/>'),u.append(p).append(h.hide()).append(V.hide()),f.css("position","absolute").append('<div class="'+re+" "+re+'-top"/>').append('<div class="'+re+" "+re+'-bottom"/>').append('<div class="'+ae+" "+ae+'-left"/>').append('<div class="'+ae+" "+ae+'-right"/>').append('<div class="'+oe+" "+oe+'-n"/>').append('<div class="'+oe+" "+oe+'-e"/>').append('<div class="'+oe+" "+oe+'-s"/>').append('<div class="'+oe+" "+oe+'-w"/>').append('<div class="'+oe+" "+oe+'-ne"/>').append('<div class="'+oe+" "+oe+'-se"/>').append('<div class="'+oe+" "+oe+'-sw"/>').append('<div class="'+oe+" "+oe+'-nw"/>'),u.append(B.css("position","absolute").hide().append(K).append(f.append($))),u.append(G.hide()),u.css("overflow","hidden"),o.append(u).append(c),ie[le.i18n("btnApply")]=ne,ie[le.i18n("btnCancel")]=function(){
o.elfinderdialog("close")},le.dialog(o,{
title:r.name,width:650,resizable:!1,destroyOnClose:!0,buttons:ie,open:function(){
u.zIndex(1+e(this).parent().zIndex())}}).attr("id",a),le.UA.ltIE8&&e(".elfinder-dialog").css("filter",""),k.css("left",z.position().left+z.width()+12),$.css({
opacity:.2,"background-color":"#fff",position:"absolute"}),f.css("cursor","move"),f.find(".elfinder-resize-handle-point").css({
"background-color":"#fff",opacity:.5,"border-color":"#000"}),G.css("cursor","pointer"),C.buttonset(),H=u.width()-(h.outerWidth()-h.width()),L=u.height()-(h.outerHeight()-h.height()),V.attr("src",se+(-1===se.indexOf("?")?"?":"&")+"_="+Math.random()),K.attr("src",V.attr("src")),G.attr("src",V.attr("src")),ce)):ce.reject()}},function(e){
var t=function(e,t){
var n=0;for(n in t)if(void 0!==e[t[n]])return t[n];return e[t[n]]="",t[n]};if(e.cssHooks.rotate={
get:function(t,n,i){
return e(t).rotate()},set:function(t,n){
return e(t).rotate(n),n}},e.cssHooks.transform={
get:function(e,n,i){
var r=t(e.style,["WebkitTransform","MozTransform","OTransform","msTransform","transform"]);return e.style[r]},set:function(e,n){
var i=t(e.style,["WebkitTransform","MozTransform","OTransform","msTransform","transform"]);return e.style[i]=n,n}},e.fn.rotate=function(e){
var t;return void 0===e?window.opera?(t=this.css("transform").match(/rotate\((.*?)\)/))&&t[1]?Math.round(180*parseFloat(t[1])/Math.PI):0:(t=this.css("transform").match(/rotate\((.*?)\)/))&&t[1]?parseInt(t[1]):0:(this.css("transform",this.css("transform").replace(/none|rotate\(.*?\)/,"")+"rotate("+parseInt(e)+"deg)"),this)},e.fx.step.rotate=function(t){
0==t.state&&(t.start=e(t.elem).rotate(),t.now=t.start),e(t.elem).rotate(t.now)},void 0===window.addEventListener&&void 0===document.getElementsByClassName){
var n=function(e){
if("static"==e.currentStyle.position){
var t=function(e){
for(var t=e,n=t.offsetLeft,i=t.offsetTop;t.offsetParent&&((t=t.offsetParent)==document.body||"static"==t.currentStyle.position);)t!=document.body&&t!=document.documentElement&&(n-=t.scrollLeft,i-=t.scrollTop),n+=t.offsetLeft,i+=t.offsetTop;return{
x:n,y:i}}(e);e.style.position="absolute",e.style.left=t.x+"px",e.style.top=t.y+"px"}},i=e.cssHooks.transform.set;e.cssHooks.transform.set=function(e,t){
return i.apply(this,[e,t]),function(e,t){
var i,r=1,a=1,o=1,s=1;if(void 0!==e.style.msTransform)return!0;n(e);var l=(i=t.match(/rotate\((.*?)\)/))&&i[1]?parseInt(i[1]):0;(l%=360)<0&&(l=360+l);var d=l*Math.PI/180,c=Math.cos(d),u=Math.sin(d);r*=c,a*=-u,o*=u,s*=c,e.style.filter=(e.style.filter||"").replace(/progid:DXImageTransform\.Microsoft\.Matrix\([^)]*\)/,"")+"progid:DXImageTransform.Microsoft.Matrix(M11="+r+",M12="+a+",M21="+o+",M22="+s+",FilterType='bilinear',sizingMethod='auto expand')";var p=parseInt(e.style.width||e.width||0),h=parseInt(e.style.height||e.height||0),f=(d=l*Math.PI/180,Math.abs(Math.cos(d))),m=Math.abs(Math.sin(d)),g=(p-(p*f+h*m))/2,v=(h-(p*m+h*f))/2;e.style.marginLeft=Math.floor(g)+"px",e.style.marginTop=Math.floor(v)+"px"}(e,t),t}}}(jQuery),elFinder.prototype.commands.rm=function(){
this.shortcuts=[{
pattern:"delete ctrl+backspace"}],this.getstate=function(t){
var n=this.fm;return t=t||n.selected(),!this._disabled&&t.length&&e.map(t,function(e){
var t=n.file(e);return t&&t.phash&&!t.locked?e:null}).length==t.length?0:-1},this.exec=function(t){
var n=this.fm,i=e.Deferred().fail(function(e){
e&&n.error(e)}),r=this.files(t),a=r.length,o=n.cwd().hash,s=!1;return!a||this._disabled?i.reject():(e.each(r,function(e,t){
return t.phash?t.locked?!i.reject(["errLocked",t.name]):void(t.hash==o&&(s=n.root(t.hash))):!i.reject(["errRm",t.name,"errPerm"])}),"pending"==i.state()&&(r=this.hashes(t),n.confirm({
title:this.title,text:"confirmRm",accept:{
label:"btnRm",callback:function(){
n.lockfiles({
files:r}),n.request({
data:{
cmd:"rm",targets:r},notify:{
type:"rm",cnt:a},preventFail:!0}).fail(function(e){
i.reject(e)}).done(function(e){
i.done(e),s&&n.exec("open",s)}).always(function(){
n.unlockfiles({
files:r})})}},cancel:{
label:"btnCancel",callback:function(){
i.reject()}}})),i)}},elFinder.prototype.commands.search=function(){
this.title="Find files",this.options={
ui:"searchbutton"},this.alwaysEnabled=!0,this.updateOnSelect=!1,this.getstate=function(){
return 0},this.exec=function(t){
var n=this.fm;return"string"==typeof t&&t?(n.trigger("searchstart",{
query:t}),n.request({
data:{
cmd:"search",q:t},notify:{
type:"search",cnt:1,hideCnt:!0}})):(n.getUI("toolbar").find("."+n.res("class","searchbtn")+" :text").focus(),e.Deferred().reject())}},elFinder.prototype.commands.sort=function(){
this.options={
ui:"sortbutton"},this.getstate=function(){
return 0},this.exec=function(t,n){
var i=this.fm;n=e.extend({
type:i.sortType,order:i.sortOrder,stick:i.sortStickFolders},n);return this.fm.setSort(n.type,n.order,n.stick),e.Deferred().resolve()}},elFinder.prototype.commands.up=function(){
this.alwaysEnabled=!0,this.updateOnSelect=!1,this.shortcuts=[{
pattern:"ctrl+up"}],this.getstate=function(){
return this.fm.cwd().phash?0:-1},this.exec=function(){
return this.fm.cwd().phash?this.fm.exec("open",this.fm.cwd().phash):e.Deferred().reject()}},elFinder.prototype.commands.upload=function(){
var t=this.fm.res("class","hover");this.disableOnSearch=!0,this.updateOnSelect=!1,this.shortcuts=[{
pattern:"ctrl+u"}],this.getstate=function(){
return!this._disabled&&this.fm.cwd().write?0:-1},this.exec=function(n){
var i,r,a,o,s,l,d,c,u=this.fm,p=function(e){
r.elfinderdialog("close"),u.upload(e).fail(function(e){
i.reject(e)}).done(function(e){
i.resolve(e)})};if(this.disabled())return e.Deferred().reject();if(d=function(e){
e.stopPropagation(),e.preventDefault();var t=!1,n="",i=null;try{
i=e.dataTransfer.getData("text/html")}catch(e){
}return i?(t=[i],n="html"):e.dataTransfer&&e.dataTransfer.items&&e.dataTransfer.items.length?(t=e.dataTransfer,n="data"):e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length?(t=e.dataTransfer.files,n="files"):(i=e.dataTransfer.getData("text"))&&(t=[i],n="text"),!!t&&u.upload({
files:t,type:n})},n){
if(n.input||n.files)return n.type="files",u.upload(n);if(n.dropEvt)return d(n.dropEvt)}return i=e.Deferred(),c=function(e){
var t,n=[];if((e=e.originalEvent||e).clipboardData&&e.clipboardData.items&&e.clipboardData.items.length){
for(var i=0;i<e.clipboardData.items.length;i++)"file"==e.clipboardData.items[i].kind&&(t=e.clipboardData.items[i].getAsFile(),n.push(t));if(n.length)return void p({
files:n,type:"files"})}var r=e.target||e.srcElement;setTimeout(function(){
if(r.innerHTML){
var e=r.innerHTML.replace(/<br[^>]*>/gi," "),t=e.match(/<[^>]+>/)?"html":"text";r.innerHTML="",p({
files:[e],type:t})}},1)},a=e('<input type="file" multiple="true"/>').change(function(){
p({
input:a[0]})}),o=e('<div class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">'+u.i18n("selectForUpload")+"</span></div>").append(e("<form/>").append(a)).hover(function(){
o.toggleClass(t)}),r=e('<div class="elfinder-upload-dialog-wrapper"/>').append(o),l=e('<div class="ui-corner-all elfinder-upload-dropbox" contenteditable="true">'+u.i18n("dropFilesBrowser")+"</div>").on("paste drop",function(e){
c(e)}).on("mousedown click",function(){
e(this).focus()}).on("focus",function(e){
((e=e.originalEvent||e).target||e.srcElement).innerHTML=""}).on("blur",function(e){
((e=e.originalEvent||e).target||e.srcElement).innerHTML=u.i18n("dropFilesBrowser")}).on("dragenter mouseover",function(){
l.addClass(t)}).on("dragleave mouseout",function(){
l.removeClass(t)}),u.dragUpload?((s=e('<div class="ui-corner-all elfinder-upload-dropbox" contenteditable="true">'+u.i18n("dropPasteFiles")+"</div>").on("paste",function(e){
c(e)}).on("mousedown click",function(){
e(this).focus()}).on("focus",function(e){
(e.originalEvent||e).target.innerHTML=""}).on("blur",function(e){
(e.originalEvent||e).target.innerHTML=u.i18n("dropPasteFiles")}).on("mouseover",function(){
e(this).addClass(t)}).on("mouseout",function(){
e(this).removeClass(t)}).prependTo(r).after('<div class="elfinder-upload-dialog-or">'+u.i18n("or")+"</div>")[0]).addEventListener("dragenter",function(n){
n.stopPropagation(),n.preventDefault(),e(s).addClass(t)},!1),s.addEventListener("dragleave",function(n){
n.stopPropagation(),n.preventDefault(),e(s).removeClass(t)},!1),s.addEventListener("dragover",function(n){
n.stopPropagation(),n.preventDefault(),e(s).addClass(t)},!1),s.addEventListener("drop",function(e){
r.elfinderdialog("close"),d(e)},!1)):l.prependTo(r).after('<div class="elfinder-upload-dialog-or">'+u.i18n("or")+"</div>")[0],u.dialog(r,{
title:this.title,modal:!0,resizable:!1,destroyOnClose:!0}),i}},elFinder.prototype.commands.multiupload=function(){
this.title="Add selected to product",this.alwaysEnabled=!0,this.updateOnSelect=!0,this.getstate=function(t){
if("function"==typeof parent.addMultiImage||"function"==typeof addMultiImage)var n=(t=this.files(t)).length;return n&&e.map(t,function(e){
return e.phash&&e.read&&!e.locked?e:null}).length==n?0:-1},this.exec=function(t){
var n=this.fm;e.Deferred().fail(function(e){
n.error(e)});e.each(this.files(t),function(t,i){
var r=n.option("url"),a=n.url(i.hash).replace(r,"");a=a.replace(/\\/g,"/"),"function"==typeof parent.addMultiImage?parent.addMultiImage(a):"function"==typeof addMultiImage?addMultiImage(a):e.Deferred().fail(function(e){
n.error("The function is available only on Product layout.")})})}},elFinder.prototype.commands.view=function(){
this.value=this.fm.viewType,this.alwaysEnabled=!0,this.updateOnSelect=!1,this.options={
ui:"viewbutton"},this.getstate=function(){
return 0},this.exec=function(){
var e=this.fm.storage("view","list"==this.value?"icons":"list");this.fm.viewchange(),this.update(void 0,e)}}})(jQuery),elFinder.prototype._options.commands.push("multiupload"),elFinder.prototype._options.contextmenu.files.push("multiupload"),elFinder.prototype.i18.en.messages.cmdmultiupload="Add selected to product";