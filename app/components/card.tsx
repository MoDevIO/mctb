import Image from "next/image";
import Link from "next/link";

export default function Card({
  name,
  description,
  image,
  link,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="min-h-35 bg-(--background-secondary) grid grid-cols-[30%_70%] items-center justify-center rounded-lg shadow-md p-4 text-foreground text-2xl font-bold hover:scale-105 transition-transform cursor-pointer active:scale-95"
    >
      <Image src={image} alt={name} width={64} height={64} className="mr-4" />
      <div className="flex flex-col">
        <span className="flex-1 text-center font-bold">{name}</span>
        <span className="flex-1 text-center text-sm text-gray-500 font-light">
          {description}
        </span>
      </div>
    </Link>
  );
}
