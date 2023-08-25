function deducer(obj, self) {
    switch (obj.key) {
        case "plus":
          return self + obj.value;
        case "minus":
          return self - obj.value; 
        case "times":
          return self * obj.value;
        case "dividedBy":
          if (obj.value >= 0) {
            return Math.floor(self/obj.value);
          } else {
            return Math.celi(self/obj.value);
          }
      }
  }
  
  function zero(value=0) {
    if (value == 0) {
      return 0;
    } else {
      return deducer(value, 0)
    }
  }
  
  function one(value=1) {
    if (value == 1) {
      return 1;
    } else {
      return deducer(value, 1)
    }
  }
  function two(value=2) {
    if (value == 2) {
      return 2;
    } else {
      return deducer(value, 2)
    }
  }
  function three(value=3) {
    if (value == 3) {
      return 3;
    } else {
      return deducer(value, 3)
    }
  }
  function four(value=4) {
    if (value == 4) {
      return 4;
    } else {
      return deducer(value, 4)
    }
  }
  function five(value=5) {
    if (value == 5) {
      return 5;
    } else {
      return deducer(value, 5)
    }
  }
  function six(value=6) {
    if (value == 6) {
      return 6;
    } else {
      return deducer(value, 6)
    }
  }
  function seven(value=7) {
    if (value == 7) {
      return 7;
    } else {
      return deducer(value, 7)
    }
  }
  function eight(value=8) {
    if (value == 8) {
      return 8;
    } else {
      return deducer(value, 8)
    }
  }
  function nine(value=9) {
    if (value == 9) {
      return 9;
    } else {
      return deducer(value, 9)
    }
  }
  
  function plus(value) {
    return {value:value, key:"plus"}
  }
  function minus(value) {
    return {value:value, key:"minus"}
  }
  function times(value) {
    return {value:value, key:"times"}
  }
  function dividedBy(value) {
    return {value:value, key:"dividedBy"}
  }