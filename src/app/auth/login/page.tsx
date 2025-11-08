"use client";

import { useRouter } from "next/navigation";
import { randomInt } from "node:crypto";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [usernmae, setUsername] = useState<string>("");

  const handleSubmit = async () => {
    localStorage.setItem("username", usernmae);

    const random = Math.floor(Math.random() * 3) + 1;
    localStorage.setItem("completed", String(random));

    router.push("/");
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="flex h-[90vh] w-full max-w-3xl flex-col items-center text-center justify-center py-10 bg-white dark:bg-black gap-5">
        <div className="flex flex-col gap-5 border border-gray-700 p-10 rounded-md">
          <h1 className="text-3xl">Inicia sesión</h1>
          <form className="flex flex-col gap-3" action={() => router.push("/activities")}>
            <label className="text-start" htmlFor="">Username:</label>
            <input 
              required
              className="border border-gray-700 rounded-md py-2 px-4" 
              type="text"
              name="username" 
              id="username"
              value={usernmae}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="text-start" htmlFor="">Password</label>
            <input required className="border border-gray-700 rounded-md py-2 px-4" type="password" name="password" id="password" />

            <Button
              type="button"
              style="main"
              content="Iniciar sesión"
              onClick={handleSubmit}
            />
          </form>

          <div className="flex gap-5 text-cyan-500">
            <a className="hover:underline" href="/auth/register">Registrate aquí</a>
            <a className="hover:underline" href="/auth/forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
