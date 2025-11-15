"use client"

import { User, LogOut, LogIn } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "@/components/ui/Button"

export default function Navbar() {
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const loadAuth = async () => {
      const username = localStorage.getItem("username")
      if (username) setIsAuth(true);
      return;
    }

    loadAuth();
  }, [])

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  }

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("completed");
    router.push("/auth/login");
  }

  return(
    <div className="flex items-center justify-between border-b border-gray-800 w-full py-3 px-8">
      <Link href={"/"}>
        <img className="w-10" src="/logo.png" alt="" />
      </Link>
      
      <ul className="flex items-center gap-10 text-lg">
        <li className="hover:font-semibold transition"><Link href={"/"}>Inicio</Link></li>
        <li className="hover:font-semibold transition"><Link href={"/activities"}>Actividades</Link></li>
        <li className="hover:font-semibold transition"><Link href={"/exam"}>Examen</Link></li>
        
        {isAuth ? (
          <li className="relative border-2 border-cyan-500 flex items-center rounded-full p-1"> 
            <button 
              className="cursor-pointer"
              onClick={toggleProfile}
              aria-haspopup="dialog"
              aria-expanded={showProfile}
              aria-controls="user-popup"
            >
              <User className="text-cyan-500" size={24}/>
            </button>
            {showProfile && (
              <div
                id="user-popup"
                className="absolute right-0 top-11 z-50 w-48 rounded-md border border-gray-700 bg-gray-900 p-4 shadow-lg"
                role="dialog"
                aria-label="Perfil de usuario"
              >
                <p className="mb-3 text-sm text-gray-200">User: {localStorage.getItem("username")}</p>
                <p className="mb-3 text-sm text-gray-200">Completados: {localStorage.getItem("completed")}/3</p>
                <Button
                  type="button"
                  onClick={handleLogout}
                  style="error"
                  content={
                    <div className="text-sm flex items-center gap-1 justify-center">
                      <LogOut size={16}/>
                      Cerrar sesión
                    </div>
                  }
                />
              </div>
            )}
          </li>
        ) : (
          <li>
            <button
              className="cursor-pointer"
              onClick={() => router.push("/auth/login")}
            >
              <LogIn size={24}/>
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}