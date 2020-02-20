import React, { useEffect } from "react"
import data from "../data.json"
import {
  FaArrowLeft,
  FaBaby,
  FaEnvelope,
  FaPhone,
  FaGlobeAmericas
} from "react-icons/fa"

import { Link } from "react-router-dom"

export default function Single(props) {
  const id = props.match.params.id
  const friend = data.find(person => person.id == id)

  return (
    <div>
      <header className="singleHeader">
        <Link to={`/`}>
          <FaArrowLeft className="arrow" />
        </Link>
        <img src={friend.picture.medium} />
      </header>
      <ul>
        <li className="listSingle">
          <FaBaby /> {friend.name.first} {friend.name.last}
        </li>
        <li className="listSingle">
          <FaEnvelope /> {friend.email}
        </li>
        <li className="listSingle">
          <FaPhone /> {friend.phone}
        </li>
        <li className="listSingle">
          <FaGlobeAmericas /> {friend.location.city}, {friend.location.state}
        </li>
      </ul>
    </div>
  )
}
