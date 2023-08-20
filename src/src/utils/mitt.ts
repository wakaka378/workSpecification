import mitt from 'mitt'

type Events = {
  onSendName: string
}
const Mit = mitt<Events>()
declare module 'vue' {
  export interface ComponentCustomProperties {
    $bus: typeof Mit
  }
}

export default Mit
