(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),s=n.n(i),c=n(10),l=n.n(c),o=(n(17),n(7)),r=n(3),h=n(4),u=n(1),d=n(6),j=n(5),b=n(11),p=n.n(b),m=(n(8),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){this.props.onInputChange(this.props.input,e.target.value)}},{key:"render",value:function(){return Object(a.jsxs)("label",{children:[this.props.input,":",Object(a.jsx)("input",{id:this.props.input,value:this.props.value,onChange:this.handleChange,type:"text",placeholder:this.props.placeHolder,autoComplete:"off"})]})}}]),n}(s.a.Component)),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={schoolName:"",studyName:"",startDate:"",endDate:""},a.handleClose=a.handleClose.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleClose",value:function(){this.props.onClose()}},{key:"handleChange",value:function(e,t){this.setState(Object(o.a)({},e,t.target.value))}},{key:"handleFormSubmit",value:function(e){e.preventDefault(),this.props.onFormSubmit("education",this.state),this.props.onClose()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("form",{className:"column",children:[Object(a.jsx)("input",{type:"text",value:this.state.schoolName,placeholder:"School Name",onChange:function(t){return e.handleChange("schoolName",t)}}),Object(a.jsx)("input",{type:"text",value:this.state.studyName,placeholder:"Title of Study",onChange:function(t){return e.handleChange("studyName",t)}}),Object(a.jsxs)("div",{children:["From:"," ",Object(a.jsx)("input",{type:"date",onChange:function(t){return e.handleChange("startDate",t)}}),"To:"," ",Object(a.jsx)("input",{type:"date",onChange:function(t){return e.handleChange("endDate",t)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{type:"submit",onClick:this.handleFormSubmit,className:"fas fa-check-square add"}),Object(a.jsx)("i",{onClick:this.handleClose,className:"fas fa-window-close cancel"})]})]})}}]),n}(s.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isSelected:!1},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleClick",value:function(){this.setState({isSelected:!this.state.isSelected})}},{key:"render",value:function(){var e,t=this.props.onFormSubmit;return e=this.state.isSelected?Object(a.jsx)(O,{onClose:this.handleClick,onFormSubmit:t}):Object(a.jsx)("i",{onClick:this.handleClick,className:"fas fa-plus-square add"}),Object(a.jsx)("div",{children:e})}}]),n}(s.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={coName:"",positionTitle:"",mainTasks:"",startDate:"",endDate:""},a.handleClose=a.handleClose.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleClose",value:function(){this.props.onClose()}},{key:"handleChange",value:function(e,t){this.setState(Object(o.a)({},e,t.target.value))}},{key:"handleFormSubmit",value:function(e){e.preventDefault(),this.props.onFormSubmit("experience",this.state),this.props.onClose()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("form",{className:"column",children:[Object(a.jsx)("input",{type:"text",placeholder:"Company Name",value:this.state.coName,onChange:function(t){return e.handleChange("coName",t)}}),Object(a.jsx)("input",{type:"text",placeholder:"Position Title",value:this.state.positionTitle,onChange:function(t){return e.handleChange("positionTitle",t)}}),Object(a.jsx)("input",{type:"text",placeholder:"Main Tasks",value:this.state.mainTasks,onChange:function(t){return e.handleChange("mainTasks",t)}}),Object(a.jsxs)("div",{children:["From:"," ",Object(a.jsx)("input",{type:"date",onChange:function(t){return e.handleChange("startDate",t)}}),"To:"," ",Object(a.jsx)("input",{type:"date",onChange:function(t){return e.handleChange("endDate",t)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{type:"submit",onClick:this.handleFormSubmit,className:"fas fa-check-square add"}),Object(a.jsx)("i",{onClick:this.handleClose,className:"fas fa-window-close cancel"})]})]})}}]),n}(s.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isSelected:!1},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleClick",value:function(){this.setState({isSelected:!this.state.isSelected})}},{key:"render",value:function(){var e,t=this.props.onFormSubmit;return e=this.state.isSelected?Object(a.jsx)(C,{onClose:this.handleClick,onFormSubmit:t}):Object(a.jsx)("i",{onClick:this.handleClick,className:"fas fa-plus-square add"}),Object(a.jsx)("div",{children:e})}}]),n}(s.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onFormSubmit,n=e.onInputChange,i=this.props,s=i.name,c=i.email,l=i.phone,o=i.website,r=i.github;return Object(a.jsxs)("div",{className:"column cv-container",children:[Object(a.jsx)("h1",{children:"CV Builder"}),Object(a.jsx)(m,{className:"InputCv",input:"name",value:s,onInputChange:n,placeHolder:"Full Name"}),Object(a.jsx)(m,{className:"InputCv",input:"email",value:c,onInputChange:n,placeHolder:"Email Address"}),Object(a.jsx)(m,{className:"InputCv",input:"phone",value:l,onInputChange:n,placeHolder:"Phone Number"}),Object(a.jsx)(m,{className:"InputCv",input:"website",value:o,onInputChange:n,placeHolder:"Personal Website"}),Object(a.jsx)(m,{className:"boo",input:"github",value:r,onInputChange:n,placeHolder:"GitHub"}),Object(a.jsxs)("div",{className:"addForm",children:["Education",Object(a.jsx)(v,{onFormSubmit:t})]}),Object(a.jsxs)("div",{className:"addForm",children:["Experience",Object(a.jsx)(f,{onFormSubmit:t})]})]})}}]),n}(s.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isEditing:!1},a.handleEdit=a.handleEdit.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleDelete",value:function(){this.props.onDelete("education",this.props.id)}},{key:"handleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){var e=this.props.values;return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"display",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("p",{children:e.schoolName}),Object(a.jsxs)("p",{children:["(",e.startDate,")-(",e.endDate,")"]}),Object(a.jsx)("p",{children:e.studyName})]}),Object(a.jsx)("i",{onClick:this.handleDelete,className:"fas fa-trash-alt cancel"})]})}}]),n}(s.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isEditing:!1},a.handleEdit=a.handleEdit.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleDelete",value:function(){this.props.onDelete("experience",this.props.id)}},{key:"handleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){var e=this.props.values;return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"display",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("p",{children:e.coName}),Object(a.jsxs)("p",{children:["(",e.startDate,")-(",e.endDate,")"]}),Object(a.jsx)("p",{children:e.positionTitle}),Object(a.jsx)("p",{children:e.mainTasks})]}),Object(a.jsx)("i",{onClick:this.handleDelete,className:"fas fa-trash-alt cancel"})]})}}]),n}(s.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,i=t.email,s=t.phone,c=t.website,l=t.github,o=t.education,r=t.experience,h=o.map((function(t){return Object(a.jsx)(g,{onDelete:e.props.onDelete,onInputChange:e.props.onInputChange,onFormSubmit:e.props.onFormSubmit,values:t.values,id:t.id},t.id)})),u=r.map((function(t){return Object(a.jsx)(k,{onDelete:e.props.onDelete,onInputChange:e.props.onInputChange,onFormSubmit:e.props.onFormSubmit,values:t.values,id:t.id},t.id)}));return Object(a.jsxs)("div",{className:"cv-container",children:[Object(a.jsx)("h1",{children:n}),Object(a.jsxs)("div",{className:"row basic-info",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{className:"fas fa-envelope"}),i]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{className:"fas fa-phone-square"}),s]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{className:"fas fa-home"}),c]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{className:"fab fa-github"}),l]})]}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsxs)("h3",{children:["Education ",h]}),Object(a.jsxs)("h3",{children:["Experience ",u]})]})]})}}]),n}(s.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={name:"",email:"",phone:"",website:"",github:"",education:[],experience:[]},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a}return Object(h.a)(n,[{key:"handleInputChange",value:function(e,t){this.setState(Object(o.a)({},e,t))}},{key:"handleFormSubmit",value:function(e,t){var n={values:t,id:p()()};this.setState(Object(o.a)({},e,this.state[e].concat(n)))}},{key:"handleDelete",value:function(e,t){this.setState(Object(o.a)({},e,this.state[e].filter((function(e){return e.id!==t}))))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,i=e.phone,s=e.website,c=e.github,l=e.education,o=e.experience;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(x,{name:t,email:n,phone:i,website:s,github:c,education:l,experience:o,onInputChange:this.handleInputChange,onFormSubmit:this.handleFormSubmit}),Object(a.jsx)(y,{name:t,email:n,phone:i,website:s,github:c,education:l,experience:o,onDelete:this.handleDelete,onInputChange:this.handleInputChange,onFormSubmit:this.handleFormSubmit})]})}}]),n}(s.a.Component);l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.1d67f0f3.chunk.js.map