import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Modal, Container, Row, Col, OverlayTrigger, Tooltip, InputGroup, FormControl, Button } from "react-bootstrap";
import { createActions, deleteAction, updateAction } from '../../actions/action.shipsynop'
// import ModalResponse from './shipsynop.modal.response'

const MessageModal = (props) => {

    const [state, setState] = useState(props);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()

    useEffect(() => {
        setState(props);
    }, [props]);

    const dispatch = useDispatch();
    const createItem = () => {
        submitItem()
        dispatch(createActions(state.item))
        // history.go(0)
        setShow(false)
    }
    // const retrieveItem = () => {
    //     dispatch(retrieveActions(state.item.id))
    //     history.go(0)
    // };
    const updateItem = () => {
        submitItem()
        dispatch(updateAction(state.item.id, state.item))
        // history.go(0)
        setShow(false)
    }
    const deleteItem = () => {
        dispatch(deleteAction(state.item.id))
        history.go(0)
        setShow(false)
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };
    const submitItem = () => {
        return {
            _89: state.item._89,
            a: state.item.a,
            a1: state.item.a1,
            // a3: state.item.a3,
            bi: state.item.bi,
            bw: state.item.bw,
            CH: state.item.ch,
            ci: state.item.ci,
            CL: state.item.cl,
            CM: state.item.cm,
            cs: state.item.cs,
            dataObservacao: state.item.dataObservacao,
            dd: state.item.dd,
            ddddddd: state.item.ddddddd,
            di: state.item.di,
            ds: state.item.ds,
            dw1dw1: state.item.dw1dw1,
            dw2dw2: state.item.dw2dw2,
            eses: state.item.eses,
            estacao: state.item.estacao,
            ff: state.item.ff,
            fff: state.item.fff,
            // file: state.item.file,
            gg: state.item.gg,
            gggg: state.item.gggg,
            h: state.item.h,
            hhh: state.item.hhh,
            hw1hw1: state.item.hw1hw1,
            hw2hw2: state.item.hw2hw2,
            hwahwa: state.item.hwahwa,
            hwahwahwa: state.item.hwahwahwa,
            hwhw: state.item.hwhw,
            icf: state.item.icf,
            ichw: state.item.ichw,
            icm: state.item.icm,
            icp: state.item.icp,
            icq: state.item.icq,
            ii: state.item.ii,
            iii: state.item.iii,
            ir: state.item.ir,
            is_ice: state.item.is_ice,
            iw: state.item.iw,
            ix: state.item.ix,
            lalala: state.item.lalala,
            lolololo: state.item.lolololo,
            mimi: state.item.mimi,
            MjMj: state.item.mjmj,
            n: state.item.n,
            nbnbnb: state.item.nbnbnb,
            nh: state.item.nh,
            observador: state.item.observador,
            p0p0p0p0: state.item.p0p0p0p0,
            p24p24p24: state.item.p24p24p24,
            ppp: state.item.ppp,
            pppp: state.item.pppp,
            pw1pw1: state.item.pw1pw1,
            pw2pw2: state.item.pw2pw2,
            pwapwa: state.item.pwapwa,
            pwpw: state.item.pwpw,
            qc: state.item.qc,
            rrr: state.item.rrr,
            rs: state.item.rs,
            // : state.item.,//ship
            si: state.item.si,
            sn1_1: state.item.sn1_1,
            sn1_3: state.item.sn1_3,
            sn2_1: state.item.sn2_1,
            sn2_3: state.item.sn2_3,
            ss: state.item.ss,
            sw: state.item.sw,
            tbtbtb: state.item.tbtbtb,
            tdtdtd: state.item.tdtdtd,
            // : state.item.,//tdTdTd_UUU
            tntntn: state.item.tntntn,
            tr: state.item.tr,
            ttt: state.item.ttt,
            twtwtw: state.item.twtwtw,
            txtxtx: state.item.txtxtx,
            vs: state.item.vs,
            vv: state.item.vv,
            W1: state.item.w1,
            W2: state.item.w2,
            wa1: state.item.wa1,
            wa2: state.item.wa2,
            wawa: state.item.wawa,
            ww: state.item.ww,
            yy: state.item.yy,
            zi: state.item.zi
        }
    }
    // const validateForm = () => dispatch( validateFormActions() )
    // const validationSuccess = () => dispatch ( validateSuccess() )
    // const validationError = () => dispatch ( validateError() )
    const error = useSelector((state) => state.error.error)

    return (
        <>
            <Button variant="secondary" onClick={handleShow} > More </Button>
            <Modal size="lg" show={show} onHide={handleClose} centered backdrop="static" keyboard={false} >
                <Modal.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <p>
                        {' '}ID {state.item.id}
                        {' '}More from <strong className="me-auto">{state.item.estacao}</strong>
                        {' '}on <strong className="me-auto">{state.item.dataObservacao}</strong>
                        {' '}at <strong className="me-auto">{state.item.gg}</strong> HMG
                    </p>
                    <small>ShipSynop</small>
                </Modal.Header>
                <Modal.Body >
                    {state.body}
                    <Container>
                        <form onSubmit={createItem}>
                            <Row>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">AA/BB</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador mensagem SYNOP ou SHIP: AA ou BB</Tooltip>}>
                                            <FormControl
                                                placeholder="AA/BB"
                                                aria-label="mimi"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="mimi"
                                                //required
                                                value={state.item.mimi}
                                                onChange={handleInputChange}
                                                name="mimi"
                                            />
                                            {/* <Form.Select aria-label="Default select example"
                                        id="mimi"
                                        ////required
                                        defaultValue={'DEFAULT'}
                                        value={state.item.mimi}
                                        onChange={handleInputChange}
                                        name="mimi">
                                        <option value="DEFAULT" disabled>Choose a salutation ...</option>
                                        <option value="AA">SYNOP</option>
                                        <option value="BB" defaultValue selected>SHIP</option>
                                    </Form.Select> */}
                                        </OverlayTrigger>
                                        <InputGroup.Text id="basic-addon1">XX</InputGroup.Text>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">DDDDDDD</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador internacional de chamada</Tooltip>}>
                                            <FormControl
                                                placeholder="DDDDDDD"
                                                aria-label="ddddddd"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ddddddd"
                                                ////required
                                                value={state.item.ddddddd}
                                                onChange={handleInputChange}
                                                name="ddddddd"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                {/* <Col lg={true} >
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">A1bwnbnbnb</InputGroup.Text>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Número referente à área de lançamento</Tooltip>}>
                                    <FormControl
                                        placeholder="A1"
                                        aria-label="a1"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="a1"
                                        ////required
                                        value={state.item.a1}
                                        onChange={handleInputChange}
                                        name="a1"
                                    />
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Número referente à subárea de lançamento</Tooltip>}>
                                    <FormControl
                                        placeholder="bw"
                                        aria-label="bw"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="bw"
                                        ////required
                                        value={state.item.bw}
                                        onChange={handleInputChange}
                                        name="bw"
                                    />
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tipo e número de série</Tooltip>}>
                                    <FormControl
                                        placeholder="nbnbnb"
                                        aria-label="nbnbnb"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="nbnbnb"
                                        ////required
                                        value={state.item.nbnbnb}
                                        onChange={handleInputChange}
                                        name="nbnbnb"
                                    />
                                </OverlayTrigger>
                            </InputGroup>
                        </Col> */}
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">YYGGiw</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Dia do mês: 01 a 31</Tooltip>}>
                                            <FormControl
                                                placeholder="YY"
                                                aria-label="yy"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="yy"
                                                //required
                                                value={state.item.yy}
                                                onChange={handleInputChange}
                                                name="yy"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Hora da observação (HMG): 00, 03, 06, 09, 12, 15, 18, ou 21</Tooltip>}>
                                            <FormControl
                                                placeholder="GG"
                                                aria-label="gg"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="gg"
                                                //required
                                                value={state.item.gg}
                                                onChange={handleInputChange}
                                                name="gg"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador da velocidade do vento: 0, 1, 2 , 3 ou 4</Tooltip>}>
                                            <FormControl
                                                placeholder="iw"
                                                aria-label="iw"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="iw"
                                                //required
                                                value={state.item.iw}
                                                onChange={handleInputChange}
                                                name="iw"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">IIiii</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicatiovos regionais: 82 a 83</Tooltip>}>
                                            <FormControl
                                                placeholder="II"
                                                aria-label="ii"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ii"
                                                // //required
                                                value={state.item.ii}
                                                onChange={handleInputChange}
                                                name="ii"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Número da estação: 000 a 999</Tooltip>}>
                                            <FormControl
                                                placeholder="iii"
                                                aria-label="iii"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="iii"
                                                ////required
                                                value={state.item.iii}
                                                onChange={handleInputChange}
                                                name="iii"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">99LaLaLa</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Latitude em décimos de graus: graus+(min/60), 000 a 900</Tooltip>}>
                                            <FormControl
                                                placeholder="LaLaLa"
                                                aria-label="lalala"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="lalala"
                                                ////required
                                                value={state.item.lalala}
                                                onChange={handleInputChange}
                                                name="lalala"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">QcLoLOLOLO</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Quadrante do globo: NE=1, SE=3, SW=5, NW=7</Tooltip>}>
                                            <FormControl
                                                placeholder="Qc"
                                                aria-label="qc"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="qc"
                                                ////required
                                                value={state.item.qc}
                                                onChange={handleInputChange}
                                                name="qc"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Longitude em décimos de graus: graus+(min/60), 0000 a 1800</Tooltip>}>
                                            <FormControl
                                                placeholder="LOLOLOLO"
                                                aria-label="lolololo"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="lolololo"
                                                ////required
                                                value={state.item.lolololo}
                                                onChange={handleInputChange}
                                                name="lolololo"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">iRiXhVV</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Ind. omissão ou inclusãode dados de precipitação: 1, 3 ou 4</Tooltip>}>
                                            <FormControl
                                                placeholder="iR"
                                                aria-label="ir"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ir"
                                                //required
                                                value={state.item.ir}
                                                onChange={handleInputChange}
                                                name="ir"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Ind. tipo de operação da estação: 1 a 7</Tooltip>}>
                                            <FormControl
                                                placeholder="iX"
                                                aria-label="ix"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ix"
                                                //required
                                                value={state.item.ix}
                                                onChange={handleInputChange}
                                                name="ix"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Altura da nuvem mais baixa: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="h"
                                                aria-label="h"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="h"
                                                //required
                                                value={state.item.h}
                                                onChange={handleInputChange}
                                                name="h"
                                            />

                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Visibilidade horizontal à superfície: 90 a 99</Tooltip>}>
                                            <FormControl
                                                placeholder="VV"
                                                aria-label="vv"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="vv"
                                                //required
                                                value={state.item.vv}
                                                onChange={handleInputChange}
                                                name="vv"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">Nddff</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Cobertura total de nuvens: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="N"
                                                aria-label="n"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="n"
                                                //required
                                                value={state.item.n}
                                                onChange={handleInputChange}
                                                name="n"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Direção verdadeira de onde sopra o vento real, em dezenas de graus: 00 a 36 ou 99</Tooltip>}>
                                            <FormControl
                                                placeholder="dd"
                                                aria-label="dd"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="dd"
                                                //required
                                                value={state.item.dd}
                                                onChange={handleInputChange}
                                                name="dd"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Velocidade do vento em inidades indicadas em iw do grupo YYGGiw: 00 a 99</Tooltip>}>
                                            <FormControl
                                                placeholder="ff"
                                                aria-label="ff"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ff"
                                                //required
                                                value={state.item.ff}
                                                onChange={handleInputChange}
                                                name="ff"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={true} >
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Velocidade do vento igual ou superior a 99 unidades indicados por iw do grupo YYGGiw: 100 a 999</Tooltip>}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">00fff</InputGroup.Text>
                                            <FormControl
                                                placeholder="fff"
                                                aria-label="fff"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="fff"
                                                //required
                                                value={state.item.fff}
                                                onChange={handleInputChange}
                                                name="fff"
                                            />
                                        </InputGroup>
                                    </OverlayTrigger>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">1snTTT</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador de sinal de temperatura: 0 a 1</Tooltip>}>
                                            <FormControl
                                                placeholder="sn"
                                                aria-label="sn1_1"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="sn1_1"
                                                //required
                                                value={state.item.sn1_1}
                                                onChange={handleInputChange}
                                                name="sn1_1"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Temperatura do ar (seco) expressa em décimos de graus celcius: 000 a 500</Tooltip>}>
                                            <FormControl
                                                placeholder="TTT"
                                                aria-label="ttt"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ttt"
                                                //required
                                                value={state.item.ttt}
                                                onChange={handleInputChange}
                                                name="ttt"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">2snTdTdTd</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador de sinal de temperatura ou indicador de umidade relativa: 0, 1 ou 9</Tooltip>}>
                                            <FormControl
                                                placeholder="sn"
                                                aria-label="sn2_1"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="sn2_1"
                                                ////required
                                                value={state.item.sn2_1}
                                                onChange={handleInputChange}
                                                name="sn2_1"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Temp. do ponto de orvalho expressa em décimos de grau ou Umidade relativa do ar em percentagem: 000 a 500 ou 000 a 100</Tooltip>}>
                                            <FormControl
                                                placeholder="TdTdTd"
                                                aria-label="tdtdtd"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="tdtdtd"
                                                ////required
                                                value={state.item.tdtdtd}
                                                onChange={handleInputChange}
                                                name="tdtdtd"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">3P0P0P0P0</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Pressão atmosférica ao nível da estação em décimos de hectopascal: 8700 a 9999 ou 0000 a 1000</Tooltip>}>
                                            <FormControl
                                                placeholder="P0P0P0P0"
                                                aria-label="p0p0p0p0"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="p0p0p0p0"
                                                ////required
                                                value={state.item.p0p0p0p0}
                                                onChange={handleInputChange}
                                                name="p0p0p0p0"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">4PPPP</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Pressão atmosférica ao nível do mar em décimos de hectopascal: 0000 a 9999</Tooltip>}>
                                            <FormControl
                                                placeholder="PPPP"
                                                aria-label="pppp"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="pppp"
                                                //required
                                                value={state.item.pppp}
                                                onChange={handleInputChange}
                                                name="pppp"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                {/* <Col lg={true} >
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">4a3hhh</InputGroup.Text>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Superfície isobárica padrão para qual o geopotencial é informado: 1, 2, 5, 7 ou 8</Tooltip>}>
                                    <FormControl
                                        placeholder="a3"
                                        aria-label="a3"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="a3"
                                        ////required
                                        value={state.item.a3}
                                        onChange={handleInputChange}
                                        name="a3"
                                    />
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Altura geopotencial da superfície isobárica padrão em metros geopotenciais, omitido o dígito dos milhares</Tooltip>}>
                                    <FormControl
                                        placeholder="hhh"
                                        aria-label="hhh"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="hhh"
                                        ////required
                                        value={state.item.hhh}
                                        onChange={handleInputChange}
                                        name="hhh"
                                    />
                                </OverlayTrigger>
                            </InputGroup>
                        </Col> */}
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">5appp</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Característica da tendência barométrica durante as três horas precedentes à hora da observação: 1 a 8 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="a"
                                                aria-label="a"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="a"
                                                // //required
                                                value={state.item.a}
                                                onChange={handleInputChange}
                                                name="a"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Valor da tendência barométrica ao nível da estação durante as três horas precedentes à hora da observação em décimos de hectopascal: 000 a 200</Tooltip>}>
                                            <FormControl
                                                placeholder="ppp"
                                                aria-label="ppp"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ppp"
                                                // //required
                                                value={state.item.ppp}
                                                onChange={handleInputChange}
                                                name="ppp"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">6RRRtR</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Quantidade de precipitação ocorrida durante o período anterior à hora de observação, como indicado por tR do grupo 6RRRtR: 001 a 999</Tooltip>}>
                                            <FormControl
                                                placeholder="RRR"
                                                aria-label="rrr"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="rrr"
                                                ////required
                                                value={state.item.rrr}
                                                onChange={handleInputChange}
                                                name="rrr"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Duração do período de referência para quantidade de precipitação, terminando na hora da observação: 0 a 9</Tooltip>}>
                                            <FormControl
                                                placeholder="tR"
                                                aria-label="tr"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="tr"
                                                ////required
                                                value={state.item.tr}
                                                onChange={handleInputChange}
                                                name="tr"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">7wwW1W2</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tempo presente: 00 a 99</Tooltip>}>
                                            <FormControl
                                                placeholder="ww"
                                                aria-label="ww"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ww"
                                                //required
                                                value={state.item.ww}
                                                onChange={handleInputChange}
                                                name="ww"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="W1"
                                                aria-label="w1"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="w1"
                                                //required
                                                value={state.item.w1}
                                                onChange={handleInputChange}
                                                name="w1"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="W2"
                                                aria-label="w2"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="w2"
                                                //required
                                                value={state.item.w2}
                                                onChange={handleInputChange}
                                                name="w2"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                {/* <Col lg={true} >
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">7wawaWa1Wa2</InputGroup.Text>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tempo presente obtido de uma estação automática de tempo: 00 a 99</Tooltip>}>
                                    <FormControl
                                        placeholder="wawa"
                                        aria-label="wawa"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="wawa"
                                        ////required
                                        value={state.item.wawa}
                                        onChange={handleInputChange}
                                        name="wawa"
                                    />
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                    <FormControl
                                        placeholder="Wa1"
                                        aria-label="wa1"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="wa1"
                                        ////required
                                        value={state.item.wa1}
                                        onChange={handleInputChange}
                                        name="wa1"
                                    />
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                    <FormControl
                                        placeholder="Wa2"
                                        aria-label="wa2"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="wa2"
                                        ////required
                                        value={state.item.wa2}
                                        onChange={handleInputChange}
                                        name="wa2"
                                    />
                                </OverlayTrigger>
                            </InputGroup>
                        </Col> */}
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">8NhCLCMCH</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Cobertura de nuvens baixas (ou nuvens médias na ausência de nuvens baixas): 0 a 8</Tooltip>}>
                                            <FormControl
                                                placeholder="Nh"
                                                aria-label="nh"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="nh"
                                                ////required
                                                value={state.item.nh}
                                                onChange={handleInputChange}
                                                name="nh"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tipo de nuvens baixas: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="CL"
                                                aria-label="cl"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="cl"
                                                ////required
                                                value={state.item.cl}
                                                onChange={handleInputChange}
                                                name="cl"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tipo de nuvens médias: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="CM"
                                                aria-label="cm"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="cm"
                                                ////required
                                                value={state.item.cm}
                                                onChange={handleInputChange}
                                                name="cm"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Tipo de nuvens altas: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="CH"
                                                aria-label="ch"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ch"
                                                ////required
                                                value={state.item.ch}
                                                onChange={handleInputChange}
                                                name="ch"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">9GGgg</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Hora que foi feita a leitura do barômetro, se diferir mais do que 10 min da hora padrão GG informada na seção 0: HHmm</Tooltip>}>
                                            <FormControl
                                                placeholder="GGgg"
                                                aria-label="gggg"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="gggg"
                                                ////required
                                                value={state.item.gggg}
                                                onChange={handleInputChange}
                                                name="gggg"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">222DsVs</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Rumo resultante do deslocamento da navio nas três horas precedentes à hora da observação: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="Ds"
                                                aria-label="ds"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ds"
                                                ////required
                                                value={state.item.ds}
                                                onChange={handleInputChange}
                                                name="ds"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Velocidade média do navio nas três hora precedentes à hora da observação: 0 a 9 /</Tooltip>}>
                                            <FormControl
                                                placeholder="Vs"
                                                aria-label="vs"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="vs"
                                                ////required
                                                value={state.item.vs}
                                                onChange={handleInputChange}
                                                name="vs"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">0SsTwTwTw</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador do sinal e tipo da medição da temperatura da água do mar: 0 a 7</Tooltip>}>
                                            <FormControl
                                                placeholder="Ss"
                                                aria-label="ss"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ss"
                                                ////required
                                                value={state.item.ss}
                                                onChange={handleInputChange}
                                                name="ss"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Temperatura da água do mar a superfície, em décimos de graus célcius: 000 a 400</Tooltip>}>
                                            <FormControl
                                                placeholder="TwTwTw"
                                                aria-label="twtwtw"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="twtwtw"
                                                ////required
                                                value={state.item.twtwtw}
                                                onChange={handleInputChange}
                                                name="twtwtw"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">1PwaPwaHwaHwa</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Período das ondas (segundos de tempo): 00 a 30</Tooltip>}>
                                            <FormControl
                                                placeholder="PwaPwa"
                                                aria-label="pwapwa"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="pwapwa"
                                                ////required
                                                value={state.item.pwapwa}
                                                onChange={handleInputChange}
                                                name="pwapwa"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Altura das ondas (em unidades de meio metro): 00 a 10 ou //</Tooltip>}>
                                            <FormControl
                                                placeholder="HwaHwa"
                                                aria-label="hwahwa"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="hwahwa"
                                                ////required
                                                value={state.item.hwahwa}
                                                onChange={handleInputChange}
                                                name="hwahwa"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">2PwPwHwHw</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Período das vagas expressa em segundos de tempo: 00 a 20 ou 99</Tooltip>}>
                                            <FormControl
                                                placeholder="PwPw"
                                                aria-label="pwpw"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="pwpw"
                                                ////required
                                                value={state.item.pwpw}
                                                onChange={handleInputChange}
                                                name="pwpw"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Altura das vagas expressa em unidades de meio metro: 00 a 30 ou //</Tooltip>}>
                                            <FormControl
                                                placeholder="HwHw"
                                                aria-label="hwhw"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="hwhw"
                                                ////required
                                                value={state.item.hwhw}
                                                onChange={handleInputChange}
                                                name="hwhw"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">3dw1dw1dw2dw2</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Direção verdadeira de onde vem o primeiro sistema de marulhos, expresso em dezenas de grau: 00 a 36</Tooltip>}>
                                            <FormControl
                                                placeholder="dw1dw1"
                                                aria-label="dw1dw1"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="dw1dw1"
                                                ////required
                                                value={state.item.dw1dw1}
                                                onChange={handleInputChange}
                                                name="dw1dw1"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Direção verdadeira de onde vem o segundo sistema de marulhos, expresso em dezenas de grau: 00 a 36</Tooltip>}>
                                            <FormControl
                                                placeholder="dw2dw2"
                                                aria-label="dw2dw2"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="dw2dw2"
                                                ////required
                                                value={state.item.dw2dw2}
                                                onChange={handleInputChange}
                                                name="dw2dw2"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">4Pw1Pw1Hw1Hw1</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Período do primeiro sistema de marulhos, expresso em segundos de tempo: 00 a 30</Tooltip>}>
                                            <FormControl
                                                placeholder="Pw1Pw1"
                                                aria-label="pw1pw1"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="pw1pw1"
                                                ////required
                                                value={state.item.pw1pw1}
                                                onChange={handleInputChange}
                                                name="pw1pw1"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Altura do primeiro sistema de marulhos, expresso em unidades de meio metro: 00 a 30</Tooltip>}>
                                            <FormControl
                                                placeholder="Hw1Hw1"
                                                aria-label="hw1hw1"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="hw1hw1"
                                                ////required
                                                value={state.item.hw1hw1}
                                                onChange={handleInputChange}
                                                name="hw1hw1"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">5Pw2Pw2Hw2Hw2</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Período do segundo sistema de marulhos, expresso em segundos: 00 a 30</Tooltip>}>
                                            <FormControl
                                                placeholder="Pw2Pw2"
                                                aria-label="pw2pw2"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="pw2pw2"
                                                ////required
                                                value={state.item.pw2pw2}
                                                onChange={handleInputChange}
                                                name="pw2pw2"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Altura do segundo sistema de marulhos, expresso em unidades de meio metro: 00 a 30</Tooltip>}>
                                            <FormControl
                                                placeholder="Hw2Hw2"
                                                aria-label="hw2hw2"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="hw2hw2"
                                                ////required
                                                value={state.item.hw2hw2}
                                                onChange={handleInputChange}
                                                name="hw2hw2"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">6IsEsEsRs</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Formação de gelo sobre navios: 1 a 5</Tooltip>}>
                                            <FormControl
                                                placeholder="Is"
                                                aria-label="is_ice"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="is_ice"
                                                ////required
                                                value={state.item.is_ice}
                                                onChange={handleInputChange}
                                                name="is_ice"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Espessura da camada de gelo em centimetros: 00 a 30</Tooltip>}>
                                            <FormControl
                                                placeholder="EsEs"
                                                aria-label="eses"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="eses"
                                                ////required
                                                value={state.item.eses}
                                                onChange={handleInputChange}
                                                name="eses"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Taxa de formação de gelo sobre os navios: 0 a 4</Tooltip>}>
                                            <FormControl
                                                placeholder="Rs"
                                                aria-label="rs"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="rs"
                                                ////required
                                                value={state.item.rs}
                                                onChange={handleInputChange}
                                                name="rs"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={true} >
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Altura das ondas medida por instrumento em décimos do metro: 000 a 200</Tooltip>}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">70HwaHwaHwa</InputGroup.Text>
                                            <FormControl
                                                placeholder="HwaHwaHwa"
                                                aria-label="hwahwahwa"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="hwahwahwa"
                                                ////required
                                                value={state.item.hwahwahwa}
                                                onChange={handleInputChange}
                                                name="hwahwahwa"
                                            />
                                        </InputGroup>
                                    </OverlayTrigger>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">8swTbTbTb</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador de sinal e forma de obtenção da temperatura do termômetro de bulbo úmido: 0 a 7</Tooltip>}>
                                            <FormControl
                                                placeholder="sw"
                                                aria-label="sw"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="sw"
                                                ////required
                                                value={state.item.sw}
                                                onChange={handleInputChange}
                                                name="sw"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Temperatura do termômetro de bulbo úmido em décimos de grau Celsius: 000 a 400</Tooltip>}>
                                            <FormControl
                                                placeholder="TbTbTb"
                                                aria-label="tbtbtb"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="tbtbtb"
                                                ////required
                                                value={state.item.tbtbtb}
                                                onChange={handleInputChange}
                                                name="tbtbtb"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">ICEciSibiDizi</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Concentração ou distribuição do gelo de origem marinha: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="ci"
                                                aria-label="ci"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ci"
                                                ////required
                                                value={state.item.ci}
                                                onChange={handleInputChange}
                                                name="ci"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Estágio de desenvolvimento: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="Si"
                                                aria-label="si"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="si"
                                                ////required
                                                value={state.item.si}
                                                onChange={handleInputChange}
                                                name="si"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Gelo de origem terrestre: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="bi"
                                                aria-label="bi"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="bi"
                                                ////required
                                                value={state.item.bi}
                                                onChange={handleInputChange}
                                                name="bi"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Marcação verdadeira do limite de gelo principal: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="Di"
                                                aria-label="di"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="di"
                                                ////required
                                                value={state.item.di}
                                                onChange={handleInputChange}
                                                name="di"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Situação presente do gelo e tendência de condições nas 3 horas precedentes: 0 a 9 ou /</Tooltip>}>
                                            <FormControl
                                                placeholder="zi"
                                                aria-label="zi"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="zi"
                                                ////required
                                                value={state.item.zi}
                                                onChange={handleInputChange}
                                                name="zi"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">1Sn</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador de sinal de temperatura: 0 a 1</Tooltip>}>
                                            <FormControl
                                                placeholder="sn"
                                                aria-label="sn1_3"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="sn1_3"
                                                ////required
                                                value={state.item.sn1_3}
                                                onChange={handleInputChange}
                                                name="sn1_3"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Temperatura máxima do ar durante as 24 horas precedentes, em décimos de grau celsius: 000 a 450</Tooltip>}>
                                            <FormControl
                                                placeholder="TxTxTx"
                                                aria-label="txtxtx"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="txtxtx"
                                                ////required
                                                value={state.item.txtxtx}
                                                onChange={handleInputChange}
                                                name="txtxtx"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">2sn</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador de sinal de temperatura: 0 a 1</Tooltip>}>
                                            <FormControl
                                                placeholder="sn"
                                                aria-label="sn2_3"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="sn2_3"
                                                ////required
                                                value={state.item.sn2_3}
                                                onChange={handleInputChange}
                                                name="sn2_3"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Temperatura mínima do ar durante as 24 horas precedentes em décimos de grau celsius: 000 a 350</Tooltip>}>
                                            <FormControl
                                                placeholder="TnTnTn"
                                                aria-label="tntntn"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="tntntn"
                                                ////required
                                                value={state.item.tntntn}
                                                onChange={handleInputChange}
                                                name="tntntn"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">5</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador das diferenças de pressão entre a hora da observação e as últimas 24 horas: 8 ou 9</Tooltip>}>
                                            <FormControl
                                                placeholder="8/9"
                                                aria-label="_89"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="_89"
                                                ////required
                                                value={state.item._89}
                                                onChange={handleInputChange}
                                                name="_89"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Diferença de pressão à superfície expressa em décimos de hectopascal: 000 a 200</Tooltip>}>
                                            <FormControl
                                                placeholder="P24P24P24"
                                                aria-label="p24p24p24"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="p24p24p24"
                                                ////required
                                                value={state.item.p24p24p24}
                                                onChange={handleInputChange}
                                                name="p24p24p24"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                                <Col lg={true} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">555ichwicMcsicFicpicQ</InputGroup.Text>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador para medição de altura de nuvens (h) e visibilidade (VV): 0, 1, 2 ou 3</Tooltip>}>
                                            <FormControl
                                                placeholder="ichw"
                                                aria-label="ichw"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="ichw"
                                                ////required
                                                value={state.item.ichw}
                                                onChange={handleInputChange}
                                                name="ichw"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador para medição de temperatura da água do mar à superfície: 0 a 7</Tooltip>}>
                                            <FormControl
                                                placeholder="icM"
                                                aria-label="icm"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="icm"
                                                ////required
                                                value={state.item.icm}
                                                onChange={handleInputChange}
                                                name="icm"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador para medição de ondas: 0 a 9</Tooltip>}>
                                            <FormControl
                                                placeholder="cs"
                                                aria-label="cs"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="cs"
                                                ////required
                                                value={state.item.cs}
                                                onChange={handleInputChange}
                                                name="cs"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Fonte de informação: 0 a 6</Tooltip>}>
                                            <FormControl
                                                placeholder="icF"
                                                aria-label="icf"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="icf"
                                                ////required
                                                value={state.item.icf}
                                                onChange={handleInputChange}
                                                name="icf"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Plataforma de obtenção: 0 a 9</Tooltip>}>
                                            <FormControl
                                                placeholder="icp"
                                                aria-label="icp"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="icp"
                                                ////required
                                                value={state.item.icp}
                                                onChange={handleInputChange}
                                                name="icp"
                                            />
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Indicador de controle de qualidade: 0 a 9</Tooltip>}>
                                            <FormControl
                                                placeholder="icQ"
                                                aria-label="icq"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                                id="icq"
                                                ////required
                                                value={state.item.icq}
                                                onChange={handleInputChange}
                                                name="icq"
                                            />
                                        </OverlayTrigger>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </form>
                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">All data are required</div> : null}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}> Cancel </Button>
                    {/* <Button variant="primary" onClick={createItem} > Create </Button> */}
                    <Button variant="secondary" onClick={updateItem} > Update </Button>
                    <Button variant="danger" onClick={deleteItem} > Delete </Button>
                    {/* <ModalResponse /> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MessageModal;