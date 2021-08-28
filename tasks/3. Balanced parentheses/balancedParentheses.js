export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
   let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < inputString.length; i++) {

        
        if (inputString[i] === '(' || inputString[i] === '{' || inputString[i] === '[' ) {
            stack.push(inputString[i]);
        }
        
        else {
            let last = stack.pop();

            if (inputString[i] !== map[last]) {return false};
        }
    }
    
        if (stack.length !== 0) {return false};

    return true;
}
