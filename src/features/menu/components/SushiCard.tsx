import Image from 'next/image';

interface SushiProps {
  sushi: {
    id: number,
    name: string,
    ingredients: string[],
    description: string,
    is_fried: boolean,
    price: number,
    image: string,
    pieces: number
  }
}

export default function SushiCard({ sushi }: SushiProps) {

  const renderDescription = (text: string) => {
    const parts = text.split("*");

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="font-bold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div data-testid="sushi-card" className="group relative w-full max-w-xl overflow-hidden rounded-[2rem] border-2 border-secondary/50 bg-foreground p-4 text-white shadow-lg transition-all duration-300 hover:border-primary hover:shadow-primary/20 ">

      <div className="flex flex-col sm:flex-row items-center gap-6">

        {/* Image & Badge */}
        <div className="relative h-32 w-32 shrink-0">
          <Image
            src={sushi.image}
            alt={sushi.name}
            fill
            className="rounded-full object-cover shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
          />
          {sushi.is_fried && (
            <span className="absolute -top-2 -left-2 rotate-[-10deg] rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold tracking-widest text-white shadow-md transition-transform group-hover:rotate-0">
              HOT ROLL
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
            {sushi.name}
          </h3>

          <p data-testid="sushi-description" className="text-sm leading-relaxed text-gray-400 whitespace-pre-line">
            {renderDescription(sushi.description)}
          </p>

          {/* Hidden Ingredients (Revealed on Hover) */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-3 text-xs italic text-orange-400/90">
                Ingredientes: {sushi.ingredients.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Price & Units */}
        <div className="flex shrink-0 flex-col items-center sm:items-end justify-center gap-1 border-t border-gray-800 pt-4 sm:border-t-0 sm:pt-0 pl-0 sm:pl-4 sm:border-l sm:border-gray-800">
          <div className="flex flex-col items-center sm:items-end leading-none">
            <span className="text-xl font-bold text-gray-200">
              x{sushi.pieces}
            </span>
            <span className="text-sm font-medium text-gray-400">unidades</span>
          </div>
          <span className="mt-1 text-3xl font-bold text-orange-500">
            ${sushi.price.toLocaleString("es-AR")}
          </span>
        </div>

      </div>
    </div>
  );
}
