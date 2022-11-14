import React from 'react'
import { useParams } from 'react-router-dom'
const DetailRoom = () => {
  const {slug}=useParams()
  return (
    <div>detailRoom</div>
  )
}

export default DetailRoom