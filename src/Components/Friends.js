import React, { useEffect, useState } from "react"
import data from "../data.json"

export default function(props) {
  const [name, setName] = useState("")
  const [thumbnail, setThumbnail] = useState("")

  useEffect(() => {
    const id = props.match.params.id

    const friends = data.find(friends => friends.id == id)

    const miniPic = data.map(pic => {
      return pic.picture.thumbnail
    })

    setName(data.name)
    setThumbnail(miniPic)
  }, [props.match.params])

  return (
    <div>
      <p>Name: {name}</p>
      <img src={thumbnail} />
    </div>
  )
}
