class Lotto {
  constructor() {
    this.numbers = []; // 로또 번호 저장 배열
  }

  // 중복 체크
  createNumbers(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return;
      }
    }
    this.numbers.push(target);
  }

  // 랜덤 번호 생성
  generateRandomNumber() {
    while (true) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      if (this.numbers.length === 6) {
        break;
      }
      this.createNumbers(this.numbers, randomNum);
    }
  }

  //      오름차순
  displayNumbers() {
    return this.numbers.sort((a, b) => {
      return a - b;
    });
  }
}

const lotto = new Lotto();

lotto.generateRandomNumber();
console.log(lotto.displayNumbers());
