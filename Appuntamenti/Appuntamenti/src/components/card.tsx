import React from 'react'
import { iUser } from '../interfaces/iUser'

export default function card({id, name, profilePic, description}: iUser) {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <img src={profilePic} alt="img" />
      <p>{description}</p>
    </div>
  )
}
