(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/product.bb555731.png"},,,,,,,,,,,,function(e,t,n){e.exports=n(48)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(22),o=n.n(i),r=(n(33),n(15)),l=n(3),s=n(5),u=n(6),d=n(2),p=n(8),h=n(7);var m=function(e,t){return console.log(e,t),new Promise((function(n,a){fetch("http://localhost:9999/signin",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t}),method:"post"}).then((function(e){200===e.status?n(!0):n(!1)})).catch((function(e){return a(e)}))}))};n(34);var f=function(){return new Promise((function(e,t){fetch("http://localhost:9999/verifyToken",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){if(200===e.status)return e.json();t(!1)})).then((function(t){return e(t)})).catch((function(e){return t(!1)}))}))},b=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).signin=a.signin.bind(Object(d.a)(a)),a.email=c.a.createRef(null),a.password=c.a.createRef(null),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.props.history.push("/home/buy")})).catch((function(e){return console.log("Not logged in")}))}},{key:"signin",value:function(){var e=this;m(this.email.current.value,this.password.current.value).then((function(t){t&&e.props.history.push("/home"),console.log(t)})).catch((function(e){return console.log("try after some time")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"signin_page"},c.a.createElement("div",{className:"signin_page__section"},c.a.createElement("div",{className:"signin_page__form_holder"},c.a.createElement("div",{className:"signin_page__form_holder__input_holder"},c.a.createElement("input",{ref:this.email,className:"input",type:"email"}),c.a.createElement("div",{className:"placeholder"},"EMAIL")),c.a.createElement("div",{className:"signin_page__form_holder__input_holder"},c.a.createElement("input",{ref:this.password,className:"input",type:"password"}),c.a.createElement("div",{className:"placeholder"},"PASSWORD")),c.a.createElement("input",{onClick:this.signin,className:"submit",type:"submit",value:"Sign in"})),c.a.createElement("div",{className:"signin_page__about_holder"},c.a.createElement("div",{className:"about_content"},"Leading market place"),c.a.createElement("div",{className:"about_content_sub"},"Try OLX to instantly sell or buy goods with ease."))))}}]),n}(c.a.Component),v=n(12);var y=function(){return console.log("sending request"),new Promise((function(e,t){fetch("http://localhost:9999/products",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"get"}).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){return t(e)}))}))},g=n(16),E=n.n(g),j=(n(35),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).gotoProduct=a.gotoProduct.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"gotoProduct",value:function(){this.props.history.push("/home/buy/"+this.props.id)}},{key:"render",value:function(){return c.a.createElement("div",{onClick:this.gotoProduct,className:"tile"},c.a.createElement("img",{src:E.a,className:"image_holder"}),c.a.createElement("div",{className:"title"},this.props.title),c.a.createElement("div",{className:"price"},c.a.createElement("span",null,"\u20b9"),this.props.price))}}]),n}(a.Component)),O=Object(l.f)(j),N=(n(41),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={items:null,filterText:null},a.filterQuery=c.a.createRef(null),a.changeFilter=a.changeFilter.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){console.log(t),e.setState({items:t})})).catch((function(e){return console.log(e)}))}},{key:"changeFilter",value:function(){this.setState({filterText:this.filterQuery.current.value})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"searchbar_holder"},c.a.createElement("input",{ref:this.filterQuery,onChange:this.changeFilter,type:"text",placeholder:"Enter product name"}),c.a.createElement("button",null,c.a.createElement(v.a,null))),c.a.createElement("div",{className:"products_holder"},this.state.items&&Array.from(this.state.items).filter((function(t){var n=t.title,a=t.category,c=t.description,i=new RegExp("".concat(e.state.filterText?e.state.filterText:""),"g");return console.log(n,i),i.test(n)||i.test(a)||i.test(c)})).map((function(e,t){return c.a.createElement(O,{key:t,id:e._id,price:e.price,description:e.description,title:e.title})}))))}}]),n}(a.Component));n(42);var _=function(){return new Promise((function(e,t){fetch("http://localhost:9999/balance",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"get"}).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){return t(e)}))}))},k=n(24),C=n(25);var S=function(e){return console.log("sending request"),new Promise((function(t,n){fetch("http://localhost:9999/getProduct",{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e}),credentials:"include",method:"post"}).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){return n(e)}))}))};var P=function(e,t,n){return new Promise((function(a,c){fetch("http://localhost:9999/bidding/add",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"post",body:JSON.stringify({amount:e,id:t,seller:n})}).then((function(e){console.log("Added"),a(e)})).catch((function(e){return c(e)}))}))},T=(n(43),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),console.log(e),(a=t.call(this,e)).state={isInputOpen:!1,item:null},a.price=c.a.createRef(null),a.closeInput=a.closeInput.bind(Object(d.a)(a)),a.openInput=a.openInput.bind(Object(d.a)(a)),a.addbid=a.addbid.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id&&S(this.props.match.params.id).then((function(t){return e.setState({item:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(){console.log("product is ",this.state.item)}},{key:"openInput",value:function(){this.setState({isInputOpen:!0})}},{key:"closeInput",value:function(){this.setState({isInputOpen:!1})}},{key:"addbid",value:function(){var e=this,t=this.price.current.value;P(t,this.state.item._id,this.state.item.email).then((function(t){alert("Bid added"),e.props.history.push("/home/buy")})).catch((function(e){return alert("Error occured")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"product_page"},c.a.createElement("div",{className:"image_rating"},c.a.createElement("img",{src:E.a}),c.a.createElement("div",{className:"rating_holder"},c.a.createElement(v.b,{size:30}),c.a.createElement(v.b,{size:30}),c.a.createElement(v.b,{size:30}),c.a.createElement(v.b,{size:15}),c.a.createElement(v.b,{size:15}))),c.a.createElement("div",{className:"product_details"},c.a.createElement("div",{className:"title"},this.state.item&&this.state.item.title),c.a.createElement("div",{className:"title"},this.state.item&&this.state.item.category),c.a.createElement("div",{className:"description"},this.state.item&&this.state.item.description),c.a.createElement("div",{className:"price_bargain"},c.a.createElement("div",null,c.a.createElement("span",null,"\u20b9"),this.state.item&&this.state.item.price),c.a.createElement("div",{className:"bargain"},c.a.createElement("button",{onClick:this.openInput,className:"quote_price",style:{transform:"translateX(".concat(this.state.isInputOpen?"100%":"0",")")}},"Quote your price"),c.a.createElement("div",{className:"input_holder",style:{transform:"translateX(".concat(this.state.isInputOpen?"0":"-100%",")")}},c.a.createElement("input",{ref:this.price,type:"number",placeholder:"Enter your price"}),c.a.createElement("div",{onClick:this.addbid,className:"ok"},c.a.createElement(k.a,null)),c.a.createElement("div",{onClick:this.closeInput,className:"cancel"},c.a.createElement(C.a,null)))))))}}]),n}(a.Component)),w=n(26);n(44);var A=function(){return new Promise((function(e,t){fetch("http://localhost:9999/getuserproducts",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"get"}).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){return t(e)}))}))},x=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={items:null},a.addProduct=a.addProduct.bind(Object(d.a)(a)),a.quotedPrice=a.quotedPrice.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;A().then((function(t){return e.setState({items:t})})).catch((function(t){return e.props.history.push("/")}))}},{key:"addProduct",value:function(){this.props.history.push("/home/sell/add")}},{key:"quotedPrice",value:function(){this.props.history.push("/home/sell/quotedprice")}},{key:"render",value:function(){return c.a.createElement("div",{className:"sell"},c.a.createElement("div",{className:"sell_header"},c.a.createElement("div",{className:"sell_header_text"},"Your ads"),c.a.createElement("button",{onClick:this.quotedPrice,className:"look_bargains"},"Check quoted prices")),c.a.createElement("div",{className:"products_holder"},c.a.createElement("div",{className:"add",onClick:this.addProduct},c.a.createElement(w.a,{size:60}),c.a.createElement("div",{className:"add_text"},"Add product")),this.state.items&&this.state.items.map((function(e,t){return c.a.createElement(O,{key:t,id:e._id,price:e.price,description:e.description,title:e.title})}))))}}]),n}(a.Component);var I=function(e,t,n,a){return new Promise((function(c,i){fetch("http://localhost:9999/addProduct",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({title:e,description:t,price:n,category:a}),method:"post"}).then((function(e){200==e.status?e.json():i(!1)})).then((function(e){return c(e)})).catch((function(e){return i(e)}))}))},D=(n(45),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).title=c.a.createRef(null),a.description=c.a.createRef(null),a.price=c.a.createRef(null),a.category=c.a.createRef(null),a.insert=a.insert.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(e){console.log("verified")})).catch((function(t){return e.props.history.push("/")}))}},{key:"insert",value:function(){var e=this;I(this.title.current.value,this.description.current.value,this.price.current.value,this.category.current.value).then((function(t){return e.props.history.push("/home/sell")})).catch((function(t){return e.props.history.push("/")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"add_product"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{ref:this.title,placeholder:"Enter your title",id:"title",type:"text",name:"title"}),c.a.createElement("label",{htmlFor:"category"},"Category"),c.a.createElement("input",{ref:this.category,placeholder:"Enter your title",id:"category",type:"text",name:"title"}),c.a.createElement("label",{htmlFor:"description"},"Description"),c.a.createElement("textarea",{ref:this.description,placeholder:"Write short description",id:"description",type:"text",name:"description"}),c.a.createElement("label",{htmlFor:"price"},"Price"),c.a.createElement("input",{ref:this.price,placeholder:"Quote your price",id:"price",type:"number",name:"price"}),c.a.createElement("button",{onClick:this.insert,type:"sumbit"},"Add Product"))}}]),n}(a.Component)),B=n(27);var R=function(){return new Promise((function(e,t){fetch("http://localhost:9999/bidding/",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"get"}).then((function(e){return console.log("Retrieved",e),e.json()})).then((function(t){return e(t)})).catch((function(e){return t(e)}))}))};var q=function(e,t){return new Promise((function(n,a){fetch("http://localhost:9999/balance/reduce",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"post",body:JSON.stringify({amount:e,email:t})}).then((function(e){return e.json()})).then((function(e){console.log("reducing balance"),n(e)})).catch((function(e){return a(e)}))}))};var J=function(e){return new Promise((function(t,n){fetch("http://localhost:9999/balance/add",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"post",body:JSON.stringify({amount:e})}).then((function(e){return e.json()})).then((function(e){console.log("Adding balance"),t(e)})).catch((function(e){return n(e)}))}))};var F=function(e,t){return new Promise((function(n,a){fetch("http://localhost:9999/bidding/remove",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"post",body:JSON.stringify({id:e,buyer:t})}).then((function(e){console.log("Removed bid"),n(e)})).catch((function(e){return a(e)}))}))};var M=function(e){return new Promise((function(t,n){fetch("http://localhost:9999/removeproduct",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"post",body:JSON.stringify({id:e})}).then((function(e){console.log("removed product"),t(e)})).catch((function(e){return n(e)}))}))};var z=function(e,t){return new Promise((function(n,a){fetch("http://localhost:9999/bidding/reject",{headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",method:"post",body:JSON.stringify({id:e,buyer:t})}).then((function(e){console.log("Rejecting bid")})).catch((function(e){return a(e)}))}))},L=(n(46),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={bids:[]},a.acceptBid=a.acceptBid.bind(Object(d.a)(a)),a.rejectBid=a.rejectBid.bind(Object(d.a)(a)),a.loadData=a.loadData.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"acceptBid",value:function(e,t,n,a){q(n,a).then((function(e){return J(n)})).then((function(e){return F(t,a)})).then((function(e){return M(t)})).catch((function(e){return console.log(e)})),this.loadData()}},{key:"rejectBid",value:function(e,t){var n=this;z(e,t).then((function(e){return console.log(e)})).catch((function(e){return n.props.history.push("/")})),this.loadData()}},{key:"loadData",value:function(){var e=this;this.setState({bids:[]}),R().then((function(t){console.log("bids",t);t.map((function(t){S(t.ref).then((function(n){e.setState({bids:[].concat(Object(B.a)(e.state.bids),[{bid:t.amount,amount:n.price,title:n.title,bidId:t._id,productId:n._id,buyer:t.email}])})})).catch((function(e){return console.log(e)}))}))})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(){console.log(this.state.bids)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"quoted_price"},c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Product Title"),c.a.createElement("th",null,"Your price"),c.a.createElement("th",null,"Quoted price"),c.a.createElement("th",null,"Accept"),c.a.createElement("th",null,"Reject")),this.state.bids.map((function(t){return c.a.createElement("tr",null,c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.amount),c.a.createElement("td",null,t.bid),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.acceptBid(t.bidId,t.productId,t.bid,t.buyer)}},"Accept")),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){e.rejectBid(t.bidId,t.buyer)}},"Reject")))}))))}}]),n}(a.Component)),Q=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={inSell:!1,balance:0},a.gotoBuy=a.gotoBuy.bind(Object(d.a)(a)),a.gotoSell=a.gotoSell.bind(Object(d.a)(a)),a.logout=a.logout.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.history.push("/home/buy"),f().then((function(t){_().then((function(t){e.setState({balance:t.balance})})),console.log("Logged in")})).catch((function(t){return e.props.history.push("/")}))}},{key:"gotoSell",value:function(){this.setState({inSell:!0}),this.props.history.push("/home/sell")}},{key:"gotoBuy",value:function(){this.setState({inSell:!1}),this.props.history.push("/home/buy")}},{key:"logout",value:function(){var e=this;fetch("http://localhost:9999/logout",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(t){e.props.history.push("/")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"container"},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/home/buy",component:N}),c.a.createElement(l.a,{exact:!0,path:"/home/sell",component:x}),c.a.createElement(l.a,{exact:!0,path:"/home/sell/add",component:D}),c.a.createElement(l.a,{exact:!0,path:"/home/sell/quotedprice",component:L}),c.a.createElement(l.a,{path:"/home/buy/:id",component:T}))),c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar__brand"},"OLX"),c.a.createElement("div",{className:"navbar__options"},"You want to",c.a.createElement("button",{onClick:this.gotoBuy,className:"".concat(this.state.inSell?"":"active")},"Buy")," ","or",c.a.createElement("button",{onClick:this.gotoSell,className:"".concat(this.state.inSell?"active":"")},"Sell")),c.a.createElement("div",{className:"account"},"Balance: ",c.a.createElement("span",null,"\u20b9")," ",this.state.balance,c.a.createElement("button",{onClick:this.logout},"Logout"))))}}]),n}(a.Component);n(47);var X=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:b}),c.a.createElement(l.a,{path:"/home/",component:Q}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(X,null)),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.75136dce.chunk.js.map