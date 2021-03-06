// scroll add active classes
scrolled = false;
var scrolled = false;
$(window).scroll(function () {
    var offset = $(".vr-send").offset().top;
    if ($(window).scrollTop() >= offset) {
        $("#nav-link-1").css('color','white');
        $("#nav-link").css('color', 'rgba(19, 165, 255, 0.721)');
        activate(2);
    } else {
        activate(1);
        $("#nav-link").css('color','white');
        $("#nav-link-1").css('color', 'rgba(19, 165, 255, 0.721)');
    }

    var offset2 = $("#container-flash").offset().top;
    if ($(window).scrollTop() >= offset2) {
        if (scrolled == false) {
        startSVGAnimationAR("#ar");
        startSVGAnimationAR("#ar2");
        startSVGAnimationAR("#ar3");
        startSVGAnimationAR("#ar4");
        scrolled = true;
        }
        $("#nav-link-1").css('color', 'rgba(19, 165, 255, 0.721)');
        $("#nav-link-2").css('color','white');
        activate(3);
        $("#nav-link").css('color','rgba(19, 165, 255, 0.721)');
    } else {
        $("#nav-link-2").css('color', 'rgba(19, 165, 255, 0.721)');
    }

    var offset3 = $(".parallax-wrapper").offset().top;
    if ($(window).scrollTop() >= offset3) {
        $("#nav-link-2").css('color', 'rgba(19, 165, 255, 0.721)');
        $("#nav-link-3").css('color','white');
        activate(4);
        $("#nav-link").css('color','rgba(19, 165, 255, 0.721)');
    } else {
        $("#nav-link-3").css('color', 'white');
    }


    var offset4 = $(".container-end").offset().top;
    if ($(window).scrollTop() >= offset4) {
        $("#nav-link-2").css('color', 'rgba(19, 165, 255, 0.721)');
        $("#nav-link-3").css('color','white');
        activateLastOne(5);
    } else {
        $("#nav-link-3").css('color', 'rgba(19, 165, 255, 0.721)');
    }
});

$( document ).ready(function() {
    // Handler for .ready() called.
    $(".leaflet-popup-content-wrapper").css('background-color', 'black');
    $(".leaflet-popup-content-wrapper").css('color', 'white');
    });

jQuery.extend(jQuery.easing,
    {
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    });

function SVG(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function replaceRectsWithPaths(parentElement) {

    var rects = $(parentElement).find('rect');

    $.each(rects, function () {

        var rectX = $(this).attr('x');
        var rectY = $(this).attr('y');

        var rectX2 = parseFloat(rectX) + parseFloat($(this).attr('width'));
        var rectY2 = parseFloat(rectY) + parseFloat($(this).attr('height'));

        var convertedPath = 'M' + rectX + ',' + rectY + ' ' + rectX2 + ',' + rectY + ' ' + rectX2 + ',' + rectY2 + ' ' + rectX + ',' + rectY2 + ' ' + rectX + ',' + rectY;

        $(SVG('path'))
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);

    });

    $(rects).remove();
}
function replaceLinesWithPaths(parentElement) {

    var lines = $(parentElement).find('line');

    $.each(lines, function () {

        var lineX1 = $(this).attr('x1');
        var lineY1 = $(this).attr('y1');

        var lineX2 = $(this).attr('x2');
        var lineY2 = $(this).attr('y2');

        var convertedPath = 'M' + lineX1 + ',' + lineY1 + ' ' + lineX2 + ',' + lineY2;


        $(SVG('path'))
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);

    });

    $(lines).remove();
}

function replaceCirclesWithPaths(parentElement) {

    var circles = $(parentElement).find('circle');

    $.each(circles, function () {

        var cX = $(this).attr('cx');
        var cY = $(this).attr('cy');
        var r = $(this).attr('r');
        var r2 = parseFloat(r * 2);

        var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-r) + ', 0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + r2 + ',0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + (-r2) + ',0 ';

        $(SVG('path'))
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);

    });

    $(circles).remove();
}


function replaceEllipsesWithPaths(parentElement) {

    var ellipses = $(parentElement).find('ellipse');

    $.each(ellipses, function () {

        var cX = $(this).attr('cx');
        var cY = $(this).attr('cy');
        var rX = $(this).attr('rx');
        var rY = $(this).attr('ry');

        var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-rX) + ', 0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + rX * 2 + ',0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + (-rX * 2) + ',0 ';

        $(SVG('path'))
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);

    });

    $(ellipses).remove();
}


function replacePolygonsWithPaths(parentElement) {

    var polygons = $(parentElement).find('polygon');

    $.each(polygons, function () {

        var points = $(this).attr('points');
        var polyPoints = points.split(/[ ,]+/);
        var endPoint = polyPoints[0] + ', ' + polyPoints[1];

        $(SVG('path'))
            .attr('d', 'M' + points + ' ' + endPoint)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);

    });

    $(polygons).remove();
}

