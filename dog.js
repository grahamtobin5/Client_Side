function Dog(name, breed, year, month, day) {
    this.name = name;
    this.breed = breed;
    this.birthdate;
    this.setBirthDate = function(year,month,day) {
        this.birthdate = new Date(year,month - 1, day);
    }
    this.setBirthDate(year,month,day);
    
    this.sit = function()
    {
        return this.name + " " + "is sitting";
    } 
    this.fetch = function()
    {
        return this.name + " " + "is fetching";
    }
    this.shake = function()
    {
        return this.name + " " + "is shaking hands";
    }
    this.down = function() {
        return this.name + " " + "is lying down"; 
    }
                             
}
