import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./RootComponent-C5ENZFut.js";import{n as o,t as s}from"./Flex-B8Cr5qNM.js";import{n as c,t as l}from"./Group-LwNPJiLD.js";import{_ as u,a as d,d as f,f as p,g as m,h,l as g,n as _,t as v,u as y,v as b}from"./interpolate-CF19KTfG.js";import{n as x,t as S}from"./FormItem-DNDkxS86.js";import{n as C,t as w}from"./Input-D9mLcf5V.js";import{n as T,t as E}from"./CustomSelectOption-B7G1omNG.js";import{n as D,t as O}from"./Slider-Cg37rzE5.js";import{n as k,t as A}from"./Select-nG_loXqu.js";import{i as j,n as M,t as N}from"./constants-cjed6ZWB.js";function P({size:e=24,params:t,...n}){return(0,F.jsx)(a,{Component:`svg`,width:e,height:e,...n,children:(0,F.jsx)(`path`,{d:b(g(t,e)),fill:`currentColor`})})}var F,I=e((()=>{i(),u(),d(),F=t(r(),1);try{P.displayName=`Shape`,P.__docgenInfo={description:``,displayName:`Shape`,filePath:`/home/runner/work/VKUI/VKUI/packages/vkui/src/lib/material/shapes/Shape.tsx`,methods:[],props:{size:{defaultValue:{value:`24`},declarations:[{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`}],description:``,name:`size`,parent:{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`},required:!1,tags:{},type:{name:`number`}},params:{defaultValue:null,declarations:[{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`}],description:``,name:`params`,parent:{fileName:`vkui/src/lib/material/shapes/Shape.tsx`,name:`ShapeProps`},required:!0,tags:{},type:{name:`ShapeParameters`}},getRootRef:{defaultValue:null,declarations:[{fileName:`vkui/src/types.ts`,name:`HasRootRef`}],description:``,name:`getRootRef`,parent:{fileName:`vkui/src/types.ts`,name:`HasRootRef`},required:!1,tags:{},type:{name:`Ref<SVGElement>`}}},tags:{}}}catch{}}));function L(e){return(0,z.jsx)(A,{...e,before:(0,z.jsx)(P,{params:y[Number(e.value)],size:20}),placeholder:`Не выбран`,options:[...Array(y.length).keys()].map(e=>({label:f.get(y[e])||`Unknown`,value:e})),renderOption:({option:e,...t})=>(0,B.createElement)(E,{...t,key:String(e.value),before:(0,z.jsx)(P,{params:y[Number(e.value)]})})})}var R,z,B,V,H,U;e((()=>{R=t(n(),1),T(),o(),x(),c(),C(),k(),D(),j(),v(),u(),h(),I(),d(),z=t(r(),1),B=t(n(),1),V={title:`DevTools/lib/material/shapes`,tags:[`test`],component:()=>(0,z.jsx)(`div`,{}),parameters:{...N,...M,liveCodeEditor:{disabled:!0}}},H=()=>{let[e,t]=R.useState(152),[n,r]=R.useState(0),[i,a]=R.useState(5),[o,c]=R.useState(2),[u,d]=R.useState(1),[f,h]=R.useState(0),g=R.useMemo(()=>_(p(y[i],e),p(y[o],e),{maxSegmentLength:Math.min(10,Math.max(u,.01))||1}),[u,i,o,e]);return(0,z.jsx)(l,{children:(0,z.jsxs)(s,{children:[(0,z.jsxs)(`div`,{style:{width:224},children:[(0,z.jsx)(S,{top:`From`,children:(0,z.jsx)(L,{value:i.toString(),onChange:(e,t)=>a(Number(t))})}),(0,z.jsx)(S,{top:`To`,children:(0,z.jsx)(L,{value:o.toString(),onChange:(e,t)=>c(Number(t))})}),(0,z.jsx)(S,{top:`size`,children:(0,z.jsx)(w,{type:`number`,value:e,onChange:e=>t(Number(e.target.value)||38),step:1,min:0})}),(0,z.jsx)(S,{top:`maxSegmentLength`,children:(0,z.jsx)(w,{type:`number`,value:u,onChange:e=>d(Number(e.target.value)||1),min:.01,max:10})}),(0,z.jsx)(S,{top:`Angle`,bottom:f,children:(0,z.jsx)(O,{step:1,min:0,max:359,value:f,onChange:e=>h(e)})})]}),(0,z.jsxs)(s,{direction:`column`,justify:`space-around`,gap:32,align:`center`,style:{flex:1},children:[(0,z.jsx)(`svg`,{width:e,height:e,children:(0,z.jsx)(`path`,{d:b(m(g(n),e/2,e/2,f)),fill:`currentColor`})}),(0,z.jsx)(`div`,{style:{width:304},children:(0,z.jsx)(S,{top:`Progress`,bottom:n,children:(0,z.jsx)(O,{step:.05,min:0,max:1,value:n,onChange:e=>r(e)})})})]})]})})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U=[`MorphPlayground`]}))();export{H as MorphPlayground,U as __namedExportsOrder,V as default};