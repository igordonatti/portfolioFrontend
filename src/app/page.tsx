import { User } from "@/entities/user.entity";

// data que vem de uma API
const data: User = {
  name: 'Igor Donatti'
}
export default function Home() {
  return (
    <div className="w-full flex justify-center p-4">
      <h1 className="font-bold text-4xl">{data.name.toUpperCase()}</h1>
    </div>
  );
}
