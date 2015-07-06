module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      watch : {
        src: ["**/*.ts", "!node_modules/**/*.ts"],
        dest: "dist",
  	    watch: "src",
        options: {
          module: "commonjs",
          fast: 'never',
          target: "ES5"
        }
  	  },
      build : {
        src: ["**/*.ts", "!node_modules/**/*.ts"],
        dest: "dist",
        options: {
          module: "commonjs",
          fast: 'never',
          target: "ES5"
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  
  grunt.registerTask("default", ["ts:build"]);
  grunt.registerTask("watch", ["ts:watch"]);

};