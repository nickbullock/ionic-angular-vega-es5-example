// these dependencies are es6!!!
const transpileList = ['node_modules/vega', 'node_modules/d3', 'node_modules/delaunator'];

module.exports = function(base) {
    return {
        ...base,
        module: {
            ...base.module,
            rules: [
                ...base.module.rules,
                {
                    test: function(fileName) {
                        return transpileList.some(name => fileName.includes(name)) && fileName.endsWith('.js');
                    },
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
}