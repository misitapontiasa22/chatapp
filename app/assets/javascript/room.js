$(function() {
    $('#new_room_message').on('ajax:success', function(a, b,c ) {
      $(this).find('input[type="text"]').val('');
    });
});

$('chat-input').click(function() {
  window.top.location.reload(true)
});
