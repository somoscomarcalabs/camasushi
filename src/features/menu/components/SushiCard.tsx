interface SushiProps {
  sushi: {
    id: number,
    name: string,
    description: string,
    is_fried: boolean,
    type: string,
    price: number
  }
}

export default function SushiCard({ sushi }: SushiProps) {
  return (
    <div>
      <h3>{sushi.name}</h3>
    </div>
  )
}
