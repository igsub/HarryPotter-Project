import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { BsArrowLeftShort } from "react-icons/bs"
import { FaHatWizard, FaGraduationCap } from "react-icons/fa"
import { GiTeacher } from "react-icons/gi"


const NavBar = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const menu = [
    { 
      title: "Characters", 
      link: "characters", 
      src: "Wizard",
      icon: <FaHatWizard />,
      subMenu : [
        {
          title: "Students",
          link: "characters/students",
          src: "student",
          icon: <FaGraduationCap />
        },
        {
          title: "Staff",
          link: "characters/staff",
          src: "Staff",
          icon: <GiTeacher />
        }
      ]
    },
  ];

  return <div className="flex">
    <div className={`bg-background-dark p-5 pt-8 shadow-lg shadow-background-light ${open ? "w-72" : "w-20"} relative duration-300`}>
      <BsArrowLeftShort onClick={() => setOpen(!open)} className={`bg-white text-background-dark text-3xl rounded-full absolute -right-3 top-9 cursor-pointer border border-background-dark hover:scale-110 duration-300 ${!open && "rotate-180"}`} />
      <div className="flex justify-center max-w-24 max-h-24">
          <img onClick={() => router.push('/')} src='/harry-potter-200-white.png' className={`object-scale-down ${open && "rotate-[360deg]"} duration-500 cursor-pointer`}/>
      </div>

      <ul className="pt-2" key={"items"}>
        {
          menu.map((menuItem, index) => (
            <>
              <li key={`${menuItem.title}`} className="text-gray-300 flex items-center">
                <div className="flex flex-col w-full">
                
                <Link href={`/${menuItem.link}`} className={`flex text-md hover:bg-background-light p-4 ${!open && "pl-2"} rounded-md gap-x-4 cursor-pointer w-full duration-300`}>
                  <span className="text-2xl block float-left">
                    {menuItem.icon}
                  </span>
                  <span className={`text-base font-medium flex-1 pl-4 delay-300 ${!open && "hidden"}`}>{menuItem.title}</span>
                </Link>

                {menuItem.subMenu && (
                  <ul className="flex flex-col justify-center bg-background-normal rounded-md" key={`subItems-${menuItem.title}`}>
                    {menuItem.subMenu.map((subMenuItem, smIndex) => (
                      <li key={subMenuItem.title}>
                        <Link href={`/${subMenuItem.link}`} className={`flex text-md hover:bg-background-light ${open ? "pl-8": "pl-2"} pb-2 pt-2 rounded-md gap-x-4 cursor-pointer w-full duration-300`}>
                          <span className="text-2xl block float-left">
                            {subMenuItem.icon}
                          </span>
                          <span className={`text-base font-medium flex-1 pl-4 delay-300 ${!open && "hidden"}`}>{subMenuItem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                </div>
              </li>
            </>
          ))
        }
      </ul>
    </div>
  </div>
}

export default NavBar