 // get icon bar links and search form
var els = document.querySelectorAll( '.icon-bar a' );
var searchForm = document.querySelector( '.search-form' );

els.forEach( function( el ) {
	
	el.onclick = function() {
		
    	// change active icon
		document.querySelector ('.active' ).classList.remove( 'active' );
        el.classList.add( 'active' );
		
		// check if search icon has been clicked
		if ( el.classList.contains( 'search' ) ) {
			
			searchForm.children[0].focus(); // put focus on text input
			
			// toggle search form
			if ( searchForm.style.opacity == 0 ) { 
				searchForm.style.opacity = 1;
			} else {
				searchForm.style.opacity = 0;
			}
			
		} else { // another icon has been clicked
			
			searchForm.style.opacity = 0;
			searchForm.children[0].value = '';
			
		}
		
    }
	
});
    