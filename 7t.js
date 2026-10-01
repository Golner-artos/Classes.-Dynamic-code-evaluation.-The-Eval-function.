console.log("Задание 1")

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
 
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0] || "";
    this.lastName = parts.slice(1).join(" ") || "";
  }
}
const person = new Person("Руслан", "Игоровичь");
console.log("До изменения:", person.fullName);
console.log("firstName:", person.firstName, "| lastName:", person.lastName);
 
person.fullName = "John Smith";
console.log("\nПосле person.fullName = \"John Smith\":");
console.log("fullName:", person.fullName);
console.log("firstName:", person.firstName, "| lastName:", person.lastName);


console.log("\nЗадание 2");
class BankAccount {
  #balance; 

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }
 
  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Сумма пополнения должна быть положительным числом.");
      return;
    }
    this.#balance += amount;
    console.log(`Пополнение на ${amount}. Баланс: ${this.#balance}`);
  }
 
  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Сумма снятия должна быть положительным числом.");
      return;
    }
    if (amount > this.#balance) {
      console.log(`Недостаточно средств. Текущий баланс: ${this.#balance}, попытка снять: ${amount}`);
      return;
    }
    this.#balance -= amount;
    console.log(`Снято ${amount}. Баланс: ${this.#balance}`);
  }
 
  getBalance() {
    return this.#balance;
  }
}
 
const account = new BankAccount(1000);
console.log("Начальный баланс:", account.getBalance());
account.deposit(500);
account.withdraw(300);
account.withdraw(10000); 
console.log("Конечный баланс:", account.getBalance());
 
try {
  account.balance = 999999; 
  console.log("Попытка прямого присвоения account.balance =", account.balance);
  console.log("Реальный приватный баланс (через getBalance):", account.getBalance());
} catch (error) {
  console.log("Ошибка при попытке изменить баланс напряму:", error.message);
}

console.log("\nЗадание 3");
class User {
  static #userCount = 0; 
 
  constructor(name, email) {
    this.name = name;
    this.email = email;
    User.#userCount++;
    this.id = User.#userCount; 
  }
 
  getInfo() {
    return `Пользователь #${this.id}: ${this.name} (${this.email})`;
  }
 
  static getUserCount() {
    return User.#userCount;
  }
}
 
const user1 = new User("Ольга", "olena@example.com");
const user2 = new User("Максим", "maksym@example.com");
const user3 = new User("Ирина", "iryna@example.com");
 
console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());
 
console.log("\nПроверка уникальности идентификаторов:");
console.log("user1.id =", user1.id);
console.log("user2.id =", user2.id);
console.log("user3.id =", user3.id);
console.log("Общее количество созданных пользователей:", User.getUserCount());
