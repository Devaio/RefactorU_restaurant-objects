$(function(){
// var cereal = new FoodItem('Cereal', 120, true, false, true);
// var chicken = new FoodItem('Chicken', 180, false, true, true);
// var radish = new FoodItem('Radish', 50, true, true, true);

// cereal.toString();
// chicken.toString();
// radish.toString();

/////Restaurant
//Constructors

//@param name             string
//@param cal              number
//@param veg              boolean
//@param gluFree          boolean
//@param citFree          boolean
var FoodItem = function(name, cal, veg, gluFree, citFree) {
	this.name = name;
	this.calories = cal;
	this.vegan = veg;
	this.gluten = gluFree;
	this.citrus = citFree;
};

FoodItem.prototype.create = function() {
	var item =  ['.foodIngredient', '{name}'.supplant(this)];;
		$('.menuItem').append(Creatable.create(item));
};

FoodItem.prototype.toString = function() {
	return '\n' + this.name + '\nCalories: ' + this.calories
};

//@param name                string
//@param description         string
//@param items               array
var Drink = function(name, description, price, items) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.items = items;
};

Drink.prototype.toString = function() {
	return '\nA ' + this.name + ', ' + this.description +': \n' + this.items.toString();
};

Drink.prototype.isVegan = function() {
	for(var i=0; i<(this.items).length; i++) {
		if(!(this.items[i].vegan)){
			return this.vegan = 'no';
		}
	}
};

Drink.prototype.isGlutenFree = function() {
	for(var i=0; i<(this.items).length; i++) {
		if(!(this.items[i].gluten)){
			return this.gluten = 'no';
		}
	}
};	

Drink.prototype.isCitrusFree = function() {
	for(var i=0; i<(this.items).length; i++) {
		if(!(this.items[i].citrus)){
			return this.citrus = 'no';
		}
	}
};

Drink.prototype.create = function() {
	var item =  ['.drinkItem', '{name}'.supplant(this)];
		$('.drinkList').append(Creatable.create(item));
};

//@param name                string
//@param description         string
//@param price               number
//@param items               array
var Plate = function(name, description, price, items){
	this.name = name;
	this.description = description;
	this.price = price;
	this.items = items;
};

Plate.prototype.toString = function() {
	var vegan = this.vegan;
	var gluten = this.gluten;
	var citrus = this.citrus;
	if(vegan == undefined) {
		vegan = 'yes'
	}
	else{vegan = 'no'}
	if(gluten == undefined) {
		gluten = 'yes'
	}
	else{gluten = 'no'}
	if(citrus == undefined) {
		citrus = 'yes'
	}
	else{citrus = 'no'}
	return ('\nA ' + this.name + ', ' + this.description +': \n' + this.items.toString() + '\nVegan: ' + vegan + '\nGluten Free: ' + gluten + '\nCitrus Free: ' + citrus +  '\n Price: $' + this.price + '\n')
};

Plate.prototype.isVegan = function() {
	for(var i=0; i<(this.items).length; i++) {
		if(!(this.items[i].vegan)){
			return this.vegan = 'no'
		}
	}
};		

Plate.prototype.isGlutenFree = function() {
	for(var i=0; i<(this.items).length; i++) {
		if(!(this.items[i].gluten)){
			return this.gluten = 'no'
		}
	}
};	

Plate.prototype.isCitrusFree = function() {
	for(var i=0; i<(this.items).length; i++) {
		if(!(this.items[i].citrus)){
			return this.citrus = 'no'
		}
	}
};	

Plate.prototype.create = function() {
	var item =  ['.menuItem', '{name}'.supplant(this)];
		$('.menuList').append(Creatable.create(item));
};

//@param plates              array
var Order = function(plates){
	this.plates = plates;
};

Order.prototype.toString = function() {
	return "Current order: " + this.plates.toString();
};

Order.prototype.create = function() {
	var item =  ['.order', '{0}'.supplant(this)];
		$('.currentOrder').append(Creatable.create(item));
};

//@param plates              array
var Menu = function(plates){
	this.plates = plates;
};

Menu.prototype.toString = function(){
	return "Menu: \n" + this.plates.toString();
};

Menu.prototype.create = function() {
	for(var i=0; i<(this.plates).length; i++){
	var menuCreate = ['.addItem.menuList', 
		{
		'data-vegan': '{vegan}'.supplant(this.plates[i]),
		'data-gluten': '{gluten}'.supplant(this.plates[i]),
		'data-citrus': '{citrus}'.supplant(this.plates[i]) 
		},
		[
		['p.price', '{price}'.supplant(this.plates[i])],
		['p.itemName', '{name}'.supplant(this.plates[i])],
		['p.description', '{description}'.supplant(this.plates[i])]
		]];
			$('.menuContainer').append(Creatable.create(menuCreate));
	}
};

//@param drinks              array
var DrinkMenu = function(drinks){
	this.drinks = drinks;
};

DrinkMenu.prototype.toString = function(){
	return "Menu: \n" + this.drinks.toString();
};

DrinkMenu.prototype.create = function() {
	for(var i=0; i<(this.drinks).length; i++){
		var drinkCreate = ['.addItem.drinkList', 
		[['p.price', '{price}'.supplant(this.drinks[i])],
		['p.itemName', '{name}'.supplant(this.drinks[i])],
		['p.description', '{description}'.supplant(this.drinks[i])]
		]];
			$('.drinkContainer').append(Creatable.create(drinkCreate));
	}
};

//@param name                string
//@param description         string
//@param menu                object
var Restaurant = function(name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
};

Restaurant.prototype.toString = function(){
	return this.name + ', ' + this.description + '.\n Our Menu:\n' + this.menu.toString();
};

Restaurant.prototype.create = function() {
	// var item =  $('<div class="titleBar"><h1 class="mainHeader">{name}</h1></div>'.supplant(this));
		var item = ['.titleBar', [
		['h1.mainHeader', '{name}'.supplant(this)]
		]];
	$('body').prepend(Creatable.create(item));
};

//@param dietary Preference  string
var Customer = function(dietaryPreference){
	this.diet = dietaryPreference;
};

////
///Items!
//
//Instantiating FoodItems
var tortilla = new FoodItem('Tortilla', 200, true, false, true);
var chicken = new FoodItem('Chicken', 180, false, true, true);
var orange =  new FoodItem('Orange', 50, true, true, false);
var tequila = new FoodItem('Tequila', 80, true, true, true);
var whiskey = new FoodItem('Whiskey', 80, true, true, true);
var avocado = new FoodItem('Avocado', 50, true, true, true);
var peppers = new FoodItem('Peppers', 50, true, true, true);
var onions = new FoodItem('Onions', 40, true, true, true);
var cherry =  new FoodItem('Cherry', 5, true, true, true);
var garlic = new FoodItem('Garlic', 20, true, true, true);
var beans = new FoodItem('Beans', 175, true, true, true);
var rice =  new FoodItem('Rice', 180, true, true, true);
var pork = new FoodItem('Pork', 180, false, true, true);
var lime =  new FoodItem('Lime', 10, true, true, false);

//Instantiating Drinks
var margarita = new Drink('Margarita', 'a Mexican classic made with tequila and lime', 4.50, [tequila, lime]);
margarita.isVegan();
margarita.isCitrusFree();
margarita.isGlutenFree();

var tequilaSun = new Drink('Tequila Sunrise', 'tequila with orange and cherry', 4.50, [tequila, orange, cherry])
tequilaSun.isVegan();
tequilaSun.isCitrusFree();
tequilaSun.isGlutenFree();

var whiskeyOldFash = new Drink('Whiskey Old Fashioned', 'whiskey with muddled cherry and orange', 6.00, [whiskey, cherry, orange]);
whiskeyOldFash.isVegan();
whiskeyOldFash.isCitrusFree();
whiskeyOldFash.isGlutenFree();

//Instantiating Plates
var burrito = new Plate('Burrito', 'a delicious Mexican dish made with chicken, rice, and beans', 8, [tortilla, chicken, rice, beans]);
burrito.isVegan();
burrito.isCitrusFree();
burrito.isGlutenFree();

var guacamole = new Plate('Guacamole', 'an avocado based dip', 6.50, [avocado, garlic, lime]);
guacamole.isVegan();
guacamole.isCitrusFree();
guacamole.isGlutenFree();

var fajitas = new Plate('Fajitas', 'torillas, meat, and veggies', 12.50, [tortilla, garlic, lime, chicken, peppers, onions]);
fajitas.isVegan();
fajitas.isCitrusFree();
fajitas.isGlutenFree();

var carnitas = new Plate('Carnitas', 'slow cooked pork and tortillas', 11.50, [pork, garlic, lime, onions, tortilla]);
carnitas.isVegan();
carnitas.isCitrusFree();
carnitas.isGlutenFree();

var pollo = new Plate('Pollo Loco', 'marinated chicken with rice and beans', 8.50, [chicken, lime, rice, beans]);
pollo.isVegan();
pollo.isCitrusFree();
pollo.isGlutenFree();

var tortillaSoup = new Plate('Tortilla Soup', 'savory Mexican soup', 5.00, [tortilla, garlic, onions, beans]);
tortillaSoup.isVegan();
tortillaSoup.isCitrusFree();
tortillaSoup.isGlutenFree();

// Instantiating Menus and Restaurant
var drinkMenu = new DrinkMenu ([whiskeyOldFash, margarita, tequilaSun]);
var restaurantMenu = new Menu([burrito, guacamole, fajitas, carnitas, pollo, tortillaSoup]);
var restaurantName = new Restaurant('Yalcin\'s Burrito Dojo', 'a Mexican experience', restaurantMenu);

//Initializing the UI
restaurantName.create();
restaurantMenu.create();
drinkMenu.create();

//Ordering Items from menu
var totalPrice = 0;
var addOrderItemName;
var addOrderItemPrice;

$(document).on('click', '.addItem', function(){
	var OrderItemName = $(this).children('.itemName').text();
	addOrderItemName = $(this).children('.itemName').text();

	var OrderItemPrice = $(this).children('.price').text();
	addOrderItemPrice = $(this).children('.price').text();

	$('.orderConfirm').append('Would you like to add ' + OrderItemName + ' to your order?');
	$('.lightbox').show();
});

//Updating Current Order
var priceUpdate = function() {
	$('.currentOrderTotal').remove();
	var createTotalPrice = ['p.currentOrderTotal', ('Order Total: ' + totalPrice)]
		$('.orderTotal').append(Creatable.create(createTotalPrice))
}

var orderUpdate = function() {
	$('.lightbox').hide();
	$('.orderConfirm').text('');
	var createOrderUpdate = [[
	['p.currentOrderItemName', addOrderItemName],
	['p.currentOrderItemPrice', addOrderItemPrice]
	]]
		$('.currentOrder').append(Creatable.create(createOrderUpdate))
}

$(document).on('click', '.confirm-button', function(){
	orderUpdate();
	totalPrice += Number(addOrderItemPrice);
	priceUpdate();
});

$(document).on('click', '.cancel-button', function(){
	orderUpdate();
	$('.currentOrder').children().last('p').remove();
	$('.currentOrder').children().last('p').remove();
});

$(document).on('click', '.currentOrderItemName', function(){
	var priceDelete = $(this).next('.currentOrderItemPrice').text();
	totalPrice -= Number(priceDelete)
	priceUpdate();
	$(this).next('.currentOrderItemPrice').remove();
	$(this).remove();

});

//Filtering based on diet - need to add filtering functionality
var dietDisplay = function() {
	if($('.dietSelect').val() === 'vegan'){
		$('.dietIndicator').remove();
		if(($('.addItem').data('vegan')) === "no") {
			$(this).parent().siblings('.menuContainer').find('div[data-vegan="{vegan}"]').children('.itemName').after('<span class="dietIndicator"> v</span>');
		}
	}
	else if($('.dietSelect').val() === 'gluten'){
		$('.dietIndicator').remove();
		if(($('.addItem').data('gluten')) === "no") {
			$(this).parent().siblings('.menuContainer').find('div[data-gluten="{gluten}"]').children('.itemName').after('<span class="dietIndicator"> g</span>');
		}
	}
	else if($('.dietSelect').val() === 'citrus'){
		$('.dietIndicator').remove();
		if(($('.addItem').data('citrus')) === "{citrus}") {
			$(this).parent().siblings('.menuContainer').find('div[data-citrus="{citrus}"]').children('.itemName').after('<span class="dietIndicator"> c</span>');
		}
	}
	else {
		$('.dietIndicator').remove();
	}
}

$(document).on('change', '.dietSelect', dietDisplay)


});