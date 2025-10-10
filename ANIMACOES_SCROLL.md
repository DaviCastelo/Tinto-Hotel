# 🎨 Sistema de Animações de Scroll - Tintto Hotel

## 📋 Visão Geral

Este sistema implementa animações baseadas em scroll que fazem elementos deslizarem de fora para dentro conforme o usuário desce a tela. O efeito acontece **apenas uma vez** até o refresh da página.

## 🚀 Funcionalidades Implementadas

### ✅ 1. Hook de Scroll Animation
- **Arquivo**: `lib/use-scroll-animation.ts`
- **Funcionalidade**: Hook personalizado que detecta quando elementos entram na viewport
- **Configurações**:
  - `threshold: 0.1` - Dispara quando 10% está visível
  - `rootMargin: '0px 0px -50px 0px'` - Timing otimizado
  - `triggerOnce: true` - **IMPORTANTE**: Anima apenas uma vez até o refresh

### ✅ 2. Componente AnimatedRoomCard
- **Arquivo**: `components/animated-room-card.tsx`
- **Funcionalidade**: Card de quarto com animações automáticas
- **Comportamento**:
  - **Quartos pares** (0, 2, 4...): Deslizam da **esquerda** para direita
  - **Quartos ímpares** (1, 3, 5...): Deslizam da **direita** para esquerda
  - **Imagens e conteúdo**: Animações independentes com delays escalonados
  - **Transições**: 700ms com ease-out

### ✅ 3. Componente AnimatedSection (Genérico)
- **Arquivo**: `components/animated-section.tsx`
- **Funcionalidade**: Wrapper genérico para animar qualquer seção
- **Direções disponíveis**: `left`, `right`, `up`, `down`
- **Configurável**: delay, threshold, className

### ✅ 4. Fontes Personalizadas
- **Arquivo**: `app/globals.css`
- **Classes adicionadas**:
  - `.title-carppa` - Estilo base inspirado no Carppa Hotel
  - `.title-carppa-h1` até `.title-carppa-h4` - Variações de tamanho
  - **Características**:
    - Font-weight: 300 (light)
    - Cor: #92400e (amber-900)
    - Letter-spacing: 0.025em
    - Line-height: 1.25

## 🎯 Como Usar

### Para Quartos (Já Implementado)
```tsx
import { AnimatedRoomCard } from "@/components/animated-room-card"

// Na sua página
{rooms.map((room, index) => (
  <AnimatedRoomCard 
    key={room.id} 
    room={room} 
    index={index} 
  />
))}
```

### Para Outras Seções
```tsx
import { AnimatedSection } from "@/components/animated-section"

// Exemplo 1: Animação de baixo para cima
<AnimatedSection direction="up" delay={200}>
  <h2 className="title-carppa title-carppa-h2">Meu Título</h2>
</AnimatedSection>

// Exemplo 2: Animação da esquerda
<AnimatedSection direction="left" delay={400}>
  <p>Meu conteúdo</p>
</AnimatedSection>

// Exemplo 3: Animação da direita
<AnimatedSection direction="right" delay={600}>
  <div>Outro conteúdo</div>
</AnimatedSection>
```

### Para Títulos com Estilo Carppa
```tsx
// Títulos principais
<h1 className="title-carppa title-carppa-h1">TÍTULO PRINCIPAL</h1>

// Títulos secundários
<h2 className="title-carppa title-carppa-h2">TÍTULO SECUNDÁRIO</h2>

// Títulos de seção
<h3 className="title-carppa title-carppa-h3">TÍTULO DE SEÇÃO</h3>

// Títulos menores
<h4 className="title-carppa title-carppa-h4">TÍTULO MENOR</h4>
```

## 🔧 Configurações Técnicas

### Intersection Observer
- **Threshold**: 0.1 (10% visível)
- **Root Margin**: '0px 0px -50px 0px'
- **Trigger Once**: true (anima apenas uma vez até o refresh)

### Animações CSS
- **Duração**: 700ms
- **Easing**: ease-out
- **Delays**: 200ms, 300ms (escalonados)
- **Transform**: translateX, translateY
- **Opacity**: 0 → 1

### Responsividade
- **Mobile**: Animações simplificadas
- **Desktop**: Animações completas com direções laterais
- **Breakpoints**: lg: (1024px+)

## 📱 Páginas Atualizadas

### ✅ Página de Quartos (`app/quartos/page.tsx`)
- Implementado `AnimatedRoomCard`
- Títulos com estilo `title-carppa`
- Animações automáticas por índice

### ✅ Seção de Quartos (`components/rooms-section.tsx`)
- Implementado `AnimatedRoomCard`
- Títulos com estilo `title-carppa`
- Usado na página principal

## 🎨 Resultado Visual

- 🎯 **Efeito único**: Anima apenas uma vez até o refresh da página
- 🎨 **Deslizamento lateral**: Pares da esquerda, ímpares da direita
- ⚡ **Responsivo**: Funciona em mobile e desktop
- 🎭 **Cascata**: Delays escalonados para efeito dinâmico
- 📱 **Suave**: Transições de 700ms com ease-out
- 🔄 **Repetível**: Não precisa de refresh

## 🚀 Próximos Passos

Para aplicar em outras seções:

1. **Importe o componente**:
   ```tsx
   import { AnimatedSection } from "@/components/animated-section"
   ```

2. **Envolva seu conteúdo**:
   ```tsx
   <AnimatedSection direction="up" delay={200}>
     {/* Seu conteúdo aqui */}
   </AnimatedSection>
   ```

3. **Use os títulos personalizados**:
   ```tsx
   <h2 className="title-carppa title-carppa-h2">Seu Título</h2>
   ```

## 📝 Notas Importantes

- ✅ **Sem erros de linting**
- ✅ **TypeScript completo**
- ✅ **Responsivo**
- ✅ **Performance otimizada**
- ✅ **Acessibilidade mantida**
- ✅ **Compatível com Next.js 14**

---

**Sistema implementado com sucesso! 🎉**
