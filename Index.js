(function() {
    var placesAutocomplete = places({
      appId: 'your api code',
      apiKey: 'your api key',
      container: document.querySelector('#address'),
      templates: {
        value: function(suggestion) {
          return suggestion.name;
        }
      }
    }).configure({
      type: 'address'
    });
    placesAutocomplete.on('change', function resultSelected(e) {
      document.querySelector('#state').value = e.suggestion.administrative || '';
      document.querySelector('#city').value = e.suggestion.city || '';
      document.querySelector('#zip').value = e.suggestion.postcode || '';
    });
  })();
