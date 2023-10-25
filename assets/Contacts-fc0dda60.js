import{s as m,u as F,a as h,j as e,c as $,b as D,f as I,L as w,d as P,e as T}from"./index-29e65c4e.js";import{H as A}from"./Helmet-b8d66c4c.js";import{a as B,b as M}from"./pages.styled-321cdc30.js";var v="NOT_FOUND";function Z(r){var o;return{get:function(n){return o&&r(o.key,n)?o.value:v},put:function(n,a){o={key:n,value:a}},getEntries:function(){return o?[o]:[]},clear:function(){o=void 0}}}function H(r,o){var t=[];function n(c){var i=t.findIndex(function(f){return o(c,f.key)});if(i>-1){var u=t[i];return i>0&&(t.splice(i,1),t.unshift(u)),u.value}return v}function a(c,i){n(c)===v&&(t.unshift({key:c,value:i}),t.length>r&&t.pop())}function s(){return t}function l(){t=[]}return{get:n,put:a,getEntries:s,clear:l}}var U=function(o,t){return o===t};function Y(r){return function(t,n){if(t===null||n===null||t.length!==n.length)return!1;for(var a=t.length,s=0;s<a;s++)if(!r(t[s],n[s]))return!1;return!0}}function J(r,o){var t=typeof o=="object"?o:{equalityCheck:o},n=t.equalityCheck,a=n===void 0?U:n,s=t.maxSize,l=s===void 0?1:s,c=t.resultEqualityCheck,i=Y(a),u=l===1?Z(i):H(l,i);function f(){var d=u.get(arguments);if(d===v){if(d=r.apply(null,arguments),c){var p=u.getEntries(),x=p.find(function(g){return c(g.value,d)});x&&(d=x.value)}u.put(arguments,d)}return d}return f.clearCache=function(){return u.clear()},f}function K(r){var o=Array.isArray(r[0])?r[0]:r;if(!o.every(function(n){return typeof n=="function"})){var t=o.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return o}function W(r){for(var o=arguments.length,t=new Array(o>1?o-1:0),n=1;n<o;n++)t[n-1]=arguments[n];var a=function(){for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];var u=0,f,d={memoizeOptions:void 0},p=c.pop();if(typeof p=="object"&&(d=p,p=c.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var x=d,g=x.memoizeOptions,j=g===void 0?t:g,k=Array.isArray(j)?j:[j],y=K(c),E=r.apply(void 0,[function(){return u++,p.apply(null,arguments)}].concat(k)),z=r(function(){for(var S=[],R=y.length,C=0;C<R;C++)S.push(y[C].apply(null,arguments));return f=E.apply(null,S),f});return Object.assign(z,{resultFunc:p,memoizedResultFunc:E,dependencies:y,lastResult:function(){return f},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),z};return a}var _=W(J);const N=r=>r.table.items,O=r=>r.filter,G=r=>r.table.error,q=r=>r.table.isLoading,Q=_([N,O],(r,o)=>r.filter(({name:t})=>t.toLowerCase().includes(o.toLowerCase()))),V=m.form`
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
`,ee=()=>{const r=F(),o=h(N),t=n=>{n.preventDefault();const a=n.currentTarget.elements.name.value,s=n.currentTarget.elements.number.value;if(o.some(l=>l.name.toLowerCase()===a.toLowerCase())){alert(`${a} is already in contacts`);return}r($({name:a,number:s})),n.currentTarget.reset()};return e.jsxs(V,{onSubmit:t,autoComplete:"off",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(L,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),e.jsx("label",{htmlFor:"number",children:"Number"}),e.jsx(L,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),e.jsx(X,{type:"submit",children:"Add contact"})]})},te=m.button`
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
`,re=()=>{const r=h(Q),o=h(G),t=h(q),n=F();return D.useEffect(()=>{n(I())},[n]),t?e.jsx(w,{}):o?e.jsx("h2",{children:o}):!r||r.length===0?e.jsx("p",{children:"No contacts found."}):e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Birthday"}),e.jsx("th",{children:"Phone Number"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:r.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.name}),e.jsx("td",{children:a.email}),e.jsx("td",{children:a.birthday_date}),e.jsx("td",{children:a.phone_number}),e.jsx("td",{children:e.jsx(te,{onClick:()=>n(P(a.id)),children:"Delete"})})]},a.id))})]})},ne=re,oe=m.p`
  text-transform: uppercase;
  font-weight: 700;
`,ae=m.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`,ie=()=>{const r=F(),o=h(O),t=n=>{const{value:a}=n.target;r(T(a))};return e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:"Find contacts by name"}),e.jsx(ae,{type:"text",name:"filter",value:o,onChange:t})]})},se=ie;function de(){const r=h(q);return e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsx(A,{children:e.jsx("title",{children:"Your Contacts"})}),e.jsx(ee,{}),e.jsx("div",{children:r&&e.jsx(w,{})}),e.jsxs(M,{children:[e.jsx("div",{children:e.jsx(ne,{})}),e.jsxs("div",{children:[e.jsx(A,{children:e.jsx("title",{children:"Your Contacts filter"})}),e.jsx("div",{children:r&&e.jsx(w,{})}),e.jsx(se,{})]})]})]})})}export{de as default};
