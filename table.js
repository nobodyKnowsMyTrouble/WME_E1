function createTable() {
  var data ="id,name,birth rate per 1000,cell phones per 100,children per woman,electricity consumption per capita,internet user per 100\n1,Brazil,16.405,90.01936334,1.862,2201.808724,39.22\n2,Canada,10.625,70.70997244,1.668,15119.76414,80.17086651\n3,Chile,15.04,97.01862561,1.873,3276.06449,38.8\n4,China,13.536,55.97490921,1.642,2632.724637,28.97659939\n5,Colombia,20.605,92.34584564,2.405,1041.994137,30\n6,Ecuador,20.989,92.84925653,2.69,1078.038961,24.6\n7,Egypt,24.83,69.43661504,2.919,1607.918763,24.28\n8,Finland,11.127,144.1530224,1.86,15241.61194,82.53133098\n9,France,12.21,95.44434226,1.978,7339.946832,69.0633593\n10,Germany,8.136,127.4188883,1.376,6753.05764,79.48523153\n11,Iceland,14.738,107.6604456,2.123,51259.18763,92.13686385\n12,Iraq,31.585,65.47478839,4.276,1086.323768,1.047516616\n13,Japan,8.201,91.8955442,1.359,7838.005685,77.38468963\n14,Kazakhstan,19.775,107.7147692,2.537,4447.142293,17.91457965\n15,Mexico,19.091,74.25785259,2.313,1869.82352,26.34\n16,New Zealand,13.831,108.7301521,2.125,9375.550304,79.82609287\n17,Nigeria,40.134,48.23561006,6.021,119.8151486,20\n18,Peru,21.342,85.86901405,2.545,1043.052601,31.4\n19,Russia,10.828,161.1162887,1.537,6132.978648,29.23584146\n20,Saudi Arabia,23.569,167.3474553,2.898,7430.743897,38\n21,South Africa,22.113,93.33587369,2.5,4532.021902,10.08745979\n22,Sweden,11.72,112.1241184,1.937,14143.01101,91.12326108\n23,United Arab Emirates,14.027,153.7997194,1.903,9998.291079,64\n24,United Kingdom,12.195,130.1742603,1.89,5685.635995,77.79971962\n25,United States,14.191,89.14911634,2.002,12913.71143,71.21181627";
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table id="world_data_table">';
  var hide = 'show/hide: '
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
    }
    table += '<tr>';
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        switch (rowCells[rowCell]) {
          case "id": table += "ID"; break;
          case "name": table += 'Country <i class="fas fa-chevron-up" onclick="sortTable(1, \'asc\')"></i> <i class="fas fa-chevron-down"  onclick="sortTable(1, \'desc\')"></i>'; break;
          case "birth rate per 1000":
            table += "birth rate / 1000";
            hide += '<a href="javascript:void(0);" onclick="hide('+rowCell+')">birth rate</a> | ';
            break;
          case "cell phones per 100":
            table += "cellphones / 100";
            hide += '<a href="javascript:void(0);" onclick="hide('+rowCell+')">cellphones</a> | ';
            break;
          case "children per woman":
            table += "children / women";
            hide += '<a href="javascript:void(0);" onclick="hide('+rowCell+')">children / women</a> | ';
            break;
          case "electricity consumption per capita":
            table += "electric usage";
            hide += '<a href="javascript:void(0);" onclick="hide('+rowCell+')">electric usage</a> | ';
            break;
          case "internet user per 100":
            table += "internet usage";
            hide += '<a href="javascript:void(0);" onclick="hide('+rowCell+')">internet usage</a> | ';
            break;
          default:
            table += rowCells[rowCell];
            hide += '<a href="javascript:void(0);" onclick="hide('+rowCell+')">'+rowCells[rowCell]+'</a> | ';
        }
      table += '</th>';
      } else {
        table += '<td>' + rowCells[rowCell] + '</td>';
      }
    }
    table += '</tr>';
    if (singleRow === 0) {
      table += '</thead>';
      table += '<tbody>';
    }
  }
  table += '</tbody>';
  table += '</table>';
  document.getElementById('table_place_holder').innerHTML = table;
  hide = hide.substr(0, hide.length-2);
  for (var doc of document.getElementsByClassName('showhide')){
    doc.innerHTML = hide;
  }
}
createTable();
