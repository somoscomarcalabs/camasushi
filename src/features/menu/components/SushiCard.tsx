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
    <div className='w-full max-w-sm rounded-2xl overflow-hidden shadow-lg text-foreground dark:text-muted dark:bg-accent'>
      <div className='relative h-48 w-full'>
        <Image src={sushi.image} alt={sushi.name} fill className='object-cover' />
        {sushi.is_fried && (
          <span className='absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md uppercase tracking-wide'>Frito</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl mb-2">{sushi.name}</h3>
        <p className="text-sm mb-6 leading-relaxed">{sushi.ingredients.join(', ')}</p>
        <div className="flex items-center justify-between">
          <span>${sushi.price.toLocaleString('es-AR')}</span>
          <span>{sushi.pieces === 1 ? "1 Unidad" : `${sushi.pieces} unidades`}</span>
        </div>
      </div>
    </div>
  )
}
