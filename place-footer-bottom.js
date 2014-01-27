window.onload = function () { 
$screenHeight = $(window).height(); //current window height
$headerInner = $('#header').innerHeight(); //current #header inner height (include padding) 
$contentInner = $('#content').innerHeight(); //current #content inner height (include padding)
$contentHeight = $('#content').height(); //current #content height (exclude padding) 
$footerInner = $('#footer').innerHeight(); //current #footer inner height (include padding)

//this calculates how many px should be the min-height of #content to place bottom the footer
$('#content').css('min-height', (
        //current window height - current #header inner -
        $screenHeight - $headerInner -
            //(current #content inner - current #content height) = the #content padding +
            (($contentInner - $contentHeight) +
                //current #footer inner
                $footerInner)) 
                    + 'px');
};
