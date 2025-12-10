import React from 'react';
import SushiCard from "@/features/menu/components/SushiCard"
import { MenuCategory } from '@/types/Menu';

interface MenuProps {
  categories: MenuCategory[]
}

export default function Menu({ categories }: MenuProps) {
  return (
    <div data-testid="menu-container" id="menu" className='grid grid-cols-1 md:p-[0.5rem] p-[1.5rem] justify-items-center dark:bg-foreground'>
      <h1 className='text-6xl mt-20'>Nuestro Menú</h1>
      {
        categories.map((category) => (
          <div key={category.name}>
            <h1 className='text-center text-5xl dark:text-primary m-10'>{category.name}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              {category.items.map((item) => (
                <div data-testid="menu-item" key={item.id} className='grid justify-items-center'>
                  <SushiCard sushi={item} />
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div >
  )
}
