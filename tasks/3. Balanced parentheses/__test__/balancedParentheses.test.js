import 'chai/register-expect';
import { areParenthesesBalanced } from '../balancedParentheses';

describe('areParenthesesBalanced() function', () => {
  it('should return FALSE if there are more opening parentheses', function() {

    const input = '((((((())';

    expect(areParenthesesBalanced(input)).to.equal(false);
  });

  it('should return FALSE if there are more closing parentheses', function() {

    const input = '()))';

    expect(areParenthesesBalanced(input)).to.equal(false);
  });

  it('should return FALSE if the numbers are equal, but the order is wrong', function() {

    const input = '())(()';

    expect(areParenthesesBalanced(input)).to.equal(false);
  });

  it('should return TRUE if the parentheses are correct', function() {

    const input = '(()((())()))';

    expect(areParenthesesBalanced(input)).to.equal(true);
  });

  it('should return TRUE if the input contains 0 parentheses', function() {

    const input = 'there are no parentheses';

    expect(areParenthesesBalanced(input)).to.equal(true);
  });
});
