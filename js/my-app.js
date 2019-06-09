// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
		{
		path: '/calendario/',
    	url: 'calendario.html',
    	name: 'calendario',
  		},

		
		{
		path: '/list/',
    	url: 'list.html',
    	name: 'list',
  		},
		
		
		
		{
		path: '/menu/',
    	url: 'menu.html',
    	name: 'menu',
  		},
		
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		
		
		
		
		
		
		
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

