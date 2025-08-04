// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import umlPlugin from "markdown-it-plantuml";
import table_captions from "markdown-it-table-captions";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  {
    text: "Publica\xE7\xF5es",
    icon: "pen-to-square",
    link: "/article/"
  },
  {
    text: "Categoria",
    icon: "list",
    link: "/category/"
  },
  {
    text: "Tag",
    icon: "tag",
    link: "/tag/"
  },
  {
    text: "Exerc\xEDcios",
    icon: "book",
    link: "/category/exercicio/"
  },
  {
    text: "Trabalho",
    icon: "laptop-code",
    link: "/category/trabalho/"
  },
  {
    text: "Para Entrega",
    icon: "paper-plane",
    link: "/category/entrega/"
  },
  {
    text: "Timeline",
    icon: "clock",
    link: "/timeline/"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar(
  {
    "/posts/": "structure"
  }
);

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  //hostname: "https://mister-hope.github.io",
  author: {
    name: "IFBA SAJ",
    url: "https://github.com/leandro-costa"
  },
  copyright: false,
  lastUpdated: false,
  contributors: false,
  logo: "/logo.svg",
  repo: "2025-ifba-saj-inf-poo/blog",
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  footer: "Material de aula da disciplina de POO IFBA SAJ",
  displayFooter: true,
  blog: {
    description: "Material de Aula",
    //intro: "/intro.html",
    avatar: "/assets/icon/icon-512.png",
    medias: {
      Email: "mailto:leandro.costa@ifba.edu.br",
      GitHub: "https://github.com/leandro-costa"
    }
  },
  metaLocales: {
    editLink: "Edite esta p\xE1gina no GitHub",
    toc: "Nesta P\xE1gina",
    date: "Data"
  },
  // enable it to preview all changes in time
  hotReload: true,
  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended"
            };
        }
      }
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    // uncomment these if you need TeX support
    math: {
      // install katex before enabling it
      //type: "katex",
      // or install mathjax-full before enabling it
      type: "mathjax"
    }
    // install chart.js before enabling it
    // chartjs: true,
    // install echarts before enabling it
    // echarts: true,
    // install flowchart.ts before enabling it
    // flowchart: true,
    // install mermaid before enabling it
    // mermaid: true,
    // playground: {
    //   presets: ["ts", "vue"],
    // },
    // install @vue/repl before enabling it
    // vuePlayground: true,
    // install sandpack-vue3 before enabling it
    // sandpack: true,
    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
  plugins: {
    blog: {
      excerpt: false
    },
    search: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    components: {
      components: ["Badge", "VPCard"]
    },
    icon: {
      prefix: "fa6-solid:"
    },
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/icon-152.png",
        statusBarColor: "black"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/blog/",
  head: [
    // Adiciona o CSS do Codapi
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.css"
      }
    ],
    // Adiciona o script JavaScript do Codapi
    [
      "script",
      {
        src: "https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.js"
      }
    ],
    [
      "script",
      {
        src: "https://www.jdoodle.com/assets/jdoodle-pym.min.js",
        type: "text/javascript"
      }
    ]
  ],
  lang: "pt-BR",
  title: "2025 POO",
  description: "Material das Aulas",
  extendsMarkdown: (md) => {
    md.use(umlPlugin, {
      openMarker: "```plantuml",
      closeMarker: "```"
      //server: 'https://kroki.io/plantuml/'
    });
    md.use(table_captions);
  },
  theme: theme_default,
  // Enable it with pwa
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9JRkJBLzIwMjUwSW50UG9vL2Jsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSUZCQVxcXFwyMDI1MEludFBvb1xcXFxibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9JRkJBLzIwMjUwSW50UG9vL2Jsb2cvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB1bWxQbHVnaW4gZnJvbSAnbWFya2Rvd24taXQtcGxhbnR1bWwnO1xyXG5pbXBvcnQgdGFibGVfY2FwdGlvbnMgZnJvbSAnbWFya2Rvd24taXQtdGFibGUtY2FwdGlvbnMnXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XHJcbiAgYmFzZTogXCIvYmxvZy9cIixcclxuICBoZWFkOiBbXHJcbiAgICAvLyBBZGljaW9uYSBvIENTUyBkbyBDb2RhcGlcclxuICAgIFtcclxuICAgICAgXCJsaW5rXCIsXHJcbiAgICAgIHtcclxuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vQGFudG9uei9jb2RhcGlAMC4xOS4xMC9kaXN0L3NuaXBwZXQuY3NzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgLy8gQWRpY2lvbmEgbyBzY3JpcHQgSmF2YVNjcmlwdCBkbyBDb2RhcGlcclxuICAgIFtcclxuICAgICAgXCJzY3JpcHRcIixcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCJodHRwczovL3VucGtnLmNvbS9AYW50b256L2NvZGFwaUAwLjE5LjEwL2Rpc3Qvc25pcHBldC5qc1wiLFxyXG4gICAgICB9LCAgICAgIFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJzY3JpcHRcIixcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCJodHRwczovL3d3dy5qZG9vZGxlLmNvbS9hc3NldHMvamRvb2RsZS1weW0ubWluLmpzXCIsXHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0L2phdmFzY3JpcHRcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgXSxcclxuXHJcbiAgbGFuZzogXCJwdC1CUlwiLFxyXG4gIHRpdGxlOiBcIjIwMjUgUE9PXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiTWF0ZXJpYWwgZGFzIEF1bGFzXCIsXHJcblxyXG4gIGV4dGVuZHNNYXJrZG93bjogKG1kKSA9PiB7ICAgIFxyXG4gICAgbWQudXNlKHVtbFBsdWdpbiwge1xyXG4gICAgICBvcGVuTWFya2VyOiAnYGBgcGxhbnR1bWwnLCBcclxuICAgICAgY2xvc2VNYXJrZXI6ICdgYGAnLFxyXG4gICAgICAvL3NlcnZlcjogJ2h0dHBzOi8va3Jva2kuaW8vcGxhbnR1bWwvJ1xyXG4gICAgfSlcclxuICAgIG1kLnVzZSh0YWJsZV9jYXB0aW9ucylcclxuICB9LFxyXG5cclxuXHJcbiAgdGhlbWUsXHJcblxyXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxyXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovSUZCQS8yMDI1MEludFBvby9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXElGQkFcXFxcMjAyNTBJbnRQb29cXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9JRkJBLzIwMjUwSW50UG9vL2Jsb2cvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIC8vaG9zdG5hbWU6IFwiaHR0cHM6Ly9taXN0ZXItaG9wZS5naXRodWIuaW9cIixcclxuXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBcIklGQkEgU0FKXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xlYW5kcm8tY29zdGFcIixcclxuICB9LFxyXG5cclxuICBjb3B5cmlnaHQ6IGZhbHNlLFxyXG5cclxuICBsYXN0VXBkYXRlZDogZmFsc2UsXHJcbiAgY29udHJpYnV0b3JzOiBmYWxzZSxcclxuXHJcbiAgbG9nbzogXCIvbG9nby5zdmdcIixcclxuXHJcbiAgcmVwbzogXCIyMDI1LWlmYmEtc2FqLWluZi1wb28vYmxvZ1wiLFxyXG5cclxuICBkb2NzRGlyOiBcInNyY1wiLFxyXG5cclxuICAvLyBuYXZiYXJcclxuICBuYXZiYXIsXHJcblxyXG4gIC8vIHNpZGViYXJcclxuICBzaWRlYmFyLFxyXG5cclxuICBmb290ZXI6IFwiTWF0ZXJpYWwgZGUgYXVsYSBkYSBkaXNjaXBsaW5hIGRlIFBPTyBJRkJBIFNBSlwiLFxyXG5cclxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG5cclxuICBibG9nOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJNYXRlcmlhbCBkZSBBdWxhXCIsXHJcbiAgICAvL2ludHJvOiBcIi9pbnRyby5odG1sXCIsXHJcblxyXG4gICAgYXZhdGFyOiBcIi9hc3NldHMvaWNvbi9pY29uLTUxMi5wbmdcIixcclxuICAgIG1lZGlhczoge1xyXG4gICAgICBFbWFpbDogXCJtYWlsdG86bGVhbmRyby5jb3N0YUBpZmJhLmVkdS5iclwiLFxyXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xlYW5kcm8tY29zdGFcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWV0YUxvY2FsZXM6IHtcclxuICAgIGVkaXRMaW5rOiBcIkVkaXRlIGVzdGEgcFx1MDBFMWdpbmEgbm8gR2l0SHViXCIsXHJcbiAgICB0b2M6IFwiTmVzdGEgUFx1MDBFMWdpbmFcIixcclxuICAgIGRhdGU6IFwiRGF0YVwiLFxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLy8gZW5hYmxlIGl0IHRvIHByZXZpZXcgYWxsIGNoYW5nZXMgaW4gdGltZVxyXG4gIGhvdFJlbG9hZDogdHJ1ZSxcclxuXHJcbiAgLy8gVGhlc2UgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBhbGlnbjogdHJ1ZSxcclxuICAgIGF0dHJzOiB0cnVlLFxyXG4gICAgY29kZVRhYnM6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IHRydWUsXHJcbiAgICBkZW1vOiB0cnVlLFxyXG4gICAgZmlndXJlOiB0cnVlLFxyXG4gICAgZ2ZtOiB0cnVlLFxyXG4gICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICBpbWdTaXplOiB0cnVlLFxyXG4gICAgaW5jbHVkZTogdHJ1ZSxcclxuICAgIG1hcms6IHRydWUsXHJcbiAgICBwbGFudHVtbDogdHJ1ZSxcclxuICAgIHNwb2lsZXI6IHRydWUsXHJcbiAgICBzdHlsaXplOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWVuZGVkXCIsXHJcbiAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXHJcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHN1YjogdHJ1ZSxcclxuICAgIHN1cDogdHJ1ZSxcclxuICAgIHRhYnM6IHRydWUsXHJcbiAgICB0YXNrbGlzdDogdHJ1ZSxcclxuICAgIHZQcmU6IHRydWUsXHJcblxyXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSBuZWVkIFRlWCBzdXBwb3J0XHJcbiAgICBtYXRoOiB7XHJcbiAgICAgIC8vIGluc3RhbGwga2F0ZXggYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAgIC8vdHlwZTogXCJrYXRleFwiLFxyXG4gICAgICAvLyBvciBpbnN0YWxsIG1hdGhqYXgtZnVsbCBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgdHlwZTogXCJtYXRoamF4XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGluc3RhbGwgY2hhcnQuanMgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAvLyBjaGFydGpzOiB0cnVlLFxyXG5cclxuICAgIC8vIGluc3RhbGwgZWNoYXJ0cyBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgIC8vIGVjaGFydHM6IHRydWUsXHJcblxyXG4gICAgLy8gaW5zdGFsbCBmbG93Y2hhcnQudHMgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAvLyBmbG93Y2hhcnQ6IHRydWUsXHJcblxyXG4gICAgLy8gaW5zdGFsbCBtZXJtYWlkIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgLy8gbWVybWFpZDogdHJ1ZSxcclxuXHJcbiAgICAvLyBwbGF5Z3JvdW5kOiB7XHJcbiAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBpbnN0YWxsIEB2dWUvcmVwbCBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgIC8vIHZ1ZVBsYXlncm91bmQ6IHRydWUsXHJcblxyXG4gICAgLy8gaW5zdGFsbCBzYW5kcGFjay12dWUzIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgLy8gc2FuZHBhY2s6IHRydWUsXHJcblxyXG4gICAgLy8gaW5zdGFsbCBAdnVlcHJlc3MvcGx1Z2luLXJldmVhbGpzIGFuZCB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IG5lZWQgc2xpZGVzXHJcbiAgICAvLyByZXZlYWxqczoge1xyXG4gICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxyXG4gICAgLy8gfSxcclxuICB9LFxyXG5cclxuICBwbHVnaW5zOiB7XHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGV4Y2VycHQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaDogdHJ1ZSxcclxuXHJcbiAgICAvLyBJbnN0YWxsIEB3YWxpbmUvY2xpZW50IGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgLy8gTm90ZTogVGhpcyBpcyBmb3IgdGVzdGluZyBPTkxZIVxyXG4gICAgLy8gWW91IE1VU1QgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2UgaW4gcHJvZHVjdGlvbi5cclxuICAgIC8vIGNvbW1lbnQ6IHtcclxuICAgIC8vICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXHJcbiAgICAvLyAgIHNlcnZlclVSTDogXCJodHRwczovL3dhbGluZS1jb21tZW50LnZ1ZWpzLnByZXNzXCIsXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXHJcbiAgICB9LFxyXG5cclxuICAgIGljb246IHtcclxuICAgICAgcHJlZml4OiBcImZhNi1zb2xpZDpcIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gaW5zdGFsbCBAdnVlcHJlc3MvcGx1Z2luLXB3YSBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXHJcbiAgICBwd2E6IHtcclxuICAgICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcclxuICAgICAgY2FjaGVIVE1MOiB0cnVlLFxyXG4gICAgICBjYWNoZUltYWdlOiB0cnVlLFxyXG4gICAgICBhcHBlbmRCYXNlOiB0cnVlLFxyXG4gICAgICBhcHBsZToge1xyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2ljb24tMTUyLnBuZ1wiLFxyXG4gICAgICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9pY29uLTUxMi5wbmdcIixcclxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2ljb24tMTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vaWNvbi01MTIucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vaWNvbi0xOTIucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9JRkJBLzIwMjUwSW50UG9vL2Jsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSUZCQVxcXFwyMDI1MEludFBvb1xcXFxibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9JRkJBLzIwMjUwSW50UG9vL2Jsb2cvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcclxuICBcIi9cIixcclxuICB7XHJcbiAgICB0ZXh0OiBcIlB1YmxpY2FcdTAwRTdcdTAwRjVlc1wiLFxyXG4gICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICBsaW5rOiBcIi9hcnRpY2xlL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJDYXRlZ29yaWFcIixcclxuICAgIGljb246IFwibGlzdFwiLFxyXG4gICAgbGluazogXCIvY2F0ZWdvcnkvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlRhZ1wiLFxyXG4gICAgaWNvbjogXCJ0YWdcIixcclxuICAgIGxpbms6IFwiL3RhZy9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiRXhlcmNcdTAwRURjaW9zXCIsXHJcbiAgICBpY29uOiBcImJvb2tcIixcclxuICAgIGxpbms6IFwiL2NhdGVnb3J5L2V4ZXJjaWNpby9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiVHJhYmFsaG9cIixcclxuICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcclxuICAgIGxpbms6IFwiL2NhdGVnb3J5L3RyYWJhbGhvL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJQYXJhIEVudHJlZ2FcIixcclxuICAgIGljb246IFwicGFwZXItcGxhbmVcIixcclxuICAgIGxpbms6IFwiL2NhdGVnb3J5L2VudHJlZ2EvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlRpbWVsaW5lXCIsXHJcbiAgICBpY29uOiBcImNsb2NrXCIsXHJcbiAgICBsaW5rOiBcIi90aW1lbGluZS9cIixcclxuICB9LFxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9JRkJBLzIwMjUwSW50UG9vL2Jsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSUZCQVxcXFwyMDI1MEludFBvb1xcXFxibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSUZCQS8yMDI1MEludFBvby9ibG9nL3NyYy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XHJcbiAgICBcIi9wb3N0cy9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICAgIH0sXHJcbik7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyx3QkFBd0I7QUFDbFUsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sb0JBQW9COzs7QUNGb1EsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFeFQsSUFBTyxpQkFBUSxPQUFPO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7OztBQ3ZDa1MsU0FBUyxlQUFlO0FBRTNULElBQU8sa0JBQVE7QUFBQSxFQUFRO0FBQUEsSUFDbkIsV0FBVztBQUFBLEVBQ1g7QUFDSjs7O0FGQUEsSUFBTyxnQkFBUSxVQUFVO0FBQUE7QUFBQSxFQUd2QixRQUFRO0FB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
