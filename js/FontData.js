class FontData{
	constructor(data){
		this.fonts = data;
		this.families = new Array();

		this.fonts[0].id = 0;
		var currentFamily = [this.fonts[0]];
		
		for(let i = 1; i < this.fonts.length; i++){
			this.fonts[i].id = i;

			if(this.fonts[i].family != this.fonts[i-1].family || i + 1 == this.fonts.length){
				this.families = this.families.concat(new FontFamily(currentFamily));
				currentFamily = [];
			}

			currentFamily = currentFamily.concat(this.fonts[i]);
		}
	}
}

class FontFamily{
	constructor(fontList){
		this.name = fontList[0].family;
		this.slant = {italic: false, normal: false};
		this.weight = [false, false, false,
						false, false, false,
						false, false, false];
		this.fonts = [];

		for (let i = 0; i < fontList.length; i++) {
			//Register slant
			if (fontList[i].style.slanted != undefined){
				this.slant.italic = true;
				//ToDo distinguish oblique/italics
			}
			else this.slant.normal = false;
			
			if(fontList[i].style.weight){
				var weightID = Math.trunc((fontList[i].style.weight / 100) - 1);
				//ToDo Stop ignoring half weights

				this.weight[weightID] = true;
			}
			this.fonts = this.fonts.concat(fontList[i].id);
		}
	}
}

function getWeightInFamily(weight, family){
	var weightID = Math.trunc((weight / 100) - 1);
	if (weightID > 9 || weightID < 0 ) throw console.error(`Weight "${weight}" is not valid`);;
	return family.weight[weightID];
}