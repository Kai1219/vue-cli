"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[859],{859:function(s,e,t){t.r(e),t.d(e,{default:function(){return f}});var n=t(6252),r=t(9963);const a={class:"container mt-5"},o={class:"col-md-6"},i=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},u=(0,n._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},c=(0,n._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,n._)("div",{class:"text-end mt-4"},[(0,n._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function m(s,e,t,m,h,w){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,r.iM)(((...s)=>w.signIn&&w.signIn(...s)),["prevent"]))},[(0,n._)("div",o,[i,(0,n._)("div",l,[u,(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s),required:"",autofocus:""},null,512),[[r.nr,h.user.username]])]),(0,n._)("div",d,[c,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s),placeholder:"Password",required:""},null,512),[[r.nr,h.user.password]])]),p])],32)])}var h={data(){return{user:{}}},methods:{signIn(){this.$http.post("https://vue3-course-api.hexschool.io/v2/admin/signin",this.user).then((s=>{const{token:e,expired:t}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(t)};`,this.$router.push("/admin/adminproducts")})).catch((s=>{alert(s.data.message)}))}}},w=t(3744);const b=(0,w.Z)(h,[["render",m]]);var f=b}}]);
//# sourceMappingURL=859.af2ce74e.js.map