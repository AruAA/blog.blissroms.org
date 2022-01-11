"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3866],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4709:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={slug:"2020-08-21-updates-w3-august-2020",title:"Updates (W3, August 2020)",authors:"eric",date:new Date("2020-08-21T00:00:00.000Z")},u="BlissRoms",s={permalink:"/2020-08-21-updates-w3-august-2020",source:"@site/blog/2020/2020-08-21-updates-w3-august-2020.md",title:"Updates (W3, August 2020)",description:"BlissRoms v12.11 is out! Here are all the new changes this week:",date:"2020-08-21T00:00:00.000Z",formattedDate:"August 21, 2020",tags:[],readingTime:2.46,truncated:!1,authors:[{name:"Eric Park",title:"Backend Engineer @ BlissLabs",url:"https://github.com/ericswpark",imageURL:"https://avatars.githubusercontent.com/u/13326074?v=4",key:"eric"}],prevItem:{title:"Android-Generic Project",permalink:"/2020-09-05-android-generic-project"},nextItem:{title:"Updates (W1, August 2020)",permalink:"/2020-08-02-updates-w1-august-2020"}},p={authorsImageUrls:[void 0]},d=[{value:"Bug fixes",id:"bug-fixes",children:[],level:2},{value:"Feature additions",id:"feature-additions",children:[],level:2}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BlissRoms v12.11 is out! Here are all the new changes this week:"),(0,i.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed padding for quick QS brightness slider (top and bottom) (Earlier, it was too close to the quick QS tiles. This has been fixed.)"),(0,i.kt)("li",{parentName:"ul"},"Aligned Omni weather to different clocks properly"),(0,i.kt)("li",{parentName:"ul"},"Fixed QS detail background bug"),(0,i.kt)("li",{parentName:"ul"},"Fixed no ringtone on some devices on first boot"),(0,i.kt)("li",{parentName:"ul"},"Fixed sound settings crashing with some GApps"),(0,i.kt)("li",{parentName:"ul"},"Re-added media picker for ringtone and other sound options"),(0,i.kt)("li",{parentName:"ul"},"Fixed a couple of issues with system themes on settings background"),(0,i.kt)("li",{parentName:"ul"},"Fixed statusbar ticker layout"),(0,i.kt)("li",{parentName:"ul"},"Fixed QS panel header background not being rounded"),(0,i.kt)("li",{parentName:"ul"},"Fixed current formatting on lockscreen for devices that report directly in amperes")),(0,i.kt)("h2",{id:"feature-additions"},"Feature additions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added lockscreen clock colors"),(0,i.kt)("li",{parentName:"ul"},"Added option for color picker or accent color"),(0,i.kt)("li",{parentName:"ul"},"Improved persistent settings icon toggle, can now switch between:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Disable"),(0,i.kt)("li",{parentName:"ul"},"Show in expanded panel"),(0,i.kt)("li",{parentName:"ul"},"Show always (also in quick QS panel)"))),(0,i.kt)("li",{parentName:"ul"},"Added OOS compact VoLTE and VoWiFi icon"),(0,i.kt)("li",{parentName:"ul"},"Added smart pixels tile"),(0,i.kt)("li",{parentName:"ul"},"Added the option to hide pixel animation on navbar"),(0,i.kt)("li",{parentName:"ul"},"Added OnePlus dashboard icons"),(0,i.kt)("li",{parentName:"ul"},"Added option to change navbar handle thickness"),(0,i.kt)("li",{parentName:"ul"},"Added clipboard service"),(0,i.kt)("li",{parentName:"ul"},"Added new look to QS drag handle"),(0,i.kt)("li",{parentName:"ul"},"Added toggle for QS data usage location:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"QS panel"),(0,i.kt)("li",{parentName:"ul"},"Quick statusbar"))),(0,i.kt)("li",{parentName:"ul"},"Added QS header styles:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Black"),(0,i.kt)("li",{parentName:"ul"},"Grey"),(0,i.kt)("li",{parentName:"ul"},"Light grey"),(0,i.kt)("li",{parentName:"ul"},"Transparent"),(0,i.kt)("li",{parentName:"ul"},"Accent"))),(0,i.kt)("li",{parentName:"ul"},"Brought back option to move QS battery to quick statusbar"),(0,i.kt)("li",{parentName:"ul"},"Added an option for QS clock size:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Static (default)"),(0,i.kt)("li",{parentName:"ul"},"Dynamic (same as statusbar clock, can be changed)"))),(0,i.kt)("li",{parentName:"ul"},"Moved carrier group to QS panel (inspired by Oxygen OS)"),(0,i.kt)("li",{parentName:"ul"},"Added a vertical layout to QS data usage and clock"),(0,i.kt)("li",{parentName:"ul"},"Added a vertical layout to right side of QS header (battery, logo, and network traffic)"),(0,i.kt)("li",{parentName:"ul"},"Moved statusbar weather image to QS panel, next to date, from quick statusbar"),(0,i.kt)("li",{parentName:"ul"},"Added more QS tile styles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JustIcons"),(0,i.kt)("li",{parentName:"ul"},"Hexagon"),(0,i.kt)("li",{parentName:"ul"},"Diamond"),(0,i.kt)("li",{parentName:"ul"},"Star"),(0,i.kt)("li",{parentName:"ul"},"Gear"),(0,i.kt)("li",{parentName:"ul"},"Badge"),(0,i.kt)("li",{parentName:"ul"},"Badge two"))),(0,i.kt)("li",{parentName:"ul"},"Added VOOC charging display on lockscreen charging (for supported devices)"),(0,i.kt)("li",{parentName:"ul"},"Added more QS headers:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"One-piece anime pack"),(0,i.kt)("li",{parentName:"ul"},"One-piece"),(0,i.kt)("li",{parentName:"ul"},"Hunter x Hunter headers"),(0,i.kt)("li",{parentName:"ul"},"Shingeki no Kyojin headers"),(0,i.kt)("li",{parentName:"ul"},"Kimetsu no Yaiba headers"),(0,i.kt)("li",{parentName:"ul"},"My Hero Academia headers"),(0,i.kt)("li",{parentName:"ul"},"Naruto headers"))),(0,i.kt)("li",{parentName:"ul"},"Improved clipboard access"),(0,i.kt)("li",{parentName:"ul"},"Improved color picker"),(0,i.kt)("li",{parentName:"ul"},"Added full proc/version information for kernel (enable or disable by tapping)"),(0,i.kt)("li",{parentName:"ul"},"Settings changes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Replaced animations with new ones. Credits to our designer, Roger Truttmann, for the amazing animations!"),(0,i.kt)("li",{parentName:"ul"},"Improved Blissify settings:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Decluttered Blissify > QS options"),(0,i.kt)("li",{parentName:"ul"},"Added categories for more items"),(0,i.kt)("li",{parentName:"ul"},"Improved overall UI"),(0,i.kt)("li",{parentName:"ul"},"Added hints and redirections from one setting to another (please suggest ideas if you think there can be more!)")))))),(0,i.kt)("p",null,"And that\u2019s it for this week\u2019s worth of changes! As always, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/BlissRoms-Devices/Changelogs/blob/q/Changelog.txt"},"the developer changelog is available here.")),(0,i.kt)("p",null,"Have a great weekend!"))}m.isMDXComponent=!0}}]);