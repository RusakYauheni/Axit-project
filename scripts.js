$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    var elem1 = $('.tabs__info-container')[0],
	    elem2 = $('.tabs__info-container')[1],
	    elem3 = $('.tabs__info-container')[2],
	    img1 = $('.tabs__image')[0],
	    img2 = $('.tabs__image')[1],
	    img3 = $('.tabs__image')[2],
	    tab1 = $('#tab1'),
	    tab2 = $('#tab2'),
	    tab3 = $('#tab3');
    function addingClass(a,b,c,d,e) {
    	$(a).addClass('not-showing');
    	$(b).addClass('not-showing');
    	$(c).addClass('not-showing');
    	$(d).addClass('not-showing');
    	$(e).addClass('tabs__tab--orange-color');
    }
    function removingClass(a,b,c,d) {
    	$(a).removeClass("not-showing");
    	$(b).removeClass("not-showing");
    	$(c).removeClass('tabs__tab--orange-color');
    	$(d).removeClass('tabs__tab--orange-color');
    }
    $('#tab1').on('click', function(event) {
    	addingClass(elem2,elem3,img2,img3,tab1);
    	removingClass(elem1,img1,tab2,tab3);
    });
    $('#tab2').on('click', function(event) {
    	addingClass(elem1,elem3,img1,img3,tab2);
    	removingClass(elem2,img2,tab1,tab3);
    });
    $('#tab3').on('click', function(event) {
    	addingClass(elem1,elem2,img1,img2,tab3);
    	removingClass(elem3,img3,tab1,tab2);
    });

});