function replacePolylinesWithPaths(parentElement) {

    var polylines = $(parentElement).find('polyline');

    $.each(polylines, function () {

        var points = $(this).attr('points');

        $(SVG('path'))
            .attr('d', 'M' + points)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);

    });
    $(polylines).remove();
}

function hideSVGPaths(parentElement) {

    var paths = $(parentElement).find('path');

    $.each(paths, function () {

        var totalLength = this.getTotalLength();

        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });
    });
}

function drawSVGPaths(_parentElement, _timeMin, _timeMax, _timeDelay) {

    var paths = $(_parentElement).find('path');

    $.each(paths, function (i) {

        var totalLength = this.getTotalLength();

        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });

        $(this).delay(_timeDelay * i).animate({
            'stroke-dashoffset': 0
        }, {
                duration: Math.floor(Math.random() * _timeMax) + _timeMin,
                easing: 'easeInOutQuad'
            });
    });
}

function replaceWithPaths(parentElement) {
    replaceRectsWithPaths(parentElement);
    replaceLinesWithPaths(parentElement);
    replaceEllipsesWithPaths(parentElement);
    replaceCirclesWithPaths(parentElement);
    replacePolygonsWithPaths(parentElement);
    replacePolylinesWithPaths(parentElement);
}

function startSVGAnimation(parentElement) {
    drawSVGPaths(parentElement, 4500, 330, 0);
}
function startSVGAnimationText(parentElement) {
    drawSVGPaths(parentElement, 2430, 100, 200);
}


replaceWithPaths($('svg'));
startSVGAnimation($('#svg-headset'));
startSVGAnimationText($('#text-100000'));
$(".australia-btn").addClass('active');
$("#svg-europe").hide();
$("#svg-europe-flag").hide();
$("#stLiberty").hide();
$("#whiteHouse").hide();

function startSVGAnimationEurope(parentElement) {
    drawSVGPaths(parentElement, 900, 222, 100);
}

$(".australia-btn").on('click', function(){
    $("#myChartEurope, #myChartAmerica, #myChartAsia, #myChartAfrica").hide();
    $("#myChart").show();
    $(".buttons-box button").removeClass('active');
    $(".australia-btn").addClass('active'); 
    $("#svg-australia").show();
    $("#svg-new-zealand").show();
    $("#svg-europe").fadeOut(300);
    $("#stLiberty").fadeOut(300);
    $("#whiteHouse").fadeOut(300);
    $("#svg-europe-flag").fadeOut(300);
    $("#svg-asia").fadeOut(300);
    $("#svg-africa").fadeOut(300);
    addChartForAustralia();
    startSVGAnimationText($('#svg-australia'));
    startSVGAnimationText($('#svg-new-zealand'));
})

$(".europe-btn").on('click', function() {
    $("#myChart, #myChartAmerica, #myChartAsia, #myChartAfrica").hide();
    $("#myChartEurope").show();
    $(".buttons-box button").removeClass('active');
    $(".europe-btn").addClass('active');
    $("#svg-europe").show();
    addChartForEurope();
    $("#svg-europe-flag").show();
    startSVGAnimationEurope("#svg-europe");
    startSVGAnimationEurope("#svg-europe-flag");
    $("#svg-australia").fadeOut(300);
    $("#svg-new-zealand").fadeOut(300);
    $("#stLiberty").fadeOut(300);
    $("#whiteHouse").fadeOut(300);
    $("#svg-asia").fadeOut(300);
    $("#svg-africa").fadeOut(300);
})

$(".america-btn").on('click', function(){
    $("#myChart, #myChartEurope, #myChartAsia, #myChartAfrica").hide();
    $("#myChartAmerica").show();
    $(".buttons-box button").removeClass('active');
    $(".america-btn").addClass('active');
    $("#stLiberty").show();
    addChartForAmerica();
    $("#whiteHouse").show();
    $("#svg-australia").fadeOut(300);
    $("#svg-new-zealand").fadeOut(300);
    $("#svg-europe").fadeOut(300);
    $("#svg-europe-flag").fadeOut(300);
    $("#svg-asia").fadeOut(300);
    $("#svg-africa").fadeOut(300);
    addChartForAustralia();
    startSVGAnimationEurope($('#stLiberty'));
    startSVGAnimationEurope("#whiteHouse");
});
$(".asia-btn").on('click', function() {
    $(".buttons-box button").removeClass('active');
    $(".asia-btn").addClass('active');
    $("#myChart, #myChartAmerica, #myChartEurope, #myChartAfrica").hide();
    $("#myChartAsia").show();
    $("#svg-australia").fadeOut(300);
    $("#svg-new-zealand").fadeOut(300);
    $("#svg-europe").fadeOut(300);
    $("#svg-europe-flag").fadeOut(300);
    $("#whiteHouse").fadeOut(300);
    $("#stLiberty").fadeOut(300);
    $("#svg-africa").fadeOut(300);
    addChartForAsia();
    startSVGAnimationText($('#svg-asia'));
    $("#svg-asia").show();
})
$(".africa-btn").on('click', function () {
    $(".buttons-box button").removeClass('active');
    $(".africa-btn").addClass('active');
    $("#myChart, #myChartAmerica, #myChartEurope, #myChartAsia").hide();
    $("#myChartAfrica").show();
    addChartForAfrica();
    $("#svg-australia").fadeOut(300);
    $("#svg-new-zealand").fadeOut(300);
    $("#svg-europe").fadeOut(300);
    $("#svg-europe-flag").fadeOut(300);
    $("#whiteHouse").fadeOut(300);
    $("#stLiberty").fadeOut(300);
    $("#svg-asia").fadeOut(300);
    $("#svg-africa").show();
    startSVGAnimationText($('#svg-africa'));
})


