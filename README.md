
ultimate-js is my node work with Node.js

![Alt text](./system.png)

- **javascript**
  - [declarations](./javascript/declarations/declarations.js) | [variables hoisting](./javascript/declarations/variable_hoisting.js) | block-scope  
  - [function declaration | function express | function hoisting](javascript/function/function_declarate.js)
  - [types | Boolean | null | undefined | Number | Bigint | String](./javascript/types/types.js)   
  - [type conversion](./javascript/types/type_conversion.js)
  - [control flow](./javascript/control_flow) | [if_else](./javascript/control_flow/if_else.js) | [switch](./javascript/control_flow/switch.js)
  - [iterations](./javascript/iterations) | [for | for in | for of](./javascript/iterations/for.js)  | [do-while](./javascript/iterations/do_while.js) 
  - [break](./javascript/terminates_statement/terminates.js) | [continue](./javascript/terminates_statement/terminates.js)
  - [try_catch_finally](./javascript/exception_handling/try_catch_finally.js)
  - [function](./javascript/function) | [declaration](./javascript/function/function_declarate.js) | [nested | closures](./javascript/function/function_nested_closures.js) 
  - function methods | [call](./javascript/function/function_methods_call.js) | [bind](./javascript/function/function_methods_bind.js) | [apply](./javascript/function/function_methods_apply.js)
  - function properties | [arguments | constructor| caller ](./javascript/function/function_properties.js)
  - [build-in-function | eval | parseInt | parseFloat | decodeURL](./javascript/build_in_functions/build_in_function.js)
  - **express_operators**
     - [unary | delete | typeof | in | instance of ](./javascript/expressions_operators/unary_ternary.js) | [ternary](./javascript/expressions_operators/unary_ternary.js)
     - todo[this](./javascript/expressions_operators/this.js)
     - todo[left-hand-side | new | super](./javascript/expressions_operators/new_super.js)
  -  **strings**
     - d
  -  **array**
     - [create | access | populate | length | iterating](./javascript/array/create_access.js)
     - [array methods | concat | push | pop | shift |slice | splice | reverse | sort | indexOf](./javascript/array/array_methods_operator.js)
     - [array methods | map | reduce | filter | forEach| every | some ](./javascript/array/array_methods_iterating.js)
     - [multi-dimensional array](./javascript/array/2d_object_array.js)
  -  **map** 
     - map method | [new | set | get | has | delete | keys | values | entries](./javascript/map/map.js)
     - map iterating[forEach | for of](./javascript/map/map.js)
  -  **set** 
     - set method | [add | has | delete ](./javascript/set/set.js)
     - set iterating | [forEach | for of](./javascript/set/set.js)
  -  **objects** 
     -  [create object](./javascript/objects/create_objects.js)
     -  [enumerate object](./javascript/objects/enumerate_objects.js)
     -  [object_methods](./javascript/objects/objects_methods.js)
     -  [object_inheritance](./javascript/objects/objects_inheritance.js)
     -  [function vs class vs java](./javascript/objects/function_vs_class_vs_java.js)
  -  **async**  
     -  [callback](./javascript/async/callback/callback.js)
     -  [promise](./javascript/async/promise/promise.js) | [create promise](./javascript/async/promise/create_promise.js)
     -  [Generator](./javascript/async/Generator/generator.js)
     -  [async/await](./javascript/async/async_await/async_await.js)    
- **Es6**
   - [scoping and without hoisting](./es6/scoped.js)
   - [arrow functions](./es6/arrow_functions/arrow_function.js)
   - [default parameter](es6/parameter/default_parameter.js)
   - [rest parameter](./es6/parameter/rest_parameter.js)
   - [spread operator](./es6/parameter/rest_parameter.js)
   - [template literals](./es6/template_literal.js)
   - [shorthand property](es6/object_properties/shorthand_property.js)
   - [Computed Property Name](es6/object_properties/computed_property_name.js)
   - [method property](./es6/build_in_methods/build_in_methods.js)   
   - [destructuring assignment](./es6/destructuring/destructuring.js)
   - [Promise](./javascript/async/promise/promise.js)
   - [Generators](./javascript/async/Generator/generator.js)
   - todo[modules](./es6)
   - [class](./es6/classes) | [class definition](./es6/classes/class_definition.js) | [class inheritance](./es6/classes/class_inheritance.js)
   
