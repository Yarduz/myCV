import React, { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import './Section.css'

function Section(props: {
    title: string,
    events: { times: string, bold: string, description: string, extention?: string }[]
}) {


    const [extended, setextend] = useState(false)

    function clickSpan() {
        setextend(!extended)
    }

    const nodeRef = useRef(null);


    return (
        <div className="Section">
            <h3 className="sectionTitle">
                <b>{props.title}</b>
            </h3>
            {props.events.map(each => {
                return (
                    <>
                        <div className="row d-flex">
                            <div className="col-3"><p>{each.times}</p></div>
                            <div className="col-3"><p><b><u>{each.bold}</u></b></p></div>
                            <div className="description col-6"><p>{each.description} {each.extention ? <span onClick={clickSpan} className="material-symbols-outlined">{extended ? "arrow_drop_up" : "arrow_drop_down"}</span> : null}</p></div>
                        </div><br />
                        {extended ?
                            <CSSTransition nodeRef={nodeRef} in={extended} timeout={200} classNames="my-node">
                                <div ref={nodeRef} className={extended ? "extended" : "extended animate__animated animate__zoomIn"}>{each.extention}</div>
                            </CSSTransition>
                            : null}
                        <br />
                    </>
                )
            })}
        </div >
    )
}

export default Section