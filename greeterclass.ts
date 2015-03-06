class Greetz {
  constructor(public greeting: string) {}
  greet(){
    return "<h1>" + this.greeting + "</h1>";
  }
};


var greeter = new Greetz("Snog");
var str = greeter.greet();
document.body.innerHTML = str;
