import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-heading text-brand-primary">
          Lilica Ateliê
        </h1>

        <nav className="hidden md:flex gap-8 font-body text-gray-600">
          <a href="#" className="hover:text-brand-primary transition">
            Início
          </a>

          <a href="#produtos" className="hover:text-brand-primary transition">
            Produtos
          </a>

          <a href="#sobre" className="hover:text-brand-primary transition">
            Sobre
          </a>

          <a href="#" className="hover:text-brand-primary transition">
            Contato
          </a>
        </nav>

        {/* Ícones */}
        <div className="flex items-center gap-4 text-gray-600">
          <ShoppingCart className="cursor-pointer hover:text-brand-primary transition" />
          <User className="cursor-pointer hover:text-brand-primary transition" />
        </div>

      </div>
    </header>
  )
}
