const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    email:null,
    isActive:false,
    activeClass: 'email',
    errorClass: 'error'
  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      if(!this.email) {
        this.errors.push("メールアドレスを入力してください");
        this.isActive=true;
      } else if(!this.validEmail(this.email)) {
        this.errors.push("正しい表記ではありません。sample@example.com");
        this.isActive=true;
      }
      if(!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
  }
})
