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
		path: '/form/',
    	url: 'form.html',
    	name: 'form',
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
		
		{
		path: '/adopta/',
    	url: 'adopta.html',
    	name: 'adopta',
  		},
		
		
		
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		
		
		{
		path: '/rastrear/',
    	url: 'rastrear.html',
    	name: 'rastrear',
  		},
		
		{
		path: '/lugares/',
    	url: 'lugares.html',
    	name: 'lugares',
  		},
		
		{
		path: '/veterinario/',
    	url: 'veterinario.html',
    	name: 'veterinario',
  		},
		
		{
		path: '/actividades/',
    	url: 'actividades.html',
    	name: 'veterinario',
  		},
		
		{
		path: '/chat/',
    	url: 'chat.html',
    	name: 'chat',
  		},
		
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

