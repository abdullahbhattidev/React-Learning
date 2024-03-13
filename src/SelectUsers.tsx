import React, { useState } from 'react'
interface props {
    onChange : (userid: number) => void
}

const SelectUsers = ({onChange}: props) => {
  return (
    <select onChange={event => onChange(parseInt(event.target.value))} className="form-select m-3">
        <option selected>Open this select menu</option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
    </select>
  )
}

export default SelectUsers