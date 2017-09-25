// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "mailmask",
				defaults = {
					placeholder: '[at]'
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don't want to alter the default options for
				// future instances of the plugin
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
				init: function () {
					var placeholder = String(this.settings.placeholder).replace('<','&lt;').replace('>','&gt;');
					$('a[href^="mailto:"]').each(function(){
						var innerhtml = $(this).html();
						$(this).html( innerhtml.replace('@',placeholder) );
						$(this).attr("href",$(this).attr("href").replace('@','[at]'));
						$(this).removeAttr("target");
					});
					$(document).on('click','a[href^="mailto:"]',function(e){
						if($(this).attr("href").indexOf('[at]') > 0){
							e.preventDefault();
							$(this).attr("href",$(this).attr("href").replace('[at]','@'));
							$(this)[0].click();
						}
					});
				}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );
