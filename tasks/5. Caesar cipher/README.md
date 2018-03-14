# Caesar's cipher

Implement a function **that takes a string** and a **numeric key**, and **returns the caesar encrypted** version of that string **shifting** the **english ABC** with the key. No whitespaces only **consecutive letters** in mind.

* Caesar cipher is a method in which each letter in the plaintext is replaced by a letter with some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.
* Letters should wrap around, so for instance 'Z' becomes 'A' with 1 as key, and so on.

## Examples:

* ```encodeCaesar("GAMEOFTHRONES", 1) // returns "HBNFPGUISPOFT"```
* ```encodeCaesar("GAMEOFTHRONES", 3) // returns "JDPHRIWKURQHV"```

## Tips & Tricks
* You should find a convenient solution for rotating the letters around

## Bonus
* Think of how you could use your encoding function to decode (knowing the key)
* Think of how you could crack the code without knowing the key (google is a big help)
