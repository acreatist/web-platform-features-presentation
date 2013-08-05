(function () {
  var users = [
    {name: 'user_1', avatar: 'img/avatar_1.png'},
    {name: 'user_2', avatar: 'img/avatar_2.jpg'}
  ];

  var userTemplate = document.querySelector('#user_template').content;

  users.forEach(function (user) {
    var userTemplateCopy = userTemplate.cloneNode(true);

    userTemplateCopy.querySelector('.avatar').src = user.avatar;
    userTemplateCopy.querySelector('.name').textContent = user.name;

    document.body.appendChild(userTemplateCopy);
  });
})();
