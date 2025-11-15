"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function Examen() {
  const router = useRouter();
  const [ans1, setAns1] = useState<string>("");
  const [ans2, setAns2] = useState<string>("");
  const [ans3, setAns3] = useState<string>("");

  useEffect(() => {
    const isAuth = localStorage.getItem("username");
    if (!isAuth) router.push("/auth/login");
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Respuestas correctas: Product Backlog, Daily Scrum, Sprint Review
    if (ans1 === "C" && ans2 === "B" && ans3 === "A") {
      router.push("/Certificate.pdf");
    } else {
      alert("Algunas respuestas son incorrectas. Revisa tus respuestas e inténtalo nuevamente.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="flex h-[100vh] w-full max-w-xl md:max-w-5xl flex-col items-start py-10 px-8 bg-white dark:bg-black gap-5">
        <h1 className="text-4xl text-gray-800 dark:text-gray-100">
          Evaluación
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          Completa la siguiente evaluación para obtener tu certificado en metodologías ágiles con SCRUM.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* PREGUNTA 1 */}
          <fieldset className="flex flex-col items-start">
            <legend className="text-xl mb-2 font-semibold">
              Pregunta 1: ¿Cuál es el artefacto que contiene todas las tareas, historias y requerimientos del producto?
            </legend>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q1_opt1"
                name="q1"
                value="A"
                checked={ans1 === "A"}
                onChange={(e) => setAns1(e.target.value)}
              />
              <label htmlFor="q1_opt1">Sprint Backlog</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q1_opt2"
                name="q1"
                value="B"
                checked={ans1 === "B"}
                onChange={(e) => setAns1(e.target.value)}
              />
              <label htmlFor="q1_opt2">Incremento</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q1_opt3"
                name="q1"
                value="C"
                checked={ans1 === "C"}
                onChange={(e) => setAns1(e.target.value)}
              />
              <label htmlFor="q1_opt3">Product Backlog</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q1_opt4"
                name="q1"
                value="D"
                checked={ans1 === "D"}
                onChange={(e) => setAns1(e.target.value)}
              />
              <label htmlFor="q1_opt4">Burn Down Chart</label>
            </div>
          </fieldset>

          {/* PREGUNTA 2 */}
          <fieldset className="flex flex-col items-start">
            <legend className="text-xl mb-2 font-semibold">
              Pregunta 2: ¿Qué evento se realiza todos los días para sincronizar al equipo y planificar las próximas 24 horas?
            </legend>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q2_opt1"
                name="q2"
                value="A"
                checked={ans2 === "A"}
                onChange={(e) => setAns2(e.target.value)}
              />
              <label htmlFor="q2_opt1">Sprint Planning</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q2_opt2"
                name="q2"
                value="B"
                checked={ans2 === "B"}
                onChange={(e) => setAns2(e.target.value)}
              />
              <label htmlFor="q2_opt2">Daily Scrum</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q2_opt3"
                name="q2"
                value="C"
                checked={ans2 === "C"}
                onChange={(e) => setAns2(e.target.value)}
              />
              <label htmlFor="q2_opt3">Sprint Review</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q2_opt4"
                name="q2"
                value="D"
                checked={ans2 === "D"}
                onChange={(e) => setAns2(e.target.value)}
              />
              <label htmlFor="q2_opt4">Sprint Retrospective</label>
            </div>
          </fieldset>

          {/* PREGUNTA 3 */}
          <fieldset className="flex flex-col items-start">
            <legend className="text-xl mb-2 font-semibold">
              Pregunta 3: ¿En qué evento se muestra el incremento del producto al cliente y se recibe retroalimentación?
            </legend>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q3_opt1"
                name="q3"
                value="A"
                checked={ans3 === "A"}
                onChange={(e) => setAns3(e.target.value)}
              />
              <label htmlFor="q3_opt1">Sprint Review</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q3_opt2"
                name="q3"
                value="B"
                checked={ans3 === "B"}
                onChange={(e) => setAns3(e.target.value)}
              />
              <label htmlFor="q3_opt2">Sprint Planning</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q3_opt3"
                name="q3"
                value="C"
                checked={ans3 === "C"}
                onChange={(e) => setAns3(e.target.value)}
              />
              <label htmlFor="q3_opt3">Daily Scrum</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="q3_opt4"
                name="q3"
                value="D"
                checked={ans3 === "D"}
                onChange={(e) => setAns3(e.target.value)}
              />
              <label htmlFor="q3_opt4">Retrospectiva del Sprint</label>
            </div>
          </fieldset>

          <Button
            type="submit"
            style="main"
            content="Entregar"
            onClick={() => {}}
          />
        </form>
      </main>

      <Footer />
    </div>
  );
}
