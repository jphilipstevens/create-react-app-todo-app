import ModuleInjector from "./module-injector";
import Repository from "./todos/repository";

ModuleInjector.register("todo-reposity", Repository);
