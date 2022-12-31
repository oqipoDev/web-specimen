function GenerateFontSidebar(fonts, sidebar){
	for(let i = 0; i < fonts.families.length; i++)
	{
		var link = document.createElement("div");
		link.className = "sidebarFontButton";
		link.style.cssText = `font-family: ${fonts.families[i].name}; font-size: 1.5ex line-height: 1em;`;
		link.innerHTML = `<div onmouseenter="ChangeFont(${i})">${fonts.families[i].name}</div>`
		
		sidebar.appendChild(link);
	}
	
	return sidebar;
}

function checkFont(font){
	var container = document.createElement("span");
	container.innerHTML = Array(20).join("mix");
	container.style.cssText = [
		'position:absolute',
		'width:auto',
		'font-size:128px',
		'left:-9999px'
	  ].join(' !important;');

	var sansDef = getFontWidth('sans-serif', container);
	var serifDef = getFontWidth('serif', container);
	var sansMod = getFontWidth(`"${font}", sans-serif`, container);
	var serifMod = getFontWidth(`"${font}", serif`, container);

	if (sansDef == sansMod && serifDef == serifMod) return false;
	else return true;
}

function getFontWidth(font, span){
	span.style.fontFamily = font;
	
	document.body.appendChild(span);
	var width = span.clientWidth;
	document.body.removeChild(span);

	return width;
}

function generateStyleSpecimen(){
	
	const spacingNames = [' UltraCondensed', ' ExtraCondensed', ' Condensed', ' SemiCondensed', 'Normal', ' SemiExpanded', ' Expanded', ' ExtraExpanded', ' UltraExpanded'];
	const spacing = ['UltraCondensed', 'ExtraCondensed', 'Condensed', 'SemiCondensed', 'Normal', 'SemiExpanded', 'Expanded', 'ExtraExpanded', 'UltraExpanded'];
	const weightNames = [' Thin', ' ExtraLight', ' Light', ' Regular', ' Medium', ' SemiBold', ' Bold', ' ExtraBold', ' Black'];
	const weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900']
	const styleNames = ['Normal', ' Italic', ' Oblique'];
	const styles = ['Normal', 'Italic', 'Oblique'];
	
	var topDiv = document.createElement('div');
	
	for (let iSp = 0; iSp < spacing.length; iSp++){

		var spacingDiv = document.createElement('div');
		spacingDiv.className = 'specimenStretch' + spacing[iSp];

		spacingDiv.innerHTML = `<h2 class="stretchSpecimenTitle">${spacingNames[iSp]}</h2>`;

		var SpLayoutDiv = document.createElement('div');
		SpLayoutDiv.className = 'stretchSpecimenLayout';

		spacingDiv.appendChild(SpLayoutDiv);
	
		for (let iSt = 0; iSt < styles.length; iSt++){
			var stylesDiv = document.createElement('div');
			stylesDiv.className = 'specimenStyle' + styles[iSt];
			
			stylesDiv.innerHTML = `<h3 class="styleSpecimenTitle">${styleNames[iSt]}</h3>`;

			var StLayoutDiv = document.createElement('div');
			StLayoutDiv.className = 'styleSpecimenLayout';

			stylesDiv.appendChild(StLayoutDiv);
			
			for (let iWe = 0; iWe < weights.length; iWe++){
				var weightPar = document.createElement('p');
				weightPar.className = 'specimenWeight' + weights[iWe];
				weightPar.innerHTML = `<span class="fontName">Archivo</span>${weightNames[iWe]}`;
				
				StLayoutDiv.appendChild(weightPar);
			}

			SpLayoutDiv.appendChild(stylesDiv);
		}
		
		topDiv.appendChild(spacingDiv);
	}

	return topDiv;
}