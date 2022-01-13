import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { CBadge, CButton, CCardBody, CCollapse } from "@coreui/react"
import { Card, Button } from "react-bootstrap"
import { CDataTable } from "@coreui/react"

import { Message } from "../../helpers/message.alert"
import { retrieveAllActions } from "../../actions/action.shipsynop"
// import { ShipSynop } from "./shipsynop"

export const Lista = () => {
  const [message, setMessage] = useState({ expose: false, heading: "", body: "" })
  // const [details, setDetails] = useState([])
  const dispatch = useDispatch()

  const loading = useSelector((state => state.itens.loading))
  const itens = useSelector((state => state.itens.itens))

  useEffect(() => {
    dispatch(retrieveAllActions())
      .then(response => {
        // setMessage({ expose: true, heading: "Load", body: "Complete" })
      })
      .catch(error => {
        setMessage({ expose: true, heading: "Oops?!", body: "Your section has expired please login again" })
      })
  }, [dispatch])

  // const toggleDetails = (index) => {
  //   const position = details.indexOf(index)
  //   let newDetails = details.slice()
  //   if (position !== -1) {
  //     newDetails.splice(position, 1)
  //   } else {
  //     newDetails = [...details, index]
  //   }
  //   setDetails(newDetails)
  // }

  const fields = [
    // { key: 'AA/BB' },
    // { key: 'DDDDDDD' },
    // { key: 'II' },
    // { key: 'iii' },
    { key: 'yy' },
    { key: 'gg' },
    { key: 'iw' },
    { key: 'ir' },
    { key: 'ix' },
    { key: 'h' },
    { key: 'vv' },
    { key: 'n' },
    { key: 'dd' },
    { key: 'ff' },
    { key: 'fff' },
    // { key: 'sn' },
    { key: 'ttt' },
    { key: 'pppp' },
    { key: 'ww' },
    { key: 'w1w2' },
    'botao'
    // { key: 'name', _style: { width: '40%' } },
    // 'registered',
    // { key: 'status', _style: { width: '20%' } },
    // {
    //   key: 'show_details',
    //   label: '',
    //   _style: { width: '1%' },
    //   sorter: false,
    //   filter: false
    // }
  ]

  // const getBadge = (status) => {
  //   switch (status) {
  //     case 'Active': return 'success'
  //     case 'Inactive': return 'secondary'
  //     case 'Pending': return 'warning'
  //     case 'Banned': return 'danger'
  //     default: return 'primary'
  //   }
  // }

  return (
    <>
      {loading ?
			<Message expose={message.expose} heading="Loading" body="loading..." />
			:
      <Card>
        {/* <Card.Title>Observations</Card.Title> */}
        <CDataTable
          items={itens}
          fields={fields}
          columnFilter
          // tableFilter
          // footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            'botao':
              (item) => (
                <td>
                  {/* <Button href={`/observation/#/item/${item.id}`} variant="secondary" key={item.id} item={item} > More </Button> */}
                  <Button href={`/observation/#/item/${item.id}`} variant="secondary" key={item.id} item={item} >More</Button>
                </td>
              ),
          //   'status':
          //     (item) => (
          //       <td>
          //         <CBadge color={getBadge(item.status)}>
          //           {item.status}
          //         </CBadge>
          //       </td>
          //     ),
          //   'show_details':
          //     (item, index) => {
          //       return (
          //         <td className="py-2">
          //           <CButton
          //             color="primary"
          //             variant="outline"
          //             shape="square"
          //             size="sm"
          //             onClick={() => { toggleDetails(index) }}
          //           >
          //             {details.includes(index) ? 'Hide' : 'Show'}
          //           </CButton>
          //         </td>
          //       )
          //     },
          //   'details':
          //     (item, index) => {
          //       return (
          //         <CCollapse show={details.includes(index)}>
          //           <CCardBody>
          //             <h4>{item.username}</h4>
          //             <p className="text-muted">User since: {item.registered}</p>
          //             <CButton size="sm" color="info">User Settings</CButton>
          //             <CButton size="sm" color="danger" className="ml-1">Delete</CButton>
          //           </CCardBody>
          //         </CCollapse>
          //       )
          //     }
          }}
        />
      </Card>
      }
    </>
  )
}