// && -> AND operation - all conditions needs to be true
// || -> OR operations - any one condition should be true

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true
if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting to user')
} else if (isVerified || isGuest){
    console.log('free')
}else{
    console.log('contact admin')
}