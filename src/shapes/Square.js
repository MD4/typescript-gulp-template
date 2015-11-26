/**
 * Represent a square with a given size
 */
var Square = (function () {
    /**
     * Constructor
     * @param size Square size
     */
    function Square(size) {
        this.size = size;
    }
    Square.prototype.getSurface = function () {
        return Math.pow(this.size, 2);
    };
    return Square;
})();
exports.Square = Square;
