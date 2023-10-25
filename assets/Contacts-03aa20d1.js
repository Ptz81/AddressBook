import{s as m,u as F,a as h,j as e,c as $,b as D,f as I,L as w,d as P,e as T}from"./index-f94ff5ed.js";import{H as S}from"./Helmet-00ac8c62.js";import{a as B,b as M}from"./pages.styled-adc8e664.js";var v="NOT_FOUND";function Z(t){var a;return{get:function(n){return a&&t(a.key,n)?a.value:v},put:function(n,o){a={key:n,value:o}},getEntries:function(){return a?[a]:[]},clear:function(){a=void 0}}}function H(t,a){var r=[];function n(c){var i=r.findIndex(function(f){return a(c,f.key)});if(i>-1){var u=r[i];return i>0&&(r.splice(i,1),r.unshift(u)),u.value}return v}function o(c,i){n(c)===v&&(r.unshift({key:c,value:i}),r.length>t&&r.pop())}function s(){return r}function l(){r=[]}return{get:n,put:o,getEntries:s,clear:l}}var U=function(a,r){return a===r};function Y(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,s=0;s<o;s++)if(!t(r[s],n[s]))return!1;return!0}}function J(t,a){var r=typeof a=="object"?a:{equalityCheck:a},n=r.equalityCheck,o=n===void 0?U:n,s=r.maxSize,l=s===void 0?1:s,c=r.resultEqualityCheck,i=Y(o),u=l===1?Z(i):H(l,i);function f(){var d=u.get(arguments);if(d===v){if(d=t.apply(null,arguments),c){var p=u.getEntries(),x=p.find(function(g){return c(g.value,d)});x&&(d=x.value)}u.put(arguments,d)}return d}return f.clearCache=function(){return u.clear()},f}function K(t){var a=Array.isArray(t[0])?t[0]:t;if(!a.every(function(n){return typeof n=="function"})){var r=a.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return a}function W(t){for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];var o=function(){for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];var u=0,f,d={memoizeOptions:void 0},p=c.pop();if(typeof p=="object"&&(d=p,p=c.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var x=d,g=x.memoizeOptions,j=g===void 0?r:g,k=Array.isArray(j)?j:[j],y=K(c),E=t.apply(void 0,[function(){return u++,p.apply(null,arguments)}].concat(k)),A=t(function(){for(var z=[],R=y.length,C=0;C<R;C++)z.push(y[C].apply(null,arguments));return f=E.apply(null,z),f});return Object.assign(A,{resultFunc:p,memoizedResultFunc:E,dependencies:y,lastResult:function(){return f},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),A};return o}var _=W(J);const O=t=>t.table.items,q=t=>t.filter,G=t=>t.table.error,N=t=>t.table.isLoading,Q=_([O,q],(t,a)=>Array.isArray(t)?t.filter(({name:r})=>r.toLowerCase().includes(a.toLowerCase())):[]),V=m.form`
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
`,ee=()=>{const t=F(),a=h(O),r=n=>{n.preventDefault();const o=n.currentTarget.elements.name.value,s=n.currentTarget.elements.number.value;if(a.some(l=>l.name.toLowerCase()===o.toLowerCase())){alert(`${o} is already in contacts`);return}t($({name:o,number:s})),n.currentTarget.reset()};return e.jsxs(V,{onSubmit:r,autoComplete:"off",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(L,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),e.jsx("label",{htmlFor:"number",children:"Number"}),e.jsx(L,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),e.jsx(X,{type:"submit",children:"Add contact"})]})},te=m.button`
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
`,re=()=>{const t=h(Q),a=h(G),r=h(N),n=F();if(D.useEffect(()=>{n(I())},[n]),r)return e.jsx(w,{});if(a)return e.jsx("h2",{children:a});if(!(!t||t.length===0))return e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Birthday"}),e.jsx("th",{children:"Phone Number"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:t.map(o=>e.jsxs("tr",{children:[e.jsx("td",{children:o.name}),e.jsx("td",{children:o.email}),e.jsx("td",{children:o.birthday_date}),e.jsx("td",{children:o.phone_number}),e.jsx("td",{children:e.jsx(te,{onClick:()=>n(P(o.id)),children:"Delete"})})]},o.id))})]})},ne=re,ae=m.p`
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
`,ie=()=>{const t=F(),a=h(q),r=n=>{const{value:o}=n.target;t(T(o))};return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:"Find contacts by name"}),e.jsx(oe,{type:"text",name:"filter",value:a,onChange:r})]})},se=ie;function de(){const t=h(N);return e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsx(S,{children:e.jsx("title",{children:"Your Contacts"})}),e.jsx(ee,{}),e.jsx("div",{children:t&&e.jsx(w,{})}),e.jsxs(M,{children:[e.jsx("div",{children:e.jsx(ne,{})}),e.jsxs("div",{children:[e.jsx(S,{children:e.jsx("title",{children:"Your Contacts filter"})}),e.jsx("div",{children:t&&e.jsx(w,{})}),e.jsx(se,{})]})]})]})})}export{de as default};
