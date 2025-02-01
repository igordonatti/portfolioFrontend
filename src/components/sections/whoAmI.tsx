'use client'

import { User } from "@/entities/user.entity"

const userData: User = {
  name: 'Igor Donatti',
  age: 23
}

export default function WhoAmI() {
  return (
    <section className="p-4 h-3/5 rounded-lg bg-red-400 flex flex-col items-center">
      <h2 className="font-bold text-2xl">Who am I?</h2>
      <div>
        {/* Imagem da minha foto de perfil */}
        <p className="text-lg">I&apos;m {userData.name}, a software engineer from Brazil.</p>
      </div>
    </section>  
  )
}