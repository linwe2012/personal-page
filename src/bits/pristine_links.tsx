import React from 'react';

interface PristineLinksProps {
    github?: string
    lightBackground?: boolean
}

const PristineLinks: React.FC<PristineLinksProps> = (props)=>{
    let linkTextClassName = 'project-links '
    if(props.lightBackground) {
        linkTextClassName += 'project-links-darktext'
    }

    return (
        <div>
            { props.github ? <a className={linkTextClassName} href={props.github}>Github <br/></a> : null }
        </div>
    )
}


export default PristineLinks