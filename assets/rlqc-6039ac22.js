import{d as V,r as _,i as I,a as d,c as L,e as i,t as z,b as o,w as l,j as E,o as F,f as y,k as M,l as N,m as x,g as h,p as S,n as B,E as g,q as k,_ as K}from"./index-139f4444.js";import{r as q}from"./service-486bc7ee.js";const R="/duck/assets/rlqc-c9045c16.png";function A(t){return q({url:"https://duck-sigma-one.vercel.app/rlqc/send_sms",method:"post",data:{mobile:t}})}function T(t){return q({url:"https://duck-sigma-one.vercel.app/rlqc/sms_login",method:"post",data:t})}const U=t=>(S("data-v-316f9cf9"),t=t(),B(),t),j={class:"login-container"},D={class:"login-card"},G=U(()=>i("div",{class:"title"},[i("img",{src:R})],-1)),H={class:"content"},J="睿蓝汽车",O=V({__name:"rlqc",setup(t){const f=_(null),u=_(!1),m=_(!1),e=I({username:"",password:"",code:""}),b={username:[{required:!0,message:"请输入手机号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},w=async()=>{if(!e.username){g({message:"请输入手机号",type:"warning"});return}m.value=!0;let a=await A(e.username);g({message:a.msg,type:a.code===0?"success":"error"}),m.value=!1},v=()=>{var a;(a=f.value)==null||a.validate(async r=>{if(r){u.value=!0;let s=await T({mobile:e.username,code:e.code});if(g({message:s.msg,type:s.code===0?"success":"error"}),s.code===0){let{aId:n,rId:c}=s.data;k({title:"aId",message:n,duration:0}),setTimeout(()=>{k({title:"rId",message:c,duration:0})},500)}u.value=!1}else return!1})};return(a,r)=>{const s=d("el-input"),n=d("el-form-item"),c=d("el-button"),C=d("el-form");return F(),L("div",j,[i("div",{class:"title"},z(J)),i("div",D,[G,i("div",H,[o(C,{ref_key:"loginFormRef",ref:f,model:e,rules:b,onKeyup:E(v,["enter"])},{default:l(()=>[o(n,{prop:"username"},{default:l(()=>[o(s,{modelValue:e.username,"onUpdate:modelValue":r[0]||(r[0]=p=>e.username=p),modelModifiers:{trim:!0},placeholder:"请输入手机号",type:"text",tabindex:"1","prefix-icon":y(M),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),o(n,{prop:"code",inline:!0},{default:l(()=>[o(s,{modelValue:e.code,"onUpdate:modelValue":r[1]||(r[1]=p=>e.code=p),modelModifiers:{trim:!0},placeholder:"请输入验证码",type:"text",tabindex:"2","prefix-icon":y(N),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),o(n,null,{default:l(()=>[o(c,{loading:m.value,type:"primary",size:"large",onClick:x(w,["prevent"])},{default:l(()=>[h(" 发送验证码 ")]),_:1},8,["loading","onClick"]),o(c,{loading:u.value,type:"primary",size:"large",onClick:x(v,["prevent"])},{default:l(()=>[h(" 登 录 ")]),_:1},8,["loading","onClick"])]),_:1})]),_:1},8,["model","onKeyup"])])])])}}});const W=K(O,[["__scopeId","data-v-316f9cf9"]]);export{W as default};
