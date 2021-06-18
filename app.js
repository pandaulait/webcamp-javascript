// var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)) {
//   alert('グー・チョキ・パーのいずれかを入力して下さい');
//   user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// }


var comment1 = '最初はグー。じゃん、けん、';
var comment2 = 'いきますわよ！';
var comment3 = 'グー、チョキ、パーで答えてね！！！！';
alert(comment2);
var user = 3;
while (user == 3){
  var user1 = prompt(comment1);
  user = getUser(user1);

  comment1 = comment3 + comment1;
}
function getYou() {
  var you = Math.floor(Math.random() * 3);
  return you;
}










function getUser(user){
  if (user == 'グー') {
    user = 0;
  } else if (user == 'チョキ') {
    user = 1;
  } else if (user == 'パー') {
    user = 2;
  } else {
    user = 3;
  }
  return user;
}