function Counter(obj){
  
  // get the number
  var number = obj.text();
  obj.attr('data-number',number);
  
  // clear the HTML element
  obj.empty();
  
  // create an array from the text, prepare to identify which characters in the string are numbers
  var numChars = number.split("")
  var numArray = [];
  var setOfNumbers = [0,1,2,3,4,5,6,7,8,9];

  // for each number, create the animation elements
  for(var i=0; i<numChars.length; i++) { 
    if ($.inArray(parseInt(numChars[i], 10),setOfNumbers) != -1) {
      obj.append('<span class="digit-con"><span class="digit'+numArray.length+'">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>');
      numArray[numArray.length] = parseInt(numChars[i], 10);
    }
    else {
      obj.append('<span>'+numChars[i]+'</span>');
    }	
  }

  // determine the height of each number for the animation
  var increment = obj.find('.digit-con').outerHeight();
  var speed = 2000;
  
  // animate each number
  for(var i=0; i<numArray.length; i++) {
    obj.find('.digit'+i).animate({top: -(increment * numArray[i])}, Math.round(speed / (1 + (i * 0.333))));
  }
}

$(document).ready(function(){
activate(1);
  $('.number').each(function(){
	  Counter($(this));
	});
});

$("#animate").click(function(){
  $('.number').eq(0).text($('.number').attr('data-number'));
  Counter($('.number').eq(0));
});


$(".vr-send").click(function () {
    startSVGAnimationText($('#text-100000'));
      $('.number').eq(0).text($('.number').attr('data-number'));
      Counter($('.number').eq(0));
    $('html,body').animate({
        scrollTop: $(".people-using-vr-rooms").offset().top
    },
        'slow');
});

  var $point_arr, $points, $progress, $trigger, active, max, tracker, val;

  $trigger   = $('.trigger').first();
  $points    = $('.progress-points').first();
  $point_arr = $('.progress-point');
  $progress  = $('.progress').first();

  val     = +$points.data('current') - 1;
  max     = $point_arr.length - 1;
  tracker = active = 0;

  function activate(index) {
    if (index !== active) {
      active       = index;
      var $_active = $point_arr.eq(active)
      
      $point_arr
        .removeClass('completed active')
        .slice(0, active).addClass('completed')
      
      $_active.addClass('active-new');
      
      return $progress.css('width', (index / max * 100) + "%");
    }
  };

  function activateLastOne(index) {
    if (index !== active) {
      active       = index;
      var $_active = $point_arr.eq(active)
      
      $point_arr
        .removeClass('completed active')
        .slice(0, active).addClass('completed')
      
      $_active.addClass('active-new');
      
      return $progress.css('width', "100%");
    }
  };

function scrollTo(classOrId, idToGo) {
    $(classOrId).on('click', function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(idToGo).offset().top
        }, 1000);
    })
}

scrollTo(".prog-2", ".people-using-vr-rooms");
scrollTo(".prog-1", ".first-div-info");
scrollTo(".prog-3", "#container-flash");
scrollTo("#nav-link", ".first-div-info");
scrollTo("#nav-link-1", ".people-using-vr-rooms");
scrollTo("#nav-link-2", "#container-flash");
scrollTo("#nav-link-3", ".parallax-wrapper");

function startSVGAnimationAR(parentElement) {
    drawSVGPaths(parentElement, 1400, 1400, 450);
}
function onClick(id) {
    $(id).on('click', function() {
        startSVGAnimationAR(id);
    })
}
onClick("#ar");
onClick("#ar2");
onClick("#ar3");
onClick("#ar4");
startSVGAnimationAR("#ar");
startSVGAnimationAR("#ar2");
startSVGAnimationAR("#ar3");
startSVGAnimationAR("#ar4");

