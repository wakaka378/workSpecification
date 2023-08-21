module.exports = {
  parserOpts: {
    headerPattern: /^(\w+)\((.*)\): (.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
  },
  referenceActions: ['issue', 'fixes'],
  types: [
    { type: 'feat', section: 'feat:     ✨ 新增功能 | A new feature', emoji: ':sparkles:' },
    { type: 'fix', section: 'fix:       🐛 修复缺陷 | A bug fix', emoji: ':bug:'  },
    { type: 'docs', section: 'docs:     Documentation only changes' },
    {
      type: 'style',
      section: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    },
    {
      type: 'refactor',
      section: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      type: 'perf',
      section: 'perf:     A code change that improves performance',
    },
    { type: 'test', section: 'test:     Adding missing tests' },
    {
      type: 'chore',
      section: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    { type: 'revert', section: 'revert:   Revert to a commit' },
    { type: 'WIP', section: 'WIP:      Work in progress' },
    // ...
  ],
  // ...
};
