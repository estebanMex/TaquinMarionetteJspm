!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.register("2", [], function() { return { setters: [], execute: function() {} } });

$__System.registerDynamic("3", ["5", "6", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this,
      GLOBAL = this;
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['backbone', 'underscore'], function(Backbone, _) {
        return factory(Backbone, _);
      });
    } else if (typeof exports !== 'undefined') {
      var Backbone = $__require('5');
      var _ = $__require('6');
      module.exports = factory(Backbone, _);
    } else {
      factory(root.Backbone, root._);
    }
  }(this, function(Backbone, _) {
    "use strict";
    var previousWreqr = Backbone.Wreqr;
    var Wreqr = Backbone.Wreqr = {};
    Backbone.Wreqr.VERSION = '1.3.5';
    Backbone.Wreqr.noConflict = function() {
      Backbone.Wreqr = previousWreqr;
      return this;
    };
    Wreqr.Handlers = (function(Backbone, _) {
      "use strict";
      var Handlers = function(options) {
        this.options = options;
        this._wreqrHandlers = {};
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
        }
      };
      Handlers.extend = Backbone.Model.extend;
      _.extend(Handlers.prototype, Backbone.Events, {
        setHandlers: function(handlers) {
          _.each(handlers, function(handler, name) {
            var context = null;
            if (_.isObject(handler) && !_.isFunction(handler)) {
              context = handler.context;
              handler = handler.callback;
            }
            this.setHandler(name, handler, context);
          }, this);
        },
        setHandler: function(name, handler, context) {
          var config = {
            callback: handler,
            context: context
          };
          this._wreqrHandlers[name] = config;
          this.trigger("handler:add", name, handler, context);
        },
        hasHandler: function(name) {
          return !!this._wreqrHandlers[name];
        },
        getHandler: function(name) {
          var config = this._wreqrHandlers[name];
          if (!config) {
            return;
          }
          return function() {
            return config.callback.apply(config.context, arguments);
          };
        },
        removeHandler: function(name) {
          delete this._wreqrHandlers[name];
        },
        removeAllHandlers: function() {
          this._wreqrHandlers = {};
        }
      });
      return Handlers;
    })(Backbone, _);
    Wreqr.CommandStorage = (function() {
      "use strict";
      var CommandStorage = function(options) {
        this.options = options;
        this._commands = {};
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
        }
      };
      _.extend(CommandStorage.prototype, Backbone.Events, {
        getCommands: function(commandName) {
          var commands = this._commands[commandName];
          if (!commands) {
            commands = {
              command: commandName,
              instances: []
            };
            this._commands[commandName] = commands;
          }
          return commands;
        },
        addCommand: function(commandName, args) {
          var command = this.getCommands(commandName);
          command.instances.push(args);
        },
        clearCommands: function(commandName) {
          var command = this.getCommands(commandName);
          command.instances = [];
        }
      });
      return CommandStorage;
    })();
    Wreqr.Commands = (function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({
        storageType: Wreqr.CommandStorage,
        constructor: function(options) {
          this.options = options || {};
          this._initializeStorage(this.options);
          this.on("handler:add", this._executeCommands, this);
          Wreqr.Handlers.prototype.constructor.apply(this, arguments);
        },
        execute: function(name) {
          name = arguments[0];
          var args = _.rest(arguments);
          if (this.hasHandler(name)) {
            this.getHandler(name).apply(this, args);
          } else {
            this.storage.addCommand(name, args);
          }
        },
        _executeCommands: function(name, handler, context) {
          var command = this.storage.getCommands(name);
          _.each(command.instances, function(args) {
            handler.apply(context, args);
          });
          this.storage.clearCommands(name);
        },
        _initializeStorage: function(options) {
          var storage;
          var StorageType = options.storageType || this.storageType;
          if (_.isFunction(StorageType)) {
            storage = new StorageType();
          } else {
            storage = StorageType;
          }
          this.storage = storage;
        }
      });
    })(Wreqr, _);
    Wreqr.RequestResponse = (function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({request: function(name) {
          if (this.hasHandler(name)) {
            return this.getHandler(name).apply(this, _.rest(arguments));
          }
        }});
    })(Wreqr, _);
    Wreqr.EventAggregator = (function(Backbone, _) {
      "use strict";
      var EA = function() {};
      EA.extend = Backbone.Model.extend;
      _.extend(EA.prototype, Backbone.Events);
      return EA;
    })(Backbone, _);
    Wreqr.Channel = (function(Wreqr) {
      "use strict";
      var Channel = function(channelName) {
        this.vent = new Backbone.Wreqr.EventAggregator();
        this.reqres = new Backbone.Wreqr.RequestResponse();
        this.commands = new Backbone.Wreqr.Commands();
        this.channelName = channelName;
      };
      _.extend(Channel.prototype, {
        reset: function() {
          this.vent.off();
          this.vent.stopListening();
          this.reqres.removeAllHandlers();
          this.commands.removeAllHandlers();
          return this;
        },
        connectEvents: function(hash, context) {
          this._connect('vent', hash, context);
          return this;
        },
        connectCommands: function(hash, context) {
          this._connect('commands', hash, context);
          return this;
        },
        connectRequests: function(hash, context) {
          this._connect('reqres', hash, context);
          return this;
        },
        _connect: function(type, hash, context) {
          if (!hash) {
            return;
          }
          context = context || this;
          var method = (type === 'vent') ? 'on' : 'setHandler';
          _.each(hash, function(fn, eventName) {
            this[type][method](eventName, _.bind(fn, context));
          }, this);
        }
      });
      return Channel;
    })(Wreqr);
    Wreqr.radio = (function(Wreqr, _) {
      "use strict";
      var Radio = function() {
        this._channels = {};
        this.vent = {};
        this.commands = {};
        this.reqres = {};
        this._proxyMethods();
      };
      _.extend(Radio.prototype, {
        channel: function(channelName) {
          if (!channelName) {
            throw new Error('Channel must receive a name');
          }
          return this._getChannel(channelName);
        },
        _getChannel: function(channelName) {
          var channel = this._channels[channelName];
          if (!channel) {
            channel = new Wreqr.Channel(channelName);
            this._channels[channelName] = channel;
          }
          return channel;
        },
        _proxyMethods: function() {
          _.each(['vent', 'commands', 'reqres'], function(system) {
            _.each(messageSystems[system], function(method) {
              this[system][method] = proxyMethod(this, system, method);
            }, this);
          }, this);
        }
      });
      var messageSystems = {
        vent: ['on', 'off', 'trigger', 'once', 'stopListening', 'listenTo', 'listenToOnce'],
        commands: ['execute', 'setHandler', 'setHandlers', 'removeHandler', 'removeAllHandlers'],
        reqres: ['request', 'setHandler', 'setHandlers', 'removeHandler', 'removeAllHandlers']
      };
      var proxyMethod = function(radio, system, method) {
        return function(channelName) {
          var messageSystem = radio._getChannel(channelName)[system];
          return messageSystem[method].apply(messageSystem, _.rest(arguments));
        };
      };
      return new Radio();
    })(Wreqr, _);
    return Backbone.Wreqr;
  }));
  return module.exports;
});

