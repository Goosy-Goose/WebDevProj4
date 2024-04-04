var randomizeButton = document.getElementById("goCrazyAhhhh");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

var names = ["Grumpy Cat", "Trollface", "Doge", "Nyan Cat", "Kermit the frog sipping tea", "Jealous Girlfriend", "Poorly drawn Nick Cage", "Aliens guy from the History Channel", "Philosoraptor", "Triumphant Baby", "WHO TURGLED", "Guy eating cereal", "pepe? is pepe an old meme?", "none pizza left beef", "none pizza left beef none pizza left beef none pizza left beef none pizza left beef none pizza left beef none pizza left beef none pizza left beef none pizza left beef none pizza left beef"];

var characteristics = [" is a Hufflepuff, they're very good finders!", " is a Gryffindor.", " is a Slytherin", " is a [the smart harry potter house]", " stole their shoelaces from the president.", " can haz cheeseburger.", "'s base are belong to us.", " will never give you up, let you down, run around, or desert you.", " knows who Leeroy Jenkins is. Which is a good thing because I don't.", " has a power level over 9000", " is a badger badger badger badger.", " is kinda DERP lol.", " kinda lieks ice creaaammm.", " is gonna get hit with the full power of the shoop da woop.", " reminds them of narwhals narwhals swimming in the ocean.", " has a pretty cool mustache tattoo."]


randomizeButton.addEventListener("click", function(){
    var currentInputText = inputElement.value;
    generate(currentInputText);
    restyle();
});

function generate(incUserInput) {
    var namesIndex = Math.floor(Math.random() * names.length);
    var characIndex = Math.floor(Math.random() * characteristics.length);
    console.log(names[namesIndex]);
    console.log(characteristics[characIndex]);
    if (incUserInput.length == 0){
        incUserInput = "[BRO YOU DIDNT PUT A NAME IN]"
    }
    outputParagraph.innerText = names[namesIndex] + " thinks that " + incUserInput + characteristics[characIndex];

}

function restyle() {
    var randR = Math.random() * 255;
    var randG = Math.random() * 255;
    var randB = Math.random() * 255;
    var alph = Math.random() * (0.4) + 0.3;
    var txtDeco = Math.random();
    console.log(txtDeco);
    var randOutputColor = "rgba(" + randR + "," + randG + "," + randB + "," + alph +")";
    outputParagraph.style.backgroundColor = randOutputColor;
    outputParagraph.style.letterSpacing = Math.random() * 10 + "px";
    if (txtDeco < 0.5) {
        outputParagraph.style.textDecoration = "none";
    } else if (txtDeco < 0.8){
        outputParagraph.style.textDecoration = "underline";
    } else if (txtDeco < 0.95){
        outputParagraph.style.textDecoration = "overline";
    } else {
        outputParagraph.style.textDecoration = "line-through";
    }
}