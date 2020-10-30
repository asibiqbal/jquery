// isotop start

(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

})(jQuery);

// isotop end

// <!-- halloween start -->
  
    window.halloweenBats = $.halloweenBats({
        amount: 10
    });
try {
fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
return true;
}).catch(function(e) {
var carbonScript = document.createElement("script");
carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
carbonScript.id = "_carbonads_js";
document.getElementById("carbon-block").appendChild(carbonScript);
});
} catch (error) {
console.log(error);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
// <!-- halloween end -->

// <!-- analog start -->
  $(document).ready(function(){
  $('#demo1').jsRapClock();
  $('#demo2').jsRapClock({
    caption:'London',
    clockNumbers:false,
    clock:1,
    stopwatch:10,
    shiftH:1,
    shiftM:30,
    shiftS:20
  });
  });
// <!-- analog end -->


// <!-- enhached -->
      $("#test1").easyTooltip({
          content: "<span style='color:#fe8e14;'>I am </span><span style='color:red;'>a sample.</span>"
      });

      $("#test2").easyTooltip({
          tooltipDir: "right",
          content: "I am a sample.",
          tooltipPosition: '',
          tooltipBgColor: "rgba(0,0,0,0.9)",
tooltipFtColor: "#fff",
      });

      $("#test3").easyTooltip({
          tooltipDir: "bottom",
          content: "I am a sample.",
          tooltipPosition: 'absolute'
      });

      $("#test4").easyTooltip({
          tooltipDir: "left",
          content: "I am a sample."
      });

      $("#test5").easyTooltip({
          content: "Test Content.",
          existedContentId: "existedContentId"
      });

      $("#test6").easyTooltip({
          content: "I am a sample.",
          clickRemove: true
      });

      $("#test7").easyTooltip({
          xOffset: 100,
          yOffset: 100,
          tooltipDir: "right",
          content: "I am a sample."
      });

      $("#test8").easyTooltip({
          content: "I am a sample.",
          defaultRadius: "10px",
          tooltipZindex: 10000,
          tooltipPadding: "20px 30px",
          tooltipBgColor: "rgba(0,0,0,0.7)",
          tooltipFtSize: "18px",
          tooltipLineHeight: "27px",
          tooltipFtColor: "#fe8e14",
          tooltipOpacity: 1,
          tooltipArwBorderWidth: 10
      });

      $("#test9").easyTooltip({
          tooltipPosition: 'relative',
          content: "I am a sample."
      });

      $("#test10").easyTooltip({
          tooltipPosition: 'relative',
          tooltipDir: "right",
          content: "I am a sample."
      });

      $("#test11").easyTooltip({
          tooltipPosition: 'relative',
          tooltipDir: "bottom",
          content: "I am a sample."
      });

      $("#test12").easyTooltip({
          tooltipPosition: 'relative',
          tooltipDir: "left",
          content: "I am a sample."
      });

      $("#test13").easyTooltip({
          tooltipPosition: 'relative',
          content: "I am a sample.",
          tooltipArwBorderWidth: 12,
          tooltipBgColor: "rgba(0,0,0,1)",
tooltipFtColor: "#fff",
      });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}
// <!-- enhached -->

// eye start

jQuery(document).ready(function() {
    jQuery("#circular div.pupil").jqEye({shape: "circle", radius:12});
    jQuery("#ellipse div.pupil").jqEye({shape: "ellipse", width:34, height:14});
    jQuery("#rectangular div.pupil").jqEye({shape: "rectangle", width:25, height:25});
    jQuery("#rounded_rectangular div.pupil").jqEye({shape: "rounded rectangle", width:25, height:25, radius:5});
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }

// eye end

// popup start

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }

// popup end


// big gallery start

var colorMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'light';        
if ( localStorage && "colorMode" in localStorage ) {
    colorMode = localStorage.getItem("colorMode");
}        
if ( colorMode == 'dark' ) {
    jQuery('html').addClass('dark');
}


iceland = [];

iceland[ 0 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/photos/reynisdrangar-black-beach.jpg',
    alt: 'Black beach Reynisfjara with Reynisdrangar rocks. There are sneaker waves which can easily pull you off into the sea.'
};
iceland[ 1 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/photos/Seljalandsfoss.jpg',
    alt: 'Northern lights behind Seljalandsfoss waterfall',
    author: 'photo by Flor'
};
iceland[ 2 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/photos/iceland-horses.jpg'
};

signpost = [];

signpost[ 0 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/photos/iceland-horses.jpg',
    alt: 'Scroll down to see an example of HTML signpost after the gallery'
};

demo = [];
demo[ 0 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/photos/in-the-center-sq.jpg',
    alt: 'With Story Show Gallery you can present your photo stories in full screen.'
};
demo[ 1 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/photos/fifth-element.jpg',
    alt: 'You can easily browse the gallery just by scrolling. No need to clicking on arrows.'
};
demo[ 2 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/img/gallery-compare.jpg',
    alt: 'SSG vs. usual web gallery. SSG use even notch area of a phone and doesn\'t display bars and icons over a photo.'
};
demo[ 3 ] = {
    href: 'https://roman-flossler.github.io/StoryShowGallery/img/story-show-gallery-responsive-modes-fullscreen.jpg',
    alt: 'Captions can be below the image or next to the image according to space on display.'
};                                    


