module.exports = {
  header: '# 更新历史 \n\n',
  types: [
    { type: 'feat', section: '✨ Features | 新功能', hidden: false},
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复', hidden: false },
    { type: 'init', section: '🎉 Init | 初始化', hidden: false },
    { type: 'docs', section: '✏️ Documentation | 文档', hidden: false },
    { type: 'style', section: '💄 Styles | 风格', hidden: false },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构', hidden: false },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化', hidden: false },
    { type: 'test', section: '✅ Tests | 测试', hidden: false },
    { type: 'revert', section: '⏪ Revert | 回退', hidden: false },
    { type: 'build', section: '📦‍ Build System | 打包构建', hidden: false },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具', hidden: false },
    { type: '🔧  CI', section: '👷 Continuous Integration | CI 配置', hidden: false },
    { type: ':wrench: CI', section: '👷 123123CI 配置', hidden: false },
    { type: 'WIP', section: '👷 Continuous Integration | CI wip', hidden: false },
    { type: ':construction: WIP', section: '👷 123123 Integration | CI wip', hidden: false }
  ],
  skip: {
    bump: true, //缓存变化，并重置git状态至最近的tag节点
    changelog: false, //自动产出changelog文档
    commit: true, //提交变动
    tag: true //在git中增加tag标识
  }
}
