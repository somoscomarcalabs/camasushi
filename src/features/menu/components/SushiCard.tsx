import Image from 'next/image';

interface SushiProps {
  sushi: {
    id: number,
    name: string,
    description: string,
    is_fried: boolean,
    type: string,
    price: number,
    image: string
  }
}

export default function SushiCard({ sushi }: SushiProps) {
  return (
    <div>
      <Image src={sushi.image} alt={sushi.name} width={300} height={200} />
      <h3>{sushi.name}</h3>
      <p>{sushi.description}</p>
      <span>${sushi.price.toLocaleString('es-AR')}</span>
    </div>
  )
}
