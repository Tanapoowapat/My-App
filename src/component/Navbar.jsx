import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-4 flex justify-around">
      <div class="p-2">
        <p class="font-bold">Tanapoowapat</p>
      </div>
      <button
        class="inline-flex p-2 rounded-lg bg-gray-600  md:hidden"
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

      <div class="hidden">
        <ul>
          <li>
            <Item url="#" context="Work" />
          </li>
          <li>
            <Item url="#" context="Work" />
          </li>
          <li>
            <Item url="#" context="Work" />
          </li>
          <li>
            <Item url="#" context="Work" />
          </li>
        </ul>
      </div>

      <div class="gap-2 p-2 hidden md:flex md:gap-16">
        <Item url="#" context="Work" />
        <Item url="#" context="Educate" />
        <Item url="#" context="Uses" />
        <Item url="#" context="Source" />
      </div>

      <div class="p-2">
        <button type="button" class="">
          Theam
        </button>
      </div>

      <div class="text-sm p-2 md:hidden">test</div>
    </nav>
  )
}

const Item = props => {
  return (
    <a href={props.url}>
      <p>{props.context}</p>
    </a>
  )
}

export default Navbar
