# React native app using MVVM
A Todo App to demonstrate the usage of MVVM architecture in a react native application.

### Medium Article - https://medium.com/p/ad77fa0f851b/edit

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

## References
- https://www.detroitlabs.com/intro-to-mvvm-in-react-with-mobx/
- https://paulallies.medium.com/clean-mvvm-with-react-and-react-hooks-ebc37b22542f
- https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21
