"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function Actividad1() {
  const router = useRouter();
  const activityNumber = 1;

  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [sprintDuration, setSprintDuration] = useState<string>("");
  const [dailyAnswer, setDailyAnswer] = useState<string>("");

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="flex h-[85vh] w-full max-w-xl md:max-w-5xl flex-col items-start py-10 px-10 bg-white dark:bg-black gap-8 rounded-2xl shadow-lg">
        {/* Barra de progreso */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-5 dark:bg-gray-700">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Contenido dinámico */}
        {step === 1 ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Bienvenido a la historia: <span>{activityNumber}</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300">
              Tú debes de ser el nuevo practicante de <strong>Scrum Master</strong>, ¿verdad?
              Antes de comenzar, dime tu nombre para registrarte en el equipo.
            </p>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre..."
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button
              type="button"
              style="main"
              content="Continuar"
              onClick={() => name ? setStep(step + 1) : alert("Por favor, ingresa tu nombre")}
            />
          </div>
        ) : step === 2 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              ¡Bienvenido, {name}!
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Es tu primer día en la empresa <strong>AgileX</strong>. Aquí trabajamos bajo la
              metodología <strong>SCRUM</strong>, una forma ágil de trabajar en equipo para entregar
              proyectos más rápido y con mejor comunicación.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Antes de comenzar, elige el rol que te gustaría desempeñar dentro del equipo:
            </p>

            <select
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Selecciona un rol</option>
              <option value="Product Owner">Product Owner</option>
              <option value="Scrum Master">Scrum Master</option>
              <option value="Developer">Desarrollador</option>
            </select>

            {role && (
              <p className="text-gray-600 dark:text-gray-300">
                Excelente elección, <strong>{name}</strong>. Como <strong>{role}</strong>, tendrás
                una responsabilidad muy importante dentro del equipo.
              </p>
            )}

            <Button
              type="button"
              style="main"
              content="Continuar"
              onClick={() =>
                role ? setStep(step + 1) : alert("Selecciona un rol antes de continuar")
              }
            />
          </div>
        ) : step === 3 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              ¡Planifiquemos nuestro primer Sprint!
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              En SCRUM, el trabajo se divide en ciclos llamados <strong>Sprints</strong>,
              donde el equipo entrega una parte funcional del producto.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              ¿Cuánto tiempo te gustaría que dure este Sprint?
            </p>

            <select
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={sprintDuration}
              onChange={(e) => setSprintDuration(e.target.value)}
            >
              <option value="">Selecciona la duración</option>
              <option value="1 semana">1 semana</option>
              <option value="2 semanas">2 semanas</option>
              <option value="4 semanas">4 semanas</option>
            </select>

            {sprintDuration && (
              <p className="text-gray-600 dark:text-gray-300">
                Perfecto. Un Sprint de <strong>{sprintDuration}</strong> te permitirá mantener
                el enfoque y mejorar con cada iteración.
              </p>
            )}

            <Button
              type="button"
              style="main"
              content="Continuar"
              onClick={() =>
                sprintDuration
                  ? setStep(step + 1)
                  : alert("Selecciona una duración de Sprint")
              }
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              ¡Hora de la Daily Scrum, {name}!
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              En las <strong>Daily Scrum</strong>, cada miembro del equipo comparte brevemente
              sus avances. Responde esta pregunta como si fueras parte del equipo:
            </p>

            <label
              htmlFor="daily"
              className="text-gray-600 dark:text-gray-300 font-medium"
            >
              ¿Qué harás hoy para ayudar al equipo?
            </label>
            <input
              type="text"
              id="daily"
              name="daily"
              placeholder="Ejemplo: Revisar el backlog, mejorar el código..."
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={dailyAnswer}
              onChange={(e) => setDailyAnswer(e.target.value)}
            />

            {dailyAnswer && (
              <p className="text-gray-600 dark:text-gray-300 italic">
                ¡Genial! Esa es una excelente contribución, <strong>{name}</strong>.
                Estás comprendiendo cómo mantener al equipo sincronizado.
              </p>
            )}

            <Button
              type="button"
              style="main"
              content="Finalizar historia"
              onClick={() =>
                dailyAnswer
                  ? router.push("/activities")
                  : alert("Responde la pregunta antes de finalizar")
              }
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
