import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function Profile() {
    const Navigate=useNavigate();
  return (
    <div>
      <h1>This is Profile Page</h1>
      <Button onClick={()=>Navigate(-1)}>
        Back
      </Button>
    </div>
  )
}
