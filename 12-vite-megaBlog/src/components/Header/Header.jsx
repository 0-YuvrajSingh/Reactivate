import React from 'react'
import {LogoutBtn, Logo, Container} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  return (
    <div>Header</div>
  )
}

export default Header