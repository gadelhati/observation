import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Table } from "react-bootstrap"

import { Message } from "../../helpers/message.alert"
import { retrieveAllActions } from "../../actions/action.shipsynop"
import { ShipSynop } from "./shipsynop"

export const ShipSynopList = (props) => {

	const [message, setMessage] = useState({ expose: false, heading: "", body: "" })
	const dispatch = useDispatch()

	const loading = useSelector((state => state.itens.loading))
	const itens = useSelector((state => state.itens.itens))

	useEffect(() => {
		dispatch(retrieveAllActions())
		setMessage({ expose: true, heading: "Oops?!", body: "Your section has expired please login again" })
	}, [dispatch])

	return (
		<>
		{   loading ?
			<Message expose={message.expose} heading="Loading" body="loading..." />
			:
			<Message expose={message.expose} heading={message.heading} body={message.body} />
		}
			<Card>
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
			</Card>
		</>
	)
}