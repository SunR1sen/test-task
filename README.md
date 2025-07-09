Тестовое задание для Aads.

## 🚀 Технологии

- **React 18** + **TypeScript**
- **Vite** — быстрый сборщик
- **Zustand** — управление состоянием
- **Ant Design** — UI-компоненты и иконки
- **SCSS** — модульные стили, переменные

## 📁 Структура

```
src/
├── components/          # Переиспользуемые компоненты (Footer, HeaderNav, StatusBadge, DeleteButton)
├── features/            # Крупные блоки (HeroSection, CampaignsTable, CampaignsHeader, CreateCampaignModal, Header)
├── layouts/             # Layout компоненты
├── pages/               # Страницы приложения
├── store/               # Zustand store
├── styles/              # Глобальные и переменные SCSS
└── types/               # Типы TypeScript
```

## 🎯 Функциональность
- Просмотр, фильтрация, создание и удаление кампаний
- Адаптивный дизайн (гриды, крупные чекбоксы, мобильная модалка)
- Сохранение данных в localStorage
- Базовая валидация формы

## 🛠 Установка и запуск

```bash
git clone <repository-url>
cd test-task
npm install
npm run dev
```

## 💡 Разработка
- Используйте переменные из `src/styles/variables.scss`
- Следуйте структуре conventional commits (feat:, fix:, refactor:, chore: ...)
- Все стили — через SCSS-модули, без глобальных margin/padding

## 📄 Лицензия
MIT License
