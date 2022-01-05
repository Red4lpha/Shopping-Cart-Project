(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{26:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r(7),c=r(0);t.default=function(e){var t=e.cartCount,r=document.querySelector(".mobile-menu");return Object(c.jsx)(a.Fragment,{children:Object(c.jsxs)("nav",{className:"bg-gray-200 shadow-md z-10",children:[Object(c.jsx)("div",{className:"max-w-6xl mx-auto px-4",children:Object(c.jsxs)("div",{className:"flex justify-between",children:[Object(c.jsxs)("div",{className:"flex space-x-4",children:[Object(c.jsx)("div",{children:Object(c.jsxs)(s.b,{to:"/",className:"flex items-center py-5 px-2 text-gray-700 hover:text-gray-900",children:[Object(c.jsx)("img",{src:"https://cdn.pixabay.com/photo/2012/04/05/01/01/athletic-shoes-25493_960_720.png",className:"h-10 w-10 mr-2",alt:"Shoe Store Logo"}),Object(c.jsx)("span",{className:"font-bold text-3xl",children:"Storage Cart App"})]})}),Object(c.jsxs)("div",{className:"hidden md:flex items-center space-x-1 text-2xl mx-2 text-blue-600",children:[Object(c.jsx)(s.c,{to:"/",className:"mx-6 border-gray-500 py-1 px-1 hover:text-gray-900 border-b-2 hover:border-blue-600",children:"Home"}),Object(c.jsx)(s.c,{to:"/shop",className:"mx-6 border-gray-500  py-1 px-1  hover:text-gray-900 border-b-2 hover:border-blue-600",children:"Shop"})]})]}),Object(c.jsx)("div",{className:"hidden md:flex items-center space-x-1",children:Object(c.jsxs)(s.c,{to:"/cart",className:"flex items-center py-2 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded transition duration-300",children:[Object(c.jsx)("svg",{className:"h-8 w-8",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(c.jsx)("span",{children:t})]})}),Object(c.jsx)("div",{onClick:function(){r.classList.toggle("hidden")},className:"md:hidden flex items-center",children:Object(c.jsx)("button",{className:"mobile-menu-button",children:Object(c.jsx)("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),Object(c.jsxs)("div",{className:"mobile-menu hidden absolute block bg-gray-200 w-full md:hidden",children:[Object(c.jsx)(s.c,{to:"/",className:"block py-8 px-4 text-4xl hover:bg-gray-100",children:"Home"}),Object(c.jsx)(s.c,{to:"/shop",className:"block py-8 px-4 text-4xl hover:bg-gray-100",children:"Shop"}),Object(c.jsxs)(s.c,{to:"/cart",className:"flex items-center block py-8 px-4 text-4xl hover:bg-gray-100",children:["Cart",Object(c.jsx)("div",{className:"flex items-center space-x-1 px-2",children:Object(c.jsxs)("div",{to:"/cart",className:"flex items-center py-2 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded transition duration-300",children:[Object(c.jsx)("svg",{className:"h-8 w-8",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(c.jsx)("span",{children:t})]})})]})]})]})})}},38:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),c=r(19),i=r.n(c),n=(r(26),r(8)),o=r(13),l=r(12),d=r(7),x=r(2),m=r(0),b=function(){return Object(m.jsx)("main",{className:"grid place-items-center bg-no-repeat bg-center bg-cover py-10 h-screen",style:{backgroundImage:'url("https://cdn.pixabay.com/photo/2015/10/29/01/24/shoes-1011596_960_720.jpg")'}})},h=function(e){var t=e.item,r=e.index,a=e.handleClick;return Object(m.jsx)("article",{className:"center m-screen mx-4 my-4",children:Object(m.jsxs)("div",{className:"flex flex-col bg-gray-200 p-4 border-1 border-blue-900 rounded text-blue-600 shadow-lg w-80",children:[Object(m.jsx)("h2",{className:"text-2xl font-bold",children:t.name}),Object(m.jsx)("img",{src:t.image,className:"h-48 border-gray-900 border-2"}),Object(m.jsx)("div",{className:"text-black h-24 my-2 overflow-y-hidden",children:t.description}),Object(m.jsxs)("section",{className:"flex flex-row flex-wrap",children:[Object(m.jsxs)("h3",{className:"py-3 pr-3 flex-auto font-extrabold text-2xl",children:["$",t.price]}),Object(m.jsx)("button",{onClick:function(){a(r)},className:"bg-blue-700 hover:bg-blue-400 text-white uppercase py-2 px-2 rounded-full flex-auto",children:"Add to Cart"})]})]})})},j=[{name:"Nike Air Max 97 MSCHF x INRI Jesus Shoes",image:"https://stockx-360.imgix.net/Nike-Air-Max-97-MSCHF-x-INRI-Jesus-Shoes/Images/Nike-Air-Max-97-MSCHF-x-INRI-Jesus-Shoes/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1607664149&w=1000",description:"White Nike Air Max 97's filled with 60cc of holy water from the River Jordan.",price:1425},{name:"Nike Air Max 97 Cool Grey Baroque Brown",image:"https://stockx-360.imgix.net/Nike-Air-Max-97-Cool-Grey-Baroque-Brown/Images/Nike-Air-Max-97-Cool-Grey-Baroque-Brown/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000",description:"Cool Grey/Baroque Brown-University Gold",price:170},{name:"Nike Air Max 97 Black Red Silver",image:"https://images.stockx.com/images/Nike-Air-Max-97-Black-Red-Silver.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1607052703&w=1000",description:"Black/Metallic Silver-University Red",price:160},{name:"Nike Air Max 97 Cool Grey Baroque Brown",image:"https://stockx-360.imgix.net/Nike-Air-Max-97-Cool-Grey-Baroque-Brown/Images/Nike-Air-Max-97-Cool-Grey-Baroque-Brown/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000",description:"Cool Grey/Baroque Brown-University Gold",price:170},{name:"Jordan 1 Retro High Dark Mocha",image:"https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Dark-Mocha/Images/Air-Jordan-1-Retro-High-Dark-Mocha/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1608736454&w=1000",description:"Jordan Brand continued their Black Toe design theme in 2020 and released the Jordan 1 High Dark Mocha.",price:450},{name:"adidas Yeezy 500 Utility Black",image:"https://stockx-360.imgix.net/adidas-Yeezy-500-Utility-Black/Images/adidas-Yeezy-500-Utility-Black/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606319127&w=1000",description:"Kanye is back, this time with a brand new colorway of the Yeezy 500. ",price:330},{name:"Jordan 1 Retro High Royal Toe",image:"https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Black-Game-Royal-Toe/Images/Air-Jordan-1-Retro-High-Black-Game-Royal-Toe/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606322574&w=1000",description:"The Royal Toe takes inspiration from the original Jordan 1 Royal colorway (which released in 1985) and adds design elements of the Black Toe 1 to create a familiar, but new dialogue.",price:320},{name:"Jordan 5 Retro Alternate Bel-Air",image:"https://stockx-360.imgix.net/Air-Jordan-5-Retro-Alternate-Bel-Air/Images/Air-Jordan-5-Retro-Alternate-Bel-Air/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606316558&w=1000",description:"Also known as the Jordan 5 Poison Green, the Alternate Bel-Air consists of the same 90s style colors and patterns as its predecessor.",price:200},{name:"Nike Air Max 90 Infrared (2020)",image:"https://stockx-360.imgix.net/Nike-Air-Max-90-Infrared-2020/Images/Nike-Air-Max-90-Infrared-2020/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1609366208&w=1000",description:"The Nike Air Max 90 Infrared returned in its original form to celebrate the model\u2019s 30th Anniversary.",price:180},{name:"Nike Air Rubber Dunk Off-White UNC",image:"https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",description:"The Nike Air Rubber Dunk, designed by Off-White founder Virgil Abloh.",price:330},{name:"Jordan 3 Retro SE Unite Fire Red",image:"https://stockx-360.imgix.net/Air-Jordan-3-Retro-SE-Fire-Red/Images/Air-Jordan-3-Retro-SE-Fire-Red/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606318533&w=1000",description:"This Jordan 3 is composed of a fire red tumbled leather upper with signature Elephant print overlays.",price:220},{name:"Nike Air Force 1 Low Orange Skeleton",image:"https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Orange-Skeleton/Images/Nike-Air-Force-1-Low-Orange-Skeleton/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1609438989&w=1000",description:"In 2018, Nike started to release Skeleton-themed Air Force 1s in October in celebration of Halloween.",price:200}],p=r(15),u=r.n(p),g=function(e){return Object(m.jsx)("main",{className:"container mx-auto center",children:Object(m.jsx)("section",{className:"flex flex-row flex-wrap justify-center gap-1 py-10 max-w-6xl mx-auto",children:j.map((function(t,r){return Object(m.jsx)(h,{item:t,index:r,handleClick:e.handleClick},u()())}))})})},f=function(e){var t=e.item,r=e.index,a=e.handleRemove,s=e.handleIncrement,c=e.handleDecrement,i=j[t.itemIndex],n=i.name,o=i.image,l=i.price,d=t.quantity;return Object(m.jsxs)("article",{className:"flex items-center hover:bg-white -mx-8 px-6 py-5",children:[Object(m.jsxs)("div",{className:"flex w-2/5",children:[Object(m.jsx)("div",{className:"hidden sm:flex flex-none w-2/5 h-auto object-cover border-gray-900 border-2",children:Object(m.jsx)("img",{className:"w-full h-full",src:o,alt:""})}),Object(m.jsxs)("div",{className:"flex flex-col justify-around ml-4 flex-grow",children:[Object(m.jsx)("span",{className:"text-blue-600 font-bold text-2x1",children:n}),Object(m.jsx)("div",{onClick:function(){a(r)},className:"cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs",children:"Remove"})]})]}),Object(m.jsxs)("span",{className:"text-blue-600 text-center w-1/5 font-bold text-1xl",children:["$",l]}),Object(m.jsxs)("div",{className:"flex justify-center w-1/5",children:[Object(m.jsx)("div",{onClick:function(){c(r)},className:"bg-gray-300 px-2 py-2 rounded-full fill-current text-blue-700",children:Object(m.jsx)("svg",{className:"w-3",viewBox:"0 0 448 512",children:Object(m.jsx)("path",{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33               32-32v-32c0-17.67-14.33-32-32-32z"})})}),Object(m.jsx)("input",{className:"mx-2 border text-center w-8",type:"text",defaultValue:d}),Object(m.jsx)("div",{onClick:function(){s(r)},className:"bg-gray-300 px-2 py-2 rounded-full fill-current text-blue-700",children:Object(m.jsx)("svg",{className:"w-3",viewBox:"0 0 448 512",children:Object(m.jsx)("path",{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})})})]}),Object(m.jsxs)("span",{className:"text-blue-600 text-center w-1/5 font-bold text-1xl",children:["$",l*d]})]})},O=function(e){var t=e.cartItems.length,r=Object(a.useState)(0),s=Object(l.a)(r,2),c=s[0],i=s[1],n=Object(a.useState)(0),o=Object(l.a)(n,2),x=o[0],b=o[1];return Object(a.useEffect)((function(){var t=0;e.cartItems.map((function(e){t+=j[e.itemIndex].price*e.quantity})),i(t)}),[e.cartItems]),Object(m.jsx)("main",{className:"container mx-auto mt-10",children:Object(m.jsxs)("div",{className:"lg:flex shadow-md my-10",children:[Object(m.jsxs)("section",{className:"lg:w-3/4 bg-gray-200 px-10 py-10",children:[Object(m.jsxs)("header",{className:"flex justify-between border-b border-white pb-8",children:[Object(m.jsx)("h1",{className:"font-semibold text-2xl",children:"Shopping Cart"}),Object(m.jsxs)("h2",{className:"font-semibold text-2xl",children:[t," Items"]})]}),Object(m.jsxs)("div",{className:"flex mt-10 pb-5 border-b border-black",children:[Object(m.jsx)("h3",{className:"font-extrabold text-gray-600 text-xs uppercase w-2/5",children:"Product Details"}),Object(m.jsx)("h3",{className:"font-extrabold text-center text-gray-600 text-xs uppercase w-1/5 text-center",children:"Price"}),Object(m.jsx)("h3",{className:"font-extrabold text-center text-gray-600 text-xs uppercase w-1/5 text-center",children:"Quantity"}),Object(m.jsx)("h3",{className:"font-extrabold text-center text-gray-600 text-xs uppercase w-1/5 text-center",children:"Subtotal"})]}),e.cartItems.map((function(t,r){return Object(m.jsx)(f,{item:t,index:r,handleRemove:e.handleRemove,handleIncrement:e.handleIncrement,handleDecrement:e.handleDecrement},u()())})),Object(m.jsxs)(d.c,{to:"/shop",className:"flex font-semibold text-indigo-600 text-sm mt-10",children:[Object(m.jsx)("svg",{className:"fill-current mr-2 text-indigo-600 w-4",viewBox:"0 0 448 512",children:Object(m.jsx)("path",{d:"M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"})}),"Continue Shopping"]})]}),Object(m.jsxs)("aside",{id:"summary",className:"bg-gray-300 lg:w-1/4 px-8 py-10",children:[Object(m.jsx)("h1",{className:"font-semibold text-2xl border-b pb-8",children:"Order Summary"}),Object(m.jsxs)("div",{className:"flex justify-between mt-10 mb-5",children:[Object(m.jsxs)("span",{className:"font-semibold text-sm uppercase",children:["Items ",t]}),Object(m.jsxs)("span",{className:"font-semibold text-sm",children:["$",c]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{className:"font-medium inline-block mb-3 text-sm uppercase",children:"Shipping"}),Object(m.jsxs)("select",{value:x,onChange:function(e){b(e.target.value)},className:"block p-2 text-gray-600 w-full text-sm",children:[Object(m.jsx)("option",{value:0,children:"Slow shipping - FREE"}),Object(m.jsx)("option",{value:5,children:"Standard shipping - $5"}),Object(m.jsx)("option",{value:20,children:"Express shipping - $20"})]})]}),Object(m.jsxs)("div",{className:"py-10",children:[Object(m.jsx)("label",{htmlFor:"promo",className:"font-semibold inline-block mb-3 text-sm uppercase",children:"Promo Code"}),Object(m.jsx)("input",{type:"text",id:"promo",placeholder:"Enter your code",className:"p-2 text-sm w-full"})]}),Object(m.jsx)("button",{className:"bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase",children:"Apply"}),Object(m.jsxs)("div",{className:"border-t mt-8",children:[Object(m.jsxs)("div",{className:"flex font-semibold justify-between py-6 text-sm uppercase",children:[Object(m.jsx)("span",{children:"Total cost"}),Object(m.jsxs)("span",{children:["$",+c+ +x]})]}),Object(m.jsx)("button",{className:"bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full",children:"Checkout"})]})]})]})})},v=r(37).default;var y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),r=t[0],s=t[1],c=function(e){var t=Object(o.a)(r),a=t.length,c=t.findIndex((function(t){return t.itemIndex===e}));-1!==c?(t[c]=Object(n.a)(Object(n.a)({},t[c]),{},{itemIndex:e,quantity:t[c].quantity+1}),s(t)):(t[a]=Object(n.a)(Object(n.a)({},t[a]),{},{itemIndex:e,quantity:1}),s(t))},i=function(e){var t=Object(o.a)(r);e>-1&&t.splice(e,1),s(t)},h=function(e){var t=Object(o.a)(r),a=t[e];e>-1&&!(a.quantity>8)&&(a.quantity++,t[e]=Object(n.a)(Object(n.a)({},t[e]),{},{cardItem:a}),s(t))},j=function(e){var t=Object(o.a)(r),a=t[e];e>-1&&!(a.quantity<2)&&(a.quantity--,t[e]=Object(n.a)(Object(n.a)({},t[e]),{},{cardItem:a}),s(t))};return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(v,{cartCount:r.length}),Object(m.jsx)(x.a,{exact:!0,path:"/",component:b}),Object(m.jsx)(x.a,{path:"/shop",render:function(e){return Object(m.jsx)(g,Object(n.a)(Object(n.a)({},e),{},{handleClick:c}))}}),Object(m.jsx)(x.a,{path:"/cart",render:function(e){return Object(m.jsx)(O,{cartItems:r,handleRemove:i,handleIncrement:h,handleDecrement:j})}})]})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.00ea4182.chunk.js.map