import { defineConfig } from "vite";
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
              {
                entry: 'main.js',
                filename: 'index.html',
                template: 'index.html',
                injectOptions: {
                  data: {
                    title: 'index',
                    injectScript: `<script src="./inject.js"></script>`,
                  },
                  tags: [
                    {
                      injectTo: 'body-prepend',
                      tag: 'div',
                      attrs: {
                        id: 'tag1',
                      },
                    },
                  ],
                },
              },
              {
                entry: '../main.js',
                filename: 'user/user.html',
                template: 'user/user.html',
                injectOptions: {
                  data: {
                    title: 'user | auctionhouse',
                    injectScript: `<script src="./inject.js"></script>`,
                  },
                  tags: [
                    {
                      injectTo: 'body-prepend',
                      tag: 'div',
                      attrs: {
                        id: 'tag2',
                      },
                    },
                  ],
                },
              },
              {
                entry: '../main.js',
                filename: 'item/item.html',
                template: 'item/item.html',
                injectOptions: {
                  data: {
                    title: 'item | auctionhouse',
                    injectScript: `<script src="./inject.js"></script>`,
                  },
                  tags: [
                    {
                      injectTo: 'body-prepend',
                      tag: 'div',
                      attrs: {
                        id: 'tag3',
                      },
                    },
                  ],
                },
              },
            ],
          }),
    ],
    base: "/semesterproject-2-olemartin/",
});
