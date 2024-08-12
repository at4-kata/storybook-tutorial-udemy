import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{P as t}from"./index-D3ylJrlI.js";function i({task:{id:a,title:o,state:c},onPinTask:f,onArchiveTask:_}){return e.jsxs("div",{className:`list-item ${c}`,children:[e.jsxs("label",{htmlFor:"checked",className:"checkbox",children:[e.jsx("input",{type:"checkbox",name:"checked",id:`archiveTask-${a}`}),e.jsx("span",{className:"checkbox-custom",onClick:()=>_(a),"aria-label":`archiveTask-${a}`})]}),e.jsx("label",{htmlFor:"title",className:"title","aria-label":o,children:e.jsx("input",{type:"text",value:o,readOnly:!0,name:"title",placeholder:"Input title"})}),c!=="TASK_ARCHIVED"&&e.jsx("button",{className:"pin-button",id:`pinTask-${a}`,"aria-label":`pinTask-${a}`,onClick:()=>f(a),children:e.jsx("span",{className:"icon-star"})})]})}i.propTypes={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onPinTask:t.func,onArchiveTask:t.func};i.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"",type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1}}};const x={component:i,title:"Task",tags:["autodocs"]},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...s.args.task,state:"TASK_PINNED"}}},n={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,k;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(k=(m=r.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var T,g,h;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["Default","Pinned","Archived"],j=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:s,Pinned:r,__namedExportsOrder:A,default:x},Symbol.toStringTag,{value:"Module"}));export{s as D,i as T,j as a};