$__System.registerDynamic("5", ["6", "7", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this,
      GLOBAL = this;
  (function(factory) {
    var root = (typeof self == 'object' && self.self == self && self) || (typeof global == 'object' && global.global == global && global);
    if (typeof define === 'function' && define.amd) {
      define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
        root.Backbone = factory(root, exports, _, $);
      });
    } else if (typeof exports !== 'undefined') {
      var _ = $__require('6'),
          $;
      try {
        $ = $__require('7');
      } catch (e) {}
      factory(root, exports, _, $);
    } else {
      root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }
  }(function(root, Backbone, _, $) {
    var previousBackbone = root.Backbone;
    var slice = Array.prototype.slice;
    Backbone.VERSION = '1.2.3';
    Backbone.$ = $;
    Backbone.noConflict = function() {
      root.Backbone = previousBackbone;
      return this;
    };
    Backbone.emulateHTTP = false;
    Backbone.emulateJSON = false;
    var addMethod = function(length, method, attribute) {
      switch (length) {
        case 1:
          return function() {
            return _[method](this[attribute]);
          };
        case 2:
          return function(value) {
            return _[method](this[attribute], value);
          };
        case 3:
          return function(iteratee, context) {
            return _[method](this[attribute], cb(iteratee, this), context);
          };
        case 4:
          return function(iteratee, defaultVal, context) {
            return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
          };
        default:
          return function() {
            var args = slice.call(arguments);
            args.unshift(this[attribute]);
            return _[method].apply(_, args);
          };
      }
    };
    var addUnderscoreMethods = function(Class, methods, attribute) {
      _.each(methods, function(length, method) {
        if (_[method])
          Class.prototype[method] = addMethod(length, method, attribute);
      });
    };
    var cb = function(iteratee, instance) {
      if (_.isFunction(iteratee))
        return iteratee;
      if (_.isObject(iteratee) && !instance._isModel(iteratee))
        return modelMatcher(iteratee);
      if (_.isString(iteratee))
        return function(model) {
          return model.get(iteratee);
        };
      return iteratee;
    };
    var modelMatcher = function(attrs) {
      var matcher = _.matches(attrs);
      return function(model) {
        return matcher(model.attributes);
      };
    };
    var Events = Backbone.Events = {};
    var eventSplitter = /\s+/;
    var eventsApi = function(iteratee, events, name, callback, opts) {
      var i = 0,
          names;
      if (name && typeof name === 'object') {
        if (callback !== void 0 && 'context' in opts && opts.context === void 0)
          opts.context = callback;
        for (names = _.keys(name); i < names.length; i++) {
          events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
        }
      } else if (name && eventSplitter.test(name)) {
        for (names = name.split(eventSplitter); i < names.length; i++) {
          events = iteratee(events, names[i], callback, opts);
        }
      } else {
        events = iteratee(events, name, callback, opts);
      }
      return events;
    };
    Events.on = function(name, callback, context) {
      return internalOn(this, name, callback, context);
    };
    var internalOn = function(obj, name, callback, context, listening) {
      obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
      });
      if (listening) {
        var listeners = obj._listeners || (obj._listeners = {});
        listeners[listening.id] = listening;
      }
      return obj;
    };
    Events.listenTo = function(obj, name, callback) {
      if (!obj)
        return this;
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var listening = listeningTo[id];
      if (!listening) {
        var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
        listening = listeningTo[id] = {
          obj: obj,
          objId: id,
          id: thisId,
          listeningTo: listeningTo,
          count: 0
        };
      }
      internalOn(obj, name, callback, this, listening);
      return this;
    };
    var onApi = function(events, name, callback, options) {
      if (callback) {
        var handlers = events[name] || (events[name] = []);
        var context = options.context,
            ctx = options.ctx,
            listening = options.listening;
        if (listening)
          listening.count++;
        handlers.push({
          callback: callback,
          context: context,
          ctx: context || ctx,
          listening: listening
        });
      }
      return events;
    };
    Events.off = function(name, callback, context) {
      if (!this._events)
        return this;
      this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
      });
      return this;
    };
    Events.stopListening = function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo)
        return this;
      var ids = obj ? [obj._listenId] : _.keys(listeningTo);
      for (var i = 0; i < ids.length; i++) {
        var listening = listeningTo[ids[i]];
        if (!listening)
          break;
        listening.obj.off(name, callback, this);
      }
      if (_.isEmpty(listeningTo))
        this._listeningTo = void 0;
      return this;
    };
    var offApi = function(events, name, callback, options) {
      if (!events)
        return;
      var i = 0,
          listening;
      var context = options.context,
          listeners = options.listeners;
      if (!name && !callback && !context) {
        var ids = _.keys(listeners);
        for (; i < ids.length; i++) {
          listening = listeners[ids[i]];
          delete listeners[listening.id];
          delete listening.listeningTo[listening.objId];
        }
        return;
      }
      var names = name ? [name] : _.keys(events);
      for (; i < names.length; i++) {
        name = names[i];
        var handlers = events[name];
        if (!handlers)
          break;
        var remaining = [];
        for (var j = 0; j < handlers.length; j++) {
          var handler = handlers[j];
          if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
            remaining.push(handler);
          } else {
            listening = handler.listening;
            if (listening && --listening.count === 0) {
              delete listeners[listening.id];
              delete listening.listeningTo[listening.objId];
            }
          }
        }
        if (remaining.length) {
          events[name] = remaining;
        } else {
          delete events[name];
        }
      }
      if (_.size(events))
        return events;
    };
    Events.once = function(name, callback, context) {
      var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
      return this.on(events, void 0, context);
    };
    Events.listenToOnce = function(obj, name, callback) {
      var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
      return this.listenTo(obj, events);
    };
    var onceMap = function(map, name, callback, offer) {
      if (callback) {
        var once = map[name] = _.once(function() {
          offer(name, once);
          callback.apply(this, arguments);
        });
        once._callback = callback;
      }
      return map;
    };
    Events.trigger = function(name) {
      if (!this._events)
        return this;
      var length = Math.max(0, arguments.length - 1);
      var args = Array(length);
      for (var i = 0; i < length; i++)
        args[i] = arguments[i + 1];
      eventsApi(triggerApi, this._events, name, void 0, args);
      return this;
    };
    var triggerApi = function(objEvents, name, cb, args) {
      if (objEvents) {
        var events = objEvents[name];
        var allEvents = objEvents.all;
        if (events && allEvents)
          allEvents = allEvents.slice();
        if (events)
          triggerEvents(events, args);
        if (allEvents)
          triggerEvents(allEvents, [name].concat(args));
      }
      return objEvents;
    };
    var triggerEvents = function(events, args) {
      var ev,
          i = -1,
          l = events.length,
          a1 = args[0],
          a2 = args[1],
          a3 = args[2];
      switch (args.length) {
        case 0:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
          return;
        case 1:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1);
          return;
        case 2:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1, a2);
          return;
        case 3:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
          return;
        default:
          while (++i < l)
            (ev = events[i]).callback.apply(ev.ctx, args);
          return;
      }
    };
    Events.bind = Events.on;
    Events.unbind = Events.off;
    _.extend(Backbone, Events);
    var Model = Backbone.Model = function(attributes, options) {
      var attrs = attributes || {};
      options || (options = {});
      this.cid = _.uniqueId(this.cidPrefix);
      this.attributes = {};
      if (options.collection)
        this.collection = options.collection;
      if (options.parse)
        attrs = this.parse(attrs, options) || {};
      attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
      this.set(attrs, options);
      this.changed = {};
      this.initialize.apply(this, arguments);
    };
    _.extend(Model.prototype, Events, {
      changed: null,
      validationError: null,
      idAttribute: 'id',
      cidPrefix: 'c',
      initialize: function() {},
      toJSON: function(options) {
        return _.clone(this.attributes);
      },
      sync: function() {
        return Backbone.sync.apply(this, arguments);
      },
      get: function(attr) {
        return this.attributes[attr];
      },
      escape: function(attr) {
        return _.escape(this.get(attr));
      },
      has: function(attr) {
        return this.get(attr) != null;
      },
      matches: function(attrs) {
        return !!_.iteratee(attrs, this)(this.attributes);
      },
      set: function(key, val, options) {
        if (key == null)
          return this;
        var attrs;
        if (typeof key === 'object') {
          attrs = key;
          options = val;
        } else {
          (attrs = {})[key] = val;
        }
        options || (options = {});
        if (!this._validate(attrs, options))
          return false;
        var unset = options.unset;
        var silent = options.silent;
        var changes = [];
        var changing = this._changing;
        this._changing = true;
        if (!changing) {
          this._previousAttributes = _.clone(this.attributes);
          this.changed = {};
        }
        var current = this.attributes;
        var changed = this.changed;
        var prev = this._previousAttributes;
        for (var attr in attrs) {
          val = attrs[attr];
          if (!_.isEqual(current[attr], val))
            changes.push(attr);
          if (!_.isEqual(prev[attr], val)) {
            changed[attr] = val;
          } else {
            delete changed[attr];
          }
          unset ? delete current[attr] : current[attr] = val;
        }
        this.id = this.get(this.idAttribute);
        if (!silent) {
          if (changes.length)
            this._pending = options;
          for (var i = 0; i < changes.length; i++) {
            this.trigger('change:' + changes[i], this, current[changes[i]], options);
          }
        }
        if (changing)
          return this;
        if (!silent) {
          while (this._pending) {
            options = this._pending;
            this._pending = false;
            this.trigger('change', this, options);
          }
        }
        this._pending = false;
        this._changing = false;
        return this;
      },
      unset: function(attr, options) {
        return this.set(attr, void 0, _.extend({}, options, {unset: true}));
      },
      clear: function(options) {
        var attrs = {};
        for (var key in this.attributes)
          attrs[key] = void 0;
        return this.set(attrs, _.extend({}, options, {unset: true}));
      },
      hasChanged: function(attr) {
        if (attr == null)
          return !_.isEmpty(this.changed);
        return _.has(this.changed, attr);
      },
      changedAttributes: function(diff) {
        if (!diff)
          return this.hasChanged() ? _.clone(this.changed) : false;
        var old = this._changing ? this._previousAttributes : this.attributes;
        var changed = {};
        for (var attr in diff) {
          var val = diff[attr];
          if (_.isEqual(old[attr], val))
            continue;
          changed[attr] = val;
        }
        return _.size(changed) ? changed : false;
      },
      previous: function(attr) {
        if (attr == null || !this._previousAttributes)
          return null;
        return this._previousAttributes[attr];
      },
      previousAttributes: function() {
        return _.clone(this._previousAttributes);
      },
      fetch: function(options) {
        options = _.extend({parse: true}, options);
        var model = this;
        var success = options.success;
        options.success = function(resp) {
          var serverAttrs = options.parse ? model.parse(resp, options) : resp;
          if (!model.set(serverAttrs, options))
            return false;
          if (success)
            success.call(options.context, model, resp, options);
          model.trigger('sync', model, resp, options);
        };
        wrapError(this, options);
        return this.sync('read', this, options);
      },
      save: function(key, val, options) {
        var attrs;
        if (key == null || typeof key === 'object') {
          attrs = key;
          options = val;
        } else {
          (attrs = {})[key] = val;
        }
        options = _.extend({
          validate: true,
          parse: true
        }, options);
        var wait = options.wait;
        if (attrs && !wait) {
          if (!this.set(attrs, options))
            return false;
        } else {
          if (!this._validate(attrs, options))
            return false;
        }
        var model = this;
        var success = options.success;
        var attributes = this.attributes;
        options.success = function(resp) {
          model.attributes = attributes;
          var serverAttrs = options.parse ? model.parse(resp, options) : resp;
          if (wait)
            serverAttrs = _.extend({}, attrs, serverAttrs);
          if (serverAttrs && !model.set(serverAttrs, options))
            return false;
          if (success)
            success.call(options.context, model, resp, options);
          model.trigger('sync', model, resp, options);
        };
        wrapError(this, options);
        if (attrs && wait)
          this.attributes = _.extend({}, attributes, attrs);
        var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
        if (method === 'patch' && !options.attrs)
          options.attrs = attrs;
        var xhr = this.sync(method, this, options);
        this.attributes = attributes;
        return xhr;
      },
      destroy: function(options) {
        options = options ? _.clone(options) : {};
        var model = this;
        var success = options.success;
        var wait = options.wait;
        var destroy = function() {
          model.stopListening();
          model.trigger('destroy', model, model.collection, options);
        };
        options.success = function(resp) {
          if (wait)
            destroy();
          if (success)
            success.call(options.context, model, resp, options);
          if (!model.isNew())
            model.trigger('sync', model, resp, options);
        };
        var xhr = false;
        if (this.isNew()) {
          _.defer(options.success);
        } else {
          wrapError(this, options);
          xhr = this.sync('delete', this, options);
        }
        if (!wait)
          destroy();
        return xhr;
      },
      url: function() {
        var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
        if (this.isNew())
          return base;
        var id = this.get(this.idAttribute);
        return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
      },
      parse: function(resp, options) {
        return resp;
      },
      clone: function() {
        return new this.constructor(this.attributes);
      },
      isNew: function() {
        return !this.has(this.idAttribute);
      },
      isValid: function(options) {
        return this._validate({}, _.defaults({validate: true}, options));
      },
      _validate: function(attrs, options) {
        if (!options.validate || !this.validate)
          return true;
        attrs = _.extend({}, this.attributes, attrs);
        var error = this.validationError = this.validate(attrs, options) || null;
        if (!error)
          return true;
        this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
        return false;
      }
    });
    var modelMethods = {
      keys: 1,
      values: 1,
      pairs: 1,
      invert: 1,
      pick: 0,
      omit: 0,
      chain: 1,
      isEmpty: 1
    };
    addUnderscoreMethods(Model, modelMethods, 'attributes');
    var Collection = Backbone.Collection = function(models, options) {
      options || (options = {});
      if (options.model)
        this.model = options.model;
      if (options.comparator !== void 0)
        this.comparator = options.comparator;
      this._reset();
      this.initialize.apply(this, arguments);
      if (models)
        this.reset(models, _.extend({silent: true}, options));
    };
    var setOptions = {
      add: true,
      remove: true,
      merge: true
    };
    var addOptions = {
      add: true,
      remove: false
    };
    var splice = function(array, insert, at) {
      at = Math.min(Math.max(at, 0), array.length);
      var tail = Array(array.length - at);
      var length = insert.length;
      for (var i = 0; i < tail.length; i++)
        tail[i] = array[i + at];
      for (i = 0; i < length; i++)
        array[i + at] = insert[i];
      for (i = 0; i < tail.length; i++)
        array[i + length + at] = tail[i];
    };
    _.extend(Collection.prototype, Events, {
      model: Model,
      initialize: function() {},
      toJSON: function(options) {
        return this.map(function(model) {
          return model.toJSON(options);
        });
      },
      sync: function() {
        return Backbone.sync.apply(this, arguments);
      },
      add: function(models, options) {
        return this.set(models, _.extend({merge: false}, options, addOptions));
      },
      remove: function(models, options) {
        options = _.extend({}, options);
        var singular = !_.isArray(models);
        models = singular ? [models] : _.clone(models);
        var removed = this._removeModels(models, options);
        if (!options.silent && removed)
          this.trigger('update', this, options);
        return singular ? removed[0] : removed;
      },
      set: function(models, options) {
        if (models == null)
          return;
        options = _.defaults({}, options, setOptions);
        if (options.parse && !this._isModel(models))
          models = this.parse(models, options);
        var singular = !_.isArray(models);
        models = singular ? [models] : models.slice();
        var at = options.at;
        if (at != null)
          at = +at;
        if (at < 0)
          at += this.length + 1;
        var set = [];
        var toAdd = [];
        var toRemove = [];
        var modelMap = {};
        var add = options.add;
        var merge = options.merge;
        var remove = options.remove;
        var sort = false;
        var sortable = this.comparator && (at == null) && options.sort !== false;
        var sortAttr = _.isString(this.comparator) ? this.comparator : null;
        var model;
        for (var i = 0; i < models.length; i++) {
          model = models[i];
          var existing = this.get(model);
          if (existing) {
            if (merge && model !== existing) {
              var attrs = this._isModel(model) ? model.attributes : model;
              if (options.parse)
                attrs = existing.parse(attrs, options);
              existing.set(attrs, options);
              if (sortable && !sort)
                sort = existing.hasChanged(sortAttr);
            }
            if (!modelMap[existing.cid]) {
              modelMap[existing.cid] = true;
              set.push(existing);
            }
            models[i] = existing;
          } else if (add) {
            model = models[i] = this._prepareModel(model, options);
            if (model) {
              toAdd.push(model);
              this._addReference(model, options);
              modelMap[model.cid] = true;
              set.push(model);
            }
          }
        }
        if (remove) {
          for (i = 0; i < this.length; i++) {
            model = this.models[i];
            if (!modelMap[model.cid])
              toRemove.push(model);
          }
          if (toRemove.length)
            this._removeModels(toRemove, options);
        }
        var orderChanged = false;
        var replace = !sortable && add && remove;
        if (set.length && replace) {
          orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
            return model !== set[index];
          });
          this.models.length = 0;
          splice(this.models, set, 0);
          this.length = this.models.length;
        } else if (toAdd.length) {
          if (sortable)
            sort = true;
          splice(this.models, toAdd, at == null ? this.length : at);
          this.length = this.models.length;
        }
        if (sort)
          this.sort({silent: true});
        if (!options.silent) {
          for (i = 0; i < toAdd.length; i++) {
            if (at != null)
              options.index = at + i;
            model = toAdd[i];
            model.trigger('add', model, this, options);
          }
          if (sort || orderChanged)
            this.trigger('sort', this, options);
          if (toAdd.length || toRemove.length)
            this.trigger('update', this, options);
        }
        return singular ? models[0] : models;
      },
      reset: function(models, options) {
        options = options ? _.clone(options) : {};
        for (var i = 0; i < this.models.length; i++) {
          this._removeReference(this.models[i], options);
        }
        options.previousModels = this.models;
        this._reset();
        models = this.add(models, _.extend({silent: true}, options));
        if (!options.silent)
          this.trigger('reset', this, options);
        return models;
      },
      push: function(model, options) {
        return this.add(model, _.extend({at: this.length}, options));
      },
      pop: function(options) {
        var model = this.at(this.length - 1);
        return this.remove(model, options);
      },
      unshift: function(model, options) {
        return this.add(model, _.extend({at: 0}, options));
      },
      shift: function(options) {
        var model = this.at(0);
        return this.remove(model, options);
      },
      slice: function() {
        return slice.apply(this.models, arguments);
      },
      get: function(obj) {
        if (obj == null)
          return void 0;
        var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
        return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
      },
      at: function(index) {
        if (index < 0)
          index += this.length;
        return this.models[index];
      },
      where: function(attrs, first) {
        return this[first ? 'find' : 'filter'](attrs);
      },
      findWhere: function(attrs) {
        return this.where(attrs, true);
      },
      sort: function(options) {
        var comparator = this.comparator;
        if (!comparator)
          throw new Error('Cannot sort a set without a comparator');
        options || (options = {});
        var length = comparator.length;
        if (_.isFunction(comparator))
          comparator = _.bind(comparator, this);
        if (length === 1 || _.isString(comparator)) {
          this.models = this.sortBy(comparator);
        } else {
          this.models.sort(comparator);
        }
        if (!options.silent)
          this.trigger('sort', this, options);
        return this;
      },
      pluck: function(attr) {
        return _.invoke(this.models, 'get', attr);
      },
      fetch: function(options) {
        options = _.extend({parse: true}, options);
        var success = options.success;
        var collection = this;
        options.success = function(resp) {
          var method = options.reset ? 'reset' : 'set';
          collection[method](resp, options);
          if (success)
            success.call(options.context, collection, resp, options);
          collection.trigger('sync', collection, resp, options);
        };
        wrapError(this, options);
        return this.sync('read', this, options);
      },
      create: function(model, options) {
        options = options ? _.clone(options) : {};
        var wait = options.wait;
        model = this._prepareModel(model, options);
        if (!model)
          return false;
        if (!wait)
          this.add(model, options);
        var collection = this;
        var success = options.success;
        options.success = function(model, resp, callbackOpts) {
          if (wait)
            collection.add(model, callbackOpts);
          if (success)
            success.call(callbackOpts.context, model, resp, callbackOpts);
        };
        model.save(null, options);
        return model;
      },
      parse: function(resp, options) {
        return resp;
      },
      clone: function() {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator
        });
      },
      modelId: function(attrs) {
        return attrs[this.model.prototype.idAttribute || 'id'];
      },
      _reset: function() {
        this.length = 0;
        this.models = [];
        this._byId = {};
      },
      _prepareModel: function(attrs, options) {
        if (this._isModel(attrs)) {
          if (!attrs.collection)
            attrs.collection = this;
          return attrs;
        }
        options = options ? _.clone(options) : {};
        options.collection = this;
        var model = new this.model(attrs, options);
        if (!model.validationError)
          return model;
        this.trigger('invalid', this, model.validationError, options);
        return false;
      },
      _removeModels: function(models, options) {
        var removed = [];
        for (var i = 0; i < models.length; i++) {
          var model = this.get(models[i]);
          if (!model)
            continue;
          var index = this.indexOf(model);
          this.models.splice(index, 1);
          this.length--;
          if (!options.silent) {
            options.index = index;
            model.trigger('remove', model, this, options);
          }
          removed.push(model);
          this._removeReference(model, options);
        }
        return removed.length ? removed : false;
      },
      _isModel: function(model) {
        return model instanceof Model;
      },
      _addReference: function(model, options) {
        this._byId[model.cid] = model;
        var id = this.modelId(model.attributes);
        if (id != null)
          this._byId[id] = model;
        model.on('all', this._onModelEvent, this);
      },
      _removeReference: function(model, options) {
        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        if (id != null)
          delete this._byId[id];
        if (this === model.collection)
          delete model.collection;
        model.off('all', this._onModelEvent, this);
      },
      _onModelEvent: function(event, model, collection, options) {
        if ((event === 'add' || event === 'remove') && collection !== this)
          return;
        if (event === 'destroy')
          this.remove(model, options);
        if (event === 'change') {
          var prevId = this.modelId(model.previousAttributes());
          var id = this.modelId(model.attributes);
          if (prevId !== id) {
            if (prevId != null)
              delete this._byId[prevId];
            if (id != null)
              this._byId[id] = model;
          }
        }
        this.trigger.apply(this, arguments);
      }
    });
    var collectionMethods = {
      forEach: 3,
      each: 3,
      map: 3,
      collect: 3,
      reduce: 4,
      foldl: 4,
      inject: 4,
      reduceRight: 4,
      foldr: 4,
      find: 3,
      detect: 3,
      filter: 3,
      select: 3,
      reject: 3,
      every: 3,
      all: 3,
      some: 3,
      any: 3,
      include: 3,
      includes: 3,
      contains: 3,
      invoke: 0,
      max: 3,
      min: 3,
      toArray: 1,
      size: 1,
      first: 3,
      head: 3,
      take: 3,
      initial: 3,
      rest: 3,
      tail: 3,
      drop: 3,
      last: 3,
      without: 0,
      difference: 0,
      indexOf: 3,
      shuffle: 1,
      lastIndexOf: 3,
      isEmpty: 1,
      chain: 1,
      sample: 3,
      partition: 3,
      groupBy: 3,
      countBy: 3,
      sortBy: 3,
      indexBy: 3
    };
    addUnderscoreMethods(Collection, collectionMethods, 'models');
    var View = Backbone.View = function(options) {
      this.cid = _.uniqueId('view');
      _.extend(this, _.pick(options, viewOptions));
      this._ensureElement();
      this.initialize.apply(this, arguments);
    };
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
    _.extend(View.prototype, Events, {
      tagName: 'div',
      $: function(selector) {
        return this.$el.find(selector);
      },
      initialize: function() {},
      render: function() {
        return this;
      },
      remove: function() {
        this._removeElement();
        this.stopListening();
        return this;
      },
      _removeElement: function() {
        this.$el.remove();
      },
      setElement: function(element) {
        this.undelegateEvents();
        this._setElement(element);
        this.delegateEvents();
        return this;
      },
      _setElement: function(el) {
        this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
        this.el = this.$el[0];
      },
      delegateEvents: function(events) {
        events || (events = _.result(this, 'events'));
        if (!events)
          return this;
        this.undelegateEvents();
        for (var key in events) {
          var method = events[key];
          if (!_.isFunction(method))
            method = this[method];
          if (!method)
            continue;
          var match = key.match(delegateEventSplitter);
          this.delegate(match[1], match[2], _.bind(method, this));
        }
        return this;
      },
      delegate: function(eventName, selector, listener) {
        this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
        return this;
      },
      undelegateEvents: function() {
        if (this.$el)
          this.$el.off('.delegateEvents' + this.cid);
        return this;
      },
      undelegate: function(eventName, selector, listener) {
        this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
        return this;
      },
      _createElement: function(tagName) {
        return document.createElement(tagName);
      },
      _ensureElement: function() {
        if (!this.el) {
          var attrs = _.extend({}, _.result(this, 'attributes'));
          if (this.id)
            attrs.id = _.result(this, 'id');
          if (this.className)
            attrs['class'] = _.result(this, 'className');
          this.setElement(this._createElement(_.result(this, 'tagName')));
          this._setAttributes(attrs);
        } else {
          this.setElement(_.result(this, 'el'));
        }
      },
      _setAttributes: function(attributes) {
        this.$el.attr(attributes);
      }
    });
    Backbone.sync = function(method, model, options) {
      var type = methodMap[method];
      _.defaults(options || (options = {}), {
        emulateHTTP: Backbone.emulateHTTP,
        emulateJSON: Backbone.emulateJSON
      });
      var params = {
        type: type,
        dataType: 'json'
      };
      if (!options.url) {
        params.url = _.result(model, 'url') || urlError();
      }
      if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
        params.contentType = 'application/json';
        params.data = JSON.stringify(options.attrs || model.toJSON(options));
      }
      if (options.emulateJSON) {
        params.contentType = 'application/x-www-form-urlencoded';
        params.data = params.data ? {model: params.data} : {};
      }
      if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
        params.type = 'POST';
        if (options.emulateJSON)
          params.data._method = type;
        var beforeSend = options.beforeSend;
        options.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
          if (beforeSend)
            return beforeSend.apply(this, arguments);
        };
      }
      if (params.type !== 'GET' && !options.emulateJSON) {
        params.processData = false;
      }
      var error = options.error;
      options.error = function(xhr, textStatus, errorThrown) {
        options.textStatus = textStatus;
        options.errorThrown = errorThrown;
        if (error)
          error.call(options.context, xhr, textStatus, errorThrown);
      };
      var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
      model.trigger('request', model, xhr, options);
      return xhr;
    };
    var methodMap = {
      'create': 'POST',
      'update': 'PUT',
      'patch': 'PATCH',
      'delete': 'DELETE',
      'read': 'GET'
    };
    Backbone.ajax = function() {
      return Backbone.$.ajax.apply(Backbone.$, arguments);
    };
    var Router = Backbone.Router = function(options) {
      options || (options = {});
      if (options.routes)
        this.routes = options.routes;
      this._bindRoutes();
      this.initialize.apply(this, arguments);
    };
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
      initialize: function() {},
      route: function(route, name, callback) {
        if (!_.isRegExp(route))
          route = this._routeToRegExp(route);
        if (_.isFunction(name)) {
          callback = name;
          name = '';
        }
        if (!callback)
          callback = this[name];
        var router = this;
        Backbone.history.route(route, function(fragment) {
          var args = router._extractParameters(route, fragment);
          if (router.execute(callback, args, name) !== false) {
            router.trigger.apply(router, ['route:' + name].concat(args));
            router.trigger('route', name, args);
            Backbone.history.trigger('route', router, name, args);
          }
        });
        return this;
      },
      execute: function(callback, args, name) {
        if (callback)
          callback.apply(this, args);
      },
      navigate: function(fragment, options) {
        Backbone.history.navigate(fragment, options);
        return this;
      },
      _bindRoutes: function() {
        if (!this.routes)
          return;
        this.routes = _.result(this, 'routes');
        var route,
            routes = _.keys(this.routes);
        while ((route = routes.pop()) != null) {
          this.route(route, this.routes[route]);
        }
      },
      _routeToRegExp: function(route) {
        route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
          return optional ? match : '([^/?]+)';
        }).replace(splatParam, '([^?]*?)');
        return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
      },
      _extractParameters: function(route, fragment) {
        var params = route.exec(fragment).slice(1);
        return _.map(params, function(param, i) {
          if (i === params.length - 1)
            return param || null;
          return param ? decodeURIComponent(param) : null;
        });
      }
    });
    var History = Backbone.History = function() {
      this.handlers = [];
      this.checkUrl = _.bind(this.checkUrl, this);
      if (typeof window !== 'undefined') {
        this.location = window.location;
        this.history = window.history;
      }
    };
    var routeStripper = /^[#\/]|\s+$/g;
    var rootStripper = /^\/+|\/+$/g;
    var pathStripper = /#.*$/;
    History.started = false;
    _.extend(History.prototype, Events, {
      interval: 50,
      atRoot: function() {
        var path = this.location.pathname.replace(/[^\/]$/, '$&/');
        return path === this.root && !this.getSearch();
      },
      matchRoot: function() {
        var path = this.decodeFragment(this.location.pathname);
        var root = path.slice(0, this.root.length - 1) + '/';
        return root === this.root;
      },
      decodeFragment: function(fragment) {
        return decodeURI(fragment.replace(/%25/g, '%2525'));
      },
      getSearch: function() {
        var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
        return match ? match[0] : '';
      },
      getHash: function(window) {
        var match = (window || this).location.href.match(/#(.*)$/);
        return match ? match[1] : '';
      },
      getPath: function() {
        var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
        return path.charAt(0) === '/' ? path.slice(1) : path;
      },
      getFragment: function(fragment) {
        if (fragment == null) {
          if (this._usePushState || !this._wantsHashChange) {
            fragment = this.getPath();
          } else {
            fragment = this.getHash();
          }
        }
        return fragment.replace(routeStripper, '');
      },
      start: function(options) {
        if (History.started)
          throw new Error('Backbone.history has already been started');
        History.started = true;
        this.options = _.extend({root: '/'}, this.options, options);
        this.root = this.options.root;
        this._wantsHashChange = this.options.hashChange !== false;
        this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
        this._useHashChange = this._wantsHashChange && this._hasHashChange;
        this._wantsPushState = !!this.options.pushState;
        this._hasPushState = !!(this.history && this.history.pushState);
        this._usePushState = this._wantsPushState && this._hasPushState;
        this.fragment = this.getFragment();
        this.root = ('/' + this.root + '/').replace(rootStripper, '/');
        if (this._wantsHashChange && this._wantsPushState) {
          if (!this._hasPushState && !this.atRoot()) {
            var root = this.root.slice(0, -1) || '/';
            this.location.replace(root + '#' + this.getPath());
            return true;
          } else if (this._hasPushState && this.atRoot()) {
            this.navigate(this.getHash(), {replace: true});
          }
        }
        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
          this.iframe = document.createElement('iframe');
          this.iframe.src = 'javascript:0';
          this.iframe.style.display = 'none';
          this.iframe.tabIndex = -1;
          var body = document.body;
          var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
          iWindow.document.open();
          iWindow.document.close();
          iWindow.location.hash = '#' + this.fragment;
        }
        var addEventListener = window.addEventListener || function(eventName, listener) {
          return attachEvent('on' + eventName, listener);
        };
        if (this._usePushState) {
          addEventListener('popstate', this.checkUrl, false);
        } else if (this._useHashChange && !this.iframe) {
          addEventListener('hashchange', this.checkUrl, false);
        } else if (this._wantsHashChange) {
          this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
        }
        if (!this.options.silent)
          return this.loadUrl();
      },
      stop: function() {
        var removeEventListener = window.removeEventListener || function(eventName, listener) {
          return detachEvent('on' + eventName, listener);
        };
        if (this._usePushState) {
          removeEventListener('popstate', this.checkUrl, false);
        } else if (this._useHashChange && !this.iframe) {
          removeEventListener('hashchange', this.checkUrl, false);
        }
        if (this.iframe) {
          document.body.removeChild(this.iframe);
          this.iframe = null;
        }
        if (this._checkUrlInterval)
          clearInterval(this._checkUrlInterval);
        History.started = false;
      },
      route: function(route, callback) {
        this.handlers.unshift({
          route: route,
          callback: callback
        });
      },
      checkUrl: function(e) {
        var current = this.getFragment();
        if (current === this.fragment && this.iframe) {
          current = this.getHash(this.iframe.contentWindow);
        }
        if (current === this.fragment)
          return false;
        if (this.iframe)
          this.navigate(current);
        this.loadUrl();
      },
      loadUrl: function(fragment) {
        if (!this.matchRoot())
          return false;
        fragment = this.fragment = this.getFragment(fragment);
        return _.some(this.handlers, function(handler) {
          if (handler.route.test(fragment)) {
            handler.callback(fragment);
            return true;
          }
        });
      },
      navigate: function(fragment, options) {
        if (!History.started)
          return false;
        if (!options || options === true)
          options = {trigger: !!options};
        fragment = this.getFragment(fragment || '');
        var root = this.root;
        if (fragment === '' || fragment.charAt(0) === '?') {
          root = root.slice(0, -1) || '/';
        }
        var url = root + fragment;
        fragment = this.decodeFragment(fragment.replace(pathStripper, ''));
        if (this.fragment === fragment)
          return;
        this.fragment = fragment;
        if (this._usePushState) {
          this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
        } else if (this._wantsHashChange) {
          this._updateHash(this.location, fragment, options.replace);
          if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
            var iWindow = this.iframe.contentWindow;
            if (!options.replace) {
              iWindow.document.open();
              iWindow.document.close();
            }
            this._updateHash(iWindow.location, fragment, options.replace);
          }
        } else {
          return this.location.assign(url);
        }
        if (options.trigger)
          return this.loadUrl(fragment);
      },
      _updateHash: function(location, fragment, replace) {
        if (replace) {
          var href = location.href.replace(/(javascript:|#).*$/, '');
          location.replace(href + '#' + fragment);
        } else {
          location.hash = '#' + fragment;
        }
      }
    });
    Backbone.history = new History;
    var extend = function(protoProps, staticProps) {
      var parent = this;
      var child;
      if (protoProps && _.has(protoProps, 'constructor')) {
        child = protoProps.constructor;
      } else {
        child = function() {
          return parent.apply(this, arguments);
        };
      }
      _.extend(child, parent, staticProps);
      var Surrogate = function() {
        this.constructor = child;
      };
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate;
      if (protoProps)
        _.extend(child.prototype, protoProps);
      child.__super__ = parent.prototype;
      return child;
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function() {
      throw new Error('A "url" property or function must be specified');
    };
    var wrapError = function(model, options) {
      var error = options.error;
      options.error = function(resp) {
        if (error)
          error.call(options.context, model, resp, options);
        model.trigger('error', model, resp, options);
      };
    };
    return Backbone;
  }));
  return module.exports;
});

$__System.registerDynamic("8", ["5", "6", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this,
      GLOBAL = this;
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['backbone', 'underscore'], function(Backbone, _) {
        return factory(Backbone, _);
      });
    } else if (typeof exports !== 'undefined') {
      var Backbone = $__require('5');
      var _ = $__require('6');
      module.exports = factory(Backbone, _);
    } else {
      factory(root.Backbone, root._);
    }
  }(this, function(Backbone, _) {
    'use strict';
    var previousChildViewContainer = Backbone.ChildViewContainer;
    Backbone.ChildViewContainer = (function(Backbone, _) {
      var Container = function(views) {
        this._views = {};
        this._indexByModel = {};
        this._indexByCustom = {};
        this._updateLength();
        _.each(views, this.add, this);
      };
      _.extend(Container.prototype, {
        add: function(view, customIndex) {
          var viewCid = view.cid;
          this._views[viewCid] = view;
          if (view.model) {
            this._indexByModel[view.model.cid] = viewCid;
          }
          if (customIndex) {
            this._indexByCustom[customIndex] = viewCid;
          }
          this._updateLength();
          return this;
        },
        findByModel: function(model) {
          return this.findByModelCid(model.cid);
        },
        findByModelCid: function(modelCid) {
          var viewCid = this._indexByModel[modelCid];
          return this.findByCid(viewCid);
        },
        findByCustom: function(index) {
          var viewCid = this._indexByCustom[index];
          return this.findByCid(viewCid);
        },
        findByIndex: function(index) {
          return _.values(this._views)[index];
        },
        findByCid: function(cid) {
          return this._views[cid];
        },
        remove: function(view) {
          var viewCid = view.cid;
          if (view.model) {
            delete this._indexByModel[view.model.cid];
          }
          _.any(this._indexByCustom, function(cid, key) {
            if (cid === viewCid) {
              delete this._indexByCustom[key];
              return true;
            }
          }, this);
          delete this._views[viewCid];
          this._updateLength();
          return this;
        },
        call: function(method) {
          this.apply(method, _.tail(arguments));
        },
        apply: function(method, args) {
          _.each(this._views, function(view) {
            if (_.isFunction(view[method])) {
              view[method].apply(view, args || []);
            }
          });
        },
        _updateLength: function() {
          this.length = _.size(this._views);
        }
      });
      var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 'last', 'without', 'isEmpty', 'pluck', 'reduce'];
      _.each(methods, function(method) {
        Container.prototype[method] = function() {
          var views = _.values(this._views);
          var args = [views].concat(_.toArray(arguments));
          return _[method].apply(_, args);
        };
      });
      return Container;
    })(Backbone, _);
    Backbone.ChildViewContainer.VERSION = '0.1.10';
    Backbone.ChildViewContainer.noConflict = function() {
      Backbone.ChildViewContainer = previousChildViewContainer;
      return this;
    };
    return Backbone.ChildViewContainer;
  }));
  return module.exports;
});

