var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(_name, _lastname) {
        this.name = _name;
        if (_lastname) {
            this.lastname = _lastname;
        }
    }
    ;
    User.prototype.showName = function () {
        if (this.lastname) {
            var header = document.getElementById('header');
            header.innerHTML = "Привет " + this.name + " " + this.lastname;
        }
    };
    return User;
}());
var oleg = new User('Олег', 'Олегович');
oleg.showName();
//двойной тип
var id;
console.log(id = 3);
console.log(id = 'oleg');
var obj = { id: 1, name: 'Яблоко' };
console.log(obj);
var item = { id: 2, name: 'Яблоко', price: 30 };
console.log(item);
//assertion
var header1 = document.getElementById('header');
var header2 = document.getElementById('header');
console.log(header1);
//Кортеж
var users;
//Только для чтения : readonly
//Перечисление enum
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var current = Season.Summer;
console.log(current); // 2
current = Season.Autumn; // изменение значения
//Абстрактные классы
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.prototype.getArea = function () {
        console.log("Not Implemented");
    };
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        var square = this.width * this.height;
        console.log("area =", square);
    };
    return Rectangle;
}(Figure));
var someFigure = new Rectangle(20, 30);
someFigure.getArea(); // area = 600
var emp = {
    id: 1,
    name: 'oleg'
};
//instence of - проверка объекта на принаджлежность к классу
