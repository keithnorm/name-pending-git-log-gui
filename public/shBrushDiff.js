/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		this.regexList = [
			{ regex: /^\s\+{1,3}.*$/gm,		css: 'color2 insertion' },
			{ regex: /^\s\-{1,3}.*$/gm,		css: 'color2 deletion' },
			{ regex: /^\s.*$/gm,			  css: 'color1 whatever' },
			{ regex: /^@@.*@@$/gm,			css: 'variable' },
			{ regex: /^\s\+[^\+]{1}.*$/gm,	css: 'string' },
			{ regex: /^\s\-[^\-]{1}.*$/gm,	css: 'color2 insertion' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['diff', 'patch'];

	SyntaxHighlighter.brushes.Diff = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
