import React, { useState } from "react";
import './Section.css'

function Section(props: {
    title: string,
    events: { times: string, bold: string, description: string, extention?: string }[]
}) {


    const [extended, setextend] = useState(false)

    function clickSpan() {
        setextend(!extended)
    }

    return (
        <div className="Section">
            <h3 className="sectionTitle">
                <b>{props.title}</b>
            </h3>
            {props.events.map(each => {
                return (
                    <>
                        <div className="row d-flex">
                            <div className="col-3">{each.times}</div>
                            <div className="col-3"><b><u>{each.bold}</u></b></div>
                            <div className="description col-6">{each.description} {each.extention ? <span onClick={clickSpan} className="material-symbols-outlined">{extended ? "arrow_drop_up" : "arrow_drop_down"}</span> : null}</div>
                        </div><br />
                        {extended ? <div className="extended">{each.extention}</div> : null}
                        <br />
                    </>
                )
            })}

        </div >
    )

}

export default Section