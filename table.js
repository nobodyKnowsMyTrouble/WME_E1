  function testFunction(){
     var table = '<table>';
        table += '<thead>';
          table += '<tr>';
            table += '<th>'; table += 'Vorname'; table += '</th>';
            table += '<th>'; table += 'Nachname'; table += '</th>';
            table += '<th>'; table += 'Adresse'; table += '</th>';
          table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
          table += '<tr>';
            table += '<td>'; table += 'Peter'; table += '</td>';
            table += '<td>'; table += 'Hallo'; table += '</td>';
            table += '<td>'; table += 'Add1'; table += '</td>';
          table += '</tr>';
          table += '<tr>';
            table += '<td>'; table += 'Felix'; table += '</td>';
            table += '<td>'; table += 'Koch'; table += '</td>';
            table += '<td>'; table += 'Add2'; table += '</td>';
          table += '</tr>';
        table += '</tbody>';
      table += '</table>';
    document.getElementById('table_place_holder').append(table);
  }
