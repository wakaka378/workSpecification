function bus() {
  // 事件中心，用来存储所有事件
  const eventList = new Map()
  return {
    /**
     * 订阅者
     *
     * @param {string} key
     * @param {function} callback
     */
    on(key, callback) {
      const handlers = eventList.get(key)
      if (handlers) {
        handlers.push(callback)
      } else {
        eventList.set(key, [callback])
      }
    },

    /**
     * 发布事件
     *
     * @param {string} key
     * @param args
     */
    emit(key, ...args) {
      const handlers = eventList.get(key)
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(args)
        })
      }
    },

    /**
     * 取消监听
     *
     * @param {string} key
     * @param {function} callback
     */
    off(key, callback) {
      const handlers = eventList.get(key)

      if (handlers) {
        const index = handlers.indexOf(callback)
        if (index !== -1) {
          return new Error('not find callback')
        }
        handlers.splice(index, 1)
      }
    }
  }
}

const eventBus = bus()
eventBus.on('aa', (value) => {
  console.log('avalue', value)
})

setTimeout(() => {
  eventBus.emit('aa', 'inkun')
  eventBus.emit('bb', 'inkun2')
}, 4000)

eventBus.on('aa', (value) => {
  console.log('aa', value)
})

setTimeout(() => {
  eventBus.off('aa', (value) => {
    console.log('aa', value)
  })
}, 3000)
