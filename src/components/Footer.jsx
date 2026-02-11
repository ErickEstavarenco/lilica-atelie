export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="font-heading text-2xl mb-4">
          Lilica Ateliê 🌿
        </h3>

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}
