import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./Pagination-DX9kUoKl.js";import{i,n as a,t as o}from"./constants-Dj6vOzIh.js";import{n as s,t as c}from"./createStoryParameters-pz1UrWMe.js";import{n as l,t as u}from"./useCustomArgs-CrFDt-oX.js";var d,f,p,m,h=e((()=>{i(),s(),u(),n(),d=t(),f={title:`Navigation/Pagination`,component:r,parameters:c(`Pagination`,o,a),tags:[`Навигация`]},p={render:function(e){let[,t]=l(),n=e=>{t({currentPage:e})};return(0,d.jsx)(r,{...e,onChange:n})},args:{currentPage:1,boundaryCount:2,totalPages:25}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`]}));export{f as i,m as n,h as r,p as t};