//
// module.exports = function(grunt){
//
//     //configuration
//    grunt.initConfig({
//         //pass in options to plugin, reference files
//         concat:{
//             js: {
//                 src: ['filename/*.js'],
//                 dest: 'build/scripts.js'
//             },
//             cs: {
//                 src: ['filename/*.css'],
//                 dest: 'build/scripts.css'
//             }
//         },
//        uglify: {
//             build: {
//                 files:[{
//                     src: 'source file',
//                     dest: 'destination file'
//                 }]
//             }
//        }
//     });
//     //load plugins
//     grunt.loadNpmTasks('grunt-contrib-concat');
//     grunt.loadNpmTasks('grunt-contrib-uglify');
//     //register tasks
//
//     grunt.registerTask('concat-js', ['concat: js']);
//     grunt.registerTask('concat-css', ['concat: css']);
//
//     grunt.registerTask('run', function(){
//         console.log('im running');
//     });
//     grunt.registerTask('sleep', function(){
//         console.log('im sleeping');
//     });
//     grunt.registerTask('all', ['sleep', 'run']);
// };