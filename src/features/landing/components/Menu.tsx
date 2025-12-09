import React from 'react';
import SushiCard from "@/features/menu/components/SushiCard"
import { MenuCategory } from '@/types/Menu';

interface MenuProps {
  categories: MenuCategory[]
}

export default function Menu({ categories }: MenuProps) {
  return (
    <div data-testid="menu-container" id="#menu" className='grid grid-cols-1 md:grid-cols-2 md:p-[0.5rem] p-[1.5rem] justify-items-center dark:bg-foreground'>
      {
        categories.map((category) => (
          <div key={category.name} >
            {category.items.map((item) => (
              <div data-testid="menu-item" key={item.id} className='grid justify-items-center'>
                <SushiCard sushi={item} />
              </div>
            ))}
          </div>
        ))
      }
    </div >
  )
}
