import React from 'react';
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
  console.log(`cut: ${cut_percentage*100}%`)
  

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

interface CardLayoutProps {
    background: HTMLElement
    foreground: HTMLElement
}


const CardLayout: React.FC<CardLayoutProps> = (props) => {
  return (
  <div>

  </div>
  )
}

function App() {


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
      {/*<svg viewBox='0 0 120 100' width="200" height="200">
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
          <image href='static/img/me.jpg' x="-10" y="0" width="200" height="200"/>
          </pattern>
        </defs>
        <path d='M38,2 
                L82,2 
                A12,12 0 0,1 94,10 
                L112,44 
                A12,12 0 0,1 112,56
                L94,90       
                A12,12 0 0,1 82,98
                L38,98
                A12,12 0 0,1 26,90
                L8,56
                A12,12 0 0,1 8,44
                L26,10
                A12,12 0 0,1 38,2' fill="url(#img1)"/>
  </svg>*/}

      

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
      
      <Grid item xs={12} md={8} justify="center" alignItems="center" >
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
        <div className='project-item'>
          <img alt='photomonatage' className='project-bg' style={{bottom: -45}} src="static/img/photomontage.png" />
          <div className='project-content project-cover-dark-gradient-tl'>
            <div className='project-subtitle'>ZJU | Computational Photography | C++ | OpenCV</div>
            <h3 style={{color:'white'}}>Interactive Digital Photomontage</h3>
            <div className="vertical-space-1"></div>
            <p className="project-text project-lefttext">Users can paint on images to indicate the best part of each image. The algorithm first uses graph-cut to extend user's brushes into regions. Then it uses Gradient Domain Fusion to make it seamless.</p>
            <div className="vertical-space-1"></div>
            <p className="project-subtext project-lefttext">The background image demonstrates how gradient-domain fusion gradually recover the image from all 0s.</p>
            <a className='project-links' href="https://grail.cs.washington.edu/projects/photomontage/photomontage.pdf"> Paper <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Github <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Demo Video <br/></a>
          </div>
        </div>

        <div className='project-item'>
          
          <img alt='schroedinger smoke' className='project-bg' style={{bottom: -45}} src="static/img/schroedinger_smoke.png" />
          <div className='project-content'>
            <div className='project-subtitle'>ZJU | Advances in Computer Graphics | C# | Compute Shader</div>
            <h3 style={{color:'white'}}>Schrödinger's Smoke <span className="project-tagtext">Siggraph 16</span></h3>

            <div className="vertical-space-1"></div>
            <p className="project-text project-lefttext">
            Schrödinger's Equation in Quantum Mechanics can be used to describe superfluids, whose dynamics is similar to that of smoke. The paper leverages Schrödinger's Equation to calculate vortex and generates the velocity field from the wave function.
            </p>
            <div className="vertical-space-1"></div>
            <p className="project-subtext project-lefttext">The background image demonstrates simulating results with over 100,000,000 particles.</p>
            <a className='project-links' href="https://grail.cs.washington.edu/projects/photomontage/photomontage.pdf"> Paper <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Github <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Demo Video <br/></a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
