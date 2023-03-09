let pounds=document.querySelector(".pounds"),
    kilograms=document.querySelector(".kilograms"),
    grams=document.querySelector(".grams"),
    ounces=document.querySelector(".ounces"),
    form=document.querySelector("form");

    form.addEventListener('input', wieghtConvert);

    function wieghtConvert(e){
        if (e.target.classList.contains('pounds')){
            let x=pounds.value;
            kilograms.value=(x*0.45359237).toFixed(2);
            grams.value=(x*453.592).toFixed(2);
            ounces.value=(x*15.9999869488).toFixed(2);
        };

        if (e.target.classList.contains('kilograms')){
            let x=kilograms.value;
            pounds.value=(x*2.2046208235381).toFixed(2);
            grams.value=(x*999.99918430000013814).toFixed(2);
            ounces.value=(x*35.27393317660965266).toFixed(2);
        };

        if (e.target.classList.contains('grams')){
            let x=grams.value;
            kilograms.value=(x*0.0010000010787).toFixed(2);
            pounds.value=(x*0.0022046249999751977).toFixed(2);
            ounces.value=(x*0.035274).toFixed(2);
        };

        if (e.target.classList.contains('ounces')){
            let x=pounds.value;
            kilograms.value=(x*0.02834955370563059518).toFixed(2);
            grams.value=(x*28.34955370563059418).toFixed(2);
            pounds.value=(x*0.062500067418749999382).toFixed(2);
        };
    }