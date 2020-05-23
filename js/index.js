var frontendTest = angular.module('frontendTest', []);

frontendTest.controller('frontController', ['$scope', function ($scope) {
  $scope.name = 'Front-End-Test';
  let user_nav = $('.user-nav');
  user_nav.on('mouseenter', 'div', function () {
    $(this).find('i').stop().animate({ fontSize: '3rem' }, 300).animate({ fontSize: '1.8rem' }, 300);
  });
  let top_nav = $('.top-nav');
  top_nav.on('click', 'li', function () {
    $('.top-nav li').removeClass('top-nav__item--active');
    $(this).addClass('top-nav__item--active');
  });

  let infos_list = $('.infos__list');
  infos_list.on('mouseenter', 'div', function () {
    $(this).find('i').stop().animate({ fontSize: '3rem' }, 300).animate({ fontSize: '2rem' }, 300);
  });

  let facebookEl = $('#facebook');
  let twitterEl = $('#twitter');
  let instagramEl = $('#instagram');
  facebookEl.click(function() {
    window.open('https://www.facebook.com/', '_blank');
  });
  twitterEl.click(function () {
    window.open('https://twitter.com/explore', '_blank');
  });
  instagramEl.click(function () {
    window.open('https://www.instagram.com/', '_blank');
  });


  let sTextEl;
  let sText;
  let range;
  $('#edited-text').mouseup(function() {
    sText = getSelectedText();
    if (sText != '') {
      range = sTextEl.getRangeAt(0);
    }
  });
  function getSelectedText() {
    if (window.getSelection) {
      sTextEl = window.getSelection();
      return window.getSelection().toString();
    } else if (document.selection) {
      return document.selection.createRange().text;
    }
    return '';
  }

  $('#bold').click(function(){
    if (sTextEl != null){
      if (sTextEl.rangeCount) {
        var e = document.createElement('strong');
        e.innerHTML = sText;
        insertText(e);
      }
    }
  });
  $('#italic').click(function () {
    if (sTextEl != null) {
      if (sTextEl.rangeCount) {
        var e = document.createElement('em');
        e.innerHTML = sText;
        insertText(e);
      }
    }
  });
  $('#underline').click(function () {
    if (sTextEl != null) {
      if (sTextEl.rangeCount) {
        var e = document.createElement('span');
        e.innerHTML = sText;
        e.style.textDecoration = 'underline';
        insertText(e);
      }
    }
  });
  let colEl = document.querySelector('#color');
  colEl.addEventListener('input', () => {
    if (sTextEl != null) {
      if (sTextEl.rangeCount) {
        let color = colEl.value;
        var e = document.createElement('span');
        e.innerHTML = sText;
        e.style.color = color;
        insertText(e);
      }
    }
  });
  // const pickr1 = new Pickr({
  //   el: '#color-picker-1',
  //   default: "303030",
  //   components: {
  //     preview: true,
  //     opacity: true,
  //     hue: true,

  //     interaction: {
  //       hex: true,
  //       rgba: true,
  //       hsla: true,
  //       hsva: true,
  //       cmyk: true,
  //       input: true,
  //       clear: true,
  //       save: true
  //     }
  //   }
  // });
  $("#size").on("change", function() {
    let v = $(this).val();
    if (sTextEl != null) {
      if (sTextEl.rangeCount) {
        var e = document.createElement('span');
        e.innerHTML = sText;
        e.style.fontSize = v + 'px';
        insertText(e);
      }
    }
  });
  $("#language").on("change", function () {
    let v = $(this).val();
    console.log(v)
    $('body').removeClass('open-sans');
    $('body').removeClass('oswald');
    $('body').removeClass('kruti');
    $('body').removeClass('long-cang');

    if (v == 'open-sans') {
      
      $('body').addClass('open-sans');

    } else if (v == 'oswald') {
      $('body').addClass('oswald');
    } else if (v == 'kruti') {
      $('body').addClass('kruti');
    } else if (v == 'chinese') {
      $('body').addClass('long-cang');
    }
    $('.tool_lan_item').addClass('open-sans');
  });
  function insertText(e){
    range.deleteContents(); // Deletes selected text…
    range.insertNode(e); // … and inserts the new element at its place
    // sTextEl = null;
    // sText = '';
    if (window.getSelection) {
      if (window.getSelection().empty) {  // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {  // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {  // IE?
      document.selection.empty();
    }
  }
  // let sizeEl = $('#size');
  // $('.sizeEl').click(function() {
  //   let fSize = sizeEl.options[sizeEl.selectedIndex].value;
  //   if (sTextEl != null) {
  //     if (sTextEl.rangeCount) {
  //       console.log('inside rangecount');
  //       var e = document.createElement('p');
  //       e.innerHTML = sText;
        
  //       // console.log(e.innerHTML);
  //       range.deleteContents(); // Deletes selected text…
  //       range.insertNode(e); // … and inserts the new element at its place
  //       sTextEl = null;
  //       sText = '';
  //     }
  //   }
  // });

  // function changeFont(font) {
  //   var sel = window.getSelection(); // Gets selection
  //   if (sel.rangeCount) {
  //     // Creates a new element, and insert the selected text with the chosen font inside
  //     var e = document.createElement('span');
  //     e.style = 'font-family:' + font.value + ';';
  //     e.innerHTML = sel.toString();

  //     // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
  //     var range = sel.getRangeAt(0);
  //     range.deleteContents(); // Deletes selected text…
  //     range.insertNode(e); // … and inserts the new element at its place
  //   }
  // }
}]);