$__System.registerDynamic("9", ["5", "6", "3", "8", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this,
      GLOBAL = this;
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['backbone', 'underscore', 'backbone.wreqr', 'backbone.babysitter'], function(Backbone, _) {
        return (root.Marionette = root.Mn = factory(root, Backbone, _));
      });
    } else if (typeof exports !== 'undefined') {
      var Backbone = $__require('5');
      var _ = $__require('6');
      var Wreqr = $__require('3');
      var BabySitter = $__require('8');
      module.exports = factory(root, Backbone, _);
    } else {
      root.Marionette = root.Mn = factory(root, root.Backbone, root._);
    }
  }(this, function(root, Backbone, _) {
    'use strict';
    var previousMarionette = root.Marionette;
    var previousMn = root.Mn;
    var Marionette = Backbone.Marionette = {};
    Marionette.VERSION = '2.4.4';
    Marionette.noConflict = function() {
      root.Marionette = previousMarionette;
      root.Mn = previousMn;
      return this;
    };
    Marionette.Deferred = Backbone.$.Deferred;
    Marionette.FEATURES = {};
    Marionette.isEnabled = function(name) {
      return !!Marionette.FEATURES[name];
    };
    Marionette.extend = Backbone.Model.extend;
    Marionette.isNodeAttached = function(el) {
      return Backbone.$.contains(document.documentElement, el);
    };
    Marionette.mergeOptions = function(options, keys) {
      if (!options) {
        return;
      }
      _.extend(this, _.pick(options, keys));
    };
    Marionette.getOption = function(target, optionName) {
      if (!target || !optionName) {
        return;
      }
      if (target.options && (target.options[optionName] !== undefined)) {
        return target.options[optionName];
      } else {
        return target[optionName];
      }
    };
    Marionette.proxyGetOption = function(optionName) {
      return Marionette.getOption(this, optionName);
    };
    Marionette._getValue = function(value, context, params) {
      if (_.isFunction(value)) {
        value = params ? value.apply(context, params) : value.call(context);
      }
      return value;
    };
    Marionette.normalizeMethods = function(hash) {
      return _.reduce(hash, function(normalizedHash, method, name) {
        if (!_.isFunction(method)) {
          method = this[method];
        }
        if (method) {
          normalizedHash[name] = method;
        }
        return normalizedHash;
      }, {}, this);
    };
    Marionette.normalizeUIString = function(uiString, ui) {
      return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(r) {
        return ui[r.slice(4)];
      });
    };
    Marionette.normalizeUIKeys = function(hash, ui) {
      return _.reduce(hash, function(memo, val, key) {
        var normalizedKey = Marionette.normalizeUIString(key, ui);
        memo[normalizedKey] = val;
        return memo;
      }, {});
    };
    Marionette.normalizeUIValues = function(hash, ui, properties) {
      _.each(hash, function(val, key) {
        if (_.isString(val)) {
          hash[key] = Marionette.normalizeUIString(val, ui);
        } else if (_.isObject(val) && _.isArray(properties)) {
          _.extend(val, Marionette.normalizeUIValues(_.pick(val, properties), ui));
          _.each(properties, function(property) {
            var propertyVal = val[property];
            if (_.isString(propertyVal)) {
              val[property] = Marionette.normalizeUIString(propertyVal, ui);
            }
          });
        }
      });
      return hash;
    };
    Marionette.actAsCollection = function(object, listProperty) {
      var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 'last', 'without', 'isEmpty', 'pluck'];
      _.each(methods, function(method) {
        object[method] = function() {
          var list = _.values(_.result(this, listProperty));
          var args = [list].concat(_.toArray(arguments));
          return _[method].apply(_, args);
        };
      });
    };
    var deprecate = Marionette.deprecate = function(message, test) {
      if (_.isObject(message)) {
        message = (message.prev + ' is going to be removed in the future. ' + 'Please use ' + message.next + ' instead.' + (message.url ? ' See: ' + message.url : ''));
      }
      if ((test === undefined || !test) && !deprecate._cache[message]) {
        deprecate._warn('Deprecation warning: ' + message);
        deprecate._cache[message] = true;
      }
    };
    deprecate._warn = typeof console !== 'undefined' && (console.warn || console.log) || function() {};
    deprecate._cache = {};
    Marionette._triggerMethod = (function() {
      var splitter = /(^|:)(\w)/gi;
      function getEventName(match, prefix, eventName) {
        return eventName.toUpperCase();
      }
      return function(context, event, args) {
        var noEventArg = arguments.length < 3;
        if (noEventArg) {
          args = event;
          event = args[0];
        }
        var methodName = 'on' + event.replace(splitter, getEventName);
        var method = context[methodName];
        var result;
        if (_.isFunction(method)) {
          result = method.apply(context, noEventArg ? _.rest(args) : args);
        }
        if (_.isFunction(context.trigger)) {
          if (noEventArg + args.length > 1) {
            context.trigger.apply(context, noEventArg ? args : [event].concat(_.drop(args, 0)));
          } else {
            context.trigger(event);
          }
        }
        return result;
      };
    })();
    Marionette.triggerMethod = function(event) {
      return Marionette._triggerMethod(this, arguments);
    };
    Marionette.triggerMethodOn = function(context) {
      var fnc = _.isFunction(context.triggerMethod) ? context.triggerMethod : Marionette.triggerMethod;
      return fnc.apply(context, _.rest(arguments));
    };
    Marionette.MonitorDOMRefresh = function(view) {
      if (view._isDomRefreshMonitored) {
        return;
      }
      view._isDomRefreshMonitored = true;
      function handleShow() {
        view._isShown = true;
        triggerDOMRefresh();
      }
      function handleRender() {
        view._isRendered = true;
        triggerDOMRefresh();
      }
      function triggerDOMRefresh() {
        if (view._isShown && view._isRendered && Marionette.isNodeAttached(view.el)) {
          Marionette.triggerMethodOn(view, 'dom:refresh', view);
        }
      }
      view.on({
        show: handleShow,
        render: handleRender
      });
    };
    (function(Marionette) {
      'use strict';
      function bindFromStrings(target, entity, evt, methods) {
        var methodNames = methods.split(/\s+/);
        _.each(methodNames, function(methodName) {
          var method = target[methodName];
          if (!method) {
            throw new Marionette.Error('Method "' + methodName + '" was configured as an event handler, but does not exist.');
          }
          target.listenTo(entity, evt, method);
        });
      }
      function bindToFunction(target, entity, evt, method) {
        target.listenTo(entity, evt, method);
      }
      function unbindFromStrings(target, entity, evt, methods) {
        var methodNames = methods.split(/\s+/);
        _.each(methodNames, function(methodName) {
          var method = target[methodName];
          target.stopListening(entity, evt, method);
        });
      }
      function unbindToFunction(target, entity, evt, method) {
        target.stopListening(entity, evt, method);
      }
      function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
        if (!entity || !bindings) {
          return;
        }
        if (!_.isObject(bindings)) {
          throw new Marionette.Error({
            message: 'Bindings must be an object or function.',
            url: 'marionette.functions.html#marionettebindentityevents'
          });
        }
        bindings = Marionette._getValue(bindings, target);
        _.each(bindings, function(methods, evt) {
          if (_.isFunction(methods)) {
            functionCallback(target, entity, evt, methods);
          } else {
            stringCallback(target, entity, evt, methods);
          }
        });
      }
      Marionette.bindEntityEvents = function(target, entity, bindings) {
        iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
      };
      Marionette.unbindEntityEvents = function(target, entity, bindings) {
        iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
      };
      Marionette.proxyBindEntityEvents = function(entity, bindings) {
        return Marionette.bindEntityEvents(this, entity, bindings);
      };
      Marionette.proxyUnbindEntityEvents = function(entity, bindings) {
        return Marionette.unbindEntityEvents(this, entity, bindings);
      };
    })(Marionette);
    var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number'];
    Marionette.Error = Marionette.extend.call(Error, {
      urlRoot: 'http://marionettejs.com/docs/v' + Marionette.VERSION + '/',
      constructor: function(message, options) {
        if (_.isObject(message)) {
          options = message;
          message = options.message;
        } else if (!options) {
          options = {};
        }
        var error = Error.call(this, message);
        _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));
        this.captureStackTrace();
        if (options.url) {
          this.url = this.urlRoot + options.url;
        }
      },
      captureStackTrace: function() {
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Marionette.Error);
        }
      },
      toString: function() {
        return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
      }
    });
    Marionette.Error.extend = Marionette.extend;
    Marionette.Callbacks = function() {
      this._deferred = Marionette.Deferred();
      this._callbacks = [];
    };
    _.extend(Marionette.Callbacks.prototype, {
      add: function(callback, contextOverride) {
        var promise = _.result(this._deferred, 'promise');
        this._callbacks.push({
          cb: callback,
          ctx: contextOverride
        });
        promise.then(function(args) {
          if (contextOverride) {
            args.context = contextOverride;
          }
          callback.call(args.context, args.options);
        });
      },
      run: function(options, context) {
        this._deferred.resolve({
          options: options,
          context: context
        });
      },
      reset: function() {
        var callbacks = this._callbacks;
        this._deferred = Marionette.Deferred();
        this._callbacks = [];
        _.each(callbacks, function(cb) {
          this.add(cb.cb, cb.ctx);
        }, this);
      }
    });
    Marionette.Controller = function(options) {
      this.options = options || {};
      if (_.isFunction(this.initialize)) {
        this.initialize(this.options);
      }
    };
    Marionette.Controller.extend = Marionette.extend;
    _.extend(Marionette.Controller.prototype, Backbone.Events, {
      destroy: function() {
        Marionette._triggerMethod(this, 'before:destroy', arguments);
        Marionette._triggerMethod(this, 'destroy', arguments);
        this.stopListening();
        this.off();
        return this;
      },
      triggerMethod: Marionette.triggerMethod,
      mergeOptions: Marionette.mergeOptions,
      getOption: Marionette.proxyGetOption
    });
    Marionette.Object = function(options) {
      this.options = _.extend({}, _.result(this, 'options'), options);
      this.initialize.apply(this, arguments);
    };
    Marionette.Object.extend = Marionette.extend;
    _.extend(Marionette.Object.prototype, Backbone.Events, {
      initialize: function() {},
      destroy: function(options) {
        options = options || {};
        this.triggerMethod('before:destroy', options);
        this.triggerMethod('destroy', options);
        this.stopListening();
        return this;
      },
      triggerMethod: Marionette.triggerMethod,
      mergeOptions: Marionette.mergeOptions,
      getOption: Marionette.proxyGetOption,
      bindEntityEvents: Marionette.proxyBindEntityEvents,
      unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.Region = Marionette.Object.extend({
      constructor: function(options) {
        this.options = options || {};
        this.el = this.getOption('el');
        this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
        if (!this.el) {
          throw new Marionette.Error({
            name: 'NoElError',
            message: 'An "el" must be specified for a region.'
          });
        }
        this.$el = this.getEl(this.el);
        Marionette.Object.call(this, options);
      },
      show: function(view, options) {
        if (!this._ensureElement()) {
          return;
        }
        this._ensureViewIsIntact(view);
        Marionette.MonitorDOMRefresh(view);
        var showOptions = options || {};
        var isDifferentView = view !== this.currentView;
        var preventDestroy = !!showOptions.preventDestroy;
        var forceShow = !!showOptions.forceShow;
        var isChangingView = !!this.currentView;
        var _shouldDestroyView = isDifferentView && !preventDestroy;
        var _shouldShowView = isDifferentView || forceShow;
        if (isChangingView) {
          this.triggerMethod('before:swapOut', this.currentView, this, options);
        }
        if (this.currentView) {
          delete this.currentView._parent;
        }
        if (_shouldDestroyView) {
          this.empty();
        } else if (isChangingView && _shouldShowView) {
          this.currentView.off('destroy', this.empty, this);
        }
        if (_shouldShowView) {
          view.once('destroy', this.empty, this);
          view._parent = this;
          this._renderView(view);
          if (isChangingView) {
            this.triggerMethod('before:swap', view, this, options);
          }
          this.triggerMethod('before:show', view, this, options);
          Marionette.triggerMethodOn(view, 'before:show', view, this, options);
          if (isChangingView) {
            this.triggerMethod('swapOut', this.currentView, this, options);
          }
          var attachedRegion = Marionette.isNodeAttached(this.el);
          var displayedViews = [];
          var attachOptions = _.extend({
            triggerBeforeAttach: this.triggerBeforeAttach,
            triggerAttach: this.triggerAttach
          }, showOptions);
          if (attachedRegion && attachOptions.triggerBeforeAttach) {
            displayedViews = this._displayedViews(view);
            this._triggerAttach(displayedViews, 'before:');
          }
          this.attachHtml(view);
          this.currentView = view;
          if (attachedRegion && attachOptions.triggerAttach) {
            displayedViews = this._displayedViews(view);
            this._triggerAttach(displayedViews);
          }
          if (isChangingView) {
            this.triggerMethod('swap', view, this, options);
          }
          this.triggerMethod('show', view, this, options);
          Marionette.triggerMethodOn(view, 'show', view, this, options);
          return this;
        }
        return this;
      },
      triggerBeforeAttach: true,
      triggerAttach: true,
      _triggerAttach: function(views, prefix) {
        var eventName = (prefix || '') + 'attach';
        _.each(views, function(view) {
          Marionette.triggerMethodOn(view, eventName, view, this);
        }, this);
      },
      _displayedViews: function(view) {
        return _.union([view], _.result(view, '_getNestedViews') || []);
      },
      _renderView: function(view) {
        if (!view.supportsRenderLifecycle) {
          Marionette.triggerMethodOn(view, 'before:render', view);
        }
        view.render();
        if (!view.supportsRenderLifecycle) {
          Marionette.triggerMethodOn(view, 'render', view);
        }
      },
      _ensureElement: function() {
        if (!_.isObject(this.el)) {
          this.$el = this.getEl(this.el);
          this.el = this.$el[0];
        }
        if (!this.$el || this.$el.length === 0) {
          if (this.getOption('allowMissingEl')) {
            return false;
          } else {
            throw new Marionette.Error('An "el" ' + this.$el.selector + ' must exist in DOM');
          }
        }
        return true;
      },
      _ensureViewIsIntact: function(view) {
        if (!view) {
          throw new Marionette.Error({
            name: 'ViewNotValid',
            message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'
          });
        }
        if (view.isDestroyed) {
          throw new Marionette.Error({
            name: 'ViewDestroyedError',
            message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
          });
        }
      },
      getEl: function(el) {
        return Backbone.$(el, Marionette._getValue(this.options.parentEl, this));
      },
      attachHtml: function(view) {
        this.$el.contents().detach();
        this.el.appendChild(view.el);
      },
      empty: function(options) {
        var view = this.currentView;
        var emptyOptions = options || {};
        var preventDestroy = !!emptyOptions.preventDestroy;
        if (!view) {
          return this;
        }
        view.off('destroy', this.empty, this);
        this.triggerMethod('before:empty', view);
        if (!preventDestroy) {
          this._destroyView();
        }
        this.triggerMethod('empty', view);
        delete this.currentView;
        if (preventDestroy) {
          this.$el.contents().detach();
        }
        return this;
      },
      _destroyView: function() {
        var view = this.currentView;
        if (view.isDestroyed) {
          return;
        }
        if (!view.supportsDestroyLifecycle) {
          Marionette.triggerMethodOn(view, 'before:destroy', view);
        }
        if (view.destroy) {
          view.destroy();
        } else {
          view.remove();
          view.isDestroyed = true;
        }
        if (!view.supportsDestroyLifecycle) {
          Marionette.triggerMethodOn(view, 'destroy', view);
        }
      },
      attachView: function(view) {
        if (this.currentView) {
          delete this.currentView._parent;
        }
        view._parent = this;
        this.currentView = view;
        return this;
      },
      hasView: function() {
        return !!this.currentView;
      },
      reset: function() {
        this.empty();
        if (this.$el) {
          this.el = this.$el.selector;
        }
        delete this.$el;
        return this;
      }
    }, {
      buildRegion: function(regionConfig, DefaultRegionClass) {
        if (_.isString(regionConfig)) {
          return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
        }
        if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
          return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
        }
        if (_.isFunction(regionConfig)) {
          return this._buildRegionFromRegionClass(regionConfig);
        }
        throw new Marionette.Error({
          message: 'Improper region configuration type.',
          url: 'marionette.region.html#region-configuration-types'
        });
      },
      _buildRegionFromSelector: function(selector, DefaultRegionClass) {
        return new DefaultRegionClass({el: selector});
      },
      _buildRegionFromObject: function(regionConfig, DefaultRegionClass) {
        var RegionClass = regionConfig.regionClass || DefaultRegionClass;
        var options = _.omit(regionConfig, 'selector', 'regionClass');
        if (regionConfig.selector && !options.el) {
          options.el = regionConfig.selector;
        }
        return new RegionClass(options);
      },
      _buildRegionFromRegionClass: function(RegionClass) {
        return new RegionClass();
      }
    });
    Marionette.RegionManager = Marionette.Controller.extend({
      constructor: function(options) {
        this._regions = {};
        this.length = 0;
        Marionette.Controller.call(this, options);
        this.addRegions(this.getOption('regions'));
      },
      addRegions: function(regionDefinitions, defaults) {
        regionDefinitions = Marionette._getValue(regionDefinitions, this, arguments);
        return _.reduce(regionDefinitions, function(regions, definition, name) {
          if (_.isString(definition)) {
            definition = {selector: definition};
          }
          if (definition.selector) {
            definition = _.defaults({}, definition, defaults);
          }
          regions[name] = this.addRegion(name, definition);
          return regions;
        }, {}, this);
      },
      addRegion: function(name, definition) {
        var region;
        if (definition instanceof Marionette.Region) {
          region = definition;
        } else {
          region = Marionette.Region.buildRegion(definition, Marionette.Region);
        }
        this.triggerMethod('before:add:region', name, region);
        region._parent = this;
        this._store(name, region);
        this.triggerMethod('add:region', name, region);
        return region;
      },
      get: function(name) {
        return this._regions[name];
      },
      getRegions: function() {
        return _.clone(this._regions);
      },
      removeRegion: function(name) {
        var region = this._regions[name];
        this._remove(name, region);
        return region;
      },
      removeRegions: function() {
        var regions = this.getRegions();
        _.each(this._regions, function(region, name) {
          this._remove(name, region);
        }, this);
        return regions;
      },
      emptyRegions: function() {
        var regions = this.getRegions();
        _.invoke(regions, 'empty');
        return regions;
      },
      destroy: function() {
        this.removeRegions();
        return Marionette.Controller.prototype.destroy.apply(this, arguments);
      },
      _store: function(name, region) {
        if (!this._regions[name]) {
          this.length++;
        }
        this._regions[name] = region;
      },
      _remove: function(name, region) {
        this.triggerMethod('before:remove:region', name, region);
        region.empty();
        region.stopListening();
        delete region._parent;
        delete this._regions[name];
        this.length--;
        this.triggerMethod('remove:region', name, region);
      }
    });
    Marionette.actAsCollection(Marionette.RegionManager.prototype, '_regions');
    Marionette.TemplateCache = function(templateId) {
      this.templateId = templateId;
    };
    _.extend(Marionette.TemplateCache, {
      templateCaches: {},
      get: function(templateId, options) {
        var cachedTemplate = this.templateCaches[templateId];
        if (!cachedTemplate) {
          cachedTemplate = new Marionette.TemplateCache(templateId);
          this.templateCaches[templateId] = cachedTemplate;
        }
        return cachedTemplate.load(options);
      },
      clear: function() {
        var i;
        var args = _.toArray(arguments);
        var length = args.length;
        if (length > 0) {
          for (i = 0; i < length; i++) {
            delete this.templateCaches[args[i]];
          }
        } else {
          this.templateCaches = {};
        }
      }
    });
    _.extend(Marionette.TemplateCache.prototype, {
      load: function(options) {
        if (this.compiledTemplate) {
          return this.compiledTemplate;
        }
        var template = this.loadTemplate(this.templateId, options);
        this.compiledTemplate = this.compileTemplate(template, options);
        return this.compiledTemplate;
      },
      loadTemplate: function(templateId, options) {
        var $template = Backbone.$(templateId);
        if (!$template.length) {
          throw new Marionette.Error({
            name: 'NoTemplateError',
            message: 'Could not find template: "' + templateId + '"'
          });
        }
        return $template.html();
      },
      compileTemplate: function(rawTemplate, options) {
        return _.template(rawTemplate, options);
      }
    });
    Marionette.Renderer = {render: function(template, data) {
        if (!template) {
          throw new Marionette.Error({
            name: 'TemplateNotFoundError',
            message: 'Cannot render the template since its false, null or undefined.'
          });
        }
        var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);
        return templateFunc(data);
      }};
    Marionette.View = Backbone.View.extend({
      isDestroyed: false,
      supportsRenderLifecycle: true,
      supportsDestroyLifecycle: true,
      constructor: function(options) {
        this.render = _.bind(this.render, this);
        options = Marionette._getValue(options, this);
        this.options = _.extend({}, _.result(this, 'options'), options);
        this._behaviors = Marionette.Behaviors(this);
        Backbone.View.call(this, this.options);
        Marionette.MonitorDOMRefresh(this);
      },
      getTemplate: function() {
        return this.getOption('template');
      },
      serializeModel: function(model) {
        return model.toJSON.apply(model, _.rest(arguments));
      },
      mixinTemplateHelpers: function(target) {
        target = target || {};
        var templateHelpers = this.getOption('templateHelpers');
        templateHelpers = Marionette._getValue(templateHelpers, this);
        return _.extend(target, templateHelpers);
      },
      normalizeUIKeys: function(hash) {
        var uiBindings = _.result(this, '_uiBindings');
        return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'));
      },
      normalizeUIValues: function(hash, properties) {
        var ui = _.result(this, 'ui');
        var uiBindings = _.result(this, '_uiBindings');
        return Marionette.normalizeUIValues(hash, uiBindings || ui, properties);
      },
      configureTriggers: function() {
        if (!this.triggers) {
          return;
        }
        var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));
        return _.reduce(triggers, function(events, value, key) {
          events[key] = this._buildViewTrigger(value);
          return events;
        }, {}, this);
      },
      delegateEvents: function(events) {
        this._delegateDOMEvents(events);
        this.bindEntityEvents(this.model, this.getOption('modelEvents'));
        this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));
        _.each(this._behaviors, function(behavior) {
          behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
          behavior.bindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
        }, this);
        return this;
      },
      _delegateDOMEvents: function(eventsArg) {
        var events = Marionette._getValue(eventsArg || this.events, this);
        events = this.normalizeUIKeys(events);
        if (_.isUndefined(eventsArg)) {
          this.events = events;
        }
        var combinedEvents = {};
        var behaviorEvents = _.result(this, 'behaviorEvents') || {};
        var triggers = this.configureTriggers();
        var behaviorTriggers = _.result(this, 'behaviorTriggers') || {};
        _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);
        Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
      },
      undelegateEvents: function() {
        Backbone.View.prototype.undelegateEvents.apply(this, arguments);
        this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
        this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));
        _.each(this._behaviors, function(behavior) {
          behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
          behavior.unbindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
        }, this);
        return this;
      },
      _ensureViewIsIntact: function() {
        if (this.isDestroyed) {
          throw new Marionette.Error({
            name: 'ViewDestroyedError',
            message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
          });
        }
      },
      destroy: function() {
        if (this.isDestroyed) {
          return this;
        }
        var args = _.toArray(arguments);
        this.triggerMethod.apply(this, ['before:destroy'].concat(args));
        this.isDestroyed = true;
        this.triggerMethod.apply(this, ['destroy'].concat(args));
        this.unbindUIElements();
        this.isRendered = false;
        this.remove();
        _.invoke(this._behaviors, 'destroy', args);
        return this;
      },
      bindUIElements: function() {
        this._bindUIElements();
        _.invoke(this._behaviors, this._bindUIElements);
      },
      _bindUIElements: function() {
        if (!this.ui) {
          return;
        }
        if (!this._uiBindings) {
          this._uiBindings = this.ui;
        }
        var bindings = _.result(this, '_uiBindings');
        this.ui = {};
        _.each(bindings, function(selector, key) {
          this.ui[key] = this.$(selector);
        }, this);
      },
      unbindUIElements: function() {
        this._unbindUIElements();
        _.invoke(this._behaviors, this._unbindUIElements);
      },
      _unbindUIElements: function() {
        if (!this.ui || !this._uiBindings) {
          return;
        }
        _.each(this.ui, function($el, name) {
          delete this.ui[name];
        }, this);
        this.ui = this._uiBindings;
        delete this._uiBindings;
      },
      _buildViewTrigger: function(triggerDef) {
        var options = _.defaults({}, triggerDef, {
          preventDefault: true,
          stopPropagation: true
        });
        var eventName = _.isObject(triggerDef) ? options.event : triggerDef;
        return function(e) {
          if (e) {
            if (e.preventDefault && options.preventDefault) {
              e.preventDefault();
            }
            if (e.stopPropagation && options.stopPropagation) {
              e.stopPropagation();
            }
          }
          var args = {
            view: this,
            model: this.model,
            collection: this.collection
          };
          this.triggerMethod(eventName, args);
        };
      },
      setElement: function() {
        var ret = Backbone.View.prototype.setElement.apply(this, arguments);
        _.invoke(this._behaviors, 'proxyViewProperties', this);
        return ret;
      },
      triggerMethod: function() {
        var ret = Marionette._triggerMethod(this, arguments);
        this._triggerEventOnBehaviors(arguments);
        this._triggerEventOnParentLayout(arguments[0], _.rest(arguments));
        return ret;
      },
      _triggerEventOnBehaviors: function(args) {
        var triggerMethod = Marionette._triggerMethod;
        var behaviors = this._behaviors;
        for (var i = 0,
            length = behaviors && behaviors.length; i < length; i++) {
          triggerMethod(behaviors[i], args);
        }
      },
      _triggerEventOnParentLayout: function(eventName, args) {
        var layoutView = this._parentLayoutView();
        if (!layoutView) {
          return;
        }
        var eventPrefix = Marionette.getOption(layoutView, 'childViewEventPrefix');
        var prefixedEventName = eventPrefix + ':' + eventName;
        var callArgs = [this].concat(args);
        Marionette._triggerMethod(layoutView, prefixedEventName, callArgs);
        var childEvents = Marionette.getOption(layoutView, 'childEvents');
        childEvents = Marionette._getValue(childEvents, layoutView);
        var normalizedChildEvents = layoutView.normalizeMethods(childEvents);
        if (normalizedChildEvents && _.isFunction(normalizedChildEvents[eventName])) {
          normalizedChildEvents[eventName].apply(layoutView, callArgs);
        }
      },
      _getImmediateChildren: function() {
        return [];
      },
      _getNestedViews: function() {
        var children = this._getImmediateChildren();
        if (!children.length) {
          return children;
        }
        return _.reduce(children, function(memo, view) {
          if (!view._getNestedViews) {
            return memo;
          }
          return memo.concat(view._getNestedViews());
        }, children);
      },
      _parentLayoutView: function() {
        var parent = this._parent;
        while (parent) {
          if (parent instanceof Marionette.LayoutView) {
            return parent;
          }
          parent = parent._parent;
        }
      },
      normalizeMethods: Marionette.normalizeMethods,
      mergeOptions: Marionette.mergeOptions,
      getOption: Marionette.proxyGetOption,
      bindEntityEvents: Marionette.proxyBindEntityEvents,
      unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.ItemView = Marionette.View.extend({
      constructor: function() {
        Marionette.View.apply(this, arguments);
      },
      serializeData: function() {
        if (!this.model && !this.collection) {
          return {};
        }
        var args = [this.model || this.collection];
        if (arguments.length) {
          args.push.apply(args, arguments);
        }
        if (this.model) {
          return this.serializeModel.apply(this, args);
        } else {
          return {items: this.serializeCollection.apply(this, args)};
        }
      },
      serializeCollection: function(collection) {
        return collection.toJSON.apply(collection, _.rest(arguments));
      },
      render: function() {
        this._ensureViewIsIntact();
        this.triggerMethod('before:render', this);
        this._renderTemplate();
        this.isRendered = true;
        this.bindUIElements();
        this.triggerMethod('render', this);
        return this;
      },
      _renderTemplate: function() {
        var template = this.getTemplate();
        if (template === false) {
          return;
        }
        if (!template) {
          throw new Marionette.Error({
            name: 'UndefinedTemplateError',
            message: 'Cannot render the template since it is null or undefined.'
          });
        }
        var data = this.mixinTemplateHelpers(this.serializeData());
        var html = Marionette.Renderer.render(template, data, this);
        this.attachElContent(html);
        return this;
      },
      attachElContent: function(html) {
        this.$el.html(html);
        return this;
      }
    });
    Marionette.CollectionView = Marionette.View.extend({
      childViewEventPrefix: 'childview',
      sort: true,
      constructor: function(options) {
        this.once('render', this._initialEvents);
        this._initChildViewStorage();
        Marionette.View.apply(this, arguments);
        this.on({
          'before:show': this._onBeforeShowCalled,
          'show': this._onShowCalled,
          'before:attach': this._onBeforeAttachCalled,
          'attach': this._onAttachCalled
        });
        this.initRenderBuffer();
      },
      initRenderBuffer: function() {
        this._bufferedChildren = [];
      },
      startBuffering: function() {
        this.initRenderBuffer();
        this.isBuffering = true;
      },
      endBuffering: function() {
        var canTriggerAttach = this._isShown && Marionette.isNodeAttached(this.el);
        var nestedViews;
        this.isBuffering = false;
        if (this._isShown) {
          this._triggerMethodMany(this._bufferedChildren, this, 'before:show');
        }
        if (canTriggerAttach && this._triggerBeforeAttach) {
          nestedViews = this._getNestedViews();
          this._triggerMethodMany(nestedViews, this, 'before:attach');
        }
        this.attachBuffer(this, this._createBuffer());
        if (canTriggerAttach && this._triggerAttach) {
          nestedViews = this._getNestedViews();
          this._triggerMethodMany(nestedViews, this, 'attach');
        }
        if (this._isShown) {
          this._triggerMethodMany(this._bufferedChildren, this, 'show');
        }
        this.initRenderBuffer();
      },
      _triggerMethodMany: function(targets, source, eventName) {
        var args = _.drop(arguments, 3);
        _.each(targets, function(target) {
          Marionette.triggerMethodOn.apply(target, [target, eventName, target, source].concat(args));
        });
      },
      _initialEvents: function() {
        if (this.collection) {
          this.listenTo(this.collection, 'add', this._onCollectionAdd);
          this.listenTo(this.collection, 'remove', this._onCollectionRemove);
          this.listenTo(this.collection, 'reset', this.render);
          if (this.getOption('sort')) {
            this.listenTo(this.collection, 'sort', this._sortViews);
          }
        }
      },
      _onCollectionAdd: function(child, collection, opts) {
        var index = opts.at !== undefined && (opts.index || collection.indexOf(child));
        if (this.getOption('filter') || index === false) {
          index = _.indexOf(this._filteredSortedModels(index), child);
        }
        if (this._shouldAddChild(child, index)) {
          this.destroyEmptyView();
          var ChildView = this.getChildView(child);
          this.addChild(child, ChildView, index);
        }
      },
      _onCollectionRemove: function(model) {
        var view = this.children.findByModel(model);
        this.removeChildView(view);
        this.checkEmpty();
      },
      _onBeforeShowCalled: function() {
        this._triggerBeforeAttach = this._triggerAttach = false;
        this.children.each(function(childView) {
          Marionette.triggerMethodOn(childView, 'before:show', childView);
        });
      },
      _onShowCalled: function() {
        this.children.each(function(childView) {
          Marionette.triggerMethodOn(childView, 'show', childView);
        });
      },
      _onBeforeAttachCalled: function() {
        this._triggerBeforeAttach = true;
      },
      _onAttachCalled: function() {
        this._triggerAttach = true;
      },
      render: function() {
        this._ensureViewIsIntact();
        this.triggerMethod('before:render', this);
        this._renderChildren();
        this.isRendered = true;
        this.triggerMethod('render', this);
        return this;
      },
      reorder: function() {
        var children = this.children;
        var models = this._filteredSortedModels();
        var anyModelsAdded = _.some(models, function(model) {
          return !children.findByModel(model);
        });
        if (anyModelsAdded) {
          this.render();
        } else {
          var elsToReorder = _.map(models, function(model, index) {
            var view = children.findByModel(model);
            view._index = index;
            return view.el;
          });
          var filteredOutViews = children.filter(function(view) {
            return !_.contains(elsToReorder, view.el);
          });
          this.triggerMethod('before:reorder');
          this._appendReorderedChildren(elsToReorder);
          _.each(filteredOutViews, this.removeChildView, this);
          this.checkEmpty();
          this.triggerMethod('reorder');
        }
      },
      resortView: function() {
        if (Marionette.getOption(this, 'reorderOnSort')) {
          this.reorder();
        } else {
          this.render();
        }
      },
      _sortViews: function() {
        var models = this._filteredSortedModels();
        var orderChanged = _.find(models, function(item, index) {
          var view = this.children.findByModel(item);
          return !view || view._index !== index;
        }, this);
        if (orderChanged) {
          this.resortView();
        }
      },
      _emptyViewIndex: -1,
      _appendReorderedChildren: function(children) {
        this.$el.append(children);
      },
      _renderChildren: function() {
        this.destroyEmptyView();
        this.destroyChildren({checkEmpty: false});
        if (this.isEmpty(this.collection)) {
          this.showEmptyView();
        } else {
          this.triggerMethod('before:render:collection', this);
          this.startBuffering();
          this.showCollection();
          this.endBuffering();
          this.triggerMethod('render:collection', this);
          if (this.children.isEmpty() && this.getOption('filter')) {
            this.showEmptyView();
          }
        }
      },
      showCollection: function() {
        var ChildView;
        var models = this._filteredSortedModels();
        _.each(models, function(child, index) {
          ChildView = this.getChildView(child);
          this.addChild(child, ChildView, index);
        }, this);
      },
      _filteredSortedModels: function(addedAt) {
        var viewComparator = this.getViewComparator();
        var models = this.collection.models;
        addedAt = Math.min(Math.max(addedAt, 0), models.length - 1);
        if (viewComparator) {
          var addedModel;
          if (addedAt) {
            addedModel = models[addedAt];
            models = models.slice(0, addedAt).concat(models.slice(addedAt + 1));
          }
          models = this._sortModelsBy(models, viewComparator);
          if (addedModel) {
            models.splice(addedAt, 0, addedModel);
          }
        }
        if (this.getOption('filter')) {
          models = _.filter(models, function(model, index) {
            return this._shouldAddChild(model, index);
          }, this);
        }
        return models;
      },
      _sortModelsBy: function(models, comparator) {
        if (typeof comparator === 'string') {
          return _.sortBy(models, function(model) {
            return model.get(comparator);
          }, this);
        } else if (comparator.length === 1) {
          return _.sortBy(models, comparator, this);
        } else {
          return models.sort(_.bind(comparator, this));
        }
      },
      showEmptyView: function() {
        var EmptyView = this.getEmptyView();
        if (EmptyView && !this._showingEmptyView) {
          this.triggerMethod('before:render:empty');
          this._showingEmptyView = true;
          var model = new Backbone.Model();
          this.addEmptyView(model, EmptyView);
          this.triggerMethod('render:empty');
        }
      },
      destroyEmptyView: function() {
        if (this._showingEmptyView) {
          this.triggerMethod('before:remove:empty');
          this.destroyChildren();
          delete this._showingEmptyView;
          this.triggerMethod('remove:empty');
        }
      },
      getEmptyView: function() {
        return this.getOption('emptyView');
      },
      addEmptyView: function(child, EmptyView) {
        var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
        var nestedViews;
        var emptyViewOptions = this.getOption('emptyViewOptions') || this.getOption('childViewOptions');
        if (_.isFunction(emptyViewOptions)) {
          emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex);
        }
        var view = this.buildChildView(child, EmptyView, emptyViewOptions);
        view._parent = this;
        this.proxyChildEvents(view);
        view.once('render', function() {
          if (this._isShown) {
            Marionette.triggerMethodOn(view, 'before:show', view);
          }
          if (canTriggerAttach && this._triggerBeforeAttach) {
            nestedViews = this._getViewAndNested(view);
            this._triggerMethodMany(nestedViews, this, 'before:attach');
          }
        }, this);
        this.children.add(view);
        this.renderChildView(view, this._emptyViewIndex);
        if (canTriggerAttach && this._triggerAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'attach');
        }
        if (this._isShown) {
          Marionette.triggerMethodOn(view, 'show', view);
        }
      },
      getChildView: function(child) {
        var childView = this.getOption('childView');
        if (!childView) {
          throw new Marionette.Error({
            name: 'NoChildViewError',
            message: 'A "childView" must be specified'
          });
        }
        return childView;
      },
      addChild: function(child, ChildView, index) {
        var childViewOptions = this.getOption('childViewOptions');
        childViewOptions = Marionette._getValue(childViewOptions, this, [child, index]);
        var view = this.buildChildView(child, ChildView, childViewOptions);
        this._updateIndices(view, true, index);
        this.triggerMethod('before:add:child', view);
        this._addChildView(view, index);
        this.triggerMethod('add:child', view);
        view._parent = this;
        return view;
      },
      _updateIndices: function(view, increment, index) {
        if (!this.getOption('sort')) {
          return;
        }
        if (increment) {
          view._index = index;
        }
        this.children.each(function(laterView) {
          if (laterView._index >= view._index) {
            laterView._index += increment ? 1 : -1;
          }
        });
      },
      _addChildView: function(view, index) {
        var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
        var nestedViews;
        this.proxyChildEvents(view);
        view.once('render', function() {
          if (this._isShown && !this.isBuffering) {
            Marionette.triggerMethodOn(view, 'before:show', view);
          }
          if (canTriggerAttach && this._triggerBeforeAttach) {
            nestedViews = this._getViewAndNested(view);
            this._triggerMethodMany(nestedViews, this, 'before:attach');
          }
        }, this);
        this.children.add(view);
        this.renderChildView(view, index);
        if (canTriggerAttach && this._triggerAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'attach');
        }
        if (this._isShown && !this.isBuffering) {
          Marionette.triggerMethodOn(view, 'show', view);
        }
      },
      renderChildView: function(view, index) {
        if (!view.supportsRenderLifecycle) {
          Marionette.triggerMethodOn(view, 'before:render', view);
        }
        view.render();
        if (!view.supportsRenderLifecycle) {
          Marionette.triggerMethodOn(view, 'render', view);
        }
        this.attachHtml(this, view, index);
        return view;
      },
      buildChildView: function(child, ChildViewClass, childViewOptions) {
        var options = _.extend({model: child}, childViewOptions);
        var childView = new ChildViewClass(options);
        Marionette.MonitorDOMRefresh(childView);
        return childView;
      },
      removeChildView: function(view) {
        if (!view) {
          return view;
        }
        this.triggerMethod('before:remove:child', view);
        if (!view.supportsDestroyLifecycle) {
          Marionette.triggerMethodOn(view, 'before:destroy', view);
        }
        if (view.destroy) {
          view.destroy();
        } else {
          view.remove();
        }
        if (!view.supportsDestroyLifecycle) {
          Marionette.triggerMethodOn(view, 'destroy', view);
        }
        delete view._parent;
        this.stopListening(view);
        this.children.remove(view);
        this.triggerMethod('remove:child', view);
        this._updateIndices(view, false);
        return view;
      },
      isEmpty: function() {
        return !this.collection || this.collection.length === 0;
      },
      checkEmpty: function() {
        if (this.isEmpty(this.collection)) {
          this.showEmptyView();
        }
      },
      attachBuffer: function(collectionView, buffer) {
        collectionView.$el.append(buffer);
      },
      _createBuffer: function() {
        var elBuffer = document.createDocumentFragment();
        _.each(this._bufferedChildren, function(b) {
          elBuffer.appendChild(b.el);
        });
        return elBuffer;
      },
      attachHtml: function(collectionView, childView, index) {
        if (collectionView.isBuffering) {
          collectionView._bufferedChildren.splice(index, 0, childView);
        } else {
          if (!collectionView._insertBefore(childView, index)) {
            collectionView._insertAfter(childView);
          }
        }
      },
      _insertBefore: function(childView, index) {
        var currentView;
        var findPosition = this.getOption('sort') && (index < this.children.length - 1);
        if (findPosition) {
          currentView = this.children.find(function(view) {
            return view._index === index + 1;
          });
        }
        if (currentView) {
          currentView.$el.before(childView.el);
          return true;
        }
        return false;
      },
      _insertAfter: function(childView) {
        this.$el.append(childView.el);
      },
      _initChildViewStorage: function() {
        this.children = new Backbone.ChildViewContainer();
      },
      destroy: function() {
        if (this.isDestroyed) {
          return this;
        }
        this.triggerMethod('before:destroy:collection');
        this.destroyChildren({checkEmpty: false});
        this.triggerMethod('destroy:collection');
        return Marionette.View.prototype.destroy.apply(this, arguments);
      },
      destroyChildren: function(options) {
        var destroyOptions = options || {};
        var shouldCheckEmpty = true;
        var childViews = this.children.map(_.identity);
        if (!_.isUndefined(destroyOptions.checkEmpty)) {
          shouldCheckEmpty = destroyOptions.checkEmpty;
        }
        this.children.each(this.removeChildView, this);
        if (shouldCheckEmpty) {
          this.checkEmpty();
        }
        return childViews;
      },
      _shouldAddChild: function(child, index) {
        var filter = this.getOption('filter');
        return !_.isFunction(filter) || filter.call(this, child, index, this.collection);
      },
      proxyChildEvents: function(view) {
        var prefix = this.getOption('childViewEventPrefix');
        this.listenTo(view, 'all', function() {
          var args = _.toArray(arguments);
          var rootEvent = args[0];
          var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));
          args[0] = prefix + ':' + rootEvent;
          args.splice(1, 0, view);
          if (typeof childEvents !== 'undefined' && _.isFunction(childEvents[rootEvent])) {
            childEvents[rootEvent].apply(this, args.slice(1));
          }
          this.triggerMethod.apply(this, args);
        });
      },
      _getImmediateChildren: function() {
        return _.values(this.children._views);
      },
      _getViewAndNested: function(view) {
        return [view].concat(_.result(view, '_getNestedViews') || []);
      },
      getViewComparator: function() {
        return this.getOption('viewComparator');
      }
    });
    Marionette.CompositeView = Marionette.CollectionView.extend({
      constructor: function() {
        Marionette.CollectionView.apply(this, arguments);
      },
      _initialEvents: function() {
        if (this.collection) {
          this.listenTo(this.collection, 'add', this._onCollectionAdd);
          this.listenTo(this.collection, 'remove', this._onCollectionRemove);
          this.listenTo(this.collection, 'reset', this._renderChildren);
          if (this.getOption('sort')) {
            this.listenTo(this.collection, 'sort', this._sortViews);
          }
        }
      },
      getChildView: function(child) {
        var childView = this.getOption('childView') || this.constructor;
        return childView;
      },
      serializeData: function() {
        var data = {};
        if (this.model) {
          data = _.partial(this.serializeModel, this.model).apply(this, arguments);
        }
        return data;
      },
      render: function() {
        this._ensureViewIsIntact();
        this._isRendering = true;
        this.resetChildViewContainer();
        this.triggerMethod('before:render', this);
        this._renderTemplate();
        this._renderChildren();
        this._isRendering = false;
        this.isRendered = true;
        this.triggerMethod('render', this);
        return this;
      },
      _renderChildren: function() {
        if (this.isRendered || this._isRendering) {
          Marionette.CollectionView.prototype._renderChildren.call(this);
        }
      },
      _renderTemplate: function() {
        var data = {};
        data = this.serializeData();
        data = this.mixinTemplateHelpers(data);
        this.triggerMethod('before:render:template');
        var template = this.getTemplate();
        var html = Marionette.Renderer.render(template, data, this);
        this.attachElContent(html);
        this.bindUIElements();
        this.triggerMethod('render:template');
      },
      attachElContent: function(html) {
        this.$el.html(html);
        return this;
      },
      attachBuffer: function(compositeView, buffer) {
        var $container = this.getChildViewContainer(compositeView);
        $container.append(buffer);
      },
      _insertAfter: function(childView) {
        var $container = this.getChildViewContainer(this, childView);
        $container.append(childView.el);
      },
      _appendReorderedChildren: function(children) {
        var $container = this.getChildViewContainer(this);
        $container.append(children);
      },
      getChildViewContainer: function(containerView, childView) {
        if (!!containerView.$childViewContainer) {
          return containerView.$childViewContainer;
        }
        var container;
        var childViewContainer = Marionette.getOption(containerView, 'childViewContainer');
        if (childViewContainer) {
          var selector = Marionette._getValue(childViewContainer, containerView);
          if (selector.charAt(0) === '@' && containerView.ui) {
            container = containerView.ui[selector.substr(4)];
          } else {
            container = containerView.$(selector);
          }
          if (container.length <= 0) {
            throw new Marionette.Error({
              name: 'ChildViewContainerMissingError',
              message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
            });
          }
        } else {
          container = containerView.$el;
        }
        containerView.$childViewContainer = container;
        return container;
      },
      resetChildViewContainer: function() {
        if (this.$childViewContainer) {
          this.$childViewContainer = undefined;
        }
      }
    });
    Marionette.LayoutView = Marionette.ItemView.extend({
      regionClass: Marionette.Region,
      options: {destroyImmediate: false},
      childViewEventPrefix: 'childview',
      constructor: function(options) {
        options = options || {};
        this._firstRender = true;
        this._initializeRegions(options);
        Marionette.ItemView.call(this, options);
      },
      render: function() {
        this._ensureViewIsIntact();
        if (this._firstRender) {
          this._firstRender = false;
        } else {
          this._reInitializeRegions();
        }
        return Marionette.ItemView.prototype.render.apply(this, arguments);
      },
      destroy: function() {
        if (this.isDestroyed) {
          return this;
        }
        if (this.getOption('destroyImmediate') === true) {
          this.$el.remove();
        }
        this.regionManager.destroy();
        return Marionette.ItemView.prototype.destroy.apply(this, arguments);
      },
      showChildView: function(regionName, view, options) {
        var region = this.getRegion(regionName);
        return region.show.apply(region, _.rest(arguments));
      },
      getChildView: function(regionName) {
        return this.getRegion(regionName).currentView;
      },
      addRegion: function(name, definition) {
        var regions = {};
        regions[name] = definition;
        return this._buildRegions(regions)[name];
      },
      addRegions: function(regions) {
        this.regions = _.extend({}, this.regions, regions);
        return this._buildRegions(regions);
      },
      removeRegion: function(name) {
        delete this.regions[name];
        return this.regionManager.removeRegion(name);
      },
      getRegion: function(region) {
        return this.regionManager.get(region);
      },
      getRegions: function() {
        return this.regionManager.getRegions();
      },
      _buildRegions: function(regions) {
        var defaults = {
          regionClass: this.getOption('regionClass'),
          parentEl: _.partial(_.result, this, 'el')
        };
        return this.regionManager.addRegions(regions, defaults);
      },
      _initializeRegions: function(options) {
        var regions;
        this._initRegionManager();
        regions = Marionette._getValue(this.regions, this, [options]) || {};
        var regionOptions = this.getOption.call(options, 'regions');
        regionOptions = Marionette._getValue(regionOptions, this, [options]);
        _.extend(regions, regionOptions);
        regions = this.normalizeUIValues(regions, ['selector', 'el']);
        this.addRegions(regions);
      },
      _reInitializeRegions: function() {
        this.regionManager.invoke('reset');
      },
      getRegionManager: function() {
        return new Marionette.RegionManager();
      },
      _initRegionManager: function() {
        this.regionManager = this.getRegionManager();
        this.regionManager._parent = this;
        this.listenTo(this.regionManager, 'before:add:region', function(name) {
          this.triggerMethod('before:add:region', name);
        });
        this.listenTo(this.regionManager, 'add:region', function(name, region) {
          this[name] = region;
          this.triggerMethod('add:region', name, region);
        });
        this.listenTo(this.regionManager, 'before:remove:region', function(name) {
          this.triggerMethod('before:remove:region', name);
        });
        this.listenTo(this.regionManager, 'remove:region', function(name, region) {
          delete this[name];
          this.triggerMethod('remove:region', name, region);
        });
      },
      _getImmediateChildren: function() {
        return _.chain(this.regionManager.getRegions()).pluck('currentView').compact().value();
      }
    });
    Marionette.Behavior = Marionette.Object.extend({
      constructor: function(options, view) {
        this.view = view;
        this.defaults = _.result(this, 'defaults') || {};
        this.options = _.extend({}, this.defaults, options);
        this.ui = _.extend({}, _.result(view, 'ui'), _.result(this, 'ui'));
        Marionette.Object.apply(this, arguments);
      },
      $: function() {
        return this.view.$.apply(this.view, arguments);
      },
      destroy: function() {
        this.stopListening();
        return this;
      },
      proxyViewProperties: function(view) {
        this.$el = view.$el;
        this.el = view.el;
      }
    });
    Marionette.Behaviors = (function(Marionette, _) {
      var delegateEventSplitter = /^(\S+)\s*(.*)$/;
      function Behaviors(view, behaviors) {
        if (!_.isObject(view.behaviors)) {
          return {};
        }
        behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, 'behaviors'));
        Behaviors.wrap(view, behaviors, _.keys(methods));
        return behaviors;
      }
      var methods = {
        behaviorTriggers: function(behaviorTriggers, behaviors) {
          var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
          return triggerBuilder.buildBehaviorTriggers();
        },
        behaviorEvents: function(behaviorEvents, behaviors) {
          var _behaviorsEvents = {};
          _.each(behaviors, function(b, i) {
            var _events = {};
            var behaviorEvents = _.clone(_.result(b, 'events')) || {};
            behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, getBehaviorsUI(b));
            var j = 0;
            _.each(behaviorEvents, function(behaviour, key) {
              var match = key.match(delegateEventSplitter);
              var eventName = match[1] + '.' + [this.cid, i, j++, ' '].join('');
              var selector = match[2];
              var eventKey = eventName + selector;
              var handler = _.isFunction(behaviour) ? behaviour : b[behaviour];
              _events[eventKey] = _.bind(handler, b);
            }, this);
            _behaviorsEvents = _.extend(_behaviorsEvents, _events);
          }, this);
          return _behaviorsEvents;
        }
      };
      _.extend(Behaviors, {
        behaviorsLookup: function() {
          throw new Marionette.Error({
            message: 'You must define where your behaviors are stored.',
            url: 'marionette.behaviors.html#behaviorslookup'
          });
        },
        getBehaviorClass: function(options, key) {
          if (options.behaviorClass) {
            return options.behaviorClass;
          }
          return Marionette._getValue(Behaviors.behaviorsLookup, this, [options, key])[key];
        },
        parseBehaviors: function(view, behaviors) {
          return _.chain(behaviors).map(function(options, key) {
            var BehaviorClass = Behaviors.getBehaviorClass(options, key);
            var behavior = new BehaviorClass(options, view);
            var nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, 'behaviors'));
            return [behavior].concat(nestedBehaviors);
          }).flatten().value();
        },
        wrap: function(view, behaviors, methodNames) {
          _.each(methodNames, function(methodName) {
            view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
          });
        }
      });
      function BehaviorTriggersBuilder(view, behaviors) {
        this._view = view;
        this._behaviors = behaviors;
        this._triggers = {};
      }
      _.extend(BehaviorTriggersBuilder.prototype, {
        buildBehaviorTriggers: function() {
          _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
          return this._triggers;
        },
        _buildTriggerHandlersForBehavior: function(behavior, i) {
          var triggersHash = _.clone(_.result(behavior, 'triggers')) || {};
          triggersHash = Marionette.normalizeUIKeys(triggersHash, getBehaviorsUI(behavior));
          _.each(triggersHash, _.bind(this._setHandlerForBehavior, this, behavior, i));
        },
        _setHandlerForBehavior: function(behavior, i, eventName, trigger) {
          var triggerKey = trigger.replace(/^\S+/, function(triggerName) {
            return triggerName + '.' + 'behaviortriggers' + i;
          });
          this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
        }
      });
      function getBehaviorsUI(behavior) {
        return behavior._uiBindings || behavior.ui;
      }
      return Behaviors;
    })(Marionette, _);
    Marionette.AppRouter = Backbone.Router.extend({
      constructor: function(options) {
        this.options = options || {};
        Backbone.Router.apply(this, arguments);
        var appRoutes = this.getOption('appRoutes');
        var controller = this._getController();
        this.processAppRoutes(controller, appRoutes);
        this.on('route', this._processOnRoute, this);
      },
      appRoute: function(route, methodName) {
        var controller = this._getController();
        this._addAppRoute(controller, route, methodName);
      },
      _processOnRoute: function(routeName, routeArgs) {
        if (_.isFunction(this.onRoute)) {
          var routePath = _.invert(this.getOption('appRoutes'))[routeName];
          this.onRoute(routeName, routePath, routeArgs);
        }
      },
      processAppRoutes: function(controller, appRoutes) {
        if (!appRoutes) {
          return;
        }
        var routeNames = _.keys(appRoutes).reverse();
        _.each(routeNames, function(route) {
          this._addAppRoute(controller, route, appRoutes[route]);
        }, this);
      },
      _getController: function() {
        return this.getOption('controller');
      },
      _addAppRoute: function(controller, route, methodName) {
        var method = controller[methodName];
        if (!method) {
          throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
        }
        this.route(route, methodName, _.bind(method, controller));
      },
      mergeOptions: Marionette.mergeOptions,
      getOption: Marionette.proxyGetOption,
      triggerMethod: Marionette.triggerMethod,
      bindEntityEvents: Marionette.proxyBindEntityEvents,
      unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.Application = Marionette.Object.extend({
      constructor: function(options) {
        this._initializeRegions(options);
        this._initCallbacks = new Marionette.Callbacks();
        this.submodules = {};
        _.extend(this, options);
        this._initChannel();
        Marionette.Object.apply(this, arguments);
      },
      execute: function() {
        this.commands.execute.apply(this.commands, arguments);
      },
      request: function() {
        return this.reqres.request.apply(this.reqres, arguments);
      },
      addInitializer: function(initializer) {
        this._initCallbacks.add(initializer);
      },
      start: function(options) {
        this.triggerMethod('before:start', options);
        this._initCallbacks.run(options, this);
        this.triggerMethod('start', options);
      },
      addRegions: function(regions) {
        return this._regionManager.addRegions(regions);
      },
      emptyRegions: function() {
        return this._regionManager.emptyRegions();
      },
      removeRegion: function(region) {
        return this._regionManager.removeRegion(region);
      },
      getRegion: function(region) {
        return this._regionManager.get(region);
      },
      getRegions: function() {
        return this._regionManager.getRegions();
      },
      module: function(moduleNames, moduleDefinition) {
        var ModuleClass = Marionette.Module.getClass(moduleDefinition);
        var args = _.toArray(arguments);
        args.unshift(this);
        return ModuleClass.create.apply(ModuleClass, args);
      },
      getRegionManager: function() {
        return new Marionette.RegionManager();
      },
      _initializeRegions: function(options) {
        var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {};
        this._initRegionManager();
        var optionRegions = Marionette.getOption(options, 'regions');
        if (_.isFunction(optionRegions)) {
          optionRegions = optionRegions.call(this, options);
        }
        _.extend(regions, optionRegions);
        this.addRegions(regions);
        return this;
      },
      _initRegionManager: function() {
        this._regionManager = this.getRegionManager();
        this._regionManager._parent = this;
        this.listenTo(this._regionManager, 'before:add:region', function() {
          Marionette._triggerMethod(this, 'before:add:region', arguments);
        });
        this.listenTo(this._regionManager, 'add:region', function(name, region) {
          this[name] = region;
          Marionette._triggerMethod(this, 'add:region', arguments);
        });
        this.listenTo(this._regionManager, 'before:remove:region', function() {
          Marionette._triggerMethod(this, 'before:remove:region', arguments);
        });
        this.listenTo(this._regionManager, 'remove:region', function(name) {
          delete this[name];
          Marionette._triggerMethod(this, 'remove:region', arguments);
        });
      },
      _initChannel: function() {
        this.channelName = _.result(this, 'channelName') || 'global';
        this.channel = _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
        this.vent = _.result(this, 'vent') || this.channel.vent;
        this.commands = _.result(this, 'commands') || this.channel.commands;
        this.reqres = _.result(this, 'reqres') || this.channel.reqres;
      }
    });
    Marionette.Module = function(moduleName, app, options) {
      this.moduleName = moduleName;
      this.options = _.extend({}, this.options, options);
      this.initialize = options.initialize || this.initialize;
      this.submodules = {};
      this._setupInitializersAndFinalizers();
      this.app = app;
      if (_.isFunction(this.initialize)) {
        this.initialize(moduleName, app, this.options);
      }
    };
    Marionette.Module.extend = Marionette.extend;
    _.extend(Marionette.Module.prototype, Backbone.Events, {
      startWithParent: true,
      initialize: function() {},
      addInitializer: function(callback) {
        this._initializerCallbacks.add(callback);
      },
      addFinalizer: function(callback) {
        this._finalizerCallbacks.add(callback);
      },
      start: function(options) {
        if (this._isInitialized) {
          return;
        }
        _.each(this.submodules, function(mod) {
          if (mod.startWithParent) {
            mod.start(options);
          }
        });
        this.triggerMethod('before:start', options);
        this._initializerCallbacks.run(options, this);
        this._isInitialized = true;
        this.triggerMethod('start', options);
      },
      stop: function() {
        if (!this._isInitialized) {
          return;
        }
        this._isInitialized = false;
        this.triggerMethod('before:stop');
        _.invoke(this.submodules, 'stop');
        this._finalizerCallbacks.run(undefined, this);
        this._initializerCallbacks.reset();
        this._finalizerCallbacks.reset();
        this.triggerMethod('stop');
      },
      addDefinition: function(moduleDefinition, customArgs) {
        this._runModuleDefinition(moduleDefinition, customArgs);
      },
      _runModuleDefinition: function(definition, customArgs) {
        if (!definition) {
          return;
        }
        var args = _.flatten([this, this.app, Backbone, Marionette, Backbone.$, _, customArgs]);
        definition.apply(this, args);
      },
      _setupInitializersAndFinalizers: function() {
        this._initializerCallbacks = new Marionette.Callbacks();
        this._finalizerCallbacks = new Marionette.Callbacks();
      },
      triggerMethod: Marionette.triggerMethod
    });
    _.extend(Marionette.Module, {
      create: function(app, moduleNames, moduleDefinition) {
        var module = app;
        var customArgs = _.drop(arguments, 3);
        moduleNames = moduleNames.split('.');
        var length = moduleNames.length;
        var moduleDefinitions = [];
        moduleDefinitions[length - 1] = moduleDefinition;
        _.each(moduleNames, function(moduleName, i) {
          var parentModule = module;
          module = this._getModule(parentModule, moduleName, app, moduleDefinition);
          this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
        }, this);
        return module;
      },
      _getModule: function(parentModule, moduleName, app, def, args) {
        var options = _.extend({}, def);
        var ModuleClass = this.getClass(def);
        var module = parentModule[moduleName];
        if (!module) {
          module = new ModuleClass(moduleName, app, options);
          parentModule[moduleName] = module;
          parentModule.submodules[moduleName] = module;
        }
        return module;
      },
      getClass: function(moduleDefinition) {
        var ModuleClass = Marionette.Module;
        if (!moduleDefinition) {
          return ModuleClass;
        }
        if (moduleDefinition.prototype instanceof ModuleClass) {
          return moduleDefinition;
        }
        return moduleDefinition.moduleClass || ModuleClass;
      },
      _addModuleDefinition: function(parentModule, module, def, args) {
        var fn = this._getDefine(def);
        var startWithParent = this._getStartWithParent(def, module);
        if (fn) {
          module.addDefinition(fn, args);
        }
        this._addStartWithParent(parentModule, module, startWithParent);
      },
      _getStartWithParent: function(def, module) {
        var swp;
        if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
          swp = module.constructor.prototype.startWithParent;
          return _.isUndefined(swp) ? true : swp;
        }
        if (_.isObject(def)) {
          swp = def.startWithParent;
          return _.isUndefined(swp) ? true : swp;
        }
        return true;
      },
      _getDefine: function(def) {
        if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
          return def;
        }
        if (_.isObject(def)) {
          return def.define;
        }
        return null;
      },
      _addStartWithParent: function(parentModule, module, startWithParent) {
        module.startWithParent = module.startWithParent && startWithParent;
        if (!module.startWithParent || !!module.startWithParentIsConfigured) {
          return;
        }
        module.startWithParentIsConfigured = true;
        parentModule.addInitializer(function(options) {
          if (module.startWithParent) {
            module.start(options);
          }
        });
      }
    });
    return Marionette;
  }));
  return module.exports;
});

