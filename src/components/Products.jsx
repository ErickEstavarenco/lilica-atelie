export default function Products() {
  const produtos = [
    {
      id: 1,
      nome: "Brinco Flor Rosé",
      preco: "R$ 49,90",
      imagem: "/images/brinco.jpg",
    },
    {
      id: 2,
      nome: "Colar Folha Oliva",
      preco: "R$ 89,90",
      imagem: "/images/colar.jpg",
    },
    {
      id: 3,
      nome: "Pulseira Artesanal",
      preco: "R$ 59,90",
      imagem: "/images/pulseira.jpg",
    },
  ]

  return (
    <section id="produtos" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-heading text-center text-brand-primary mb-16">
          Nossos Destaques
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-brand-light p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="h-56 rounded-xl mb-6 overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="font-heading text-xl text-brand-primary mb-2">
                {produto.nome}
              </h3>

              <p className="text-gray-600 font-body mb-4">
                {produto.preco}
              </p>

              <button className="w-full bg-brand-primary text-white py-3 rounded-xl hover:bg-opacity-90 transition">
                Ver Produto
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
