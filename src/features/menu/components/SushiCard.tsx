import Image from 'next/image';

interface SushiProps {
  sushi: {
    id: number,
    name: string,
    ingredients: string[],
    is_fried: boolean,
    price: number,
    image: string,
    pieces: number
  }
}

export default function SushiCard({ sushi }: SushiProps) {
  return (
    <div>
      <Image src={sushi.image} alt={sushi.name} width={300} height={200} />
      <h3>{sushi.name}</h3>
      <p>{sushi.ingredients.join(', ')}</p>
      <span>${sushi.price.toLocaleString('es-AR')}</span>
      <span>{sushi.pieces === 1 ? "1 Unidad" : `${sushi.pieces} unidades`}</span>
      {sushi.is_fried && (
        <span>Frito</span>
      )}
    </div>
  )
}
