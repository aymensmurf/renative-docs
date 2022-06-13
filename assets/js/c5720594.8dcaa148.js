"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[1798],{4514:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={id:"0.35",title:"Upgrade to 0.35.x Guide",sidebar_label:"0.35.x",original_id:"0.35"},l=void 0,p={unversionedId:"upgrades/0.35",id:"upgrades/0.35",title:"Upgrade to 0.35.x Guide",description:"---",source:"@site/docs/upgrades/0.35.md",sourceDirName:"upgrades",slug:"/upgrades/0.35",permalink:"/docs/upgrades/0.35",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/upgrades/0.35.md",tags:[],version:"current",frontMatter:{id:"0.35",title:"Upgrade to 0.35.x Guide",sidebar_label:"0.35.x",original_id:"0.35"},sidebar:"docsSidebar",previous:{title:"0.34.x",permalink:"/docs/upgrades/0.34"},next:{title:"0.36.x",permalink:"/docs/upgrades/0.36"}},c=[],s={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_upgrade.png",width:"50",height:"50"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Make sure you run in reset mode after upgrading (required only once for each platform):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rnv run ... ",(0,i.kt)("inlineCode",{parentName:"li"},"-r"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"metro.config.js")," content should be upgraded from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const { withRNV } = require('@rnv/engine-rn');\n\nconst defaultConfig = {};\n\nmodule.exports = withRNV(defaultConfig);\n")),(0,i.kt)("p",null,"to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const { withRNVMetro } = require('rnv');\n\nconst defaultConfig = {};\n\nmodule.exports = withRNVMetro(defaultConfig);\n\n")),(0,i.kt)("p",null,"this will ensure correct behaviour under different engines ie ",(0,i.kt)("inlineCode",{parentName:"p"},"engine-rn-tvos")," and other platforms"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js")," content should be upgraded from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"module.exports = {\n    presets: ['...'],\n    <EXTRAS>\n}\n")),(0,i.kt)("p",null,"to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const { withRNVBabel } = require('rnv');\n\nmodule.exports = withRNVBabel({\n    <EXTRAS>\n});\n\n")),(0,i.kt)("p",null,"this will ensure correct behaviour under different engines ie ",(0,i.kt)("inlineCode",{parentName:"p"},"engine-rn-tvos")," and other platforms"))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);