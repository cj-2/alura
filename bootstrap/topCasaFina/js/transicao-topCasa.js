$('#menu').on('show.bs.collapse',function()
  {
    $('.topCasa').css('transform', 'translate(-50%, 10%)');
  });

$('#menu').on('hide.bs.collapse',function()
  {
    $('.topCasa').css('transform', 'translate(-50%, -50%)');
  });
