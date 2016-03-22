/**
 * Created by Alaa on 3/20/2016.
 */
$(document).ready(function () {
  $("#pw").hide();
  /*todo: check if value of email available in db upon confirmation allow enter password else redirect to sign up */
  $("#signin").click(function () {
    $("#pw").slideDown().focus;
    return false;
  });
});
