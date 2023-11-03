import { Icon } from "@iconify/react"
import React, { useEffect, useState } from "react"
import { toast, ToastContainer, Zoom } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

function FetchData() {
  const notify = (msg) => toast.success(msg, {})

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={true}
        transition={Zoom}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* why use client for iconify cant use one server to render */}
      <button
        onClick={() => {
          // TODO: error
          fetch("https://neotw.oeyoewl.top/tiddlers.json")
            // fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              notify(data[8].title)
            })
        }}
        className="bg-gray-400 rounded-sm p-1">
        <Icon icon="fa:send-o" width="32" />
      </button>
    </div>
  )
}

export default FetchData
