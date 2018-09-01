const config = {
  // 项目名称
  projectName: 'TaroDemo',
  // 创建一日
  date: '2018-8-31',
  // 屏幕适配
  // 设计稿px
  designWidth: 750,
  // 尺寸转换
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  // 代码目录
  sourceRoot: 'src',
  // 编译后的文件目录
  outputRoot: 'dist',
  // 使用插件
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    },
    typescript: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        baseUrl: '.',
        declaration: false,
        experimentalDecorators: true,
        jsx: 'preserve',
        jsxFactory: 'Nerv.createElement',
        module: 'commonjs',
        moduleResolution: 'node',
        noImplicitAny: false,
        noUnusedLocals: true,
        outDir: './dist/',
        preserveConstEnums: true,
        removeComments: false,
        rootDir: '.',
        sourceMap: true,
        strictNullChecks: true,
        // 语言
        target: 'es6'
      },
      // TODO 弄明白
      include: [
        'src/**/*'
      ],
      exclude: [
        'node_modules'
      ],
      compileOnSave: false
    }
  },
  // 常量的定义
  defineConstants: {
  },
  // TODO ？？？
  copy: {
     patterns: [
    ],
    options: {
    }
  },
  // 编译成小程序的一些配置
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        url: {
          enable: true,
          limit: 10240
        }
      }
    }
  },
  // 编译成小程序的一些配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
};
