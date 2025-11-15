"use client";

import { LogIn, BookCheck, FolderClock } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tags";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    const isAuth = localStorage.getItem("username");
    if (!isAuth) router.push("/auth/login");
  }, [])

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="flex h-[85vh] w-full max-w-3xl flex-col items-center justify-center text-center py-32 px-16 bg-white dark:bg-black gap-5">
        <h1 className="text-4xl">
          Aprende con <span className="text-cyan-500 font-semibold">AgileLearning</span>
        </h1>
      
        <p className="text-lg w-120">
          Aprende todo acerca de las metdologias de administración de proyectos de software con esta página interactiva que incluye historias, una evaluación final y ayuda con un asistente de inteligencia artificial.
        </p>
      
        <Button
          type="button"
          style="main"
          content="Empieza ahora"
          onClick={() => router.push("/activities")}
        />

        <div className="flex gap-10 mt-10">
          <Tag
            icon={<LogIn size={24}/>}
            name="Login"
            url="/auth/login"
          />

          <Tag
            icon={<FolderClock size={24}/>}
            name="Actividades"
            url="/activities"
          />

          <Tag
            icon={<BookCheck size={24}/>}
            name="Examen"
            url="/exam"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
