import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Spinner, Table, Button } from "react-bootstrap";

import Expirated from '../../helpers/expiretad';
import { retrieveAllActions } from '../../actions/action.shipsynop';
import ShipSynop from './shipsynop';

export const ShipSynopList = () => {

    const dispatch = useDispatch();

    const loading = useSelector((state => state.itens.loading));
    const error = useSelector((state => state.itens.error));
    const itens = useSelector((state => state.itens.itens));

    useEffect(() => { dispatch(retrieveAllActions()) }, [dispatch])

    return (
        <>
            <Card>
                {error ?
                    <Expirated />

                    :

                    <Table striped hover size="sm" responsive /*variant="dark"*/>
                        <thead>
                            <tr>
                                <th>AA/BB</th>
                                <th>DDDDDDD</th>
                                <th>II</th>
                                <th>iii</th>
                                <th>YY</th>
                                <th>GG</th>
                                <th>iw</th>
                                <th>iR</th>
                                <th>iX</th>
                                <th>h</th>
                                <th>VV</th>
                                <th>N</th>
                                <th>dd</th>
                                <th>ff</th>
                                <th>fff</th>
                                <th>sn</th>
                                <th>TTT</th>
                                <th>PPPP</th>
                                <th>ww</th>
                                <th>W1</th>
                                <th>W2</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itens.map(item => (
                                <ShipSynop key={item.id} item={item} />
                            ))}
                        </tbody>
                    </Table>
                }
            </Card>
            {loading ?
                <Button variant="secondary" disabled>
                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                    Loading...
                </Button>
                : null}
        </>
    );
}