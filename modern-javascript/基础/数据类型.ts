// BigInt类型
// JavaScript对于±(253-1)的数字会出现精度丢失,所有大于 (253-1) 的奇数都不能用 “number” 类型存储
// 在数字后追加一个 n 即可创建 BigInt 值
// 兼容性问题: Firefox/Chrome/Edge/Safari 支持 BigInt, IE没有
const bigInt = 123456789012345678901234567890n

// null值
// null是独立的类型,只包含null
// JavaScript 中的 null 不是 一个对不存在的object的引用 或者 null指针,而是一个代表 无 、空 或 值未知 的特殊值

// undefined值
// undefined 的含义是 未被赋值
// 如果一个变量已被声明，但未被赋值，那么它的值就是 undefined

// typeof运算符
// 对 typeof x 的调用会以字符串的形式返回数据类型
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"
typeof null // "object"
typeof alert // "function"
// typeof null 的结果为 "object"。这是官方承认的 typeof 的错误，这个问题来自于 JavaScript 语言的早期阶段，并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。typeof 的行为在这里是错误的。
