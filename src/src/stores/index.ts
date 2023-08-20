import { defineStore } from 'pinia'

// interface State {
//   userList: UserInfo[]
//   user: UserInfo | null
//   current: number
// }

// interface UserInfo {
//   name: string
//   age: number
// }
export const userUsersStore = defineStore('users', {
  state: () => {
    return {
      name: 'inkun',
      current: 1
    }
  },
  getters: {
    getUserName(state: any) {
      return '大家好，我是' + state.name
    },
    getName(): string {
      return this.getUserName + '🐔实在太帅'
    }
  },
  actions: {
    randomizeCounter(): void {
      // this.current = Math.round(100 * Math.random())
    }
  },
  persist: true
})
