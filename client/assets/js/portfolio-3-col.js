/**
 * cube portfolio controller
 * */
import '../vendor/cubeportfolio/css/cubeportfolio.min.css'
import '../vendor/cubeportfolio/js/jquery.cubeportfolio.min.js'

export default function () {
  $('#js__grid-portfolio-gallery').cubeportfolio({
    filters: '#js__filters-portfolio-gallery',
    layoutMode: 'grid',
    mediaQueries: [{width: 1500, cols: 3}, {width: 1100, cols: 3}, {width: 800, cols: 3}, {width: 480, cols: 2}, {width: 320, cols: 1}],
    defaultFilter: '*',
    gapHorizontal: 2,
    gapVertical: 2,
    gridAdjustment: 'responsive',
    caption: ' ',
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: !0,
    lightboxTitleSrc: 'data-title'
  })
}