import { defineUserConfig } from "vuepress";
import umlPlugin from 'markdown-it-plantuml';
import table_captions from 'markdown-it-table-captions'
import { copyPlusPlugin } from 'vuepress-plugin-copy-plus'
import theme from "./theme.js";

export default defineUserConfig({

  plugins:[
    copyPlusPlugin({
      fileExtensions: ['zip', 'gfar']
    })
  ],

  base: "/blog/",
  head: [
    // Adiciona o CSS do Codapi
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.css",
      },
    ],
    // Adiciona o script JavaScript do Codapi
    [
      "script",
      {
        src: "https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.js",
      },      
    ],
    [
      "script",
      {
        src: "https://www.jdoodle.com/assets/jdoodle-pym.min.js",
        type: "text/javascript",
      },
    ],
  ],

  lang: "pt-BR",
  title: "2025 POO",
  description: "Material das Aulas",

  extendsMarkdown: (md) => {    
    md.use(umlPlugin, {
      openMarker: '```plantuml', 
      closeMarker: '```',
      //server: 'https://kroki.io/plantuml/'
    })
    md.use(table_captions)
  },


  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
