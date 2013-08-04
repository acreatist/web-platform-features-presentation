(function () {
  var users = [
    {name: 'user_1', avatar: ''},
    {name: 'user_2', avatar: ''}
  ];

  var userTemplate = document.querySelector('#user_template').content;

  users.forEach(function (user) {
    var userTemplateCopy = userTemplate.cloneNode(true);
    userTemplateCopy.querySelector('img').src = user.avatar;
    userTemplateCopy.querySelector('.name').textContent = user.name;
    document.body.appendChild(userTemplateCopy);
  });
})();
