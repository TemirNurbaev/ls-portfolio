'use strict';

module.exports = function() {
	$.gulp.task('sprite:png', function () {
	  var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
	    imgName: 'sprite.png',
	    cssName: 'sprite.css',
	    imgPath: '/assets/img/sprite.png'
	  }));
	  return spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')),
	  		 spriteData.css.pipe($.gulp.dest('./source/style/common'));
	});
};