/**
 * Capitalize the first letter of a string
 * @returns {string}
 */
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}