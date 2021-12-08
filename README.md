# Minimal Reproduction for [#238](https://github.com/antfu/unplugin-vue-components/issues/238#issuecomment-988544525)

## Steps to Reproduce

1. Run `npx vite`.
2. Go to `http://localhost:3000`.
3. Open `./components/Test.vue` and try changing the text to "TEST1" or something.
4. Notice it doesn't change.
5. Try refreshing the page.
6. Notice it still doesn't change.
7. Try re-running `npx vite`.
8. Notice that now it changes.
9. Re-run the server with `npx vite -c vite.config.alt.js`.
10. Open `./App.vue` and rename `<CustomTest/>` to `<Test/>`.
11. Open `./components/Test.vue` again and try changing the text to "TEST2" or something.
12. Notice the text changes as expected.

## Conclusion

When using a custom resolver, HMR doesn't work.
