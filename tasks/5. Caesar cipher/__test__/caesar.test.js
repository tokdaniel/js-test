import 'chai/register-expect';
import { encryptCaesar } from '../caesar';

describe('encryptCaesar() function', () => {

  const input = 'GAMEOFTHRONES';

  it('should encrypt \'GAMEOFTHRONES\' to HBNFPGUISPOFT with key 1', function () {

    expect(encryptCaesar('GAMEOFTHRONES', 1)).to.equal('HBNFPGUISPOFT');
  });

  it('should encrypt \'GAMEOFTHRONES\' to JDPHRIWKURQHV with key 3', function () {

    expect(encryptCaesar('GAMEOFTHRONES', 3)).to.equal('JDPHRIWKURQHV');
  });

  it('should rotate/wrap around letters', function () {

    expect(encryptCaesar('XYZ', 4)).to.equal('BCD');
  });
});
