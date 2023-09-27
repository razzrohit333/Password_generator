class Password {
    constructor() {
      this.nchar =
        this.upc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      this.lcp = "abcdefghijklmnopqrstuvwxyz"
      this.num = "1234567890"
      this.schar = `!@#$%&*[]_-<>?/`
    }
    funnypass() {
      let arr = [`password`,
        `incorrect`,
        `your name`,
        `bhai yer`,
        `Myname`,
        `Username`,
        `Pass@word`,
        `123456`,
        `MyLove`,
        `Sorry`,
        `admin`,
        `Iamsleep`,
        `maiNahiBataunga`]
      let pass = arr[Math.floor(Math.random() * arr.length)]
      return pass;
    }
    weakpass() {
      let arr = `${this.upc}, ${this.lcp}`
      let pass = ""
      for (let i = 1; i <= 10; i++) {
        let char = Math.floor(Math.random()
          * arr.length + 1);
  
        pass += arr.charAt(char)
      }
  
      return pass;
    }
    strongpass() {
      let arr = `${this.upc}, ${this.lcp},${this.schar}`
      let pass = ""
      for (let i = 1; i <= 16; i++) {
        let char = Math.floor(Math.random()
          * arr.length + 1);
  
        pass += arr.charAt(char)
      }
  
      return pass;
    }
    superstrongpass() {
      let arr = `${this.upc}, ${this.lcp},${this.schar},${this.num}`
      let pass = ""
      for (let i = 1; i <= 20; i++) {
        let char = Math.floor(Math.random()
          * arr.length + 1);
  
        pass += arr.charAt(char)
      }
  
      return pass;
    }
  }
  let Gpass = new Password()
  let weak_btn = document.getElementById("weak-btn")
  let strong_btn = document.getElementById("strong-btn")
  let sstrong_btn = document.getElementById("superstrong-btn")
  let funny_btn = document.getElementById("funny-btn")
  let s_pass = document.getElementById("display-pass")
  
  weak_btn.addEventListener("click", function() {
    s_pass.innerHTML = Gpass.weakpass();
  })
  strong_btn.addEventListener("click", function() {
    s_pass.innerHTML = Gpass.strongpass();
  })
  sstrong_btn.addEventListener("click", function() {
    s_pass.innerHTML = Gpass.superstrongpass();
  })
  funny_btn.addEventListener("click", function() {
    s_pass.innerHTML = Gpass.funnypass();
  })
  
  function copyText() {
      let copyTextarea = document.getElementById("display-pass");
      copyTextarea.select();
      document.execCommand("copy");
  
      let copyButton = document.getElementById("copyButton");
      copyButton.innerHTML = "Copied!";
      
      setTimeout(function() {
          copyButton.innerHTML = "Copy";
      }, 2000);
  }
  