import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [ShowNav, SetShowNav] = useState(false)

  return (
    <nav className="bg-gray-900 text-white flex justify-around items-center sticky top-0 z-20 px-10">
      <div class="p-2">
        <p class="font-bold">Tanapoowapat</p>
      </div>
      <button
        onClick={() => SetShowNav(!ShowNav)}
        class="order-2 inline-flex p-2 mt-2 rounded-lg bg-gray-600 md:hidden "
        aria-controls="mobile-menu"
        aria-expanded="false"
        type="button"
      >
        <svg
          class="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div class="gap-2 p-2">
        <ul
          class={
            (ShowNav ? 'right-1' : '-right-full') +
            ' left-46 bg-gray-700 space-y-2 p-5 opacity-95 items-center fixed top-10 md:space-y-0 md:space-x-7 md:bg-gray-900 md:static md:flex md:gap-16'
          }
        >
          <Item url="#" context="Work" />
          <Item url="#" context="Educate" />
          <Item url="#" context="Source" />
        </ul>
      </div>

      <div class="p-2">
        <button type="button" class="">
          Theam
        </button>
      </div>
    </nav>
  )
}

const Item = props => {
  return (
    <li>
      <a href={props.url}>
        <p>{props.context}</p>
      </a>
    </li>
  )
}

export default Navbar
