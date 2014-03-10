var gotoPage = function(pagename){
	
	var type = ".html";
	
    var page = '';

    switch(pagename) {
        case 'home':
        	page = 'directenergy-dashboard';
            break;
        case 'electricity':
        	page = 'directenergy-dashboard-electricity';
            break;
        case 'add':
        	page = 'directenergy-dashboard-addnew';
            break;
    }
    
    window.location.href = "./"+page + type ;
};

