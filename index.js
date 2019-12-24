const fs = require('fs');
 const osmosis = require('osmosis');
 var savedData = [];

//Courses search
osmosis
  .get('https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/')//link
  .find('.title:first(15)')
  .set('Название:')
     .data(function(data) {
      console.log(data);
      savedData.push(data);
   })
   .done(function() {
      fs.writeFile('saving.json', JSON.stringify( savedData, null, 4), function(err) {
        if(err) console.error(err);
        else console.log('Data Saved to saving.json file');
      })
});

//Time Search
osmosis
  .get('https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/')//link
  .find('.content-summary:first(15)')
 .set('Время:')
     .data(function(data) {
      console.log(data);
      savedData.push(data);
   })
   .done(function() {
      fs.writeFile('saving.json', JSON.stringify( savedData, null, 4), function(err) {
        if(err) console.error(err);
        else console.log('Data Saved to saving.json file');
      })
});