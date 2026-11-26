import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./RootComponent-CMGq-lF0.js";import{i as o,n as s,t as c}from"./constants-BWBR8eWE.js";import{n as l,t as u}from"./Group-BYaqcOTu.js";import{n as d,t as f}from"./Flex-C-g3JHZP.js";import{n as p,t as m}from"./CustomSelectOption-_Iauyu16.js";import{n as h,t as g}from"./Input-C0QwfGXJ.js";import{n as _,t as v}from"./FormItem--X1L6eoH.js";import{n as y,t as b}from"./Select-3P8N8BZC.js";import{n as x,t as S}from"./Slider-B9sVyeLz.js";import{_ as C,a as w,d as T,f as E,g as D,h as O,l as k,n as A,t as j,u as M,v as N}from"./interpolate-IUio_zg2.js";function P({size:e=24,params:t,...n}){return(0,F.jsx)(a,{Component:`svg`,width:e,height:e,...n,children:(0,F.jsx)(`path`,{d:N(k(t,e)),fill:`currentColor`})})}var F;function I(){return(I=t((()=>{i(),C(),w(),F=r();try{P.displayName=`Shape`,P.__docgenInfo={description:``,displayName:`Shape`,filePath:`/home/runner/work/VKUI/VKUI/packages/vkui/src/lib/material/shapes/Shape.tsx`,methods:[],props:{size:{defaultValue:{value:`24`},declarations:[{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`}],description:``,name:`size`,parent:{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`},required:!1,tags:{},type:{name:`number`}},params:{defaultValue:null,declarations:[{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`}],description:``,name:`params`,parent:{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`},required:!0,tags:{},type:{name:`ShapeParameters`}},ref:{defaultValue:null,declarations:[{fileName:`vkui/src/types.ts`,name:`HasRootRef`}],description:``,name:`ref`,parent:{fileName:`vkui/src/types.ts`,name:`HasRootRef`},required:!1,tags:{},type:{name:`Ref<SVGElement>`}},getRootRef:{defaultValue:null,declarations:[{fileName:`vkui/src/types.ts`,name:`HasGetRootRef`}],description:``,name:`getRootRef`,parent:{fileName:`vkui/src/types.ts`,name:`HasGetRootRef`},required:!1,tags:{},type:{name:`Ref<SVGElement>`}}},tags:{}}}catch{}})))()}function L(e){return(0,z.jsx)(b,{...e,before:(0,z.jsx)(P,{params:M[Number(e.value)],size:20}),placeholder:`Не выбран`,options:[...Array(M.length).keys()].map(e=>({label:T.get(M[e])||`Unknown`,value:e})),renderOption:({option:e,...t})=>(0,B.createElement)(m,{...t,key:String(e.value),before:(0,z.jsx)(P,{params:M[Number(e.value)]})})})}var R,z,B,V,H,U;function W(){return(W=t((()=>{R=e(n(),1),p(),d(),_(),l(),h(),y(),x(),o(),j(),C(),O(),I(),w(),z=r(),B=n(),V={title:`DevTools/lib/material/shapes`,tags:[`test`],component:()=>(0,z.jsx)(`div`,{}),parameters:{...c,...s,liveCodeEditor:{disabled:!0}}},H=()=>{let[e,t]=R.useState(152),[n,r]=R.useState(0),[i,a]=R.useState(5),[o,s]=R.useState(2),[c,l]=R.useState(1),[d,p]=R.useState(0),m=R.useMemo(()=>A(E(M[i],e),E(M[o],e),{maxSegmentLength:Math.min(10,Math.max(c,.01))||1}),[c,i,o,e]);return(0,z.jsx)(u,{children:(0,z.jsxs)(f,{children:[(0,z.jsxs)(`div`,{style:{width:224},children:[(0,z.jsx)(v,{top:`From`,children:(0,z.jsx)(L,{value:i.toString(),onChange:(e,t)=>a(Number(t))})}),(0,z.jsx)(v,{top:`To`,children:(0,z.jsx)(L,{value:o.toString(),onChange:(e,t)=>s(Number(t))})}),(0,z.jsx)(v,{top:`size`,children:(0,z.jsx)(g,{type:`number`,value:e,onChange:e=>t(Number(e.target.value)||38),step:1,min:0})}),(0,z.jsx)(v,{top:`maxSegmentLength`,children:(0,z.jsx)(g,{type:`number`,value:c,onChange:e=>l(Number(e.target.value)||1),min:.01,max:10})}),(0,z.jsx)(v,{top:`Angle`,bottom:d,children:(0,z.jsx)(S,{step:1,min:0,max:359,value:d,onChange:e=>p(e)})})]}),(0,z.jsxs)(f,{direction:`column`,justify:`space-around`,gap:32,align:`center`,style:{flex:1},children:[(0,z.jsx)(`svg`,{width:e,height:e,children:(0,z.jsx)(`path`,{d:N(D(m(n),e/2,e/2,d)),fill:`currentColor`})}),(0,z.jsx)(`div`,{style:{width:304},children:(0,z.jsx)(v,{top:`Progress`,bottom:n,children:(0,z.jsx)(S,{step:.05,min:0,max:1,value:n,onChange:e=>r(e)})})})]})]})})},U=[`MorphPlayground`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [size, setSize] = React.useState(38 * 4);
  const [progress, setProgress] = React.useState(0);
  const [shape1, setShape1] = React.useState(5);
  const [shape2, setShape2] = React.useState(2);
  const [maxSegmentLength, setMaxSegmentLength] = React.useState(1);
  const [angle, setAngle] = React.useState(0);
  const morph = React.useMemo(() => {
    return interpolate(shapes.shapeWithRotate(shapes.shapeList[shape1], size), shapes.shapeWithRotate(shapes.shapeList[shape2], size), {
      maxSegmentLength: Math.min(10, Math.max(maxSegmentLength, 0.01)) || 1
    });
  }, [maxSegmentLength, shape1, shape2, size]);
  return <Group>
      <Flex>
        <div style={{
        width: 224
      }}>
          <FormItem top="From">
            <SelectShape value={shape1.toString()} onChange={(_, value) => setShape1(Number(value))} />
          </FormItem>
          <FormItem top="To">
            <SelectShape value={shape2.toString()} onChange={(_, value) => setShape2(Number(value))} />
          </FormItem>
          <FormItem top="size">
            <Input type="number" value={size} onChange={e => setSize(Number(e.target.value) || 38)} step={1} min={0} />
          </FormItem>
          <FormItem top="maxSegmentLength">
            <Input type="number" value={maxSegmentLength} onChange={e => setMaxSegmentLength(Number(e.target.value) || 1)} min={0.01} max={10} />
          </FormItem>
          <FormItem top="Angle" bottom={angle}>
            <Slider step={1} min={0} max={359} value={angle} onChange={value => setAngle(value)} />
          </FormItem>
        </div>
        <Flex direction="column" justify="space-around" gap={32} align="center" style={{
        flex: 1
      }}>
          <svg width={size} height={size}>
            <path d={svgPathToString(transform.rotate(morph(progress), size / 2, size / 2, angle))} fill="currentColor" />
          </svg>
          <div style={{
          width: 38 * 8
        }}>
            <FormItem top="Progress" bottom={progress}>
              <Slider step={0.05} min={0} max={1} value={progress} onChange={value => setProgress(value)} />
            </FormItem>
          </div>
        </Flex>
      </Flex>
    </Group>;
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as MorphPlayground,U as __namedExportsOrder,V as default};