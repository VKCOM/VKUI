import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-lhb8_BzR.js";import{n as r,t as i}from"./Pagination-DYPQF66H.js";import{i as a,n as o,t as s}from"./constants-CXYaXe_q.js";import{n as c,t as l}from"./createStoryParameters-CbXzS3a6.js";import{n as u,t as d}from"./useCustomArgs-Du0njoQk.js";var f=t({Playground:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g,_=e((()=>{a(),c(),d(),r(),p=n(),m={title:`Navigation/Pagination`,component:i,parameters:l(`Pagination`,s,o),tags:[`Навигация`]},h={render:function(e){let[,t]=u(),n=e=>{t({currentPage:e})};return(0,p.jsx)(i,{...e,onChange:n})},args:{currentPage:1,boundaryCount:2,totalPages:25}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, updateArg] = useCustomArgs();
    const onPageChange = (page: number) => {
      updateArg({
        currentPage: page
      });
    };
    return <Pagination {...args} onChange={onPageChange} />;
  },
  args: {
    currentPage: 1,
    boundaryCount: 2,
    totalPages: 25
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`]}));export{h as n,_ as r,f as t};