# Ui автотесты с использованием Selenium

-   selenium/mocha;
-   typescript.

## Использование

Команды запуска с использованием npm:

```
- npm run start, запуск тестов в безголовном режиме
- npm run dev, запуск тестов
```

Организационная структура проекта:

```
root
├── ...
├── drivers/
│     ├── ...
│     └── chromedriver
├── tests/
│     ├── specs/
│     │     ├── ...
│     │     └── [pageName]/
│     │           └── index.spec.ts
│     └── driver.ts
```
