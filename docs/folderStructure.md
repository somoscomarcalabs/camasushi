# Folders structure following screaming architecture

```
.
├── public/ # Assets estáticos
│ ├── images/
│ │ ├── rolls/ # Fotos de los rollos
│ │ └── ui/ # Logos, iconos, patterns
│ └── fonts/
├── src/
│ ├── app/ # Next.js App Router (Solo Rutas y Layouts)
│ │ ├── layout.tsx # Layout Principal
│ │ ├── page.tsx # Landing Page (Composición de secciones)
│ │ └── globals.css # Tailwind directives
│ ├── components/ # UI Kit GENÉRICO (Reutilizables en toda la app)
│ │ ├── ui/ # Átomos/Moleculas
│ │ │ ├── Button.tsx
│ │ │ ├── Typography.tsx
│ │ │ ├── Container.tsx
│ │ │ └── ModalBase.tsx # Base del modal (sin lógica de negocio)
│ │ └── layout/ # Componentes estructurales
│ │ ├── Header.tsx
│ │ └── Footer.tsx
│ ├── features/ # AQUÍ ESTÁ LA MAGIA (Lo que la app "HACE")
│ │ ├── menu/ # Todo lo relacionado al Sushi (Core del negocio)
│ │ │ ├── components/
│ │ │ │ ├── SushiCard.tsx
│ │ │ │ ├── MenuGrid.tsx
│ │ │ │ ├── CategoryFilter.tsx
│ │ │ │ └── DetailModal.tsx
│ │ │ ├── hooks/ # Lógica de filtrado o carrito (Fase 2)
│ │ │ └── data/
│ │ │ └── menu-data.json # JSON de productos
│ │ ├── about/ # Sección informativa
│ │ │ ├── components/
│ │ │ │ ├── LocationMap.tsx
│ │ │ │ └── OpeningHours.tsx
│ │ ├── contact/ # Lógica de contacto
│ │ │ ├── components/
│ │ │ │ └── WhatsAppButton.tsx
│ │ │ └── utils/
│ │ │ └── wa-generator.ts # Función para crear el link de WA
│ │ └── landing/ # Elementos únicos de la portada
│ │ ├── components/
│ │ │ └── HeroSection.tsx
│ ├── lib/ # Utilidades y Configuraciones
│ │ ├── utils.ts # Helper para clases (cn de tailwind)
│ │ └── constants.ts # Configuración global (colores, urls)
│ └── types/ # Definiciones de TypeScript
│ └── index.ts # Interfaces (Product, MenuCategory)
├── tailwind.config.ts # Configuración de diseño
└── package.json
```
