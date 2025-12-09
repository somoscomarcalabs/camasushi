import React from 'react';
import SushiCard from "@/features/menu/components/SushiCard"
import { MenuCategory } from '@/types/Menu';

interface MenuProps {
  categories: MenuCategory[]
}

export default function Menu({ categories }: MenuProps) {
  return (
    <div data-testid="menu-container" className='space-y-10 grid grid-col-1 md:grid-cols-2 gap-8'>
      {
        categories.map((category) => (
          <div key={category.name} className=''>
            {category.items.map((item) => (
              <div data-testid="menu-item" key={item.id}>
                <SushiCard sushi={item} />
              </div>
            ))}
          </div>
        ))
      }
    </div >
  )
}
