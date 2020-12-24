import React from 'react';
import Tooltip from '@material-ui/core/Tooltip'
import Link from '@material-ui/core/Link';
import {Props as SimpleIconProps, Icon as SimpleIcon} from '@icons-pack/react-simple-icons'
interface IntroEntryProps {
    title: string
    text?: string
    centerTitle?: boolean
    bottom?: boolean
  }
 export const IntroEntry : React.FC<IntroEntryProps> = (props) =>{
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
      fontSize: '70%',
      marginBottom: props.bottom ? '10px' : undefined,
    }
  
    return (
        <div style={style}>
            <p style={titleStyle}>{props.title}</p>
            <p>{props.text ? props.text : props.children}</p>
        </div>
    )
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
  
  export const createConcanicalPolygonPath = (n : number, size : number, radius : number, params?: ConcanicalPolygonPathParams) =>{
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

  interface IntroIconProps  extends SimpleIconProps {
    icon?: SimpleIcon,
    tooltip?: string,
    link?: string,
    // autoSize?: boolean
    // onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
  }
  
  export const IntroIcon : React.FC<IntroIconProps> = (props) =>{
    const propIcon = {
      ...props,
      icon: undefined,
      message: undefined,
      link: undefined
    }
    let icon = props.icon ? <props.icon {...propIcon} ></props.icon> : <div> {props.tooltip} </div>
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