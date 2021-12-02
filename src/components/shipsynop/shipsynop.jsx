import React, { useState } from 'react'
import { Button } from "react-bootstrap";
// import {Link} from 'react-router-dom'

const ShipSynop = ( props ) => {

    const [state] = useState(props);

    return (
        <tr>
            <td>{state.item.mimi}</td>
            <td>{state.item.ddddddd}</td>
            <td>{state.item.ii}</td>
            <td>{state.item.iii}</td>
            <td>{state.item.yy}</td>
            <td>{state.item.gg}</td>
            <td>{state.item.iw}</td>
            <td>{state.item.ir}</td>
            <td>{state.item.ix}</td>
            <td>{state.item.h}</td>
            <td>{state.item.vv}</td>
            <td>{state.item.n}</td>
            <td>{state.item.dd}</td>
            <td>{state.item.ff}</td>
            <td>{state.item.fff}</td>
            <td>{state.item.sn1_1}</td>
            <td>{state.item.ttt}</td>
            <td>{state.item.pppp}</td>
            <td>{state.item.ww}</td>
            <td>{state.item.w1}</td>
            <td>{state.item.w2}</td>
            <td>
                <Button href={`/item/${state.item.id}`} variant="secondary" key={state.item.id} item={state.item} > More </Button>
                {/* <Link to={{ pathname: `/add/${state.item.id}`, item: state.item }}>Register</Link> */}
                {/* <Link to={`/update/${state.item.id}`} className="btn btn-primary mr-2">Update</Link> */}
            </td>
        </tr>
    );
}

export default ShipSynop;