(function() {
var define = $__System.amdDefine;
(function(global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  var arr = [];
  var document = window.document;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var version = "2.2.1",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    selector: "",
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      var realStringObj = obj && obj.toString();
      return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
    },
    isPlainObject: function(obj) {
      if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
      return true;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      var script,
          indirect = eval;
      code = jQuery.trim(code);
      if (code) {
        if (code.indexOf("use strict") === 1) {
          script = document.createElement("script");
          script.text = code;
          document.head.appendChild(script).parentNode.removeChild(script);
        } else {
          indirect(code);
        }
      }
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback) {
      var length,
          i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        MAX_NEGATIVE = 1 << 31,
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function(list, elem) {
          var i = 0,
              len = list.length;
          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        rescape = /'|\\/g,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
        unloadHandler = function() {
          setDocument();
        };
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          nidselect,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                if ((elem = context.getElementById(m))) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector;
            } else if (context.nodeName.toLowerCase() !== "object") {
              if ((nid = context.getAttribute("id"))) {
                nid = nid.replace(rescape, "\\$&");
              } else {
                context.setAttribute("id", (nid = expando));
              }
              groups = tokenize(selector);
              i = groups.length;
              nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
              while (i--) {
                groups[i] = nidselect + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }
            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var div = document.createElement("div");
      try {
        return !!fn(div);
      } catch (e) {
        return false;
      } finally {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
        div = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          parent,
          doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document);
      if ((parent = document.defaultView) && parent.top !== parent) {
        if (parent.addEventListener) {
          parent.addEventListener("unload", unloadHandler, false);
        } else if (parent.attachEvent) {
          parent.attachEvent("onunload", unloadHandler);
        }
      }
      support.attributes = assert(function(div) {
        div.className = "i";
        return !div.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(div) {
        div.appendChild(document.createComment(""));
        return !div.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(document.getElementsByClassName);
      support.getById = assert(function(div) {
        docElem.appendChild(div).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var m = context.getElementById(id);
            return m ? [m] : [];
          }
        };
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
      } else {
        delete Expr.find["ID"];
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(document.querySelectorAll))) {
        assert(function(div) {
          docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
          if (div.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!div.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function(div) {
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          div.appendChild(input).setAttribute("name", "D");
          if (div.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(div) {
          support.disconnectedMatch = matches.call(div, "div");
          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                node = parent;
                outerCache = node[expando] || (node[expando] = {});
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": function(elem) {
          return elem.disabled === false;
        },
        "disabled": function(elem) {
          return elem.disabled === true;
        },
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : function(elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
              if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                uniqueCache[dir] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context === document || context || outermost;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument !== document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(div1) {
      return div1.compareDocumentPosition(document.createElement("div")) & 1;
    });
    if (!assert(function(div) {
      div.innerHTML = "<a href='#'></a>";
      return div.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(div) {
      div.innerHTML = "<input/>";
      div.firstChild.setAttribute("value", "");
      return div.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(div) {
      return div.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var dir = function(elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;
    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = jQuery.filter(qualifier, elements);
    }
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) > -1) !== not;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          len = this.length,
          ret = [],
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function(selector, context, root) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem && elem.parentNode) {
                this.length = 1;
                this[0] = elem;
              }
              this.context = document;
              this.selector = selector;
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this.context = this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
          this.selector = selector.selector;
          this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
            matched.push(cur);
            break;
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnotwhite = (/\S+/g);
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing,
        memory,
        fired,
        locked,
        list = [],
        queue = [],
        firingIndex = -1,
        fire = function() {
          locked = options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (jQuery.isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            then: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(subordinate) {
      var i = 0,
          resolveValues = slice.call(arguments),
          length = resolveValues.length,
          remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
          deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
          updateFunc = function(i, contexts, values) {
            return function(value) {
              contexts[i] = this;
              values[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (values === progressValues) {
                deferred.notifyWith(contexts, values);
              } else if (!(--remaining)) {
                deferred.resolveWith(contexts, values);
              }
            };
          },
          progressValues,
          progressContexts,
          resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  var readyList;
  jQuery.fn.ready = function(fn) {
    jQuery.ready.promise().done(fn);
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  }
  jQuery.ready.promise = function(obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        window.setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed);
      }
    }
    return readyList.promise(obj);
  };
  jQuery.ready.promise();
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  var acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    register: function(owner, initial) {
      var value = initial || {};
      if (owner.nodeType) {
        owner[this.expando] = value;
      } else {
        Object.defineProperty(owner, this.expando, {
          value: value,
          writable: true,
          configurable: true
        });
      }
      return owner[this.expando];
    },
    cache: function(owner) {
      if (!acceptData(owner)) {
        return {};
      }
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop,
          cache = this.cache(owner);
      if (typeof data === "string") {
        cache[data] = value;
      } else {
        for (prop in data) {
          cache[prop] = data[prop];
        }
      }
      return cache;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
    },
    access: function(owner, key, value) {
      var stored;
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        stored = this.get(owner, key);
        return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          name,
          camel,
          cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key === undefined) {
        this.register(owner);
      } else {
        if (jQuery.isArray(key)) {
          name = key.concat(key.map(jQuery.camelCase));
        } else {
          camel = jQuery.camelCase(key);
          if (key in cache) {
            name = [key, camel];
          } else {
            name = camel;
            name = name in cache ? [name] : (name.match(rnotwhite) || []);
          }
        }
        i = name.length;
        while (i--) {
          delete cache[name[i]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value) {
        var data,
            camelKey;
        if (elem && value === undefined) {
          data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
          if (data !== undefined) {
            return data;
          }
          camelKey = jQuery.camelCase(key);
          data = dataUser.get(elem, camelKey);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, camelKey, undefined);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        camelKey = jQuery.camelCase(key);
        this.each(function() {
          var data = dataUser.get(this, camelKey);
          dataUser.set(this, camelKey, value);
          if (key.indexOf("-") > -1 && data !== undefined) {
            dataUser.set(this, key, value);
          }
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHidden = function(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale = 1,
        maxIterations = 20,
        currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3];
      valueParts = valueParts || [];
      initialInUnit = +initial || 1;
      do {
        scale = scale || ".5";
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  var rtagName = (/<([\w:-]+)/);
  var rscriptType = (/^$|\/(?:java|ecma)script/i);
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn,
        type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(event) {
      event = jQuery.event.fix(event);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue = [],
          args = slice.call(arguments),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          matches,
          sel,
          handleObj,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
      filter: function(event, original) {
        var eventDoc,
            doc,
            body,
            button = original.button;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.which && button !== undefined) {
          event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
        }
        return event;
      }
    },
    fix: function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      rnoInnerhtml = /<script|<style|<link/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);
    if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    domManip: domManip,
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe,
      elemdisplay = {
        HTML: "block",
        BODY: "block"
      };
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = jQuery.css(elem[0], "display");
    elem.detach();
    return display;
  }
  function defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === "none" || !display) {
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
        doc = iframe[0].contentDocument;
        doc.write();
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  var swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var documentElement = document.documentElement;
  (function() {
    var pixelPositionVal,
        boxSizingReliableVal,
        pixelMarginRightVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
    container.appendChild(div);
    function computeStyleTests() {
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
      div.innerHTML = "";
      documentElement.appendChild(container);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";
      reliableMarginLeftVal = divStyle.marginLeft === "2px";
      boxSizingReliableVal = divStyle.width === "4px";
      div.style.marginRight = "50%";
      pixelMarginRightVal = divStyle.marginRight === "4px";
      documentElement.removeChild(container);
    }
    jQuery.extend(support, {
      pixelPosition: function() {
        computeStyleTests();
        return pixelPositionVal;
      },
      boxSizingReliable: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return boxSizingReliableVal;
      },
      pixelMarginRight: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return pixelMarginRightVal;
      },
      reliableMarginLeft: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return reliableMarginLeftVal;
      },
      reliableMarginRight: function() {
        var ret,
            marginDiv = div.appendChild(document.createElement("div"));
        marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
        marginDiv.style.marginRight = marginDiv.style.width = "0";
        div.style.width = "1px";
        documentElement.appendChild(container);
        ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
        documentElement.removeChild(container);
        div.removeChild(marginDiv);
        return ret;
      }
    });
  })();
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
    if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
      ret = jQuery.style(elem, name);
    }
    if (computed) {
      if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;
  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
        val = 0;
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (document.msFullscreenElement && window.top !== window) {
      if (elem.getClientRects().length) {
        val = Math.round(elem.getBoundingClientRect()[name] * 100);
      }
    }
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  function showHide(elements, show) {
    var display,
        elem,
        hidden,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = dataPriv.get(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);
        if (display !== "none" || !hidden) {
          dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }
    return elements;
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches,
            styles = extra && getStyles(elem),
            subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[name] = value;
          value = jQuery.css(elem, name);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
    if (computed) {
      return swap(elem, {"display": "inline-block"}, curCSS, [elem, "marginRight"]);
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
  function createFxNow() {
    window.setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
        style.display = "inline-block";
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = undefined;
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = dataPriv.access(elem, "fxshow", {});
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop;
        dataPriv.remove(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {"*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]},
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnotwhite);
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    window.clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function() {
        window.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}},
    removeAttr: function(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          propName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            elem[propName] = false;
          }
          elem.removeAttribute(name);
        }
      }
    }
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle;
      if (!isXML) {
        handle = attrHandle[name];
        attrHandle[name] = ret;
        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
        attrHandle[name] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return (elem[name] = value);
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {tabIndex: {get: function(elem) {
          var tabindex = jQuery.find.attr(elem, "tabindex");
          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
        }}},
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      }};
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  var rclass = /[\t\r\n\f]/g;
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }
      return this.each(function() {
        var className,
            i,
            self,
            classNames;
        if (type === "string") {
          i = 0;
          self = jQuery(this);
          classNames = value.match(rnotwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, "__className__", className);
          }
          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          return jQuery.trim(elem.value);
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one" || index < 0,
              values = one ? null : [],
              max = one ? index + 1 : options.length,
              i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  jQuery.extend(jQuery.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  });
  jQuery.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }});
  support.focusin = "onfocusin" in window;
  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  var location = window.location;
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": jQuery.parseJSON,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          urlAnchor,
          fireGlobals,
          i,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          state = 0,
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (state === 2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return state === 2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              var lname = name.toLowerCase();
              if (!state) {
                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (!state) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (state < 2) {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                } else {
                  jqXHR.always(map[jqXHR.status]);
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        jqXHR[i](s[i]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (state === 2) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  jQuery.expr.filters.hidden = function(elem) {
    return !jQuery.expr.filters.visible(elem);
  };
  jQuery.expr.filters.visible = function(elem) {
    return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
  };
  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, value) {
          value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
    0: 200,
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback,
        errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete(xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = callback("error");
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  support.createHTMLDocument = (function() {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  })();
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || (support.createHTMLDocument ? document.implementation.createHTMLDocument("") : document);
    var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  var _load = jQuery.fn.load;
  jQuery.fn.load = function(url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off > -1) {
      selector = jQuery.trim(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(self, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          elem = this[0],
          box = {
            top: 0,
            left: 0
          },
          doc = elem && elem.ownerDocument;
      if (!doc) {
        return;
      }
      docElem = doc.documentElement;
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }
      box = elem.getBoundingClientRect();
      win = getWindow(doc);
      return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    size: function() {
      return this.length;
    }
  });
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if (typeof define === "function" && define.amd) {
    define("7", [], function() {
      return jQuery;
    }), define("jquery", ["7"], function(m) {
      return m;
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
}));

})();
$__System.registerDynamic("a", ["6", "7", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this,
      GLOBAL = this;
  (function(factory) {
    var root = (typeof self == 'object' && self.self === self && self) || (typeof global == 'object' && global.global === global && global);
    if (typeof define === 'function' && define.amd) {
      define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
        root.Backbone = factory(root, exports, _, $);
      });
    } else if (typeof exports !== 'undefined') {
      var _ = $__require('6'),
          $;
      try {
        $ = $__require('7');
      } catch (e) {}
      factory(root, exports, _, $);
    } else {
      root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }
  })(function(root, Backbone, _, $) {
    var previousBackbone = root.Backbone;
    var slice = Array.prototype.slice;
    Backbone.VERSION = '1.3.2';
    Backbone.$ = $;
    Backbone.noConflict = function() {
      root.Backbone = previousBackbone;
      return this;
    };
    Backbone.emulateHTTP = false;
    Backbone.emulateJSON = false;
    var addMethod = function(length, method, attribute) {
      switch (length) {
        case 1:
          return function() {
            return _[method](this[attribute]);
          };
        case 2:
          return function(value) {
            return _[method](this[attribute], value);
          };
        case 3:
          return function(iteratee, context) {
            return _[method](this[attribute], cb(iteratee, this), context);
          };
        case 4:
          return function(iteratee, defaultVal, context) {
            return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
          };
        default:
          return function() {
            var args = slice.call(arguments);
            args.unshift(this[attribute]);
            return _[method].apply(_, args);
          };
      }
    };
    var addUnderscoreMethods = function(Class, methods, attribute) {
      _.each(methods, function(length, method) {
        if (_[method])
          Class.prototype[method] = addMethod(length, method, attribute);
      });
    };
    var cb = function(iteratee, instance) {
      if (_.isFunction(iteratee))
        return iteratee;
      if (_.isObject(iteratee) && !instance._isModel(iteratee))
        return modelMatcher(iteratee);
      if (_.isString(iteratee))
        return function(model) {
          return model.get(iteratee);
        };
      return iteratee;
    };
    var modelMatcher = function(attrs) {
      var matcher = _.matches(attrs);
      return function(model) {
        return matcher(model.attributes);
      };
    };
    var Events = Backbone.Events = {};
    var eventSplitter = /\s+/;
    var eventsApi = function(iteratee, events, name, callback, opts) {
      var i = 0,
          names;
      if (name && typeof name === 'object') {
        if (callback !== void 0 && 'context' in opts && opts.context === void 0)
          opts.context = callback;
        for (names = _.keys(name); i < names.length; i++) {
          events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
        }
      } else if (name && eventSplitter.test(name)) {
        for (names = name.split(eventSplitter); i < names.length; i++) {
          events = iteratee(events, names[i], callback, opts);
        }
      } else {
        events = iteratee(events, name, callback, opts);
      }
      return events;
    };
    Events.on = function(name, callback, context) {
      return internalOn(this, name, callback, context);
    };
    var internalOn = function(obj, name, callback, context, listening) {
      obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
      });
      if (listening) {
        var listeners = obj._listeners || (obj._listeners = {});
        listeners[listening.id] = listening;
      }
      return obj;
    };
    Events.listenTo = function(obj, name, callback) {
      if (!obj)
        return this;
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var listening = listeningTo[id];
      if (!listening) {
        var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
        listening = listeningTo[id] = {
          obj: obj,
          objId: id,
          id: thisId,
          listeningTo: listeningTo,
          count: 0
        };
      }
      internalOn(obj, name, callback, this, listening);
      return this;
    };
    var onApi = function(events, name, callback, options) {
      if (callback) {
        var handlers = events[name] || (events[name] = []);
        var context = options.context,
            ctx = options.ctx,
            listening = options.listening;
        if (listening)
          listening.count++;
        handlers.push({
          callback: callback,
          context: context,
          ctx: context || ctx,
          listening: listening
        });
      }
      return events;
    };
    Events.off = function(name, callback, context) {
      if (!this._events)
        return this;
      this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
      });
      return this;
    };
    Events.stopListening = function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo)
        return this;
      var ids = obj ? [obj._listenId] : _.keys(listeningTo);
      for (var i = 0; i < ids.length; i++) {
        var listening = listeningTo[ids[i]];
        if (!listening)
          break;
        listening.obj.off(name, callback, this);
      }
      return this;
    };
    var offApi = function(events, name, callback, options) {
      if (!events)
        return;
      var i = 0,
          listening;
      var context = options.context,
          listeners = options.listeners;
      if (!name && !callback && !context) {
        var ids = _.keys(listeners);
        for (; i < ids.length; i++) {
          listening = listeners[ids[i]];
          delete listeners[listening.id];
          delete listening.listeningTo[listening.objId];
        }
        return;
      }
      var names = name ? [name] : _.keys(events);
      for (; i < names.length; i++) {
        name = names[i];
        var handlers = events[name];
        if (!handlers)
          break;
        var remaining = [];
        for (var j = 0; j < handlers.length; j++) {
          var handler = handlers[j];
          if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
            remaining.push(handler);
          } else {
            listening = handler.listening;
            if (listening && --listening.count === 0) {
              delete listeners[listening.id];
              delete listening.listeningTo[listening.objId];
            }
          }
        }
        if (remaining.length) {
          events[name] = remaining;
        } else {
          delete events[name];
        }
      }
      return events;
    };
    Events.once = function(name, callback, context) {
      var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
      if (typeof name === 'string' && context == null)
        callback = void 0;
      return this.on(events, callback, context);
    };
    Events.listenToOnce = function(obj, name, callback) {
      var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
      return this.listenTo(obj, events);
    };
    var onceMap = function(map, name, callback, offer) {
      if (callback) {
        var once = map[name] = _.once(function() {
          offer(name, once);
          callback.apply(this, arguments);
        });
        once._callback = callback;
      }
      return map;
    };
    Events.trigger = function(name) {
      if (!this._events)
        return this;
      var length = Math.max(0, arguments.length - 1);
      var args = Array(length);
      for (var i = 0; i < length; i++)
        args[i] = arguments[i + 1];
      eventsApi(triggerApi, this._events, name, void 0, args);
      return this;
    };
    var triggerApi = function(objEvents, name, callback, args) {
      if (objEvents) {
        var events = objEvents[name];
        var allEvents = objEvents.all;
        if (events && allEvents)
          allEvents = allEvents.slice();
        if (events)
          triggerEvents(events, args);
        if (allEvents)
          triggerEvents(allEvents, [name].concat(args));
      }
      return objEvents;
    };
    var triggerEvents = function(events, args) {
      var ev,
          i = -1,
          l = events.length,
          a1 = args[0],
          a2 = args[1],
          a3 = args[2];
      switch (args.length) {
        case 0:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
          return;
        case 1:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1);
          return;
        case 2:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1, a2);
          return;
        case 3:
          while (++i < l)
            (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
          return;
        default:
          while (++i < l)
            (ev = events[i]).callback.apply(ev.ctx, args);
          return;
      }
    };
    Events.bind = Events.on;
    Events.unbind = Events.off;
    _.extend(Backbone, Events);
    var Model = Backbone.Model = function(attributes, options) {
      var attrs = attributes || {};
      options || (options = {});
      this.cid = _.uniqueId(this.cidPrefix);
      this.attributes = {};
      if (options.collection)
        this.collection = options.collection;
      if (options.parse)
        attrs = this.parse(attrs, options) || {};
      var defaults = _.result(this, 'defaults');
      attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
      this.set(attrs, options);
      this.changed = {};
      this.initialize.apply(this, arguments);
    };
    _.extend(Model.prototype, Events, {
      changed: null,
      validationError: null,
      idAttribute: 'id',
      cidPrefix: 'c',
      initialize: function() {},
      toJSON: function(options) {
        return _.clone(this.attributes);
      },
      sync: function() {
        return Backbone.sync.apply(this, arguments);
      },
      get: function(attr) {
        return this.attributes[attr];
      },
      escape: function(attr) {
        return _.escape(this.get(attr));
      },
      has: function(attr) {
        return this.get(attr) != null;
      },
      matches: function(attrs) {
        return !!_.iteratee(attrs, this)(this.attributes);
      },
      set: function(key, val, options) {
        if (key == null)
          return this;
        var attrs;
        if (typeof key === 'object') {
          attrs = key;
          options = val;
        } else {
          (attrs = {})[key] = val;
        }
        options || (options = {});
        if (!this._validate(attrs, options))
          return false;
        var unset = options.unset;
        var silent = options.silent;
        var changes = [];
        var changing = this._changing;
        this._changing = true;
        if (!changing) {
          this._previousAttributes = _.clone(this.attributes);
          this.changed = {};
        }
        var current = this.attributes;
        var changed = this.changed;
        var prev = this._previousAttributes;
        for (var attr in attrs) {
          val = attrs[attr];
          if (!_.isEqual(current[attr], val))
            changes.push(attr);
          if (!_.isEqual(prev[attr], val)) {
            changed[attr] = val;
          } else {
            delete changed[attr];
          }
          unset ? delete current[attr] : current[attr] = val;
        }
        if (this.idAttribute in attrs)
          this.id = this.get(this.idAttribute);
        if (!silent) {
          if (changes.length)
            this._pending = options;
          for (var i = 0; i < changes.length; i++) {
            this.trigger('change:' + changes[i], this, current[changes[i]], options);
          }
        }
        if (changing)
          return this;
        if (!silent) {
          while (this._pending) {
            options = this._pending;
            this._pending = false;
            this.trigger('change', this, options);
          }
        }
        this._pending = false;
        this._changing = false;
        return this;
      },
      unset: function(attr, options) {
        return this.set(attr, void 0, _.extend({}, options, {unset: true}));
      },
      clear: function(options) {
        var attrs = {};
        for (var key in this.attributes)
          attrs[key] = void 0;
        return this.set(attrs, _.extend({}, options, {unset: true}));
      },
      hasChanged: function(attr) {
        if (attr == null)
          return !_.isEmpty(this.changed);
        return _.has(this.changed, attr);
      },
      changedAttributes: function(diff) {
        if (!diff)
          return this.hasChanged() ? _.clone(this.changed) : false;
        var old = this._changing ? this._previousAttributes : this.attributes;
        var changed = {};
        for (var attr in diff) {
          var val = diff[attr];
          if (_.isEqual(old[attr], val))
            continue;
          changed[attr] = val;
        }
        return _.size(changed) ? changed : false;
      },
      previous: function(attr) {
        if (attr == null || !this._previousAttributes)
          return null;
        return this._previousAttributes[attr];
      },
      previousAttributes: function() {
        return _.clone(this._previousAttributes);
      },
      fetch: function(options) {
        options = _.extend({parse: true}, options);
        var model = this;
        var success = options.success;
        options.success = function(resp) {
          var serverAttrs = options.parse ? model.parse(resp, options) : resp;
          if (!model.set(serverAttrs, options))
            return false;
          if (success)
            success.call(options.context, model, resp, options);
          model.trigger('sync', model, resp, options);
        };
        wrapError(this, options);
        return this.sync('read', this, options);
      },
      save: function(key, val, options) {
        var attrs;
        if (key == null || typeof key === 'object') {
          attrs = key;
          options = val;
        } else {
          (attrs = {})[key] = val;
        }
        options = _.extend({
          validate: true,
          parse: true
        }, options);
        var wait = options.wait;
        if (attrs && !wait) {
          if (!this.set(attrs, options))
            return false;
        } else if (!this._validate(attrs, options)) {
          return false;
        }
        var model = this;
        var success = options.success;
        var attributes = this.attributes;
        options.success = function(resp) {
          model.attributes = attributes;
          var serverAttrs = options.parse ? model.parse(resp, options) : resp;
          if (wait)
            serverAttrs = _.extend({}, attrs, serverAttrs);
          if (serverAttrs && !model.set(serverAttrs, options))
            return false;
          if (success)
            success.call(options.context, model, resp, options);
          model.trigger('sync', model, resp, options);
        };
        wrapError(this, options);
        if (attrs && wait)
          this.attributes = _.extend({}, attributes, attrs);
        var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
        if (method === 'patch' && !options.attrs)
          options.attrs = attrs;
        var xhr = this.sync(method, this, options);
        this.attributes = attributes;
        return xhr;
      },
      destroy: function(options) {
        options = options ? _.clone(options) : {};
        var model = this;
        var success = options.success;
        var wait = options.wait;
        var destroy = function() {
          model.stopListening();
          model.trigger('destroy', model, model.collection, options);
        };
        options.success = function(resp) {
          if (wait)
            destroy();
          if (success)
            success.call(options.context, model, resp, options);
          if (!model.isNew())
            model.trigger('sync', model, resp, options);
        };
        var xhr = false;
        if (this.isNew()) {
          _.defer(options.success);
        } else {
          wrapError(this, options);
          xhr = this.sync('delete', this, options);
        }
        if (!wait)
          destroy();
        return xhr;
      },
      url: function() {
        var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
        if (this.isNew())
          return base;
        var id = this.get(this.idAttribute);
        return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
      },
      parse: function(resp, options) {
        return resp;
      },
      clone: function() {
        return new this.constructor(this.attributes);
      },
      isNew: function() {
        return !this.has(this.idAttribute);
      },
      isValid: function(options) {
        return this._validate({}, _.extend({}, options, {validate: true}));
      },
      _validate: function(attrs, options) {
        if (!options.validate || !this.validate)
          return true;
        attrs = _.extend({}, this.attributes, attrs);
        var error = this.validationError = this.validate(attrs, options) || null;
        if (!error)
          return true;
        this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
        return false;
      }
    });
    var modelMethods = {
      keys: 1,
      values: 1,
      pairs: 1,
      invert: 1,
      pick: 0,
      omit: 0,
      chain: 1,
      isEmpty: 1
    };
    addUnderscoreMethods(Model, modelMethods, 'attributes');
    var Collection = Backbone.Collection = function(models, options) {
      options || (options = {});
      if (options.model)
        this.model = options.model;
      if (options.comparator !== void 0)
        this.comparator = options.comparator;
      this._reset();
      this.initialize.apply(this, arguments);
      if (models)
        this.reset(models, _.extend({silent: true}, options));
    };
    var setOptions = {
      add: true,
      remove: true,
      merge: true
    };
    var addOptions = {
      add: true,
      remove: false
    };
    var splice = function(array, insert, at) {
      at = Math.min(Math.max(at, 0), array.length);
      var tail = Array(array.length - at);
      var length = insert.length;
      var i;
      for (i = 0; i < tail.length; i++)
        tail[i] = array[i + at];
      for (i = 0; i < length; i++)
        array[i + at] = insert[i];
      for (i = 0; i < tail.length; i++)
        array[i + length + at] = tail[i];
    };
    _.extend(Collection.prototype, Events, {
      model: Model,
      initialize: function() {},
      toJSON: function(options) {
        return this.map(function(model) {
          return model.toJSON(options);
        });
      },
      sync: function() {
        return Backbone.sync.apply(this, arguments);
      },
      add: function(models, options) {
        return this.set(models, _.extend({merge: false}, options, addOptions));
      },
      remove: function(models, options) {
        options = _.extend({}, options);
        var singular = !_.isArray(models);
        models = singular ? [models] : models.slice();
        var removed = this._removeModels(models, options);
        if (!options.silent && removed.length) {
          options.changes = {
            added: [],
            merged: [],
            removed: removed
          };
          this.trigger('update', this, options);
        }
        return singular ? removed[0] : removed;
      },
      set: function(models, options) {
        if (models == null)
          return;
        options = _.extend({}, setOptions, options);
        if (options.parse && !this._isModel(models)) {
          models = this.parse(models, options) || [];
        }
        var singular = !_.isArray(models);
        models = singular ? [models] : models.slice();
        var at = options.at;
        if (at != null)
          at = +at;
        if (at > this.length)
          at = this.length;
        if (at < 0)
          at += this.length + 1;
        var set = [];
        var toAdd = [];
        var toMerge = [];
        var toRemove = [];
        var modelMap = {};
        var add = options.add;
        var merge = options.merge;
        var remove = options.remove;
        var sort = false;
        var sortable = this.comparator && at == null && options.sort !== false;
        var sortAttr = _.isString(this.comparator) ? this.comparator : null;
        var model,
            i;
        for (i = 0; i < models.length; i++) {
          model = models[i];
          var existing = this.get(model);
          if (existing) {
            if (merge && model !== existing) {
              var attrs = this._isModel(model) ? model.attributes : model;
              if (options.parse)
                attrs = existing.parse(attrs, options);
              existing.set(attrs, options);
              toMerge.push(existing);
              if (sortable && !sort)
                sort = existing.hasChanged(sortAttr);
            }
            if (!modelMap[existing.cid]) {
              modelMap[existing.cid] = true;
              set.push(existing);
            }
            models[i] = existing;
          } else if (add) {
            model = models[i] = this._prepareModel(model, options);
            if (model) {
              toAdd.push(model);
              this._addReference(model, options);
              modelMap[model.cid] = true;
              set.push(model);
            }
          }
        }
        if (remove) {
          for (i = 0; i < this.length; i++) {
            model = this.models[i];
            if (!modelMap[model.cid])
              toRemove.push(model);
          }
          if (toRemove.length)
            this._removeModels(toRemove, options);
        }
        var orderChanged = false;
        var replace = !sortable && add && remove;
        if (set.length && replace) {
          orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
            return m !== set[index];
          });
          this.models.length = 0;
          splice(this.models, set, 0);
          this.length = this.models.length;
        } else if (toAdd.length) {
          if (sortable)
            sort = true;
          splice(this.models, toAdd, at == null ? this.length : at);
          this.length = this.models.length;
        }
        if (sort)
          this.sort({silent: true});
        if (!options.silent) {
          for (i = 0; i < toAdd.length; i++) {
            if (at != null)
              options.index = at + i;
            model = toAdd[i];
            model.trigger('add', model, this, options);
          }
          if (sort || orderChanged)
            this.trigger('sort', this, options);
          if (toAdd.length || toRemove.length || toMerge.length) {
            options.changes = {
              added: toAdd,
              removed: toRemove,
              merged: toMerge
            };
            this.trigger('update', this, options);
          }
        }
        return singular ? models[0] : models;
      },
      reset: function(models, options) {
        options = options ? _.clone(options) : {};
        for (var i = 0; i < this.models.length; i++) {
          this._removeReference(this.models[i], options);
        }
        options.previousModels = this.models;
        this._reset();
        models = this.add(models, _.extend({silent: true}, options));
        if (!options.silent)
          this.trigger('reset', this, options);
        return models;
      },
      push: function(model, options) {
        return this.add(model, _.extend({at: this.length}, options));
      },
      pop: function(options) {
        var model = this.at(this.length - 1);
        return this.remove(model, options);
      },
      unshift: function(model, options) {
        return this.add(model, _.extend({at: 0}, options));
      },
      shift: function(options) {
        var model = this.at(0);
        return this.remove(model, options);
      },
      slice: function() {
        return slice.apply(this.models, arguments);
      },
      get: function(obj) {
        if (obj == null)
          return void 0;
        return this._byId[obj] || this._byId[this.modelId(obj.attributes || obj)] || obj.cid && this._byId[obj.cid];
      },
      has: function(obj) {
        return this.get(obj) != null;
      },
      at: function(index) {
        if (index < 0)
          index += this.length;
        return this.models[index];
      },
      where: function(attrs, first) {
        return this[first ? 'find' : 'filter'](attrs);
      },
      findWhere: function(attrs) {
        return this.where(attrs, true);
      },
      sort: function(options) {
        var comparator = this.comparator;
        if (!comparator)
          throw new Error('Cannot sort a set without a comparator');
        options || (options = {});
        var length = comparator.length;
        if (_.isFunction(comparator))
          comparator = _.bind(comparator, this);
        if (length === 1 || _.isString(comparator)) {
          this.models = this.sortBy(comparator);
        } else {
          this.models.sort(comparator);
        }
        if (!options.silent)
          this.trigger('sort', this, options);
        return this;
      },
      pluck: function(attr) {
        return this.map(attr + '');
      },
      fetch: function(options) {
        options = _.extend({parse: true}, options);
        var success = options.success;
        var collection = this;
        options.success = function(resp) {
          var method = options.reset ? 'reset' : 'set';
          collection[method](resp, options);
          if (success)
            success.call(options.context, collection, resp, options);
          collection.trigger('sync', collection, resp, options);
        };
        wrapError(this, options);
        return this.sync('read', this, options);
      },
      create: function(model, options) {
        options = options ? _.clone(options) : {};
        var wait = options.wait;
        model = this._prepareModel(model, options);
        if (!model)
          return false;
        if (!wait)
          this.add(model, options);
        var collection = this;
        var success = options.success;
        options.success = function(m, resp, callbackOpts) {
          if (wait)
            collection.add(m, callbackOpts);
          if (success)
            success.call(callbackOpts.context, m, resp, callbackOpts);
        };
        model.save(null, options);
        return model;
      },
      parse: function(resp, options) {
        return resp;
      },
      clone: function() {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator
        });
      },
      modelId: function(attrs) {
        return attrs[this.model.prototype.idAttribute || 'id'];
      },
      _reset: function() {
        this.length = 0;
        this.models = [];
        this._byId = {};
      },
      _prepareModel: function(attrs, options) {
        if (this._isModel(attrs)) {
          if (!attrs.collection)
            attrs.collection = this;
          return attrs;
        }
        options = options ? _.clone(options) : {};
        options.collection = this;
        var model = new this.model(attrs, options);
        if (!model.validationError)
          return model;
        this.trigger('invalid', this, model.validationError, options);
        return false;
      },
      _removeModels: function(models, options) {
        var removed = [];
        for (var i = 0; i < models.length; i++) {
          var model = this.get(models[i]);
          if (!model)
            continue;
          var index = this.indexOf(model);
          this.models.splice(index, 1);
          this.length--;
          delete this._byId[model.cid];
          var id = this.modelId(model.attributes);
          if (id != null)
            delete this._byId[id];
          if (!options.silent) {
            options.index = index;
            model.trigger('remove', model, this, options);
          }
          removed.push(model);
          this._removeReference(model, options);
        }
        return removed;
      },
      _isModel: function(model) {
        return model instanceof Model;
      },
      _addReference: function(model, options) {
        this._byId[model.cid] = model;
        var id = this.modelId(model.attributes);
        if (id != null)
          this._byId[id] = model;
        model.on('all', this._onModelEvent, this);
      },
      _removeReference: function(model, options) {
        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        if (id != null)
          delete this._byId[id];
        if (this === model.collection)
          delete model.collection;
        model.off('all', this._onModelEvent, this);
      },
      _onModelEvent: function(event, model, collection, options) {
        if (model) {
          if ((event === 'add' || event === 'remove') && collection !== this)
            return;
          if (event === 'destroy')
            this.remove(model, options);
          if (event === 'change') {
            var prevId = this.modelId(model.previousAttributes());
            var id = this.modelId(model.attributes);
            if (prevId !== id) {
              if (prevId != null)
                delete this._byId[prevId];
              if (id != null)
                this._byId[id] = model;
            }
          }
        }
        this.trigger.apply(this, arguments);
      }
    });
    var collectionMethods = {
      forEach: 3,
      each: 3,
      map: 3,
      collect: 3,
      reduce: 0,
      foldl: 0,
      inject: 0,
      reduceRight: 0,
      foldr: 0,
      find: 3,
      detect: 3,
      filter: 3,
      select: 3,
      reject: 3,
      every: 3,
      all: 3,
      some: 3,
      any: 3,
      include: 3,
      includes: 3,
      contains: 3,
      invoke: 0,
      max: 3,
      min: 3,
      toArray: 1,
      size: 1,
      first: 3,
      head: 3,
      take: 3,
      initial: 3,
      rest: 3,
      tail: 3,
      drop: 3,
      last: 3,
      without: 0,
      difference: 0,
      indexOf: 3,
      shuffle: 1,
      lastIndexOf: 3,
      isEmpty: 1,
      chain: 1,
      sample: 3,
      partition: 3,
      groupBy: 3,
      countBy: 3,
      sortBy: 3,
      indexBy: 3,
      findIndex: 3,
      findLastIndex: 3
    };
    addUnderscoreMethods(Collection, collectionMethods, 'models');
    var View = Backbone.View = function(options) {
      this.cid = _.uniqueId('view');
      _.extend(this, _.pick(options, viewOptions));
      this._ensureElement();
      this.initialize.apply(this, arguments);
    };
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
    _.extend(View.prototype, Events, {
      tagName: 'div',
      $: function(selector) {
        return this.$el.find(selector);
      },
      initialize: function() {},
      render: function() {
        return this;
      },
      remove: function() {
        this._removeElement();
        this.stopListening();
        return this;
      },
      _removeElement: function() {
        this.$el.remove();
      },
      setElement: function(element) {
        this.undelegateEvents();
        this._setElement(element);
        this.delegateEvents();
        return this;
      },
      _setElement: function(el) {
        this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
        this.el = this.$el[0];
      },
      delegateEvents: function(events) {
        events || (events = _.result(this, 'events'));
        if (!events)
          return this;
        this.undelegateEvents();
        for (var key in events) {
          var method = events[key];
          if (!_.isFunction(method))
            method = this[method];
          if (!method)
            continue;
          var match = key.match(delegateEventSplitter);
          this.delegate(match[1], match[2], _.bind(method, this));
        }
        return this;
      },
      delegate: function(eventName, selector, listener) {
        this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
        return this;
      },
      undelegateEvents: function() {
        if (this.$el)
          this.$el.off('.delegateEvents' + this.cid);
        return this;
      },
      undelegate: function(eventName, selector, listener) {
        this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
        return this;
      },
      _createElement: function(tagName) {
        return document.createElement(tagName);
      },
      _ensureElement: function() {
        if (!this.el) {
          var attrs = _.extend({}, _.result(this, 'attributes'));
          if (this.id)
            attrs.id = _.result(this, 'id');
          if (this.className)
            attrs['class'] = _.result(this, 'className');
          this.setElement(this._createElement(_.result(this, 'tagName')));
          this._setAttributes(attrs);
        } else {
          this.setElement(_.result(this, 'el'));
        }
      },
      _setAttributes: function(attributes) {
        this.$el.attr(attributes);
      }
    });
    Backbone.sync = function(method, model, options) {
      var type = methodMap[method];
      _.defaults(options || (options = {}), {
        emulateHTTP: Backbone.emulateHTTP,
        emulateJSON: Backbone.emulateJSON
      });
      var params = {
        type: type,
        dataType: 'json'
      };
      if (!options.url) {
        params.url = _.result(model, 'url') || urlError();
      }
      if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
        params.contentType = 'application/json';
        params.data = JSON.stringify(options.attrs || model.toJSON(options));
      }
      if (options.emulateJSON) {
        params.contentType = 'application/x-www-form-urlencoded';
        params.data = params.data ? {model: params.data} : {};
      }
      if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
        params.type = 'POST';
        if (options.emulateJSON)
          params.data._method = type;
        var beforeSend = options.beforeSend;
        options.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
          if (beforeSend)
            return beforeSend.apply(this, arguments);
        };
      }
      if (params.type !== 'GET' && !options.emulateJSON) {
        params.processData = false;
      }
      var error = options.error;
      options.error = function(xhr, textStatus, errorThrown) {
        options.textStatus = textStatus;
        options.errorThrown = errorThrown;
        if (error)
          error.call(options.context, xhr, textStatus, errorThrown);
      };
      var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
      model.trigger('request', model, xhr, options);
      return xhr;
    };
    var methodMap = {
      'create': 'POST',
      'update': 'PUT',
      'patch': 'PATCH',
      'delete': 'DELETE',
      'read': 'GET'
    };
    Backbone.ajax = function() {
      return Backbone.$.ajax.apply(Backbone.$, arguments);
    };
    var Router = Backbone.Router = function(options) {
      options || (options = {});
      if (options.routes)
        this.routes = options.routes;
      this._bindRoutes();
      this.initialize.apply(this, arguments);
    };
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
      initialize: function() {},
      route: function(route, name, callback) {
        if (!_.isRegExp(route))
          route = this._routeToRegExp(route);
        if (_.isFunction(name)) {
          callback = name;
          name = '';
        }
        if (!callback)
          callback = this[name];
        var router = this;
        Backbone.history.route(route, function(fragment) {
          var args = router._extractParameters(route, fragment);
          if (router.execute(callback, args, name) !== false) {
            router.trigger.apply(router, ['route:' + name].concat(args));
            router.trigger('route', name, args);
            Backbone.history.trigger('route', router, name, args);
          }
        });
        return this;
      },
      execute: function(callback, args, name) {
        if (callback)
          callback.apply(this, args);
      },
      navigate: function(fragment, options) {
        Backbone.history.navigate(fragment, options);
        return this;
      },
      _bindRoutes: function() {
        if (!this.routes)
          return;
        this.routes = _.result(this, 'routes');
        var route,
            routes = _.keys(this.routes);
        while ((route = routes.pop()) != null) {
          this.route(route, this.routes[route]);
        }
      },
      _routeToRegExp: function(route) {
        route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
          return optional ? match : '([^/?]+)';
        }).replace(splatParam, '([^?]*?)');
        return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
      },
      _extractParameters: function(route, fragment) {
        var params = route.exec(fragment).slice(1);
        return _.map(params, function(param, i) {
          if (i === params.length - 1)
            return param || null;
          return param ? decodeURIComponent(param) : null;
        });
      }
    });
    var History = Backbone.History = function() {
      this.handlers = [];
      this.checkUrl = _.bind(this.checkUrl, this);
      if (typeof window !== 'undefined') {
        this.location = window.location;
        this.history = window.history;
      }
    };
    var routeStripper = /^[#\/]|\s+$/g;
    var rootStripper = /^\/+|\/+$/g;
    var pathStripper = /#.*$/;
    History.started = false;
    _.extend(History.prototype, Events, {
      interval: 50,
      atRoot: function() {
        var path = this.location.pathname.replace(/[^\/]$/, '$&/');
        return path === this.root && !this.getSearch();
      },
      matchRoot: function() {
        var path = this.decodeFragment(this.location.pathname);
        var rootPath = path.slice(0, this.root.length - 1) + '/';
        return rootPath === this.root;
      },
      decodeFragment: function(fragment) {
        return decodeURI(fragment.replace(/%25/g, '%2525'));
      },
      getSearch: function() {
        var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
        return match ? match[0] : '';
      },
      getHash: function(window) {
        var match = (window || this).location.href.match(/#(.*)$/);
        return match ? match[1] : '';
      },
      getPath: function() {
        var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
        return path.charAt(0) === '/' ? path.slice(1) : path;
      },
      getFragment: function(fragment) {
        if (fragment == null) {
          if (this._usePushState || !this._wantsHashChange) {
            fragment = this.getPath();
          } else {
            fragment = this.getHash();
          }
        }
        return fragment.replace(routeStripper, '');
      },
      start: function(options) {
        if (History.started)
          throw new Error('Backbone.history has already been started');
        History.started = true;
        this.options = _.extend({root: '/'}, this.options, options);
        this.root = this.options.root;
        this._wantsHashChange = this.options.hashChange !== false;
        this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
        this._useHashChange = this._wantsHashChange && this._hasHashChange;
        this._wantsPushState = !!this.options.pushState;
        this._hasPushState = !!(this.history && this.history.pushState);
        this._usePushState = this._wantsPushState && this._hasPushState;
        this.fragment = this.getFragment();
        this.root = ('/' + this.root + '/').replace(rootStripper, '/');
        if (this._wantsHashChange && this._wantsPushState) {
          if (!this._hasPushState && !this.atRoot()) {
            var rootPath = this.root.slice(0, -1) || '/';
            this.location.replace(rootPath + '#' + this.getPath());
            return true;
          } else if (this._hasPushState && this.atRoot()) {
            this.navigate(this.getHash(), {replace: true});
          }
        }
        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
          this.iframe = document.createElement('iframe');
          this.iframe.src = 'javascript:0';
          this.iframe.style.display = 'none';
          this.iframe.tabIndex = -1;
          var body = document.body;
          var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
          iWindow.document.open();
          iWindow.document.close();
          iWindow.location.hash = '#' + this.fragment;
        }
        var addEventListener = window.addEventListener || function(eventName, listener) {
          return attachEvent('on' + eventName, listener);
        };
        if (this._usePushState) {
          addEventListener('popstate', this.checkUrl, false);
        } else if (this._useHashChange && !this.iframe) {
          addEventListener('hashchange', this.checkUrl, false);
        } else if (this._wantsHashChange) {
          this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
        }
        if (!this.options.silent)
          return this.loadUrl();
      },
      stop: function() {
        var removeEventListener = window.removeEventListener || function(eventName, listener) {
          return detachEvent('on' + eventName, listener);
        };
        if (this._usePushState) {
          removeEventListener('popstate', this.checkUrl, false);
        } else if (this._useHashChange && !this.iframe) {
          removeEventListener('hashchange', this.checkUrl, false);
        }
        if (this.iframe) {
          document.body.removeChild(this.iframe);
          this.iframe = null;
        }
        if (this._checkUrlInterval)
          clearInterval(this._checkUrlInterval);
        History.started = false;
      },
      route: function(route, callback) {
        this.handlers.unshift({
          route: route,
          callback: callback
        });
      },
      checkUrl: function(e) {
        var current = this.getFragment();
        if (current === this.fragment && this.iframe) {
          current = this.getHash(this.iframe.contentWindow);
        }
        if (current === this.fragment)
          return false;
        if (this.iframe)
          this.navigate(current);
        this.loadUrl();
      },
      loadUrl: function(fragment) {
        if (!this.matchRoot())
          return false;
        fragment = this.fragment = this.getFragment(fragment);
        return _.some(this.handlers, function(handler) {
          if (handler.route.test(fragment)) {
            handler.callback(fragment);
            return true;
          }
        });
      },
      navigate: function(fragment, options) {
        if (!History.started)
          return false;
        if (!options || options === true)
          options = {trigger: !!options};
        fragment = this.getFragment(fragment || '');
        var rootPath = this.root;
        if (fragment === '' || fragment.charAt(0) === '?') {
          rootPath = rootPath.slice(0, -1) || '/';
        }
        var url = rootPath + fragment;
        fragment = this.decodeFragment(fragment.replace(pathStripper, ''));
        if (this.fragment === fragment)
          return;
        this.fragment = fragment;
        if (this._usePushState) {
          this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
        } else if (this._wantsHashChange) {
          this._updateHash(this.location, fragment, options.replace);
          if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
            var iWindow = this.iframe.contentWindow;
            if (!options.replace) {
              iWindow.document.open();
              iWindow.document.close();
            }
            this._updateHash(iWindow.location, fragment, options.replace);
          }
        } else {
          return this.location.assign(url);
        }
        if (options.trigger)
          return this.loadUrl(fragment);
      },
      _updateHash: function(location, fragment, replace) {
        if (replace) {
          var href = location.href.replace(/(javascript:|#).*$/, '');
          location.replace(href + '#' + fragment);
        } else {
          location.hash = '#' + fragment;
        }
      }
    });
    Backbone.history = new History;
    var extend = function(protoProps, staticProps) {
      var parent = this;
      var child;
      if (protoProps && _.has(protoProps, 'constructor')) {
        child = protoProps.constructor;
      } else {
        child = function() {
          return parent.apply(this, arguments);
        };
      }
      _.extend(child, parent, staticProps);
      child.prototype = _.create(parent.prototype, protoProps);
      child.prototype.constructor = child;
      child.__super__ = parent.prototype;
      return child;
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function() {
      throw new Error('A "url" property or function must be specified');
    };
    var wrapError = function(model, options) {
      var error = options.error;
      options.error = function(resp) {
        if (error)
          error.call(options.context, model, resp, options);
        model.trigger('error', model, resp, options);
      };
    };
    return Backbone;
  });
  return module.exports;
});

