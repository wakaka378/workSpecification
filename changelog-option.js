module.exports = {
  writerOpts: {
    transform: (commit) => {
      if (commit.type === 'feat') {
        commit.type = 'hahahhahah ❤️'
      } else if (commit.type === ':sparkles: feat') {
        commit.type = 'cz config feat'
      }
      console.log(commit.type)
      return
    }
  }
}