jQuery(window).on('load', function() {
    lightInt = setInterval( lightning , 450 );
    calcTop();
  }
);
jQuery( document ).ready( function () {
    if (location.hash == '#SSGconfig') {
        jQuery('#bigcode').toggleClass('visible');
    }
    if (location.hash == '#play') {
        window.stop();                    
        SSG.run( { imgs: demo, fsa:true, cfg: {  fileToLoad: 'https://roman-flossler.github.io/StoryShowGallery/play.html' }  });
        SSG.loadingStopped = true;
    }
  }
);
jQuery( window ).on('resize', calcTop);
jQuery( '#menuicon, ol.content li a').on('click', function() { 
    jQuery('ol.content').toggleClass('toggle-menu');
    jQuery('#menuicon').toggleClass('closeicon');
    });            

function calcTop () {
    jQuery('.secol').css({'top': - jQuery('#before-menu').outerHeight(true) - 33 });
}

function setColorMode () {
    colorMode =  colorMode == 'dark' ? 'light' : 'dark';
    jQuery('html').toggleClass('dark');
    if ( localStorage ) {
        localStorage.setItem("colorMode", colorMode);
    }
}

var actimg = 1;
var actimgInv = 7
var afterFirstRun = false;            

function lightning() {
    if ( SSG.running ) {
        clearInterval( lightInt );
        jQuery('#front-gallery img').addClass('lighten');
        return;
    }                
    jQuery('#front-gallery img:nth-child(' + actimg + ')').toggleClass('lighten');
    jQuery('#front-gallery img:nth-child(' + (actimg-1) + ')').toggleClass('lighten');

    jQuery('#front-gallery img:nth-child(' + actimgInv + ')').toggleClass('lighten');
    jQuery('#front-gallery img:nth-child(' + (actimgInv+1) + ')').toggleClass('lighten');
    
    actimgInv--;
    if (actimgInv == 1) {
        actimgInv = 7;
    }
    
    if (actimg == 1 && afterFirstRun) {
        jQuery('#front-gallery img:nth-child(7)').toggleClass('lighten');
    }
    if (actimg == 7) {
        actimg = 1;
        afterFirstRun = true;
    } else {
        actimg++;
    }
}

SSG.cfg.fileToLoad = 'https://cdn.jsdelivr.net/npm/story-show-gallery@2/src/ssg-loaded.html';    
SSG.cfg.watermarkText = window.screen.width > 933 ? '<b>ꐠ</b> Story Show Gallery' : '<b>ꐠ</b> SSG';
SSG.cfg.watermarkFontSize = window.screen.width > 933 ? 18 : 20;
SSG.cfg.theme = 'dim'

// example of SSG events, they are part of the configuration. This example writes gallery's stats into JS console
var counter = 0;
var finished = false;
console.log('A little statistics made via SSG events and a user functions:');
SSG.cfg.onGalleryStart = function(data) {
    console.log('----------');
    console.log( data.imgCount + ' images in the gallery with ID '+ data.GalleryId + '. Starting with image: ' + data.imgName + ' id: ' + data.imgPageId );
};
SSG.cfg.onImgChange = function(data) { counter++; };
SSG.cfg.onSignpost = function() { finished = true; };
SSG.cfg.onGalleryExit = function(data) {
    console.log( counter + ' images' + (finished ? ' & signpost ' : ' ') + 'viewed. ' + 'Ended ' + ( data ? 'with image: ' + data.imgName : 'on signpost' ) );
    counter = 0;
    finished = false;
};

// big gallery end

// zoom

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }

// zoom

//   boot pop

$(":submit").BootConfirm({
    validateForm:true,
     complete: function(){
      alert('Confirmed')
    }
  });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }

//   boot pop

// calc start
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }
  
// calc end



// wiz start
$(function() {
  $('#mywizard').wizard();
      $('#mywizardmodal').wizard({
      onnext: function(stepname, i) {
          if (!$('form')[0].reportValidity())
              // Not accepting the progress to the next step
              return false;
          switch (stepname) {
              case 'step2':
                  if (! $('#accept').is(':checked')) {
                      $('#accept').addClass('is-invalid');
                      // Not accepting the progress to the next step
                      return false;
                  }
                  break;
          }
          return true;
      },
      onstep: function(stepname) {
          // Those disabled will not be validated using "reportValidity", so we only want to validate those in the current step
          $('input[name="name"]').attr('disabled', true);
          $('input[name="email"]').attr('disabled', true);
          $('input[name="password"]').attr('disabled', true);
          switch (stepname) {
              case 'step1':
                  $('input[name="name"]').attr('disabled', false);
                  $('input[name="email"]').attr('disabled', false);
                  break;
              case 'step3':
                  $('input[name="password"]').attr('disabled', false);
                  break;
          }
          return true;
      },
      onend: function() {
          // Validate the last step prior to submitting
          let $pass = $('input[name="password"]').val();
          let $passmatch = $('input[name="passwordm"]').val();
          $('input[name="passwordm"]').removeClass('is-invalid');
          if ($pass != $passmatch) {
              $('input[name="passwordm"]').addClass('is-invalid');
              // Not accepting the end of the wizard
              return false;
          }
          return true;
      },
      onbegin: function(stepname, i) {
          // Remove the invalid state and uncheck the terms acceptance
          $('#accept').removeClass('is-invalid').prop('checked', false);
          $('input[name="passwordm"]').removeClass('is-invalid');
      }
  }).modal('show').on('show.bs.modal', function() {
      // Set the tab to the main one
      $('#mywizardmodal').wizard('begin');
  });
})


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


// wiz end



// filter


$('#easy-filter-wrap').easyFilter();
$('#easy-filter-radio').easyFilter({
firstFilter: 'item12'
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }

// filter

