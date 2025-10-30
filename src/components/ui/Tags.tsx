import { useRouter } from "next/navigation";

export interface TagProps {
  icon: any;
  name: string;
  url: string;
}

export default function Tag({
  icon, 
  name,
  url,
}: TagProps) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push(url)} 
      className="text-xl w-40 border rounded-md border-cyan-500 shadow-md shadow-cyan-500 flex flex-col gap-3 items-center justify-center p-10 hover:translate-y-2 hover:shadow-lg cursor-pointer"
    >
      {icon}
      {name}
    </button>
  )
}