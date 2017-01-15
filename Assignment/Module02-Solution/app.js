(function () {
  'use strict'
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.listItemsToBuy = ShoppingListCheckOffService.listItem();
    //console.log(listItems);

    toBuy.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItems(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var AlreadyBought = this;
    AlreadyBought.showItem = ShoppingListCheckOffService.getBoughtItem();
    //console.log(AlreadyBought.showBoughtItem);
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItem = [
      {
        name: 'Cookies',
        quantity: '2 bags'
      },
      {
        name: 'Milk',
        quantity: '3 box'
      },
      {
        name: 'Suggar',
        quantity: '2 kg'
      },
      {
        name: 'Rice',
        quantity: '10 bags'
      },
      {
        name: 'cabage',
        quantity: '2'
      }
    ];
    //console.log(listItems);
    var boughtItem = [];

    service.listItem = function () {
      return toBuyItem;
    };

    service.boughtItems = function (itemIndex) {
      boughtItem.push(toBuyItem[itemIndex]);
      toBuyItem.splice(itemIndex,1);

    };

    service.getBoughtItem = function () {
      return boughtItem;
    };

  }
})();