$__System.registerDynamic("@system-env", [], false, function() {
  return {
    "production": true,
    "browser": true,
    "node": false
  };
});

$__System.registerDynamic("4", ["@system-env"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var productionEnv = $__require('@system-env').production;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {NODE_ENV: productionEnv ? 'production' : 'development'};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("6", ["4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this,
      GLOBAL = this;
  (function() {
    var root = this;
    var previousUnderscore = root._;
    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype;
    var push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create;
    var Ctor = function() {};
    var _ = function(obj) {
      if (obj instanceof _)
        return obj;
      if (!(this instanceof _))
        return new _(obj);
      this._wrapped = obj;
    };
    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = _;
      }
      exports._ = _;
    } else {
      root._ = _;
    }
    _.VERSION = '1.8.3';
    var optimizeCb = function(func, context, argCount) {
      if (context === void 0)
        return func;
      switch (argCount == null ? 3 : argCount) {
        case 1:
          return function(value) {
            return func.call(context, value);
          };
        case 2:
          return function(value, other) {
            return func.call(context, value, other);
          };
        case 3:
          return function(value, index, collection) {
            return func.call(context, value, index, collection);
          };
        case 4:
          return function(accumulator, value, index, collection) {
            return func.call(context, accumulator, value, index, collection);
          };
      }
      return function() {
        return func.apply(context, arguments);
      };
    };
    var cb = function(value, context, argCount) {
      if (value == null)
        return _.identity;
      if (_.isFunction(value))
        return optimizeCb(value, context, argCount);
      if (_.isObject(value))
        return _.matcher(value);
      return _.property(value);
    };
    _.iteratee = function(value, context) {
      return cb(value, context, Infinity);
    };
    var createAssigner = function(keysFunc, undefinedOnly) {
      return function(obj) {
        var length = arguments.length;
        if (length < 2 || obj == null)
          return obj;
        for (var index = 1; index < length; index++) {
          var source = arguments[index],
              keys = keysFunc(source),
              l = keys.length;
          for (var i = 0; i < l; i++) {
            var key = keys[i];
            if (!undefinedOnly || obj[key] === void 0)
              obj[key] = source[key];
          }
        }
        return obj;
      };
    };
    var baseCreate = function(prototype) {
      if (!_.isObject(prototype))
        return {};
      if (nativeCreate)
        return nativeCreate(prototype);
      Ctor.prototype = prototype;
      var result = new Ctor;
      Ctor.prototype = null;
      return result;
    };
    var property = function(key) {
      return function(obj) {
        return obj == null ? void 0 : obj[key];
      };
    };
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property('length');
    var isArrayLike = function(collection) {
      var length = getLength(collection);
      return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };
    _.each = _.forEach = function(obj, iteratee, context) {
      iteratee = optimizeCb(iteratee, context);
      var i,
          length;
      if (isArrayLike(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
          iteratee(obj[i], i, obj);
        }
      } else {
        var keys = _.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
          iteratee(obj[keys[i]], keys[i], obj);
        }
      }
      return obj;
    };
    _.map = _.collect = function(obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          results = Array(length);
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        results[index] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
    };
    function createReduce(dir) {
      function iterator(obj, iteratee, memo, keys, index, length) {
        for (; index >= 0 && index < length; index += dir) {
          var currentKey = keys ? keys[index] : index;
          memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
      }
      return function(obj, iteratee, memo, context) {
        iteratee = optimizeCb(iteratee, context, 4);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            index = dir > 0 ? 0 : length - 1;
        if (arguments.length < 3) {
          memo = obj[keys ? keys[index] : index];
          index += dir;
        }
        return iterator(obj, iteratee, memo, keys, index, length);
      };
    }
    _.reduce = _.foldl = _.inject = createReduce(1);
    _.reduceRight = _.foldr = createReduce(-1);
    _.find = _.detect = function(obj, predicate, context) {
      var key;
      if (isArrayLike(obj)) {
        key = _.findIndex(obj, predicate, context);
      } else {
        key = _.findKey(obj, predicate, context);
      }
      if (key !== void 0 && key !== -1)
        return obj[key];
    };
    _.filter = _.select = function(obj, predicate, context) {
      var results = [];
      predicate = cb(predicate, context);
      _.each(obj, function(value, index, list) {
        if (predicate(value, index, list))
          results.push(value);
      });
      return results;
    };
    _.reject = function(obj, predicate, context) {
      return _.filter(obj, _.negate(cb(predicate)), context);
    };
    _.every = _.all = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length;
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (!predicate(obj[currentKey], currentKey, obj))
          return false;
      }
      return true;
    };
    _.some = _.any = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length;
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (predicate(obj[currentKey], currentKey, obj))
          return true;
      }
      return false;
    };
    _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
      if (!isArrayLike(obj))
        obj = _.values(obj);
      if (typeof fromIndex != 'number' || guard)
        fromIndex = 0;
      return _.indexOf(obj, item, fromIndex) >= 0;
    };
    _.invoke = function(obj, method) {
      var args = slice.call(arguments, 2);
      var isFunc = _.isFunction(method);
      return _.map(obj, function(value) {
        var func = isFunc ? method : value[method];
        return func == null ? func : func.apply(value, args);
      });
    };
    _.pluck = function(obj, key) {
      return _.map(obj, _.property(key));
    };
    _.where = function(obj, attrs) {
      return _.filter(obj, _.matcher(attrs));
    };
    _.findWhere = function(obj, attrs) {
      return _.find(obj, _.matcher(attrs));
    };
    _.max = function(obj, iteratee, context) {
      var result = -Infinity,
          lastComputed = -Infinity,
          value,
          computed;
      if (iteratee == null && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0,
            length = obj.length; i < length; i++) {
          value = obj[i];
          if (value > result) {
            result = value;
          }
        }
      } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function(value, index, list) {
          computed = iteratee(value, index, list);
          if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
            result = value;
            lastComputed = computed;
          }
        });
      }
      return result;
    };
    _.min = function(obj, iteratee, context) {
      var result = Infinity,
          lastComputed = Infinity,
          value,
          computed;
      if (iteratee == null && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0,
            length = obj.length; i < length; i++) {
          value = obj[i];
          if (value < result) {
            result = value;
          }
        }
      } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function(value, index, list) {
          computed = iteratee(value, index, list);
          if (computed < lastComputed || computed === Infinity && result === Infinity) {
            result = value;
            lastComputed = computed;
          }
        });
      }
      return result;
    };
    _.shuffle = function(obj) {
      var set = isArrayLike(obj) ? obj : _.values(obj);
      var length = set.length;
      var shuffled = Array(length);
      for (var index = 0,
          rand; index < length; index++) {
        rand = _.random(0, index);
        if (rand !== index)
          shuffled[index] = shuffled[rand];
        shuffled[rand] = set[index];
      }
      return shuffled;
    };
    _.sample = function(obj, n, guard) {
      if (n == null || guard) {
        if (!isArrayLike(obj))
          obj = _.values(obj);
        return obj[_.random(obj.length - 1)];
      }
      return _.shuffle(obj).slice(0, Math.max(0, n));
    };
    _.sortBy = function(obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      return _.pluck(_.map(obj, function(value, index, list) {
        return {
          value: value,
          index: index,
          criteria: iteratee(value, index, list)
        };
      }).sort(function(left, right) {
        var a = left.criteria;
        var b = right.criteria;
        if (a !== b) {
          if (a > b || a === void 0)
            return 1;
          if (a < b || b === void 0)
            return -1;
        }
        return left.index - right.index;
      }), 'value');
    };
    var group = function(behavior) {
      return function(obj, iteratee, context) {
        var result = {};
        iteratee = cb(iteratee, context);
        _.each(obj, function(value, index) {
          var key = iteratee(value, index, obj);
          behavior(result, value, key);
        });
        return result;
      };
    };
    _.groupBy = group(function(result, value, key) {
      if (_.has(result, key))
        result[key].push(value);
      else
        result[key] = [value];
    });
    _.indexBy = group(function(result, value, key) {
      result[key] = value;
    });
    _.countBy = group(function(result, value, key) {
      if (_.has(result, key))
        result[key]++;
      else
        result[key] = 1;
    });
    _.toArray = function(obj) {
      if (!obj)
        return [];
      if (_.isArray(obj))
        return slice.call(obj);
      if (isArrayLike(obj))
        return _.map(obj, _.identity);
      return _.values(obj);
    };
    _.size = function(obj) {
      if (obj == null)
        return 0;
      return isArrayLike(obj) ? obj.length : _.keys(obj).length;
    };
    _.partition = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var pass = [],
          fail = [];
      _.each(obj, function(value, key, obj) {
        (predicate(value, key, obj) ? pass : fail).push(value);
      });
      return [pass, fail];
    };
    _.first = _.head = _.take = function(array, n, guard) {
      if (array == null)
        return void 0;
      if (n == null || guard)
        return array[0];
      return _.initial(array, array.length - n);
    };
    _.initial = function(array, n, guard) {
      return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };
    _.last = function(array, n, guard) {
      if (array == null)
        return void 0;
      if (n == null || guard)
        return array[array.length - 1];
      return _.rest(array, Math.max(0, array.length - n));
    };
    _.rest = _.tail = _.drop = function(array, n, guard) {
      return slice.call(array, n == null || guard ? 1 : n);
    };
    _.compact = function(array) {
      return _.filter(array, _.identity);
    };
    var flatten = function(input, shallow, strict, startIndex) {
      var output = [],
          idx = 0;
      for (var i = startIndex || 0,
          length = getLength(input); i < length; i++) {
        var value = input[i];
        if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
          if (!shallow)
            value = flatten(value, shallow, strict);
          var j = 0,
              len = value.length;
          output.length += len;
          while (j < len) {
            output[idx++] = value[j++];
          }
        } else if (!strict) {
          output[idx++] = value;
        }
      }
      return output;
    };
    _.flatten = function(array, shallow) {
      return flatten(array, shallow, false);
    };
    _.without = function(array) {
      return _.difference(array, slice.call(arguments, 1));
    };
    _.uniq = _.unique = function(array, isSorted, iteratee, context) {
      if (!_.isBoolean(isSorted)) {
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
      }
      if (iteratee != null)
        iteratee = cb(iteratee, context);
      var result = [];
      var seen = [];
      for (var i = 0,
          length = getLength(array); i < length; i++) {
        var value = array[i],
            computed = iteratee ? iteratee(value, i, array) : value;
        if (isSorted) {
          if (!i || seen !== computed)
            result.push(value);
          seen = computed;
        } else if (iteratee) {
          if (!_.contains(seen, computed)) {
            seen.push(computed);
            result.push(value);
          }
        } else if (!_.contains(result, value)) {
          result.push(value);
        }
      }
      return result;
    };
    _.union = function() {
      return _.uniq(flatten(arguments, true, true));
    };
    _.intersection = function(array) {
      var result = [];
      var argsLength = arguments.length;
      for (var i = 0,
          length = getLength(array); i < length; i++) {
        var item = array[i];
        if (_.contains(result, item))
          continue;
        for (var j = 1; j < argsLength; j++) {
          if (!_.contains(arguments[j], item))
            break;
        }
        if (j === argsLength)
          result.push(item);
      }
      return result;
    };
    _.difference = function(array) {
      var rest = flatten(arguments, true, true, 1);
      return _.filter(array, function(value) {
        return !_.contains(rest, value);
      });
    };
    _.zip = function() {
      return _.unzip(arguments);
    };
    _.unzip = function(array) {
      var length = array && _.max(array, getLength).length || 0;
      var result = Array(length);
      for (var index = 0; index < length; index++) {
        result[index] = _.pluck(array, index);
      }
      return result;
    };
    _.object = function(list, values) {
      var result = {};
      for (var i = 0,
          length = getLength(list); i < length; i++) {
        if (values) {
          result[list[i]] = values[i];
        } else {
          result[list[i][0]] = list[i][1];
        }
      }
      return result;
    };
    function createPredicateIndexFinder(dir) {
      return function(array, predicate, context) {
        predicate = cb(predicate, context);
        var length = getLength(array);
        var index = dir > 0 ? 0 : length - 1;
        for (; index >= 0 && index < length; index += dir) {
          if (predicate(array[index], index, array))
            return index;
        }
        return -1;
      };
    }
    _.findIndex = createPredicateIndexFinder(1);
    _.findLastIndex = createPredicateIndexFinder(-1);
    _.sortedIndex = function(array, obj, iteratee, context) {
      iteratee = cb(iteratee, context, 1);
      var value = iteratee(obj);
      var low = 0,
          high = getLength(array);
      while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (iteratee(array[mid]) < value)
          low = mid + 1;
        else
          high = mid;
      }
      return low;
    };
    function createIndexFinder(dir, predicateFind, sortedIndex) {
      return function(array, item, idx) {
        var i = 0,
            length = getLength(array);
        if (typeof idx == 'number') {
          if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
          } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
          }
        } else if (sortedIndex && idx && length) {
          idx = sortedIndex(array, item);
          return array[idx] === item ? idx : -1;
        }
        if (item !== item) {
          idx = predicateFind(slice.call(array, i, length), _.isNaN);
          return idx >= 0 ? idx + i : -1;
        }
        for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
          if (array[idx] === item)
            return idx;
        }
        return -1;
      };
    }
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
    _.range = function(start, stop, step) {
      if (stop == null) {
        stop = start || 0;
        start = 0;
      }
      step = step || 1;
      var length = Math.max(Math.ceil((stop - start) / step), 0);
      var range = Array(length);
      for (var idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
      }
      return range;
    };
    var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
      if (!(callingContext instanceof boundFunc))
        return sourceFunc.apply(context, args);
      var self = baseCreate(sourceFunc.prototype);
      var result = sourceFunc.apply(self, args);
      if (_.isObject(result))
        return result;
      return self;
    };
    _.bind = function(func, context) {
      if (nativeBind && func.bind === nativeBind)
        return nativeBind.apply(func, slice.call(arguments, 1));
      if (!_.isFunction(func))
        throw new TypeError('Bind must be called on a function');
      var args = slice.call(arguments, 2);
      var bound = function() {
        return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
      };
      return bound;
    };
    _.partial = function(func) {
      var boundArgs = slice.call(arguments, 1);
      var bound = function() {
        var position = 0,
            length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
          args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length)
          args.push(arguments[position++]);
        return executeBound(func, bound, this, this, args);
      };
      return bound;
    };
    _.bindAll = function(obj) {
      var i,
          length = arguments.length,
          key;
      if (length <= 1)
        throw new Error('bindAll must be passed function names');
      for (i = 1; i < length; i++) {
        key = arguments[i];
        obj[key] = _.bind(obj[key], obj);
      }
      return obj;
    };
    _.memoize = function(func, hasher) {
      var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!_.has(cache, address))
          cache[address] = func.apply(this, arguments);
        return cache[address];
      };
      memoize.cache = {};
      return memoize;
    };
    _.delay = function(func, wait) {
      var args = slice.call(arguments, 2);
      return setTimeout(function() {
        return func.apply(null, args);
      }, wait);
    };
    _.defer = _.partial(_.delay, _, 1);
    _.throttle = function(func, wait, options) {
      var context,
          args,
          result;
      var timeout = null;
      var previous = 0;
      if (!options)
        options = {};
      var later = function() {
        previous = options.leading === false ? 0 : _.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout)
          context = args = null;
      };
      return function() {
        var now = _.now();
        if (!previous && options.leading === false)
          previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout)
            context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    };
    _.debounce = function(func, wait, immediate) {
      var timeout,
          args,
          context,
          timestamp,
          result;
      var later = function() {
        var last = _.now() - timestamp;
        if (last < wait && last >= 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            if (!timeout)
              context = args = null;
          }
        }
      };
      return function() {
        context = this;
        args = arguments;
        timestamp = _.now();
        var callNow = immediate && !timeout;
        if (!timeout)
          timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }
        return result;
      };
    };
    _.wrap = function(func, wrapper) {
      return _.partial(wrapper, func);
    };
    _.negate = function(predicate) {
      return function() {
        return !predicate.apply(this, arguments);
      };
    };
    _.compose = function() {
      var args = arguments;
      var start = args.length - 1;
      return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--)
          result = args[i].call(this, result);
        return result;
      };
    };
    _.after = function(times, func) {
      return function() {
        if (--times < 1) {
          return func.apply(this, arguments);
        }
      };
    };
    _.before = function(times, func) {
      var memo;
      return function() {
        if (--times > 0) {
          memo = func.apply(this, arguments);
        }
        if (times <= 1)
          func = null;
        return memo;
      };
    };
    _.once = _.partial(_.before, 2);
    var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
    function collectNonEnumProps(obj, keys) {
      var nonEnumIdx = nonEnumerableProps.length;
      var constructor = obj.constructor;
      var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
      var prop = 'constructor';
      if (_.has(obj, prop) && !_.contains(keys, prop))
        keys.push(prop);
      while (nonEnumIdx--) {
        prop = nonEnumerableProps[nonEnumIdx];
        if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
          keys.push(prop);
        }
      }
    }
    _.keys = function(obj) {
      if (!_.isObject(obj))
        return [];
      if (nativeKeys)
        return nativeKeys(obj);
      var keys = [];
      for (var key in obj)
        if (_.has(obj, key))
          keys.push(key);
      if (hasEnumBug)
        collectNonEnumProps(obj, keys);
      return keys;
    };
    _.allKeys = function(obj) {
      if (!_.isObject(obj))
        return [];
      var keys = [];
      for (var key in obj)
        keys.push(key);
      if (hasEnumBug)
        collectNonEnumProps(obj, keys);
      return keys;
    };
    _.values = function(obj) {
      var keys = _.keys(obj);
      var length = keys.length;
      var values = Array(length);
      for (var i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
      }
      return values;
    };
    _.mapObject = function(obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      var keys = _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
    };
    _.pairs = function(obj) {
      var keys = _.keys(obj);
      var length = keys.length;
      var pairs = Array(length);
      for (var i = 0; i < length; i++) {
        pairs[i] = [keys[i], obj[keys[i]]];
      }
      return pairs;
    };
    _.invert = function(obj) {
      var result = {};
      var keys = _.keys(obj);
      for (var i = 0,
          length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
      }
      return result;
    };
    _.functions = _.methods = function(obj) {
      var names = [];
      for (var key in obj) {
        if (_.isFunction(obj[key]))
          names.push(key);
      }
      return names.sort();
    };
    _.extend = createAssigner(_.allKeys);
    _.extendOwn = _.assign = createAssigner(_.keys);
    _.findKey = function(obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = _.keys(obj),
          key;
      for (var i = 0,
          length = keys.length; i < length; i++) {
        key = keys[i];
        if (predicate(obj[key], key, obj))
          return key;
      }
    };
    _.pick = function(object, oiteratee, context) {
      var result = {},
          obj = object,
          iteratee,
          keys;
      if (obj == null)
        return result;
      if (_.isFunction(oiteratee)) {
        keys = _.allKeys(obj);
        iteratee = optimizeCb(oiteratee, context);
      } else {
        keys = flatten(arguments, false, false, 1);
        iteratee = function(value, key, obj) {
          return key in obj;
        };
        obj = Object(obj);
      }
      for (var i = 0,
          length = keys.length; i < length; i++) {
        var key = keys[i];
        var value = obj[key];
        if (iteratee(value, key, obj))
          result[key] = value;
      }
      return result;
    };
    _.omit = function(obj, iteratee, context) {
      if (_.isFunction(iteratee)) {
        iteratee = _.negate(iteratee);
      } else {
        var keys = _.map(flatten(arguments, false, false, 1), String);
        iteratee = function(value, key) {
          return !_.contains(keys, key);
        };
      }
      return _.pick(obj, iteratee, context);
    };
    _.defaults = createAssigner(_.allKeys, true);
    _.create = function(prototype, props) {
      var result = baseCreate(prototype);
      if (props)
        _.extendOwn(result, props);
      return result;
    };
    _.clone = function(obj) {
      if (!_.isObject(obj))
        return obj;
      return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };
    _.tap = function(obj, interceptor) {
      interceptor(obj);
      return obj;
    };
    _.isMatch = function(object, attrs) {
      var keys = _.keys(attrs),
          length = keys.length;
      if (object == null)
        return !length;
      var obj = Object(object);
      for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj))
          return false;
      }
      return true;
    };
    var eq = function(a, b, aStack, bStack) {
      if (a === b)
        return a !== 0 || 1 / a === 1 / b;
      if (a == null || b == null)
        return a === b;
      if (a instanceof _)
        a = a._wrapped;
      if (b instanceof _)
        b = b._wrapped;
      var className = toString.call(a);
      if (className !== toString.call(b))
        return false;
      switch (className) {
        case '[object RegExp]':
        case '[object String]':
          return '' + a === '' + b;
        case '[object Number]':
          if (+a !== +a)
            return +b !== +b;
          return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
          return +a === +b;
      }
      var areArrays = className === '[object Array]';
      if (!areArrays) {
        if (typeof a != 'object' || typeof b != 'object')
          return false;
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
          return false;
        }
      }
      aStack = aStack || [];
      bStack = bStack || [];
      var length = aStack.length;
      while (length--) {
        if (aStack[length] === a)
          return bStack[length] === b;
      }
      aStack.push(a);
      bStack.push(b);
      if (areArrays) {
        length = a.length;
        if (length !== b.length)
          return false;
        while (length--) {
          if (!eq(a[length], b[length], aStack, bStack))
            return false;
        }
      } else {
        var keys = _.keys(a),
            key;
        length = keys.length;
        if (_.keys(b).length !== length)
          return false;
        while (length--) {
          key = keys[length];
          if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack)))
            return false;
        }
      }
      aStack.pop();
      bStack.pop();
      return true;
    };
    _.isEqual = function(a, b) {
      return eq(a, b);
    };
    _.isEmpty = function(obj) {
      if (obj == null)
        return true;
      if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)))
        return obj.length === 0;
      return _.keys(obj).length === 0;
    };
    _.isElement = function(obj) {
      return !!(obj && obj.nodeType === 1);
    };
    _.isArray = nativeIsArray || function(obj) {
      return toString.call(obj) === '[object Array]';
    };
    _.isObject = function(obj) {
      var type = typeof obj;
      return type === 'function' || type === 'object' && !!obj;
    };
    _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
      _['is' + name] = function(obj) {
        return toString.call(obj) === '[object ' + name + ']';
      };
    });
    if (!_.isArguments(arguments)) {
      _.isArguments = function(obj) {
        return _.has(obj, 'callee');
      };
    }
    if (typeof/./ != 'function' && typeof Int8Array != 'object') {
      _.isFunction = function(obj) {
        return typeof obj == 'function' || false;
      };
    }
    _.isFinite = function(obj) {
      return isFinite(obj) && !isNaN(parseFloat(obj));
    };
    _.isNaN = function(obj) {
      return _.isNumber(obj) && obj !== +obj;
    };
    _.isBoolean = function(obj) {
      return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };
    _.isNull = function(obj) {
      return obj === null;
    };
    _.isUndefined = function(obj) {
      return obj === void 0;
    };
    _.has = function(obj, key) {
      return obj != null && hasOwnProperty.call(obj, key);
    };
    _.noConflict = function() {
      root._ = previousUnderscore;
      return this;
    };
    _.identity = function(value) {
      return value;
    };
    _.constant = function(value) {
      return function() {
        return value;
      };
    };
    _.noop = function() {};
    _.property = property;
    _.propertyOf = function(obj) {
      return obj == null ? function() {} : function(key) {
        return obj[key];
      };
    };
    _.matcher = _.matches = function(attrs) {
      attrs = _.extendOwn({}, attrs);
      return function(obj) {
        return _.isMatch(obj, attrs);
      };
    };
    _.times = function(n, iteratee, context) {
      var accum = Array(Math.max(0, n));
      iteratee = optimizeCb(iteratee, context, 1);
      for (var i = 0; i < n; i++)
        accum[i] = iteratee(i);
      return accum;
    };
    _.random = function(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    };
    _.now = Date.now || function() {
      return new Date().getTime();
    };
    var escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };
    var unescapeMap = _.invert(escapeMap);
    var createEscaper = function(map) {
      var escaper = function(match) {
        return map[match];
      };
      var source = '(?:' + _.keys(map).join('|') + ')';
      var testRegexp = RegExp(source);
      var replaceRegexp = RegExp(source, 'g');
      return function(string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
      };
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);
    _.result = function(object, property, fallback) {
      var value = object == null ? void 0 : object[property];
      if (value === void 0) {
        value = fallback;
      }
      return _.isFunction(value) ? value.call(object) : value;
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
    };
    _.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/;
    var escapes = {
      "'": "'",
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function(match) {
      return '\\' + escapes[match];
    };
    _.template = function(text, settings, oldSettings) {
      if (!settings && oldSettings)
        settings = oldSettings;
      settings = _.defaults({}, settings, _.templateSettings);
      var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
      var index = 0;
      var source = "__p+='";
      text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset).replace(escaper, escapeChar);
        index = offset + match.length;
        if (escape) {
          source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
        } else if (interpolate) {
          source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        } else if (evaluate) {
          source += "';\n" + evaluate + "\n__p+='";
        }
        return match;
      });
      source += "';\n";
      if (!settings.variable)
        source = 'with(obj||{}){\n' + source + '}\n';
      source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
      try {
        var render = new Function(settings.variable || 'obj', '_', source);
      } catch (e) {
        e.source = source;
        throw e;
      }
      var template = function(data) {
        return render.call(this, data, _);
      };
      var argument = settings.variable || 'obj';
      template.source = 'function(' + argument + '){\n' + source + '}';
      return template;
    };
    _.chain = function(obj) {
      var instance = _(obj);
      instance._chain = true;
      return instance;
    };
    var result = function(instance, obj) {
      return instance._chain ? _(obj).chain() : obj;
    };
    _.mixin = function(obj) {
      _.each(_.functions(obj), function(name) {
        var func = _[name] = obj[name];
        _.prototype[name] = function() {
          var args = [this._wrapped];
          push.apply(args, arguments);
          return result(this, func.apply(_, args));
        };
      });
    };
    _.mixin(_);
    _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        method.apply(obj, arguments);
        if ((name === 'shift' || name === 'splice') && obj.length === 0)
          delete obj[0];
        return result(this, obj);
      };
    });
    _.each(['concat', 'join', 'slice'], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        return result(this, method.apply(this._wrapped, arguments));
      };
    });
    _.prototype.value = function() {
      return this._wrapped;
    };
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() {
      return '' + this._wrapped;
    };
    if (typeof define === 'function' && define.amd) {
      define('underscore', [], function() {
        return _;
      });
    }
  }.call(this));
  return module.exports;
});

