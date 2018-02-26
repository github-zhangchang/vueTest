
(function () {

    const MyPlugin = {}

    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('全局方法 myGlobalMethod()');
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (el, binding) {
            el.innerHTML = binding.value
        })

        // 3. 添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log('实例方法 $myMethod()')
        }
    }

    window.MyPlugin = MyPlugin

})()