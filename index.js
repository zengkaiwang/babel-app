const babel = require('@babel/core')

// babel/types 工具库 该模块包含手动构建TS的方法，并检查AST节点的类型。(根据不同节点类型进行转化实现)
const babelTypes = require('@babel/types')

// 转化箭头函数的插件
const arrowFunction = require('@babel/plugin-transform-arrow-functions')

const sourceCode = `const arrowFunc = () => {
	console.log(this)
}`

const targetCode = babel.transform(sourceCode, {
  plugins: [arrowFunction],
})

console.log(targetCode.code)
