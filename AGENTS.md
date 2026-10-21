## Описание проекта

Это пет-проект на Корпоративный лендинг с B2B-сегментом.

## Управление задачами

1. **Сначала планирование**: Запиши план в файл `tasks/todo.md` с отмечаемыми пунктами
2. **Проверка плана**: Зафиксируй изменения перед началом реализации
3. **Отслеживание прогресса**: Отмечай выполненные пункты по мере продвижения
4. **Объяснение изменений**: Краткое описание каждого шага
5. **Документирование результатов**: Добавь раздел обзора в файл `tasks/todo.md`
6. **Извлечение уроков**: Обнови файл `tasks/lessons.md` после внесения исправлений

## Основные принципы

- **Простота прежде всего**: Делай каждое изменение максимально простым. Минимальные правки кода
- **Не ленись**: Находи первопричины. Никаких временных решений. Соответствуй практикам опытных разработчиков
- **Минимальное влияние**: Изменения должны затрагивать только необходимое

## Технический стек (Tech Stack)

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS v4 (`@import "tailwindcss"`)
- npm (package-lock.json), ESLint 9 + eslint-config-next

## Строгие правила кода (Code Standards)

### Server vs Client Components

- По умолчанию все компоненты — **Server Components** (без директивы)
- `"use client"` добавлять **только** при наличии: хуков (`useState`, `useEffect`), браузерных API, обработчиков событий (`onClick` и т.д.)
- Никогда не помечать layout'ы и страницы как `"use client"` без крайней необходимости
- Данные получать в Server Components и передавать пропсами вниз

### Правила типизации TypeScript

- **Запрещено**: `any`, `as any`, игнорирование ошибок через `// @ts-ignore`
- **Обязательно**: явные типы для пропсов компонентов (`interface Props { ... }`)
- Предпочитать `interface` над `type` для объектов
- Для async Server Components: `Promise<JSX.Element>` или просто возвращаемый тип из функции
- Использовать `satisfies` вместо `as` где возможно

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in node_modules/next/dist/docs/ before writing any code.

<!-- END:nextjs-agent-rules -->
