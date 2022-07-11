console.log('Vue OK', Vue);

vue.config.devtools = true;

const root = new Vue ({
    el: '#root',
    data: {
      firstName : 'Gianluca',
      lastName: 'Correale',
      frameWork: 'Vue Js'
    }
})