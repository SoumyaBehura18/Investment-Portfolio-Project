/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",

  preset: "@vue/cli-plugin-unit-jest",

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};

module.exports = config;


// vue-project-structure
// ¦   
// ¦   .browserslistrc
// ¦   .eslintrc.js
// ¦   .gitignore
// ¦   babel.config.js
// ¦   cypress.json
// ¦   jest.config.js
// ¦   package-lock.json
// ¦   package.json
// ¦   README.md
// ¦   tsconfig.json
// ¦   vue.config.js
// ¦   
// +---node_modules
// ¦
// +---public
// ¦   ¦   favicon.ico
// ¦   ¦   index.html
// ¦   ¦   robots.txt
// ¦   ¦   
// ¦   +---img
// ¦       +---icons
// ¦               
// +---src
// ¦   ¦   App.vue
// ¦   ¦   main.ts
// ¦   ¦   registerServiceWorker.ts
// ¦   ¦   shims-vue.d.ts
// ¦   ¦   
// ¦   +---api
// ¦   ¦       index.js
// ¦   ¦   
// ¦   +---assets
// ¦   ¦       logo.png
// ¦   ¦       
// ¦   +---components
// ¦   ¦       HelloWorld.vue
// ¦   ¦       
// ¦   +---models
// ¦   ¦       User.ts
// ¦   ¦       
// ¦   +---router
// ¦   ¦       index.ts
// ¦   ¦       
// ¦   +---services
// ¦   ¦       UserService.ts
// ¦   ¦       
// ¦   +---store
// ¦   ¦       index.ts
// ¦   ¦       
// ¦   +---views
// ¦           AboutView.vue
// ¦           HomeView.vue
// ¦           
// +---tests
//     +---e2e
//     ¦   ¦   .eslintrc.js
//     ¦   ¦   
//     ¦   +---plugins
//     ¦   ¦       index.js
//     ¦   ¦       
//     ¦   +---specs
//     ¦   ¦       test.js
//     ¦   ¦       
//     ¦   +---support
//     ¦           commands.js
//     ¦           index.js
//     ¦           
//     +---unit
//             example.spec.ts
            