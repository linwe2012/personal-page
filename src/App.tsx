import React, { useEffect, useLayoutEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import { Blogger, Csharp, Github, Typescript } from '@icons-pack/react-simple-icons';
import { Cplusplus, Python, Props as SimpleIconProps, Mathworks, Opengl, Gmail } from '@icons-pack/react-simple-icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SplineView from './splineView'

import PrettyTitle from './bits/pretty_title'
import PristineLinks from './bits/pristine_links'
import { IntroEntry, IntroIcon, createConcanicalPolygonPath } from './bits/svg_utils'
import process from "process";

const development: boolean = (!process.env.NODE_ENV || process.env.NODE_ENV !== 'development');
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
    document.title = 'Zhaowei Lin'
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
                      {/* <image href='static/img/me.jpg' x="-110" y="-80" width="400" height="400"/> */}
                      <image href='static/img/me-removebg-preview-sqr.svg' width="200" height="200"/>
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
                  <IntroEntry title='Infos' bottom>
                    <IntroIcon icon={Blogger} color="#181717" {...introIconStyle} tooltip="Blog" link="https://leon-can-write.github.io/hexo-blogs/"/>
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
                  <IntroEntry title='Proficiency' bottom>
                    <IntroIcon icon={Cplusplus} color="#00599C" {...introIconStyle} tooltip="C/C++"/>
                    <IntroIcon icon={Python} color="#3776AB" {...introIconStyle} tooltip="Python"/>
                    <IntroIcon icon={Typescript} color="#3178C6" {...introIconStyle} tooltip="Javascript/Typescript"/>
                    <IntroIcon icon={Mathworks} color="#0076A8" {...introIconStyle} tooltip="Matlab"/>
                    <IntroIcon icon={Csharp} color="#239120" {...introIconStyle} tooltip="C#/Unity"/>
                    <IntroIcon icon={Opengl} color="#5586A4" {...introIconStyle} tooltip="OpenGL"/>
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
          I'm a senior college student. I love to create cool stuffs. 

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
        <div className='project-item' style={{background: 'black'}} ref={refProjItem(0)}>
          <img onLoad={updateSize} alt='photomonatage' className='project-bg' style={{bottom: 0}} src="static/img/photomontage-crunch.png" ref={refProjIm(0)}/>
          <div className='project-content project-cover-dark-gradient-tl' ref={refProjContent(0)}>
          <div ref={refProjContentInner(0)}>
            
            <PrettyTitle
              subtitle = 'ZJU | Computational Photography | C++ | OpenCV'
              title = 'Interactive Digital Photomontage' titleUnderline
              themeColor = '#00fddb'
            ></PrettyTitle>
            
            
            <div className="vertical-space-1"></div>
            <p className="project-text project-lefttext">Users can paint on images to indicate the best part of each image. The algorithm first uses graph-cut to extend user's brushes into regions. Then it uses Gradient Domain Fusion to make it seamless.</p>
            <div className="vertical-space-1"></div>
            <p className="project-subtext project-lefttext">[Background Image] How gradient-domain fusion gradually recover the image from all 0s.</p>
            <a className='project-links' href="https://grail.cs.washington.edu/projects/photomontage/photomontage.pdf"> Paper <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Github <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/CourseComputationalPhotography">Demo Video <br/></a>
            <div className="vertical-space-7"></div>
          </div>
          </div>
        </div>

        
        <div className='project-item' style={{backgroundColor: '#222020'}} ref={refProjItem(1)}>
          <img onLoad={updateSize} alt='schroedinger smoke' className='project-bg' style={{bottom: 0}} src="static/img/schroedinger_smoke.png" ref={refProjIm(1)}/>
          <div className='project-content' ref={refProjContent(1)}>
          <div ref={refProjContentInner(1)}>
            <div className='project-subtitle'>ZJU | Advances in Computer Graphics | C# | Compute Shader</div>
            <h3 style={{color:'white'}}>Schrödinger's Smoke <span className="project-tagtext">Siggraph 16</span></h3>

            <div className="vertical-space-1"></div>
            <p className="project-text project-lefttext">
            I implement the paper in Unity and accelerate it with Computer Shader, which runs faster than original paper. </p>
            <p className="project-text project-lefttext">Schrödinger's Equation in Quantum Mechanics can be used to describe superfluids, whose dynamics is similar to that of smoke. The paper leverages Schrödinger's Equation to calculate vortex and generates the velocity field from the wave function.
            </p>
            <div className="vertical-space-1"></div>
            <p className="project-subtext project-lefttext">[Background Image] Simulate 256<sup>3</sup> Grids and present results with over 100,000,000 particles.</p>
            <a className='project-links' href="http://page.math.tu-berlin.de/~chern/projects/SchrodingersSmoke/"> Paper <br/></a>
            <a className='project-links' href="https://github.com/linwe2012/ShroedingerSmoke">Github <br/></a>
            <div className="vertical-space-7"></div>
          </div>
          </div>
        </div>

        <div className='project-item gradient-spline'>
          <div className='project-content' style={{position: 'relative'}}>
          <PrettyTitle
              subtitle = 'ZJU | Computer Animations | Typescript | WebGL'
              title = 'Splines, FFD, FuzzyWarp'
              themeColor = '#4776f8'
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <p className="project-text">
              All three projects are written in typescript and you can play with it online.
            </p>
            <p>
              <span className="project-text project-text-white"> Spline: </span> <span> &nbsp;</span>
              <a className='project-links' href="https://github.com/linwe2012/Spline">Github</a> <span> </span>
              <a className='project-links' href="https://linwe2012.github.io/Spline/"> Play Online Demo </a>
            </p>
            <p>
              <span className="project-text project-text-white"> Free Form Deformation: </span> <span> &nbsp;</span>
              <a className='project-links' href="https://github.com/linwe2012/FreeFormDeformation">Github</a> <span> </span>
              <a className='project-links' href="https://linwe2012.github.io/FreeFormDeformation/"> Play Online Demo </a>
            </p>
            <p>
              <span className="project-text project-text-white"> Fuzzy Warp: </span> <span> &nbsp;</span>
              <a className='project-links' href="https://github.com/linwe2012/FuzzyWarp">Github</a> <span> </span>
              <a className='project-links' href="https://linwe2012.github.io/FuzzyWarp/"> Play Online Demo </a>
            </p>
            <div className="vertical-space-1"></div>
            <SplineView></SplineView>
          </div>
        </div>
        
        <div className='project-item' style={{backgroundColor: '#88b8ca' }} ref={refProjItem(2)}>
          <img onLoad={updateSize} alt='schroedinger smoke' className='project-bg' style={{bottom: -45}} src="static/img/animal_party-crunch.png" ref={refProjIm(2)}/>
          <div className='project-content' ref={refProjContent(2)}>
          <div ref={refProjContentInner(2)}>
            <div className='project-subtitle'>ZJU | Game Design | C# | Joycon</div>
            <h3 style={{color:'white'}}>Animal Party</h3>

            <div className="vertical-space-3"></div>
            <div className='project-lefttext' style={{backgroundColor: '#00000085', marginLeft: -40, paddingLeft: 40, paddingTop: 20, paddingRight: 20, paddingBottom: 20}}>
              <div style={{position:'absolute', right: 0, top: -12, width: '60%', height: 20, background:'#ff3c28', lineHeight:'17px', color:'white'}}><span style={{fontWeight:800, marginLeft: '5px'}}>&ndash;</span></div>
              <div style={{position:'absolute', left: 0, bottom: -12, width: '60%', height: 20, background:'#0ab9e5', lineHeight:'17px', color:'white', textAlign: 'right'}}><span style={{fontWeight:800, marginRight: '10px'}}>+</span></div>
              <div className="vertical-space-1"></div>
              <p className="project-text  project-text-white">
              I led my team made this game where Joycon &amp; body movements were used to play. The game is about taking care of animals. You can feed and pet animals in the game.  

              </p>
              <p className="project-text  project-text-white">
                There are five missions and a tutorial in the game.
              </p>

              <div className="vertical-space-1"></div>
              <p className="project-subtext">[Background Image] The intro scene.</p>
              
              <a className='project-links' href="https://github.com/linwe2012/AnimalParty">Github <br/></a>
              <a className='project-links' href="https://youtu.be/5kacuvv1os8"> Demo Video <br/></a>
              <div className="vertical-space-1"></div>
            </div>
            <div className="vertical-space-5"></div>
          </div>
          </div>
        </div>
        <div className='project-item' style={{backgroundColor: '#1f282d' }} ref={refProjItem(4)}>
          <img onLoad={updateSize} alt='schroedinger smoke' className='project-bg' style={{bottom: -45}} src="static/img/wordgame-render-2-comp.png" ref={refProjIm(4)}/>
          <div className='project-content' ref={refProjContent(4)}>
          <div ref={refProjContentInner(4)}>
            <div className='project-subtitle'>ZJU | Tech &amp; Innovations | C++ | Sifteo Cubes </div>
            <h3 style={{color:'white'}}>Fight against Alzheimer's disease with Sifteo Cubes</h3>

            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text  project-text-white project-text-shadow">
              My team surveyed possible ways to fight against Alzheimer's disease (AD). Sound &amp; light stimulations will be helpful according our research.
              </p>
              <p className="project-text project-text-white project-text-shadow">
              We want something like legos but more versatile, and then comes Sifteo Cube. We attached a flashing butt to the cube to enable light simulations.
              </p>
              <p className="project-text project-text-white project-text-shadow">
              I wrote two games, the dyer game where players mix dyers of different colors to obtain designated color, and the word jigsaw puzzle game
              </p>

              <div className="vertical-space-1"></div>
              <p className="project-subtext">[Background Image] A rendering of the cubes.</p>
              
              <a className='project-links' href="https://github.com/linwe2012/SifteoGames">Github <br/></a>
            </div>
            <div className="vertical-space-5"></div>
          </div>
          </div>
        </div>
        <div className='project-item' style={{backgroundColor: '#657387' }} ref={refProjItem(5)}>
          <img onLoad={updateSize} alt='schroedinger smoke' className='project-bg' style={{bottom: 0}} src="static/img/hdr-sm-optim.png" ref={refProjIm(5)}/>
          <div className='project-content' ref={refProjContent(5)}>
          <div ref={refProjContentInner(5)}>
            <PrettyTitle
              subtitle = 'ZJU | Digital Sinal Processing | Matlab'
              title = 'HDR, "JPEG"'
              themeColor = '#4776f8' hideLeftRect
            ></PrettyTitle>

            <div className="vertical-space-1"></div>
            <div className='project-lefttext' style={{backgroundColor: '#904706a5', marginLeft: -40, paddingLeft: 40, paddingTop: 20, paddingRight: 20, paddingBottom: 20}}>
              <p className="project-text  project-text-white">
              Best course ever. I learned how FFT, DCT works and I implenent the JPEG compression procedure, creating my own compressor and viewer.
              </p>
              <p className="project-text project-text-white">
              As my final project, I fused several images to make a hdr image. In the backgound, images in the hexagon are over exposed or under exposed. I devised an alorithm that extracts best part in images of different exposure.
              </p>

              <div className="vertical-space-1"></div>
              
              <a className='project-links' href="https://github.com/linwe2012/CourseDigitalSignalProcessing/">Github <br/></a>
            </div>
            <div className="vertical-space-5"></div>
          </div>
          </div>
        </div>
        

        <div className="vertical-space-3"></div>
        <div className="vertical-space-3"></div>
        <div className='project-item'>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'ZJU | Computer Graphics | C++ | OpenGL'
              title = 'Render Engine'
              themeColor = '#fc5c7d'
              titleBoxClass = 'project-title-nabla'
              leftBoxClass = 'project-leftbox-nabla'
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
                It supports Physically Based Rendering, deferred lights. With the help of ImGUI, it allows for editing lights, loading models and modifying textures.
              </p>
              <p className="project-text project-text-darktext">
                It adopts Entity Component System (ECS) architecture. In the engine, an entity if a number used for indexing components.
              </p>
              <p className="project-text project-text-darktext">
                Hashmaps tailored for sparse &amp; dense components are implemented.
              </p>
              <PristineLinks 
                github = "https://github.com/linwe2012/nabla"
                lightBackground
              />
            </div>
          </div>
        </div>

        <div className='project-item' style={{marginTop: '45px'}}>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'ZJU | Database | C++'
              title = 'Mini SQL Engine'
              themeColor = '#105858'
              textColor = 'black'
              titleClass = 'underline--stars'
              hideLeftRect lightBackground
            ></PrettyTitle>
            
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
                It supports insert, delete and search. All data are stored in a paged file. 
              </p>

              <PristineLinks 
                github = "https://github.com/linwe2012/miniSQL"
                lightBackground
              />
            </div>
          </div>
        </div>

        <div className="vertical-space-3"></div>
        <div className='project-item'>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'ZJU | Compilers | C | LLVM'
              title = 'C Compiler written in C' titleUnderline
              themeColor = '#991100'
              textColor = 'black'
              hideLeftRect lightBackground
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
                Input files are tokenized by Flex, then feed to Yacc for a LALR parsing. During Yacc's parsing, an Abstract Syntax Tree (AST) is generated. 
                AST is scanned to do type checking and to generate targe code with the help of LLVM.
              </p>
              <PristineLinks 
                github = "https://github.com/linwe2012/compiler"
                lightBackground
              />
            </div>
          </div>
        </div>

        <div className="vertical-space-3"></div>
        <div className='project-item'>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'ZJU | Image Processing | C/C++ '
              title = 'Image Processing Library'
              themeColor = 'linear-gradient(90deg, rgba(4,248,249,1) 0%, rgba(143,254,102,1) 100%)'
              textColor = 'black'
              lightBackground
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
              It allows read/write images. It also supports HDR, histogram equalization, Otsu thresholding, color space transformation, bilateral filter, etc.
              </p>

              <PristineLinks 
                github = "https://github.com/linwe2012/ImageConvert"
                lightBackground
              />
            </div>
          </div>
        </div>

        <div className="vertical-space-3"></div>
        <div className='project-item'>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'ZJU | Networks | C/C++ '
              title = 'Simple HTTP Server'
              themeColor = '#989081'
              textColor = 'black'
              hideLeftRect lightBackground
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
                A simple HTTP Server that provides Node.js like APIs.
              </p>

              <PristineLinks 
                github = "https://github.com/linwe2012/HTTPServer"
                lightBackground
              />
            </div>
          </div>
        </div>

        <div className="vertical-space-3"></div>
        <div className='project-item'>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'NESA Lab | Formal Verification | Tamarin Prover | VS Code '
              title = 'Tamarin Prover VS Code Language Plugin'
              themeColor = '#989081'
              textColor = 'black'
              hideLeftRect lightBackground
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
                Tamarin prover is a formal verification tool. It only provides syntax highlighting &amp; snippets for vim, sublime. I bring that to VS Code as it is free and more commonly used.
              </p>

              <PristineLinks 
                github = "https://github.com/linwe2012/tamarin"
                lightBackground
              />
            </div>
          </div>
        </div>

        <div className="vertical-space-3"></div>
        <div className='project-item'>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'ZJU | Object Oriented Programming | C++'
              title = 'Script Interpreter for Text-base Games'
              themeColor = '#989081'
              textColor = 'black'
              hideLeftRect lightBackground
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
              I made up a scripting language that assimilates Javascript. It is tailored for text-based games. It parses the script and builds an AST. Then it just interpreting the script by walking through AST. It's worth noting that it provides a quite powerful string formatter.
              </p>

              <p className="project-text project-text-darktext">
              It is assumed that text-game would have different rooms connected to each other. The author must first sketch the topology of the room in the script. Then the author sets triggers for user input or NPC.
              </p>

              <PristineLinks 
                github = "https://github.com/linwe2012/CrappyScriptEngine"
                lightBackground
              />
            </div>
          </div>
        </div>


        <div className="vertical-space-3"></div>
        <div className='project-item'>
          <div className='project-content-text'>
            <PrettyTitle
              subtitle = 'ZJU | Assembly | Intel i386 (16bits asm)'
              title = 'Assembly: Read file, Calculator &amp; Keyboard Reader'
              themeColor = '#989081'
              textColor = 'black'
              hideLeftRect lightBackground
            ></PrettyTitle>
            <div className="vertical-space-1"></div>
            <div className='project-lefttext'>
              <p className="project-text project-text-darktext">
                Those are 16bits assembly code.
              </p>
              <p className="project-text project-text-darktext">
              The file reader will open up a file, displaying both raw Hex and ASCII. It supports moving up/down, and page up/down, and jump to beginning or end. Most importantly, it was only 253 lines of assembly code.
              </p>

              <p className="project-text project-text-darktext">
                The calcuator does as sound. It only accept a simple expression with one binary operator.
              </p>

              <PristineLinks 
                github = "https://github.com/linwe2012/AssemblyLearning"
                lightBackground
              />
            </div>
          </div>
        </div>

        <div className="vertical-space-3"></div>
        {
          development ? 
            <div> Data collection Disabled </div>
            : <a href="https://info.flagcounter.com/a8vl"><img src="https://s01.flagcounter.com/count2/a8vl/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" /></a>
        }
        
      </div>
    </div>
  );
}

export default App;
