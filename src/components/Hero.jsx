import heroImage from "../assets/hero.jpg"

export default function Hero() {
  return (
<section className="bg-brand-light py-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-heading text-brand-primary mb-6 leading-tight">
            Delicadeza em cada detalhe
          </h1>

          <p className="text-gray-600 font-body mb-8">
            Peças artesanais feitas com amor, cuidado e dedicação.
            Transformamos simplicidade em beleza para valorizar
            sua essência.
          </p>

          <a
            href="#produtos"
            className="bg-brand-primary text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition"
          >
            Ver Coleção
          </a>
        </div>

        {/* Imagem */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={heroImage}
            alt="Produto artesanal Lilica Ateliê"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}
