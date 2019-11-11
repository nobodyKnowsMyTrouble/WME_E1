function hide(col) {
  table = document.getElementById("world_data_table");
  rows = table.rows;
  var th = rows[0].getElementsByTagName("TH")[col];
  th.classList.toggle('hide');
  for (i = 1; i < (rows.length); i++) {
    var td = rows[i].getElementsByTagName("TD")[col];
    td.classList.toggle('hide');
  }
}
