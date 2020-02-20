import React from "react"
import data from "../data.json"
import { Link } from "react-router-dom"

export default function List() {
  return (
    <div>
      <header className="listHeader">Ma Frends</header>
      <div>
        {data.map(person => (
          <Link to={`/SingleView/${person.id}`}>
            <ul className="person">
              <li>
                <img className="personPic" src={person.picture.thumbnail} />
                <p className="personName">
                  {person.name.first} {person.name.last}
                </p>
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  )
}
