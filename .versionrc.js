module.exports = {
  header: '# 更新历史 \n\n',
  types: [
    { type: 'feat', section: '✨ Features | 新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
    { type: 'init', section: '🎉 Init | 初始化' },
    { type: 'docs', section: '✏️ Documentation | 文档' },
    { type: 'style', section: '💄 Styles | 风格' },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
    { type: 'test', section: '✅ Tests | 测试' },
    { type: 'revert', section: '⏪ Revert | 回退' },
    { type: 'build', section: '📦‍ Build System | 打包构建' },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具' },
    { type: '🔧  CI', section: '👷 Continuous Integration | CI 配置' },
    { type: ':wrench: CI', section: '👷 123123CI 配置' },
    { type: 'WIP', section: '👷 Continuous Integration | CI wip' },
    { type: ':construction: WIP', section: '👷 123123 Integration | CI wip' }
  ],
  skip: {
    bump: true, //缓存变化，并重置git状态至最近的tag节点
    changelog: true, //自动产出changelog文档
    commit: false, //提交变动
    tag: true //在git中增加tag标识
  }
}
