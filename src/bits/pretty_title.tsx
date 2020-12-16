import React from 'react';

interface PrettyTitleProps {
    subtitle: string
    title: string
    tags?: string[]
    themeColor: string
    titleUnderline?: boolean
    textColor?: string
    hideLeftRect?: boolean
    lightBackground?: boolean // is background light? if it is, use black text
    titleClass?: string
    prefix?: React.ReactElement
    rawStyles?: {
      title?: React.CSSProperties
    }
    titleBoxClass?: string
    leftBoxClass?: string
  }
  
  const PrettyTitle: React.FC<PrettyTitleProps> = (props) => {
    let titleStyle:React.CSSProperties = {
      color:'white'
    }
    if (props.titleUnderline) {
      titleStyle.textDecoration = `underline ${props.themeColor}`
    }
    if(props.textColor) {
      titleStyle.color = props.textColor
    }
  
    let subtitleClass = 'project-subtitle'
    if(props.lightBackground) {
      subtitleClass += ' project-subtitle-darktext'
    }
    const titleClass = props.titleClass || ''
    const boxStyle:React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row'
    }

    if(props.rawStyles) {
      if(props.rawStyles.title) {
        titleStyle = { ...titleStyle, ...props.rawStyles.title }
      }
    }

    let titleBoxClass = 'project-titles-box '
    if(!props.hideLeftRect) {
      titleBoxClass += 'project-titles-box-title '
    }
    if(props.titleBoxClass) {
      titleBoxClass += props.titleBoxClass
    }

    let leftBoxClass = 'project-titles-box project-titles-box-highlight '
    if(props.leftBoxClass) {
      leftBoxClass += props.leftBoxClass
    }
  
    if (!props.hideLeftRect) {
      return (
        <div style={boxStyle}>
        { props.prefix }
        <div className='project-titles-box-wrap'>
          <div className={leftBoxClass} style={{background: props.themeColor}}></div>
          <div className={titleBoxClass}>
            <div className={subtitleClass}>{props.subtitle}</div>
            <h3 className={titleClass} style={titleStyle}>{props.title}</h3>
          </div>
        </div>
        </div>
      )
    }
    else {
      return(
        <div style={boxStyle}>
        { props.prefix }
        <div className='project-titles-box-wrap'>
          <div className={titleBoxClass}>
            <div className={subtitleClass}>{props.subtitle}</div>
            <h3 className={titleClass} style={titleStyle}>{props.title}</h3>
          </div>
        </div>
        </div>
      )
    }
  }

export default PrettyTitle;