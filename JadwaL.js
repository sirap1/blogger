<!--
document.write('<height="200" behavior="scroll" scrollamount="1" direction="up" onmouseover="this.stop();" onmouseout="this.start();">');
var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var myDays = [
'<i class="fa fa-caret-square-o-right"></i>Minggu <i class="fa fa-caret-square-o-right"></i><br/><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div><div class="varis">One Piece</div>', 
'<i class="fa fa-caret-square-o-right"></i>Senin <i class="fa fa-caret-square-o-right"></i><br/>-<br/>-<br/>-<br/>', 
'<i class="fa fa-caret-square-o-right"></i>Selasa <i class="fa fa-caret-square-o-right"></i><br/>-<br/>-<br/>-', 
'<i class="fa fa-caret-square-o-right"></i>Rabu <i class="fa fa-caret-square-o-right"></i><br/><div class="varis">-</div><div class="varis">-</div><div class="varis">Boruto: Naruto Next Generations</div><div class="varis">-</div>', 
'<i class="fa fa-caret-square-o-right"></i>Kamis <i class="fa fa-caret-square-o-right"></i><br/><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div>', 
'<i class="fa fa-caret-square-o-right"></i>Jum"at <i class="fa fa-caret-square-o-right"></i><br/><div class="varis">anjing</div><div class="varis">wanjing</div>', 
'<i class="fa fa-caret-square-o-right"></i>Sabtu <i class="fa fa-caret-square-o-right"></i><br/><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div><div class="varis">-</div>'];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var thisDay = date.getDay(),
thisDay = myDays[thisDay];
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
document.write(thisDay);
document.write('<div class="as">' + day + ' ' + months[month] + ' ' + year + '</div>');
document.write('');
//-->