import "~style.css"

import { Icon } from "@iconify/react"
import React from "react"

import FetchData from "./components/FetchButton"

function IndexPopup() {
  return (
    <div className="flex items-center justify-center prose prose-indigo w-96 h-96">
      <div className="fixed top-0 left-0 m-1 ">
        <Icon icon="simple-icons:tiddlywiki" width="32" />
        <FetchData />
      </div>
    </div>
  )
}

export default IndexPopup
