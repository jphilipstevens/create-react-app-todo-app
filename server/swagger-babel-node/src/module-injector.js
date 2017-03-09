const deps = {};
const ModuleInjector = {
    register: (key, dependency) => {
        deps[key] = dependency;
    },
    resolve: key => deps[key]
};

export default ModuleInjector;
