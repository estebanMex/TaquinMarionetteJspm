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
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "backbone": "npm:backbone@1.3.2",
    "backbone.marionette": "npm:backbone.marionette@2.4.4",
    "css": "github:systemjs/plugin-css@0.1.20",
    "jquery": "npm:jquery@2.2.1",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "underscore": "npm:underscore@1.8.3"
  },
  packages: {
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
    }
  }
});
