//let upcAPIKey = "8E082ECC9EAD693BB11E31C1EB21236A";
//let upcQuery = "Potato Chips, Barbecue Flavored"
//var upc = "028400003001";

//let appKey ="d3019f542b6384af51a48ae0f1353fd9"
//let appId ="9135dd78"

let appKey ="628dd7994463a0a41713fd9b0d407e2f"
let appId ="63cc6512"
  $(document).keyup(function(event){
    if (event.which === 13){
    var upc = document.getElementById('searchbox').value;
    console.log(upc);
      $.ajax({
          url: "https://trackapi.nutritionix.com/v2/search/item?x-app-id=" + appId + "&x-app-key=" + appKey + "&upc=" + upc,
          dataType: "json",
          complete: function(data) {
            if (data.responseJSON.foods === undefined){
            window.alert("Error. Try a different UPC. Or maybe we ran out of API calls.");
            } else {
            var foodData = data.responseJSON.foods[0];
            var foodName = foodData.food_name;
            var brandName = foodData.brand_name;
            var servingQuantity = foodData.serving_qty;
            var servingUnit = foodData.serving_unit;
            var servingWeight = foodData.serving_weight_grams;
            var calories = foodData.nf_calories;
            var totalFat = foodData.nf_total_fat;
            var saturatedFat = foodData.nf_saturated_fat;
            var cholesterol = foodData.nf_cholesterol;
            var sodium = foodData.nf_sodium;
            var totalCarbs = foodData.nf_total_carbohydrate;
            var dietaryFiber = foodData.nf_dietary_fiber;
            var sugars = foodData.nf_sugars;
            var protein = foodData.nf_protein;
            var potassium = foodData.nf_potassium;
            var ingredients = foodData.nf_ingredient_statement;
            //console.log('foodData' + document.getElementById('foodData'));
            //document.getElementById('foodData').innerHTML = foodData;
            console.log(document.getElementById('foodName'));
            document.getElementById('foodName').innerHTML = foodName;
            console.log(document.getElementById('brandName'));
            document.getElementById('brandName').innerHTML = brandName;
            //console.log(document.getElementById('servingQuantity'));
            //document.getElementById('servingQuantity').innerHTML = servingQuantity;
            console.log(document.getElementById('servingWeight'));
            document.getElementById('servingWeight').innerHTML = servingWeight + "g";
            console.log(document.getElementById('calories'));
            document.getElementById('calories').innerHTML = calories + " kcal";
            console.log(document.getElementById('totalFat'));
            document.getElementById('totalFat').innerHTML = totalFat + "g";
            console.log(document.getElementById('saturatedFat'));
            document.getElementById('saturatedFat').innerHTML = saturatedFat + "g";
            console.log(document.getElementById('cholesterol'));
            document.getElementById('cholesterol').innerHTML = cholesterol + "mg";
            console.log(document.getElementById('sodium'));
            document.getElementById('sodium').innerHTML = sodium  + "mg";
            console.log(document.getElementById('totalCarbs'));
            document.getElementById('totalCarbs').innerHTML = totalCarbs + "g";
            console.log(document.getElementById('dietaryFiber'));
            document.getElementById('dietaryFiber').innerHTML = dietaryFiber + "g";
            console.log(document.getElementById('sugars'));
            document.getElementById('sugars').innerHTML = sugars + "g";
            console.log(document.getElementById('protein'));
            document.getElementById('protein').innerHTML = protein + "g";
            console.log(document.getElementById('potassium'));
            if (potassium === null) {
              document.getElementById('potassium').innerHTML = "0mg";
            } else {
              document.getElementById('potassium').innerHTML = potassium + "mg";
            }
            console.log(document.getElementById('ingredients'));
            document.getElementById('ingredients').innerHTML = ingredients;
            }
          }
      });
    };
});