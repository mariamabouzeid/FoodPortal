
module.exports = function(grunt){

    //configuration
   grunt.initConfig({
        //pass in options to plugin, reference files
        concat:{
            js: {
                src: ['js/controllers/*.js'],
                dest: 'build/scripts.js'
            }
        }
    });
    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    //register tasks

    grunt.registerTask('concat-js', ['concat: js']);
};