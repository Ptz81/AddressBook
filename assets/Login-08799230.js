import{s as o,u as c,j as e,l as x}from"./index-ca9ac773.js";import{H as u}from"./Helmet-bf2847c6.js";const m=o.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 30px 30px 30px 30px;
  border-radius: 30px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
`,g=o.label`
  font-size: 2.5em;
  color: #2e2e2e;
  font-weight: 700;
  margin: 15px 0 30px 0;
`,i=o.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,a=o.svg`
  position: absolute;
  left: 10px;
`,l=o.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(173, 173, 173);
  border-radius: 30px;
  margin: 10px 0;
  color: black;
  font-size: 0.8em;
  font-weight: 500;
  box-sizing: border-box;
  padding-left: 30px;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(199, 114, 255);
  }

  &::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
  }
`,h=o.button`
  position: relative;
  width: 100%;
  border: 2px solid #8000ff;
  background-color: #8000ff;
  height: 40px;
  color: white;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: 0.5s;
  }

  &:hover::after {
    transform: translateX(600px);
    transition-duration: 0.5s;
  }
`,f=()=>{const p=c(),d=r=>{r.preventDefault();const t=r.currentTarget,n=t.elements.username.value,s=t.elements.password.value;console.log("Username:",n),console.log("Password:",s),p(x({username:n,password:s})),t.reset()};return e.jsxs(m,{onSubmit:d,autoComplete:"off",children:[e.jsx(g,{children:"Login"}),e.jsxs(i,{children:[e.jsx(a,{viewBox:"0 0 16 16",fill:"#212121",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon"}),e.jsx(l,{placeholder:"Username",id:"username",name:"username",type:"username"})]}),e.jsxs(i,{children:[e.jsx(a,{viewBox:"0 0 16 16",fill:"#212121",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon"}),e.jsx(l,{placeholder:"Password",id:"password",name:"password",type:"password"})]}),e.jsx(h,{id:"button",type:"submit",children:"Submit"})]})};function j(){return e.jsxs("div",{children:[e.jsx(u,{children:e.jsx("title",{children:"Login"})}),e.jsx(f,{})]})}export{j as default};
