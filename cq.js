export default {
  getAttrArrs(arr, attr) {
    let attrValue = arr.map((item) => {
      return item[attr]
    })
    let attrValueList = []
    for (let i = 0; i < attrValue.length; i++) {
      if (attrValue.indexOf(attrValue[i]) === i) {
        attrValueList.push(attrValue[i])
      }
    }
    let newAttr = []
    let newAttrs = []
    for (let i = 0; i < attrValueList.length; i++) {
      newAttr = []
      newAttr = arr.filter(function (item) {
        return item[attr] === attrValueList[i]
      })
      newAttrs.push(newAttr)
    }
    return newAttrs
  },
  setting: {
    // 是否允许自定义的snippet片段提示
    'editor.snippetSuggestions': 'top',
    'editor.fontSize': 14,
    'editor.fontWeight': '400',
    'editor.formatOnType': true,
    'guides.enabled': false,
    'editor.tabSize': 2,
    'files.autoSave': 'afterDelay',
    'files.autoSaveDelay': 10000,
    'git.confirmSync': false,
    'editor.renderWhitespace': 'boundary',
    'editor.cursorBlinking': 'smooth',
    'editor.minimap.enabled': true,
    'editor.minimap.renderCharacters': false,
    'window.title': '${dirty}${activeEditorMedium}${separator}${rootName}',
    'editor.codeLens': true,
    // 配置文件关联，以便启用对应的提示
    'files.associations': {
      '*.vue': 'vue',
      '*.wxss': 'css',
    },
    // 配置emmet是否启用tab展开缩写
    'emmet.triggerExpansionOnTab': true,
    // 配置emmet对文件类型的支持
    'emmet.syntaxProfiles': {
      javascript: 'jsx',
      vue: 'html',
      'vue-html': 'html',
    },
    // eslint配置文件
    'eslint.options': {
      extensions: ['.js', '.vue'],
    },
    'search.exclude': {
      '**/node_modules': true,
      '**/bower_components': true,
      '**/dist': true,
    },
    'vetur.format.defaultFormatter.html': 'prettier',
    // 格式化快捷键（默认）：Shift+Alt+F
    // prettier进行格式化时，开启eslint支持
    'prettier.eslintIntegration': true,
    // 是否使用单引号
    'prettier.singleQuote': true,
    // 去掉代码结尾分号
    'prettier.semi': false,
    'prettier.printWidth': 180, //指定换行的长度，指定合适的值就不会很短就换行
    'dart.flutterSdkPath': '/Applications/flutter',
    // "[javascript]": {
    //   "editor.defaultFormatter": "esbenp.prettier-vscode"
    // },
    'git.autofetch': true,
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': true,
    },
    'workbench.statusBar.visible': false,
    'editor.formatOnPaste': true,
    'editor.formatOnSave': true,
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    'settingsSync.ignoredSettings': [],
    'settingsSync.ignoredExtensions': [],
    // "[vue]": {
    //   "editor.defaultFormatter": "esbenp.prettier-vscode"
    // },
  },
}
