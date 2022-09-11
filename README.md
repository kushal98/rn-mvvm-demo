# mvvm-demo
A Todo App to demonstrate the usage of MVVM architecture in a react native application.
Medium Article - 

## Key Features 
```
- View the list of todo items.
- Create new todo items.
- Update an existing todo items.
- Delete existing todo item.
```

## Folder Structure

```
├── App.tsx
├── README.md
├── __tests__
├── android
├── app.json
├── babel.config.js
├── index.js
├── ios
├── metro.config.js
├── node_modules
├── package-lock.json
├── package.json
├── src
    ├── components
    │   ├── TodoItem.tsx
    │   └── index.ts
    ├── navigation
    │   ├── index.tsx
    │   └── screenMap.ts
    ├── screens
    │   ├── HomeTodoScreen.tsx
    │   ├── NewTodoScreen.tsx
    │   ├── UpdateTodoScreen.tsx
    │   └── index.ts
    ├── store
    │   ├── TodoStore.ts
    │   ├── index.ts
    │   └── todoSlice.ts
    ├── types
    │   ├── genericTypes.ts
    │   └── stateTypes.ts
    ├── view-controllers
    │   ├── useHomeTodoController.ts
    │   ├── useNewTodoController.ts
    │   └── useUpdateTodoController.ts
    └── view-models
        └── useTodoViewModel.ts
├── tsconfig.json
└── yarn.lock

```
