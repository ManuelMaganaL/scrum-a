import { ButtonProps } from "@/types/shared";

export default function Button({
  type,
  style,
  content,
  onClick,
}: ButtonProps) {
  const mainClass = "text-lg bg-cyan-500 shadow-cyan-400 shadow-md font-semibol py-2 px-4 rounded-md cursor-pointer hover:bg-cyan-400 hover:shadow-lg hover:translate-y-1 transition";

  const outlineClass = "text-lg border border-cyan-500 font-semibol py-2 px-4 rounded-md cursor-pointer hover:translate-y-1 transition";

  const errorClass = "text-sm bg-red-500 shadow-md font-semibold py-2 px-4 rounded-md cursor-pointer hover:bg-red-400 hover:translate-y-1 transition";

  const secondaryClass = "";

  return (
    <button
      type={type}
      className={
        style === "main" ? mainClass :
        style === "outline" ? outlineClass :
        style === "secondary" ? secondaryClass :
        errorClass
      }
      onClick={onClick}
    >
      {content}
    </button>
  )
}