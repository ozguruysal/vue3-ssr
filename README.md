# Vue 3 Server Side Rendering

This is an expermental SSR setup with Vue 3.

Currently there's no HTML template support or automatic state serialization. Those should be handled manually by updating `server/utils/render.js`.

## Scripts

You can run the following scripts with `yarn` or `npm` like `yarn install`

| Script    | Description                                          |
| --------- | ---------------------------------------------------- |
| `install` | Project setup                                        |
| `dev`     | Compile and start development server with hot-reload |
| `build`   | Compile and minify for production                    |
| `start`   | Start production server                              |
| `lint`    | Run linting for the entire project                   |

## Linting

I use [Prettier](https://prettier.io/), [ESlint](https://eslint.org/), and [eslint-plugin-vue](https://eslint.vuejs.org/) with `vue3-essential` settings. You can edit `.eslintrc.js` to edit settings to your personal preference.
