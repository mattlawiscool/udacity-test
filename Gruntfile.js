module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    sizes: [{
                        name: 'small',
                        width: '30%',
                        suffix: '_small',
                        quality: 20
                    }, {
                        name: 'large',
                        width: '50%',
                        suffix: '_large',
                        quality: 40
                    }, {
                        name: 'x-large',
                        width: '70%',
                        suffix: '_xlarge',
                        quality: 40
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/',
                    dest: 'images_src/new_img/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};