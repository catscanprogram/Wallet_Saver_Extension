
window.onload = (function() {

	//WALLET SAVER STARTS HERE

	//variables for various functions
	var pricesArray = ["$ This Month's Rent", "$ Student Loans","$ Car Payment", "$ Future Home", "$ A Week's Meals", "$ Credit Card Bills"];
	//var price = Math.floor(Math.random() * pricesArray.length);

	//change the color of the array elements and add a class to the
	//add a span class to the array elements in order to attatch css and change the color
	for(var i=0; i<pricesArray.length;i++){
		pricesArray[i] = `<span class="price-tag" style="color: red">${pricesArray[i]}</span>`
		//= $(pricesArray[i]).css({'color': "red"});
		//`<span class="color">${word}</span>`
 	}

	var messagesArray = ["Are You Sure You Want To Buy This?", "Look at All this Stuff You Don't Need", "Money Pit", "How To Go Broke 101", "No. Bad."];
	var message = Math.floor(Math.random() * messagesArray.length);

	//This function blurs (censors) all images on the webpage
	//FOR ANY WEBSITE
	$('img').css({'filter': 'blur(8px)'});

	//Disables all buttons - FOR ANY WEBSITE
	$(':button').prop('disabled', true);

	$('h1').each( function() {
		$(this).html(messagesArray[message]);
	});
	
	//these function looks for any prices listed on the website and changes them to
	//things your money is better spent on
	//FOR ANY WEBSITE
	$("*").each( function() { //go through each paragraph
		var curr = $(this).html();
		
		//put randomization in separate function
		curr = curr.replace(/(\$[0-9]+\.[0-9]{2})+/g, 
			function() {
				var price = Math.floor(Math.random() * pricesArray.length);
				//result = `<span class="color" style="color: red">${pricesArray[price]}</span>`
				result = pricesArray[price];
				return result;
			}
		);
		
		console.log(curr);
		
		//first attempt below
		//console.log( $(this).text() );
		//$.trim($(this).text())

		 //var words = $(this).text().split(' ');	// split words into an array
		 //console.log(words);
		// var output = ''; //output string
		// for (i = 0; i >+ words.length; i++){ //iterate through each words
		// 	if (words[i].charAt(0) == "$"){ //if the first character of the word string is a dolla sign
		// 		output += pricesArray[price]; //add a new price
		// 	} else { output += words[i]; //else keep what it said }
		// }

		$(this).html(curr);	//update paragraph text
	});

	//this function changes the color of the prices - SPECIFIC TO ANTHRO
	// $('.c-product-meta__current-price').css( {
	// 	'color': 'red'
	// });

	//changes the prices - SPECIFIC TO ANTHRO
	// $('.c-product-meta__current-price').each( function() {
	// 	$(this).html(pricesArray[price]);
	// });
	
	//this function changes the text of the add to cart button
	//SPECIFIC TO ANTRHO
	// $('.c-product-add-to-cart__text').each( function() {
	// 	$(this).html("You Wish");
	// });

	//$("button > span:contains('Basket')").parent().addClass("hide_button");
	//$("button > span:contains('Add to Basket')").parent().attr('disabled', true);
	//$("button:contains('Add to Basket')").closest('button').attr('disabled', true);
	////$(":button > [id*='bag']").prop('disabled', true);
	//$(":button > span:contains('ADD TO BROWN BAG')").prop('disabled', true);


	//this function disables the add to cart button
	//SPECIFIC TO ANTRHO
	// $('.js-add-to-cart').attr('disabled', true);

	// //not working
	// $('.o-button-basket:hover').css( {
	// 	'background-color': '#009999'
	//   });


	//________________________________________


	// * selects everything
	/* $('*').css( {
		'background-color': 'rgb(255,192,203)'
	}); */

	//change all hyperlinks to go to a certain place
	// $('a').attr ('href', 'http://www.facebook.com/heckingdoggos');


	//change all paragraphs to puppies
/* 	$('p').each( function() {
		$(this).html('puppies');
	}); */

	//change all list elements in the specified tag to say puppies and link to google
/* 	$('#mw-panel li').each( function() {
		$(this).html('<a href= "http://www.google.com"> puppies');
	}); */


	//select all paragraphs
/* 	$('p').each( function() {
		var words = $(this).text().split(' '); //split words into an array
		var output = " ";
		for (i=0; i< words.length; i++){

		}
	}) */
	
	//grow text size
	// $('hi').animate( {'font-size': '72px'}, 3000);

// do not delete the line below!
})();

