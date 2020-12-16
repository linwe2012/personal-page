import React from 'react';
import Render from './spline/splineRender'
import { yellow as splineColor} from '@material-ui/core/colors'


const SplineView: React.FC = (props)=>{
    /*eslint-disable */

    const [spacing, setSpacing] = React.useState(2);
    const [tau, setTau] = React.useState(0.5)
    const [gran, setGran] = React.useState(20)
    const [img, setImg] = React.useState(false)
    const [imgSpeed, setImgSpeed] = React.useState(1.0)
    const [disableRest, setDisableRest] = React.useState(false)
    const [cleanup, setCleanup] = React.useState(false)
    const [param, setParam] = React.useState(false)
    const [imgArr, setImgArr] = React.useState([])
    const [whichImg, setWhichImg] = React.useState(0)
    const [whichSampler, setWhichSampler] = React.useState('linear')
    const [hint, setHint] = React.useState('Click in the box')
    const [nClicks, setNClicks] = React.useState(0)
    const [colorText, setColorText] = React.useState<any>({
        color: '#ffffff90',
        fontSize: '180%'
    })
    /*eslint-enable */
   
    const resetDone = () => {

    }

    const setImgsArr = () => {

    }

    const listen = (str: string) => {
        if(str === 'addDot') {
            if(nClicks <= 4) {
                setNClicks(nClicks + 1)
            }
            else {
                return;
            }
            

            if(nClicks === 0) {
                setHint('Click somewhere else in the Box')
                setColorText({
                    color: 'white',
                    fontSize: '120%'
                })
            }

            if(nClicks === 1) {
                setHint('Keep clicking somewhere else in the Box')
                setColorText({
                    color: 'white',
                    fontSize: '120%'
                })
            }


            if(nClicks === 3) {
                setHint('Try Drag the White Dots')
                setColorText({
                    color: 'white',
                    fontSize: '150%'
                })
            }

            if(nClicks === 4) {
                setHint('')
            }
            
        }
        
    }

    return (
        <div className='aspect-16-9'>
            <div className='aspect-inner' id="canvas-frame-spline">
                <div className='spline-click-info' style={colorText}>
                    {hint}
                </div>
            </div>
            <Render
                tau={tau} gran={gran} 
                theimg={img} imgSpeed={imgSpeed} 
                colorGroup={splineColor} 
                // bifrost={disableRest} 
                cleanup={cleanup} oncleanupDone={resetDone} 
                elId={"canvas-frame-spline"}
                enable_param={param}
                getImg={setImgsArr}
                selectImg={whichImg}
                selectSampler={whichSampler}
                listener = {listen}
                //flushColor={0x001948}
            >
            </Render>
            
        </div>
    )
}

export default SplineView;