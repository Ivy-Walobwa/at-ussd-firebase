import React from 'react'


import { Col } from 'react-bootstrap';

import '../../css/dash.css';


function DashRow (props) {
    const {number, name, progress, status, statusNum} = props;

    const titleClass = props.title? " title-row": "";
    const titleClassMul = props.title? " titles": "";

    const statusBG = (() => {
        let name = "";

        switch (statusNum) {
            case 2:
                name = " semi-okay";
                break;
            
            case 3:
                name = " not-okay";
                break;
        
            default:
                break;
        }
        return name;
    })();

    return (
        <div className={"dash-row" + titleClass + statusBG}>
            <div className="cells cell-1">
                <span className="cell-number">{number}</span>
                <span className={"cell-name" + titleClassMul}>{name}</span>
            </div>

            <div className={"cells cell-2" + titleClassMul}>
                <span className="cell-progress">{progress}</span>
            </div>

            <div className={"cells cell-3" + titleClassMul}>
                <span className="cell-status">{status}</span>
            </div>
        </div>
    )
};


export default function NamesSection (props) {
    const names = [
        {
            name: "Jane Fonda",
            progress: "6 months",
            status: "Okay",
            statusNum: 1
        },
        {
            name: "Esther Wainaina",
            progress: "2 months",
            status: "Semi-Okay",
            statusNum: 2
        },
        {
            name: "Carol Wangui Njogu",
            progress: "6 months",
            status: "Not-Okay",
            statusNum: 3
        }
    ].map((name, i) => <DashRow key={i} number={`${++i}.`} {...name} />)

    return (
        <Col md={9} id="ls">
            <div className="lss">
                <DashRow number="No." name="Name" progress="Progress" status="status" title={true} />
                {names}
            </div>
        </Col>
    )
};