- **design patterns**  [design patterns](https://loredanacirstea.github.io/es6-design-patterns/#builder)
  - Creational
    - Simple Factory: [wiki](https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)) 
    - *Abstract factory: [wiki](https://en.wikipedia.org/wiki/Abstract_factory_pattern) | [code](design-patterns/creational/abstract_factory/abstract_factory.js) | [best practices]()
    - *Builder: [wiki](https://en.wikipedia.org/wiki/Builder_pattern) | [code1](design-patterns/creational/builder/builder.js) | [best practices orm query build]() 
    - Factory method: [wiki](https://en.wikipedia.org/wiki/Factory_method_pattern) | [code](design-patterns/creational/factory_method/factory_method.js) | [best practices]()
    - *Prototype: [wiki](https://en.wikipedia.org/wiki/Prototype_pattern) | [code](./design-patterns/creational/prototype/prototype.js) | [best practices]() 
    - *Singleton: [wiki](https://en.wikipedia.org/wiki/Singleton_pattern) | [code](./design-patterns/creational/singleton/singleton.js) | [best practices]() 
  - Structual
    - Adapter(wrapper): [wiki](https://en.wikipedia.org/wiki/Adapter_pattern) | [code](./design-patterns/structual/adapter/adapter.js) | [best practices]() 
    - *Bridge: [wiki](https://en.wikipedia.org/wiki/Bridge_pattern) | [code]() | [best practices]() 
    - Composite: [wiki](https://en.wikipedia.org/wiki/Composite_pattern) | [code]() | [best practices]() 
    - *Decorator: [wiki](https://en.wikipedia.org/wiki/Decorator_pattern) | [code]() | [best practices]() 
    - Facade: [wiki](https://en.wikipedia.org/wiki/Facade_pattern) | [code]() | [best practices]() 
    - Flyweight: todo[wiki](https://en.wikipedia.org/wiki/Flyweight_pattern) | [code]() | [best practices]() 
    - Proxy: todo[wiki](https://en.wikipedia.org/wiki/Proxy_pattern) | [code]() | [best practices]() 
  - Behavioral
    - *Chain of responsibility(middleware): [wiki](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern) | [code](./design-patterns/behavioral/chain_of_responsibility/chain_of_responsibility.js) | [best practices]() 
    - Command: todo [wiki](https://en.wikipedia.org/wiki/Command_pattern) | [code]() | [best practices]() 
    - *Interpreter: todo[wiki](https://en.wikipedia.org/wiki/Interpreter_pattern) | [code]() | [best practices]() 
    - *Iterator: [wiki](https://en.wikipedia.org/wiki/Iterator_pattern) | [code]() | [best practices]() 
    - Mediator: todo[wiki](https://en.wikipedia.org/wiki/Mediator_pattern) | [code]() | [best practices]() 
    - Memento: todo[wiki](https://en.wikipedia.org/wiki/Memento_pattern) | [code]() | [best practices]() 
    - Observer: todo[wiki](https://en.wikipedia.org/wiki/Observer_pattern) | [code]() | [best practices]() 
    - State: todo[wiki](https://en.wikipedia.org/wiki/State_pattern) | [code]() | [best practices]() 
    - *Strategy: [wiki](https://en.wikipedia.org/wiki/Strategy_pattern) | [code](./design-patterns/behavioral/strategy/strategy.js) | [best practices]() 
    - Template method : todo[wiki](https://en.wikipedia.org/wiki/Template_method_pattern) | [code]() | [best practices]() 
    - Visitor: todo[wiki](https://en.wikipedia.org/wiki/Visitor_pattern) | [code]() | [best practices]() 

- **typescript**
   - 8.6

- **Node.js**
   - 8.7
  
- **algorithm**  
   - 8.9
  

- **awesome**
  - 8.10
  - [express]()
  - [koa]()
  - [egg]()
  - [nginx](./docs/nginx.md)
  - [mongodb_arbiter](./docs/mongodb_arbiter.md)
  - [mongodb](./docs/mongodb.md) 
  - [mysql](./docs/mysql.md)
  - [redis](./docs/redis.md)
  - [queue]() 
  - [kue]() 
  - [rabitmq]() 
  - [nsq](./docs/queue.md)
  - [external services](./docs/external_services.md)
  - [cloud](./docs/cloud.md)
  - [docker](./docs/docker.md)
  - [mocha](./docs/mocha.md)
  - [async-file]()
  - [typeorm]()
  - [ramda]()
  - [amqplib]()
  - [bcryptjs]()
  - [grpc]()
  - [jsonwebtoken]()
  - [protobufjs]()
  - [deno]()
  