export default function Menu({ items }) {
  return (
    <div data-testid="menu-container">
      {items.map((item) => (
        <div data-testid="menu-item" key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  )
}
