import React from 'react';
import SushiCard from "@/features/menu/components/SushiCard"

export default function Menu({ items }) {
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
