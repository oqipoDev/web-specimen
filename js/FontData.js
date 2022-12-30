class FontData{
    constructor(data){
        this.fonts = data;

        this.families = [this.fonts[0].family];
        for(let i = 1; i < this.fonts.length; i++){
            if (this.fonts[i].family != this.fonts[i-1].family){
                {
                    this.families = this.families.concat(this.fonts[i].family);
                }

            } 
        }
    }
    
    getFonts(){
        return this.fonts;
    }
}