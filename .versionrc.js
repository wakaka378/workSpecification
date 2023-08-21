module.exports = {
  header: '# 更新历史 \n\n',
  types: [
    { type: 'feat', section: '✨ Features | 新功能', hidden: false},
    { type: 'release', section: '🚀 Release | 发布', hidden: false},
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复', hidden: false },
    { type: 'init', section: '🎉 Init | 初始化', hidden: true },
    { type: 'test', section: '✅ Tests | 测试', hidden: false },
    { type: 'revert', section: '⏪ Revert | 回退', hidden: false },
    { type: 'build', section: '📦‍ Build System | 打包构建', hidden: false },
    { type: 'ci', section: 'ci | 打包构建fsadfa', hidden: false },
  ],
  skip: {
    bump: true, //缓存变化，并重置git状态至最近的tag节点
    changelog: false, //自动产出changelog文档
    commit: true, //提交变动
    tag: true //在git中增加tag标识
  }
}
