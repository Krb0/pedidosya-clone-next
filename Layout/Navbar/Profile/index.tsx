/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import MoreInfo from '../../../assets/icons/shared/moreInfo.svg'
import support from '../../../assets/icons/Navbar/support.svg'
import signOutIcon from '../../../assets/icons/Navbar/signOut.svg'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Profile() {
  const { data: session } = useSession()
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex cursor-pointer items-center gap-2 pl-6">
        <div className="relative h-8 w-8 rounded-full">
          <Image
            layout="fill"
            className="rounded-full"
            src={ session?.user?.image ? session?.user?.image: "https://play-lh.googleusercontent.com/QTL4zl6hukny5XrTW3PnNf9OH0E5osKG-DfrGEQ1YwRt1FoYdaHynTtlc0MyCq1w2mhq"}
          />
        </div>
        <div className="relative h-4 w-4">
          <Image layout="fill" src={MoreInfo} />
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-6 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none xl:left-1">
          <div className="flex flex-col gap-2 py-3">
            <Link href="/support">
              <Menu.Item>
                <div className="font-muli hover:bg-[rgba(172, 172, 172, 0.49)] flex cursor-pointer py-1 pl-6 text-[13px] ">
                  <div className="flex items-center gap-2">
                    <div className="relative h-[24px] w-[24px]">
                      <Image layout="fill" src={support} />
                    </div>
                    <span>Ayuda en línea</span>
                  </div>
                </div>
              </Menu.Item>
            </Link>
            <Menu.Item>
              {session ? (
                <div
                  onClick={() => signOut()}
                  className="font-muli hover:bg-[rgba(172, 172, 172, 0.49)] flex cursor-pointer py-1 pl-6 text-[13px] "
                >
                  <div className="flex items-center gap-2">
                    <div className="relative h-[24px] w-[24px]">
                      <Image layout="fill" src={signOutIcon} />
                    </div>
                    <span>Cerrar sesión</span>
                  </div>
                </div>
              ) : (
                <Link href="/login">
                  <div className="font-muli hover:bg-[rgba(172, 172, 172, 0.49)] flex cursor-pointer py-1 pl-6 text-[13px] ">
                    <div className="flex items-center gap-2">
                      <div className="relative h-[24px] w-[24px]">
                        <Image layout="fill" src={signOutIcon} />
                      </div>
                      <span>Ingresar / Registrarse</span>
                    </div>
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
