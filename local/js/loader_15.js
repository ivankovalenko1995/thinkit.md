;(function () {
;(function () {
(function(){if(!window.b24form){window.b24form=function(e){b24form.forms=b24form.forms||[];b24form.forms.push(e);if(e.ref&&b24form.Loader&&!this.loaded){this.loaded=true;b24form.Loader.loadJs(e.ref,true)}}}if(window.b24form.Loader){return}function e(){this.requested=false;this.queue=[]}e.prototype={run:function(e){e=e||{};var o=e.resources||{};this.queue.push(e.form);if(!this.requested){var t=this.loadApp.bind(this,o.app);this.requested=true;if(o.polyfill&&!this.checkPolyfills()){this.loadJs(o.polyfill,true,t)}else{t()}}this.loadForms()},loadApp:function(e){if(!e){return}window.b24form.App?this.loadForms():this.loadJs(e,true,this.loadForms.bind(this))},loadForms:function(){if(!this.checkPolyfills()){return}if(!window.b24form.App){return}var e=this.queue;this.queue=[];e.forEach(this.loadForm,this)},loadForm:function(e){b24form.App.initFormScript24(e)},checkPolyfills:function(){return window.fetch&&window.Request&&window.Response&&window.Promise&&Object.assign&&Array.prototype.find&&Array.prototype.includes},loadJs:function(e,o,t){var i=document.createElement("SCRIPT");i.setAttribute("type","text/javascript");i.setAttribute("async","");if(o){i.setAttribute("src",e+"?"+(Date.now()/864e5|0));if(t){i.onload=t}this.appendToHead(i)}else{i.appendChild(document.createTextNode(e));this.appendToHead(i)}},appendToHead:function(e){(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e)}};window.b24form.Loader=new e})();
//# sourceMappingURL=https://lan-serv.bitrix24.ru/bitrix/js/crm/site/form/embed/unit/script.map.js

window.b24form.Loader.run({"form":{"id":"15","sec":"01lwdw","lang":"ru","address":"https:\/\/lan-serv.bitrix24.ru","views":{"click":{"type":"popup","position":"center","vertical":"bottom"},"auto":{"type":"popup","position":"center","vertical":"bottom","delay":5}},"data":{"language":"ru","design":{"border":{"bottom":false,"top":true,"left":false,"right":false},"color":{"primary":"#47953fff","primaryText":"#ffffffff","text":"#000000ff","background":"#ffffffff","fieldBorder":"#0000000c","fieldBackground":"#0000000c","fieldFocusBackground":"#ffffffff"}},"title":"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441","desc":"","buttonCaption":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","useSign":false,"date":{"dateFormat":"DD.MM.YYYY","dateTimeFormat":"DD.MM.YYYY HH:MI:SS","sundayFirstly":false},"currency":{"code":"RUB","title":"\u0420\u0443\u0431\u043b\u044c","format":"# \u0440\u0443\u0431."},"fields":[{"id":"CONTACT_NAME","name":"CONTACT_NAME","label":"\u0418\u043c\u044f","visible":true,"required":true,"multiple":false,"type":"name","placeholder":null,"value":"","items":[],"hint":"","hintOnFocus":false,"autocomplete":true,"bigPic":false,"contentTypes":null},{"id":"CONTACT_EMAIL","name":"CONTACT_EMAIL","label":"E-mail","visible":true,"required":true,"multiple":false,"type":"email","placeholder":null,"value":"","items":[],"hint":"","hintOnFocus":false,"autocomplete":true,"bigPic":false,"contentTypes":null},{"id":"CONTACT_COMMENTS","name":"CONTACT_COMMENTS","label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441","visible":true,"required":true,"multiple":false,"type":"text","placeholder":null,"value":"","items":[],"hint":"","hintOnFocus":false,"autocomplete":false,"bigPic":false,"contentTypes":null}],"agreements":[{"id":"AGREEMENT_1","name":"AGREEMENT_1","label":"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \u00ab\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u00bb, \u044f \u0434\u0430\u044e \u0441\u0432\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043c\u043e\u0438\u0445\n\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u043e\u0442 27.07.2006 \u0433\u043e\u0434\u0430 \u2116152-\u0424\u0417 \u00ab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\u00bb, \u043d\u0430 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0438 \u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0439,\n\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0432 \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0438 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445","value":"Y","required":true,"checked":true,"content":{"title":"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445","url":null,"text":"\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u2116 152-\u0424\u0417 \u00ab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\u00bb \u043e\u0442 27.07.2006 \u0433\u043e\u0434\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e, \u0441\u0432\u043e\u0435\u0439 \u0432\u043e\u043b\u0435\u0439 \u0438 \u0432 \u0441\u0432\u043e\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0435 \u0432\u044b\u0440\u0430\u0436\u0430\u044e \u0441\u0432\u043e\u0435 \u0431\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u041e\u041e\u041e \u00ab\u041b\u0430\u043d\u0421\u0435\u0440\u0432\u00bb (\u041e\u0413\u0420\u041d 1167746448253, \u0418\u041d\u041d 7736266757), \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0420\u0424 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443:\n119331, \u041c\u043e\u0441\u043a\u0432\u0430 \u0433, \u0412\u0435\u0440\u043d\u0430\u0434\u0441\u043a\u043e\u0433\u043e \u043f\u0440-\u043a\u0442, \u0414\u041e\u041c 29, \u042d\u0422\/\u041f\u041e\u041c\/\u041a\u041e\u041c 8\/I\/7(\u0420\u041c7) (\u0434\u0430\u043b\u0435\u0435 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443 - \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440).\n\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\u00a0- \u043b\u044e\u0431\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0430\u044f\u0441\u044f \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0438\u043b\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u043c\u0443 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0430\u043a\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438\u00a0\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043b\u0438\u0446\u0443.\n\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0432\u044b\u0434\u0430\u043d\u043e \u043c\u043d\u043e\u044e \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445:\n- \u0418\u043c\u044f;\n- E-mail;\n- \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441.\n\n\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0434\u0430\u043d\u043e \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u0434\u043b\u044f \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441 \u043c\u043e\u0438\u043c\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\/\u0438\u043b\u0438 \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0430\u043a\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432: \u0441\u0431\u043e\u0440, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0435, \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435, \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435 (\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043e\u0431\u0435\u0437\u043b\u0438\u0447\u0438\u0432\u0430\u043d\u0438\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u0438\u0435 \u043b\u044e\u0431\u044b\u0445 \u0438\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0420\u0424 \u043a\u0430\u043a \u043d\u0435\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438, \u0442\u0430\u043a \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438.\n\u0414\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0434\u0430\u0435\u0442\u0441\u044f \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0446\u0435\u043b\u044f\u0445:\n- \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u043d\u0435 \u0443\u0441\u043b\u0443\u0433\/\u0440\u0430\u0431\u043e\u0442;\n- \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u043c\u043e\u0439 \u0430\u0434\u0440\u0435\u0441 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439, \u043a\u0430\u0441\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0443\u0441\u043b\u0443\u0433\/\u0440\u0430\u0431\u043e\u0442;\n- \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u043c\u043e\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b;\n- \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u043c\u043e\u0439 \u0430\u0434\u0440\u0435\u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u043e\u0439, \u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f\u0445\/\u0442\u043e\u0432\u0430\u0440\u0430\u0445\/\u0443\u0441\u043b\u0443\u0433\u0430\u0445\/\u0440\u0430\u0431\u043e\u0442\u0430\u0445 \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430.\n\n\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0435\u0433\u043e \u043e\u0442\u0437\u044b\u0432\u0430 \u043f\u0443\u0442\u0435\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 radin@thinkit.md. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0442\u0437\u044b\u0432\u0430 \u043c\u043d\u043e\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432\u043f\u0440\u0430\u0432\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0435\u0437 \u043c\u043e\u0435\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0439, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 \u043f\u0443\u043d\u043a\u0442\u0430\u0445 2 \u2013 11 \u0447\u0430\u0441\u0442\u0438 1 \u0441\u0442\u0430\u0442\u044c\u0438 6, \u0447\u0430\u0441\u0442\u0438 2 \u0441\u0442\u0430\u0442\u044c\u0438 10 \u0438 \u0447\u0430\u0441\u0442\u0438 2 \u0441\u0442\u0430\u0442\u044c\u0438 11 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u0430 \u2116152-\u0424\u0417 \u00ab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\u00bb \u043e\u0442 27.07.2006 \u0433."}}],"dependencies":[],"recaptcha":{"use":false}}},"resources":{"app":"\/local\/js\/app.js","polyfill":"https:\/\/cdn-ru.bitrix24.ru\/b10114717\/crm\/form\/polyfill.js"}});
})();


})();