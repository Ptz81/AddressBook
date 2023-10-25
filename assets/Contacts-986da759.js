import{s as u,u as z,a as x,j as e,c as I,b as P,f as $,L as E,d as B,e as H}from"./index-0c0f1492.js";import{H as T}from"./Helmet-76ca8b94.js";import{a as M,b as Z}from"./pages.styled-d06416e6.js";var y="NOT_FOUND";function U(r){var o;return{get:function(n){return o&&r(o.key,n)?o.value:y},put:function(n,a){o={key:n,value:a}},getEntries:function(){return o?[o]:[]},clear:function(){o=void 0}}}function Y(r,o){var t=[];function n(c){var i=t.findIndex(function(h){return o(c,h.key)});if(i>-1){var l=t[i];return i>0&&(t.splice(i,1),t.unshift(l)),l.value}return y}function a(c,i){n(c)===y&&(t.unshift({key:c,value:i}),t.length>r&&t.pop())}function s(){return t}function d(){t=[]}return{get:n,put:a,getEntries:s,clear:d}}var J=function(o,t){return o===t};function K(r){return function(t,n){if(t===null||n===null||t.length!==n.length)return!1;for(var a=t.length,s=0;s<a;s++)if(!r(t[s],n[s]))return!1;return!0}}function W(r,o){var t=typeof o=="object"?o:{equalityCheck:o},n=t.equalityCheck,a=n===void 0?J:n,s=t.maxSize,d=s===void 0?1:s,c=t.resultEqualityCheck,i=K(a),l=d===1?U(i):Y(d,i);function h(){var p=l.get(arguments);if(p===y){if(p=r.apply(null,arguments),c){var f=l.getEntries(),b=f.find(function(v){return c(v.value,p)});b&&(p=b.value)}l.put(arguments,p)}return p}return h.clearCache=function(){return l.clear()},h}function _(r){var o=Array.isArray(r[0])?r[0]:r;if(!o.every(function(n){return typeof n=="function"})){var t=o.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return o}function G(r){for(var o=arguments.length,t=new Array(o>1?o-1:0),n=1;n<o;n++)t[n-1]=arguments[n];var a=function(){for(var d=arguments.length,c=new Array(d),i=0;i<d;i++)c[i]=arguments[i];var l=0,h,p={memoizeOptions:void 0},f=c.pop();if(typeof f=="object"&&(p=f,f=c.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var b=p,v=b.memoizeOptions,C=v===void 0?t:v,R=Array.isArray(C)?C:[C],w=_(c),S=r.apply(void 0,[function(){return l++,f.apply(null,arguments)}].concat(R)),A=r(function(){for(var L=[],D=w.length,F=0;F<D;F++)L.push(w[F].apply(null,arguments));return h=S.apply(null,L),h});return Object.assign(A,{resultFunc:f,memoizedResultFunc:S,dependencies:w,lastResult:function(){return h},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),A};return a}var Q=G(W);const O=r=>r.table.items,q=r=>r.filter,V=r=>r.table.error,N=r=>r.table.isLoading,X=Q([O,q],(r,o)=>r.filter(({name:t})=>t.toLowerCase().includes(o.toLowerCase()))),ee=u.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  margin-bottom: 12px;
`,k=u.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`,te=u.button`
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
`,re=()=>{const r=z(),o=x(O),t=n=>{n.preventDefault();const a=n.currentTarget.elements.name.value,s=n.currentTarget.elements.number.value;if(o.some(d=>d.name.toLowerCase()===a.toLowerCase())){alert(`${a} is already in contacts`);return}r(I({name:a,number:s})),n.currentTarget.reset()};return e.jsxs(ee,{onSubmit:t,autoComplete:"off",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(k,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),e.jsx("label",{htmlFor:"number",children:"Number"}),e.jsx(k,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),e.jsx(te,{type:"submit",children:"Add contact"})]})},ne=u.table`
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  margin-top: 50px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  border-collapse: collapse;
  width: 100%;
`,oe=u.thead`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
`,m=u.th`
  padding: 12px;
`,ae=u.tbody`
  background-color: #3f51b5;
`,g=u.td`
  padding: 12px;
  text-align: center;
`,ie=u.button`
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
`,se=()=>{const r=x(X),o=x(V),t=x(N),n=z();if(P.useEffect(()=>{n($())},[n]),t)return e.jsx(E,{});if(o)return e.jsx("h2",{children:o});if(!(!r||r.length===0))return e.jsxs(ne,{children:[e.jsx(oe,{children:e.jsxs("tr",{children:[e.jsx(m,{children:"Name"}),e.jsx(m,{children:"Email"}),e.jsx(m,{children:"Birthday"}),e.jsx(m,{children:"Phone Number"}),e.jsx(m,{children:"Action"})]})}),e.jsx(ae,{children:r.map(a=>e.jsxs("tr",{children:[e.jsx(g,{children:a.name}),e.jsx(g,{children:a.email}),e.jsx(g,{children:a.birthday_date}),e.jsx(g,{children:a.phone_number}),e.jsx(g,{children:e.jsx(ie,{onClick:()=>n(B(a.id)),children:"Delete"})})]},a.id))})]})},ce=se,le=u.p`
  text-transform: uppercase;
  font-weight: 700;
`,ue=u.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`,de=()=>{const r=z(),o=x(q),t=n=>{const{value:a}=n.target;r(H(a))};return e.jsxs(e.Fragment,{children:[e.jsx(le,{children:"Find contacts by name"}),e.jsx(ue,{type:"text",name:"filter",value:o,onChange:t})]})},pe=de;function me(){const r=x(N);return e.jsx(e.Fragment,{children:e.jsxs(M,{children:[e.jsxs("div",{children:[e.jsx(T,{children:e.jsx("title",{children:"Your Contacts filter"})}),e.jsx("div",{children:r&&e.jsx(E,{})}),e.jsx(pe,{})]}),e.jsx(T,{children:e.jsx("title",{children:"Your Contacts"})}),e.jsx(re,{}),e.jsx("div",{children:r&&e.jsx(E,{})}),e.jsx(Z,{children:e.jsx("div",{children:e.jsx(ce,{})})})]})})}export{me as default};
