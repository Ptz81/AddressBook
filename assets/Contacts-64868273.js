import{s as m,u as F,a as h,j as e,c as $,b as D,f as I,L as w,d as P,e as T}from"./index-599a7881.js";import{H as A}from"./Helmet-9b0d6f74.js";import{a as B,b as M}from"./pages.styled-c427d0a7.js";var v="NOT_FOUND";function Z(r){var a;return{get:function(n){return a&&r(a.key,n)?a.value:v},put:function(n,o){a={key:n,value:o}},getEntries:function(){return a?[a]:[]},clear:function(){a=void 0}}}function H(r,a){var t=[];function n(c){var i=t.findIndex(function(f){return a(c,f.key)});if(i>-1){var u=t[i];return i>0&&(t.splice(i,1),t.unshift(u)),u.value}return v}function o(c,i){n(c)===v&&(t.unshift({key:c,value:i}),t.length>r&&t.pop())}function s(){return t}function l(){t=[]}return{get:n,put:o,getEntries:s,clear:l}}var U=function(a,t){return a===t};function Y(r){return function(t,n){if(t===null||n===null||t.length!==n.length)return!1;for(var o=t.length,s=0;s<o;s++)if(!r(t[s],n[s]))return!1;return!0}}function J(r,a){var t=typeof a=="object"?a:{equalityCheck:a},n=t.equalityCheck,o=n===void 0?U:n,s=t.maxSize,l=s===void 0?1:s,c=t.resultEqualityCheck,i=Y(o),u=l===1?Z(i):H(l,i);function f(){var d=u.get(arguments);if(d===v){if(d=r.apply(null,arguments),c){var p=u.getEntries(),x=p.find(function(g){return c(g.value,d)});x&&(d=x.value)}u.put(arguments,d)}return d}return f.clearCache=function(){return u.clear()},f}function K(r){var a=Array.isArray(r[0])?r[0]:r;if(!a.every(function(n){return typeof n=="function"})){var t=a.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return a}function W(r){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];var o=function(){for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];var u=0,f,d={memoizeOptions:void 0},p=c.pop();if(typeof p=="object"&&(d=p,p=c.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var x=d,g=x.memoizeOptions,j=g===void 0?t:g,k=Array.isArray(j)?j:[j],y=K(c),E=r.apply(void 0,[function(){return u++,p.apply(null,arguments)}].concat(k)),z=r(function(){for(var S=[],R=y.length,C=0;C<R;C++)S.push(y[C].apply(null,arguments));return f=E.apply(null,S),f});return Object.assign(z,{resultFunc:p,memoizedResultFunc:E,dependencies:y,lastResult:function(){return f},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),z};return o}var _=W(J);const O=r=>r.table.items,q=r=>r.filter,G=r=>r.table.error,N=r=>r.table.isLoading,Q=_([O,q],(r,a)=>r.filter(({name:t})=>t.toLowerCase().includes(a.toLowerCase()))),V=m.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  margin-bottom: 12px;
`,L=m.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`,X=m.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-right: auto;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #3f51b5;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`,ee=()=>{const r=F(),a=h(O),t=n=>{n.preventDefault();const o=n.currentTarget.elements.name.value,s=n.currentTarget.elements.number.value;if(a.some(l=>l.name.toLowerCase()===o.toLowerCase())){alert(`${o} is already in contacts`);return}r($({name:o,number:s})),n.currentTarget.reset()};return e.jsxs(V,{onSubmit:t,autoComplete:"off",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(L,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),e.jsx("label",{htmlFor:"number",children:"Number"}),e.jsx(L,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),e.jsx(X,{type:"submit",children:"Add contact"})]})},te=m.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-right: auto;
  border-radius: 4px;
  padding: 6px 10px;
  border: 1px solid #3f41b5;
  background-color: #fff;
  color: #3f41b5;

  &:hover,
  &:focus {
    background-color: #3f51b5;
    color: #fff;
    border: 1px solid #3f41b5;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`,re=()=>{const r=h(Q),a=h(G),t=h(N),n=F();if(D.useEffect(()=>{n(I())},[n]),t)return e.jsx(w,{});if(a)return e.jsx("h2",{children:a});if(!(!r||r.length===0))return e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Birthday"}),e.jsx("th",{children:"Phone Number"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:r.map(o=>e.jsxs("tr",{children:[e.jsx("td",{children:o.name}),e.jsx("td",{children:o.email}),e.jsx("td",{children:o.birthday_date}),e.jsx("td",{children:o.phone_number}),e.jsx("td",{children:e.jsx(te,{onClick:()=>n(P(o.id)),children:"Delete"})})]},o.id))})]})},ne=re,ae=m.p`
  text-transform: uppercase;
  font-weight: 700;
`,oe=m.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`,ie=()=>{const r=F(),a=h(q),t=n=>{const{value:o}=n.target;r(T(o))};return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:"Find contacts by name"}),e.jsx(oe,{type:"text",name:"filter",value:a,onChange:t})]})},se=ie;function de(){const r=h(N);return e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsx(A,{children:e.jsx("title",{children:"Your Contacts"})}),e.jsx(ee,{}),e.jsx("div",{children:r&&e.jsx(w,{})}),e.jsxs(M,{children:[e.jsx("div",{children:e.jsx(ne,{})}),e.jsxs("div",{children:[e.jsx(A,{children:e.jsx("title",{children:"Your Contacts filter"})}),e.jsx("div",{children:r&&e.jsx(w,{})}),e.jsx(se,{})]})]})]})})}export{de as default};
