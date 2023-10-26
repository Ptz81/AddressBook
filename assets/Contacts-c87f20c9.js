import{s as p,a as m,u as k,b as D,f as N,j as e,L as F,d as I,c as P}from"./index-ca9ac773.js";import{H as O}from"./Helmet-bf2847c6.js";import{a as $,b as B}from"./pages.styled-b7b846e2.js";var y="NOT_FOUND";function H(r){var n;return{get:function(o){return n&&r(n.key,o)?n.value:y},put:function(o,a){n={key:o,value:a}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function M(r,n){var t=[];function o(c){var i=t.findIndex(function(f){return n(c,f.key)});if(i>-1){var s=t[i];return i>0&&(t.splice(i,1),t.unshift(s)),s.value}return y}function a(c,i){o(c)===y&&(t.unshift({key:c,value:i}),t.length>r&&t.pop())}function u(){return t}function h(){t=[]}return{get:o,put:a,getEntries:u,clear:h}}var U=function(n,t){return n===t};function Y(r){return function(t,o){if(t===null||o===null||t.length!==o.length)return!1;for(var a=t.length,u=0;u<a;u++)if(!r(t[u],o[u]))return!1;return!0}}function K(r,n){var t=typeof n=="object"?n:{equalityCheck:n},o=t.equalityCheck,a=o===void 0?U:o,u=t.maxSize,h=u===void 0?1:u,c=t.resultEqualityCheck,i=Y(a),s=h===1?H(i):M(h,i);function f(){var l=s.get(arguments);if(l===y){if(l=r.apply(null,arguments),c){var d=s.getEntries(),v=d.find(function(b){return c(b.value,l)});v&&(l=v.value)}s.put(arguments,l)}return l}return f.clearCache=function(){return s.clear()},f}function W(r){var n=Array.isArray(r[0])?r[0]:r;if(!n.every(function(o){return typeof o=="function"})){var t=n.map(function(o){return typeof o=="function"?"function "+(o.name||"unnamed")+"()":typeof o}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function _(r){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var a=function(){for(var h=arguments.length,c=new Array(h),i=0;i<h;i++)c[i]=arguments[i];var s=0,f,l={memoizeOptions:void 0},d=c.pop();if(typeof d=="object"&&(l=d,d=c.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var v=l,b=v.memoizeOptions,C=b===void 0?t:b,q=Array.isArray(C)?C:[C],E=W(c),S=r.apply(void 0,[function(){return s++,d.apply(null,arguments)}].concat(q)),z=r(function(){for(var L=[],A=E.length,w=0;w<A;w++)L.push(E[w].apply(null,arguments));return f=S.apply(null,L),f});return Object.assign(z,{resultFunc:d,memoizedResultFunc:S,dependencies:E,lastResult:function(){return f},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),z};return a}var G=_(K);const J=r=>r.table.items,T=r=>r.filter,Q=r=>r.table.error,R=r=>r.table.isLoading,V=G([J,T],(r,n)=>r.filter(({name:t})=>t.toLowerCase().includes(n.toLowerCase()))),X=p.table`
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  margin-top: 50px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  border-collapse: collapse;
  width: 100%;
`,Z=p.thead`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
`,x=p.th`
  padding: 12px;
`,ee=p.tbody`
  background-color: #3f51b5;
`,g=p.td`
  padding: 12px;
  text-align: center;
`,te=p.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  padding: 6px 10px;
  border: 1px solid #3f51b5;
  background-color: #fff;
  color: #3f51b5;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover,
  &:focus {
    background-color: #3f51b5;
    color: #fff;
    border: 1px solid #3f51b5;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`,re=()=>{const r=m(V),n=m(Q),t=m(R),o=k();if(D.useEffect(()=>{o(N())},[o]),t)return e.jsx(F,{});if(n)return e.jsx("h2",{children:n});if(!(!r||r.length===0))return e.jsxs(X,{children:[e.jsx(Z,{children:e.jsxs("tr",{children:[e.jsx(x,{children:"Name"}),e.jsx(x,{children:"Email"}),e.jsx(x,{children:"Birthday"}),e.jsx(x,{children:"Phone Number"}),e.jsx(x,{children:"Action"})]})}),e.jsx(ee,{children:r.map(a=>e.jsxs("tr",{children:[e.jsx(g,{children:a.name}),e.jsx(g,{children:a.email}),e.jsx(g,{children:a.birthday_date}),e.jsx(g,{children:a.phone_number}),e.jsx(g,{children:e.jsx(te,{onClick:()=>o(I(a.id)),children:"Delete"})})]},a.id))})]})},ne=re,oe=p.p`
  text-transform: uppercase;
  font-weight: 700;
`,ae=p.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`,ie=()=>{const r=k(),n=m(T),t=o=>{const{value:a}=o.target;r(P(a))};return e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:"Find contacts by name"}),e.jsx(ae,{type:"text",name:"filter",value:n,onChange:t})]})},ce=ie;function de(){const r=m(R);return e.jsx(e.Fragment,{children:e.jsxs($,{children:[e.jsxs("div",{children:[e.jsx(O,{children:e.jsx("title",{children:"Your Contacts filter"})}),e.jsx("div",{children:r&&e.jsx(F,{})}),e.jsx(ce,{})]}),e.jsx(O,{children:e.jsx("title",{children:"Your Contacts"})}),e.jsx("div",{children:r&&e.jsx(F,{})}),e.jsx(B,{children:e.jsx("div",{children:e.jsx(ne,{})})})]})})}export{de as default};
