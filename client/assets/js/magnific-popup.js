/**
 * MagnificPopup controller
 * video popup / image popup etc.
 * */
import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'

export default function () {
  $('.js__popup__image').magnificPopup({
    type: 'image',
    closeOnContentClick: !0,
    mainClass: 'mfp-img-mobile',
    image: {verticalFit: !0}
  })

  $('.js__popup__gallery').magnificPopup({
    delegate: 'a.js__popup__gallery-child',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {enabled: !0, navigateByImgClick: !0, preload: [0, 1]},
    image: {tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'}
  })

  $('.js__popup__multiple-image').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    fixedContentPos: !0,
    gallery: {
      enabled: !0,
      navigateByImgClick: !0,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 1]
    }
  })

  $('.js__popup__youtube, .js__popup__vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: !1,
    fixedContentPos: !0
  })
}
