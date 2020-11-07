import React, { useEffect, useLayoutEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { Github } from '@icons-pack/react-simple-icons';
import { Cplusplus, Javascript, Python, Props as SimpleIconProps, Mathworks, Icon as SimpleIcon, Opengl, Gmail } from '@icons-pack/react-simple-icons';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SplineView from './splineView'

interface IntroEntryProps {
  title: string
  text?: string
  centerTitle?: boolean
  
}
const IntroEntry : React.FC<IntroEntryProps> = (props) =>{
  const style : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    justifyContent: 'center'

  }
  const titleStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    color: '#00000044',
    letterSpacing: '0.2em',
    textAlign: props.centerTitle ? 'center' : undefined,
    fontSize: '70%'
  }

  return (
      <div style={style}>
          <p style={titleStyle}>{props.title}</p>
          <p>{props.text ? props.text : props.children}</p>
      </div>
  )
}

interface IntroIconProps  extends SimpleIconProps {
  icon: SimpleIcon,
  tooltip?: string,
  link?: string,
  // onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
}
class Vector2 {
  x: number = 0
  y: number = 0

  constructor(_x:number, _y:number) {
    this.x = _x;
    this.y = _y;
  }

  add(rhs:Vector2) {
    this.x += rhs.x;
    this.y += rhs.y;
    return this;
  }

  multiplyScalar(rhs:number) {
    this.x *= rhs;
    this.y *= rhs;
    return this;
  }

