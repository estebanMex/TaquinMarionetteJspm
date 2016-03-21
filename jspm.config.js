SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  },
  map: {
    "jasmine-core": "npm:jasmine-core@2.4.1",
    "karma-jasmine": "npm:karma-jasmine@0.3.8"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-core": "npm:babel-core@6.7.2",
    "backbone": "npm:backbone@1.3.2",
    "backbone.marionette": "npm:backbone.marionette@2.4.4",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "clean-css": "npm:clean-css@3.4.10",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "es6-module-loader": "npm:es6-module-loader@0.17.11",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "gulp": "npm:gulp@3.9.1",
    "gulp-html-replace": "npm:gulp-html-replace@1.5.5",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jquery": "npm:jquery@2.2.1",
    "karma-jspm": "npm:karma-jspm@2.0.2",
    "karma-systemjs": "npm:karma-systemjs@0.12.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "systemjs": "npm:systemjs@0.19.24",
    "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "underscore": "npm:underscore@1.8.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-timers@0.2.0-alpha": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "github:components/jquery@2.2.1"
      }
    },
    "npm:ansi-styles@2.2.0": {
      "map": {
        "color-convert": "npm:color-convert@1.0.0"
      }
    },
    "npm:babel-code-frame@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "chalk": "npm:chalk@1.1.1",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.2",
        "line-numbers": "npm:line-numbers@0.2.0",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-core@6.7.2": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.2",
        "babel-generator": "npm:babel-generator@6.7.2",
        "babel-helpers": "npm:babel-helpers@6.6.0",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-register": "npm:babel-register@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-template": "npm:babel-template@6.7.0",
        "babel-traverse": "npm:babel-traverse@6.7.3",
        "babel-types": "npm:babel-types@6.7.2",
        "babylon": "npm:babylon@6.7.0",
        "convert-source-map": "npm:convert-source-map@1.2.0",
        "debug": "npm:debug@2.2.0",
        "json5": "npm:json5@0.4.0",
        "lodash": "npm:lodash@3.10.1",
        "minimatch": "npm:minimatch@2.0.10",
        "path-exists": "npm:path-exists@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "private": "npm:private@0.1.6",
        "shebang-regex": "npm:shebang-regex@1.0.0",
        "slash": "npm:slash@1.0.0",
        "source-map": "npm:source-map@0.5.3"
      }
    },
    "npm:babel-generator@6.7.2": {
      "map": {
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.7.2",
        "detect-indent": "npm:detect-indent@3.0.1",
        "is-integer": "npm:is-integer@1.0.6",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3",
        "source-map": "npm:source-map@0.5.3",
        "trim-right": "npm:trim-right@1.0.1"
      }
    },
    "npm:babel-helpers@6.6.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-template": "npm:babel-template@6.7.0"
      }
    },
    "npm:babel-messages@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-register@6.7.2": {
      "map": {
        "babel-core": "npm:babel-core@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "core-js": "npm:core-js@2.2.1",
        "home-or-tmp": "npm:home-or-tmp@1.0.0",
        "lodash": "npm:lodash@3.10.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "path-exists": "npm:path-exists@1.0.0",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:babel-template@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.7.3",
        "babel-types": "npm:babel-types@6.7.2",
        "babylon": "npm:babylon@6.7.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-traverse@6.7.3": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.2",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.7.2",
        "babylon": "npm:babylon@6.7.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.7.3",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.1"
      }
    },
    "npm:babylon@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:backbone.babysitter@0.1.10": {
      "map": {
        "backbone": "npm:backbone@1.2.3",
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:backbone.marionette@2.4.4": {
      "map": {
        "backbone": "npm:backbone@1.2.3",
        "backbone.babysitter": "npm:backbone.babysitter@0.1.10",
        "backbone.wreqr": "npm:backbone.wreqr@1.3.5",
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:backbone.wreqr@1.3.5": {
      "map": {
        "backbone": "npm:backbone@1.2.3",
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:backbone@1.2.3": {
      "map": {
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:backbone@1.3.2": {
      "map": {
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:brace-expansion@1.1.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.3.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:camelcase-keys@2.1.0": {
      "map": {
        "camelcase": "npm:camelcase@2.1.1",
        "map-obj": "npm:map-obj@1.0.1"
      }
    },
    "npm:chalk@1.1.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:clean-css@3.4.10": {
      "map": {
        "commander": "npm:commander@2.8.1",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:commander@2.8.1": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:dateformat@1.0.12": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "meow": "npm:meow@3.7.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:defaults@1.0.3": {
      "map": {
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:detect-indent@3.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "minimist": "npm:minimist@1.2.0",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:duplexer2@0.0.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.13"
      }
    },
    "npm:end-of-stream@0.1.5": {
      "map": {
        "once": "npm:once@1.3.3"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:es6-module-loader@0.17.11": {
      "map": {
        "when": "npm:when@3.7.7"
      }
    },
    "npm:fancy-log@1.2.0": {
      "map": {
        "chalk": "npm:chalk@1.1.1",
        "time-stamp": "npm:time-stamp@1.0.0"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "path-exists": "npm:path-exists@2.1.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:findup-sync@0.3.0": {
      "map": {
        "glob": "npm:glob@5.0.15"
      }
    },
    "npm:gaze@0.5.2": {
      "map": {
        "globule": "npm:globule@0.1.0"
      }
    },
    "npm:glob-stream@3.1.18": {
      "map": {
        "glob": "npm:glob@4.5.3",
        "glob2base": "npm:glob2base@0.0.12",
        "minimatch": "npm:minimatch@2.0.10",
        "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
        "through2": "npm:through2@0.6.5",
        "unique-stream": "npm:unique-stream@1.0.0"
      }
    },
    "npm:glob-watcher@0.0.6": {
      "map": {
        "gaze": "npm:gaze@0.5.2"
      }
    },
    "npm:glob2base@0.0.12": {
      "map": {
        "find-index": "npm:find-index@0.1.1"
      }
    },
    "npm:glob@3.1.21": {
      "map": {
        "graceful-fs": "npm:graceful-fs@1.2.3",
        "inherits": "npm:inherits@1.0.2",
        "minimatch": "npm:minimatch@0.2.14"
      }
    },
    "npm:glob@3.2.11": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@0.3.0"
      }
    },
    "npm:glob@4.5.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@2.0.10",
        "once": "npm:once@1.3.3"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:globule@0.1.0": {
      "map": {
        "glob": "npm:glob@3.1.21",
        "lodash": "npm:lodash@1.0.2",
        "minimatch": "npm:minimatch@0.2.14"
      }
    },
    "npm:glogg@1.0.0": {
      "map": {
        "sparkles": "npm:sparkles@1.0.0"
      }
    },
    "npm:gulp-html-replace@1.5.5": {
      "map": {
        "clone": "npm:clone@1.0.2",
        "object-assign": "npm:object-assign@4.0.1",
        "readable-stream": "npm:readable-stream@2.0.6",
        "slash": "npm:slash@1.0.0"
      }
    },
    "npm:gulp-util@3.0.7": {
      "map": {
        "array-differ": "npm:array-differ@1.0.0",
        "array-uniq": "npm:array-uniq@1.0.2",
        "beeper": "npm:beeper@1.1.0",
        "chalk": "npm:chalk@1.1.1",
        "dateformat": "npm:dateformat@1.0.12",
        "fancy-log": "npm:fancy-log@1.2.0",
        "gulplog": "npm:gulplog@1.0.0",
        "has-gulplog": "npm:has-gulplog@0.1.0",
        "lodash._reescape": "npm:lodash._reescape@3.0.0",
        "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.template": "npm:lodash.template@3.6.2",
        "minimist": "npm:minimist@1.2.0",
        "multipipe": "npm:multipipe@0.1.2",
        "object-assign": "npm:object-assign@3.0.0",
        "replace-ext": "npm:replace-ext@0.0.1",
        "through2": "npm:through2@2.0.1",
        "vinyl": "npm:vinyl@0.5.3"
      }
    },
    "npm:gulp@3.9.1": {
      "map": {
        "archy": "npm:archy@1.0.0",
        "chalk": "npm:chalk@1.1.1",
        "deprecated": "npm:deprecated@0.0.1",
        "gulp-util": "npm:gulp-util@3.0.7",
        "interpret": "npm:interpret@1.0.0",
        "liftoff": "npm:liftoff@2.2.0",
        "minimist": "npm:minimist@1.2.0",
        "orchestrator": "npm:orchestrator@0.3.7",
        "pretty-hrtime": "npm:pretty-hrtime@1.0.2",
        "semver": "npm:semver@4.3.6",
        "tildify": "npm:tildify@1.1.2",
        "v8flags": "npm:v8flags@2.0.11",
        "vinyl-fs": "npm:vinyl-fs@0.3.14"
      }
    },
    "npm:gulplog@1.0.0": {
      "map": {
        "glogg": "npm:glogg@1.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has-gulplog@0.1.0": {
      "map": {
        "sparkles": "npm:sparkles@1.0.0"
      }
    },
    "npm:home-or-tmp@1.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:indent-string@2.1.0": {
      "map": {
        "repeating": "npm:repeating@2.0.0"
      }
    },
    "npm:inflight@1.0.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-integer@1.0.6": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:karma-jspm@2.0.2": {
      "map": {
        "glob": "npm:glob@3.2.11"
      }
    },
    "npm:karma-systemjs@0.12.0": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "minimatch": "npm:minimatch@3.0.0"
      }
    },
    "npm:liftoff@2.2.0": {
      "map": {
        "extend": "npm:extend@2.0.1",
        "findup-sync": "npm:findup-sync@0.3.0",
        "flagged-respawn": "npm:flagged-respawn@0.3.1",
        "rechoir": "npm:rechoir@0.6.2",
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:line-numbers@0.2.0": {
      "map": {
        "left-pad": "npm:left-pad@0.0.3"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0",
        "strip-bom": "npm:strip-bom@2.0.0"
      }
    },
    "npm:lodash.escape@3.2.0": {
      "map": {
        "lodash._root": "npm:lodash._root@3.0.1"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:lodash.template@3.6.2": {
      "map": {
        "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
        "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
        "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
        "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.escape": "npm:lodash.escape@3.2.0",
        "lodash.keys": "npm:lodash.keys@3.1.2",
        "lodash.restparam": "npm:lodash.restparam@3.6.1",
        "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1"
      }
    },
    "npm:lodash.templatesettings@3.1.1": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.escape": "npm:lodash.escape@3.2.0"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.2"
      }
    },
    "npm:loud-rejection@1.3.0": {
      "map": {
        "array-find-index": "npm:array-find-index@1.0.1",
        "signal-exit": "npm:signal-exit@2.1.2"
      }
    },
    "npm:meow@3.7.0": {
      "map": {
        "camelcase-keys": "npm:camelcase-keys@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "loud-rejection": "npm:loud-rejection@1.3.0",
        "map-obj": "npm:map-obj@1.0.1",
        "minimist": "npm:minimist@1.2.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "object-assign": "npm:object-assign@4.0.1",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "redent": "npm:redent@1.0.0",
        "trim-newlines": "npm:trim-newlines@1.0.0"
      }
    },
    "npm:minimatch@0.2.14": {
      "map": {
        "lru-cache": "npm:lru-cache@2.7.3",
        "sigmund": "npm:sigmund@1.0.1"
      }
    },
    "npm:minimatch@0.3.0": {
      "map": {
        "lru-cache": "npm:lru-cache@2.7.3",
        "sigmund": "npm:sigmund@1.0.1"
      }
    },
    "npm:minimatch@2.0.10": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.3"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:multipipe@0.1.2": {
      "map": {
        "duplexer2": "npm:duplexer2@0.0.2"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "hosted-git-info": "npm:hosted-git-info@2.1.4",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "semver": "npm:semver@5.1.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:orchestrator@0.3.7": {
      "map": {
        "end-of-stream": "npm:end-of-stream@0.1.5",
        "sequencify": "npm:sequencify@0.0.7",
        "stream-consume": "npm:stream-consume@0.1.0"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:pinkie-promise@2.0.0": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "load-json-file": "npm:load-json-file@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "path-type": "npm:path-type@1.1.0"
      }
    },
    "npm:readable-stream@1.0.33": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@1.1.13": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:redent@1.0.0": {
      "map": {
        "indent-string": "npm:indent-string@2.1.0",
        "strip-indent": "npm:strip-indent@1.0.1"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:repeating@2.0.0": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
      }
    },
    "npm:spdx-expression-parse@1.0.2": {
      "map": {
        "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
        "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.13"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:stream-http@2.2.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-bom@1.0.0": {
      "map": {
        "first-chunk-stream": "npm:first-chunk-stream@1.0.0",
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:strip-indent@1.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1"
      }
    },
    "npm:systemjs@0.19.24": {
      "map": {
        "es6-module-loader": "npm:es6-module-loader@0.17.11",
        "when": "npm:when@3.7.7"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.33",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:through2@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:tildify@1.1.2": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.1"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.2"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:v8flags@2.0.11": {
      "map": {
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
      }
    },
    "npm:vinyl-fs@0.3.14": {
      "map": {
        "defaults": "npm:defaults@1.0.3",
        "glob-stream": "npm:glob-stream@3.1.18",
        "glob-watcher": "npm:glob-watcher@0.0.6",
        "graceful-fs": "npm:graceful-fs@3.0.8",
        "mkdirp": "npm:mkdirp@0.5.1",
        "strip-bom": "npm:strip-bom@1.0.0",
        "through2": "npm:through2@0.6.5",
        "vinyl": "npm:vinyl@0.4.6"
      }
    },
    "npm:vinyl@0.4.6": {
      "map": {
        "clone": "npm:clone@0.2.0",
        "clone-stats": "npm:clone-stats@0.0.1"
      }
    },
    "npm:vinyl@0.5.3": {
      "map": {
        "clone": "npm:clone@1.0.2",
        "clone-stats": "npm:clone-stats@0.0.1",
        "replace-ext": "npm:replace-ext@0.0.1"
      }
    }
  }
});
