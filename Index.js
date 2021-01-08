(function() {
    var placesAutocomplete = places({
      appId: 'plYC1BM3BEN3',
      apiKey: '513bb572fd7c9ea69e10e6a47f1a850c',
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