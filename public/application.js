var $ = (function() {
  var $ = function(selector, context) {
    if(typeof selector == 'function')
      document.addEventListener('DOMContentLoaded', selector, false);
    else if(selector instanceof Element)
      return new kQuery([selector]);
    else {
      context = context || document;
      return new kQuery([].slice.call(context.querySelectorAll(selector)), selector);
    }
  }

  function kQuery(dom, selector){ this.dom = dom || []; this.selector = selector || '' }

  $.fn = {
    bind: function(event, callback) {
      return this.each(function(el) {
        el.addEventListener(event, callback, false);
      });
    },

    each: function(callback) {
      this.dom.forEach(callback);
      return this;
    },

    hide: function() {
      return this.each(function(el) {
        el.style.display = 'none';
      });
    },

    next: function() {
      var dom = this.dom.map(function(el){ console.log(el);  return el['nextElementSibling'] });
      return new kQuery(dom);
    },

    show: function() {
      return this.each(function(el) {
        el.style.display = 'block';
      });
    },

    toggle: function() {
      return this.each(function(el) {
        console.log($(el).visible());
        $(el).visible() ? $(el).show() : $(el).hide();
      });
    },

    visible: function() {
      var elem = this.dom[0];
      var width = elem.offsetWidth,
			height = elem.offsetHeight;
      return (width === 0 && height === 0);
    }
  };

  kQuery.prototype = $.fn;

  return $;
}());

$(function() {
  SyntaxHighlighter.all();

  $('li.file_path').bind('click', function(e) {
    e.preventDefault();
    $(this).next().toggle();
  });
});
