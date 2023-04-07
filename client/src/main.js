import Vue from 'vue'
import App from './App.vue'
import $ from "jquery"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');


(function validate() {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms)
    .forEach(function (form) {
      document.getElementById("save").addEventListener('click', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
      }else{
          form.classList.remove('was-validated')
      }
      })
    })
  })()

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });



  // function makeSortable(table) {
  //   var th = table.tHead,
  //     i;
  //   th && (th = th.rows[0]) && (th = th.cells);
  //   if (th)
  //     i = th.length;
  //   else
  //     return;
  //   while (--i >= 0)
  //     (function(i) {
  //       var dir = 1;
  //       $(th[i]).append('  <i class="fa fa-caret-up  hidden" data-order="up"></i>');
  //       $(th[i]).append('  <i class="fa fa-caret-down hidden" data-order="down"></i>');
  //       th[i].addEventListener('click', function() {
  //         sortTable(table, i, (dir = 1 - dir));
  //         if ((1 - dir) === 1) {
  //           $(th).find('i[data-order=down],i[data-order=up]').addClass('hidden');
  //           $(th[i]).find('i[data-order=up]').removeClass('hidden');
  //         } else {
  //           $(th).find('i[data-order=down],i[data-order=up]').addClass('hidden');
  //           $(th[i]).find('i[data-order=down]').removeClass('hidden');
  //         }
  //       });
  //     }(i));
  // }
  
  // function makeAllSortable(parent) {
  //   parent = parent || document.body;
  //   var t = parent.getElementsByTagName('table'),
  //     i = t.length;
  //   while (--i >= 0) {
  //     if (t[i].attributes['data-sortable'] !== undefined) {
  //       makeSortable(t[i]);
  //     }
  //   }
  // }
  // makeAllSortable();

  

 