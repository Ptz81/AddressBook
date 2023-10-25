import{s as r,u as l,j as e,r as p}from"./index-0c0f1492.js";import{H as d}from"./Helmet-76ca8b94.js";const m=r.form`
  width: 320px;
`,s=r.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
`,o=r.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #3f41b5;
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`,x=r.button`
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
`,u=()=>{const i=l(),a=n=>{n.preventDefault();const t=n.currentTarget;i(p({name:t.elements.username.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()};return e.jsxs(m,{onSubmit:a,autoComplete:"off",children:[e.jsxs(s,{children:["Username",e.jsx(o,{type:"text",name:"username"})]}),e.jsxs(s,{children:["Email",e.jsx(o,{type:"email",name:"email"})]}),e.jsxs(s,{children:["Password",e.jsx(o,{type:"password",name:"password",title:"Enter at least 3 figures and 3 letters"})]}),e.jsx(x,{type:"submit",children:"Register"})]})};function b(){return e.jsxs("div",{children:[e.jsx(d,{children:e.jsx("title",{children:"Registration"})}),e.jsx(u,{})]})}export{b as default};
