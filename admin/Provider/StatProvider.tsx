import React,{useEffect,useContext,createContext,useMemo,useReducer,useState} from 'react'
import { routes } from 'utils/routes'
import { getHotelList } from 'utils/service'
const initState={
     hotelList:[],
    userList:[]
}
const StatContext=createContext([])
export default function StatProvider  ()  {
 const [state,setState]=useState({
    hotelList:[],
    userList:[]
 })
 const {hotelList,userList}=state
  return (
    <div>StatProvider</div>
  )
}
