import React from 'react';
import SushiCard from "@/features/menu/components/SushiCard"
import { SushiItem } from '@/types/Menu';

interface MenuProps {
  items: SushiItem[]
}

export default function Menu({ items }: MenuProps) {
  return (
    <div data-testid="menu-container">
      {items.map((item) => (
        <div data-testid="menu-item" key={item.id}>
          <SushiCard sushi={item} />
        </div>
      ))}
    </div>
  )
}
