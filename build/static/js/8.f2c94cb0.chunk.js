(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[8],{954:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(955);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},955:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t(0),r=t(42);function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}var u=function(e){function n(){return a(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"componentDidMount",value:function(){this.props.innerRef((0,r.findDOMNode)(this))}},{key:"componentWillUnmount",value:function(){this.props.innerRef(null)}},{key:"render",value:function(){return this.props.children}}]),n}(i.Component);n.default=u},956:function(e){e.exports=JSON.parse('{"a":"@atlaskit/inline-dialog","b":"12.1.11"}')},991:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var o,i=t(5),r=t(0),a=t.n(r),c=t(420),u=t(421),l=t(419),p=t(954),s=t.n(p),d=t(994),f=t(639),b=t(983),h=t(956),m=t(22),O=t(26),y=t(25),g=t(3),k=t(547),v=t(472),w=Object(O.a)({light:g.N0,dark:g.DN50}),x=Object(O.a)({light:g.N900,dark:g.DN600}),j=m.default.div(o||(o=Object(i.__makeTemplateObject)(["\n  background: ",";\n  border-radius: ","px;\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  color: ",";\n  max-height: ","px;\n  max-width: ","px;\n  padding: ","px ","px;\n  z-index: ",";\n\n  ",";\n\n  &:focus {\n    outline: none;\n  }\n"],["\n  background: ",";\n  border-radius: ","px;\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  color: ",";\n  max-height: ","px;\n  max-width: ","px;\n  padding: ","px ","px;\n  z-index: ",";\n\n  ",";\n\n  &:focus {\n    outline: none;\n  }\n"])),w,y.borderRadius,x,Object(k.multiply)(y.gridSize,56),Object(k.multiply)(y.gridSize,56),Object(k.multiply)(y.gridSize,2),Object(k.multiply)(y.gridSize,3),y.layers.dialog,v.a),C=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleClickOutside=function(e){var t=n.props,o=t.isOpen,i=t.onClose;if(!e.defaultPrevented){var r=n.containerRef,a=n.triggerRef,c=e.target;a&&a.contains(c)||o&&r&&!r.contains(c)&&i&&i({isOpen:!1,event:e})}},n}return Object(i.__extends)(n,e),n.prototype.componentDidUpdate=function(e){"undefined"!==typeof window&&(!e.isOpen&&this.props.isOpen?window.addEventListener("click",this.handleClickOutside,!0):e.isOpen&&!this.props.isOpen&&window.removeEventListener("click",this.handleClickOutside,!0))},n.prototype.componentDidMount=function(){"undefined"!==typeof window&&this.props.isOpen&&window.addEventListener("click",this.handleClickOutside,!0)},n.prototype.componentWillUnmount=function(){"undefined"!==typeof window&&window.removeEventListener("click",this.handleClickOutside,!0)},n.prototype.render=function(){var e=this,n=this.props,t=n.children,o=n.placement,i=n.isOpen,r=n.content,c=n.onContentBlur,u=n.onContentFocus,l=n.onContentClick,p=n.testId,h=i?a.a.createElement(d.a,{placement:o},(function(n){var t=n.ref,o=n.style;return a.a.createElement(j,{onBlur:c,onFocus:u,onClick:l,innerRef:function(n){e.containerRef=n,"function"===typeof t?t(n):t.current=n},style:o,"data-testid":p},r)})):null;return a.a.createElement(f.c,null,a.a.createElement(b.a,null,(function(n){var o=n.ref;return a.a.createElement(s.a,{innerRef:function(n){e.triggerRef=n,"function"===typeof o?o(n):o.current=n}},t)})),h)},n.defaultProps={isOpen:!1,onContentBlur:function(){},onContentClick:function(){},onContentFocus:function(){},onClose:function(){},placement:"bottom-start"},n}(r.Component),_=Object(c.a)("atlaskit"),E=Object(u.a)({componentName:"inlineDialog",packageName:h.a,packageVersion:h.b})(Object(l.a)({onClose:_({action:"closed",actionSubject:"inlineDialog",attributes:{componentName:"inlineDialog",packageName:h.a,packageVersion:h.b}})})(C))}}]);