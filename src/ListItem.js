import React from 'react'

const ListItem = ({item}) => {
  return (
    <li>
      {JSON.stringify(item.id)}
    </li>
  )
}

export default ListItem
