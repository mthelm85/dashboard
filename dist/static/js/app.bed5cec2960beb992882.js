webpackJsonp([1],{"0AU2":function(t,s){},"1/oy":function(t,s){},"9M+g":function(t,s){},"9dC2":function(t,s){},Id91:function(t,s){},Jmt5:function(t,s){},MPyg:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("DAYN"),r={name:"App",data:function(){return{widgets1:[{name:"premTable",id:0},{name:"weather",id:1},{name:"news",id:2}],widgets2:[{name:"crypto",id:3},{name:"finance",id:4},{name:"quote",id:5}]}},components:{draggable:e.n(n).a}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container-fluid"},[e("draggable",{staticClass:"row mt-5 justify-content-center dragArea",attrs:{list:t.widgets1,options:{group:"widgets"}},model:{value:t.widgets1,callback:function(s){t.widgets1=s},expression:"widgets1"}},t._l(t.widgets1,function(t){return e("div",{key:t.id,staticClass:"col text-center drag"},[e("div",{staticClass:"card"},[e("router-view",{attrs:{name:t.name}})],1)])})),t._v(" "),e("draggable",{staticClass:"row mt-5 justify-content-center dragArea",attrs:{list:t.widgets2,options:{group:"widgets"}},model:{value:t.widgets2,callback:function(s){t.widgets2=s},expression:"widgets2"}},t._l(t.widgets2,function(t){return e("div",{key:t.id,staticClass:"col text-center drag"},[e("div",{staticClass:"card"},[e("router-view",{attrs:{name:t.name}})],1)])})),t._v(" "),e("br")],1)])},staticRenderFns:[]};var o=e("VU/8")(r,i,!1,function(t){e("c2os")},null,null).exports,c=e("/ocq"),l=e("mtWM"),u=e.n(l),d={created:function(){var t=this;u()({method:"get",url:"http://api.football-data.org/v1/competitions/398/leagueTable",headers:{"X-Auth-Token":"2e3fbd8e33a34c1fa42caaa1929712c5",Accept:"application/json"}}).then(function(s){var e;for(console.log(s),e=0;e<s.data.standing.length;e++)t.table.push({name:s.data.standing[e].teamName,position:e})}).catch(function(t){console.log(t)})},data:function(){return{table:[]}},methods:{colorGreen:function(t){return t<4},colorRed:function(t){return t>16}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-block"},[e("ul",{staticClass:"list-group"},[e("p",{staticClass:"h6 card-header"},[t._v("Premier League Standings")]),t._v(" "),t._l(t.table,function(s){return e("li",{key:s.position,staticClass:"list-group-item p-0",class:[{green:t.colorGreen(s.position)},{red:t.colorRed(s.position)}]},[e("small",[t._v(t._s(s.position+1)+" "+t._s(s.name))])])})],2)])},staticRenderFns:[]};var h=e("VU/8")(d,v,!1,function(t){e("MPyg")},"data-v-2abfbe94",null).exports,m=e("PJh5"),p=e.n(m),_={created:function(){var t=this;u()({method:"get",url:"http://dataservice.accuweather.com/currentconditions/v1/340142.json?apikey=ILaLwNABOqBtDoyTnLFwH5fP08Pn0SrW"}).then(function(s){t.current.push({temp:s.data[0].Temperature.Imperial.Value,descriptor:s.data[0].WeatherText,icon:s.data[0].WeatherIcon})}).catch(function(t){console.log(t)}),u()({method:"get",url:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/340142.json?apikey=ILaLwNABOqBtDoyTnLFwH5fP08Pn0SrW"}).then(function(s){var e;for(e=0;e<s.data.DailyForecasts.length;e++)t.forecast.push(s.data.DailyForecasts[e])}).catch(function(t){console.log(t)})},data:function(){return{current:[],forecast:[]}},methods:{iconURL:function(t){return t<10?"https://developer.accuweather.com/sites/default/files/0"+t+"-s.png":"https://developer.accuweather.com/sites/default/files/"+t+"-s.png"},weekDay:function(t){return p()(t).format("dddd")}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-block"},[e("p",{staticClass:"h6 card-header"},[t._v("Weather - Owasso, OK")]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"display-4"},[t._v(t._s(t.current[0].temp)+"°")])]),t._v(" "),e("div",{staticClass:"col"},[e("img",{attrs:{src:t.iconURL(this.current[0].icon),alt:this.current[0].descriptor}}),t._v(" "),e("p",[t._v(t._s(t.current[0].descriptor))])])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"lead"},[t._v(t._s(t.weekDay(t.forecast[0].Date)))]),t._v(" "),e("img",{attrs:{src:t.iconURL(this.forecast[0].Day.Icon)}}),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Hi: "+t._s(this.forecast[0].Temperature.Maximum.Value)+"°")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Lo: "+t._s(this.forecast[0].Temperature.Minimum.Value)+"°")])]),t._v(" "),e("div",{staticClass:"col"},[e("p",{staticClass:"lead"},[t._v(t._s(t.weekDay(t.forecast[1].Date)))]),t._v(" "),e("img",{attrs:{src:t.iconURL(this.forecast[1].Day.Icon)}}),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Hi: "+t._s(this.forecast[1].Temperature.Maximum.Value)+"°")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Lo: "+t._s(this.forecast[1].Temperature.Minimum.Value)+"°")])]),t._v(" "),e("div",{staticClass:"col"},[e("p",{staticClass:"lead"},[t._v(t._s(t.weekDay(t.forecast[2].Date)))]),t._v(" "),e("img",{attrs:{src:t.iconURL(this.forecast[2].Day.Icon)}}),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Hi: "+t._s(this.forecast[2].Temperature.Maximum.Value)+"°")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Lo: "+t._s(this.forecast[2].Temperature.Minimum.Value)+"°")])]),t._v(" "),e("div",{staticClass:"col"},[e("p",{staticClass:"lead"},[t._v(t._s(t.weekDay(t.forecast[3].Date)))]),t._v(" "),e("img",{attrs:{src:t.iconURL(this.forecast[3].Day.Icon)}}),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Hi: "+t._s(this.forecast[3].Temperature.Maximum.Value)+"°")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Lo: "+t._s(this.forecast[3].Temperature.Minimum.Value)+"°")])]),t._v(" "),e("div",{staticClass:"col"},[e("p",{staticClass:"lead"},[t._v(t._s(t.weekDay(t.forecast[4].Date)))]),t._v(" "),e("img",{attrs:{src:t.iconURL(this.forecast[4].Day.Icon)}}),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Hi: "+t._s(this.forecast[4].Temperature.Maximum.Value)+"°")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Lo: "+t._s(this.forecast[4].Temperature.Minimum.Value)+"°")])])])])])},staticRenderFns:[]};var j=e("VU/8")(_,f,!1,function(t){e("dhzB")},null,null).exports,g={created:function(){var t=this;u()({method:"GET",url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=dc640c5653d24d6e8b0c30b41c643368"}).then(function(s){var e;for(console.log(s.data),e=0;e<5;e++)t.articles.push({title:s.data.articles[e].title,description:s.data.articles[e].description,url:s.data.articles[e].url})}).catch(function(t){console.log(t)})},data:function(){return{articles:[]}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-block",staticStyle:{"max-height":"600px","overflow-y":"scroll"}},[e("p",{staticClass:"h6 card-header"},[t._v("News")]),t._v(" "),e("ul",{staticClass:"list-group text-left"},t._l(t.articles,function(s){return e("li",{key:s.title,staticClass:"list-group-item borderless p-3"},[e("a",{attrs:{href:s.url,target:"_blank"}},[e("strong",[t._v(t._s(s.title))])]),t._v(" "),e("br"),t._v("\n      "+t._s(s.description)+"\n    ")])}))])},staticRenderFns:[]};var b=e("VU/8")(g,y,!1,function(t){e("9dC2")},"data-v-805e1832",null).exports,w={created:function(){var t=this;u.a.get("https://api.coinmarketcap.com/v1/ticker/").then(function(s){console.log(s),t.prices={btc:s.data[0].price_usd,eth:s.data[1].price_usd,xrp:s.data[2].price_usd,bch:s.data[3].price_usd,ltc:s.data[4].price_usd}})},data:function(){return{prices:""}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-block"},[e("p",{staticClass:"h6 card-header"},[t._v("Crypto Prices")]),t._v(" "),e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item"},[t._v("\n      BTC: $"+t._s(t.prices.btc)+"\n    ")]),t._v(" "),e("li",{staticClass:"list-group-item bg-light"},[t._v("\n      ETH: $"+t._s(t.prices.eth)+"\n    ")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("\n      XRP: $"+t._s(t.prices.xrp)+"\n    ")]),t._v(" "),e("li",{staticClass:"list-group-item bg-light"},[t._v("\n      BCH: $"+t._s(t.prices.bch)+"\n    ")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("\n      LTC: $"+t._s(t.prices.ltc)+"\n    ")])])])},staticRenderFns:[]};var L=e("VU/8")(w,C,!1,function(t){e("PUjl")},null,null).exports,A=e("ViqS"),k=e.n(A),q={data:function(){return{AAPL:{latest:"",volume:"",high:"",low:"",ytd:""},FB:{latest:"",volume:"",high:"",low:"",ytd:""},TSLA:{latest:"",volume:"",high:"",low:"",ytd:""}}},created:function(){var t=this;u()({method:"get",url:"https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote&range=1m&last=5"}).then(function(s){t.AAPL.latest=k()(s.data.AAPL.quote.latestPrice).format("$0,0.00"),t.AAPL.volume=k()(s.data.AAPL.quote.latestVolume).format("0,0"),t.AAPL.high=k()(s.data.AAPL.quote.high).format("$0,0.00"),t.AAPL.low=k()(s.data.AAPL.quote.low).format("$0,0.00"),t.AAPL.ytd=k()(s.data.AAPL.quote.ytdChange).format("0.00%"),t.FB.latest=k()(s.data.FB.quote.latestPrice).format("$0,0.00"),t.FB.volume=k()(s.data.FB.quote.latestVolume).format("0,0"),t.FB.high=k()(s.data.FB.quote.high).format("$0,0.00"),t.FB.low=k()(s.data.FB.quote.low).format("$0,0.00"),t.FB.ytd=k()(s.data.FB.quote.ytdChange).format("0.00%"),t.TSLA.latest=k()(s.data.TSLA.quote.latestPrice).format("$0,0.00"),t.TSLA.volume=k()(s.data.TSLA.quote.latestVolume).format("0,0"),t.TSLA.high=k()(s.data.TSLA.quote.high).format("$0,0.00"),t.TSLA.low=k()(s.data.TSLA.quote.low).format("$0,0.00"),t.TSLA.ytd=k()(s.data.TSLA.quote.ytdChange).format("0.00%")}).catch(function(t){console.log(t)})}},T={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-block"},[e("p",{staticClass:"h6 card-header"},[t._v("Finance")]),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group text-left"},[e("li",{staticClass:"list-group-item"},[e("h1",{staticClass:"lead"},[t._v("AAPL")]),t._v(" "),e("ul",[e("li",[t._v("\n            Latest: "+t._s(t.AAPL.latest)+"\n          ")]),t._v(" "),e("li",[t._v("\n            Volume: "+t._s(t.AAPL.volume)+"\n          ")]),t._v(" "),e("li",[t._v("\n            High/Low: "+t._s(t.AAPL.high)+" / "+t._s(t.AAPL.low)+"\n          ")]),t._v(" "),e("li",[t._v("\n            YTD: "+t._s(t.AAPL.ytd)+"\n          ")])])]),t._v(" "),e("li",{staticClass:"list-group-item bg-light"},[e("h1",{staticClass:"lead"},[t._v("FB")]),t._v(" "),e("ul",[e("li",[t._v("\n            Latest: "+t._s(t.FB.latest)+"\n          ")]),t._v(" "),e("li",[t._v("\n            Volume: "+t._s(t.FB.volume)+"\n          ")]),t._v(" "),e("li",[t._v("\n            High/Low: "+t._s(t.FB.high)+" / "+t._s(t.FB.low)+"\n          ")]),t._v(" "),e("li",[t._v("\n            YTD: "+t._s(t.FB.ytd)+"\n          ")])])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("h1",{staticClass:"lead"},[t._v("TSLA")]),t._v(" "),e("ul",[e("li",[t._v("\n            Latest: "+t._s(t.TSLA.latest)+"\n          ")]),t._v(" "),e("li",[t._v("\n            Volume: "+t._s(t.TSLA.volume)+"\n          ")]),t._v(" "),e("li",[t._v("\n            High/Low: "+t._s(t.TSLA.high)+" / "+t._s(t.TSLA.low)+"\n          ")]),t._v(" "),e("li",[t._v("\n            YTD: "+t._s(t.TSLA.ytd)+"\n          ")])])])])])])},staticRenderFns:[]};var F=e("VU/8")(q,T,!1,function(t){e("0AU2")},null,null).exports,P={data:function(){return{quote:{quote:"",author:""}}},created:function(){var t=this;u()({method:"get",url:"http://quotes.rest/qod.json?category=inspire"}).then(function(s){console.log(s.data.contents.quotes[0].quote),t.quote.quote=s.data.contents.quotes[0].quote,t.quote.author=s.data.contents.quotes[0].author}).catch(function(t){console.log(t)})}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-block"},[e("p",{staticClass:"h6 card-header"},[t._v("Quote of the Day")]),t._v(" "),e("div",{staticClass:"card-body text-justify"},[e("p",[t._v(t._s(t.quote.quote))]),t._v(" "),e("p",{staticClass:"text-right"},[t._v("-- "+t._s(t.quote.author))])])])},staticRenderFns:[]};var z=e("VU/8")(P,x,!1,function(t){e("U+hC")},null,null).exports;a.a.use(c.a);var B=new c.a({mode:"history",routes:[{path:"/",name:"Home",components:{premTable:h,weather:j,news:b,crypto:L,finance:F,quote:z}}]}),V=e("e6fC");e("Jmt5"),e("9M+g");a.a.use(V.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:B,components:{App:o},template:"<App/>"})},PUjl:function(t,s){},"U+hC":function(t,s){},c2os:function(t,s){},dhzB:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(r(t))}function r(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="uslO"},zj2Q:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bed5cec2960beb992882.js.map