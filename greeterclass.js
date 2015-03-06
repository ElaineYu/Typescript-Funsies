var Greetz = (function () {
    function Greetz(greeting) {
        this.greeting = greeting;
    }
    Greetz.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greetz;
})();
;
var greeter = new Greetz("Snog");
var str = greeter.greet();
document.body.innerHTML = str;
