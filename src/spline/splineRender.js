import React from 'react';
import * as THREE from 'three'
import { CanvasManager, SplineGroup, InitContext } from './splineAlgo'

export default class Render extends React.Component {
    componentDidMount() {
        this.handle = RunAll(this.props.colorGroup, this.props.elId)
        if(this.props.getImg !== undefined){
            this.props.getImg(this.handle.GetAllImgs())
            this.handle.SetListener(this.props.listener)
        }
        
    }
    render() {
        if(this.handle !== undefined) {
            this.handle.HandleTau(this.props.tau)
            this.handle.HandleGran(this.props.gran)
            this.handle.HandleImg(this.props.theimg)
            this.handle.HandleImgSpeed(this.props.imgSpeed)
            if(this.props.bifrost !== undefined) this.handle.EnableBifrost(this.props.bifrost)
            this.handle.ShowLinearSample(this.props.enable_param)
            this.handle.SelectImg(this.props.selectImg)
            this.handle.SelectSampler(this.props.selectSampler)
            this.handle.SetFlushColor(this.props.flushColor, this.props.flushAlpha)
            this.handle.SetListener(this.props.listener)
            if(this.props.cleanup === true) {
                this.handle.HandleCleanLines()
                this.props.oncleanupDone()
            }
        }
        return (
            <div>
            </div>
        );
    }
}


function RunAll(themeColor, el_id){
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias : true, alpha: true}); //powerPreference:'high-performance'
renderer.setPixelRatio(window.devicePixelRatio);
const frame = document.getElementById(el_id)
const canvas = new CanvasManager(frame, renderer.domElement);
const camera = new THREE.PerspectiveCamera(75, canvas.Aspect(), 0.1, 1000);
const defaultFlushColor = 0x8ac6d0
const defaultFlushAlpha = 0.0
renderer.setSize(canvas.w, canvas.h);
renderer.setClearColor(defaultFlushColor, defaultFlushAlpha);

camera.position.z = 5;

InitContext(canvas.glContext)

const planegeo = new THREE.PlaneGeometry( 1000, 1000, 10, 10 );
const planeMesh = new THREE.Mesh(planegeo, new THREE.MeshBasicMaterial());
const spline = new SplineGroup(scene, canvas, camera, planeMesh, themeColor)

window.addEventListener('resize', ()=>{
    canvas.onFrameResize()
    camera.aspect = canvas.Aspect()
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.w, canvas.h)
}, false)

function render() {
    requestAnimationFrame(render);
    spline.Render()
    renderer.render(scene, camera);
    
    spline.bifrost = !spline.is_handling_drag

}
render();

return {
    HandleTau: (n)=>{spline.tau = n},
    HandleGran: (n)=>{spline.gran = n },
    HandleImg: (b)=>{spline.run_img = b},
    HandleImgSpeed: (n)=>{spline.img_speed = n},
    EnableBifrost: (b)=>{spline.bifrost = b},
    HandleCleanLines: ()=>{ spline.Clear() },
    ShowLinearSample: (b)=>{ spline.showParam = b},
    GetAllImgs: ()=>{return spline.imgs},
    SelectImg: (i)=>{spline.selectImg=i},
    SelectSampler:(i)=>{spline.param_sampler=i},
    SetFlushColor: (flushColor, flushAlpha)=>{ renderer.setClearColor(flushColor || defaultFlushColor, flushAlpha || defaultFlushAlpha); },
    SetListener: (listen) => { spline.listener = listen  },
}

}