$__System.register("1", ["2", "9", "a", "6"], function($__export) {
  "use strict";
  var Marionette,
      Backbone,
      _,
      LayoutApp,
      TileModel,
      TilesCollection,
      TileItemView,
      TilesCollectionView,
      Taquin,
      Taquin$1,
      App;
  return {
    setters: [function($__m) {}, function($__m) {
      Marionette = $__m.default;
    }, function($__m) {
      Backbone = $__m.default;
    }, function($__m) {
      _ = $__m.default;
    }],
    execute: function() {
      LayoutApp = Marionette.LayoutView.extend({
        template: "#layout-view-template",
        regions: {
          header: '[data-view="header"]',
          sidebar: '[data-view="sidebar"]',
          content: '[data-view="content"]'
        }
      });
      TileModel = Backbone.Model.extend({
        num: null,
        position: null
      });
      TilesCollection = Backbone.Collection.extend({model: TileModel});
      TileItemView = Marionette.ItemView.extend({
        tagName: 'div',
        className: 'tile',
        template: "#tile-item",
        events: {'click': function click() {
            console.log('click sur un tile', this.model.toJSON());
          }}
      });
      TilesCollectionView = Marionette.CollectionView.extend({
        childView: TileItemView,
        className: "boardGame"
      });
      Taquin = {init: function init() {
          var nums = [];
          _.times(16, function(curr) {
            if (curr) {
              nums.push(curr);
            }
          });
          nums.splice(5, 0, '--');
          var tiles = new TilesCollection();
          _.times(16, function(curr) {
            tiles.add(new TileModel({
              num: nums[curr],
              position: curr
            }));
          });
          var taquin = new TilesCollectionView({collection: tiles});
          return taquin;
        }};
      Taquin$1 = Taquin.init();
      App = new Marionette.Application({regions: {main: '[data-view="application"]'}});
      App.on("start", function() {
        var layoutApp = new LayoutApp();
        App.getRegion('main').show(layoutApp);
        layoutApp.getRegion('content').show(Taquin$1);
        if (Backbone.history) {
          Backbone.history.start();
        }
      });
      App.start();
    }
  };
});

$__System.register('app/style.css!github:systemjs/plugin-css@0.1.20/css.js', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("body{font-size:16px}.boardGame{width:400px;border:1px solid red}.tile{font-size:2em;line-height:3em;display:inline-block;width:24.4%;height:100px;text-align:center;border:1px solid gray}");
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=build.js.map