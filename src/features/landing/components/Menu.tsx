import React from 'react';
import SushiCard from "@/features/menu/components/SushiCard"
import { MenuCategory } from '@/types/Menu';

interface MenuProps {
  categories: MenuCategory[]
}

export default function Menu({ categories }: MenuProps) {
  return (
    <div data-testid="menu-container" id="menu" className='grid grid-cols-1 md:p-[0.5rem] p-[1.5rem] justify-items-center bg-background dark:bg-foreground'>
      <h1 className='text-6xl mt-20 text-center dark:text-white'>Nuestro Menú</h1>
      <div className='text-2xl w-full text-center flex items-center justify-center h-24 dark:text-white'>
        <h2>Nuestro Mínimo de piezas por pedido es de <span className='text-primary'>20 piezas</span></h2>
      </div>
      {
        categories.map((category) => (
          <div key={category.name}>
            <h1 className='text-center text-5xl dark:text-primary m-10'>{category.name}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              {category.items.map((item, index) => {

                const isLastItem = index === category.items.length - 1;
                const isOddCount = category.items.length % 2 !== 0;
                const shouldSpan = isLastItem && isOddCount;
                return (
                  <div data-testid="menu-item" key={item.id} className={`grid justify-items-center ${shouldSpan ? "md:col-span-2" : ""}`}>
                    <SushiCard sushi={item} />
                  </div>
                )
              })}
            </div>
          </div>
        ))
      }

    </div >
  )
}
