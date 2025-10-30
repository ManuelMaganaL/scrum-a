import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export interface CardProps {
  header: string;
  content: string;
  image: string;
  url: string;
}

export default function Card({
  header,
  content,
  image,
  url,
}: CardProps) {
  const router = useRouter();

  return (
    <div className="flex p-4 gap-5 border border-gray-500 rounded-md"> 
      <div className="w-2/3 flex flex-col justify-between gap-2">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl font-semibold">{header}</h2>
          <p className="text-lg">{content}</p>
        </div>
        
        <Button
          type="button"
          style="outline"
          content={"Iniciar"}
          onClick={() => router.push(url)}
        />
      </div>

      <img className="w-1/3 h-60" src={image} alt="Card_image" />
    </div>
  )
}