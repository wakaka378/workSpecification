/// <reference types="vite/client" />
import mitt from 'mitt'

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
