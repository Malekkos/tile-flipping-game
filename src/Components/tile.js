import React from "react"

const Tile = props => {

  const tiles = props.tiles
  const onClick = props.onClick
  console.log(onClick)
  return (
    <>
    {tiles.map((tile, idx) => {
      return (
        <>
        <input onClick={(event) => onClick(event)} type="button" className={"button" + tile.color + " button"} key={idx} id={idx} />
        </>
      )
    })}
    </>

  )
}


export default Tile