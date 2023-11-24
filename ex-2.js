// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true; // value>4000 = true ; john = 4001
let isWeekday = true; // Monday-Friday = true / Saturday -Sunday = False ; john=friday
let hasBoughtProductFromITCategory = false; // true = ever bought IT ; john=never = false
let hasAttendedDiscountEvent = true; // true = ever joined
let isPlatinum = false; // platinum rank = true

let hasPromotion; // true = receive

hasPromotion =
  (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory) ||
  isPlatinum;

console.log(hasPromotion);
