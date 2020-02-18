var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(type) {
        this.type = type;
    }
    Animals.prototype.display = function () {
        console.log(this.type);
    };
    return Animals;
}());
var animals1 = new Animals("Herbivores");
var animals2 = new Animals("Carnivores");
var animals3 = new Animals();
animals1.display();
animals2.display();
animals3.display();
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(type, color) {
        var _this = _super.call(this, type) || this;
        _this.color = color;
        return _this;
    }
    Dogs.prototype.run = function () {
        console.log("Dog is running" + this.color + " " + this.type);
    };
    Dogs.prototype.play = function () {
        console.log("Dog is playing");
    };
    return Dogs;
}(Animals));
var dogs = new Dogs("carnivores", "Black");
dogs.run();
dogs.play();
