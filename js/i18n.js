function update_content(){
	
	if(i18next.isInitialized){
	
		$('.i18n').localize();
		
		
		
	}
	
	if(i18next.language === "en"){
		
			document.getElementById("lang-flag").src = "img/flags/es.png";
		
	}else{
			
			document.getElementById("lang-flag").src = "img/flags/en.png";
		
	}
	
}

function switch_lang(){
	
	if(i18next.language === "es"){
		
		i18next.changeLanguage("en");
		
	}else{
		
		i18next.changeLanguage("es");
	
	}
	
}

function i18n_init(){
	
	let i18nconfig = 
	{
		fallbackLng: 'en',
		backend: {
			loadPath: './../locales/{{lng}}.json'
		}
	};


	i18next.use(i18nextXHRBackend)
	  .use(i18nextBrowserLanguageDetector)
	  .init(i18nconfig, function(err, t ) {
		    jqueryI18next.init(i18next, $);
			$('.i18n').localize();
	});
	
	
	
	i18next.on('languageChanged', () => {
	  update_content();
	});
	
}