  sub(rhs: Vector2) {
    this.x -= rhs.x;
    this.y -= rhs.y;
    return this
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  svgfmt() {
    return `${this.x},${this.y}`
  }
}

interface ConcanicalPolygonPathParams {
  startAngle?: number // in degress
  startX?: number
  startY?: number
}

const createConcanicalPolygonPath = (n : number, size : number, radius : number, params?: ConcanicalPolygonPathParams) =>{
  //n = 4
  //size = 100
  //radius = 0
  const deg2rad = (n:number) =>{
    return n / 180 * Math.PI
  }
  const startAngle = deg2rad( params?.startAngle || 0 )
  const startX = params?.startX  || 0
  const startY = params?.startY  || 0
  const center = new Vector2(size/2 + startX, size/2 + startY)
  const r = size / 2
  
  const halfAngleDeg = 90 - 180 / n;
  //const arcAngleDeg = 180 - 2 * halfAngleDeg;
  const halfAngle = deg2rad(halfAngleDeg)
  //const arcAngle = deg2rad(arcAngleDeg)

  const cut = radius / Math.tan(halfAngle);
  const len = 2 * r * Math.cos(halfAngle)
  const cut_percentage = cut / len;
  //console.log(`cut: ${cut_percentage*100}%`)
  

  const vertices = new Array<Vector2>()
  let path = ""
  for(let i = 0; i < n; ++i) {
    const angle = startAngle-2 * Math.PI / n  * i
    const pos = new Vector2(r * Math.cos(angle), r * Math.sin(angle))
    const vertex = pos.add(center)
    vertices.push(vertex)
  }

  //const lastArcStop = null
  
  for(let i = 0; i < n; ++i) {
    const A = vertices[(i + 0) % n]
    const B = vertices[(i + 1) % n]
    //const C = vertices[(i + 2) % n]

    const AB = A.clone().add(B.clone().sub(A).multiplyScalar(cut_percentage))
    const BC = A.clone().add(B.clone().sub(A).multiplyScalar(1-cut_percentage))
    //const BC = B.clone().add(C.clone().sub(B).multiplyScalar(cut_percentage))
    if (i === 0) {
      const Q = vertices[(n-1)];
      const QA = Q.clone().add(A.clone().sub(Q).multiplyScalar(1-cut_percentage))
      path += `M ${QA.svgfmt()} `
    }
    
    //path += `L ${B.svgfmt()} `
    path += `A ${radius} ${radius} 0 0 0 ${AB.x} ${AB.y} `
    path += `L ${BC.svgfmt()} `
  }
  return path
}

const IntroIcon : React.FC<IntroIconProps> = (props) =>{
  const propIcon = {
    ...props,
    icon: undefined,
    message: undefined,
    link: undefined,
    
  }
  let icon = <props.icon {...propIcon} ></props.icon>
  if(props.link) {
    icon = (<Link href={props.link}>
      {icon}
    </Link>)
  }

  if(props.tooltip) {
    icon =  (
    <Tooltip title={props.tooltip} aria-label={props.tooltip}>
      {icon}
    </Tooltip>)
  }
  return (icon)
}
/*
interface CardLayoutProps {
    background: JSX.Element
    foreground: JSX.Element

    windowWidth: number
    windowHeight: number
}


const CardLayout: React.FC<CardLayoutProps> = (props) => {
  const outerDiv = useRef<HTMLDivElement|null>(null)
  
  props.background.setAttribute('width', props.windowWidth.toString())
  props.foreground.setAttribute('width', props.windowWidth.toString())

  const maxHeight = Math.max(props.background.clientHeight, props.foreground.clientHeight)

  return (
  <div ref={outerDiv} style={{height: maxHeight}}>
    {props.background}
    {props.foreground}
  </div>
  )
}
*/



function App() {

  // const [size, setSize] = useState([0, 0]);
  //const [projectImageRefs, setProjectImageRefs]  =  useState(new Array<HTMLElement>()) 
  //const [projectContentRefs, setProjectContentRefs] = useState(new Array<HTMLElement>())
  //const [projectItemRefs, setProjectItemRefs] = useState(new Array<HTMLElement>())
  const projectImageRefs = new Array<HTMLElement>()
  const projectContentRefs = new Array<HTMLElement>()
  const projectItemRefs = new Array<HTMLElement>()
  const projectContentInner = new Array<HTMLElement>()

  const refProjContentInner = (i: number) => {
    return (instance: HTMLElement | null) =>{
      if (!instance ) return;
      //const r = [...projectImageRefs]
      projectContentInner[i] = instance
      //setProjectImageRefs(r)
    }
  }

  const refProjIm = (i: number)=>{
    return (instance: HTMLElement | null) =>{
      if (!instance ) return;
      //const r = [...projectImageRefs]
      projectImageRefs[i] = instance
      //setProjectImageRefs(r)
    }
  }

  const refProjContent = (i: number)=>{
    return (instance: HTMLElement | null) =>{
      if (!instance ) return;
      // const r = [...projectContentRefs]
      projectContentRefs[i] = instance
      // setProjectContentRefs(r)
    }
  }

  const refProjItem = (i: number)=>{
    return (instance: HTMLElement | null) =>{
      if (!instance ) return;
      // const r = [...projectItemRefs]
      projectItemRefs[i] = instance
      // setProjectItemRefs(r)
    }
  }

  function updateSize() {
    //setSize([window.innerWidth, window.innerHeight]);
    for(let projKey in projectImageRefs) {
      const im = projectImageRefs[projKey]
      //const content = projectContentRefs[projKey]
      const innerContent = projectContentInner[projKey]
      const hIm = im.clientHeight
      const hContent = innerContent.clientHeight;
      const h = Math.max(hIm, hContent)
      const hItem = Math.max(hIm, hContent + 40)
      projectItemRefs[projKey].style.height = hItem.toString() + 'px' //.setAttribute('height', h.toString() + 'px')
      projectContentRefs[projKey].style.height = h.toString() + 'px'
    }
  }
  
  useEffect(() => {
    updateSize();
    window.onload = updateSize;
    //updateSize();
    // eslint-disable-next-line
  }, [])
  useLayoutEffect(() => {
    
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
    // eslint-disable-next-line
  }, []);
  
  const introIconStyle : SimpleIconProps = {
    size: 24,
    style: {
      // marginLeft: 5,
      marginRight: 10,
      
    },
    
  }
  const selfIntroStyle : React.CSSProperties = {
    paddingLeft: 20,
    paddingRight: 20
  }
  const [gmailEl, setGmailEl] = React.useState<null | SVGElement>(null);
  const handleGmailClick = (event: React.MouseEvent<SVGElement>) => {
    setGmailEl(event.currentTarget);
  };
  

  const handleGmailClose = (cmd?:string) => {
    if (cmd) {
      if (cmd === 'copy') {
        navigator.clipboard.writeText('leon.linzw@gmail.com')
      }
      else if(cmd === 'mail') {
        window.open('mailto:leon.linzw@gmail.com');
      }
    }
    
    setGmailEl(null);
  };

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700" rel="stylesheet"></link>
      <Grid container style={selfIntroStyle} alignItems='flex-start'>
        <div className="vertical-space-2"></div>
        <Grid item xs={12} md={4}>
          <Grid container>
            <Grid item xs={12}>
              <div className="avatar-center-align">
                <div className="avatar-circle" style={{position: 'relative'}}>
                  {/* <div className="avatar-wrapper"> */}
                  { /* <img alt='leon' className='avatar-img' src='static/img/me.jpg'></img> */ }
                  <svg viewBox='0, 0 240 240' width="240" height="240" style={{position: 'absolute', top: -10, left: -10}}>
                    <path d={createConcanicalPolygonPath(16, 240, 15, { startAngle: 30})} fill="#e5f290da"/>
                  </svg>

                  <svg viewBox='0, 0 230 230' width="230" height="230" style={{position: 'absolute', top: -6, left: -6}}>
                    <path d={createConcanicalPolygonPath(10, 230, 15, { startAngle: 30})} fill="#eef7bb"/>
                  </svg>

                  <svg viewBox='0, 0 220 220' width="220" height="220" style={{position: 'absolute', top: 0, left: 0}}>
                    <path d={createConcanicalPolygonPath(6, 220, 15, { startAngle: 15})} fill="#f8fce3"/>
                  </svg>
                  
                  <svg viewBox='0 0 200 200' width="200" height="200" style={{position: 'relative'}}>
                    <defs>
                      <pattern id="avatar" patternUnits="userSpaceOnUse" width="200" height="200">
                      <image href='static/img/me.jpg' x="-110" y="-80" width="400" height="400"/>
                      </pattern>
                    </defs>
                    <path d={createConcanicalPolygonPath(6, 200, 15)} fill="url(#avatar)"/>
                  </svg>
                  {/* </div> */}
                </div>
              </div>
            </Grid>
            
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={5} md={12} lg={5}> 
                  <div className="vertical-space-2"></div>
                  <IntroEntry title='Contacts'>
                    <IntroIcon icon={Github} color="#181717" {...introIconStyle} tooltip="Github" link="https://github.com/linwe2012"/>
                    <IntroIcon  aria-controls="menu-gmail" aria-haspopup="true" icon={Gmail} color="#D14836" onClick={handleGmailClick} {...{...introIconStyle, ...{style:{cursor:'pointer'}}}} tooltip="Gmail"/>
                    <Menu
                      id="menu-gmail"
                      anchorEl={gmailEl}
                      keepMounted
                      open={Boolean(gmailEl)}
                      onClose={()=>{handleGmailClose()}}
                    >
                      <p className='gmail-text'>leon.linzw@gmail.com</p>
                      <MenuItem onClick={()=>{handleGmailClose('copy')}}>Copy Address</MenuItem>
                      <MenuItem onClick={()=>{handleGmailClose('mail')}}>Send Mail</MenuItem>
                    </Menu>
                  </IntroEntry>
                </Grid>
                <Grid item xs={12} sm={7} md={12} lg={7}>
                  <div className="vertical-space-2"></div>
                  <IntroEntry title='Proficiency'>
                    <IntroIcon icon={Cplusplus} color="#00599C" {...introIconStyle} tooltip="C/C++"/>
                    <IntroIcon icon={Python} color="#3776AB" {...introIconStyle} tooltip="Python"/>
                    <IntroIcon icon={Javascript} color="#F7DF1E" {...introIconStyle} tooltip="Javascript/Typescript"/>
                    <IntroIcon icon={Mathworks} color="#0076A8" {...introIconStyle} tooltip="Matlab"/>
                    <IntroIcon icon={Opengl} color="#5586A48" {...introIconStyle} tooltip="OpenGL"/>
                  </IntroEntry>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
      <Grid item xs={12} md={8}>
        <div className="vertical-space-2"></div>
        <h1 style = {{margin: 0}}>Zhaowei Lin</h1>
        <h3 style = {{ marginBottom: 10 }}>Student, Programmer in Hangzhou</h3>

        <p>
          I'm a senior colledge student. I love to create cool stuffs. 

          I currently intern at Bytedance, working to improve the sdk that empowers Tiktok, Spicy, Douyin and much more.
        </p>
        <div className="vertical-space-3"></div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={6}> <IntroEntry title='Education' text='Zhejiang Unviersity'></IntroEntry> </Grid>
          <Grid item xs={6}> <IntroEntry title='Major' text='Digital Media Tech (Dept. of CS)'></IntroEntry> </Grid>
        </Grid>
      </Grid>

      
      </Grid>


      <div>
        <h2 className='project-start-title'>Projects</h2>
        <div className='vertical-space-2'></div>
        <div className='project-item' ref={refProjItem(0)}>
          <img alt='photomonatage' className='project-bg' style={{bottom: 0}} src="static/img/photomontage.png" ref={refProjIm(0)}/>
          <div className='project-content project-cover-dark-gradient-tl' ref={refProjContent(0)}>
          <div ref={refProjContentInner(0)}>
            <div className='project-subtitle'>ZJU | Computational Photography | C++ | OpenCV</div>
            <h3 style={{color:'white'}}>Interactive Digital Photomontage</h3>
            <div className="vertical-space-1"></div>
            <p className="project-text project-lefttext">Users can paint on images to indicate the best part of each image. The algorithm first uses graph-cut to extend user's brushes into regions. Then it uses Gradient Domain Fusion to make it seamless.</p>
            <div className="vertical-space-1"></div>
            <p className="project-subtext project-lefttext">The background image demonstrates how gradient-domain fusion gradually recover the image from all 0s.</p>
            <a className='project-links' href="https://grail.cs.washington.edu/projects/photomontage/photomontage.pdf"> Paper <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Github <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Demo Video <br/></a>
            <div className="vertical-space-7"></div>
          </div>
          </div>
        </div>

        
        <div className='project-item' style={{backgroundColor: '#222020'}} ref={refProjItem(1)}>
          <img alt='schroedinger smoke' className='project-bg' style={{bottom: 0}} src="static/img/schroedinger_smoke.png" ref={refProjIm(1)}/>
          <div className='project-content' ref={refProjContent(1)}>
          <div ref={refProjContentInner(1)}>
            <div className='project-subtitle'>ZJU | Advances in Computer Graphics | C# | Compute Shader</div>
            <h3 style={{color:'white'}}>Schrödinger's Smoke <span className="project-tagtext">Siggraph 16</span></h3>

            <div className="vertical-space-1"></div>
            <p className="project-text project-lefttext">
            I implements the paper in Unity and accelerate it with Computer Shader, which runs faster than original paper. </p>
            <p className="project-text project-lefttext">Schrödinger's Equation in Quantum Mechanics can be used to describe superfluids, whose dynamics is similar to that of smoke. The paper leverages Schrödinger's Equation to calculate vortex and generates the velocity field from the wave function.
            </p>
            <div className="vertical-space-1"></div>
            <p className="project-subtext project-lefttext">The background image demonstrates simulating results with over 100,000,000 particles.</p>
            <a className='project-links' href="http://page.math.tu-berlin.de/~chern/projects/SchrodingersSmoke/"> Paper <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/ShroedingerSmoke">Github <br/></a>
            <div className="vertical-space-7"></div>
          </div>
          </div>
        </div>

        <div className='project-item gradient-spline'>
          <div className='project-content' style={{position: 'relative'}}>
            <div className='project-subtitle'>ZJU | Computer Animations | Typescript | WebGL</div>
            <h3 style={{color:'white'}}>Splines, FFD, FuzzyWarp</h3>
            <p className="project-text">
              All three projects are written in typescript and you can play with it online.
            </p>
            <p>
              <span className="project-text project-text-white"> Spline: </span>
              <a className='project-links' href="https://github.com/linwe2012/Spline">Github</a> <span>  </span>
              <a className='project-links' href="https://linwe2012.github.io/Spline/"> Demo </a>
            </p>
            <p>
              <span className="project-text project-text-white"> Free Form Deformation: </span>
              <a className='project-links' href="https://github.com/linwe2012/FreeFormDeformation">Github</a> <span>  </span>
              <a className='project-links' href="https://linwe2012.github.io/FreeFormDeformation/"> Demo </a>
            </p>
            <p>
              <span className="project-text project-text-white"> Fuzzy Warp: </span>
              <a className='project-links' href="https://github.com/linwe2012/FuzzyWarp">Github</a> <span>  </span>
              <a className='project-links' href="https://linwe2012.github.io/FuzzyWarp/"> Demo </a>
            </p>
            <div className="vertical-space-1"></div>
            <SplineView></SplineView>
          </div>
          
        
        </div>
        
        <div className='project-item' style={{backgroundColor: '#88b8ca' }} ref={refProjItem(2)}>
          <img alt='schroedinger smoke' className='project-bg' style={{bottom: -45}} src="static/img/animal_party.png" ref={refProjIm(2)}/>
          <div className='project-content' ref={refProjContent(2)}>
          <div ref={refProjContentInner(2)}>
            <div className='project-subtitle'>ZJU | Game Design | C# | Joycon</div>
            <h3 style={{color:'white'}}>Animal Party</h3>

            <div className="vertical-space-1"></div>
            <div className='project-lefttext' style={{backgroundColor: '#00000055', marginLeft: -40, paddingLeft: 40, paddingTop: 20, paddingRight: 20, paddingBottom: 20}}>
              <p className="project-text  project-text-white">
              I led my team made this game where Joycon &amp; body movements are used to play. The game is about taking care of animals. You can feed and pet animals in the game.  

              </p>
              <p className="project-text  project-text-white">
                There are five missions and a tutorial in the game.
              </p>

              <div className="vertical-space-1"></div>
              <p className="project-subtext">The background image is the intro scene.</p>
              
              <a className='project-links' href="https://github.com/linwe2012/AnimalParty">Github <br/></a>
              <a className='project-links' href="https://youtu.be/5kacuvv1os8"> Demo Video <br/></a>
            </div>
            <div className="vertical-space-5"></div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
