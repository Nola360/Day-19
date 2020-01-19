class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }


}

// Extent Person class with customer class
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // Call Person or Parent lass Constructor with super()
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;

  }

  // Static method
  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Smith', '444-444-4444', 'Advance');

console.log(john);
console.log(john.greeting());

// Static - use acutal class name
console.log(Customer.getMembershipCost());
